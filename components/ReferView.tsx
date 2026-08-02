import { Gift, Share2, Copy, Send, MessageCircle } from 'lucide-react';

export default function ReferView() {
  return (
    <div className="p-6 space-y-8 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Header section */}
      <div className="flex flex-col items-center text-center py-8">
        <div className="w-16 h-16 bg-[#1A1A1A] border border-white/10 rounded flex items-center justify-center text-[#C19A6B] mb-6 rotate-45">
          <Gift className="w-6 h-6 -rotate-45" strokeWidth={1} />
        </div>
        <h2 className="text-4xl font-light text-white mb-4 font-serif italic tracking-tight">Refer & Earn</h2>
        <p className="text-white/40 text-xs tracking-widest uppercase max-w-[250px] leading-relaxed">Invite your friends & earn unlimited referral commission.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1A1A1A] border border-white/10 rounded p-5 relative overflow-hidden h-36 flex flex-col justify-between shadow-2xl">
          <div className="w-8 h-8 border border-white/10 bg-white/5 rounded flex items-center justify-center">
            <Share2 className="w-4 h-4 text-white/60" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Referred Players</p>
            <h3 className="text-3xl font-light text-white">0</h3>
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-[#C19A6B]/20 rounded p-5 relative overflow-hidden h-36 flex flex-col justify-between shadow-2xl">
           <div className="w-8 h-8 border border-[#C19A6B]/20 bg-[#C19A6B]/5 rounded flex items-center justify-center">
            <span className="font-serif italic text-lg text-[#C19A6B]">₹</span>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#C19A6B]/60 mb-1">Total Earning</p>
            <h3 className="text-3xl font-light text-[#C19A6B]">₹ 0</h3>
          </div>
        </div>
      </div>

      {/* Code Section */}
      <div className="bg-[#1A1A1A] rounded p-6 shadow-2xl border border-white/5">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-4 text-center">Your Referral Code</h3>
        <div className="bg-[#0D0D0D] border border-white/10 rounded p-4 flex items-center justify-between mb-6">
          <span className="text-[#E5E5E5] text-2xl font-light tracking-[0.4em] pl-4 font-serif">895436</span>
          <button className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors">
            <Copy className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-transparent border border-white/20 text-white/80 hover:border-white/60 rounded py-3 text-[9px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors">
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            WhatsApp
          </button>
          <button className="bg-transparent border border-white/20 text-white/80 hover:border-white/60 rounded py-3 text-[9px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors">
            <Send className="w-4 h-4" strokeWidth={1.5} />
            Telegram
          </button>
        </div>
      </div>

      {/* How it works */}
      <div className="border-t border-white/5 pt-8 pb-4">
         <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#C19A6B] text-center mb-8">How It Works</h3>
         <div className="space-y-6">
           <div className="flex items-start gap-5">
              <div className="w-6 h-6 rounded border border-white/10 bg-[#1A1A1A] flex items-center justify-center text-[10px] font-serif italic text-white/60 shrink-0 mt-0.5">1</div>
              <p className="text-[11px] uppercase tracking-widest text-white/40 leading-relaxed">Share your referral code with friends on WhatsApp, Telegram etc.</p>
           </div>
           <div className="flex items-start gap-5">
              <div className="w-6 h-6 rounded border border-white/10 bg-[#1A1A1A] flex items-center justify-center text-[10px] font-serif italic text-white/60 shrink-0 mt-0.5">2</div>
              <p className="text-[11px] uppercase tracking-widest text-white/40 leading-relaxed">Friend signs up and plays their first battle.</p>
           </div>
           <div className="flex items-start gap-5">
              <div className="w-6 h-6 rounded border border-white/10 bg-[#1A1A1A] flex items-center justify-center text-[10px] font-serif italic text-[#C19A6B] border-[#C19A6B]/30 shrink-0 mt-0.5">3</div>
              <p className="text-[11px] uppercase tracking-widest text-[#C19A6B]/80 leading-relaxed">You earn instant cash bonus in your winning wallet!</p>
           </div>
         </div>
      </div>

    </div>
  );
}
