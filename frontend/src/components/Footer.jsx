import { Link } from "react-router-dom";
import { Smartphone, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-semibold text-xl">
                Apps Innovation
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Prestación de servicios de tecnología especializada en el desarrollo de aplicaciones móviles innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#inicio" 
                  onClick={(e) => scrollToSection(e, "#inicio")}
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-link-inicio"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#nosotros" 
                  onClick={(e) => scrollToSection(e, "#nosotros")}
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-link-nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  onClick={(e) => scrollToSection(e, "#servicios")}
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-link-servicios"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#proyectos" 
                  onClick={(e) => scrollToSection(e, "#proyectos")}
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-link-proyectos"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  onClick={(e) => scrollToSection(e, "#contacto")}
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-link-contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Desarrollo iOS & Android</li>
              <li className="text-slate-400">Apps a Medida</li>
              <li className="text-slate-400">Diseño UI/UX</li>
              <li className="text-slate-400">Integración Cloud</li>
              <li className="text-slate-400">Optimización</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+573108864437" className="text-slate-400 hover:text-white transition-colors">
                  310 8864437
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  contacto@appsinnovation.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Apps Innovation SAS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link 
              to="/privacidad" 
              className="text-slate-400 hover:text-white text-sm transition-colors"
              data-testid="footer-privacy-link"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
