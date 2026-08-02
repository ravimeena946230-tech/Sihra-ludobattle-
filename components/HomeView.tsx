import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function HomeView() {
  return (
    <div className="p-6 space-y-8 animate-in fade-in zoom-in-95 duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-light text-white font-serif italic">Play Arena</h1>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#C19A6B] font-semibold">Choose your favorite battle</span>
        </div>
        <button className="bg-transparent border border-[#C19A6B] text-[#C19A6B] px-4 py-2 rounded text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#C19A6B] hover:text-[#0D0D0D] transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
          Live Games
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Game Card */}
        <div className="relative rounded bg-[#1A1A1A] border border-white/10 overflow-hidden aspect-[4/5] shadow-2xl group cursor-pointer active:scale-95 transition-transform p-1">
          <div className="relative w-full h-full rounded overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/ludo3/400/500" 
              alt="Ludo" 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent flex flex-col justify-end p-4">
              <h2 className="text-white font-light text-2xl leading-none mb-2 font-serif italic">Sihra<br/>Ludobattle</h2>
              <span className="text-[9px] font-semibold text-[#C19A6B] tracking-[0.2em] uppercase">Ludo Game</span>
            </div>
            <div className="absolute top-3 left-3 bg-[#1A1A1A] border border-white/20 text-white/80 text-[9px] uppercase tracking-widest px-2 py-1 rounded shadow-sm">
              LIVE
            </div>
          </div>
        </div>

        {/* Support Card */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded p-4 flex flex-col items-center justify-center gap-4 relative overflow-hidden shadow-2xl cursor-pointer active:scale-95 transition-transform group">
          <div className="absolute top-3 left-3 bg-[#1A1A1A] border border-white/20 text-white/80 text-[9px] uppercase tracking-widest px-2 py-1 rounded z-10 shadow-sm">
            LIVE
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 rounded-full flex items-center justify-center group-hover:border-[#C19A6B]/40 transition-colors">
            <MessageCircle className="w-8 h-8 text-[#C19A6B]" strokeWidth={1} />
          </div>
          <h3 className="text-white/80 font-medium text-[10px] tracking-[0.2em] uppercase">SUPPORT</h3>
        </div>
      </div>

      {/* Notice Board */}
      <div className="bg-[#1A1A1A] border border-[#C19A6B]/20 text-[#E5E5E5] p-5 rounded text-[11px] leading-relaxed relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#C19A6B] opacity-[0.03] blur-[40px] rounded-full"></div>
        <p className="relative z-10 opacity-80">
          <span className="text-[#C19A6B] uppercase tracking-wider block mb-2 font-semibold">Important Notice</span>
          Sihra ludobattle में आपका स्वागत है। अब withdrawal तुरंत पाये 10min में। अगर किसी मेंबर द्वारा गलत अपडेट या पोपुलर कोड दिया तो id ब्लॉक कर दी जायेगी धन्यवाद। WhatsApp support no: 9216809414. महत्वपूर्ण सूचना: सभी सदस्यों को सूचित किया जाता है कि हमारी वेबसाइट पर दिया गया पुराना WhatsApp नंबर ब्लॉक हो जाने के कारण उसे बदल दिया गया है। अब से किसी भी प्रकार की सहायता, Deposit, Withdrawal या अन्य जानकारी के लिए केवल हमारे नए WhatsApp नंबर पर ही संपर्क करें। नया WhatsApp नंबर: 9216809414. कृपया पुराने नंबर पर संपर्क न करें। आपके सहयोग के लिए धन्यवाद। - Team Sihra ludobattle
        </p>
      </div>

      {/* Create Battle */}
      <div className="bg-[#1A1A1A] border border-white/10 rounded p-6 shadow-2xl relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#C19A6B]/10 to-transparent rounded blur opacity-25"></div>
        <div className="relative">
          <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-4 opacity-80">Create Battle</h3>
          <div className="flex gap-3">
            <input type="number" placeholder="ENTER AMOUNT" className="flex-1 rounded bg-[#0D0D0D] border border-white/10 px-4 py-3 outline-none text-[#E5E5E5] text-sm tracking-widest font-medium focus:border-[#C19A6B]/50 transition-colors placeholder:text-white/20" />
            <button className="bg-[#1A1A1A] border border-[#C19A6B]/50 text-[#C19A6B] hover:bg-[#C19A6B] hover:text-[#0D0D0D] px-8 py-3 rounded text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors">SET</button>
          </div>
        </div>
      </div>

      {/* Open Battles */}
      <div>
        <div className="text-center py-4 border-y border-white/5 mb-6">
           <span className="text-[10px] tracking-[0.3em] uppercase text-[#C19A6B] font-semibold">Open Battles</span>
        </div>
        
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="bg-[#1A1A1A] border border-white/5 rounded p-5 shadow-2xl flex items-center justify-between group hover:border-white/10 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] border border-white/20 text-white/60 uppercase tracking-widest px-2 py-0.5 rounded">LIVE</span>
                  <span className="font-serif italic text-white/90 text-sm">Ludo247</span>
                </div>
                <div className="flex gap-10">
                  <div>
                    <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] mb-1">Entry Fee</p>
                    <p className="font-light text-white text-xl">₹{i === 1 ? '3000' : '3500'}</p>
                  </div>
                  <div className="w-px bg-white/5"></div>
                  <div>
                    <p className="text-[9px] text-[#C19A6B]/60 uppercase tracking-[0.2em] mb-1">Winning Prize</p>
                    <p className="font-light text-[#C19A6B] text-xl">₹{i === 1 ? '5850' : '6825'}</p>
                  </div>
                </div>
              </div>
              <button className="bg-transparent border border-white/20 text-white/80 hover:border-white/60 px-6 py-2.5 rounded text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors">
                Play
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Running Battles */}
      <div>
         <div className="text-center py-4 border-y border-white/5 mb-6 mt-8">
           <span className="text-[10px] tracking-[0.3em] uppercase text-[#C19A6B] font-semibold">Running Battles</span>
        </div>
        <div className="bg-[#1A1A1A] rounded p-6 shadow-2xl border border-white/5 mb-6">
           <div className="flex justify-between items-center mb-8">
             <span className="truncate w-24 text-[11px] uppercase tracking-widest opacity-60">uKJYG</span>
             <span className="border border-[#C19A6B]/30 text-[#C19A6B] text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded">● RUNNING</span>
             <span className="truncate w-24 text-right text-[11px] uppercase tracking-widest opacity-60">Monu mas...</span>
           </div>
           <div className="flex justify-between items-center px-8 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/5"></div>
             <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-full flex items-center justify-center relative z-10 shadow-xl">
               <span className="text-white/40 font-serif italic text-xl">P1</span>
             </div>
             <span className="font-serif italic text-2xl text-[#C19A6B] bg-[#1A1A1A] px-4 relative z-10">VS</span>
             <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-full flex items-center justify-center relative z-10 shadow-xl">
               <span className="text-white/40 font-serif italic text-xl">P2</span>
             </div>
           </div>
        </div>
      </div>

    </div>
  );
}
