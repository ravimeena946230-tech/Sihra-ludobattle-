import { Download, Upload, Wallet } from 'lucide-react';

export default function WalletView() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Top Balance Card */}
      <div className="bg-[#1A1A1A] border border-[#C19A6B]/20 rounded p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C19A6B] opacity-[0.03] blur-[60px] rounded-full"></div>
        
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#C19A6B] font-semibold mb-2 relative z-10">Total Wallet Balance</p>
        <h2 className="text-white text-6xl font-light mb-12 relative z-10 font-serif tracking-tight">₹ 35</h2>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="bg-[#0D0D0D]/50 border border-white/5 rounded p-5">
            <div className="w-8 h-8 bg-white/5 border border-white/10 rounded mb-4 flex items-center justify-center">
              <Download className="w-4 h-4 text-white/60" strokeWidth={1.5} />
            </div>
            <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Deposited</p>
            <p className="text-[#E5E5E5] font-light text-2xl">₹ 2910</p>
          </div>
          
          <div className="bg-[#0D0D0D]/50 border border-white/5 rounded p-5">
            <div className="w-8 h-8 bg-white/5 border border-white/10 rounded mb-4 flex items-center justify-center">
              <Upload className="w-4 h-4 text-white/60" strokeWidth={1.5} />
            </div>
            <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Withdrawn</p>
            <p className="text-[#E5E5E5] font-light text-2xl">₹ 35</p>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Deposit */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded p-6 relative overflow-hidden shadow-2xl h-48 flex flex-col justify-between cursor-pointer group hover:border-[#C19A6B]/30 transition-colors">
          <div className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center group-hover:border-[#C19A6B]/30 transition-colors">
            <Wallet className="w-5 h-5 text-white/60 group-hover:text-[#C19A6B] transition-colors" strokeWidth={1.5} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-[#E5E5E5] text-sm uppercase tracking-widest font-medium mb-1 group-hover:text-[#C19A6B] transition-colors">Deposit</h3>
            <p className="text-white/40 text-[10px] uppercase tracking-wider leading-relaxed">Add money instantly to your wallet.</p>
          </div>
        </div>

        {/* Withdraw */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded p-6 relative overflow-hidden shadow-2xl h-48 flex flex-col justify-between cursor-pointer group hover:border-white/30 transition-colors">
          <div className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center group-hover:border-white/30 transition-colors">
            <Upload className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" strokeWidth={1.5} />
          </div>

          <div className="relative z-10">
            <h3 className="text-[#E5E5E5] text-sm uppercase tracking-widest font-medium mb-1">Withdraw</h3>
            <p className="text-white/40 text-[10px] uppercase tracking-wider leading-relaxed">Transfer winnings directly to your bank.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
