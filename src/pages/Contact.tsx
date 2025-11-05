import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  email: z.string().email("Email inválido").max(255, "Máximo 255 caracteres"),
  telefono: z.string().regex(/^[0-9]{10}$/, "Debe ser un número de 10 dígitos"),
  mensaje: z.string().trim().min(1, "El mensaje es requerido").max(1000, "Máximo 1000 caracteres"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", mensaje: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Honeypot check - si el campo "website" tiene contenido, es un bot
    if (formData.website) {
      toast({ title: "¡Gracias!", description: "Pronto nos comunicaremos contigo." });
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "", website: "" });
      return;
    }
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({ 
        title: "Error de validación", 
        description: "Por favor corrige los errores en el formulario.",
        variant: "destructive" 
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const mensajeCompleto = `
FORMULARIO DE CONTACTO

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}

Mensaje:
${formData.mensaje}
      `.trim();

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nombre,
          from_email: formData.email,
          message: mensajeCompleto,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast({ 
        title: "¡Mensaje enviado!", 
        description: "Gracias por contactarnos. Te responderemos pronto." 
      });
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "", website: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({ 
        title: "Error al enviar", 
        description: "No pudimos enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">Contáctanos</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-center">
            ¿Tienes dudas sobre educación, apoyo psicológico o empleabilidad? Escríbenos por WhatsApp o correo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-center">Información de Contacto</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary mx-auto mb-2" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a href={`https://wa.me/573203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} className="text-primary hover:underline">+57 320 324 0400</a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                    <a href="mailto:synergiaintegral@gmail.com" className="text-primary hover:underline">
                      synergiaintegral@gmail.com
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Atención</h3>
                    <p className="text-muted-foreground">100% virtual en Colombia</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6 text-center">Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input 
                      id="nombre" 
                      maxLength={100}
                      value={formData.nombre} 
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} 
                    />
                    {errors.nombre && <p className="text-sm text-destructive">{errors.nombre}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      maxLength={255}
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono (10 dígitos) *</Label>
                    <Input 
                      id="telefono" 
                      type="tel" 
                      maxLength={10}
                      value={formData.telefono} 
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} 
                    />
                    {errors.telefono && <p className="text-sm text-destructive">{errors.telefono}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea 
                      id="mensaje" 
                      rows={4} 
                      maxLength={1000}
                      value={formData.mensaje} 
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} 
                    />
                    {errors.mensaje && <p className="text-sm text-destructive">{errors.mensaje}</p>}
                  </div>
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden">
                    <Label htmlFor="website">Website</Label>
                    <Input 
                      id="website" 
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website} 
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })} 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
