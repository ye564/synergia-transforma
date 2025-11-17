import { Target, Eye, Users, Heart, GraduationCap, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const beneficiarios = [
    "Estudiantes y jóvenes que buscan oportunidades educativas",
    "Adultos que desean retomar o completar estudios",
    "Personas migrantes que necesitan validar o convalidar estudios",
    "Madres cabeza de hogar en busca de nuevas oportunidades",
    "Personas sin certificación oficial que desean validar su experiencia",
    "Desempleados o en transición laboral",
    "Emprendedores que buscan formalizar y hacer crecer su negocio",
  ];

  const equipo = [
    { rol: "Psicólogos profesionales", icon: Heart },
    { rol: "Orientadores laborales", icon: Users },
    { rol: "Abogados especializados", icon: Scale },
    { rol: "Docentes certificados", icon: GraduationCap },
    { rol: "Mentores de emprendimiento", icon: Target },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Quiénes Somos
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-center">
            Una organización social comprometida con la transformación de vidas a través de la educación, el bienestar y
            las oportunidades
          </p>
        </div>
      </section>

      {/* Presentación */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-8 text-left">
              Somos una organización social que acompaña a estudiantes y beneficiarios en Colombia a superar barreras
              educativas, emocionales y económicas. <strong>Levantamos sueños, derribamos barreras y construimos futuros</strong>{" "}
              mediante educación con respaldo institucional, apoyo psicológico profesional, orientación para el empleo y el
              emprendimiento, y asesoría en trámites.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-left">
              Creemos que cada persona merece una oportunidad para transformar su vida, sin importar sus circunstancias
              actuales. Por eso, trabajamos incansablemente para eliminar las barreras que impiden el acceso a la educación,
              el bienestar emocional y el desarrollo económico.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Misión */}
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground text-center">Nuestra Misión</h2>
                </div>
                <div className="space-y-4 text-foreground leading-relaxed text-left">
                  <p>
                    En Synergia Integral: Transformando Vidas, trabajamos con un propósito claro: generar impacto social
                    real a través de un modelo integral que combine educación de calidad, bienestar emocional y
                    fortalecimiento económico.
                  </p>
                  <p>
                    Nos comprometemos a acompañar a personas de todas las edades y contextos que buscan una oportunidad
                    para transformar su vida. Lo hacemos brindando acceso a formación con titulación oficial (en alianza
                    con instituciones educativas avaladas), servicios de atención psicológica profesional, y asesoría
                    especializada en empleabilidad y emprendimiento.
                  </p>
                  <p className="font-semibold">
                    Nuestra misión es crear caminos de esperanza, inclusión y progreso, guiando con empatía, excelencia y
                    responsabilidad a quienes desean crecer, sanar o emprender un nuevo rumbo.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Visión */}
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground text-center">Nuestra Visión</h2>
                </div>
                <div className="space-y-4 text-foreground leading-relaxed text-left">
                  <p>
                    Ser una empresa social líder en la transformación integral de vidas, reconocida por su compromiso en
                    llegar a miles de personas en situación de vulnerabilidad social, emocional o económica, brindándoles
                    acceso real a formación académica con respaldo institucional, apoyo psicológico profesional,
                    orientación para la empleabilidad y asesoría en emprendimiento.
                  </p>
                  <p className="font-semibold">
                    Visualizamos un futuro donde cada persona cuente con las herramientas, el acompañamiento y las
                    oportunidades necesarias para crecer, sanar y prosperar, y donde la educación, el bienestar emocional y
                    el desarrollo económico sean derechos accesibles, sin importar el contexto o las limitaciones
                    personales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* A quiénes acompañamos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                A Quiénes Acompañamos
              </h2>
              <p className="text-lg text-muted-foreground text-center">
                Trabajamos con personas de todas las edades y contextos que buscan una oportunidad para transformar su
                vida
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficiarios.map((beneficiario, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground">{beneficiario}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground">
                Profesionales comprometidos con tu transformación
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {equipo.map((miembro, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <miembro.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-foreground">{miembro.rol}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Únete a nuestra comunidad
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-center">
            Comienza tu proceso de transformación hoy. Agenda una orientación gratuita y descubre cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-background hover:bg-background/90">
              <Link to="/admisiones">Agenda orientación</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
