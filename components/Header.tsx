import { Menu } from 'lucide-react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-[#0D0D0D]/90 backdrop-blur-md sticky top-0 z-40 border-b border-white/5">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
          <Menu className="w-6 h-6 text-[#E5E5E5]" />
        </button>
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-gradient-to-br from-[#C19A6B] to-[#8C6B42] rounded-sm flex items-center justify-center font-serif text-white text-[10px] shadow-md shadow-[#C19A6B]/20">SHR</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center text-[#E5E5E5] px-3 py-1 rounded text-sm tracking-widest font-medium border border-white/10 bg-[#1A1A1A]">
          <span className="mr-2 text-lg leading-none opacity-80">👛</span> 35
        </div>
        <div className="flex items-center text-[#E5E5E5] px-3 py-1 rounded text-sm tracking-widest font-medium border border-[#C19A6B]/30 bg-[#C19A6B]/10">
          <span className="mr-2 text-lg leading-none opacity-80">🎁</span> 0
        </div>
      </div>
    </header>
  );
}
