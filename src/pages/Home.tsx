import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  UserCheck, 
  Scissors, 
  Calendar, 
  Clock, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

const WHATSAPP_LINK = `https://wa.me/5531999999999?text=Olá! Gostaria de agendar uma prova.`;

const SERVICES = [
  { icon: <Award className="text-primary" size={32} />, title: 'Noivos', desc: 'Trajes exclusivos para o protagonista do grande dia.' },
  { icon: <Users className="text-primary" size={32} />, title: 'Padrinhos', desc: 'Padronização e elegância para o altar com pacotes especiais.' },
  { icon: <ShieldCheck className="text-primary" size={32} />, title: 'Formandos', desc: 'Cortes modernos para celebrar sua conquista acadêmica.' },
];

const PROCESS = [
  { step: '01', title: 'Agendamento', desc: 'Reserve seu horário via WhatsApp.' },
  { step: '02', title: 'Prova e Ajustes', desc: 'Consultoria e alfaiataria sob medida.' },
  { step: '03', title: 'Retirada', desc: 'Seu traje pronto 2 dias antes do evento.' },
];

const GALLERY = [
  { src: 'https://picsum.photos/seed/suit-g1/600/800', title: 'Slim Fit Azul Marinho' },
  { src: 'https://picsum.photos/seed/suit-g2/600/800', title: 'Grafite Tradicional' },
  { src: 'https://picsum.photos/seed/suit-g3/600/800', title: 'Smoking Black Tie' },
  { src: 'https://picsum.photos/seed/suit-g4/600/800', title: 'Prata Elegance' },
];

const TESTIMONIALS = [
  { name: 'Ricardo Silva', role: 'Noivo', text: 'Atendimento impecável! O terno ficou perfeito no corpo, parecia feito sob medida do zero.' },
  { name: 'Lucas Oliveira', role: 'Formando', text: 'Aluguei para minha formatura e fui muito elogiado. O corte slim deles é diferenciado.' },
  { name: 'André Santos', role: 'Padrinho', text: 'Fomos em grupo de 10 padrinhos e todos ficaram satisfeitos. Organização nota 10.' },
];

const FAQ_DATA = [
  { q: 'Qual o prazo para reserva?', a: 'Recomendamos de 30 a 60 dias de antecedência para garantir o modelo desejado.' },
  { q: 'Os ajustes estão inclusos?', a: 'Sim! Todos os ajustes de barra, manga e cintura estão inclusos no valor da locação.' },
  { q: 'Como funciona a devolução?', a: 'A devolução deve ser feita no primeiro dia útil após o evento.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/hero-suit/1920/1080" 
            alt="Fundo Elegante" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Especialista em Belo Horizonte
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Elegância Sob Medida para o seu <span className="text-primary">Grande Dia</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Aluguel de ternos premium com ajustes de alfaiataria inclusos. Atendimento exclusivo para noivos, padrinhos e formandos em BH.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all shadow-2xl shadow-primary/20"
              >
                Agendar Prova Gratuita
                <MessageCircle size={24} />
              </a>
              <a href="#servicos" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 backdrop-blur-sm transition-all border border-white/20">
                Ver Modelos
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="servicos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-accent mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all text-center"
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-accent text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-10">Como funciona a locação?</h2>
              <div className="space-y-12">
                {PROCESS.map((p, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-5xl font-serif font-bold text-primary/30">{p.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                      <p className="text-slate-400">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5">
                <img src="https://picsum.photos/seed/process/800/800" alt="Processo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-3xl shadow-2xl">
                <Scissors size={40} />
                <p className="mt-4 font-bold text-xl">Alfaiataria Própria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-accent mb-4">Galeria de Modelos</h2>
              <p className="text-slate-500">Confira nossas opções mais requisitadas.</p>
            </div>
            <a href={WHATSAPP_LINK} className="text-primary font-bold flex items-center gap-2 hover:underline">
              Ver Catálogo Completo <ArrowRight size={20} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GALLERY.map((img, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-white font-bold">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-accent mb-8">Vantagens Elegance</h2>
              <div className="grid gap-6">
                {[
                  'Ajustes precisos feitos por alfaiates experientes.',
                  'Ternos higienizados e prontos para uso.',
                  'Consultoria de imagem gratuita na loja.',
                  'Pacotes exclusivos para grupos de padrinhos.',
                  'Localização privilegiada na Savassi, BH.'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-primary rounded-3xl flex flex-col items-center justify-center text-white p-6 text-center">
                  <Star size={32} className="mb-2" />
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="text-xs opacity-80 uppercase tracking-widest">Avaliação Google</p>
                </div>
                <img src="https://picsum.photos/seed/adv1/400/400" alt="Vantagem" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 mt-8">
                <img src="https://picsum.photos/seed/adv2/400/400" alt="Vantagem" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                <div className="aspect-square bg-accent rounded-3xl flex flex-col items-center justify-center text-white p-6 text-center">
                  <Users size={32} className="mb-2" />
                  <p className="text-3xl font-bold">+10k</p>
                  <p className="text-xs opacity-80 uppercase tracking-widest">Clientes BH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-accent text-center mb-16">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} />
                  </div>
                  <div>
                    <p className="font-bold text-accent">{t.name}</p>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-accent text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-accent">{item.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="p-6 pt-0 text-slate-500 border-t border-slate-100">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Pronto para estar impecável?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Agende sua prova gratuita e descubra por que somos a escolha número 1 em Belo Horizonte.
            </p>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-4 bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl"
            >
              Falar no WhatsApp Agora
              <MessageCircle size={28} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
