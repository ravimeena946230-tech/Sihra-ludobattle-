"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import SideMenu from '@/components/SideMenu';
import HomeView from '@/components/HomeView';
import WalletView from '@/components/WalletView';
import ReferView from '@/components/ReferView';
import SupportView from '@/components/SupportView';
import ProfileView from '@/components/ProfileView';

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E5E5E5] pb-28 font-sans selection:bg-[#C19A6B]/30 flex flex-col md:max-w-md md:mx-auto md:shadow-2xl md:border-x md:border-white/5 relative overflow-x-hidden">
      <Header onMenuClick={() => setIsDrawerOpen(true)} />
      
      <main className="flex-1 w-full relative z-0">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'wallet' && <WalletView />}
        {activeTab === 'refer' && <ReferView />}
        {activeTab === 'support' && <SupportView />}
        {activeTab === 'profile' && <ProfileView />}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <SideMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
