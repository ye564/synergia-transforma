import { Link } from "react-router-dom";
import { Scale, FileCheck, GraduationCap, Briefcase, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import legalImg from "@/assets/asesoria-legal.jpg";

const AsesoriaLegal = () => {
  const servicios = [
    {
      icon: GraduationCap,
      title: "Académico y Laboral",
      description:
        "Orientación sobre derechos laborales, convalidación y homologación de estudios, certificaciones oficiales",
    },
    {
      icon: FileCheck,
      title: "RETHUS",
      description: "Acompañamiento completo en el proceso RETHUS: requisitos, documentación y seguimiento",
    },
    {
      icon: Building,
      title: "Formalización de Emprendimientos",
      description: "Requisitos legales para formalizar tu negocio, trámites y permisos necesarios",
    },
    {
      icon: Scale,
      title: "Asesoría General",
      description: "Consultas sobre trámites administrativos y orientación jurídica básica",
    },
  ];

  const proceso = [
    {
      numero: "01",
      title: "Consulta inicial",
      description: "Evaluamos tu caso y necesidades específicas",
    },
    {
      numero: "02",
      title: "Revisión documental",
      description: "Analizamos tu documentación y situación actual",
    },
    {
      numero: "03",
      title: "Plan de acción",
      description: "Definimos pasos a seguir y cronograma",
    },
    {
      numero: "04",
      title: "Acompañamiento",
      description: "Te guiamos en cada trámite hasta resolverlo",
    },
  ];

  const faqs = [
    {
      pregunta: "¿Qué necesito para homologar estudios?",
      respuesta:
        "Para homologar estudios realizados en el extranjero necesitas: certificados originales apostillados, traducción oficial si están en otro idioma, cédula/pasaporte, y formularios específicos según tu caso. Te ayudamos a reunir toda la documentación, completar formularios y hacer seguimiento ante las entidades competentes (Ministerio de Educación o instituciones educativas según aplique).",
    },
    {
      pregunta: "¿Cómo es el proceso RETHUS?",
      respuesta:
        "El RETHUS es el Registro de Talento Humano en Salud. Incluye: verificación de títulos ante el Ministerio de Educación, registro ante el Ministerio de Salud, y obtención del código RETHUS. Te acompañamos en todo el proceso: revisión de documentos, diligenciamiento de formatos, seguimiento de trámites y resolución de inconsistencias.",
    },
    {
      pregunta: "¿Acompañan diligencias administrativas?",
      respuesta:
        "Sí, te orientamos en trámites ante entidades como Ministerio de Educación, Ministerio de Salud, Secretarías de Educación, Cámaras de Comercio, entre otras. Aunque no hacemos el trámite por ti, te explicamos cada paso, revisamos tu documentación y te acompañamos virtualmente durante el proceso.",
    },
    {
      pregunta: "¿Cuánto tiempo toma un proceso de homologación?",
      respuesta:
        "El tiempo varía según el tipo de trámite y la entidad. Una convalidación educativa puede tomar de 3 a 6 meses. El RETHUS puede demorar de 2 a 4 meses. Durante la consulta inicial te damos un estimado según tu caso específico y te mantenemos informado del avance.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Asesoría Legal y Trámites, con Respaldo
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Orientación jurídica y acompañamiento en trámites académicos/laborales, homologaciones, convalidaciones
                y RETHUS. Avanza con seguridad legal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
                  <a href="https://wa.me/3203240400" target="_blank" rel="noopener noreferrer">
                    Solicitar asesoría
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/contacto">Hablar por WhatsApp</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={legalImg}
                  alt="Revisión de documentos para trámite legal en Colombia"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué cubrimos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Qué Cubrimos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Asesoría especializada en trámites académicos, laborales y de emprendimiento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <servicio.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{servicio.title}</h3>
                  <p className="text-muted-foreground text-sm">{servicio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nuestro Proceso de Acompañamiento
            </h2>
            <p className="text-lg text-muted-foreground">
              Te explicamos cada paso y te acompañamos hasta resolver tu trámite
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {proceso.map((paso, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-medium">
                    <span className="text-2xl font-heading font-bold text-primary-foreground">{paso.numero}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{paso.title}</h3>
                  <p className="text-muted-foreground text-sm">{paso.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos que atendemos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Casos que Atendemos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Trámites Académicos</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Homologación de títulos extranjeros</li>
                    <li>• Convalidación de estudios</li>
                    <li>• Validación de bachillerato</li>
                    <li>• Certificados de estudio</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Trámites Laborales</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Orientación sobre derechos laborales</li>
                    <li>• RETHUS (sector salud)</li>
                    <li>• Certificaciones profesionales</li>
                    <li>• Permisos de trabajo</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Emprendimientos</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Registro mercantil</li>
                    <li>• RUT y obligaciones tributarias</li>
                    <li>• Permisos y licencias</li>
                    <li>• Contratos básicos</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Casos Especiales</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Migrantes y refugiados</li>
                    <li>• Víctimas de conflicto</li>
                    <li>• Población vulnerable</li>
                    <li>• Casos urgentes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-muted-foreground">Resuelve tus dudas sobre asesoría legal y trámites</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.pregunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.respuesta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            ¿Necesitas asesoría legal?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agenda una consulta y resuelve tus dudas con nuestros asesores especializados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
              <a href="https://wa.me/3203240400" target="_blank" rel="noopener noreferrer">
                Solicitar asesoría
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/contacto">Contactar por correo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsesoriaLegal;
