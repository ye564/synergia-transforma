import { Link } from "react-router-dom";
import { GraduationCap, CheckCircle, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import educacionImg from "@/assets/estudio-virtual.jpg";

const EducacionFormacion = () => {
  const servicios = [
    {
      icon: Award,
      title: "Bachillerato y Técnicos",
      description:
        "En alianza con instituciones avaladas. Obtén titulación oficial reconocida nacionalmente para continuar tu educación superior o mejorar tus oportunidades laborales.",
    },
    {
      icon: BookOpen,
      title: "Validación de Saberes",
      description:
        "Reconocemos tu experiencia laboral y aprendizaje previo. Convierte tus conocimientos y habilidades en certificaciones oficiales.",
    },
    {
      icon: Users,
      title: "Orientación Vocacional",
      description:
        "Elige tu ruta según intereses y metas. Te ayudamos a descubrir tus fortalezas y a tomar decisiones informadas sobre tu futuro académico y profesional.",
    },
    {
      icon: CheckCircle,
      title: "Acompañamiento en Trámites",
      description:
        "Incluye RETHUS cuando aplique. Te guiamos en cada paso del proceso administrativo para que te concentres en aprender.",
    },
  ];

  const beneficios = [
    "Flexibilidad 100% virtual - estudia a tu ritmo",
    "Acompañamiento personalizado durante todo el proceso",
    "Rutas claras hacia empleo o emprendimiento",
    "Titulación oficial reconocida en toda Colombia",
    "Posibilidad de validar experiencia como saberes",
    "Orientación continua en tu desarrollo académico",
  ];

  const faqs = [
    {
      pregunta: "¿Cómo valido el bachillerato de forma legal?",
      respuesta:
        "Ofrecemos programas de validación en alianza con instituciones educativas avaladas por el Ministerio de Educación. El proceso es 100% virtual y te acompañamos en cada paso: desde la inscripción hasta la obtención de tu certificado oficial. Incluye clases virtuales, material de estudio y evaluaciones.",
    },
    {
      pregunta: "¿Qué significa estudiar con titulación oficial?",
      respuesta:
        "Significa que el certificado que obtendrás está respaldado por instituciones educativas reconocidas y avaladas por las autoridades competentes en Colombia. Tu título será válido para continuar estudios superiores, aplicar a empleos y realizar cualquier trámite que lo requiera.",
    },
    {
      pregunta: "¿Reconocen experiencia como saberes?",
      respuesta:
        "Sí, mediante el proceso de validación de saberes podemos reconocer tu experiencia laboral y aprendizaje autodidacta. Evaluamos tus competencias y conocimientos para certificarlos oficialmente, sin necesidad de cursar todo el programa nuevamente. Es ideal para personas con experiencia práctica que necesitan la certificación formal.",
    },
    {
      pregunta: "¿Cuánto tiempo toma completar un programa?",
      respuesta:
        "Depende del programa y tu disponibilidad. La validación de bachillerato puede tomar entre 6 y 12 meses. Los programas técnicos varían según la modalidad. Durante la orientación gratuita, diseñamos un plan personalizado según tus necesidades y objetivos.",
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
                Formación con Titulación Oficial
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Estudia en Colombia con respaldo institucional. Programas 100% virtuales de bachillerato, técnicos y
                validación de saberes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
                  <Link to="/admisiones">Inscríbete</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <a href="https://wa.me/3203240400" target="_blank" rel="noopener noreferrer">
                    Orientación gratuita
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={educacionImg}
                  alt="Joven estudiando en clase virtual desde Colombia"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Ofrecemos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Qué Ofrecemos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Programas educativos con respaldo institucional y acompañamiento personalizado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map((servicio, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <servicio.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{servicio.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{servicio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Beneficios de Estudiar con Nosotros
              </h2>
              <p className="text-lg text-muted-foreground">
                Todo lo que necesitas para avanzar con seguridad en tu formación
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-start gap-4 bg-background p-5 rounded-lg shadow-soft">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-muted-foreground">Resuelve tus dudas sobre nuestros programas educativos</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg px-6">
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
            Comienza tu formación hoy
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agenda una orientación gratuita y descubre cómo podemos ayudarte a alcanzar tus metas educativas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
              <Link to="/admisiones">Inscríbete</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <a href="https://wa.me/3203240400" target="_blank" rel="noopener noreferrer">
                Habla por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducacionFormacion;
