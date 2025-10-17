import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const articulos = [
    { title: "Cómo validar bachillerato legalmente en Colombia", fecha: "15 Oct 2025", categoria: "Educación" },
    { title: "RETHUS: requisitos y proceso paso a paso", fecha: "10 Oct 2025", categoria: "Trámites" },
    { title: "Hoja de vida perfecta: plantillas y consejos", fecha: "5 Oct 2025", categoria: "Empleo" },
    { title: "De talento a ingreso: guía para emprender", fecha: "1 Oct 2025", categoria: "Emprendimiento" },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">Blog y Recursos</h1>
          <p className="text-xl text-primary-foreground/90">Guías gratuitas para estudiar, emplearte y emprender en Colombia</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articulos.map((art, idx) => (
              <Card key={idx} className="border-2 hover:border-primary hover:shadow-medium transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{art.fecha}</span>
                    <span>•</span>
                    <span>{art.categoria}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{art.title}</h3>
                  <Button variant="outline">Leer más <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
