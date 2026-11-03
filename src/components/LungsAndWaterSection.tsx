import React, { useState } from 'react';
import { LUNGS_OF_THE_WORLD_EXPLANATION, CLEAN_WATER_CRISIS } from '../data/kalimantanData';
import { Wind, CloudRain, Droplets, ThermometerSnowflake, ShieldCheck, AlertTriangle, Waves, Info } from 'lucide-react';

export const LungsAndWaterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paru-paru' | 'krisis-air'>('paru-paru');

  return (
    <section id="paru-paru-dunia" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-800 mb-2">
            Fungsi Vital Biosfer & Hidrologi Khatulistiwa
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 font-editorial tracking-tight text-balance">
            Paru-Paru Dunia & Krisis Air Bersih Kalimantan
          </h2>
          <p className="text-stone-700 mt-3 text-base leading-relaxed">
            Hutan Kalimantan bukan sekadar pohon-pohon yang berdiri, melainkan pabrik daur ulang air dan pengatur iklim bumi. Pahami mekanisme ilmiah mengapa hutan ini mutlak harus dijaga.
          </p>

          {/* Clean Segmented Control for switching between topics */}
          <div className="inline-flex p-1 mt-6 bg-stone-100 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveTab('paru-paru')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'paru-paru'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Mengapa Disebut Paru-Paru Dunia?
            </button>
            <button
              onClick={() => setActiveTab('krisis-air')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'krisis-air'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Mengapa Butuh Air Bersih?
            </button>
          </div>
        </div>

        {/* Tab 1: Mengapa Disebut Paru-Paru Dunia? */}
        {activeTab === 'paru-paru' && (
          <div className="space-y-12">
            {/* 3 Core Scientific Mechanisms Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LUNGS_OF_THE_WORLD_EXPLANATION.coreReasons.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfbf9] p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-emerald-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-4">
                      {idx === 0 && <CloudRain className="w-5 h-5" />}
                      {idx === 1 && <Wind className="w-5 h-5" />}
                      {idx === 2 && <ThermometerSnowflake className="w-5 h-5" />}
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950 font-editorial mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200">
                    <div className="text-xl font-bold text-emerald-900 font-mono-numbers">
                      {item.stat}
                    </div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why We Must Protect It - Concrete Impact Strip */}
            <div className="bg-emerald-50/70 rounded-2xl p-6 sm:p-8 border border-emerald-200">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-950 font-editorial mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>3 Alasan Mutlak Mengapa Hutan Kalimantan Wajib Dilindungi</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-800">
                {LUNGS_OF_THE_WORLD_EXPLANATION.whyProtect.map((reason, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm">
                    <div className="font-bold text-emerald-900 mb-1.5 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span>{reason.point}</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                      {reason.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Mengapa Kalimantan Sangat Membutuhkan Air Bersih? */}
        {activeTab === 'krisis-air' && (
          <div className="space-y-8">
            {/* Introductory Context Card */}
            <div className="bg-amber-50/80 rounded-2xl p-6 sm:p-8 border border-amber-200 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-950 font-editorial mb-2">
                  {CLEAN_WATER_CRISIS.subtitle}
                </h3>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {CLEAN_WATER_CRISIS.summary} Hutan bertindak sebagai <strong>filter biologi raksasa</strong> dan <strong>spons air</strong> yang menyerap jutaan meter kubik air hujan saat musim basah dan melepaskannya perlahan saat musim kering. Saat hutan ditebang dan gambut dikeringkan kanal sawit, siklus ini runtuh seketika.
                </p>
              </div>
            </div>

            {/* 4 Contributing Factors Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLEAN_WATER_CRISIS.factors.map((factor, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfbf9] p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 font-bold text-base text-stone-900 font-editorial mb-2">
                      <Droplets className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{factor.title}</span>
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed mb-4">
                      {factor.description}
                    </p>
                  </div>

                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg text-xs text-red-900">
                    <span className="font-semibold">Dampak Nyata: </span>
                    <span>{factor.impact}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Hydrology Comparison Box */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>Perbedaan Mekanisme Air: Hutan Sehat vs Hutan Rusak</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200">
                  <div className="font-bold text-emerald-900 mb-2">Saat Hutan Hujan & Gambut Masih Utuh:</div>
                  <ul className="space-y-1.5 text-stone-700">
                    <li>✓ Spons gambut menyerap hingga 90% air hujan, mencegah banjir hilir.</li>
                    <li>✓ Akar pohon memfilter asam organik dan logam berat secara biologis.</li>
                    <li>✓ Air sungai tetap mengalir jernih sepanjang tahun bahkan saat kemarau 4 bulan.</li>
                    <li>✓ Populasi ikan air tawar (seperti patin, jelawat, gabus) melimpah sebagai pangan warga.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-stone-100 border border-stone-300">
                  <div className="font-bold text-red-900 mb-2">Setelah Hutan Digunduli & Kanal Dibuka:</div>
                  <ul className="space-y-1.5 text-stone-700">
                    <li>✕ Air hujan langsung mengalir deras sebagai banjir bandang lumpur.</li>
                    <li>✕ Saat kemarau, gambut kering menyebabkan sumur warga pedalaman mati total.</li>
                    <li>✕ Limbah tambang merkuri (PETI) mengendap di insang ikan dan dikonsumsi manusia.</li>
                    <li>✕ Air laut merangsek masuk hulu sungai, membuat air PAM terasa asin dan merusak ginjal.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
