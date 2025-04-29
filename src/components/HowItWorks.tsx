
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Cómo funciona trabajar con El Pautero?
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="relative">
            <div className="h-16 w-16 bg-pautero-fuchsia rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
              1
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Agenda tu llamada</h3>
            <p className="text-center text-gray-600">
              Reserva 30 minutos para conocer tu negocio y objetivos.
            </p>
            
            {/* Connector (hidden on mobile) */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pautero-fuchsia to-transparent -z-10"></div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="h-16 w-16 bg-pautero-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
              2
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Diagnóstico sin costo</h3>
            <p className="text-center text-gray-600">
              Analizamos tu situación actual y diseñamos tu estrategia personalizada.
            </p>
            
            {/* Connector (hidden on mobile) */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pautero-blue to-transparent -z-10"></div>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="h-16 w-16 bg-pautero-fuchsia rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
              3
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Creamos tu sistema</h3>
            <p className="text-center text-gray-600">
              Desarrollamos tus campañas, contenido y web optimizada para ventas.
            </p>
            
            {/* Connector (hidden on mobile) */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pautero-fuchsia to-transparent -z-10"></div>
          </div>
          
          {/* Step 4 */}
          <div>
            <div className="h-16 w-16 bg-pautero-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
              4
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Empezamos a vender juntos</h3>
            <p className="text-center text-gray-600">
              Lanzamos tu sistema y optimizamos constantemente para mejores resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
