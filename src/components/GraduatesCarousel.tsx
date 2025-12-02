import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
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
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const graduados = [
    graduado1,
    graduado2,
    graduado3,
    graduado4,
    graduado5,
    graduado6,
    graduado7,
    graduado8,
    graduado9,
    graduado10,
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {graduados.map((graduado, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden border-0">
                <CardContent className="p-0">
                  <img
                    src={graduado}
                    alt={`Graduado ${index + 1} - Synergia Integral`}
                    className="w-full aspect-[3/4] object-cover object-top rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {graduados.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GraduatesCarousel;
