import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { GraduationCap, Award, Briefcase, Heart } from "lucide-react";
import graduado1 from "@/assets/graduados/graduado-1.jpg";
import graduado2 from "@/assets/graduados/graduado-2.jpg";
import graduado3 from "@/assets/graduados/graduado-3.jpg";
import graduado4 from "@/assets/graduados/graduado-4.jpg";
import graduado5 from "@/assets/graduados/graduado-5.jpg";
import graduado6 from "@/assets/graduados/graduado-6.jpg";
import graduado7 from "@/assets/graduados/graduado-7.jpg";
import graduado8 from "@/assets/graduados/graduado-8.jpg";
import graduado9 from "@/assets/graduados/graduado-9.jpg";
import graduado10 from "@/assets/graduados/graduado-10.jpg";

const GraduatesCarousel = () => {
  const graduados = [
    {
      image: graduado1,
      nombre: "María González",
      programa: "Técnico en Administración",
      logro: "Validó su bachillerato y completó programa técnico",
      icon: GraduationCap,
    },
    {
      image: graduado2,
      nombre: "Carlos Ramírez",
      programa: "Emprendimiento Digital",
      logro: "Lanzó su propio negocio exitoso",
      icon: Briefcase,
    },
    {
      image: graduado3,
      nombre: "Ana Martínez",
      programa: "Bachillerato Validado",
      logro: "Superó barreras y alcanzó sus metas",
      icon: Award,
    },
    {
      image: graduado4,
      nombre: "Luis Torres",
      programa: "Técnico en Sistemas",
      logro: "Consiguió empleo en sector tecnológico",
      icon: GraduationCap,
    },
    {
      image: graduado5,
      nombre: "Diana Castro",
      programa: "Empleabilidad y Liderazgo",
      logro: "Ascendió en su carrera profesional",
      icon: Briefcase,
    },
    {
      image: graduado6,
      nombre: "Jorge Moreno",
      programa: "Validación de Saberes",
      logro: "Certificó su experiencia laboral",
      icon: Award,
    },
    {
      image: graduado7,
      nombre: "Laura Pineda",
      programa: "Bachillerato + Apoyo Psicológico",
      logro: "Transformó su vida con apoyo integral",
      icon: Heart,
    },
    {
      image: graduado8,
      nombre: "Miguel Ángel Ruiz",
      programa: "Técnico en Salud",
      logro: "Completó RETHUS y ejerce profesionalmente",
      icon: GraduationCap,
    },
    {
      image: graduado9,
      nombre: "Sofía Herrera",
      programa: "Formación Empresarial",
      logro: "Creó su marca personal exitosa",
      icon: Briefcase,
    },
    {
      image: graduado10,
      nombre: "Andrés Ospina",
      programa: "Validación Bachillerato",
      logro: "Cumplió su sueño de graduarse",
      icon: Award,
    },
  ];

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {graduados.map((graduado, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="group overflow-hidden border-2 hover:border-primary hover:shadow-lg transition-all duration-500">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={graduado.image}
                      alt={`${graduado.nombre} - Graduado de ${graduado.programa}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent opacity-90" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                      <graduado.icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {graduado.nombre}
                      </h3>
                      <p className="text-sm font-medium text-primary-foreground/90 mb-3">
                        {graduado.programa}
                      </p>
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-primary-foreground/80 leading-relaxed">
                          {graduado.logro}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 -translate-x-12" />
          <CarouselNext className="right-0 translate-x-12" />
        </div>
      </Carousel>

      {/* Mobile Navigation Hint */}
      <div className="md:hidden text-center mt-6">
        <p className="text-sm text-muted-foreground">
          ← Desliza para ver más graduados →
        </p>
      </div>
    </div>
  );
};

export default GraduatesCarousel;
