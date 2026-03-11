import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "App de Delivery",
    category: "E-commerce",
    description: "Aplicación de delivery de alimentos con seguimiento en tiempo real y pagos integrados.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
    tags: ["iOS", "Android", "GPS"]
  },
  {
    title: "Fintech Mobile",
    category: "Finanzas",
    description: "Plataforma de gestión financiera personal con análisis de gastos y metas de ahorro.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    tags: ["React Native", "API Banking"]
  },
  {
    title: "Healthcare App",
    category: "Salud",
    description: "Aplicación de telemedicina con videoconsultas, historial médico y recordatorios.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tags: ["Flutter", "HIPAA Compliant"]
  },
  {
    title: "Fitness Tracker",
    category: "Bienestar",
    description: "App de seguimiento de rutinas de ejercicio, nutrición y progreso físico.",
    image: "https://images.unsplash.com/photo-1461896836934- voices?w=600&h=400&fit=crop",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    tags: ["iOS", "HealthKit", "Wearables"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Nuestro Portafolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
            Proyectos destacados
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Conoce algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 card-hover"
              data-testid={`project-card-${index}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <button className="bg-white text-slate-900 p-3 rounded-full opacity-90 hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
