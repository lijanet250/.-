import React, { useState } from 'react';
import {
  ENDEMIC_SPECIES_DATA,
  UNIQUE_ECOSYSTEMS,
  ORANGUTAN_EXTINCTION_RISK,
  EndemicSpecies
} from '../data/kalimantanData';
import { Sparkles, AlertOctagon, HeartHandshake, Eye, BookOpen, Layers } from 'lucide-react';

export const BiodiversitySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Fauna' | 'Flora' | 'Ecosystems'>('all');
  const [selectedSpecies, setSelectedSpecies] = useState<EndemicSpecies | null>(ENDEMIC_SPECIES_DATA[0]);

  const filteredSpecies = ENDEMIC_SPECIES_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="keanekaragaman-hayati" className="py-16 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-800 mb-2">
            Pusaka Hayati Khatulistiwa
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 font-editorial tracking-tight text-balance">
            Keajaiban Keanekaragaman Hayati & Spesies Endemik Kalimantan
          </h2>
          <p className="text-stone-700 mt-3 text-base sm:text-lg leading-relaxed">
            Pulau Borneo adalah laboratorium evolusi tertua di bumi dengan usia lebih dari 130 juta tahun (jauh lebih tua dari hutan Amazon). Di sinilah ribuan spesies unik berevolusi dan tidak dapat ditemukan di tempat lain di dunia.
          </p>
        </div>

        {/* SPECIAL SPOTLIGHT: Resiko Punahnya Orangutan Kalimantan */}
        <div className="bg-white rounded-2xl border-2 border-amber-300 shadow-md p-6 sm:p-8 mb-14">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Orangutan Photo */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
                <img
                  src="/src/assets/images/kalimantan_orangutan_canopy_1793699452344.jpg"
                  alt="Orangutan Kalimantan (Pongo pygmaeus) di tajuk pohon"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                  Status: Kritis (Critically Endangered)
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/75 to-transparent text-white text-xs">
                  Orangutan Kalimantan (<em>Pongo pygmaeus</em>) di habitat aslinya
                </div>
              </div>

              {/* Biological Vulnerability Quick Card */}
              <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1">
                  Biologi Reproduksi Paling Rentan di Bumi:
                </div>
                <div className="text-sm font-semibold text-amber-950">
                  Hanya Melahirkan Setiap 7 hingga 9 Tahun Sekali
                </div>
                <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                  {ORANGUTAN_EXTINCTION_RISK.criticalBiology.birthIntervalDetail}
                </p>
              </div>
            </div>

            {/* Right: Detailed Extinction Risks Explanation */}
            <div className="w-full lg:w-7/12 space-y-4">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  Urgensi Kepunahan Satwa Kunci (Keystone Species)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-editorial">
                {ORANGUTAN_EXTINCTION_RISK.title}
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed">
                Orangutan dijuluki <strong>"Petani Rimba"</strong>. Mereka menjelajahi hutan hujan, memakan lebih dari 500 jenis buah liar, dan menyebarkan biji-bijian besar melalui kotorannya ke seluruh penjuru pulau. <em>Jika orangutan punah, ratusan jenis pohon rimba Kalimantan akan kehilangan perantara regenerasi dan punah bersamanya.</em>
              </p>

              <div className="space-y-3 pt-2">
                {ORANGUTAN_EXTINCTION_RISK.keyExtinctionRisks.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                    <div className="text-xs sm:text-sm font-bold text-stone-900 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>{item.risk}</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar for Species & Ecosystems */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-stone-900 font-editorial">
              Galeri Spesies Ikonik & Ekosistem Kalimantan
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Pilih kategori untuk menjelajahi keunikan flora, fauna, dan tipe hutan
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Semua Spesies
            </button>
            <button
              onClick={() => setFilter('Fauna')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'Fauna'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Fauna Endemik
            </button>
            <button
              onClick={() => setFilter('Flora')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'Flora'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Flora Endemik
            </button>
            <button
              onClick={() => setFilter('Ecosystems')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'Ecosystems'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Ekosistem Unik
            </button>
          </div>
        </div>

        {/* Grid Cards for Species & Ecosystems */}
        {filter !== 'Ecosystems' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecies.map((species) => (
              <div
                key={species.id}
                onClick={() => setSelectedSpecies(species)}
                className={`bg-white p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedSpecies?.id === species.id
                    ? 'border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-stone-200 hover:border-emerald-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="font-semibold text-emerald-800">{species.category}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-600 italic">{species.scientificName}</span>
                  </div>

                  <h4 className="text-lg font-bold text-stone-900 font-editorial mb-1">
                    {species.commonName}
                  </h4>

                  <div className="text-xs font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-3">
                    {species.iucnStatus}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                    {species.description}
                  </p>

                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-emerald-950 mb-3">
                    <span className="font-bold text-emerald-800">Fakta Unik: </span>
                    <span>{species.fact}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 flex items-center justify-between">
                  <span>Habitat: {species.habitat.split('(')[0]}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    Detail <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UNIQUE_ECOSYSTEMS.map((eco) => (
              <div
                key={eco.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs uppercase font-bold text-emerald-800 tracking-wider mb-1">
                    {eco.tagline}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mb-3">
                    {eco.name}
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed mb-4">
                    {eco.importance}
                  </p>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 mb-4">
                    <span className="font-semibold">Ancaman Nyata: </span>
                    <span>{eco.threats}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-emerald-900 font-mono-numbers">
                      {eco.vitalMetric}
                    </div>
                    <div className="text-xs text-stone-500">{eco.metricLabel}</div>
                  </div>
                  <Layers className="w-8 h-8 text-emerald-700/30" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
