import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Acerca de */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Synergia Integral - Transformando Vidas" className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto transition-all" />
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-justify">
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
                  href={`https://wa.me/3203240400?text=${encodeURIComponent("Hola Synergia Integral, quiero información general sobre sus programas.\nMi nombre: ___ | Ciudad: ___ | Interés: ___ (Formación / Psicología / Empleo / Emprendimiento / Legal).\n¿Podemos agendar una orientación gratuita?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
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
