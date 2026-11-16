import React, { useState } from 'react';
import { Calculator, ArrowRight, RotateCcw } from 'lucide-react';

export interface EstimatedBoQ {
  projectType: string;
  areaSqFt: number;
  floors: number;
  rodTons: number;
  cementBags: number;
  bricksCount: number;
  sandCft: number;
}

interface MaterialEstimatorProps {
  lang: 'en' | 'bn';
  onApplyEstimate: (estimate: EstimatedBoQ) => void;
}

const PROJECT_PRESETS = [
  {
    id: 'real-estate',
    labelEn: 'Real Estate Residential / Commercial Tower',
    labelBn: 'রিয়েল এস্টেট আবাসিক / বাণিজ্যিক বহুতল ভবন',
    rodPerSqFtKg: 4.2,
    cementPerSqFtBags: 0.45,
    bricksPerSqFt: 11.5,
    sandPerSqFtCft: 1.85,
  },
  {
    id: 'govt-building',
    labelEn: 'Government Institutional / School Building (PWD/LGED)',
    labelBn: 'সরকারি প্রাতিষ্ঠানিক ও স্কুল ভবন (PWD / LGED)',
    rodPerSqFtKg: 4.6,
    cementPerSqFtBags: 0.48,
    bricksPerSqFt: 12.0,
    sandPerSqFtCft: 2.0,
  },
  {
    id: 'govt-road-culvert',
    labelEn: 'Government Road Soling, Drain & Box Culvert Works',
    labelBn: 'সরকারি রাস্তা সলিং, ড্রেন ও বক্স কালভার্ট প্রজেক্ট',
    rodPerSqFtKg: 3.1,
    cementPerSqFtBags: 0.38,
    bricksPerSqFt: 16.0,
    sandPerSqFtCft: 2.4,
  },
];

export const MaterialEstimator: React.FC<MaterialEstimatorProps> = ({ lang, onApplyEstimate }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('real-estate');
  const [floorArea, setFloorArea] = useState<number>(3500);
  const [floors, setFloors] = useState<number>(6);

  const activePreset =
    PROJECT_PRESETS.find((p) => p.id === selectedPresetId) || PROJECT_PRESETS[0];

  const totalBuiltUpArea = Math.max(500, floorArea) * Math.max(1, floors);
  const rodTons = Number(((totalBuiltUpArea * activePreset.rodPerSqFtKg) / 1000).toFixed(1));
  const cementBags = Math.round(totalBuiltUpArea * activePreset.cementPerSqFtBags);
  const bricksCount = Math.round((totalBuiltUpArea * activePreset.bricksPerSqFt) / 100) * 100;
  const sandCft = Math.round((totalBuiltUpArea * activePreset.sandPerSqFtCft) / 50) * 50;

  const handleReset = () => {
    setSelectedPresetId('real-estate');
    setFloorArea(3500);
    setFloors(6);
  };

  const handleLoadToQuote = () => {
    onApplyEstimate({
      projectType: lang === 'en' ? activePreset.labelEn : activePreset.labelBn,
      areaSqFt: totalBuiltUpArea,
      floors,
      rodTons,
      cementBags,
      bricksCount,
      sandCft,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-slate-950 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-amber-400 mb-2">
              {lang === 'en'
                ? 'ENGINEERING BOQ ESTIMATOR · BULK PROCUREMENT PLANNING'
                : 'ইঞ্জিনিয়ারিং বিওকিউ (BoQ) ক্যালকুলেটর · পাইকারি মালামাল হিসাব'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {lang === 'en'
                ? 'Calculate Project Material Requirements'
                : 'আপনার প্রজেক্টের রড, সিমেন্ট, ইট ও বালুর পরিমাণ হিসাব করুন'}
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-xl">
            {lang === 'en'
              ? 'Estimate standard structural quantities for Real Estate towers or Government civil tenders based on BNBC/PWD engineering Thumb Rules, then transfer directly to your bulk quotation request.'
              : 'রিয়েল এস্টেট বহুতল ভবন কিংবা সরকারি টেন্ডার প্রজেক্টের আয়তন অনুযায়ী রড, সিমেন্ট, ইট ও বালুর আনুমানিক হিসাব বের করে এক ক্লিকেই কোটেশন ফর্মে যুক্ত করুন।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Configuration Panel */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'en' ? 'Project Parameters' : 'প্রজেক্টের বিবরণ দিন'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {lang === 'en' ? 'Reset Defaults' : 'রিসেট করুন'}
                </button>
              </div>

              {/* Project Category Segmented Selector */}
              <div className="mb-6">
                <label className="block text-xs font-medium text-slate-300 mb-2.5">
                  {lang === 'en'
                    ? '01. Select Construction Sector & Structure Type'
                    : '০১. প্রজেক্টের ধরন নির্বাচন করুন'}
                </label>
                <div className="space-y-2.5">
                  {PROJECT_PRESETS.map((preset) => {
                    const isSelected = preset.id === selectedPresetId;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedPresetId(preset.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-400/10 border-amber-400 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="truncate pr-2">
                          {lang === 'en' ? preset.labelEn : preset.labelBn}
                        </span>
                        <span
                          className={`text-xs font-mono-tabular shrink-0 ${
                            isSelected ? 'text-amber-400 font-semibold' : 'text-slate-500'
                          }`}
                        >
                          {preset.rodPerSqFtKg} kg/sft
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sliders for Floor Area and Stories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <label htmlFor="floor-area-input" className="font-medium text-slate-300">
                      {lang === 'en' ? '02. Per-Floor Area (Sq. Ft.)' : '০২. প্রতি তলার আয়তন (বর্গফুট)'}
                    </label>
                    <span className="font-mono-tabular font-semibold text-amber-400">
                      {floorArea.toLocaleString()} sft
                    </span>
                  </div>
                  <input
                    id="floor-area-input"
                    type="range"
                    min={1000}
                    max={25000}
                    step={250}
                    value={floorArea}
                    onChange={(e) => setFloorArea(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-mono-tabular mt-1">
                    <span>1,000 sft</span>
                    <span>12,500 sft</span>
                    <span>25,000 sft</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <label htmlFor="floors-input" className="font-medium text-slate-300">
                      {lang === 'en' ? '03. Number of Floors / Phases' : '০৩. তলা / ধাপের সংখ্যা'}
                    </label>
                    <span className="font-mono-tabular font-semibold text-amber-400">
                      {floors} {lang === 'en' ? (floors === 1 ? 'Floor' : 'Floors') : 'তলা'}
                    </span>
                  </div>
                  <input
                    id="floors-input"
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-mono-tabular mt-1">
                    <span>1</span>
                    <span>10</span>
                    <span>20</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>
                {lang === 'en' ? 'Total Built-up Area:' : 'মোট নির্মাণ আয়তন:'}
              </span>
              <span className="text-base font-bold font-mono-tabular text-white">
                {totalBuiltUpArea.toLocaleString()} Sq. Ft.
              </span>
            </div>
          </div>

          {/* Right Output Schedule Panel */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'en'
                      ? 'Estimated Bulk Supply Schedule'
                      : 'প্রয়োজনীয় নির্মাণ সামগ্রীর আনুমানিক তালিকা'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {lang === 'en'
                      ? 'Calculated for KHAN ENTERPRIZE 4 primary material lines'
                      : 'খান এন্টারপ্রাইজের ৪টি প্রধান নির্মাণ সামগ্রীর হিসাব'}
                  </p>
                </div>
                <span className="font-mono-tabular text-xs text-amber-400">
                  {totalBuiltUpArea.toLocaleString()} SFT
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? '01. TMT 500W Steel Rod' : '০১. টিএমটি ৫০০ ডব্লিউ রড'}
                  </p>
                  <p className="text-2xl font-extrabold font-mono-tabular text-amber-400 mt-1">
                    {rodTons.toLocaleString()} <span className="text-sm font-normal text-slate-300">MT</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'en' ? '8mm to 32mm Deformed Bars' : '৮ মিমি – ৩২ মিমি ডিফর্মড রড'}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? '02. OPC / PCC Cement' : '০২. ওপিসি / পিসিসি সিমেন্ট'}
                  </p>
                  <p className="text-2xl font-extrabold font-mono-tabular text-white mt-1">
                    {cementBags.toLocaleString()}{' '}
                    <span className="text-sm font-normal text-slate-300">Bags</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'en' ? '50kg Fresh Factory Batch' : '৫০ কেজি ফ্যাক্টরি ফ্রেশ বস্তা'}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? '03. 1st Class Red Bricks' : '০৩. ১ নং উন্নত মানের ইট'}
                  </p>
                  <p className="text-2xl font-extrabold font-mono-tabular text-white mt-1">
                    {bricksCount.toLocaleString()}{' '}
                    <span className="text-sm font-normal text-slate-300">Pcs</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'en' ? 'Solid Masonry & Khoa Grade' : 'গাঁথুনি ও খোয়ার ১ নং ইট'}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? '04. Sylhet & Plaster Sand' : '০৪. সিলেট ও প্লাস্টার বালু'}
                  </p>
                  <p className="text-2xl font-extrabold font-mono-tabular text-amber-400 mt-1">
                    {sandCft.toLocaleString()}{' '}
                    <span className="text-sm font-normal text-slate-300">CFT</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'en' ? 'FM 2.5+ Coarse & FM 1.5 Fine' : 'সিলেট মোটা ও চিকন নদী বালু'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                {lang === 'en'
                  ? 'Direct rate quotation by Managing Director Tanbir Ahmed Khan.'
                  : 'ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খানের সরাসরি তত্ত্বাবধানে পাইকারি দর।'}
              </p>
              <button
                type="button"
                onClick={handleLoadToQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>
                  {lang === 'en' ? 'Load Estimate into Quote Request' : 'এই হিসাবটি কোটেশন ফর্মে যুক্ত করুন'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
