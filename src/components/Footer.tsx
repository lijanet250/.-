import React from 'react';
import { Trees, PhoneCall, ExternalLink, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#f5f3ef] border-t border-stone-200 text-stone-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Manifesto */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-800 flex items-center justify-center text-white">
                <Trees className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-emerald-950 font-editorial">
                Rimba Kalimantan
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Platform independen edukasi publik dan pemantauan kelestarian hutan hujan tropis, lahan basah gambut purba, dan satwa endemik Kalimantan Indonesia.
            </p>
            <div className="text-xs text-emerald-900 font-semibold flex items-center gap-1.5 pt-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Gerakan Kolaborasi Penjaga Hutan Borneo</span>
            </div>
          </div>

          {/* Col 2: Navigasi Bagian */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
              Jelajahi Portal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('kondisi-terkini')}
                  className="hover:text-emerald-800 transition-colors text-stone-600 hover:underline cursor-pointer"
                >
                  Keadaan Hutan Terkini (2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('paru-paru-dunia')}
                  className="hover:text-emerald-800 transition-colors text-stone-600 hover:underline cursor-pointer"
                >
                  Paru-Paru Dunia & Krisis Air Bersih
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('keanekaragaman-hayati')}
                  className="hover:text-emerald-800 transition-colors text-stone-600 hover:underline cursor-pointer"
                >
                  Spesies Endemik & Resiko Orangutan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pantau-karhutla')}
                  className="hover:text-emerald-800 transition-colors text-stone-600 hover:underline cursor-pointer"
                >
                  Peta Titik Api & Pantau Karhutla
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hentikan-bakar')}
                  className="hover:text-emerald-800 transition-colors text-stone-600 hover:underline cursor-pointer"
                >
                  Seruan Berhenti Membakar & Ikrar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rekomendasi-aksi')}
                  className="hover:text-emerald-800 transition-colors text-stone-600 hover:underline cursor-pointer"
                >
                  Rekomendasi Aksi & Kalkulator Karbon
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sumber Rujukan & Data Resmi */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
              Rujukan & Data Resmi
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-center justify-between">
                <span>SiPongi Karhutla Monitoring</span>
                <span className="text-[11px] text-stone-400">KLHK RI</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Restorasi Gambut & Sekat Kanal</span>
                <span className="text-[11px] text-stone-400">BRGM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Peta Tutupan Kanopi Primer</span>
                <span className="text-[11px] text-stone-400">Global Forest Watch</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Status Spesies Kritis (IUCN)</span>
                <span className="text-[11px] text-stone-400">Red List 2026</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Indeks Standar Udara (ISPU)</span>
                <span className="text-[11px] text-stone-400">BMKG</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak Darurat Karhutla */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-800 mb-3 flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>Kontak Darurat Karhutla</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-red-200 text-xs space-y-2">
              <div>
                <span className="text-stone-500 block">Posko SiPongi KLHK:</span>
                <span className="font-bold text-red-700">1500-112 (Bebas Pulsa)</span>
              </div>
              <div>
                <span className="text-stone-500 block">Call Center Bencana BNPB:</span>
                <span className="font-bold text-stone-800">117</span>
              </div>
              <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-100">
                Hubungi segera regu Manggala Agni terdekat bila melihat pembakaran di lahan gambut kering.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div>
            © 2026 Inisiatif Rimba Kalimantan · Didedikasikan untuk kelestarian tanah Borneo & generasi esok.
          </div>
          <div className="flex items-center gap-1 text-stone-600">
            <span>Mari jaga hutan bersama</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>untuk Indonesia & Dunia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
