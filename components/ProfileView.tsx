import { Pencil, CheckCircle, Gift, Gamepad2, Users } from 'lucide-react';

export default function ProfileView() {
  return (
    <div className="p-6 space-y-8 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Profile Card */}
      <div className="bg-[#1A1A1A] rounded p-6 relative overflow-hidden shadow-2xl border border-white/10">
         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[200px] h-[200px] bg-[#C19A6B] opacity-[0.03] blur-[40px] rounded-full"></div>
         
         <div className="flex flex-col gap-6 relative z-10">
           <div className="w-20 h-20 rounded border border-white/10 bg-[#0D0D0D] shrink-0 overflow-hidden relative flex flex-col items-center justify-end">
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 mb-1"></div>
              <div className="w-14 h-8 rounded-t-full border-t border-x border-white/10 bg-white/5"></div>
           </div>
           
           <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#0D0D0D] px-3 py-1.5 rounded border border-white/5 text-[9px] uppercase tracking-widest text-white/60">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C19A6B] opacity-80"></div>
                 +91 9929013182
              </div>
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="font-serif italic text-2xl text-white">XotMQ</span>
                <button className="w-8 h-8 border border-white/10 hover:border-white/30 rounded flex items-center justify-center text-white/60 hover:text-white transition-colors">
                  <Pencil className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase text-white/40">ravimeena946230@g...</span>
                <button className="w-8 h-8 border border-white/10 hover:border-white/30 rounded flex items-center justify-center text-white/60 hover:text-white transition-colors">
                  <Pencil className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
           </div>
         </div>
      </div>

      {/* KYC */}
      <div className="bg-[#1A1A1A] border border-[#C19A6B]/30 rounded p-5 flex items-center gap-5 shadow-2xl">
         <div className="w-10 h-10 border border-[#C19A6B]/20 bg-[#C19A6B]/5 rounded flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5 text-[#C19A6B]" strokeWidth={1.5} />
         </div>
         <div>
            <h3 className="font-medium text-sm tracking-widest uppercase text-[#E5E5E5] mb-1">KYC Verified</h3>
            <p className="text-[#C19A6B]/60 text-[10px] tracking-widest uppercase">Your account is secure</p>
         </div>
      </div>

      {/* Invite Banner */}
      <div className="bg-[#1A1A1A] rounded p-6 shadow-2xl border border-white/10">
         <div className="flex justify-between items-start mb-6">
            <div>
               <h3 className="font-serif italic text-xl text-white mb-2">
                 Invite & Earn
               </h3>
               <p className="text-white/40 text-[10px] tracking-widest uppercase">Apply referral & unlock rewards</p>
            </div>
            <div className="w-10 h-10 border border-white/10 bg-[#0D0D0D] text-white/60 rounded flex items-center justify-center">
               <Gift className="w-5 h-5" strokeWidth={1.5} />
            </div>
         </div>
         
         <div className="flex items-center gap-3 bg-[#0D0D0D] p-1.5 rounded border border-white/5">
            <input type="text" placeholder="ENTER REFERRAL CODE" className="flex-1 outline-none text-[10px] tracking-[0.2em] uppercase text-white bg-transparent px-3 placeholder:text-white/20" />
            <button className="w-10 h-10 bg-[#1A1A1A] border border-[#C19A6B]/30 rounded flex items-center justify-center text-[#C19A6B] shrink-0 hover:bg-[#C19A6B] hover:text-[#0D0D0D] transition-colors">
               <CheckCircle className="w-4 h-4" strokeWidth={1.5} />
            </button>
         </div>
      </div>

      {/* Game Stats */}
      <div>
         <div className="flex items-center justify-between mb-8 mt-10">
            <div>
               <span className="text-[10px] tracking-[0.3em] uppercase text-[#C19A6B] font-semibold block mb-2">Game Stats</span>
               <h3 className="font-serif italic text-2xl text-white">Performance</h3>
            </div>
            <div className="border border-white/10 bg-[#1A1A1A] px-3 py-1.5 rounded text-[9px] uppercase tracking-widest text-white/60 flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-[#C19A6B] animate-pulse"></div>
               Live Stats
            </div>
         </div>

         <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A] border border-white/10 rounded p-5 relative overflow-hidden h-32 shadow-2xl flex flex-col justify-between group hover:border-[#C19A6B]/30 transition-colors">
               <div>
                 <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-1">Coin Won</p>
                 <h3 className="text-2xl font-light text-white font-serif">₹ 3635</h3>
               </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded p-5 relative overflow-hidden h-32 shadow-2xl flex flex-col justify-between group hover:border-white/30 transition-colors">
               <div>
                 <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-1">Coin Loss</p>
                 <h3 className="text-2xl font-light text-white font-serif">₹ 3650</h3>
               </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded p-5 relative overflow-hidden h-32 shadow-2xl flex flex-col justify-between group hover:border-white/30 transition-colors">
               <div>
                 <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-1">Games Played</p>
                 <h3 className="text-2xl font-light text-white font-serif">52</h3>
               </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#C19A6B]/20 rounded p-5 relative overflow-hidden h-32 shadow-2xl flex flex-col justify-between group">
               <div>
                 <p className="text-[#C19A6B]/60 text-[9px] tracking-[0.2em] uppercase mb-1">Referral Earn</p>
                 <h3 className="text-2xl font-light text-[#C19A6B] font-serif">₹ 120</h3>
               </div>
            </div>
         </div>
      </div>
      
      <div className="h-10"></div>
    </div>
  );
}
