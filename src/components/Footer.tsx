import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Acerca de */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold">SI</span>
              </div>
              <div>
                <div className="font-heading font-bold text-foreground">Synergia Integral</div>
                <div className="text-xs text-muted-foreground">Transformando Vidas</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Educación con titulación oficial, apoyo psicológico y oportunidades para transformar tu vida en Colombia.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Atención 100% virtual en Colombia</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quienes-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/admisiones" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Admisiones
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/formacion-educativa"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Formación Educativa
                </Link>
              </li>
              <li>
                <Link
                  to="/apoyo-psicologico"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Apoyo Psicológico
                </Link>
              </li>
              <li>
                <Link
                  to="/empleabilidad-emprendimiento"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Empleabilidad y Emprendimiento
                </Link>
              </li>
              <li>
                <Link
                  to="/asesoria-legal"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Asesoría Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/573203240400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>320 324 0400</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yefersonolcunche@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>yefersonolcunche@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Synergia Integral. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Aviso Legal
            </Link>
            <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
