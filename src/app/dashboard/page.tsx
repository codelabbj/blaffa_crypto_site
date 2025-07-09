"use client"

import { useState, useEffect } from 'react';
//import DashboardHeader from '@/components/DashboardHeader';
import TransactionHistory from '@/components/TransactionHistory';
import { useTranslation } from 'react-i18next';
import Footer from '@/components/footer';
import { useTheme } from '../../components/ThemeProvider';
import DashboardHeader from '@/components/DashboardHeader';

//import Advertisement_Hero from '@/components/Advertisement_Hero';
//import { ArrowDownLeft, ArrowUpRight, Ticket, CreditCard } from 'lucide-react';
import Image from 'next/image'
//import ThemeToggle from '../../components/ThemeToggle';
import Advertisement_Hero from '../../components/Advertisement_Hero';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
//import notifications from '../notifications/page'


export default function Dashboard() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  // const [animateHeader, setAnimateHeader] = useState(false);
  const { theme } = useTheme();

  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);
  
  
  
  // Simulates loading state
  useEffect(() => {
    // setAnimateHeader(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Show a notification after 3 seconds
   
    
    // Trigger header animation
    setTimeout(() => {
      // setAnimateHeader(true);
    }, 500);
  }, []);
 
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.colors.a_background} font-sans relative overflow-hidden`}>
      {/* Background gradient effects */}
      <div className="absolute top-20 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-700/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900/90 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-gray-400">Loading Blaffa...</p>
          </div>
        </div>
      )}
      
      {/* Header */}
      <DashboardHeader />
      
      {/* Main Content */}
      <main className="py-4 md:py-6 px-4 md:px-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenue sur Blaffa</h1>
          <p className=" ">Gérez vos finances en toute simplicité</p>
        </div>

        <div className={`relative overflow-hidden rounded-3xl -mx-4 px-4 md:mx-0 md:px-8 py-4 md:py-8 `}>
         <Advertisement_Hero />
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Balance Card */}
              {/* relative overflow-hidden bg-gradient-to-br ${theme.colors.a_background} rounded-3xl p-8 text-white */}
              <div className={`md:relative md:overflow-hidden md:bg-gradient-to-br md:${theme.colors.a_background} md:rounded-3xl p-4 md:p-8 md:text-white`}>
                <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="hidden md:block absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
                <div className="relative z-10">
                  {/* Mobile Layout (5 buttons in a row with square icons) */}
                  <div className="flex gap-1 justify-center md:hidden">
                    {/* Buy Crypto Button */}
                    <a href="/crypto?type=buy" className="group relative flex-1 flex flex-col items-center justify-center p-2 transition-all duration-300 active:scale-95">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-1 group-active:scale-90 transition-transform shadow-lg shadow-green-500/25">
                        {/* Icon for Buy */}
                        <FaArrowCircleUp className="text-green-200 text-3xl drop-shadow" />
                      </div>
                      <span className="font-medium text-[10px] ">{t('Buy Crypto')}</span>
                    </a>
                    {/* Sell Crypto Button */}
                    <a href="/crypto?type=sell" className="group relative flex-1 flex flex-col items-center justify-center p-2 transition-all duration-300 active:scale-95">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-1 group-active:scale-90 transition-transform shadow-lg shadow-yellow-500/25">
                        {/* Icon for Sell */}
                        <FaArrowCircleDown className="text-yellow-200 text-3xl drop-shadow" />
                      </div>
                      <span className="font-medium text-[10px] ">{t('Sell Crypto')}</span>
                    </a>
                  </div>

                  {/* Desktop Layout (Grid) - Only Buy/Sell Crypto */}
                  <div className="hidden md:grid grid-cols-2 gap-4">
                    {/* Buy Crypto */}
                    <a href="/crypto?type=buy" className="bg-gradient-to-br from-green-400 to-green-600 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/5 hover:border-white/20">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                        <div className="relative mb-3 lg:mb-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-500/25">
                            <FaArrowCircleUp className="text-white text-2xl drop-shadow" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        </div>
                        <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                          Buy Crypto
                        </span>
                      </div>
                    </a>
                    {/* Sell Crypto */}
                    <a href="/crypto?type=sell" className="bg-gradient-to-br from-yellow-400 to-yellow-600 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/5 hover:border-white/20">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                        <div className="relative mb-3 lg:mb-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-500/25">
                            <FaArrowCircleDown className="text-white text-2xl drop-shadow" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        </div>
                        <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                          Sell Crypto
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>

        {/**/}
        {/* Transaction History */}
        <TransactionHistory/>

        <div className="relative mb-4">
          <a 
            href="https://wa.me/+2250566643821" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group fixed bottom-24 right-6 z-40 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
            
            {/* WhatsApp Icon */}
            <Image src='/whatsapp.png' width="64" height="64" className="text-white relative z-10 md:w-10 md:h-10" alt='whatsapp' />
            
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Contact us on WhatsApp
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </a>
        </div>
        
        <Footer/>
        
      </main>
    </div>
  );
}