import React, { useState, useRef } from 'react';
import { CURRENT_FOREST_STATE_SUMMARY } from '../data/kalimantanData';
import { AlertCircle, CheckCircle2, Sliders, ChevronLeft, ChevronRight, Layers, TreePine } from 'lucide-react';

export const CurrentStateSection: React.FC = () => {
  // Before / After slider state (0 to 100 percentage)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  return (
    <section id="kondisi-terkini" className="py-16 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-800 mb-2">
            Laporan Analisis Ekologis 2026
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 font-editorial tracking-tight text-balance">
            Keadaan Hutan Kalimantan Saat Ini: Di Antara Kemajuan Restorasi dan Ancaman Kepunahan
          </h2>
          <p className="text-stone-700 mt-3 text-base sm:text-lg leading-relaxed">
            Hutan Kalimantan menempati persimpangan kritis. Meski laju deforestasi tahunan berhasil ditekan hingga 38% melalui moratorium izin baru dan restorasi puluhan ribu sekat kanal, lebih dari 13 juta hektar hutan alam telah beralih fungsi sejak 1985.
          </p>
        </div>

        {/* Interactive Before/After Split Comparison Slider */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <div className="text-xs uppercase font-bold text-emerald-800 tracking-wider flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>Komparasi Visual Interaktif: Geser Garis Tengah</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-editorial">
                Hutan Kanopi Alami vs Bencana Kebakaran Gambut
              </h3>
            </div>
            <div className="text-xs text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              Geser penunjuk kiri/kanan untuk melihat dampak nyata api
            </div>
          </div>

          <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            className="relative h-[320px] sm:h-[440px] rounded-xl overflow-hidden cursor-ew-resize select-none touch-none border border-stone-200"
          >
            {/* Background Image: Burned peatland fire */}
            <img
              src="/src/assets/images/kalimantan_peatland_fire_1793699452141.jpg"
              alt="Bencana Kebakaran Hutan Gambut Kalimantan"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-red-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-md backdrop-blur-sm shadow">
              Kondisi Terbakar (Bara Bawah Tanah & Asap Beracun)
            </div>

            {/* Foreground Clipped Image: Pristine Rainforest */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/src/assets/images/hero_kalimantan_rainforest_1793699450552.jpg"
                alt="Hutan Hujan Tropis Lestari Kalimantan"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-emerald-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-md backdrop-blur-sm shadow">
                Kondisi Lestari (Kanopi Basah & Sungai Jernih)
              </div>
            </div>

            {/* Divider Line & Drag Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center -ml-0.5"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-emerald-900 shadow-lg flex items-center justify-center border-2 border-emerald-700">
                <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                <ChevronRight className="w-3.5 h-3.5 -ml-1" />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-stone-600">
            <span>Sisi Kiri: Tutupan Kanopi Alami (Penyerap Air & Habitat Satwa)</span>
            <span>Sisi Kanan: Lahan Gambut Hangus (Kehilangan Humus & Matinya Flora)</span>
          </div>
        </div>

        {/* 2-Column Deep Dive Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Card 1: Kemajuan & Harapan Restorasi */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Kemajuan & Inisiatif Positif (2024–2026)</span>
            </div>
            <ul className="space-y-3.5 text-sm text-stone-700">
              {CURRENT_FOREST_STATE_SUMMARY.keyAchievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-100 bg-emerald-50/50 -mx-6 -mb-6 p-6 rounded-b-xl">
              <div className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">
                Fokus IKN (Ibu Kota Nusantara) di Kalimantan Timur:
              </div>
              <p className="text-xs text-emerald-950/80 mt-1.5 leading-relaxed">
                Pemerintah berkomitmen mewujudkan konsep <em>Forest City</em> dengan mengalokasikan 65% area sebagai kawasan lindung dan koridor satwa liar yang menghubungkan Teluk Balikpapan menuju Cagar Alam Bukit Soeharto. Kunci keberhasilannya terletak pada revegetasi pohon endemik seperti meranti dan ulin, bukan monokultur akasia.
              </p>
            </div>
          </div>

          {/* Card 2: Ancaman Kritis yang Masih Berlangsung */}
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-4">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>Ancaman Kritis yang Membutuhkan Pengawasan Ketat</span>
            </div>
            <ul className="space-y-3.5 text-sm text-stone-700">
              {CURRENT_FOREST_STATE_SUMMARY.criticalAlerts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-100 bg-amber-50/50 -mx-6 -mb-6 p-6 rounded-b-xl">
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wide">
                Bahaya Gambut Kering (Peat Canal Drainage):
              </div>
              <p className="text-xs text-amber-950/80 mt-1.5 leading-relaxed">
                Kanal-kanal buatan masa lalu masih terus mengeringkan kubah gambut. Saat kemarau panjang, lapisan gambut sedalam 3-5 meter menjadi tinderbox raksasa yang sewaktu-waktu dapat menyala akibat puntung rokok atau pembersihan lahan dengan api liar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
