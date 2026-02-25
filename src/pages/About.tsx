import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Tradição e Modernidade em Belo Horizonte</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A Elegance Ternos nasceu com o propósito de oferecer mais do que apenas um aluguel de roupas. Nossa missão é proporcionar uma experiência de confiança e estilo para os momentos mais importantes da sua vida.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-primary">+10 Anos</span>
                <span className="text-sm text-slate-500">De experiência no mercado</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-primary">+5.000</span>
                <span className="text-sm text-slate-500">Clientes satisfeitos</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-store/800/600" 
              alt="Nossa Loja em BH" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Público Atendido */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Quem Atendemos</h2>
            <p className="text-slate-500">Soluções personalizadas para diferentes perfis e eventos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Noivos', desc: 'O protagonista do dia merece um traje impecável e exclusivo.', icon: <Award className="text-primary" /> },
              { title: 'Padrinhos', desc: 'Harmonia e elegância para o altar com pacotes especiais para grupos.', icon: <Users className="text-primary" /> },
              { title: 'Formandos', desc: 'Estilo moderno para celebrar essa grande conquista acadêmica.', icon: <ShieldCheck className="text-primary" /> },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-accent">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Nossos Compromissos</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Qualidade Superior</h4>
                    <p className="text-slate-400 text-sm">Trabalhamos apenas com tecidos nobres e acabamento de primeira linha.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Atendimento Humanizado</h4>
                    <p className="text-slate-400 text-sm">Cada cliente é único e recebe atenção total de nossos consultores.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Pontualidade</h4>
                    <p className="text-slate-400 text-sm">Garantimos a entrega do seu traje no prazo combinado, sem imprevistos.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/about1/400/400" alt="Detalhe Terno" className="rounded-2xl opacity-80" referrerPolicy="no-referrer" />
               <img src="https://picsum.photos/seed/about2/400/400" alt="Atendimento" className="rounded-2xl opacity-80 mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
