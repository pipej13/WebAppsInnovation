import { ArrowRight, Smartphone, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInUp">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              Desarrollo de Apps Móviles
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Transformamos tus{" "}
              <span className="text-gradient">ideas en apps</span>{" "}
              innovadoras
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              En Apps Innovation SAS, somos especialistas en el desarrollo de aplicaciones móviles que impulsan tu negocio al siguiente nivel. Tecnología de punta al servicio de tus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:shadow-lg hover:-translate-y-1"
                onClick={(e) => scrollToSection(e, "#contacto")}
                data-testid="hero-cta-primary"
              >
                Inicia tu proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-medium border-slate-200 hover:bg-slate-50"
                onClick={(e) => scrollToSection(e, "#servicios")}
                data-testid="hero-cta-secondary"
              >
                Ver servicios
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-slate-100">
              <div className="animate-fadeInUp animation-delay-200">
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-slate-600 text-sm">Proyectos completados</p>
              </div>
              <div className="animate-fadeInUp animation-delay-400">
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="text-slate-600 text-sm">Clientes satisfechos</p>
              </div>
              <div className="animate-fadeInUp animation-delay-600">
                <p className="text-3xl font-bold text-slate-900">5+</p>
                <p className="text-slate-600 text-sm">Años de experiencia</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Visual */}
          <div className="relative animate-fadeInUp animation-delay-400 hidden lg:block">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-72 h-[580px] mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" 
                    alt="App móvil ejemplo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-full" />
              </div>
              
              {/* Floating cards */}
              <div className="absolute top-20 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute bottom-40 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                <Code className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="absolute bottom-20 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }}>
                <Zap className="w-8 h-8 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
