import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Apps Innovation transformó nuestra idea en una aplicación increíble. Su equipo es profesional, comprometido y entrega resultados excepcionales. Altamente recomendados.",
    rating: 5
  },
  {
    name: "María González",
    role: "Directora, HealthPlus",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Trabajar con Apps Innovation fue una experiencia excelente. Entendieron nuestras necesidades y crearon una app que superó nuestras expectativas. El soporte post-lanzamiento es impecable.",
    rating: 5
  },
  {
    name: "Andrés López",
    role: "Fundador, DeliveryApp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "El equipo de Apps Innovation demostró un conocimiento técnico sobresaliente. Nuestra app ha recibido comentarios muy positivos de los usuarios. Definitivamente volveremos a trabajar con ellos.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-2xl border border-transparent hover:border-blue-100 transition-all card-hover relative"
              data-testid={`testimonial-card-${index}`}
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
