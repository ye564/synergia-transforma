import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?");
  
  return (
    <a
      href={`https://wa.me/3203240400?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        variant="hero"
        size="lg"
        className="rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-xl"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
