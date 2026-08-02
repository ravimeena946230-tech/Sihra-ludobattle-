import { Home, Headphones, Gift, Wallet, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BottomNav({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'home', icon: Home },
    { id: 'support', icon: Headphones },
    { id: 'refer', icon: Gift },
    { id: 'wallet', icon: Wallet },
    { id: 'profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 pb-8 z-40 md:max-w-md md:mx-auto md:pb-6">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "p-3 rounded-full transition-all duration-300 relative group",
                isActive ? "text-[#C19A6B]" : "text-white/40 hover:text-white/80"
              )}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-[#C19A6B]/10 scale-100 transition-transform border border-[#C19A6B]/20" style={{ zIndex: -1 }}></span>
              )}
              <Icon className={cn("w-6 h-6 transition-transform", isActive ? "scale-110" : "group-hover:scale-110")} strokeWidth={isActive ? 2.5 : 1.5} />
            </button>
          )
        })}
      </div>
    </div>
  );
}
