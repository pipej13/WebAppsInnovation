import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-6">
              Información de contacto
            </h3>
            <p className="text-slate-600 mb-8">
              Estamos listos para escuchar tu idea y convertirla en una aplicación exitosa. Contáctanos hoy mismo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Teléfono</p>
                  <a href="tel:+573108864437" className="text-slate-600 hover:text-blue-600 transition-colors">
                    310 8864437
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600">
                    contacto@appsinnovation.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Ubicación</p>
                  <p className="text-slate-600">
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Placeholder */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="font-medium text-slate-900 mb-4">Síguenos en redes</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 cursor-not-allowed" title="Próximamente">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 cursor-not-allowed" title="Próximamente">
                  <span className="text-xs">IG</span>
                </div>
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 cursor-not-allowed" title="Próximamente">
                  <span className="text-xs">LI</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-2">Próximamente</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 rounded-lg border-slate-200 focus:ring-blue-600"
                  data-testid="contact-name-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Correo electrónico *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 rounded-lg border-slate-200 focus:ring-blue-600"
                  data-testid="contact-email-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono (opcional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 rounded-lg border-slate-200 focus:ring-blue-600"
                  data-testid="contact-phone-input"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] rounded-lg border-slate-200 focus:ring-blue-600"
                  data-testid="contact-message-input"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-lg font-medium transition-all hover:shadow-lg"
                disabled={isLoading}
                data-testid="contact-submit-button"
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
