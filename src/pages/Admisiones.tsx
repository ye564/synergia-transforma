import { useState } from "react";
import { CheckCircle, Users, FileText, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const admisionesSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  apellidos: z.string().trim().min(1, "Los apellidos son requeridos").max(100, "Máximo 100 caracteres"),
  email: z.string().email("Email inválido").max(255, "Máximo 255 caracteres"),
  celular: z.string().regex(/^[0-9]{10}$/, "Debe ser un número de 10 dígitos"),
  ciudad: z.string().trim().min(1, "La ciudad es requerida").max(100, "Máximo 100 caracteres"),
  mensaje: z.string().max(1000, "Máximo 1000 caracteres").optional(),
});

const Admisiones = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    celular: "",
    ciudad: "",
    necesidades: [] as string[],
    mensaje: "",
    consentimiento: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const proceso = [
    {
      icon: FileText,
      title: "Formulario de inscripción",
      description: "Completa tus datos básicos y cuéntanos tus necesidades",
    },
    {
      icon: Users,
      title: "Orientación individual",
      description: "Conversamos contigo para definir tu ruta personalizada",
    },
    {
      icon: CheckCircle,
      title: "Entrega de documentos",
      description: "Te indicamos qué documentos necesitas según tu programa",
    },
    {
      icon: Award,
      title: "Matrícula y acompañamiento",
      description: "Iniciamos tu proceso con seguimiento continuo",
    },
  ];

  const necesidadesOpciones = [
    "Formación Educativa",
    "Apoyo Psicológico",
    "Empleabilidad",
    "Emprendimiento",
    "Asesoría Legal",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!formData.consentimiento) {
      toast({
        title: "Error",
        description: "Debes aceptar el consentimiento de datos para continuar",
        variant: "destructive",
      });
      return;
    }

    if (formData.necesidades.length === 0) {
      toast({
        title: "Error",
        description: "Por favor selecciona al menos un servicio de interés",
        variant: "destructive",
      });
      return;
    }

    const result = admisionesSchema.safeParse({
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      email: formData.email,
      celular: formData.celular,
      ciudad: formData.ciudad,
      mensaje: formData.mensaje,
    });

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
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Gracias por tu inscripción!",
      description: "Pronto nos comunicaremos contigo por WhatsApp o correo electrónico.",
    });

    setFormData({
      nombre: "",
      apellidos: "",
      email: "",
      celular: "",
      ciudad: "",
      necesidades: [],
      mensaje: "",
      consentimiento: false,
    });
  };

  const toggleNecesidad = (necesidad: string) => {
    setFormData((prev) => ({
      ...prev,
      necesidades: prev.necesidades.includes(necesidad)
        ? prev.necesidades.filter((n) => n !== necesidad)
        : [...prev.necesidades, necesidad],
    }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Admisiones e Inscripción
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Postúlate a programas con titulación oficial y servicios de apoyo. Inscripción 100% virtual en Colombia.
            Agenda tu orientación gratuita.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Proceso de Admisión
            </h2>
            <p className="text-lg text-muted-foreground">Cuatro pasos sencillos para comenzar tu transformación</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {proceso.map((paso, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <paso.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{paso.title}</h3>
                  <p className="text-muted-foreground text-sm">{paso.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-3">
                    Formulario de Inscripción
                  </h2>
                  <p className="text-muted-foreground">
                    Completa tus datos y nos pondremos en contacto contigo pronto
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        maxLength={100}
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && <p className="text-sm text-destructive">{errors.nombre}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellidos">Apellidos *</Label>
                      <Input
                        id="apellidos"
                        maxLength={100}
                        value={formData.apellidos}
                        onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                        placeholder="Tus apellidos"
                      />
                      {errors.apellidos && <p className="text-sm text-destructive">{errors.apellidos}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@correo.com"
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="celular">Celular (10 dígitos) *</Label>
                      <Input
                        id="celular"
                        type="tel"
                        maxLength={10}
                        value={formData.celular}
                        onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                        placeholder="320 324 0400"
                      />
                      {errors.celular && <p className="text-sm text-destructive">{errors.celular}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input
                      id="ciudad"
                      maxLength={100}
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      placeholder="Tu ciudad en Colombia"
                    />
                    {errors.ciudad && <p className="text-sm text-destructive">{errors.ciudad}</p>}
                  </div>

                  <div className="space-y-3">
                    <Label>¿Qué necesitas? * (Selecciona todas las que apliquen)</Label>
                    <div className="space-y-3">
                      {necesidadesOpciones.map((necesidad) => (
                        <div key={necesidad} className="flex items-center space-x-2">
                          <Checkbox
                            id={necesidad}
                            checked={formData.necesidades.includes(necesidad)}
                            onCheckedChange={() => toggleNecesidad(necesidad)}
                          />
                          <label
                            htmlFor={necesidad}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {necesidad}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                    <Textarea
                      id="mensaje"
                      maxLength={1000}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Cuéntanos más sobre tus objetivos y necesidades..."
                      rows={4}
                    />
                    {errors.mensaje && <p className="text-sm text-destructive">{errors.mensaje}</p>}
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consentimiento"
                      checked={formData.consentimiento}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, consentimiento: checked as boolean })
                      }
                    />
                    <label htmlFor="consentimiento" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Acepto el tratamiento de mis datos personales de acuerdo con la política de privacidad de
                      Synergia Integral. Mis datos serán utilizados únicamente para contactarme y brindarme
                      información sobre los servicios solicitados. *
                    </label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar inscripción
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">¿Prefieres contactarnos directamente?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} target="_blank" rel="noopener noreferrer">
                    WhatsApp: 320 324 0400
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:yefersonolcunche@gmail.com">
                    yefersonolcunche@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos y Becas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Requisitos Generales
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Documento de identidad vigente (cédula o pasaporte)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Certificados de estudios previos (si aplica)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Acceso a internet para clases virtuales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Disposición y compromiso con tu proceso de formación</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Los requisitos específicos varían según el programa. Te los indicaremos durante la orientación.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Becas y Apoyos
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground">
                    Ofrecemos opciones de apoyo financiero para personas en situación de vulnerabilidad:
                  </p>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Descuentos especiales para estudiantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Tarifas diferenciales según situación económica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Planes de pago flexibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Apoyo para población vulnerable</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Durante la orientación evaluamos tu caso para ofrecerte las mejores opciones.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admisiones;
