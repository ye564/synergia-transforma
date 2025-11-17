import { Link } from "react-router-dom";
import { GraduationCap, Heart, Briefcase, Scale, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import educacionImg from "@/assets/estudio-virtual.jpg";
import psicologiaImg from "@/assets/apoyo-psicologico.jpg";
import empleabilidadImg from "@/assets/emprendimiento.jpg";
import legalImg from "@/assets/asesoria-legal.jpg";

const Services = () => {
  const servicios = [
    {
      icon: GraduationCap,
      title: "Formación Educativa con Titulación Oficial",
      description:
        "Programas 100% virtuales en alianza con instituciones avaladas. Valida tu bachillerato, estudia técnicos o reconoce tu experiencia como saberes. Todo con acompañamiento personalizado.",
      image: educacionImg,
      link: "/formacion-educativa",
      beneficios: [
        "Titulación oficial reconocida",
        "100% virtual y flexible",
        "Validación de saberes",
        "Orientación vocacional",
      ],
    },
    {
      icon: Heart,
      title: "Apoyo Psicológico Online",
      description:
        "Atención psicológica profesional y accesible. Terapias individuales y familiares, orientación breve, talleres de habilidades socioemocionales y certificados para trámites.",
      image: psicologiaImg,
      link: "/apoyo-psicologico",
      beneficios: [
        "Terapias individuales y familiares",
        "Orientación profesional",
        "Talleres especializados",
        "Certificados psicológicos",
      ],
    },
    {
      icon: Briefcase,
      title: "Empleabilidad y Emprendimiento",
      description:
        "Mejora tu empleabilidad o lanza tu emprendimiento. Desde optimización de CV hasta plan de negocio completo, branding y estrategias de ventas.",
      image: empleabilidadImg,
      link: "/empleabilidad-emprendimiento",
      beneficios: [
        "Optimización de CV",
        "Preparación para entrevistas",
        "Plan de negocio",
        "Mentoría en marketing y ventas",
      ],
    },
    {
      icon: Scale,
      title: "Asesoría Legal y Trámites",
      description:
        "Orientación jurídica especializada en temas académicos y laborales. Homologaciones, convalidaciones, RETHUS y requisitos legales para emprendimientos.",
      image: legalImg,
      link: "/asesoria-legal",
      beneficios: [
        "Asesoría académica y laboral",
        "Homologaciones y convalidaciones",
        "Proceso RETHUS",
        "Formalización de negocios",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-center">
            Soluciones integrales para tu educación, bienestar y desarrollo profesional. Todo 100% virtual y con
            acompañamiento personalizado.
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Imagen */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-medium hover:shadow-lg transition-all duration-300">
                    <img
                      src={servicio.image}
                      alt={servicio.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                        <servicio.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {servicio.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">{servicio.description}</p>

                  {/* Beneficios */}
                  <div className="space-y-3 mb-8">
                    {servicio.beneficios.map((beneficio, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <p className="text-foreground">{beneficio}</p>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" size="lg" asChild>
                    <Link to={servicio.link} className="inline-flex items-center gap-2">
                      Ver detalles del servicio
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegir Synergia */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              ¿Por qué elegir Synergia Integral?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                  <p className="text-foreground font-semibold mb-1">Virtual</p>
                  <p className="text-sm text-muted-foreground">Estudia desde cualquier lugar de Colombia</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
                  <p className="text-foreground font-semibold mb-1">Acompañamiento</p>
                  <p className="text-sm text-muted-foreground">Apoyo continuo en tu proceso</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">+1000</div>
                  <p className="text-foreground font-semibold mb-1">Vidas transformadas</p>
                  <p className="text-sm text-muted-foreground">Estudiantes y beneficiarios satisfechos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-center">
            Agenda una orientación gratuita y descubre cuál es el mejor camino para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
              <Link to="/admisiones">Inscríbete ahora</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <a href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`} target="_blank" rel="noopener noreferrer">
                Habla por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
