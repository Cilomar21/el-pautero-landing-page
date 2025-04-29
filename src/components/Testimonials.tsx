
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-gradient-to-br from-pautero-light-blue to-pautero-blue">
            <div className="text-4xl text-white mb-4">📢</div>
            <blockquote className="text-white text-lg font-medium mb-4">
              "Con sus videos y campañas aumenté mis ventas 3x en un mes."
            </blockquote>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-white rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-white">Andrea G.</p>
                <p className="text-white text-opacity-80 text-sm">Marca de cosmética natural</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="testimonial-card bg-gradient-to-br from-pautero-light-fuchsia to-pautero-fuchsia">
            <div className="text-4xl text-white mb-4">📢</div>
            <blockquote className="text-white text-lg font-medium mb-4">
              "Tenía cero presencia digital. Hoy tengo web, contenido y leads diarios."
            </blockquote>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-white rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-white">Marco T.</p>
                <p className="text-white text-opacity-80 text-sm">Coach de desarrollo personal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
