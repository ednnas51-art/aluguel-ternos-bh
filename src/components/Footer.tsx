import { Scissors, Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Scissors className="text-white" size={24} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">Elegance</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Especialistas em aluguel de ternos masculinos em Belo Horizonte. Elegância, qualidade e atendimento personalizado para o seu grande dia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Navegação</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                (31) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                contato@eleganceternos.com.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                Savassi, Belo Horizonte - MG
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 Elegance Ternos. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
