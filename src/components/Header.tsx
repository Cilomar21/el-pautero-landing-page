
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const handleCtaClick = () => {
    // This can be updated to open WhatsApp or Calendly based on preference
    window.open("https://calendly.com/", "_blank");
  };

  return (
    <header className="bg-pautero-black text-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span className="text-pautero-blue">El</span>
        <span className="text-pautero-fuchsia">Pautero</span>
      </div>
      <Button 
        onClick={handleCtaClick}
        className="bg-pautero-fuchsia hover:bg-opacity-90 flex items-center gap-2"
      >
        <Calendar className="h-4 w-4" />
        <span>Agenda tu diagnóstico</span>
      </Button>
    </header>
  );
};

export default Header;
