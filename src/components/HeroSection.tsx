import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, ArrowDown, Shield, Wind, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onExplore: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Web Audio API ambient nature sound synthesizer (rainforest mist and soft breeze)
  const toggleAmbientSound = () => {
    if (isPlayingAudio) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.3);
        setTimeout(() => {
          audioCtxRef.current?.suspend();
          setIsPlayingAudio(false);
        }, 300);
      }
    } else {
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          // Pink noise buffer for tropical rain / wind
          const bufferSize = ctx.sampleRate * 3;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
            b6 = white * 0.115926;
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(650, ctx.currentTime);

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.01, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1.5);

          whiteNoise.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);
          whiteNoise.start();

          gainNodeRef.current = gain;
        } else {
          audioCtxRef.current.resume();
          if (gainNodeRef.current) {
            gainNodeRef.current.gain.setTargetAtTime(0.18, audioCtxRef.current.currentTime, 0.4);
          }
        }
        setIsPlayingAudio(true);
      } catch (e) {
        console.warn('Audio synthesis not supported or blocked:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <section id="hero" className="relative pt-6 pb-14 bg-gradient-to-b from-[#f8faf8] via-[#fcfbf9] to-[#f4f7f4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Kicker & Audio Affordance */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-800 flex items-center gap-2">
            <span>Inisiatif Pelestarian Rimba Tropis Borneo</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-600 font-normal">Pusat Data & Edukasi Lingkungan 2026</span>
          </div>

          <button
            onClick={toggleAmbientSound}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
              isPlayingAudio
                ? 'bg-emerald-100 border-emerald-300 text-emerald-900 shadow-sm'
                : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
            }`}
            title="Dengarkan simulasi suara sejuk rimba hujan tropis"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Suara Rimba Aktif (Klik untuk Hening)</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-500" />
                <span>Aktifkan Suara Alam Rimba</span>
              </>
            )}
          </button>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Provocative Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950 font-editorial leading-tight text-balance">
              Selamatkan Jantung Hijau Borneo Sebelum Hangus Menjadi Abu
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl">
              Kalimantan adalah rumah bagi hutan hujan tertua di bumi (130 juta tahun), spons gambut penyimpan miliaran ton karbon raksasa, dan benteng hidup kera besar Orangutan. Namun setiap musim kemarau, api mengancam menghapus pusaka leluhur ini dalam hitungan hari.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onExplore('kondisi-terkini')}
                className="px-5 py-3 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Pelajari Kondisi Hutan Saat Ini</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => onExplore('pantau-karhutla')}
                className="px-5 py-3 text-sm font-semibold text-red-900 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Pantau Titik Api Terkini</span>
              </button>
            </div>

            {/* Quiet citation line */}
            <div className="text-xs text-stone-600 flex items-center gap-2 pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Data resmi dikompilasi dari pantauan satelit KLHK, BRGM, BMKG, dan Global Forest Watch 2026</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-100 shadow-xl bg-white group">
              <img
                src="/src/assets/images/hero_kalimantan_rainforest_1793699450552.jpg"
                alt="Kanopi Hutan Hujan Tropis Kalimantan di Pedalaman Sungai Kapuas"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kawasan Heart of Borneo · Kalimantan</span>
                </div>
                <p className="text-sm font-medium text-emerald-50 leading-snug">
                  Hamparan kanopi pohon ulin dan meranti primer berumur ratusan tahun yang menyuplai air bagi jutaan jiwa di sepanjang sungai besar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Strip below hero split */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="p-3 border-r last:border-r-0 border-stone-100">
            <div className="text-xs text-stone-500 font-medium">Hutan Primer Tersisa</div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-900 font-mono-numbers mt-1">28,4 Jt Ha</div>
            <div className="text-xs text-stone-600 mt-1">52,6% dari luas total pulau</div>
          </div>

          <div className="p-3 border-r last:border-r-0 border-stone-100">
            <div className="text-xs text-stone-500 font-medium">Simpanan Karbon Gambut</div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-900 font-mono-numbers mt-1">14,9 Miliar</div>
            <div className="text-xs text-stone-600 mt-1">Ton karbon purba terikat</div>
          </div>

          <div className="p-3 border-r last:border-r-0 border-stone-100">
            <div className="text-xs text-stone-500 font-medium">Orangutan Tersisa</div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-700 font-mono-numbers mt-1">~57.000</div>
            <div className="text-xs text-stone-600 mt-1">Status Kritis (IUCN Red List)</div>
          </div>

          <div className="p-3">
            <div className="text-xs text-stone-500 font-medium">Titik Api (24 Jam)</div>
            <div className="text-2xl sm:text-3xl font-bold text-red-600 font-mono-numbers mt-1 flex items-center gap-2">
              <span>182 Titik</span>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="text-xs text-stone-600 mt-1">Pantauan satelit SNPP & Terra</div>
          </div>
        </div>
      </div>
    </section>
  );
};
