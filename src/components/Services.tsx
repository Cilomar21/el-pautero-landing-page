
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ¿Qué hacemos por ti?
        </h2>
        <p className="text-center text-xl mb-12 text-gray-600">
          Con El Pautero te armamos un sistema que vende solo:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="card border-t-4 border-pautero-fuchsia hover:transform hover:scale-105">
            <div className="h-16 w-16 bg-pautero-fuchsia bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pautero-fuchsia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Tráfico Pago</h3>
            <p className="text-center text-gray-600">
              Campañas optimizadas en Meta, TikTok y Google que atraen a tu cliente ideal.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="card border-t-4 border-pautero-blue hover:transform hover:scale-105">
            <div className="h-16 w-16 bg-pautero-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pautero-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Videos que venden</h3>
            <p className="text-center text-gray-600">
              Contenido estratégico que conecta con tu audiencia y genera conversiones.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="card border-t-4 border-pautero-black hover:transform hover:scale-105">
            <div className="h-16 w-16 bg-pautero-black bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pautero-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Página Web optimizada</h3>
            <p className="text-center text-gray-600">
              Tu vendedor digital disponible 24/7, diseñado para convertir visitas en ventas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
