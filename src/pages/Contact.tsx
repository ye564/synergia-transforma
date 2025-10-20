import { useState } from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
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
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nombre,
          from_email: formData.email,
          telefono: formData.telefono,
          message: formData.mensaje,
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
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            ¿Tienes dudas sobre educación, apoyo psicológico o empleabilidad? Escríbenos por WhatsApp o correo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} className="text-primary hover:underline">320 324 0400</a>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                      <a href="mailto:yefersonolcunche@gmail.com" className="text-primary hover:underline">
                        yefersonolcunche@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Atención</h3>
                      <p className="text-muted-foreground">100% virtual en Colombia</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Envíanos un Mensaje</h3>
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
