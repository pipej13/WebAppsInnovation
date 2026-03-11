import { Smartphone, Code, Palette, Shield, Zap, Cloud } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Desarrollo iOS & Android",
    description: "Creamos aplicaciones nativas y multiplataforma para iOS y Android, optimizadas para el mejor rendimiento y experiencia de usuario.",
    color: "blue"
  },
  {
    icon: Code,
    title: "Apps a Medida",
    description: "Desarrollamos aplicaciones personalizadas que se adaptan exactamente a las necesidades específicas de tu negocio.",
    color: "indigo"
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Creamos interfaces atractivas e intuitivas que cautivan a tus usuarios y mejoran la experiencia de uso.",
    color: "purple"
  },
  {
    icon: Shield,
    title: "Seguridad & Calidad",
    description: "Implementamos las mejores prácticas de seguridad para proteger los datos de tus usuarios y tu negocio.",
    color: "emerald"
  },
  {
    icon: Zap,
    title: "Optimización",
    description: "Mejoramos el rendimiento de aplicaciones existentes para ofrecer una experiencia más rápida y fluida.",
    color: "amber"
  },
  {
    icon: Cloud,
    title: "Integración Cloud",
    description: "Conectamos tu app con servicios en la nube para escalabilidad, almacenamiento y funcionalidades avanzadas.",
    color: "cyan"
  }
];

const colorClasses = {
  blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
  purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
  amber: "bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
  cyan: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white"
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
            Soluciones tecnológicas integrales
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios para llevar tu proyecto desde la idea hasta el lanzamiento exitoso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-all hover:shadow-xl card-hover"
              data-testid={`service-card-${index}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${colorClasses[service.color]}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
