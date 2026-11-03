export interface ProvinceData {
  id: string;
  name: string;
  capital: string;
  primaryForestHa: number; // in thousands of hectares
  peatlandHa: number;
  currentHotspots: number;
  aqiLevel: number; // ISPU
  aqiStatus: 'Baik' | 'Sedang' | 'Tidak Sehat' | 'Sangat Berbahaya';
  protectedParks: string[];
  threats: string[];
  keyIssues: string;
  pathD: string; // SVG path representation for custom map
  labelPos: { x: number; y: number };
}

export interface EndemicSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  category: 'Fauna' | 'Flora';
  iucnStatus: 'Kritis (Critically Endangered)' | 'Terancam (Endangered)' | 'Rentan (Vulnerable)';
  description: string;
  habitat: string;
  fact: string;
  populationEstimate: string;
  culturalImportance?: string;
  image?: string;
}

export interface EcosystemType {
  id: string;
  name: string;
  tagline: string;
  importance: string;
  threats: string;
  vitalMetric: string;
  metricLabel: string;
}

export interface HotspotIncident {
  id: string;
  province: string;
  regency: string;
  confidence: 'Tinggi (85-99%)' | 'Sedang (50-84%)';
  satellite: 'Terra/Aqua MODIS' | 'SNPP VIIRS';
  timestamp: string;
  status: 'Dalam Penanganan Satgas' | 'Terkendali' | 'Verifikasi Lapangan';
  peatDepth: string;
}

export interface Pledge {
  id: string;
  name: string;
  role: string;
  location: string;
  commitment: string;
  timestamp: string;
}

export const KALIMANTAN_PROVINCES: ProvinceData[] = [
  {
    id: 'kalbar',
    name: 'Kalimantan Barat',
    capital: 'Pontianak',
    primaryForestHa: 5820,
    peatlandHa: 1680,
    currentHotspots: 42,
    aqiLevel: 78,
    aqiStatus: 'Sedang',
    protectedParks: ['TN Betung Kerihun', 'TN Danau Sentarum', 'TN Gunung Palung'],
    threats: ['Ekspansi monokultur sawit', 'Drainase gambut di pesisir Ketapang', 'Karhutla musiman'],
    keyIssues: 'Hutan rawa gambut pesisir barat rentan kekeringan saat musim kemarau, memicu kabut asap tebal di Pontianak dan Kubu Raya.',
    pathD: 'M 140 160 C 130 200, 110 260, 130 330 C 160 380, 210 390, 240 370 C 250 330, 270 280, 260 230 C 230 190, 200 160, 140 160 Z',
    labelPos: { x: 180, y: 260 }
  },
  {
    id: 'kalteng',
    name: 'Kalimantan Tengah',
    capital: 'Palangka Raya',
    primaryForestHa: 7150,
    peatlandHa: 3010,
    currentHotspots: 68,
    aqiLevel: 115,
    aqiStatus: 'Tidak Sehat',
    protectedParks: ['TN Sebangau', 'TN Tanjung Puting', 'TN Bukit Baka Bukit Raya'],
    threats: ['Kanal bekas Proyek Lahan Gambut (PLG) 1 Juta Hektar', 'Kebakaran bawah tanah', 'Kehilangan habitat orangutan'],
    keyIssues: 'Pusat lahan gambut terdalam Indonesia (hingga 12-16 meter). Jika gambut terbakar, bara bawah tanah tidak bisa padam hanya dengan air permukaan.',
    pathD: 'M 240 370 C 260 280, 270 230, 310 210 C 370 220, 390 280, 380 370 C 360 410, 290 420, 240 370 Z',
    labelPos: { x: 310, y: 320 }
  },
  {
    id: 'kalsel',
    name: 'Kalimantan Selatan',
    capital: 'Banjarbaru',
    primaryForestHa: 980,
    peatlandHa: 210,
    currentHotspots: 27,
    aqiLevel: 65,
    aqiStatus: 'Sedang',
    protectedParks: ['Taman Hutan Raya Sultan Adam', 'Cagar Alam Pegunungan Meratus'],
    threats: ['Tambang batubara terbuka', 'Fragmentasi Pegunungan Meratus', 'Banjir bandang luapan DAS Barito'],
    keyIssues: 'Tutupan hutan paling tertekan akibat konsesi tambang batubara. Perlindungan masyarakat adat Meratus menjadi kunci keselamatan hidrologis.',
    pathD: 'M 380 370 C 400 320, 420 330, 440 360 C 450 400, 410 430, 380 420 Z',
    labelPos: { x: 410, y: 380 }
  },
  {
    id: 'kaltim',
    name: 'Kalimantan Timur',
    capital: 'Samarinda',
    primaryForestHa: 8340,
    peatlandHa: 690,
    currentHotspots: 34,
    aqiLevel: 58,
    aqiStatus: 'Baik',
    protectedParks: ['TN Kutai', 'Hutan Lindung Sungai Wain', 'Karst Sangkulirang Mangkalihat'],
    threats: ['Fragmentasi koridor IKN', 'Tambang galian C dan batubara', 'Tekanan pada pesisir Teluk Balikpapan'],
    keyIssues: 'Zona transisi pembangunan IKN Nusantara menuntut pemenuhan target Forest City 65% tutupan hijau dan pemulihan koridor satwa liar.',
    pathD: 'M 310 210 C 340 180, 380 160, 440 170 C 470 220, 480 310, 440 360 C 400 320, 380 270, 310 210 Z',
    labelPos: { x: 390, y: 250 }
  },
  {
    id: 'kaltara',
    name: 'Kalimantan Utara',
    capital: 'Tanjung Selor',
    primaryForestHa: 6200,
    peatlandHa: 410,
    currentHotspots: 11,
    aqiLevel: 32,
    aqiStatus: 'Baik',
    protectedParks: ['TN Kayan Mentarang (Jantung Hutan Perawan Borneo)'],
    threats: ['Akses jalan perbatasan baru', 'Rencana bendungan hidro raksasa di Sungai Kayan', 'Perburuan satwa langka'],
    keyIssues: 'Benteng hutan perawan terluas di Kalimantan yang masih terhubung utuh dengan Sabah dan Sarawak dalam inisiatif Heart of Borneo.',
    pathD: 'M 330 80 C 400 70, 470 100, 460 170 C 410 160, 370 170, 330 140 Z',
    labelPos: { x: 380, y: 120 }
  }
];

export const ENDEMIC_SPECIES_DATA: EndemicSpecies[] = [
  {
    id: 'orangutan',
    commonName: 'Orangutan Kalimantan',
    scientificName: 'Pongo pygmaeus',
    category: 'Fauna',
    iucnStatus: 'Kritis (Critically Endangered)',
    description: 'Satu-satunya kera besar Asia. Berperan sebagai "petani hutan" ulung yang menyebarkan biji-bijian pohon buah hutan hujan hingga radius puluhan kilometer.',
    habitat: 'Hutan dataran rendah dipterokarpus dan hutan rawa gambut (Tanjung Puting, Sebangau, Palung)',
    fact: 'Mampu membangun sarang tidur baru dari ranting di tajuk pohon setiap sore hanya dalam waktu 10 menit.',
    populationEstimate: '~57.000 individu (turun lebih dari 60% sejak 1950)',
    culturalImportance: 'Masyarakat Dayak menghormati orangutan sebagai penjaga suci kanopi pohon.',
    image: '/src/assets/images/kalimantan_orangutan_canopy_1793699452344.jpg'
  },
  {
    id: 'bekantan',
    commonName: 'Bekantan (Monyet Hidung Panjang)',
    scientificName: 'Nasalis larvatus',
    category: 'Fauna',
    iucnStatus: 'Terancam (Endangered)',
    description: 'Primate endemik pulau Borneo dengan hidung besar menggantung dan perut buncit khas akibat sistem pencernaan fermentasi daun bakau.',
    habitat: 'Hutan riparian tepi sungai dan mangrove pesisir Kalimantan',
    fact: 'Perenang ulung dengan selaput tipis di sela jari kaki, mampu menyelam hingga 20 meter di bawah air untuk menghindari predator buaya muara.',
    populationEstimate: '<16.000 individu',
    culturalImportance: 'Ikon satwa resmi Provinsi Kalimantan Selatan dan maskot fauna Borneo.'
  },
  {
    id: 'enggang',
    commonName: 'Burung Enggang Badak (Rangkong)',
    scientificName: 'Buceros rhinoceros',
    category: 'Fauna',
    iucnStatus: 'Rentan (Vulnerable)',
    description: 'Burung agung dengan paruh bertanduk merah-keemasan menyerupai cula badak. Membutuhkan pohon tua berlubang alami untuk bertelur.',
    habitat: 'Hutan primer kanopi tinggi pedalaman Kalimantan',
    fact: 'Sang jantan mengurung betinanya di dalam lubang pohon dengan lumpur selama berbulan-bulan dan menyuapinya makanan melalui celah kecil setiap hari.',
    populationEstimate: 'Menurun drastis akibat penebangan pohon ulin & meranti tua',
    culturalImportance: 'Simbol kepemimpinan, keberanian, dan kesucian tertinggi dalam ukiran dan tarian adat Dayak Kenyah & Iban.'
  },
  {
    id: 'anggrek_hitam',
    commonName: 'Anggrek Hitam Kalimantan',
    scientificName: 'Coelogyne pandurata',
    category: 'Flora',
    iucnStatus: 'Terancam (Endangered)',
    description: 'Bunga anggrek legendaris dengan kelopak hijau muda bercahaya dan lidah (labellum) berwarna hitam pekat bertekstur beludru yang harum semerbak.',
    habitat: 'Cagar Alam Kersik Luway di Kutai Barat, tumbuh epifit pada pohon-pohon tua',
    fact: 'Hanya mekar selama 4 hingga 5 hari dalam satu siklus, menjadikannya salah satu puspa paling dicari di dunia botani.',
    populationEstimate: 'Sangat langka di alam liar akibat kebakaran semak pasir putih (kersik) dan perburuan ilegal.',
    culturalImportance: 'Flora identitas Kalimantan Timur, lambang keanggunan abadi rimba pedalaman.'
  },
  {
    id: 'macan_dahan',
    commonName: 'Macan Dahan Kalimantan',
    scientificName: 'Neofelis diardi borneensis',
    category: 'Fauna',
    iucnStatus: 'Rentan (Vulnerable)',
    description: 'Predator puncak hutan Kalimantan dengan pola loreng menyerupai awan dan gigi taring terpanjang relatif terhadap ukuran tengkorak dari semua kucing liar.',
    habitat: 'Hutan primer lebat dataran rendah hingga ketinggian 1.500 mdpl',
    fact: 'Dapat memanjat turun batang pohon dengan kepala menghadap ke bawah berkat pergelangan kaki belakang yang fleksibel berputar 180 derajat.',
    populationEstimate: '<4.000 individu dewasa',
    culturalImportance: 'Simbol kegesitan pemburu hutan dalam tradisi sastra lisan Dayak.'
  },
  {
    id: 'kantong_semar',
    commonName: 'Kantong Semar Pemakan Serangga',
    scientificName: 'Nepenthes ampullaria & N. bicalcarata',
    category: 'Flora',
    iucnStatus: 'Rentan (Vulnerable)',
    description: 'Tumbuhan karnivora tropis yang mengubah daunnya menjadi piala perangkap cairan enzim pencerna serangga dan daun gugur.',
    habitat: 'Hutan rawa gambut asam dan hutan kerangas miskin hara',
    fact: 'Nepenthes bicalcarata memiliki taring tajam dan bersimbiosis mutualisme dengan semut Camponotus yang tinggal di dalam batang berongganya.',
    populationEstimate: 'Spesifik di kantong hutan gambut yang belum terfragmentasi',
    culturalImportance: 'Air di dalam kantong yang belum terbuka sering dimanfaatkan penjelajah Dayak sebagai air minum higienis darurat di rimba.'
  },
  {
    id: 'ulin_kayu_besi',
    commonName: 'Pohon Ulin (Kayu Besi Borneo)',
    scientificName: 'Eusideroxylon zwageri',
    category: 'Flora',
    iucnStatus: 'Terancam (Endangered)',
    description: 'Raksasa rimba yang batangnya sangat padat dan tidak dapat mengapung di air. Tahan ratusan tahun terhadap rayap, air asin, dan jamur pelapuk.',
    habitat: 'Lembah sungai dan lereng bukit hutan hujan tropis basah',
    fact: 'Tumbuh sangat lambat: butuh waktu 80 hingga 120 tahun untuk mencapai diameter batang 40 cm.',
    populationEstimate: 'Pohon berukuran raksasa di atas 100 tahun makin jarang ditemukan di luar taman nasional.',
    culturalImportance: 'Tiang utama rumah panjang (Betang/Lamin) dan perahu lesung adat Dayak yang diwariskan lintas generasi.'
  }
];

export const UNIQUE_ECOSYSTEMS: EcosystemType[] = [
  {
    id: 'gambut',
    name: 'Hutan Rawa Gambut Tropis (Peat Swamp Forest)',
    tagline: 'Kubah Karbon dan Spons Raksasa Penyimpan Air',
    importance: 'Gambut Kalimantan terbentuk dari sisa dedaunan dan batang pohon yang terendam air selama 10.000 tahun tanpa membusuk sempurna. Kedalamannya bisa mencapai 16 meter, menyimpan lebih dari 3.000 ton karbon per hektar.',
    threats: 'Pembuatan kanal drainase membuat gambut mengering seperti spons kering yang sangat mudah terbakar dan menjadi pemicu utama bencana Karhutla.',
    vitalMetric: '14,9 Miliar Ton',
    metricLabel: 'Estimasi simpanan karbon gambut Indonesia'
  },
  {
    id: 'kerangas',
    name: 'Hutan Kerangas (Heath Forest)',
    tagline: 'Ekosistem Ekstrem di Atas Pasir Kuarsa Putih',
    importance: 'Nama "Kerangas" berasal dari bahasa Iban yang berarti "tanah yang tidak dapat ditanami padi". Memiliki flora unik pemakan serangga (Nepenthes) dan tumbuhan yang bertahan di tanah masam minim nutrisi.',
    threats: 'Sangat rentan terhadap penambangan pasir kuarsa dan kebakaran semak yang sulit pulih karena lapisan humus yang sangat tipis.',
    vitalMetric: '<3 cm',
    metricLabel: 'Ketebalan lapisan humus aktif di tanah kerangas'
  },
  {
    id: 'karst',
    name: 'Karst Sangkulirang-Mangkalihat',
    tagline: 'Menara Kapur Prasejarah & Mata Air Abadi',
    importance: 'Kawasan tebing kapur raksasa seluas 1,8 juta hektar di Kaltim yang memuat ribuan gua dengan lukisan tangan purba berusia 40.000 tahun serta menjadi reservoir air tawar bawah tanah bagi 5 sungai utama.',
    threats: 'Rencana pabrik semen dan izin galian tambang batu kapur yang mengancam jaringan sungai bawah tanah.',
    vitalMetric: '40.000 Tahun',
    metricLabel: 'Usia lukisan cadas tertua manusia di gua karst'
  },
  {
    id: 'dipterokarpus',
    name: 'Hutan Hujan Dataran Rendah Dipterokarpus',
    tagline: 'Puncak Kanopi Tajuk Raksasa Borneo',
    importance: 'Rumah bagi pohon-pohon keluarga Shorea, Dipterocarpus, dan Dryobalanops setinggi 60-80 meter. Kanopinya menjadi koridor jelajah utama orangutan dan satwa arboreal.',
    threats: 'Pembalakan liar kayu bulat bernilai tinggi dan konversi menjadi perkebunan kelapa sawit monokultur.',
    vitalMetric: '70 Meter',
    metricLabel: 'Ketinggian rata-rata kanopi pohon meranti purba'
  }
];

export interface MapHotspot {
  id: string;
  name: string;
  regency: string;
  provinceId: string;
  provinceName: string;
  x: number; // SVG coordinate
  y: number; // SVG coordinate
  confidence: 'Tinggi' | 'Sedang';
  intensityFRP: number; // Fire Radiative Power (MW)
  peatDepthMeters: number;
  satellite: 'VIIRS SNPP' | 'MODIS Aqua';
  detectedAt: string;
  status: 'Aktif Membara' | 'Pemadaman Satgas' | 'Terkendali';
}

export const ACTIVE_MAP_HOTSPOTS: MapHotspot[] = [
  {
    id: 'hs-1',
    name: 'Gambut Sampit Selatan',
    regency: 'Kotawaringin Timur',
    provinceId: 'kalteng',
    provinceName: 'Kalimantan Tengah',
    x: 290,
    y: 350,
    confidence: 'Tinggi',
    intensityFRP: 48.2,
    peatDepthMeters: 4.2,
    satellite: 'VIIRS SNPP',
    detectedAt: '25 Menit Lalu',
    status: 'Aktif Membara'
  },
  {
    id: 'hs-2',
    name: 'Kanal Katingan Kuala',
    regency: 'Katingan',
    provinceId: 'kalteng',
    provinceName: 'Kalimantan Tengah',
    x: 310,
    y: 380,
    confidence: 'Tinggi',
    intensityFRP: 35.8,
    peatDepthMeters: 3.8,
    satellite: 'MODIS Aqua',
    detectedAt: '40 Menit Lalu',
    status: 'Pemadaman Satgas'
  },
  {
    id: 'hs-3',
    name: 'Sebangau Hulu',
    regency: 'Pulang Pisau',
    provinceId: 'kalteng',
    provinceName: 'Kalimantan Tengah',
    x: 330,
    y: 360,
    confidence: 'Tinggi',
    intensityFRP: 52.4,
    peatDepthMeters: 5.1,
    satellite: 'VIIRS SNPP',
    detectedAt: '12 Menit Lalu',
    status: 'Aktif Membara'
  },
  {
    id: 'hs-4',
    name: 'Rawa Sungai Putri',
    regency: 'Ketapang',
    provinceId: 'kalbar',
    provinceName: 'Kalimantan Barat',
    x: 200,
    y: 340,
    confidence: 'Tinggi',
    intensityFRP: 29.6,
    peatDepthMeters: 3.2,
    satellite: 'MODIS Aqua',
    detectedAt: '1 Jam Lalu',
    status: 'Aktif Membara'
  },
  {
    id: 'hs-5',
    name: 'Rasau Jaya',
    regency: 'Kubu Raya',
    provinceId: 'kalbar',
    provinceName: 'Kalimantan Barat',
    x: 160,
    y: 280,
    confidence: 'Sedang',
    intensityFRP: 18.5,
    peatDepthMeters: 2.0,
    satellite: 'VIIRS SNPP',
    detectedAt: '2 Jam Lalu',
    status: 'Pemadaman Satgas'
  },
  {
    id: 'hs-6',
    name: 'Paloh Perbatasan',
    regency: 'Sambas',
    provinceId: 'kalbar',
    provinceName: 'Kalimantan Barat',
    x: 145,
    y: 190,
    confidence: 'Sedang',
    intensityFRP: 14.1,
    peatDepthMeters: 1.1,
    satellite: 'MODIS Aqua',
    detectedAt: '3 Jam Lalu',
    status: 'Terkendali'
  },
  {
    id: 'hs-7',
    name: 'Liang Anggang Gambut',
    regency: 'Banjarbaru',
    provinceId: 'kalsel',
    provinceName: 'Kalimantan Selatan',
    x: 395,
    y: 395,
    confidence: 'Tinggi',
    intensityFRP: 31.0,
    peatDepthMeters: 2.4,
    satellite: 'VIIRS SNPP',
    detectedAt: '45 Menit Lalu',
    status: 'Aktif Membara'
  },
  {
    id: 'hs-8',
    name: 'Bati-Bati Semak',
    regency: 'Tanah Laut',
    provinceId: 'kalsel',
    provinceName: 'Kalimantan Selatan',
    x: 415,
    y: 415,
    confidence: 'Sedang',
    intensityFRP: 19.3,
    peatDepthMeters: 1.5,
    satellite: 'MODIS Aqua',
    detectedAt: '1 Jam Lalu',
    status: 'Terkendali'
  },
  {
    id: 'hs-9',
    name: 'Cagar Alam Muara Kaman',
    regency: 'Kutai Kartanegara',
    provinceId: 'kaltim',
    provinceName: 'Kalimantan Timur',
    x: 420,
    y: 280,
    confidence: 'Tinggi',
    intensityFRP: 41.7,
    peatDepthMeters: 2.8,
    satellite: 'VIIRS SNPP',
    detectedAt: '18 Menit Lalu',
    status: 'Aktif Membara'
  },
  {
    id: 'hs-10',
    name: 'Sangkulirang Semak',
    regency: 'Kutai Timur',
    provinceId: 'kaltim',
    provinceName: 'Kalimantan Timur',
    x: 450,
    y: 210,
    confidence: 'Sedang',
    intensityFRP: 22.0,
    peatDepthMeters: 0.8,
    satellite: 'MODIS Aqua',
    detectedAt: '2 Jam Lalu',
    status: 'Pemadaman Satgas'
  },
  {
    id: 'hs-11',
    name: 'Sebuku Pesisir',
    regency: 'Nunukan',
    provinceId: 'kaltara',
    provinceName: 'Kalimantan Utara',
    x: 430,
    y: 110,
    confidence: 'Sedang',
    intensityFRP: 16.4,
    peatDepthMeters: 1.0,
    satellite: 'VIIRS SNPP',
    detectedAt: '4 Jam Lalu',
    status: 'Terkendali'
  }
];

export const CURRENT_HOTSPOTS_FEED: HotspotIncident[] = [

  {
    id: 'HS-01',
    province: 'Kalimantan Tengah',
    regency: 'Kotawaringin Timur (Sampit)',
    confidence: 'Tinggi (85-99%)',
    satellite: 'SNPP VIIRS',
    timestamp: '15 Menit Lalu',
    status: 'Dalam Penanganan Satgas',
    peatDepth: 'Kedalaman Gambut > 3.5m'
  },
  {
    id: 'HS-02',
    province: 'Kalimantan Barat',
    regency: 'Ketapang (Sungai Putri)',
    confidence: 'Tinggi (85-99%)',
    satellite: 'Terra/Aqua MODIS',
    timestamp: '42 Menit Lalu',
    status: 'Verifikasi Lapangan',
    peatDepth: 'Kedalaman Gambut 2.1m'
  },
  {
    id: 'HS-03',
    province: 'Kalimantan Tengah',
    regency: 'Pulang Pisau (Sebangau Barat)',
    confidence: 'Tinggi (85-99%)',
    satellite: 'SNPP VIIRS',
    timestamp: '1 Jam Lalu',
    status: 'Dalam Penanganan Satgas',
    peatDepth: 'Kedalaman Gambut 4.8m'
  },
  {
    id: 'HS-04',
    province: 'Kalimantan Selatan',
    regency: 'Banjar (Gambut Martapura)',
    confidence: 'Sedang (50-84%)',
    satellite: 'Terra/Aqua MODIS',
    timestamp: '2 Jam Lalu',
    status: 'Terkendali',
    peatDepth: 'Lahan Aluvial / Rawa Dangkal'
  },
  {
    id: 'HS-05',
    province: 'Kalimantan Timur',
    regency: 'Kutai Kartanegara (Muara Kaman)',
    confidence: 'Sedang (50-84%)',
    satellite: 'SNPP VIIRS',
    timestamp: '3 Jam Lalu',
    status: 'Terkendali',
    peatDepth: 'Gambut Semak 1.2m'
  }
];

export const RECENT_PLEDGES: Pledge[] = [
  {
    id: 'pl-1',
    name: 'Bapak Yansen Amai',
    role: 'Tetua Adat Dayak Ngaju',
    location: 'Katingan, Kalimantan Tengah',
    commitment: 'Saya bersumpah mewariskan hutan adat tanpa abu api ke anak cucu. Kami menjaga sekat bakar leluhur.',
    timestamp: 'Baru saja'
  },
  {
    id: 'pl-2',
    name: 'Siti Nurhalizah',
    role: 'Relawan MPA (Masyarakat Peduli Api)',
    location: 'Kubu Raya, Kalimantan Barat',
    commitment: 'Patroli setiap hari di musim kering, memilih membasahi tanah daripada memantik api.',
    timestamp: '12 menit lalu'
  },
  {
    id: 'pl-3',
    name: 'Darius Simamora',
    role: 'Petani Swadaya Ramah Gambut',
    location: 'Pulang Pisau, Kalimantan Tengah',
    commitment: 'Beralih 100% ke metode Pembukaan Lahan Tanpa Bakar (PLTB) dengan dekomposer organik.',
    timestamp: '35 menit lalu'
  },
  {
    id: 'pl-4',
    name: 'Putri Mahakam',
    role: 'Mahasiswi Biologi & Pegiat Konservasi',
    location: 'Samarinda, Kalimantan Timur',
    commitment: 'Memperjuangkan koridor satwa liar di sekitar IKN dan mengedukasi generasi muda anti-kebakaran.',
    timestamp: '1 jam lalu'
  }
];

export const LUNGS_OF_THE_WORLD_EXPLANATION = {
  title: "Mengapa Kalimantan Disebut Paru-Paru Dunia?",
  subtitle: "Bukan Sekadar Metafora, Melainkan Mesin Penopang Kehidupan Biosfer Bumi",
  coreReasons: [
    {
      title: "Pompa Transpirasi & Siklus Hujan Benua",
      description: "Pohon-pohon raksasa Kalimantan memompa miliaran liter uap air setiap hari ke atmosfer melalui proses evapotranspirasi. Uap air ini membentuk awan hujan terbang ('flying rivers') yang menyirami kepulauan Nusantara hingga daratan Asia Tenggara.",
      stat: "2,4 Miliar Liter",
      statLabel: "Air ditranspirasi per km² kanopi hutan per tahun"
    },
    {
      title: "Kubah Penyerap Karbon Terbesar di Khatulistiwa",
      description: "Gambut purba Kalimantan yang tebalnya mencapai belasan meter adalah penyerap karbon alami paling padat di daratan bumi. Hutan ini menahan karbon setara dengan puluhan tahun emisi pembakaran bahan bakar fosil dunia.",
      stat: "3.000+ Ton/Ha",
      statLabel: "Karbon tersimpan di lahan gambut basah primer"
    },
    {
      title: "Stabilisator Suhu Global & Penghasil Oksigen Murni",
      description: "Fotosintesis kanopi bertingkat (multi-strata) menyerap CO₂ secara masif dan melepaskan oksigen segar. Lebih dari itu, hutan lebat mendinginkan suhu permukaan tanah hingga 5-8°C dibandingkan kawasan terbuka kelapa sawit.",
      stat: "-6°C Lebih Sejuk",
      statLabel: "Pendinginan alami iklim mikro di bawah kanopi"
    }
  ],
  whyProtect: [
    {
      point: "Mencegah Pelepasan 'Bom Karbon'",
      detail: "Jika 5 juta hektar gambut Kalimantan terbakar kering, jutaan ton karbon dilepaskan dalam hitungan minggu, memicu akselerasi krisis iklim global."
    },
    {
      point: "Pelindung Keanekaragaman Hayati Tak Tergantikan",
      detail: "Menampung lebih dari 15.000 spesies tumbuhan berbunga, 3.000 jenis pohon, dan ratusan satwa endemik yang tidak ditemukan di belahan bumi mana pun."
    },
    {
      point: "Kedaulatan Budaya dan Rumah Leluhur Masyarakat Adat",
      detail: "Menjaga eksistensi ratusan suku Dayak dan Melayu pedalaman yang menggantungkan hidup, tradisi obat-obatan, dan falsafah hidup pada hutan adat."
    }
  ]
};

export const CLEAN_WATER_CRISIS = {
  title: "Mengapa Kalimantan Sangat Membutuhkan Air Bersih?",
  subtitle: "Paradoks Pulau Raksasa: Dikelilingi Sungai Terpanjang, Namun Warga Kesulitan Air Minum Layak",
  summary: "Kalimantan memiliki sungai-sungai terpanjang di Indonesia—Kapuas (1.143 km), Mahakam (920 km), dan Barito (900 km). Namun ironisnya, ribuan desa di pesisir dan pedalaman justru mengalami krisis air bersih.",
  factors: [
    {
      title: "Degradasi Spons Gambut yang Menyimpan Air Tawar",
      description: "Kanal-kanal perkebunan menguras air dari rawa gambut ke laut. Akibatnya, saat kemarau cadangan air bawah tanah habis, dan saat hujan terjadi banjir bandang yang menghanyutkan lumpur ke pemukiman warga.",
      impact: "Kekeringan parah di desa-desa gambut saat kemarau panjang."
    },
    {
      title: "Pencemaran Logam Berat Merkuri dari Tambang Emas Liar (PETI)",
      description: "Aktivitas penambangan emas ilegal di sepanjang aliran Sungai Kapuas dan Kahayan membuang merkuri berbahaya langsung ke air. Air sungai menjadi keruh kuning dan beracun bagi ikan dan manusia.",
      impact: "Keracunan saraf, penyakit kulit, dan matinya sumber protein ikan air tawar."
    },
    {
      title: "Intrusi Air Asin ke Muara Akibat Hutan Mangrove Terbabat",
      description: "Hilangnya sabuk hijau mangrove di pesisir Pontianak, Banjarmasin, dan Samarinda menyebabkan air laut asin merangsek puluhan kilometer masuk ke hulu sungai yang menjadi sumber PDAM.",
      impact: "Air kran warga menjadi payau dan tidak dapat dikonsumsi selama berbulan-bulan."
    },
    {
      title: "Asam Organik Gambut yang Korosif Tanpa Filtrasi Hutan",
      description: "Hutan gambut yang rusak melepaskan air dengan pH sangat rendah (pH 3-4, sangat asam). Tanpa vegetasi alami yang menyaring, air ini tidak layak minum dan merusak gigi serta pencernaan anak-anak.",
      impact: "Risiko stunting dan gangguan pencernaan kronis pada generasi muda pesisir."
    }
  ]
};

export const ORANGUTAN_EXTINCTION_RISK = {
  title: "Resiko Kritis Punahnya Orangutan Kalimantan (Pongo pygmaeus)",
  subtitle: "Menghitung Hari Kera Besar Terakhir Borneo Menghadapi Kepunahan Sunyi",
  status: "Kritis / Critically Endangered (IUCN Red List)",
  populationNow: "~57.000 Ekor",
  populationLossRate: "Kehilangan >100.000 ekor dalam 20 tahun terakhir",
  criticalBiology: {
    birthInterval: "7 - 9 Tahun Sekali",
    birthIntervalDetail: "Jeda reproduksi terpanjang di antara semua mamalia darat di dunia. Seekor induk orangutan hanya melahirkan 3-4 anak sepanjang hidupnya (usia 40-50 tahun). Jika satu ekor betina produktif terbunuh atau mati terbakar, pemulihan populasinya butuh puluhan tahun.",
    parentalCare: "Anak orangutan menyusu dan belajar hidup dari induknya selama 7-8 tahun penuh. Tanpa induknya, bayi orangutan tidak memiliki naluri bertahan hidup di alam liar."
  },
  keyExtinctionRisks: [
    {
      risk: "Fragmentasi Kanopi Pohon Menghalangi Jelajah",
      description: "Orangutan adalah satwa arboreal (95% hidup di atas tajuk pohon). Ketika jalan raya, perkebunan kelapa sawit, dan tambang membelah hutan, orangutan terpaksa turun ke tanah di mana mereka mudah diserang anjing liar, tertabrak kendaraan, atau ditembak manusia."
    },
    {
      risk: "Terperangkap dan Mati Terpanggang Saat Karhutla",
      description: "Saat kebakaran hutan gambut terjadi, orangutan lambat melarikan diri karena takut pada api. Asap pekat membutakan mata mereka dan merusak sistem pernapasan, menyebabkan banyak yang mati lemas di atas pohon yang terbakar."
    },
    {
      risk: "Efek Domino Kehancuran Hutan Hujan",
      description: "Orangutan adalah 'Petani Hutan' (Keystone Species). Mereka memakan lebih dari 500 jenis buah liar dan menyebarkan biji-bijian besar yang tidak bisa dicerna oleh burung. Tanpa orangutan, pohon-pohon buah hutan tropis tidak akan beregenerasi, memicu kepunahan massal satwa lain."
    },
    {
      risk: "Konflik dengan Perkebunan & Perburuan Anak Bayi",
      description: "Kelaparan karena hutan habitatnya gundul, orangutan mencari makan ke perkebunan dan sering dianggap sebagai hama oleh pekerja kebun, atau induknya dibunuh untuk diambil anaknya dijadikan hewan peliharaan ilegal."
    }
  ]
};

export const ACTION_RECOMMENDATIONS = {
  title: "Rekomendasi Aksi Nyata Melindungi Kalimantan",
  subtitle: "Setiap Orang Memiliki Peran: Dari Peladang di Pedalaman hingga Warga Kota di Mana Pun Berada",
  categories: [
    {
      target: "Bagi Warga Lokal & Petani Pribumi",
      icon: "Sprout",
      badgeColor: "emerald",
      actions: [
        {
          title: "Terapkan Pembukaan Lahan Tanpa Bakar (PLTB)",
          desc: "Manfaatkan dekomposer hayati alami untuk mempercepat pembusukan jerami dan gulma menjadi kompos organik tanpa memantik api sama sekali."
        },
        {
          title: "Pertahankan Hukum Adat Sekat Bakar Warisan Leluhur",
          desc: "Jika sistem ladang gilir tradisional terpaksa dilakukan pada tanah mineral (bukan gambut!), patuhi musyawarah adat: buat parit pembatas minimal 4 meter, atur arah angin, dan jaga bersama seluruh warga kampung."
        },
        {
          title: "Budidaya Tanaman Ramah Lahan Basah (Paludikultur)",
          desc: "Tanam komoditas bernilai tinggi yang menyukai genangan air gambut seperti jelutung rawa, pohon tengkawang, sagu, purun kerajinan, dan nanas gambut tanpa perlu mengeringkan kanal air."
        },
        {
          title: "Bergabung dalam Regu Masyarakat Peduli Api (MPA)",
          desc: "Bahu-membahu berpatroli saat musim kering tiba dan segera padamkan titik asap sekecil apa pun sebelum bara masuk ke lapisan bawah tanah gambut."
        }
      ]
    },
    {
      target: "Bagi Generasi Muda, Siswa & Mahasiswa",
      icon: "Users",
      badgeColor: "teal",
      actions: [
        {
          title: "Gaungkan Suara Kampanye Digital #LindungiBorneo",
          desc: "Gunakan media sosial untuk membagikan data ilmiah, foto keindahan flora/fauna endemik, dan desakan penegakan hukum bagi korporasi pembakar hutan."
        },
        {
          title: "Pilih Produk Bersertifikasi Nol-Deforestasi (NDPE)",
          desc: "Periksa label konsumsi harian Anda: pilih minyak goreng, kertas, dan sabun yang terverifikasi ramah hutan (RSPO/FSC) dan menolak komoditas dari lahan gambut yang dikeringkan."
        },
        {
          title: "Ikut Program Adopsi Pohon & Bibit Rimba",
          desc: "Sisihkan sedikit uang saku untuk mendukung program penanaman bibit Ulin dan Meranti di taman nasional dan hutan kemasyarakatan Kalimantan."
        },
        {
          title: "Edukasi Keluarga Besar tentang Bahaya Membakar Sampah & Semak",
          desc: "Jadilah agen perubahan di rumah sendiri. Jangan biarkan orang tua atau tetangga membakar pekarangan kering yang berpotensi merembet ke lahan tetangga."
        }
      ]
    },
    {
      target: "Bagi Pemerintah, Pembuat Kebijakan & Penegak Hukum",
      icon: "ShieldCheck",
      badgeColor: "amber",
      actions: [
        {
          title: "Tegakkan Sanksi Pidana & Cabut Izin Korporasi Pembakar",
          desc: "Berlakukan asas strict liability (pertanggungjawaban mutlak) tanpa pandang bulu terhadap perusahaan sawit dan tambang yang konsesinya terbakar."
        },
        {
          title: "Percepat Pengesahan RUU Masyarakat Adat",
          desc: "Legalisasi wilayah hutan adat Dayak karena bukti ilmiah membuktikan tutupan hutan adat memiliki tingkat deforestasi paling rendah di Indonesia."
        },
        {
          title: "Lanjutkan dan Tambah Anggaran Sekat Kanal BRGM",
          desc: "Pastikan pemeliharaan rutin puluhan ribu sekat kanal di lahan gambut agar muka air tanah tetap basah di atas batas aman 40 sentimeter."
        },
        {
          title: "Sediakan Alsintan (Alat Mesin Pertanian) Tanpa Bakar Gratis",
          desc: "Bantu petani kecil dengan traktor pencacah batang pohon dan bio-dekomposer agar mereka tidak terpaksa menggunakan korek api karena keterbatasan biaya."
        }
      ]
    }
  ]
};

export const CURRENT_FOREST_STATE_SUMMARY = {
  year: 2026,
  totalIslandAreaHa: 53950000, // Kalimantan portion ~54 million hectares
  remainingPrimaryForestHa: 28420000, // ~52.6%
  historicalForest1985Ha: 41800000, // ~77.5%
  peatlandRestoredHa: 1420000,
  activeCanalBlocksBuilt: 38500, // Sekat kanal pembasahan gambut
  carbonStockStoredGt: 28.5, // Gigatons CO2 equivalent
  keyAchievements: [
    'Penurunan laju deforestasi tahunan sebesar 38% dibandingkan rata-rata dekade 2010-2020 berkat moratorium sawit dan penegakan hukum.',
    'Restorasi lebih dari 38.000 sekat kanal oleh BRGM dan Masyarakat Peduli Api untuk menaikkan muka air gambut di atas 40 cm.',
    'Peningkatan pengakuan Hutan Adat bagi komunitas Dayak Kenyah, Iban, dan Ngaju seluas ratusan ribu hektar.',
    'Konektivitas koridor satwa di perbatasan Heart of Borneo tetap bertahan sebagai kanopi terluas di Asia Tenggara.'
  ],
  criticalAlerts: [
    'Ancaman gelombang panas musiman akibat dinamika iklim global yang mengeringkan gambut terdegradasi.',
    'Kebakaran bawah tanah (smoldering peat fires) yang sulit dideteksi dari atas namun terus membakar akar purba.',
    'Tekanan ekspansi infrastruktur baru di Kalimantan Timur dan perbatasan Kalimantan Utara yang membutuhkan pengawasan ketat.',
    'Tingkat penderita ISPA pada anak balita meningkat drastis setiap kali kabut asap melintasi pemukiman warga.'
  ]
};

