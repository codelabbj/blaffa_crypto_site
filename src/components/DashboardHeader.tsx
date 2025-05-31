
"use client";
import { useState, useEffect } from 'react'; // Removed MouseEvent import from react
import { User, Bell, Download} from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
//import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';
//import api from '@/lib/axios';


const DashboardHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { t } = useTranslation();
  

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
      }, 5000);
    }, 3000);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    // Use the native DOM MouseEvent type
    const handleClickOutside = (event: MouseEvent) => {
      // Safely check if event.target is an Element before using closest
      if (showMobileMenu && event.target instanceof Element && !event.target.closest('.mobile-menu-container')) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showMobileMenu]);

  // Explicitly type the action parameter
  const handleMenuItemClick = (action: () => void) => {
    setShowMobileMenu(false);
    if (typeof action === 'function') {
      action();
    }
  };

  return (
    <>
      <header className=" backdrop-blur-lg border-b border-black/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Blaffa
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleMenuItemClick(() => {
                    window.location.href = 'https://api.blaffa.net/download_apk';
                  })}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Download size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {t("Télécharger l'application")}
                  </span>
                </button>
              <a href='/notifications' className="relative p-2  hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                  <Bell className="h-6 w-6" />
                  {/* {notifications.some((n) => !n.is_read) && (
                    <span className="absolute -top-1 -right-1 text-white text-xs px-1.5 rounded-full">
                      {notifications.filter((n) => !n.is_read).length}
                    </span>
                  )} */}
              </a>
              <a className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center relative group" href='/profile'>
                <User size={16} className="text-sm text-white font-bold group-hover:scale-110 transition-transform"/>
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75 duration-1000 hidden group-hover:block"></div>
              </a>
              <div className="w-8 h-8 "><ThemeToggle /></div>
            </div>
          </div>
        </div>
      </header>

    </>

  );
};

export default DashboardHeader;