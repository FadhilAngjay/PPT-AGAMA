import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  chapter: string;
  title: string;
  render: () => React.ReactNode;
}

export default function App() {
  const [current, setCurrent] = useState(0);

  // Keyboard navigation: Left, Right, Spacebar
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

  // 9 Clean, Concise Presentation Slides
  const slides: Slide[] = [
    // SLIDE 1: COVER
    {
      id: 0,
      chapter: 'Pengantar',
      title: 'Konsep, Eksistensi, dan Tanggung Jawab sebagai Hamba',
      render: () => (
        <div className="h-full flex flex-col justify-between py-2 sm:py-4">
          <div className="flex items-center justify-between text-xs tracking-wider uppercase pb-4 border-b border-slate-200">
            <span className="font-semibold text-slate-500">Pendidikan Agama Islam · Kelas A</span>
            <span className="text-slate-400">Universitas Komputama Cilacap</span>
          </div>

          <div className="my-auto py-6 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              Presentasi Makalah Mahasiswa
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-bold text-slate-900 leading-tight tracking-tight">
              Konsep, Eksistensi, & Tanggung Jawab sebagai Hamba
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Memahami hakikat penciptaan manusia, dinamika akal versus nafsu, serta amanah ganda vertikal dan horizontal.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Pemateri 1</span>
              <p className="font-bold text-sm text-slate-900">Fadhil Adi Saputro</p>
              <p className="text-slate-500">NIM: 265720007</p>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Pemateri 2</span>
              <p className="font-bold text-sm text-slate-900">Surya Junior Saputra</p>
              <p className="text-slate-500">NIM: 265720032</p>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Dosen Pengampu</span>
              <p className="font-bold text-sm text-slate-900">Kuswantoro, M.S.</p>
              <p className="text-slate-500">Sistem Informasi · 2026</p>
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">01 / Latar Belakang</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-6">
              Mengapa Manusia Kerap Kehilangan Arah?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            {/* Sekuler */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-2">
                Pendekatan Sekuler
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reduksi Jasmani & Materi</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li>• Membatasi manusia hanya pada aspek biologis dan sosial ekonomi semata.</li>
                <li>• Mengabaikan dimensi spiritual (ruh) dan keterikatan dengan Sang Pencipta.</li>
                <li>• <strong>Dampak:</strong> Krisis eksistensial, kekosongan batin, dan hilangnya kompas hidup.</li>
              </ul>
            </div>

            {/* Islam */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                Perspektif Islam
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mahakarya Terbaik (Ahsan Taqwim)</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li>• Manusia bukan produk kebetulan, melainkan puncak ciptaan Allah SWT.</li>
                <li>• Mengenal diri (<em>ma'rifatun nafs</em>) adalah pintu mengenal Tuhan (<em>ma'rifatullah</em>).</li>
                <li>• <strong>Tujuan:</strong> Mengemban amanah sebagai hamba dan pemakmur bumi.</li>
              </ul>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4 border-t border-slate-200 flex items-center justify-between">
            <span>Landasan: QS. At-Tin : 4</span>
            <span>Inti: Menyeimbangkan materi duniawi dan hakikat ruhani</span>
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">02 / Hakikat</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-6">
              Penyatuan Harmonis Tiga Dimensi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif-title font-bold text-slate-400 block mb-2">01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Jasad</h3>
                <span className="text-xs text-slate-500 block mb-3">Dimensi Fisik</span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Diciptakan dari tanah. Terikat pada hukum alam (sunnatullah), keterbatasan biologis, lelah, dan fana.
                </p>
              </div>
              <div className="text-xs text-slate-400 pt-4 border-t border-slate-200 mt-4">
                Wadah ragawi di dunia
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif-title font-bold text-emerald-800 block mb-2">02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Ruh</h3>
                <span className="text-xs text-slate-500 block mb-3">Dimensi Spiritual</span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ditiupkan langsung oleh Allah (QS. As-Sajdah: 9). Menjadi sumber nurani, moralitas, dan kerinduan ilahi.
                </p>
              </div>
              <div className="text-xs text-slate-400 pt-4 border-t border-slate-200 mt-4">
                Koneksi vertikal ketuhanan
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif-title font-bold text-slate-400 block mb-2">03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Akal</h3>
                <span className="text-xs text-slate-500 block mb-3">Dimensi Intelektual</span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fitrah pembeda dari hewan. Memberi daya nalar rasional dan <em>free will</em> (kebebasan memilih benar atau salah).
                </p>
              </div>
              <div className="text-xs text-slate-400 pt-4 border-t border-slate-200 mt-4">
                Kunci pertanggungjawaban
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">03 / Bahasa Wahyu</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-6">
              Terminologi Manusia dalam Al-Qur'an
            </h2>
          </div>

          <div className="space-y-4 my-auto">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="sm:w-1/4">
                <span className="text-xs font-bold uppercase text-slate-400">01 · Ragawi</span>
                <h3 className="text-xl font-bold text-emerald-800">Al-Basyar</h3>
              </div>
              <div className="sm:w-3/4 text-sm text-slate-600 leading-relaxed sm:border-l border-slate-200 sm:pl-6">
                <strong>Makhluk Biologis:</strong> Menunjuk wujud kasat mata yang terikat hukum biologis (lapar, dahaga, sakit, dan mati). Mengingatkan kodrat fisik manusia yang fana.
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="sm:w-1/4">
                <span className="text-xs font-bold uppercase text-slate-400">02 · Psikis & Akal</span>
                <h3 className="text-xl font-bold text-emerald-800">Al-Insan / Al-Ins</h3>
              </div>
              <div className="sm:w-3/4 text-sm text-slate-600 leading-relaxed sm:border-l border-slate-200 sm:pl-6">
                <strong>Makhluk Berpikir & Bermoral:</strong> Menyoroti potensi kecerdasan dan kemampuan menyerap nilai budi pekerti; sekaligus sifat manusiawi seperti pelupa (<em>nisyan</em>) dan keluh kesah.
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="sm:w-1/4">
                <span className="text-xs font-bold uppercase text-slate-400">03 · Sosiologis</span>
                <h3 className="text-xl font-bold text-emerald-800">An-Nas / Bani Adam</h3>
              </div>
              <div className="sm:w-3/4 text-sm text-slate-600 leading-relaxed sm:border-l border-slate-200 sm:pl-6">
                <strong>Makhluk Sosial & Keturunan:</strong> Menunjukkan manusia tidak dapat hidup sendiri, berinteraksi dalam ikatan masyarakat, dan berakar historis pada Nabi Adam AS.
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
            Tiga dimensi: Fisik (Basyar), Psikis-Intelektual (Insan), dan Sosial (An-Nas)
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">04 / Dinamika Eksistensi</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-6">
              Manusia di Antara Dua Derajat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            {/* Melampaui Malaikat */}
            <div className="p-6 rounded-xl border border-emerald-300 bg-emerald-50/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  Akal Menundukkan Nafsu
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Melampaui Derajat Malaikat</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Malaikat senantiasa taat karena memang tidak dibekali syahwat nafsu. Ketika manusia memilih taat di tengah gelombang godaan nafsu, derajat ketakwaannya melampaui malaikat.
                </p>
              </div>
              <div className="text-xs text-emerald-800 font-semibold pt-4 border-t border-emerald-200">
                Pencapaian: Manusia Paripurna (Insan Kamil)
              </div>
            </div>

            {/* Lebih Rendah dari Hewan */}
            <div className="p-6 rounded-xl border border-rose-300 bg-rose-50/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block mb-2">
                  Nafsu Memperbudak Akal
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Lebih Rendah dari Binatang</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Jika akal dibungkam demi menuruti keserakahan dan hawa nafsu liar, manusia kehilangan fitrah nuraninya dan menjadi perusak bumi.
                </p>
              </div>
              <div className="text-xs text-rose-800 font-semibold pt-4 border-t border-rose-200">
                QS. Al-A'raf : 179 · "Mereka seperti hewan ternak, bahkan lebih sesat"
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
            Poin Inti: Eksistensi manusia bersifat dinamis, ditentukan oleh pilihan moral setiap saat.
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">05 / Poros Vertikal</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-2">
              Sebagai 'Abdullah (Hamba Allah)
            </h2>
            <p className="text-xs text-slate-500 font-mono">Hablum Minallah · QS. Az-Zariyat : 56</p>
          </div>

          <div className="my-auto space-y-6">
            <blockquote className="text-lg sm:text-xl font-serif-title italic text-slate-800 pl-4 border-l-2 border-emerald-700">
              "Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka mengabdi kepada-Ku."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">1. Pemurnian Tauhid</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menyembah hanya kepada Allah SWT, menolak penghambaan semu terhadap materi, jabatan, dan ego.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">2. Ibadah Mahdhah</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menjalankan rukun ibadah secara ikhlas: shalat sebagai tiang, zakat, puasa, dan haji.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">3. Ketundukan Jiwa</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pasrah dan patuh pada ketentuan syariat Allah dalam seluruh aspek kehidupan sehari-hari.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
            Esensi: Membangun integritas batin dan kepatuhan mutlak kepada Sang Pencipta.
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">06 / Poros Horizontal</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-2">
              Sebagai Khalifah fil Ardh (Wakil di Bumi)
            </h2>
            <p className="text-xs text-slate-500 font-mono">Hablum Minannas & Hablum Minal 'Alam · QS. Al-Baqarah : 30</p>
          </div>

          <div className="my-auto space-y-6">
            <blockquote className="text-lg sm:text-xl font-serif-title italic text-slate-800 pl-4 border-l-2 border-emerald-700">
              "Sesungguhnya Aku hendak menjadikan seorang khalifah di muka bumi."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">1. Konservasi Lingkungan</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mengelola alam secara bijak, mencegah perusakan ekosistem (<em>fasad fil ardh</em>), dan menjaga kelestarian.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">2. Kemajuan Sains & Teknologi</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Memanfaatkan ilmu pengetahuan dan teknologi informasi untuk memecahkan problematika hidup manusia.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">3. Keadilan Sosial</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menebar rahmat semesta (<em>rahmatan lil 'alamin</em>) dan menegakkan etika keadilan di tengah masyarakat.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
            Esensi: Menghadirkan kemakmuran dan tatanan peradaban yang berkeadaban di dunia.
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">07 / Sintesis Makalah</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-6">
              Keseimbangan Dua Poros Tanggung Jawab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-2">
                Peringatan Ketimpangan
              </span>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <strong>Khalifah tanpa 'Abdullah:</strong> Peradaban maju pesat dalam teknologi, namun serakah, mengeksploitasi alam, dan kehilangan nurani moral.
                </li>
                <li>
                  <strong>'Abdullah tanpa Khalifah:</strong> Kesalehan sempit di tempat ibadah semata, namun pasif, abai problematika sosial, dan tertinggal dalam sains.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-emerald-300 bg-emerald-50/70 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  Harmonisasi Ideal
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dua Sayap Peradaban Islam</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Produktivitas sains dan kepemimpinan peradaban harus dipandu dengan ketundukan tauhid kepada Allah SWT.
                </p>
              </div>
              <div className="text-xs text-emerald-800 font-semibold pt-4 border-t border-emerald-200">
                Visi: Hasanah fi ad-dunya wa hasanah fi al-akhirah
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
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
        <div className="h-full flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">08 / Rangkuman Akhir</span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900 mt-1 mb-6">
              Tiga Poin Pokok Makalah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Poin 1</span>
              <h4 className="font-bold text-base text-slate-900 mb-2">Hakikat Multidimensi</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manusia adalah mahakarya terbaik (<em>ahsan taqwim</em>) perpaduan raga (jasad), jiwa (ruh), dan akal budi.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Poin 2</span>
              <h4 className="font-bold text-base text-slate-900 mb-2">Eksistensi Dinamis</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Derajat manusia ditentukan oleh kemampuannya menundukkan nafsu dengan akal dan bimbingan wahyu ilahi.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Poin 3</span>
              <h4 className="font-bold text-base text-slate-900 mb-2">Mandat Ganda</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keseimbangan antara pengabdian vertikal ('Abdullah) dan kepemimpinan horizontal (Khalifah fil Ardh).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 text-center space-y-2 mt-4 bg-slate-50/40">
            <h3 className="text-2xl font-serif-title font-bold text-slate-900">Terima Kasih</h3>
            <p className="text-xs text-slate-500">
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
      {/* MINIMAL TOP BAR (NO BUTTONS ON RIGHT) */}
      <nav className="border-b border-slate-200/90 bg-white/70 backdrop-blur px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-xs sm:text-sm">
          <span className="font-bold text-slate-900">Pendidikan Agama Islam</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500">Dosen: Kuswantoro, M.S.</span>
        </div>
        <div className="text-xs text-slate-400 hidden sm:block">
          Sistem Informasi · UNIKMA Cilacap
        </div>
      </nav>

      {/* MAIN PRESENTATION STAGE */}
      <main className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl">
          
          {/* SLIDE CANVAS (16:9 Clean Canvas) */}
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-slate-200 bg-white shadow-xl p-6 sm:p-12 lg:p-14 flex flex-col justify-between transition-all duration-200">
            {currentSlide.render()}
          </div>

          {/* SLIDE FOOTER CONTROLS */}
          <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-500">
            {/* Simple Slide Counter */}
            <div className="font-mono font-semibold text-slate-700">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrent(c => Math.max(0, c - 1))}
                disabled={current === 0}
                className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                title="Slide Sebelumnya (←)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrent(c => Math.min(slides.length - 1, c + 1))}
                disabled={current === slides.length - 1}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center space-x-1"
                title="Slide Selanjutnya (→ atau Spasi)"
              >
                <span>Lanjut</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
