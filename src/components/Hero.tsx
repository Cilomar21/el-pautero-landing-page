
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const handleCtaClick = () => {
    // This can be updated to open WhatsApp or Calendly based on preference
    window.open("https://api.whatsapp.com/send?phone=YOURPHONENUMBER", "_blank");
  };

  return (
    <section className="section-padding bg-gradient-to-b from-pautero-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              El problema no es tu producto, <span className="gradient-text">es tu sistema de ventas.</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Convierte tu presencia digital en ventas reales con estrategias probadas y resultados medibles.
            </p>
            <Button 
              onClick={handleCtaClick}
              className="btn-primary text-lg"
              size="lg"
            >
              Quiero vender más
            </Button>
          </div>
          <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center border-2 border-pautero-blue">
            {/* Video placeholder - replace with actual video component */}
            <div className="text-center">
              <p className="text-gray-400 mb-2">Tu video promocional aquí</p>
              <p className="text-xs text-gray-500">Formato recomendado: 16:9</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
