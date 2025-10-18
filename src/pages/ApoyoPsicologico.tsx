import { Link } from "react-router-dom";
import { Heart, MessageSquare, Users, FileCheck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import psicologiaImg from "@/assets/apoyo-psicologico.jpg";

const ApoyoPsicologico = () => {
  const servicios = [
    {
      icon: MessageSquare,
      title: "Terapias Individuales y Familiares",
      description:
        "Sesiones personalizadas para trabajar autoestima, estrés, ansiedad, resiliencia y relaciones familiares. Espacio seguro y confidencial.",
    },
    {
      icon: Clock,
      title: "Orientación Breve",
      description:
        "Procesos cortos y efectivos para situaciones específicas. Ideal para toma de decisiones, crisis puntuales o clarificación de objetivos.",
    },
    {
      icon: Users,
      title: "Talleres y Grupos",
      description:
        "Talleres de liderazgo, habilidades socioemocionales, manejo del estrés y desarrollo personal. Aprende con otros en un ambiente de apoyo.",
    },
    {
      icon: FileCheck,
      title: "Certificados Psicológicos",
      description:
        "Certificaciones profesionales para trámites educativos, laborales o administrativos. Respaldo oficial para tus procesos.",
    },
  ];

  const enfoque = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Comprendemos tu situación y te acompañamos sin juzgar",
    },
    {
      icon: Shield,
      title: "Confidencialidad",
      description: "Tu privacidad está protegida en todo momento",
    },
    {
      icon: Users,
      title: "Accesibilidad",
      description: "Atención 100% virtual desde cualquier lugar",
    },
  ];

  const faqs = [
    {
      pregunta: "¿Cómo agendo mi primera sesión?",
      respuesta:
        "Puedes agendar tu primera sesión a través de WhatsApp (320 324 0400) o desde nuestro formulario de contacto. Te contactaremos para coordinar día y hora según tu disponibilidad. La primera orientación es gratuita.",
    },
    {
      pregunta: "¿Entregan certificados psicológicos?",
      respuesta:
        "Sí, emitimos certificados psicológicos con validez oficial para trámites educativos, laborales o administrativos. Estos certificados son firmados por profesionales colegiados y cumplen con todos los requisitos legales.",
    },
    {
      pregunta: "¿Hay tarifas diferenciales para estudiantes?",
      respuesta:
        "Sí, ofrecemos tarifas especiales para estudiantes, personas en situación de vulnerabilidad y beneficiarios de nuestros programas educativos. Durante la orientación inicial evaluamos cada caso para ofrecer el mejor plan de acompañamiento.",
    },
    {
      pregunta: "¿Las sesiones son individuales o grupales?",
      respuesta:
        "Ofrecemos ambas modalidades. Las terapias individuales son personalizadas para tu situación específica. Los talleres grupales son ideales para desarrollar habilidades junto a otros participantes. Tú eliges según tus necesidades.",
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
                Apoyo Psicológico Online, Cercano y Profesional
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Atención psicológica profesional y accesible. Terapias individuales/familiares, orientación breve,
                talleres y certificados para trámites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
                  <a href="https://wa.me/573203240400" target="_blank" rel="noopener noreferrer">
                    Agenda tu sesión
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/contacto">Escríbenos</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={psicologiaImg}
                  alt="Sesión de apoyo psicológico en videollamada"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Servicios de Apoyo Psicológico
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atención profesional adaptada a tus necesidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicios.map((servicio, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <servicio.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{servicio.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{servicio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Enfoque */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nuestro Enfoque</h2>
              <p className="text-lg text-muted-foreground">
                Atención psicológica basada en principios fundamentales
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enfoque.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-10">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
                  ¿Por qué elegir nuestro apoyo psicológico?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground text-lg">
                      <strong>Profesionales colegiados:</strong> Psicólogos con experiencia y formación certificada
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground text-lg">
                      <strong>Atención flexible:</strong> Sesiones adaptadas a tu horario y disponibilidad
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground text-lg">
                      <strong>Enfoque integral:</strong> Complementamos tu desarrollo educativo y profesional
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground text-lg">
                      <strong>Tarifas accesibles:</strong> Opciones de pago diferencial según tu situación
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <p className="text-lg text-muted-foreground">Resuelve tus dudas sobre nuestros servicios psicológicos</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg px-6 bg-background">
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
            Da el primer paso hacia tu bienestar
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agenda tu primera sesión de orientación gratuita. Estamos aquí para acompañarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
              <a href="https://wa.me/573203240400" target="_blank" rel="noopener noreferrer">
                Agenda tu sesión
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/contacto">Escríbenos por correo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApoyoPsicologico;
