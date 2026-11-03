import React from 'react';
import { Trees, Flame, ShieldAlert, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2 text-left group transition-transform hover:opacity-95"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-sm shrink-0">
            <Trees className="w-4 h-4 text-emerald-100" />
          </div>
          <span className="text-lg font-bold tracking-tight text-emerald-950 font-editorial whitespace-nowrap shrink-0">
            Rimba Kalimantan
          </span>
        </button>

        {/* Zone 2: 4-5 Clean Nav Links (single line, no wrap) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
          <button
            onClick={() => onNavigate('kondisi-terkini')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Kondisi Hutan
          </button>
          <button
            onClick={() => onNavigate('paru-paru-dunia')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Paru-Paru Dunia & Air
          </button>
          <button
            onClick={() => onNavigate('keanekaragaman-hayati')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Keanekaragaman Hayati
          </button>
          <button
            onClick={() => onNavigate('pantau-karhutla')}
            className="hover:text-red-700 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>Pantau Karhutla</span>
          </button>
          <button
            onClick={() => onNavigate('hentikan-bakar')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Seruan Hentikan Bakar
          </button>
          <button
            onClick={() => onNavigate('rekomendasi-aksi')}
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Aksi Nyata
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('hentikan-bakar')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Ikrar Jaga Rimba</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
