
import React from 'react';

const ProblemsSolutions: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Te suena esto?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl text-red-500">❌</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Publicas pero nadie compra</h3>
                <p className="text-gray-600">Inviertes tiempo en contenido que no genera conversiones.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-2xl text-red-500">❌</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tienes redes pero no vendes</h3>
                <p className="text-gray-600">Miles de seguidores pero cero ventas reales.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-2xl text-red-500">❌</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tu web no existe (o da vergüenza)</h3>
                <p className="text-gray-600">Sin un activo digital profesional que genere confianza.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-2xl text-red-500">❌</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">No sabes cómo hacer anuncios ni medir resultados</h3>
                <p className="text-gray-600">Gastas dinero a ciegas sin estrategia ni datos.</p>
              </div>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-pautero-blue mb-4">La solución es clara:</h3>
            
            <div className="flex items-start gap-4">
              <div className="text-2xl text-green-500">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Anuncios con estrategia <span className="text-pautero-blue">(Trafficker)</span></h3>
                <p className="text-gray-600">Campañas optimizadas que atraen clientes ideales y convierten.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-2xl text-green-500">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Videos con intención <span className="text-pautero-blue">(12 piezas de contenido)</span></h3>
                <p className="text-gray-600">Contenido estratégico que conecta, convence y convierte.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-2xl text-green-500">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Una web que vende por ti <span className="text-pautero-blue">(Diseño + Copy)</span></h3>
                <p className="text-gray-600">Tu vendedor digital 24/7 que nunca deja de trabajar.</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-pautero-light-blue to-pautero-light-fuchsia rounded-lg">
              <p className="text-lg font-medium">
                ¿Te suena? Respira... para eso existe <span className="font-bold text-pautero-fuchsia">El Pautero</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutions;
