import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573203240400"
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
