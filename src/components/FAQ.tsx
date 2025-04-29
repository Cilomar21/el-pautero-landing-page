
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section className="section-padding bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Preguntas Frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium">¿Cuánto cuesta?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Nuestros servicios se adaptan a tus necesidades y presupuesto. Ofrecemos diferentes planes según los objetivos de tu negocio. Agenda una llamada para recibir un presupuesto personalizado basado en tus necesidades específicas.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium">¿Qué pasa si no vendo?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Nuestro sistema se basa en datos y análisis constante. Si no estás alcanzando los resultados esperados, ajustamos la estrategia hasta encontrar lo que funciona para tu negocio. Trabajamos con objetivos claros y medibles para garantizar el retorno de tu inversión.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium">¿Cuánto tiempo toma?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              El proceso de implementación inicial toma entre 2-4 semanas dependiendo de la complejidad de tu proyecto. Los primeros resultados suelen verse dentro del primer mes, con mejoras constantes conforme optimizamos las campañas basadas en datos reales.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-medium">¿Puedo pagar por partes?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Sí, ofrecemos planes de pago flexibles. Puedes dividir el costo en mensualidades según el plan que más se adapte a tu negocio. Consulta con nuestro equipo para conocer las opciones disponibles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
