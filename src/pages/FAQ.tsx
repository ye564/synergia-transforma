import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, Heart, Briefcase, Scale } from "lucide-react";

const FAQ = () => {
  const categorias = [
    {
      icon: GraduationCap,
      title: "Educación",
      faqs: [
        { q: "¿Puedo validar mi bachillerato?", a: "Sí, ofrecemos programas de validación en alianza con instituciones avaladas. El proceso es 100% virtual." },
        { q: "¿Los títulos son oficiales?", a: "Sí, todos los títulos están respaldados por instituciones educativas reconocidas por el Ministerio de Educación." },
        { q: "¿Cuánto tiempo toma?", a: "Depende del programa. La validación de bachillerato toma entre 6-12 meses." },
      ],
    },
    {
      icon: Heart,
      title: "Psicología",
      faqs: [
        { q: "¿Cómo agendo sesión?", a: "Puedes agendar por WhatsApp (320 324 0440) o correo. La primera orientación es gratuita." },
        { q: "¿Entregan certificados?", a: "Sí, emitimos certificados psicológicos con validez oficial para trámites." },
        { q: "¿Hay tarifas especiales?", a: "Sí, ofrecemos tarifas diferenciales para estudiantes y población vulnerable." },
      ],
    },
    {
      icon: Briefcase,
      title: "Empleo y Emprendimiento",
      faqs: [
        { q: "¿Revisan mi hoja de vida?", a: "Sí, ofrecemos revisión y optimización de CV con formato profesional." },
        { q: "¿Cómo creo mi negocio?", a: "Te ayudamos desde la idea hasta el lanzamiento con plan de negocio completo." },
        { q: "¿Ofrecen mentoría?", a: "Sí, ofrecemos mentoría continua con planes mensuales adaptados." },
      ],
    },
    {
      icon: Scale,
      title: "Legal y Trámites",
      faqs: [
        { q: "¿Qué necesito para homologar?", a: "Certificados apostillados, traducción oficial y documentos de identidad. Te guiamos en todo el proceso." },
        { q: "¿Cómo es el RETHUS?", a: "Te acompañamos en todo: verificación de títulos, registro ante Minsalud y obtención del código." },
        { q: "¿Cuánto demora?", a: "Varía según el trámite. Homologaciones: 3-6 meses. RETHUS: 2-4 meses." },
      ],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-primary-foreground/90">Resuelve tus dudas sobre nuestros servicios</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {categorias.map((categoria, idx) => (
            <div key={idx} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <categoria.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-heading font-bold">{categoria.title}</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {categoria.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${idx}-${i}`} className="border-2 rounded-lg px-6">
                    <AccordionTrigger className="font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
