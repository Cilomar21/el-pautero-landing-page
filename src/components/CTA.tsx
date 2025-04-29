
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=YOURPHONENUMBER", "_blank");
  };
  
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/", "_blank");
  };
  
  const handleEmailClick = () => {
    window.open("mailto:contacto@elpautero.com", "_blank");
  };

  return (
    <section className="section-padding bg-gradient-to-br from-pautero-black via-pautero-dark-gray to-pautero-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para transformar tu sistema de ventas?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Da el primer paso para aumentar tus ventas y construir un sistema que funcione por ti.
        </p>
        
        <Button 
          onClick={handleCalendlyClick}
          className="btn-primary text-lg"
          size="lg"
        >
          Quiero vender más con El Pautero
        </Button>
        
        <div className="mt-12 flex justify-center gap-8">
          <button onClick={handleWhatsAppClick} className="text-white hover:text-pautero-fuchsia transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
          
          <button onClick={handleCalendlyClick} className="text-white hover:text-pautero-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
          
          <button onClick={handleEmailClick} className="text-white hover:text-pautero-fuchsia transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
