import React, { useState } from 'react';
import { RECENT_PLEDGES, Pledge } from '../data/kalimantanData';
import { Heart, CheckCircle2, Shield, Share2, Sparkles, AlertCircle, Award, Feather } from 'lucide-react';

export const StopBurningAwarenessSection: React.FC = () => {
  const [pledges, setPledges] = useState<Pledge[]>(RECENT_PLEDGES);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Warga / Petani Swadaya');
  const [location, setLocation] = useState('');
  const [customCommitment, setCustomCommitment] = useState('');
  const [submittedPledge, setSubmittedPledge] = useState<Pledge | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !location.trim()) return;

    const newPledge: Pledge = {
      id: `pl-${Date.now()}`,
      name: name.trim(),
      role: role,
      location: location.trim(),
      commitment:
        customCommitment.trim() ||
        'Saya berikrar tidak akan membakar lahan gambut dan semak, menjaga kearifan leluhur, serta melindungi hak hidup anak cucu atas udara bersih.',
      timestamp: 'Baru saja'
    };

    setPledges([newPledge, ...pledges]);
    setSubmittedPledge(newPledge);
    setName('');
    setLocation('');
    setCustomCommitment('');
  };

  const copyPledgeShare = () => {
    if (!submittedPledge) return;
    const text = `Saya ${submittedPledge.name} dari ${submittedPledge.location} telah berikrar: "${submittedPledge.commitment}". Mari bersama hentikan membakar hutan Kalimantan! #LindungiBorneo #StopBakarHutan`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="hentikan-bakar" className="py-16 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-emerald-800 flex items-center gap-2 mb-2">
            <Feather className="w-4 h-4 text-emerald-700" />
            <span>Kearifan Leluhur & Seruan Hati Nurani Bersama</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 font-editorial tracking-tight text-balance">
            Hentikan Membakar Hutan: Seruan Kesadaran Bagi Kita Semua Anak Bangsa & Rakyat Pribumi
          </h2>
          <p className="text-stone-700 mt-3 text-base sm:text-lg leading-relaxed">
            Tanah Borneo bukan sekadar komoditas untuk dibakar demi keuntungan sesaat. Nenek moyang kita hidup berdampingan dengan rimba selama berabad-abad tanpa pernah menghancurkan gambut. Mari bangkitkan kembali kehormatan penjaga rimba.
          </p>
        </div>

        {/* Feature Split: Cultural Wisdom + Urgent Awareness */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Left: Indigenous Forest Guardian Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-200 shadow-md bg-white group">
              <img
                src="/src/assets/images/dayak_indigenous_guardians_1793699453041.jpg"
                alt="Tetua Adat Penjaga Rimba Kalimantan"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="text-xs uppercase font-bold text-emerald-300 tracking-wider mb-1">
                  Pesan Tetua Rimba
                </div>
                <blockquote className="text-sm italic font-serif leading-snug">
                  "Hutan adalah ibu yang memberi kita nafas, madu, rotan, dan air. Membakar hutan sama saja dengan membakar rumah sendiri dan meracuni darah anak cucu kita."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right: 3 Manifestos of Awareness */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 font-editorial mb-1.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">1</span>
                <span>Ingat Kembali Ajaran Adat: Tanah Ulen & Sekat Bakar Ketat</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Nenek moyang suku Dayak tidak pernah membakar sembarangan. Tradisi ladang gilir kuno memiliki hukum adat (*Tuntang Tabat*): wajib membuat parit sekat bakar, memperhatikan arah angin, mengabari seluruh tetangga kampung, dan dijaga beramai-ramai. Membakar gambut tanpa pengawasan adalah pelanggaran sakral terhadap tanah warisan.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-red-200 shadow-sm">
              <h3 className="text-base font-bold text-red-950 font-editorial mb-1.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs flex items-center justify-center font-bold">2</span>
                <span>Asap Bakaran Membunuh Balita dan Lansia Kita Sendiri</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Ketika kita menyulut korek api, asap beracun PM2.5 dan karbon monoksida tidak memilih sasaran. Asap itu masuk ke kamar tidur anak-anak kita di Palangka Raya, Pontianak, dan Banjarmasin. Rumah sakit penuh sesak oleh pasien ISPA, dan paru-paru anak kita mengalami kerusakan permanen.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-emerald-200 shadow-sm">
              <h3 className="text-base font-bold text-emerald-950 font-editorial mb-1.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">3</span>
                <span>Beralih ke Pembukaan Lahan Tanpa Bakar (PLTB)</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Zaman telah maju. Jerami, ranting, dan semak kini dapat dicacah dan disemprot dengan dekomposer hayati (seperti jamur Trichoderma) untuk menjadi pupuk organik penyubur tanah. Lahan justru menjadi subur bertahun-tahun, berbeda dengan lahan bakar yang humusnya mati mengeras setelah 2 musim panen.
              </p>
            </div>
          </div>
        </div>

        {/* Digital Pledge Board & Form */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase font-bold text-emerald-800 tracking-wider mb-1 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>Gerakan Moral Rakyat Nusantara</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-editorial">
              Tandatangani Ikrar Bersama: "Saya Menolak Membakar Rimba"
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Bergabunglah bersama ribuan warga pribumi, petani, pemuda, dan pegiat lingkungan yang berjanji menjaga bumi Borneo tetap hijau.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nama Lengkap / Nama Panggilan
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso atau Yulius Dayak"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-stone-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Peran / Profesi Anda
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-stone-50/50"
                  >
                    <option value="Warga / Petani Swadaya">Warga / Petani Swadaya</option>
                    <option value="Tetua Adat / Tokoh Masyarakat">Tetua Adat / Tokoh Masyarakat</option>
                    <option value="Relawan MPA Peduli Api">Relawan MPA Peduli Api</option>
                    <option value="Pelajar / Mahasiswa">Pelajar / Mahasiswa</option>
                    <option value="Masyarakat Umum Peduli Rimba">Masyarakat Umum Peduli Rimba</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Asal Daerah / Kota
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Contoh: Katingan, Kalteng"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-stone-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Pesan atau Komitmen Khusus Anda (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={customCommitment}
                  onChange={(e) => setCustomCommitment(e.target.value)}
                  placeholder="Tuliskan harapan atau janji Anda untuk kelestarian hutan Borneo..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-stone-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>Kirim Ikrar & Dapatkan Piagam Digital</span>
              </button>
            </form>

            {/* Right: Certificate Result OR Live Pledges Stream */}
            <div className="lg:col-span-6">
              {submittedPledge ? (
                <div className="p-6 bg-emerald-50/90 border-2 border-emerald-400 rounded-2xl shadow-sm text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-emerald-800 font-bold">
                      Piagam Komitmen Sah
                    </div>
                    <h4 className="text-xl font-bold text-emerald-950 font-editorial mt-1">
                      {submittedPledge.name}
                    </h4>
                    <p className="text-xs text-stone-600">
                      {submittedPledge.role} · {submittedPledge.location}
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-emerald-200 text-xs sm:text-sm italic font-serif text-stone-800 leading-relaxed">
                    "{submittedPledge.commitment}"
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <button
                      onClick={copyPledgeShare}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{copiedLink ? 'Teks Ikrar Disalin!' : 'Bagikan Ikrar Anda'}</span>
                    </button>
                    <button
                      onClick={() => setSubmittedPledge(null)}
                      className="px-4 py-2 bg-white border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 transition-all cursor-pointer"
                    >
                      Lihat Ikrar Warga Lain
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                    Ikrar Terbaru Warga & Tokoh Adat:
                  </div>
                  <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                    {pledges.map((pl) => (
                      <div
                        key={pl.id}
                        className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-emerald-900">{pl.name}</span>
                          <span className="text-stone-400 text-[11px]">{pl.timestamp}</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mb-1.5">
                          {pl.role} · {pl.location}
                        </div>
                        <p className="text-xs text-stone-700 italic">
                          "{pl.commitment}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
