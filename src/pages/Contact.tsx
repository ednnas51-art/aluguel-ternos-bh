import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

const WHATSAPP_LINK = `https://wa.me/5531999999999?text=Olá! Gostaria de agendar uma prova.`;

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">Fale Conosco</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">Estamos prontos para tirar suas dúvidas e agendar sua prova.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="font-bold text-xl mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Telefone</p>
                      <p className="font-bold text-accent">(31) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Endereço</p>
                      <p className="font-bold text-accent">Rua da Elegância, 123 - Savassi</p>
                      <p className="text-sm text-slate-500">Belo Horizonte - MG</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Horário</p>
                      <p className="font-bold text-accent">Seg a Sex: 09h às 19h</p>
                      <p className="text-sm text-slate-500">Sáb: 09h às 14h</p>
                    </div>
                  </div>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  className="mt-10 w-full bg-primary text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
                >
                  <MessageCircle size={20} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-2xl mb-8 text-accent">Envie uma Mensagem</h3>
                <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nome Completo</label>
                    <input type="text" className="p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">E-mail</label>
                    <input type="email" className="p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="seu@email.com" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assunto</label>
                    <select className="p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                      <option>Aluguel para Casamento</option>
                      <option>Aluguel para Formatura</option>
                      <option>Padrinhos (Grupo)</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mensagem</label>
                    <textarea rows={4} className="p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button className="md:col-span-2 bg-accent text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-100">
                    Enviar Mensagem
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[21/9] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59999.99999999999!2d-43.9333!3d-19.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b3541d034887d40!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Mapa de Belo Horizonte"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
