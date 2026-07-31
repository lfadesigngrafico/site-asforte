import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface SectorsSectionProps {
  onOpenQuoteModal: () => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenQuoteModal }) => {
  const sectors = [
    'PAVIMENTAÇÃO',
    'RECAPEAMENTO',
    'CONSERVAÇÃO VIÁRIA',
    'PÁTIOS INDUSTRIAIS E LOGÍSTICOS',
    'ACESSOS',
    'ESTACIONAMENTOS',
    'OBRAS PÚBLICAS E PRIVADAS DE INFRAESTRUTURA.',
  ];

  const leftImage = 'https://d335luupugsy2.cloudfront.net/cms/files/38500/1785504703/$b15e223gn1c';

  return (
    <section id="setores" className="w-full bg-[#192F4D] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[550px] lg:min-h-[640px]">
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-6 relative min-h-[350px] sm:min-h-[450px] lg:min-h-full overflow-hidden group"
        >
          <img
            src={leftImage}
            alt="Atendimento para diferentes aplicações - Pavimentação Asforte"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
        </motion.div>

        {/* Right Column: Dark Blue Content Area */}
        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center bg-[#192F4D]">
          
          {/* Section Header: Vertical Red Accent Bar + Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-stretch gap-4 mb-8"
          >
            <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[50px]" />
            <h2 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] uppercase leading-tight tracking-tight">
              ATENDIMENTO PARA<br />DIFERENTES APLICAÇÕES
            </h2>
          </motion.div>

          {/* List of 7 Sector Cards */}
          <div className="space-y-2.5 mb-8 max-w-xl">
            {sectors.map((sector, idx) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07, ease: 'easeOut' }}
                className="bg-[#2B4366]/80 border border-white/5 px-5 py-3.5 flex items-center gap-3.5 text-white font-barlow font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#324f79] hover:translate-x-1.5 transition-all duration-200 cursor-default shadow-sm"
              >
                <Check className="w-5 h-5 text-[#E3371E] stroke-[2.5] shrink-0" />
                <span>{sector}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#E3371E] hover:bg-[#c92d16] text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
            >
              FALAR COM O COMERCIAL
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


