import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          data-testid="back-to-home-link"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        
        <article className="prose prose-slate max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Política de Privacidad
          </h1>
          
          <p className="text-slate-600 mb-4">
            <strong>Última actualización:</strong> Diciembre 2025
          </p>
          
          <p className="text-slate-600 leading-relaxed">
            En <strong>Apps Innovation SAS</strong>, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal.
          </p>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            1. Información que Recopilamos
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Podemos recopilar los siguientes tipos de información:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6 list-disc">
            <li><strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono.</li>
            <li><strong>Información de la empresa:</strong> Nombre de la empresa, cargo, sector.</li>
            <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, dispositivo utilizado.</li>
            <li><strong>Información de uso:</strong> Cómo interactúa con nuestro sitio web y servicios.</li>
          </ul>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            2. Uso de la Información
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Utilizamos la información recopilada para:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6 list-disc">
            <li>Responder a sus consultas y solicitudes de información.</li>
            <li>Proporcionar nuestros servicios de desarrollo de aplicaciones móviles.</li>
            <li>Mejorar nuestro sitio web y servicios.</li>
            <li>Enviar comunicaciones relacionadas con nuestros servicios (con su consentimiento).</li>
            <li>Cumplir con obligaciones legales.</li>
          </ul>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            3. Compartir Información
          </h2>
          <p className="text-slate-600 leading-relaxed">
            No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes casos:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6 list-disc">
            <li>Con su consentimiento explícito.</li>
            <li>Para cumplir con requisitos legales o regulatorios.</li>
            <li>Para proteger nuestros derechos legales o responder a procesos judiciales.</li>
            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (bajo estrictos acuerdos de confidencialidad).</li>
          </ul>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            4. Seguridad de los Datos
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
          </p>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            5. Retención de Datos
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada, incluyendo requisitos legales, contables o de informes.
          </p>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            6. Sus Derechos
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Usted tiene derecho a:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6 list-disc">
            <li>Acceder a su información personal.</li>
            <li>Corregir información inexacta.</li>
            <li>Solicitar la eliminación de sus datos.</li>
            <li>Oponerse al procesamiento de sus datos.</li>
            <li>Retirar su consentimiento en cualquier momento.</li>
          </ul>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            7. Cookies
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto almacenados en su dispositivo. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
          </p>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            8. Cambios en esta Política
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Las modificaciones serán publicadas en esta página con la fecha de actualización correspondiente.
          </p>
          
          <h2 className="font-heading text-2xl font-semibold text-slate-900 mt-10 mb-4">
            9. Contacto
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos su información personal, puede contactarnos a través de:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6 list-disc">
            <li><strong>Empresa:</strong> Apps Innovation SAS</li>
            <li><strong>Teléfono:</strong> 310 8864437</li>
          </ul>
          
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm">
              © 2025 Apps Innovation SAS. Todos los derechos reservados.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
