import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, FileText, Target, Lightbulb, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import emprendimientoImg from "@/assets/emprendimiento.jpg";

const EmpleabilidadEmprendimiento = () => {
  const empleabilidad = [
    {
      icon: FileText,
      title: "Optimización de CV",
      description: "Creamos o mejoramos tu hoja de vida para destacar tus fortalezas y experiencia",
    },
    {
      icon: Target,
      title: "Simulacros de Entrevista",
      description: "Practicamos entrevistas para que llegues confiado y preparado",
    },
    {
      icon: Briefcase,
      title: "Desarrollo de Habilidades",
      description: "Competencias técnicas y blandas valoradas por empleadores",
    },
  ];

  const emprendimiento = [
    {
      icon: Lightbulb,
      title: "Ideación y Validación",
      description: "Convertimos tu idea en un modelo de negocio viable",
    },
    {
      icon: FileText,
      title: "Plan de Negocio",
      description: "Estructura completa: análisis de mercado, estrategia financiera y operacional",
    },
    {
      icon: TrendingUp,
      title: "Branding y Marketing",
      description: "Identidad visual, presencia digital y estrategias de ventas",
    },
    {
      icon: BarChart,
      title: "Ventas y Finanzas",
      description: "Técnicas de venta, fijación de precios y gestión financiera básica",
    },
  ];

  const faqs = [
    {
      pregunta: "¿Pueden revisar mi hoja de vida?",
      respuesta:
        "Sí, ofrecemos servicio de revisión y optimización de hojas de vida. Analizamos tu experiencia, formación y habilidades para crear un CV profesional que destaque ante empleadores. Incluye formato moderno, redacción efectiva y keywords relevantes para tu sector.",
    },
    {
      pregunta: "¿Cómo convierto mis talentos en un negocio?",
      respuesta:
        "Te ayudamos a identificar tus fortalezas y habilidades para transformarlas en servicios o productos comercializables. El proceso incluye: análisis de mercado, definición de propuesta de valor, creación de plan de negocio básico y estrategias para tus primeros clientes.",
    },
    {
      pregunta: "¿Ofrecen mentoría continua?",
      respuesta:
        "Sí, además de los programas estructurados, ofrecemos mentoría continua para emprendedores y personas en búsqueda de empleo. Sesiones periódicas para resolver dudas, ajustar estrategias y dar seguimiento a tu progreso. Planes mensuales adaptados a tu necesidad.",
    },
    {
      pregunta: "¿Qué incluye el acompañamiento en empleabilidad?",
      respuesta:
        "Incluye: revisión y optimización de CV, carta de presentación, perfil de LinkedIn, preparación para entrevistas con simulacros, identificación de oportunidades laborales, desarrollo de habilidades blandas y seguimiento durante tu búsqueda de empleo.",
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
                Empleabilidad y Emprendimiento: De la Idea al Ingreso
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Mejora tu empleabilidad o lanza tu emprendimiento. CV, entrevistas, habilidades, plan de negocio,
                branding y finanzas. Acompañamiento paso a paso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
                  <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} target="_blank" rel="noopener noreferrer">
                    Quiero mejorar mi CV
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} target="_blank" rel="noopener noreferrer">
                    Quiero crear mi negocio
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={emprendimientoImg}
                  alt="Persona presentando plan de negocio en laptop"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Empleabilidad vs Emprendimiento */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Elige Tu Camino
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ya sea que busques empleo o quieras emprender, tenemos el programa para ti
            </p>
          </div>

          <Tabs defaultValue="empleabilidad" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="empleabilidad" className="text-lg py-4">
                Empleabilidad
              </TabsTrigger>
              <TabsTrigger value="emprendimiento" className="text-lg py-4">
                Emprendimiento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="empleabilidad">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {empleabilidad.map((item, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="bg-secondary border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6">Proceso de Empleabilidad</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Diagnóstico inicial</h4>
                        <p className="text-muted-foreground text-sm">
                          Evaluamos tu perfil, experiencia y objetivos laborales
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Optimización de herramientas</h4>
                        <p className="text-muted-foreground text-sm">
                          Creamos tu CV, perfil de LinkedIn y carta de presentación
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Preparación y práctica</h4>
                        <p className="text-muted-foreground text-sm">
                          Simulacros de entrevistas y desarrollo de habilidades clave
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Seguimiento activo</h4>
                        <p className="text-muted-foreground text-sm">
                          Acompañamiento durante tu búsqueda y primeros meses de empleo
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="emprendimiento">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {emprendimiento.map((item, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="bg-secondary border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6">Ruta del Emprendedor</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                          ✓
                        </span>
                        Fase 1: Ideación
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                        <li>• Identificación de oportunidad</li>
                        <li>• Validación con clientes potenciales</li>
                        <li>• Definición de propuesta de valor</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                          ✓
                        </span>
                        Fase 2: Planificación
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                        <li>• Análisis de mercado y competencia</li>
                        <li>• Modelo de negocio y estrategia</li>
                        <li>• Proyección financiera</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                          ✓
                        </span>
                        Fase 3: Lanzamiento
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                        <li>• Identidad de marca y presencia digital</li>
                        <li>• Estrategia de marketing y ventas</li>
                        <li>• Primeros clientes y feedback</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                          ✓
                        </span>
                        Fase 4: Crecimiento
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                        <li>• Optimización de operaciones</li>
                        <li>• Escalamiento de ventas</li>
                        <li>• Gestión financiera sostenible</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
              <p className="text-lg text-muted-foreground">
                Resuelve tus dudas sobre empleabilidad y emprendimiento
              </p>
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
            Construye tu futuro profesional
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ya sea buscando empleo o creando tu negocio, te acompañamos en cada paso del camino
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
              <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} target="_blank" rel="noopener noreferrer">
                Agenda orientación
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/admisiones">Inscríbete</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpleabilidadEmprendimiento;
