import { Link } from "react-router-dom";
import { GraduationCap, Heart, Briefcase, Scale, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GraduatesCarousel from "@/components/GraduatesCarousel";
import heroImage from "@/assets/hero-graduacion.jpg";

const Home = () => {
  const pilares = [
    {
      icon: GraduationCap,
      title: "Formación con titulación oficial (100% virtual)",
      description: "Programas en alianza con instituciones avaladas.",
      link: "/formacion-educativa",
    },
    {
      icon: Heart,
      title: "Apoyo psicológico profesional",
      description: "Terapias, orientación breve, talleres y certificados para trámites.",
      link: "/apoyo-psicologico",
    },
    {
      icon: Briefcase,
      title: "Empleabilidad y emprendimiento",
      description: "CV, entrevistas, habilidades, plan de negocio, branding y finanzas.",
      link: "/empleabilidad-emprendimiento",
    },
    {
      icon: Scale,
      title: "Asesoría legal y trámites",
      description: "Académico/laboral, homologaciones, convalidaciones y RETHUS.",
      link: "/asesoria-legal",
    },
  ];

  const pasos = [
    {
      numero: "01",
      title: "Agenda una orientación gratuita",
      description: "Conversamos sobre tus necesidades y objetivos",
    },
    {
      numero: "02",
      title: "Elige tu ruta",
      description: "Estudio, empleo, emprendimiento o apoyo emocional",
    },
    {
      numero: "03",
      title: "Avanza con acompañamiento",
      description: "100% virtual y personalizado",
    },
  ];


  const faqs = [
    {
      pregunta: "¿Puedo validar mi bachillerato?",
      respuesta:
        "Sí, ofrecemos programas de validación con instituciones avaladas. Todo el proceso es 100% virtual y cuenta con acompañamiento personalizado.",
    },
    {
      pregunta: "¿La atención es virtual?",
      respuesta:
        "Sí, todos nuestros servicios son 100% virtuales. Esto te permite estudiar y recibir apoyo desde cualquier lugar de Colombia con conexión a internet.",
    },
    {
      pregunta: "¿Atienden a migrantes?",
      respuesta:
        "Sí, brindamos atención a personas migrantes que necesiten validar estudios, apoyo psicológico o asesoría legal para homologaciones y trámites.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Educación, bienestar y oportunidades para transformar tu vida en Colombia
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Cuando la vida se pone cuesta arriba, nadie debería caminar solo. En Synergia Integral te acompañamos con
              formación con titulación oficial, apoyo psicológico, orientación para la empleabilidad y el emprendimiento,
              y asesoría en trámites. Todo 100% virtual, cercano y humano, para que puedas aprender, sanar y prosperar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/admisiones">
                  Inscríbete hoy
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} target="_blank" rel="noopener noreferrer">
                  Habla por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nuestros Pilares de Transformación
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un modelo integral que combina educación, bienestar emocional y fortalecimiento económico
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <pilar.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{pilar.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{pilar.description}</p>
                  <Link
                    to={pilar.link}
                    className="text-primary hover:text-primary-hover font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">¿Cómo funciona?</h2>
            <p className="text-lg text-muted-foreground">Tres pasos simples para comenzar tu transformación</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pasos.map((paso, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-medium">
                  <span className="text-3xl font-heading font-bold text-primary-foreground">{paso.numero}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{paso.title}</h3>
                <p className="text-muted-foreground">{paso.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/admisiones">Comenzar ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Graduados */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nuestros Graduados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a quienes ya transformaron sus vidas con Synergia Integral. Sus logros son nuestra inspiración.
            </p>
          </div>
          <GraduatesCarousel />
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-muted-foreground">Resuelve tus dudas más comunes</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{faq.pregunta}</h3>
                        <p className="text-muted-foreground">{faq.respuesta}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link to="/faq">Ver todas las preguntas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            ¿Listo para transformar tu vida?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Da el primer paso hoy. Nuestro equipo está listo para acompañarte en tu camino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
              <Link to="/admisiones">Inscríbete ahora</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} target="_blank" rel="noopener noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
