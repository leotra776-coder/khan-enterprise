import React, { useState, useEffect } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Grid,
  CheckCircle2,
} from 'lucide-react';
import {
  PROJECT_ALBUM_PHOTOS,
  ProjectAlbumCategory,
  ProjectAlbumPhoto,
} from '../data/projectAlbumData';

interface ProjectAlbumProps {
  lang: 'en' | 'bn';
}

export const ProjectAlbum: React.FC<ProjectAlbumProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectAlbumCategory>('all');
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === 'all'
      ? PROJECT_ALBUM_PHOTOS
      : PROJECT_ALBUM_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const visiblePhotos =
    showAllPhotos || selectedCategory !== 'all'
      ? filteredPhotos
      : filteredPhotos.slice(0, 12);

  const activeLightboxPhoto: ProjectAlbumPhoto | null =
    lightboxIndex !== null && filteredPhotos[lightboxIndex]
      ? filteredPhotos[lightboxIndex]
      : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredPhotos.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const handleCategoryChange = (category: 'all' | ProjectAlbumCategory) => {
    setSelectedCategory(category);
    setLightboxIndex(null);
  };

  return (
    <section id="project-album" className="py-20 bg-stone-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
              {lang === 'en'
                ? `LIVE ONGOING PROJECTS & SUPPLY ALBUM · ${PROJECT_ALBUM_PHOTOS.length} VERIFIED SITE PHOTOGRAPHS`
                : `চলমান প্রজেক্ট ও মালামাল সরবরাহের অ্যালবাম · ${PROJECT_ALBUM_PHOTOS.length}টি বাস্তব কাজের ছবি`}
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
              {lang === 'en'
                ? 'Our Ongoing Construction Projects & Field Operations'
                : 'আমাদের চলমান প্রজেক্ট ও সাইটে মালামাল সরবরাহের বাস্তব চিত্র'}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Explore real photographs from KHAN ENTERPRIZE’s active government infrastructure works, municipal RCC drainage and culvert installations, precast girder fabrication, highway asphalt carpeting, and our wholesale Fresh & Crown Cement depot.'
                : 'খান এন্টারপ্রাইজ (KHAN ENTERPRIZE)-এর প্রত্যক্ষ তত্ত্বাবধানে চলমান সরকারি রাস্তা ও ড্রেনেজ প্রজেক্ট, বিশালাকার প্রিকাস্ট আরসিসি পাইপ কালভার্ট স্থাপন, টিএমটি রড বাইন্ডিং, রেডি-মিক্স কংক্রিট ঢালাই, ১ নং ইটের ম্যানহোল গাঁথুনি এবং আমাদের নিজস্ব ডিপোতে ফ্রেশ ও ক্রাউন সিমেন্টের মজুদের বাস্তব ছবিগুলো নিচে তুলে ধরা হলো।'}
            </p>
          </div>

          {/* Summary Highlights Box */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {lang === 'en' ? 'Ongoing Field Highlights' : 'চলমান প্রজেক্টের মূল কাজসমূহ'}
              </span>
              <span className="text-xs font-mono-tabular font-semibold text-amber-700">
                {lang === 'en'
                  ? `${PROJECT_ALBUM_PHOTOS.length} Photos in Album`
                  : `মোট ${PROJECT_ALBUM_PHOTOS.length}টি ছবি`}
              </span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'Bulk depot stockpile of Fresh Cement, Crown Cement & Supercrete Cement'
                    : 'নিজস্ব গোডাউনে ফ্রেশ সিমেন্ট, ক্রাউন সিমেন্ট ও সুপারক্রিট সিমেন্টের বিশাল মজুদ'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'TMT 500W rebar cages, precast RCC girders, box drains & large pipe culverts'
                    : 'টিএমটি রডের খাঁচা, প্রিকাস্ট আরসিসি বিম, বক্স ড্রেন ও বিশালাকার কালভার্ট পাইপ স্থাপন'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'Night-shift Ready-Mix Concrete (RMC) casting & highway asphalt carpeting'
                    : 'রাতের শিফটে রেডি-মিক্স কংক্রিট ঢালাই এবং পেভার ও রোলার দিয়ে সড়ক কার্পেটিং'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Category Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl">
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-slate-950 text-amber-400 shadow-xs'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {lang === 'en'
                ? `All Project Photos (${PROJECT_ALBUM_PHOTOS.length})`
                : `সবগুলো ছবি (${PROJECT_ALBUM_PHOTOS.length})`}
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('depot-stock')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'depot-stock'
                  ? 'bg-slate-950 text-amber-400 shadow-xs'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {lang === 'en' ? 'Cement Depot & Stock (04)' : 'সিমেন্ট ডিপো ও গোডাউন (০৪)'}
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('rcc-culvert-rebar')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'rcc-culvert-rebar'
                  ? 'bg-slate-950 text-amber-400 shadow-xs'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {lang === 'en'
                ? 'RCC Culvert, Drain & Rebar (15)'
                : 'আরসিসি ড্রেন, কালভার্ট ও রড (১৫)'}
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('casting-roadworks')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'casting-roadworks'
                  ? 'bg-slate-950 text-amber-400 shadow-xs'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {lang === 'en'
                ? 'RMC Casting & Road Works (07)'
                : 'রেডি-মিক্স ঢালাই ও সড়ক (০৭)'}
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('site-inspection')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'site-inspection'
                  ? 'bg-slate-950 text-amber-400 shadow-xs'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {lang === 'en'
                ? 'Office & Site Inspection (05)'
                : 'অফিস ও সাইট পরিদর্শন (০৫)'}
            </button>
          </div>

          {selectedCategory === 'all' && (
            <button
              type="button"
              onClick={() => setShowAllPhotos((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 hover:border-slate-950 text-xs font-bold text-slate-900 transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-auto"
            >
              <Grid className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {showAllPhotos
                  ? lang === 'en'
                    ? 'Show Compact View (12 Photos)'
                    : 'সংক্ষিপ্ত ভিউ দেখুন (১২টি ছবি)'
                  : lang === 'en'
                  ? `Expand All ${PROJECT_ALBUM_PHOTOS.length} Album Photos`
                  : `সবগুলো ${PROJECT_ALBUM_PHOTOS.length}টি ছবি একসাথে দেখুন`}
              </span>
            </button>
          )}
        </div>

        {/* Photo Album Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, idx) => (
            <article
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group bg-white border border-slate-200 hover:border-amber-500 rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={lang === 'en' ? photo.titleEn : photo.titleBn}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-mono-tabular text-xs font-semibold text-amber-400">
                      #{String(idx + 1).padStart(2, '0')} ·{' '}
                      {lang === 'en' ? photo.categoryLabelEn : photo.categoryLabelBn}
                    </span>
                    <span className="w-7 h-7 rounded-md bg-slate-950/75 text-white group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Caption Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                    {lang === 'en' ? photo.titleEn : photo.titleBn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'en' ? photo.captionEn : photo.captionBn}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3 bg-stone-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 group-hover:text-amber-700">
                  <Camera className="w-3.5 h-3.5 text-amber-600" />
                  {lang === 'en' ? 'Click to Enlarge Photo' : 'বড় করে দেখতে ক্লিক করুন'}
                </span>
                <span className="font-mono-tabular">KHAN ENTERPRIZE</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Expand / Collapse Button when in All mode */}
        {selectedCategory === 'all' && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllPhotos((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-amber-400 font-bold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Grid className="w-4 h-4" />
              <span>
                {showAllPhotos
                  ? lang === 'en'
                    ? 'Show Fewer Photos (12 of 30)'
                    : 'সংক্ষিপ্ত অ্যালবাম দেখুন (১২টি ছবি)'
                  : lang === 'en'
                  ? `View All ${PROJECT_ALBUM_PHOTOS.length} Ongoing Project Photos`
                  : `চলমান প্রজেক্টের সবগুলো ছবি দেখুন (${PROJECT_ALBUM_PHOTOS.length}টি ছবি)`}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Viewer Modal */}
      {activeLightboxPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono-tabular text-slate-300">
                <span className="text-amber-400 font-bold">
                  {lang === 'en'
                    ? `Photo ${lightboxIndex + 1} of ${filteredPhotos.length}`
                    : `ছবি ${lightboxIndex + 1} / ${filteredPhotos.length}`}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {lang === 'en'
                    ? activeLightboxPhoto.categoryLabelEn
                    : activeLightboxPhoto.categoryLabelBn}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close album viewer"
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image Stage with Prev/Next Controls */}
            <div className="relative bg-black flex items-center justify-center max-h-[65vh] min-h-[320px] overflow-hidden">
              <img
                src={activeLightboxPhoto.imageUrl}
                alt={
                  lang === 'en'
                    ? activeLightboxPhoto.titleEn
                    : activeLightboxPhoto.titleBn
                }
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredPhotos.length) %
                      filteredPhotos.length
                  )
                }
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-slate-950/80 border border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)
                }
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-slate-950/80 border border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-5 sm:p-6 bg-slate-950 text-white border-t border-slate-800">
              <h3 className="text-lg font-bold text-amber-400 mb-1.5">
                {lang === 'en'
                  ? activeLightboxPhoto.titleEn
                  : activeLightboxPhoto.titleBn}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? activeLightboxPhoto.captionEn
                  : activeLightboxPhoto.captionBn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
