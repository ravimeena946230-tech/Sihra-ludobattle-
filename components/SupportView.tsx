import { Headphones, Phone, MessageCircle, Zap } from 'lucide-react';

export default function SupportView() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center py-8">
        <div className="w-16 h-16 bg-[#1A1A1A] border border-white/10 rounded flex items-center justify-center text-[#C19A6B] mb-6 rotate-45">
          <Headphones className="w-6 h-6 -rotate-45" strokeWidth={1} />
        </div>
        <h2 className="text-4xl font-light text-white mb-4 font-serif italic tracking-tight">Support</h2>
        <p className="text-white/40 text-[10px] tracking-widest uppercase max-w-[280px] leading-relaxed">Instant help for deposit, withdrawal, KYC & gameplay issues.</p>
      </div>

      {/* Support Cards */}
      <div className="bg-[#1A1A1A] border border-white/10 rounded p-6 relative overflow-hidden shadow-2xl active:scale-[0.98] transition-transform cursor-pointer group hover:border-[#C19A6B]/30">
        <div className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center mb-5 group-hover:border-[#C19A6B]/30 transition-colors">
          <Phone className="w-5 h-5 text-white/60 group-hover:text-[#C19A6B] transition-colors" strokeWidth={1.5} />
        </div>
        <h3 className="text-white font-medium text-sm tracking-widest uppercase mb-1">Call Support</h3>
        <p className="text-white/40 text-[10px] tracking-wider uppercase font-serif italic">+999999999</p>
      </div>

      <div className="bg-[#1A1A1A] border border-white/10 rounded p-6 relative overflow-hidden shadow-2xl active:scale-[0.98] transition-transform cursor-pointer group hover:border-[#C19A6B]/30">
        <div className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center mb-5 group-hover:border-[#C19A6B]/30 transition-colors">
          <MessageCircle className="w-5 h-5 text-white/60 group-hover:text-[#C19A6B] transition-colors" strokeWidth={1.5} />
        </div>
        <h3 className="text-white font-medium text-sm tracking-widest uppercase mb-1">WhatsApp</h3>
        <p className="text-white/40 text-[10px] tracking-wider uppercase">Instant Chat Support</p>
      </div>

      <div className="bg-[#1A1A1A] border border-white/10 rounded p-6 relative overflow-hidden shadow-2xl active:scale-[0.98] transition-transform cursor-pointer group hover:border-[#C19A6B]/30">
        <div className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center mb-5 group-hover:border-[#C19A6B]/30 transition-colors">
          <Zap className="w-5 h-5 text-white/60 group-hover:text-[#C19A6B] transition-colors" strokeWidth={1.5} />
        </div>
        <h3 className="text-white font-medium text-sm tracking-widest uppercase mb-1">Fast Response</h3>
        <p className="text-white/40 text-[10px] tracking-wider uppercase max-w-[200px]">Average response under 2 minutes.</p>
      </div>

      <p className="text-center text-[9px] uppercase tracking-widest text-[#C19A6B]/60 mt-12 px-8">
        Built for the discerning professional.
      </p>

    </div>
  );
}
