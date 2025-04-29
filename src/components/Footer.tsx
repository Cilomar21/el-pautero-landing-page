
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pautero-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-pautero-blue">El</span>
              <span className="text-pautero-fuchsia">Pautero</span>
            </div>
            <p className="text-gray-400">Tu sistema de ventas digital</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-gray-300 hover:text-pautero-fuchsia transition-colors">Inicio</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-pautero-fuchsia transition-colors">Cómo funciona</a>
            <a href="#faq" className="text-gray-300 hover:text-pautero-fuchsia transition-colors">FAQ</a>
            <a href="mailto:contacto@elpautero.com" className="text-gray-300 hover:text-pautero-fuchsia transition-colors">Contacto</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} El Pautero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
