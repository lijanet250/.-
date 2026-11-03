import React, { useState } from 'react';
import {
  KALIMANTAN_PROVINCES,
  ACTIVE_MAP_HOTSPOTS,
  CURRENT_HOTSPOTS_FEED,
  MapHotspot,
  ProvinceData
} from '../data/kalimantanData';
import { Flame, Radio, AlertTriangle, ShieldCheck, MapPin, Eye, Satellite, Wind } from 'lucide-react';

export const FireCrisisSection: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<ProvinceData>(KALIMANTAN_PROVINCES[1]); // default Kalteng
  const [selectedHotspot, setSelectedHotspot] = useState<MapHotspot | null>(ACTIVE_MAP_HOTSPOTS[0]);
  const [activeProvinceFilter, setActiveProvinceFilter] = useState<string>('all');

  const filteredHotspots = ACTIVE_MAP_HOTSPOTS.filter((hs) => {
    if (activeProvinceFilter === 'all') return true;
    return hs.provinceId === activeProvinceFilter;
  });

  return (
    <section id="pantau-karhutla" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest font-semibold text-red-700 flex items-center gap-2 mb-2">
            <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Sistem Pantauan Satelit SiPongi & VIIRS 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 font-editorial tracking-tight text-balance">
            Kebakaran Hutan Kalimantan Terkini: Pantau Titik Api & Kabut Asap Aktif
          </h2>
          <p className="text-stone-700 mt-3 text-base sm:text-lg leading-relaxed">
            Data telemetri satelit SNPP VIIRS dan Aqua MODIS mendeteksi sebaran titik panas di atas kubah gambut. Titik api di lahan gambut bukan hanya membakar permukaan, melainkan menjalar di kedalaman hingga berminggu-minggu.
          </p>
        </div>

        {/* Top Quick Telemetry Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50/70 p-4 rounded-xl border border-red-200">
            <div className="text-xs text-red-800 font-medium">Total Hotspot 24 Jam</div>
            <div className="text-2xl font-bold text-red-700 font-mono-numbers mt-1 flex items-center gap-2">
              <span>182 Titik</span>
              {/* Active fire pulse animation indicator */}
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-fire-pulse" />
            </div>
            <div className="text-xs text-red-700/80 mt-1">Konsentrasi tertinggi di Kalteng & Kalbar</div>
          </div>

          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
            <div className="text-xs text-amber-800 font-medium">ISPU Terburuk Hari Ini</div>
            <div className="text-2xl font-bold text-amber-900 font-mono-numbers mt-1">
              115 (Tidak Sehat)
            </div>
            <div className="text-xs text-amber-800/80 mt-1">Stasiun Pantau Palangka Raya & Sampit</div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="text-xs text-stone-600 font-medium">Satelit Monitoring</div>
            <div className="text-base font-bold text-stone-900 mt-1">
              SNPP VIIRS & MODIS
            </div>
            <div className="text-xs text-stone-500 mt-1">Resolusi spasial 375m & 1km</div>
          </div>

          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
            <div className="text-xs text-emerald-800 font-medium">Satgas Lapangan Siaga</div>
            <div className="text-2xl font-bold text-emerald-800 font-mono-numbers mt-1">
              1.420 Regu
            </div>
            <div className="text-xs text-emerald-700 mt-1">Manggala Agni + MPA Peduli Api</div>
          </div>
        </div>

        {/* Main Geospatial Map & Live Feed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Center: Interactive SVG Map of Kalimantan */}
          <div className="lg:col-span-7 bg-[#faf8f5] rounded-2xl p-5 border border-stone-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-editorial flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Peta Sebaran Titik Api Aktif Kalimantan</span>
                </h3>
                <p className="text-xs text-stone-600">
                  Klik titik api berdenyut atau provinsi untuk melihat status detail
                </p>
              </div>

              {/* Province filter pills */}
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => setActiveProvinceFilter('all')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                    activeProvinceFilter === 'all'
                      ? 'bg-emerald-800 text-white'
                      : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                  }`}
                >
                  Semua
                </button>
                {KALIMANTAN_PROVINCES.map((prov) => (
                  <button
                    key={prov.id}
                    onClick={() => {
                      setActiveProvinceFilter(prov.id);
                      setSelectedProvince(prov);
                    }}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                      activeProvinceFilter === prov.id
                        ? 'bg-emerald-800 text-white'
                        : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                    }`}
                  >
                    {prov.name.replace('Kalimantan ', 'Kal-')}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Map Container */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-emerald-50/40 via-white to-stone-50 rounded-xl overflow-hidden border border-stone-200 flex items-center justify-center p-2">
              <svg
                viewBox="80 50 440 400"
                className="w-full h-full max-h-[440px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle province gradients */}
                  <linearGradient id="provGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d1fae5" />
                    <stop offset="100%" stopColor="#a7f3d0" />
                  </linearGradient>
                  <linearGradient id="selectedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bbf7d0" />
                    <stop offset="100%" stopColor="#86efac" />
                  </linearGradient>
                </defs>

                {/* Render Provinces */}
                {KALIMANTAN_PROVINCES.map((prov) => {
                  const isSelected = selectedProvince.id === prov.id;
                  return (
                    <g key={prov.id} className="cursor-pointer transition-all">
                      <path
                        d={prov.pathD}
                        fill={isSelected ? 'url(#selectedGrad)' : '#ecfdf5'}
                        stroke={isSelected ? '#047857' : '#10b981'}
                        strokeWidth={isSelected ? '2.5' : '1.2'}
                        strokeLinejoin="round"
                        className="hover:fill-emerald-200 transition-colors"
                        onClick={() => {
                          setSelectedProvince(prov);
                          setActiveProvinceFilter(prov.id);
                        }}
                      />
                      <text
                        x={prov.labelPos.x}
                        y={prov.labelPos.y}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="600"
                        fill="#064e3b"
                        className="select-none pointer-events-none"
                      >
                        {prov.name.replace('Kalimantan ', 'Kal-')}
                      </text>
                    </g>
                  );
                })}

                {/* Render Active Hotspots with requested PULSE ANIMATION */}
                {filteredHotspots.map((hs) => {
                  const isCurrent = selectedHotspot?.id === hs.id;
                  return (
                    <g
                      key={hs.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedHotspot(hs)}
                    >
                      {/* Outer pulse radar wave ring */}
                      <circle
                        cx={hs.x}
                        cy={hs.y}
                        r="12"
                        fill="none"
                        stroke={hs.confidence === 'Tinggi' ? '#ef4444' : '#f59e0b'}
                        strokeWidth="2"
                        className="radar-pulse-ring pointer-events-none"
                      />

                      {/* Middle fire aura with glow */}
                      <circle
                        cx={hs.x}
                        cy={hs.y}
                        r={isCurrent ? 7 : 5}
                        fill={hs.confidence === 'Tinggi' ? '#dc2626' : '#d97706'}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="animate-fire-pulse"
                      />

                      {/* Center pinpoint */}
                      <circle
                        cx={hs.x}
                        cy={hs.y}
                        r="2.5"
                        fill="#ffffff"
                        className="pointer-events-none"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Map Legend Floating Tag */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-stone-200 text-[11px] shadow-sm space-y-1">
                <div className="font-bold text-stone-800">Keterangan Peta:</div>
                <div className="flex items-center gap-2 text-stone-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-fire-pulse" />
                  <span>Titik Api Aktif (Tingkat Keyakinan Tinggi 85-99%)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>Titik Panas Sedang (50-84%)</span>
                </div>
              </div>
            </div>

            {/* Selected Hotspot Quick Card */}
            {selectedHotspot && (
              <div className="mt-4 p-4 rounded-xl bg-white border-2 border-red-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-fire-pulse" />
                    <span className="text-xs uppercase font-bold text-red-700 tracking-wider">
                      Titik Api Terpilih: {selectedHotspot.name}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs text-stone-600">{selectedHotspot.provinceName}</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900 mt-1">
                    Kabupaten: {selectedHotspot.regency} ({selectedHotspot.detectedAt})
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5 flex flex-wrap gap-x-3">
                    <span>Kedalaman Gambut: <strong>{selectedHotspot.peatDepthMeters} meter</strong></span>
                    <span>Intensitas FRP: <strong>{selectedHotspot.intensityFRP} MW</strong></span>
                    <span>Satelit: <strong>{selectedHotspot.satellite}</strong></span>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-auto">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-md ${
                    selectedHotspot.status === 'Aktif Membara'
                      ? 'bg-red-100 text-red-900 border border-red-300'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    {selectedHotspot.status}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Province Detail & Live Telemetry Feed */}
          <div className="lg:col-span-5 space-y-6">
            {/* Province Stats Card */}
            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-stone-200 shadow-sm">
              <div className="text-xs uppercase font-bold text-emerald-800 tracking-wider mb-1">
                Data Provinsi Terpilih
              </div>
              <h4 className="text-xl font-bold text-stone-900 font-editorial mb-3">
                {selectedProvince.name}
              </h4>

              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Titik Api Aktif:</span>
                  <span className="text-lg font-bold text-red-700 font-mono-numbers">
                    {selectedProvince.currentHotspots} Titik
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Kualitas Udara (ISPU):</span>
                  <span className={`text-lg font-bold font-mono-numbers ${
                    selectedProvince.aqiStatus === 'Tidak Sehat' ? 'text-red-600' : 'text-stone-800'
                  }`}>
                    {selectedProvince.aqiLevel} ({selectedProvince.aqiStatus})
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Hutan Primer:</span>
                  <span className="text-sm font-bold text-emerald-900 font-mono-numbers">
                    {(selectedProvince.primaryForestHa / 1000).toFixed(1)} Juta Ha
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Luas Gambut:</span>
                  <span className="text-sm font-bold text-stone-900 font-mono-numbers">
                    {(selectedProvince.peatlandHa / 1000).toFixed(1)} Juta Ha
                  </span>
                </div>
              </div>

              <div className="text-xs text-stone-700 bg-white p-3.5 rounded-lg border border-stone-200 leading-relaxed mb-3">
                <span className="font-semibold text-stone-900">Catatan Kondisi Lapangan: </span>
                {selectedProvince.keyIssues}
              </div>

              <div className="text-xs text-stone-600">
                <span className="font-semibold">Kawasan Lindung Kunci: </span>
                {selectedProvince.protectedParks.join(', ')}
              </div>
            </div>

            {/* Explanation: Bahaya Kebakaran Gambut Bawah Tanah */}
            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
              <h4 className="text-sm font-bold text-amber-950 font-editorial flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Kenapa Kebakaran Gambut Kalimantan Sangat Sulit Padam?</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed mb-3">
                Berbeda dengan kebakaran semak biasa yang hanya di permukaan, gambut terbakar secara <em>smoldering</em> (membara tanpa api terbuka) di kedalaman 2 hingga 6 meter di bawah permukaan tanah. 
              </p>
              <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                <li>Bara api menjalar perlahan mengikuti akar pohon kering di bawah tanah.</li>
                <li>Siraman air dari helikopter (water bombing) sering kali menguap sebelum mencapai dasar bara gambut.</li>
                <li>Melepaskan gas karbon monoksida (CO) dan partikel debu halus PM2.5 berkonsentrasi racun tinggi.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
