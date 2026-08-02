import { X, Gamepad2, Landmark, Gift, UserPlus, FileText, Headphones } from 'lucide-react';

export default function SideMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  const menuItems = [
    { icon: Gamepad2, title: 'Play Zone', desc: 'Start playing now' },
    { icon: Landmark, title: 'Withdraw Money', desc: 'Transfer your winnings' },
    { icon: Gift, title: 'Refer Cash', desc: 'Earn referral bonus' },
    { icon: UserPlus, title: 'Invite & Earn', desc: 'Invite friends & win' },
    { icon: FileText, title: 'History', desc: 'View all matches' },
    { icon: Headphones, title: 'Customer Support', desc: 'We are here to help' },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-[#0D0D0D]/80 backdrop-blur-sm z-50 transition-opacity" onClick={onClose} />
      <div className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#0D0D0D] border-r border-white/5 z-50 overflow-y-auto animate-in slide-in-from-left p-6 md:absolute">
        <div className="flex items-center justify-between bg-[#1A1A1A] rounded border border-white/5 p-4 shadow-2xl mb-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-gradient-to-br from-[#C19A6B] to-[#8C6B42] rounded-sm flex items-center justify-center font-serif text-white text-[10px] shadow-md">SHR</div>
             <span className="font-serif italic text-xl tracking-tighter text-[#E5E5E5] uppercase">Sihra Ludobattle</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 rounded transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {menuItems.map((item, idx) => (
            <button key={idx} className="w-full flex items-center gap-4 bg-transparent hover:bg-white/[0.02] p-4 rounded border border-white/5 active:scale-[0.98] transition-all text-left group">
              <div className="w-10 h-10 rounded bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#C19A6B] group-hover:border-[#C19A6B]/30 transition-colors">
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-[#E5E5E5] text-sm tracking-wide uppercase">{item.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
