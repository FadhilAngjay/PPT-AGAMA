import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  chapter: string;
  title: string;
  render: () => React.ReactNode;
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrent(c => (c < slides.length - 1 ? c + 1 : c));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrent(c => (c > 0 ? c - 1 : c));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Mobile swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // min 50px swipe

    if (distance > minSwipeDistance) {
      // Swiped left -> next slide
      setCurrent(c => Math.min(slides.length - 1, c + 1));
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev slide
      setCurrent(c => Math.max(0, c - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // 9 Clean, Concise Presentation Slides (Responsive Mobile & Desktop)
  const slides: Slide[] = [
    // SLIDE 1: COVER
    {
      id: 0,
      chapter: 'Pengantar',
      title: 'Konsep, Eksistensi, dan Tanggung Jawab sebagai Hamba',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-5 sm:space-y-6">
          <div className="text-[11px] sm:text-xs tracking-wider uppercase pb-3 border-b border-slate-200">
            <span className="font-semibold text-slate-600">Pendidikan Agama Islam · Kelas A</span>
          </div>

          <div className="my-auto space-y-3 sm:space-y-4 py-2">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-emerald-800">
              Presentasi Makalah Mahasiswa
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-slate-900 leading-tight tracking-tight">
              Konsep, Eksistensi, & Tanggung Jawab sebagai Hamba
            </h1>
            <p className="text-xs sm:text-base text-slate-600 font-light leading-relaxed">
              Memahami hakikat penciptaan manusia, dinamika akal versus nafsu, serta amanah ganda vertikal dan horizontal.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs">
            <div className="bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none">
              <span className="text-slate-400 block text-[10px] sm:text-xs">Pemateri 1</span>
              <p className="font-bold text-xs sm:text-sm text-slate-900">Fadhil Adi Saputro</p>
              <p className="text-slate-500 text-[11px] sm:text-xs">NIM: 265720007</p>
            </div>
            <div className="bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none">
              <span className="text-slate-400 block text-[10px] sm:text-xs">Pemateri 2</span>
              <p className="font-bold text-xs sm:text-sm text-slate-900">Surya Junior Saputra</p>
              <p className="text-slate-500 text-[11px] sm:text-xs">NIM: 265720032</p>
            </div>
            <div className="bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none">
              <span className="text-slate-400 block text-[10px] sm:text-xs">Dosen Pengampu</span>
              <p className="font-bold text-xs sm:text-sm text-slate-900">Kuswantoro, M.S.</p>
              <p className="text-slate-500 text-[11px] sm:text-xs">Sistem Informasi · 2026</p>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 2: LATAR BELAKANG
    {
      id: 1,
      chapter: 'Bab I · Latar Belakang',
      title: 'Dua Sudut Pandang Manusia',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              01 / Latar Belakang
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Mengapa Manusia Kerap Kehilangan Arah?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 my-auto">
            {/* Sekuler */}
            <div className="p-3.5 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
                Pendekatan Sekuler
              </span>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-2">Reduksi Jasmani & Materi</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <li>• Membatasi manusia hanya pada aspek fisik biologis semata.</li>
                <li>• Mengabaikan dimensi spiritual (ruh) dan keterikatan dengan Sang Pencipta.</li>
                <li>• <strong>Dampak:</strong> Krisis eksistensial dan hilangnya makna hidup sejati.</li>
              </ul>
            </div>

            {/* Islam */}
            <div className="p-3.5 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Perspektif Islam
              </span>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-2">Puncak Ciptaan (Ahsan Taqwim)</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <li>• Manusia bukan produk kebetulan, melainkan karya terbaik Allah SWT.</li>
                <li>• Mengenal diri (<em>ma'rifatun nafs</em>) adalah jalan mengenal Tuhan (<em>ma'rifatullah</em>).</li>
                <li>• <strong>Tujuan:</strong> Mengemban amanah sebagai hamba dan pemakmur bumi.</li>
              </ul>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-1">
            <span>Landasan: QS. At-Tin : 4</span>
            <span>Inti: Keseimbangan materi dan spiritual</span>
          </div>
        </div>
      )
    },

    // SLIDE 3: HAKIKAT MANUSIA (3 UNSUR)
    {
      id: 2,
      chapter: 'Bab II · Hakikat Manusia',
      title: 'Tiga Unsur Pembentuk Manusia',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              02 / Hakikat
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Penyatuan Tiga Dimensi Harmonis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-auto">
            {/* Jasad */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">1. Jasad</h3>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Fisik</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dari tanah. Terikat hukum kausalitas alam, keterbatasan biologis (lapar, lelah, fana).
                </p>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-200 mt-2">
                Wadah ragawi di dunia
              </div>
            </div>

            {/* Ruh */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">2. Ruh</h3>
                  <span className="text-[10px] uppercase font-bold text-emerald-800">Spiritual</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ditiupkan langsung oleh Allah (QS. As-Sajdah: 9). Sumber nurani, moralitas & rindu ilahi.
                </p>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-200 mt-2">
                Koneksi vertikal ketuhanan
              </div>
            </div>

            {/* Akal */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">3. Akal</h3>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Intelek</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fitrah pembeda dari hewan. Daya nalar rasional dan <em>free will</em> (kebebasan memilih).
                </p>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-200 mt-2">
                Kunci pertanggungjawaban
              </div>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-200">
            Rujukan Dalil: QS. At-Tin : 4 & QS. As-Sajdah : 9
          </div>
        </div>
      )
    },

    // SLIDE 4: ISTILAH AL-QUR'AN
    {
      id: 3,
      chapter: 'Bab II · Terminologi Qur\'an',
      title: 'Tiga Potret Manusia dalam Al-Qur\'an',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              03 / Bahasa Wahyu
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Terminologi Manusia dalam Al-Qur'an
            </h2>
          </div>

          <div className="space-y-2.5 sm:space-y-3 my-auto">
            <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4">
              <div className="sm:w-1/3">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Ragawi · Biologis</span>
                <h3 className="text-sm sm:text-base font-bold text-emerald-800">Al-Basyar</h3>
              </div>
              <div className="sm:w-2/3 text-xs sm:text-sm text-slate-600 leading-relaxed sm:border-l border-slate-200 sm:pl-4">
                Menunjuk wujud fisik yang terikat hukum biologis: lapar, dahaga, sakit, dan mati.
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4">
              <div className="sm:w-1/3">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Mental · Moral</span>
                <h3 className="text-sm sm:text-base font-bold text-emerald-800">Al-Insan / Al-Ins</h3>
              </div>
              <div className="sm:w-2/3 text-xs sm:text-sm text-slate-600 leading-relaxed sm:border-l border-slate-200 sm:pl-4">
                Menyoroti potensi kecerdasan akal, sekaligus sifat kodrati seperti keluh kesah dan pelupa.
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4">
              <div className="sm:w-1/3">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Sosial · Keturunan</span>
                <h3 className="text-sm sm:text-base font-bold text-emerald-800">An-Nas / Bani Adam</h3>
              </div>
              <div className="sm:w-2/3 text-xs sm:text-sm text-slate-600 leading-relaxed sm:border-l border-slate-200 sm:pl-4">
                Makhluk bermasyarakat yang berakar historis dari garis keturunan Nabi Adam AS.
              </div>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-200">
            Tiga sudut pandang wahyu: Fisik (Basyar), Psikis (Insan), dan Sosial (An-Nas)
          </div>
        </div>
      )
    },

    // SLIDE 5: EKSISTENSI (AKAL VS NAFSU)
    {
      id: 4,
      chapter: 'Bab II · Dinamika Eksistensi',
      title: 'Pertarungan Akal vs Hawa Nafsu',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              04 / Dinamika Eksistensi
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Manusia di Antara Dua Derajat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 my-auto">
            {/* Melampaui Malaikat */}
            <div className="p-3.5 sm:p-5 rounded-xl border border-emerald-300 bg-emerald-50/60 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Akal Menundukkan Nafsu
                </span>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1.5">Melampaui Malaikat</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2 sm:mb-4">
                  Malaikat taat karena tidak memiliki nafsu. Saat manusia taat melawan godaan nafsunya, derajatnya melampaui malaikat.
                </p>
              </div>
              <div className="text-[10px] sm:text-xs text-emerald-800 font-semibold pt-2 border-t border-emerald-200">
                Pencapaian: Manusia Paripurna (Insan Kamil)
              </div>
            </div>

            {/* Lebih Rendah dari Hewan */}
            <div className="p-3.5 sm:p-5 rounded-xl border border-rose-300 bg-rose-50/60 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-800 block mb-1">
                  Nafsu Memperbudak Akal
                </span>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1.5">Lebih Rendah dari Binatang</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2 sm:mb-4">
                  Jika akal dibungkam demi syahwat dan ego, manusia kehilangan nuraninya dan menjadi perusak bumi.
                </p>
              </div>
              <div className="text-[10px] sm:text-xs text-rose-800 font-semibold pt-2 border-t border-rose-200">
                QS. Al-A'raf : 179 · "Seperti hewan ternak, bahkan lebih sesat"
              </div>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-200">
            Inti: Eksistensi manusia bersifat dinamis, ditentukan oleh pilihan moralnya.
          </div>
        </div>
      )
    },

    // SLIDE 6: TANGGUNG JAWAB I ('ABDULLAH)
    {
      id: 5,
      chapter: 'Bab II · Tanggung Jawab I',
      title: 'Tanggung Jawab sebagai \'Abdullah',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              05 / Poros Vertikal
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Sebagai 'Abdullah (Hamba Allah)
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 font-mono">Hablum Minallah · QS. Az-Zariyat : 56</p>
          </div>

          <div className="my-auto space-y-3 sm:space-y-4">
            <blockquote className="text-sm sm:text-lg font-serif-title italic text-slate-800 pl-3 sm:pl-4 border-l-2 border-emerald-700">
              "Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka mengabdi kepada-Ku."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">1. Pemurnian Tauhid</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Menyembah hanya kepada Allah SWT, menolak penghambaan semu pada materi & jabatan.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">2. Ibadah Mahdhah</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Menjalankan rukun ibadah secara ikhlas: shalat, zakat, puasa, dan haji.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">3. Ketundukan Jiwa</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Patuh pada ketentuan syariat Allah dalam seluruh aspek kehidupan sehari-hari.
                </p>
              </div>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-200">
            Esensi: Membangun kepatuhan mutlak dan ketenangan batin kepada Sang Pencipta.
          </div>
        </div>
      )
    },

    // SLIDE 7: TANGGUNG JAWAB II (KHALIFAH)
    {
      id: 6,
      chapter: 'Bab II · Tanggung Jawab II',
      title: 'Tanggung Jawab sebagai Khalifah fil Ardh',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              06 / Poros Horizontal
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Sebagai Khalifah fil Ardh (Wakil di Bumi)
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 font-mono">Hablum Minannas & Alam · QS. Al-Baqarah : 30</p>
          </div>

          <div className="my-auto space-y-3 sm:space-y-4">
            <blockquote className="text-sm sm:text-lg font-serif-title italic text-slate-800 pl-3 sm:pl-4 border-l-2 border-emerald-700">
              "Sesungguhnya Aku hendak menjadikan seorang khalifah di muka bumi."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">1. Kelestarian Alam</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Mengelola bumi secara bijak dan mencegah perusakan lingkungan (<em>fasad</em>).
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">2. Sains & Teknologi</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Memanfaatkan ilmu pengetahuan dan sistem informasi demi kemaslahatan manusia.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">3. Keadilan Sosial</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Menebar rahmat semesta (<em>rahmatan lil 'alamin</em>) dan menegakkan keadilan.
                </p>
              </div>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-200">
            Esensi: Menghadirkan kemakmuran dan tatanan peradaban yang beradab di dunia.
          </div>
        </div>
      )
    },

    // SLIDE 8: SINERGI DUA PERAN
    {
      id: 7,
      chapter: 'Bab II · Sintesis',
      title: 'Sinergi Mutlak Dua Poros',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              07 / Sintesis Makalah
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Keseimbangan Dua Poros Tanggung Jawab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 my-auto">
            <div className="p-3.5 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
                Peringatan Ketimpangan
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <strong>Khalifah tanpa 'Abdullah:</strong> Teknologi maju tapi serakah, merusak alam, dan kehilangan moralitas.
                </li>
                <li>
                  <strong>'Abdullah tanpa Khalifah:</strong> Kesalehan individual pasif, abai problematika sosial & tertinggal dalam sains.
                </li>
              </ul>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl border border-emerald-300 bg-emerald-50/70 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Harmonisasi Ideal
                </span>
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1.5">Dua Sayap Peradaban Islam</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Produktivitas sains dan kepemimpinan peradaban harus dipandu dengan ketundukan tauhid kepada Allah SWT.
                </p>
              </div>
              <div className="text-[10px] sm:text-xs text-emerald-800 font-semibold pt-2 border-t border-emerald-200 mt-2">
                Visi: Hasanah fi ad-dunya wa hasanah fi al-akhirah
              </div>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-200">
            Keduanya tidak dapat dipisahkan; keduanya saling menopang dan menyempurnakan.
          </div>
        </div>
      )
    },

    // SLIDE 9: KESIMPULAN & TANYA JAWAB
    {
      id: 8,
      chapter: 'Bab III · Penutup',
      title: 'Kesimpulan & Sesi Diskusi',
      render: () => (
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-0.5">
              08 / Rangkuman Akhir
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-slate-900">
              Tiga Poin Pokok Makalah
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 my-auto">
            <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Poin 1</span>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">Hakikat Multidimensi</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Manusia adalah mahakarya terbaik (<em>ahsan taqwim</em>) perpaduan jasad, ruh, dan akal budi.
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Poin 2</span>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">Eksistensi Dinamis</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Derajat manusia ditentukan oleh kemampuannya menundukkan nafsu dengan akal dan bimbingan wahyu.
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Poin 3</span>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">Mandat Ganda</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Keseimbangan antara pengabdian vertikal ('Abdullah) dan kepemimpinan horizontal (Khalifah).
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl border border-slate-200 text-center space-y-1 bg-slate-50/40">
            <h3 className="text-lg sm:text-2xl font-serif-title font-bold text-slate-900">Terima Kasih</h3>
            <p className="text-[11px] sm:text-xs text-slate-500">
              Kami menyambut kritik, saran, dan pertanyaan dari Bapak <strong>Kuswantoro, M.S.</strong> serta rekan-rekan sekalian.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentSlide = slides[current];

  return (
    <div className="min-h-screen bg-[#f5f5f1] text-slate-900 flex flex-col font-sans select-none">
      {/* MINIMAL TOP BAR */}
      <nav className="border-b border-slate-200/90 bg-white/80 backdrop-blur px-3 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-start shrink-0">
        <div className="flex items-center space-x-2 text-xs sm:text-sm">
          <span className="font-bold text-slate-900">Pendidikan Agama Islam</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500">Dosen: Kuswantoro, M.S.</span>
        </div>
      </nav>

      {/* MAIN PRESENTATION STAGE (FLUID RESPONSIVE CONTAINER) */}
      <main className="flex-1 flex flex-col items-center justify-center p-2.5 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl flex flex-col">
          
          {/* SLIDE CANVAS (NO FORCED SQUASHED ASPECT RATIO ON MOBILE) */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full min-h-[520px] sm:min-h-[540px] md:min-h-[580px] lg:aspect-[16/9] lg:min-h-0 rounded-2xl border border-slate-200 bg-white shadow-xl p-4 sm:p-8 lg:p-12 flex flex-col justify-between transition-all duration-200"
          >
            {currentSlide.render()}
          </div>

          {/* SLIDE FOOTER CONTROLS */}
          <div className="mt-3 sm:mt-4 flex items-center justify-between px-1 text-xs text-slate-500">
            {/* Simple Slide Counter */}
            <div className="font-mono font-semibold text-slate-700 text-xs sm:text-sm">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrent(c => Math.max(0, c - 1))}
                disabled={current === 0}
                className="p-2 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center space-x-1"
                title="Slide Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Sebelumnya</span>
              </button>

              <button
                onClick={() => setCurrent(c => Math.min(slides.length - 1, c + 1))}
                disabled={current === slides.length - 1}
                className="px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center space-x-1"
                title="Slide Selanjutnya"
              >
                <span className="text-xs">Lanjut</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
