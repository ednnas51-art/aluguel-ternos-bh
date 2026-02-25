import { motion } from 'motion/react';
import { Scissors, Calendar, UserCheck, Clock, MessageCircle } from 'lucide-react';

const MODELS = [
  { name: 'Slim Fit', description: 'Corte moderno e ajustado ao corpo, ideal para quem busca elegância contemporânea.' },
  { name: 'Tradicional', description: 'Corte clássico e confortável, perfeito para todos os biotipos e estilos de cerimônia.' },
  { name: 'Smoking', description: 'O ápice do rigor. Ideal para casamentos black-tie e eventos noturnos de gala.' },
];

const COLORS = [
  { name: 'Azul Marinho', hex: '#1e293b' },
  { name: 'Grafite', hex: '#4b5563' },
  { name: 'Preto', hex: '#000000' },
  { name: 'Prata', hex: '#94a3b8' },
];

const WHATSAPP_LINK = `https://wa.me/5531999999999?text=Olá! Gostaria de saber mais sobre os serviços de locação.`;

export default function Services() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-accent text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossos Serviços de Locação</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Oferecemos uma solução completa para você estar impecável em qualquer evento social.
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-accent mb-4">Como funciona a locação?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Um processo pensado na sua comodidade e no ajuste perfeito.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Calendar />, title: 'Agendamento', desc: 'Agende sua visita via WhatsApp para um atendimento exclusivo.' },
              { icon: <UserCheck />, title: 'Escolha e Prova', desc: 'Prove nossos modelos e receba consultoria de nossos especialistas.' },
              { icon: <Scissors />, title: 'Ajustes', desc: 'Nossa alfaiataria interna realiza todos os ajustes necessários.' },
              { icon: <Clock />, title: 'Retirada e Devolução', desc: 'Retire 2 dias antes e devolva no primeiro dia útil após o evento.' },
            ].map((step, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-accent">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-accent mb-12 text-center">Modelos Disponíveis</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {MODELS.map((model) => (
              <div key={model.name} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-accent">{model.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{model.description}</p>
                <div className="h-1 w-12 bg-primary rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-accent mb-6">Cores Mais Procuradas</h2>
          <p className="text-slate-500 mb-12">Trabalhamos com as cores clássicas e as tendências do momento.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {COLORS.map((color) => (
              <div key={color.name} className="flex flex-col items-center gap-3">
                <div 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-xl"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="font-bold text-slate-700">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Deseja ver nosso catálogo completo?</h2>
          <p className="mb-10 opacity-90">Chame agora no WhatsApp e receba fotos de nossos modelos atualizados.</p>
          <a 
            href={WHATSAPP_LINK}
            className="bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:bg-slate-50 transition-all shadow-xl"
          >
            Solicitar Catálogo <MessageCircle size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}
