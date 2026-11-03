import React, { useState } from 'react';
import { ACTION_RECOMMENDATIONS } from '../data/kalimantanData';
import { Calculator, Sprout, Users, ShieldCheck, TreePine, Droplets, Check, Send, AlertTriangle } from 'lucide-react';

export const ActionRecommendationsSection: React.FC = () => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const [hectaresProtected, setHectaresProtected] = useState<number>(25);

  // Quick report state
  const [reportLocation, setReportLocation] = useState('');
  const [smokeLevel, setSmokeLevel] = useState('Asap Tebal Mulai Menutup Jalan');
  const [reportSuccess, setReportSuccess] = useState(false);

  // Carbon & Water calculation formulas
  // 1 Ha peatland stores ~1,500 to 3,000 tons of CO2 equivalent
  const savedCO2Tons = (hectaresProtected * 2200).toLocaleString('id-ID');
  // 1 Ha peat sponge holds ~9 million liters of water
  const savedWaterMillionLiters = (hectaresProtected * 9.2).toFixed(1);
  // ~240 native canopy trees per hectare
  const savedCanopyTrees = (hectaresProtected * 240).toLocaleString('id-ID');
  // 1 Orangutan requires ~50-100 Ha of canopy territory
  const orangutanTerritoryShares = (hectaresProtected / 50).toFixed(1);

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportLocation) return;
    setReportSuccess(true);
    setTimeout(() => {
      setReportLocation('');
      setReportSuccess(false);
    }, 4000);
  };

  const currentCategory = ACTION_RECOMMENDATIONS.categories[selectedCategoryIdx];

  return (
    <section id="rekomendasi-aksi" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-800 mb-2">
            Panduan Nyata & Inisiatif Solutif
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 font-editorial tracking-tight text-balance">
            Rekomendasi Aksi Nyata & Kampanye Melindungi Kalimantan
          </h2>
          <p className="text-stone-700 mt-3 text-base sm:text-lg leading-relaxed">
            Menyelamatkan Kalimantan tidak cukup hanya dengan kata-kata. Dari pembuat kebijakan di pusat pemerintahan hingga petani di hulu sungai dan generasi muda di perkotaan, setiap orang memiliki peran konkret.
          </p>
        </div>

        {/* 3 Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-200 pb-4">
          {ACTION_RECOMMENDATIONS.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategoryIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategoryIdx === idx
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {idx === 0 && <Sprout className="w-4 h-4" />}
              {idx === 1 && <Users className="w-4 h-4" />}
              {idx === 2 && <ShieldCheck className="w-4 h-4" />}
              <span>{cat.target}</span>
            </button>
          ))}
        </div>

        {/* Category Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {currentCategory.actions.map((act, idx) => (
            <div
              key={idx}
              className="bg-[#fcfbf9] p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-stone-900 font-editorial">
                    {act.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {act.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rekomendasi prioritas dampak tinggi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Feature Strip: Carbon Calculator & Quick Report */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Carbon & Water Saving Calculator */}
          <div className="lg:col-span-7 bg-[#faf8f5] rounded-2xl p-6 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase font-bold text-emerald-800 tracking-wider mb-2">
              <Calculator className="w-4 h-4 text-emerald-700" />
              <span>Kalkulator Simulasi Dampak Perlindungan Gambut</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-editorial mb-2">
              Berapa Banyak Kehidupan yang Anda Selamatkan?
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Geser tuas di bawah untuk melihat estimasi emisi karbon yang dicegah dan air tawar yang terjaga jika lahan gambut tidak terbakar.
            </p>

            {/* Slider Control */}
            <div className="space-y-3 mb-6 bg-white p-4 rounded-xl border border-stone-200">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-stone-800">Luas Lahan Gambut Dilindungi:</span>
                <span className="text-lg font-bold text-emerald-900 font-mono-numbers bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  {hectaresProtected} Hektar
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="200"
                value={hectaresProtected}
                onChange={(e) => setHectaresProtected(Number(e.target.value))}
                className="w-full accent-emerald-700 h-2 bg-stone-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>1 Ha (Ukuran 1 Lapangan Bola)</span>
                <span>100 Ha</span>
                <span>200 Ha (Kawasan Konsesi)</span>
              </div>
            </div>

            {/* Calculated Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <div className="text-stone-500 mb-1">CO₂ Dicegah Terlepas</div>
                <div className="text-xl font-bold text-emerald-900 font-mono-numbers">
                  {savedCO2Tons} Ton
                </div>
                <div className="text-[11px] text-stone-600 mt-1">
                  Setara emisi ~{Math.round(hectaresProtected * 470)} mobil setahun
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <div className="text-stone-500 mb-1">Cadangan Air Tersimpan</div>
                <div className="text-xl font-bold text-teal-800 font-mono-numbers">
                  {savedWaterMillionLiters} Juta Liter
                </div>
                <div className="text-[11px] text-stone-600 mt-1">
                  Tersimpan di spons basah gambut
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <div className="text-stone-500 mb-1">Pohon Kanopi Primer Hidup</div>
                <div className="text-xl font-bold text-emerald-900 font-mono-numbers">
                  {savedCanopyTrees} Batang
                </div>
                <div className="text-[11px] text-stone-600 mt-1">
                  Termasuk pohon Ulin dan Meranti purba
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <div className="text-stone-500 mb-1">Daya Dukung Orangutan</div>
                <div className="text-xl font-bold text-amber-700 font-mono-numbers">
                  {orangutanTerritoryShares} Individu
                </div>
                <div className="text-[11px] text-stone-600 mt-1">
                  Luas kanopi makan dan bersarang aman
                </div>
              </div>
            </div>
          </div>

          {/* Quick Hotspot / Smoke Report Form (Citizen Watch) */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase font-bold text-red-700 tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Kanal Lapor Warga: Pantau Api & Asap Cepat</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-editorial mb-2">
              Melihat Asap atau Titik Api di Sekitar Anda?
            </h3>
            <p className="text-xs text-stone-600 mb-4">
              Kecepatan deteksi adalah kunci mencegah api masuk ke dasar kubah gambut. Laporkan indikasi asap agar satgas terdekat dapat bertindak.
            </p>

            {reportSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-center space-y-2">
                <Check className="w-8 h-8 mx-auto text-emerald-700" />
                <div className="font-bold text-sm">Laporan Berhasil Diteruskan!</div>
                <p className="text-xs">
                  Data koordinat dan tingkat asap telah dikirimkan ke posko satgas terdekat (Manggala Agni & SiPongi). Terima kasih atas partisipasi Anda menjaga rimba!
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Lokasi / Nama Desa / Ruas Jalan
                  </label>
                  <input
                    type="text"
                    required
                    value={reportLocation}
                    onChange={(e) => setReportLocation(e.target.value)}
                    placeholder="Contoh: Desa Tumbang Nusa, Km 35 Jalan Trans Kalteng"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Intensitas Asap / Api yang Terlihat
                  </label>
                  <select
                    value={smokeLevel}
                    onChange={(e) => setSmokeLevel(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="Kepulan Asap Putih Tipis dari Semak">Kepulan Asap Putih Tipis dari Semak</option>
                    <option value="Asap Tebal Mulai Menutup Jalan">Asap Tebal Mulai Menutup Jalan</option>
                    <option value="Api Terbuka Merembet ke Pohon Sawit/Hutan">Api Terbuka Merembet ke Pohon Sawit/Hutan</option>
                    <option value="Tanah Gambut Terasa Panas & Mengeluarkan Asap Bawah Tanah">Tanah Gambut Terasa Panas & Berasap dari Bawah</option>
                  </select>
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
                  <span className="font-bold">Darurat: </span>
                  Anda juga dapat menghubungi call center bebas pulsa Posko SiPongi KLHK di <strong>1500-112</strong> atau Satgas BPBD setempat.
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Laporan Cepat ke Satgas</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
