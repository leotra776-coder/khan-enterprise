import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { MaterialItem } from '../data/companyData';

interface InspectionModalProps {
  lang: 'en' | 'bn';
  activeMaterial: MaterialItem | null;
  onClose: () => void;
  onSelectMaterialForQuote: (materialId: MaterialItem['id']) => void;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({
  lang,
  activeMaterial,
  onClose,
  onSelectMaterialForQuote,
}) => {
  if (!activeMaterial) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="relative h-64 sm:h-72 bg-slate-900">
            <img
              src={activeMaterial.image}
              alt={lang === 'en' ? activeMaterial.nameEn : activeMaterial.nameBn}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-slate-950/75 text-white hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <p className="text-xs font-mono-tabular text-amber-400 mb-1">
                {activeMaterial.index} ·{' '}
                {lang === 'en' ? activeMaterial.categoryLabelEn : activeMaterial.categoryLabelBn}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold">
                {lang === 'en' ? activeMaterial.nameEn : activeMaterial.nameBn}
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {lang === 'en' ? activeMaterial.descriptionEn : activeMaterial.descriptionBn}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500 mb-3">
                {lang === 'en'
                  ? 'Technical & Engineering Specifications'
                  : 'টেকনিক্যাল ও ইঞ্জিনিয়ারিং স্পেসিফিকেশন'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeMaterial.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-stone-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <span className="text-xs text-slate-500">
                      {lang === 'en' ? spec.labelEn : spec.labelBn}
                    </span>
                    <span className="text-sm font-semibold font-mono-tabular text-slate-900 mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500 mb-3">
                {lang === 'en'
                  ? 'Real Estate & Government Sector Applications'
                  : 'রিয়েল এস্টেট ও সরকারি প্রজেক্টে ব্যবহার'}
              </h4>
              <ul className="space-y-2">
                {(lang === 'en'
                  ? activeMaterial.applicationsEn
                  : activeMaterial.applicationsBn
                ).map((app, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-mono-tabular">
                {lang === 'en' ? 'Minimum Bulk Order:' : 'সর্বনিম্ন পাইকারি অর্ডার:'}{' '}
                <strong className="text-slate-900">
                  {lang === 'en' ? activeMaterial.minOrderEn : activeMaterial.minOrderBn}
                </strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectMaterialForQuote(activeMaterial.id);
                    onClose();
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-amber-400 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>
                    {lang === 'en'
                      ? 'Request Bulk Rate for This Item'
                      : 'এই পণ্যের পাইকারি দর চান'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
