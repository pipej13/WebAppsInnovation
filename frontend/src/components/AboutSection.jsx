import { Target, Eye, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Sobre Nosotros
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
            Conoce a Apps Innovation SAS
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Somos una startup colombiana dedicada a la prestación de servicios de tecnología, especializada en el desarrollo de aplicaciones móviles innovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Equipo de Apps Innovation"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm opacity-90">Años de experiencia</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Innovación al alcance de tu mano
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              En Apps Innovation SAS creemos que cada idea tiene el potencial de transformar industrias. Nuestro equipo de desarrolladores expertos trabaja con pasión para convertir tus conceptos en aplicaciones móviles funcionales, atractivas y de alto rendimiento.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Nos especializamos en crear soluciones tecnológicas que no solo cumplen con los estándares más altos de calidad, sino que también generan valor real para tu negocio y tus usuarios.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-700 font-medium">Equipo experto</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-700 font-medium">Calidad garantizada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 card-hover" data-testid="mission-card">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
              Nuestra Misión
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Desarrollar aplicaciones móviles innovadoras que transformen la manera en que las empresas interactúan con sus clientes, brindando soluciones tecnológicas de alta calidad que generen valor y competitividad en el mercado.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-100 card-hover" data-testid="vision-card">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
              Nuestra Visión
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ser la empresa líder en desarrollo de aplicaciones móviles en Colombia y Latinoamérica, reconocida por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
