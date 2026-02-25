import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Scissors, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = "5531999999999";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre o aluguel de ternos.`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Scissors className="text-white" size={18} />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-accent">Elegance Ternos</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${location.pathname === link.path ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold items-center gap-2 transition-all shadow-lg shadow-red-200"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-4 px-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="bg-primary text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
