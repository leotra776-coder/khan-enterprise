import React, { useState } from 'react';
import {
  Building2,
  Landmark,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  Eye,
  Send,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import {
  COMPANY_INFO,
  MATERIALS_DATA,
  SUPPLY_RECORD_DATA,
  MaterialItem,
} from './data/companyData';
import { BrandLogo } from './components/BrandLogo';
import { MaterialEstimator, EstimatedBoQ } from './components/MaterialEstimator';
import { InspectionModal } from './components/InspectionModal';
import { ProjectAlbum } from './components/ProjectAlbum';

export default function App() {
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [materialFilter, setMaterialFilter] = useState<'all' | MaterialItem['id']>('all');
  const [ledgerFilter, setLedgerFilter] = useState<'all' | 'real-estate' | 'government'>('all');

  // Modal state for material specifications
  const [activeMaterialModal, setActiveMaterialModal] = useState<MaterialItem | null>(null);

  // Quote Requisition Form State
  const [clientName, setClientName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sectorType, setSectorType] = useState('Real Estate Development Project');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState<MaterialItem['id'][]>([
    'rod',
    'cement',
    'brick',
    'sand',
  ]);
  const [quantityNotes, setQuantityNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedQuote, setSubmittedQuote] = useState<{
    referenceId: string;
    summaryText: string;
    whatsappUrl: string;
    mailtoUrl: string;
  } | null>(null);

  const filteredMaterials =
    materialFilter === 'all'
      ? MATERIALS_DATA
      : MATERIALS_DATA.filter((item) => item.id === materialFilter);

  const filteredLedger =
    ledgerFilter === 'all'
      ? SUPPLY_RECORD_DATA
      : SUPPLY_RECORD_DATA.filter((row) =>
          ledgerFilter === 'real-estate'
            ? row.sectorEn.toLowerCase().includes('real estate')
            : row.sectorEn.toLowerCase().includes('government')
        );

  const toggleMaterialSelection = (id: MaterialItem['id']) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectMaterialForQuote = (id: MaterialItem['id']) => {
    if (!selectedMaterials.includes(id)) {
      setSelectedMaterials((prev) => [...prev, id]);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyBoQEstimate = (estimate: EstimatedBoQ) => {
    setSelectedMaterials(['rod', 'cement', 'brick', 'sand']);
    const scheduleLine =
      lang === 'en'
        ? `Estimated BoQ (${estimate.projectType} - ${estimate.areaSqFt.toLocaleString()} Sq.Ft., ${estimate.floors} Floors):\n• TMT 500W Steel Rod: ${estimate.rodTons} Metric Tons\n• OPC/PCC Cement: ${estimate.cementBags.toLocaleString()} Bags\n• 1st Class Red Bricks: ${estimate.bricksCount.toLocaleString()} Pcs\n• Sylhet & Plaster Sand: ${estimate.sandCft.toLocaleString()} CFT`
        : `প্রাক্কলিত চাহিদা (${estimate.projectType} - ${estimate.areaSqFt.toLocaleString()} বর্গফুট, ${estimate.floors} তলা):\n• টিএমটি ৫০০ ডব্লিউ রড: ${estimate.rodTons} মেট্রিক টন\n• সিমেন্ট: ${estimate.cementBags.toLocaleString()} বস্তা\n• ১ নং ইট: ${estimate.bricksCount.toLocaleString()} পিস\n• সিলেট ও প্লাস্টার বালু: ${estimate.sandCft.toLocaleString()} সিএফটি`;
    setQuantityNotes(scheduleLine);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const trimmedPhone = phone.trim();
    if (!clientName.trim()) {
      setFormError(
        lang === 'en'
          ? 'Please enter your full name or procurement officer name.'
          : 'অনুগ্রহ করে আপনার নাম উল্লেখ করুন।'
      );
      return;
    }
    if (!trimmedPhone || trimmedPhone.length < 7) {
      setFormError(
        lang === 'en'
          ? 'Please provide a valid mobile or office contact number.'
          : 'অনুগ্রহ করে সঠিক মোবাইল নম্বর প্রদান করুন।'
      );
      return;
    }
    if (selectedMaterials.length === 0) {
      setFormError(
        lang === 'en'
          ? 'Please select at least one construction material (Rod, Cement, Brick, or Sand).'
          : 'অনুগ্রহ করে অন্তত একটি নির্মাণ সামগ্রী (রড, সিমেন্ট, ইট বা বালু) নির্বাচন করুন।'
      );
      return;
    }

    const materialLabels = selectedMaterials
      .map((id) => id.toUpperCase())
      .join(', ');
    const refId = `KE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const messageBody = [
      `KHAN ENTERPRIZE - BULK QUOTATION REQUEST (${refId})`,
      `Attention: Tanbir Ahmed Khan (Managing Director)`,
      `--------------------------------------------`,
      `Client / Officer: ${clientName.trim()}`,
      `Organization / Dept: ${organization.trim() || 'N/A'}`,
      `Sector: ${sectorType}`,
      `Phone: ${trimmedPhone}`,
      `Email: ${email.trim() || 'N/A'}`,
      `Site Location: ${deliveryLocation.trim() || 'Munshiganj / Dhaka Region'}`,
      `Materials Requested: ${materialLabels}`,
      `BoQ / Quantity Schedule:`,
      quantityNotes.trim() || 'Standard bulk rate inquiry for project site delivery.',
    ].join('\n');

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappRaw}?text=${encodeURIComponent(
      messageBody
    )}`;
    const mailtoUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(
      `Bulk Supply Requisition [${refId}] - ${organization.trim() || clientName.trim()}`
    )}&body=${encodeURIComponent(messageBody)}`;

    setSubmittedQuote({
      referenceId: refId,
      summaryText: messageBody,
      whatsappUrl,
      mailtoUrl,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a href="#top" className="whitespace-nowrap shrink-0 focus:outline-none">
            <BrandLogo size="md" darkText={true} textClassName="text-[32px]" />
          </a>

          {/* Zone 2: 5 Single-line Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#materials"
              className="hover:text-slate-950 hover:underline underline-offset-8 decoration-amber-500 decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Materials' : 'নির্মাণ সামগ্রী'}
            </a>
            <a
              href="#sectors"
              className="hover:text-slate-950 hover:underline underline-offset-8 decoration-amber-500 decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Sectors' : 'সরবরাহ খাত'}
            </a>
            <a
              href="#project-album"
              className="hover:text-slate-950 hover:underline underline-offset-8 decoration-amber-500 decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Project Album' : 'চলমান প্রজেক্ট'}
            </a>
            <a
              href="#estimator"
              className="hover:text-slate-950 hover:underline underline-offset-8 decoration-amber-500 decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Calculator' : 'ক্যালকুলেটর'}
            </a>
            <a
              href="#contact"
              className="hover:text-slate-950 hover:underline underline-offset-8 decoration-amber-500 decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Contact' : 'যোগাযোগ'}
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center shrink-0">
            <a
              href="#contact"
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Request Bulk Quote' : 'পাইকারি কোটেশন নিন'}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="top" className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Workspace Utility Bar: Unboxed Regional Trust Metadata + Language Switch */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/90">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-300 font-mono-tabular">
                <span className="text-amber-400 font-semibold">
                  {lang === 'en' ? COMPANY_INFO.taglineEn : COMPANY_INFO.taglineBn}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {lang === 'en'
                    ? 'Syedpur Bazar, Sirajdikhan, Munshiganj'
                    : 'সৈয়দপুর বাজার, সিরাজদিখান, মুন্সীগঞ্জ'}
                </span>
                <span aria-hidden="true">·</span>
                <span>Trade Licence: {COMPANY_INFO.managingDirector.tradeLicence}</span>
                <span aria-hidden="true">·</span>
                <span>NBR TIN: {COMPANY_INFO.managingDirector.tin}</span>
              </div>

              {/* Interactive Language Segmented Control */}
              <div className="inline-flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    lang === 'en'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('bn')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    lang === 'bn'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  বাংলা
                </button>
              </div>
            </div>

            {/* 2-Column Hero Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Value Proposition */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
                    {lang === 'en'
                      ? 'CONSTRUCTION MATERIALS SUPPLIERS · REAL ESTATE & GOVT. TENDERS'
                      : 'নির্মাণ সামগ্রী সরবরাহকারী · রিয়েল এস্টেট ও সরকারি প্রজেক্ট'}
                  </p>
                  <h1
                    className="font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6"
                    style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
                  >
                    {lang === 'en' ? (
                      <>
                        Bulk Supply of{' '}
                        <span className="text-amber-400">Rod, Cement, Brick &amp; Sand</span> for
                        Major Infrastructure.
                      </>
                    ) : (
                      <>
                        রিয়েল এস্টেট ও সরকারি প্রজেক্টে{' '}
                        <span className="text-amber-400">রড, সিমেন্ট, ইট ও বালু</span> পাইকারি
                        সরবরাহকারী।
                      </>
                    )}
                  </h1>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                    {lang === 'en'
                      ? 'Under the leadership of Managing Director Tanbir Ahmed Khan, KHAN ENTERPRIZE delivers tested 500W deformed steel rods, fresh factory cement, first-class kiln bricks, and graded Sylhet sand directly to Real Estate developers and Government sector projects.'
                      : 'ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খানের প্রত্যক্ষ তত্ত্বাবধানে খান এন্টারপ্রাইজ (KHAN ENTERPRIZE) রিয়েল এস্টেট ডেভেলপার এবং সরকারি অবকাঠামো (LGED, PWD, ইউনিয়ন ও উপজেলা পরিষদ) প্রজেক্টে সর্বোচ্চ মানের রড, সিমেন্ট, ১ নং ইট এবং সিলেট বালু সরাসরি সাইটে সরবরাহ করে।'}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>
                        {lang === 'en'
                          ? 'Request Tender / Bulk Quote'
                          : 'পাইকারি দর ও কোটেশন চান'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#estimator"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
                    >
                      <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                      <span>
                        {lang === 'en' ? 'Estimate Project BoQ' : 'প্রজেক্ট মালামাল ক্যালকুলেটর'}
                      </span>
                    </a>
                  </div>

                  {/* Managing Director & Direct Hotline Callout */}
                  <div className="pt-6 border-t border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
                    <div>
                      <span className="text-slate-400 block">
                        {lang === 'en' ? 'Executive Leadership' : 'পরিচালনায়'}
                      </span>
                      <strong className="text-sm text-white font-semibold">
                        {lang === 'en'
                          ? 'Tanbir Ahmed Khan · Managing Director'
                          : 'তানবীর আহমেদ খান · ম্যানেজিং ডিরেক্টর'}
                      </strong>
                    </div>
                    <div className="font-mono-tabular">
                      <span className="text-slate-400 block">
                        {lang === 'en' ? 'Direct Procurement Desk' : 'সরাসরি কথা বলুন'}
                      </span>
                      <a
                        href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                        className="text-sm font-bold text-amber-400 hover:underline"
                      >
                        {COMPANY_INFO.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact 16:9 Supply Depot & Construction Visual */}
              <div className="lg:col-span-6 flex">
                <div className="relative w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col justify-end min-h-[340px] lg:h-full">
                  <img
                    src="/src/assets/images/hero_construction_supply_1794735189312.jpg"
                    alt="KHAN ENTERPRIZE Construction Materials Depot — Rod, Cement, Brick, and Sand Supply for Real Estate and Government Projects"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Measured Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

                  <div className="relative z-10 p-6 sm:p-8">
                    <p className="text-xs font-mono-tabular text-amber-400 mb-1">
                      {lang === 'en'
                        ? 'DIRECT FLEET DISPATCH · SYEDPUR MARKET HUB'
                        : 'নিজস্ব পরিবহন ব্যবস্থাপনা · সৈয়দপুর বাজার ডিপো'}
                    </p>
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {lang === 'en'
                        ? 'Complete Structural Supply Chain Under One Roof'
                        : 'এক ছাদের নিচে ৪টি প্রধান নির্মাণ সামগ্রীর নির্ভরযোগ্য সরবরাহ'}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {lang === 'en'
                        ? '01. Deformed Steel Rod (TMT 500W) · 02. OPC & PCC Cement · 03. 1st Class Kiln Bricks · 04. Sylhet Coarse & River Sand'
                        : '০১. টিএমটি ৫০০ ডব্লিউ রড · ০২. ওপিসি ও পিসিসি সিমেন্ট · ০৩. ১ নং কয়লায় পোড়ানো ইট · ০৪. সিলেট মোটা ও নদী বালু'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Quantitative Proof & Registration Strip Below Hero Split */}
            <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                <p className="text-xs text-slate-400">
                  {lang === 'en' ? 'Authorized Core Materials' : 'অনুমোদিত সরবরাহ সামগ্রী'}
                </p>
                <p className="text-xl font-bold font-mono-tabular text-amber-400 mt-1">
                  04 Primary Lines
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en' ? 'Rod · Cement · Brick · Sand' : 'রড · সিমেন্ট · ইট · বালু'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                <p className="text-xs text-slate-400">
                  {lang === 'en' ? 'Govt. Trade Licence No.' : 'সরকারি ট্রেড লাইসেন্স নং'}
                </p>
                <p className="text-base sm:text-lg font-bold font-mono-tabular text-white mt-1 truncate">
                  {COMPANY_INFO.managingDirector.tradeLicence}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en'
                    ? 'Rajanagar Union Parishad (FY 2026–27)'
                    : 'রাজানগর ইউনিয়ন পরিষদ (২০২৬-২০২৭)'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                <p className="text-xs text-slate-400">
                  {lang === 'en' ? 'NBR Taxpayer Identification' : 'জাতীয় রাজস্ব বোর্ড টিন (TIN)'}
                </p>
                <p className="text-xl font-bold font-mono-tabular text-white mt-1">
                  TIN: {COMPANY_INFO.managingDirector.tin}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en'
                    ? 'Taxes Circle-021, Zone Narayanganj'
                    : 'কর সার্কেল-০২১, কর অঞ্চল নারায়ণগঞ্জ'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                <p className="text-xs text-slate-400">
                  {lang === 'en' ? 'Primary Supply Sectors' : 'প্রধান সরবরাহ ক্ষেত্র'}
                </p>
                <p className="text-xl font-bold text-amber-400 mt-1">
                  {lang === 'en' ? 'Real Estate & Govt.' : 'রিয়েল এস্টেট ও সরকারি খাত'}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en'
                    ? 'Munshiganj, Dhaka & Narayanganj Zones'
                    : 'মুন্সীগঞ্জ, ঢাকা ও নারায়ণগঞ্জ জোন'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Construction Materials Showcase Section (#materials) */}
        <section id="materials" className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
                  {lang === 'en'
                    ? 'CORE SUPPLY CATALOG · ROD, CEMENT, BRICK & SAND'
                    : 'প্রধান সরবরাহ তালিকা · রড, সিমেন্ট, ইট এবং বালু'}
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  {lang === 'en'
                    ? 'Construction Materials We Supply in Bulk'
                    : 'আমাদের সরবরাহকৃত প্রধান নির্মাণ সামগ্রীসমূহ'}
                </h2>
              </div>

              {/* Interactive Material Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl self-start lg:self-auto">
                <button
                  type="button"
                  onClick={() => setMaterialFilter('all')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    materialFilter === 'all'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {lang === 'en' ? 'All Materials (04)' : 'সবগুলো সামগ্রী (০৪)'}
                </button>
                <button
                  type="button"
                  onClick={() => setMaterialFilter('rod')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    materialFilter === 'rod'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {lang === 'en' ? '01. Steel Rod' : '০১. স্টিল রড'}
                </button>
                <button
                  type="button"
                  onClick={() => setMaterialFilter('cement')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    materialFilter === 'cement'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {lang === 'en' ? '02. Cement' : '০২. সিমেন্ট'}
                </button>
                <button
                  type="button"
                  onClick={() => setMaterialFilter('brick')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    materialFilter === 'brick'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {lang === 'en' ? '03. Red Brick' : '০৩. ১ নং ইট'}
                </button>
                <button
                  type="button"
                  onClick={() => setMaterialFilter('sand')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    materialFilter === 'sand'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {lang === 'en' ? '04. Sylhet Sand' : '০৪. সিলেট বালু'}
                </button>
              </div>
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredMaterials.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div>
                    {/* 4:3 High-Resolution Generated Product Image */}
                    <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                      <img
                        src={item.image}
                        alt={lang === 'en' ? item.nameEn : item.nameBn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                        <span className="font-mono-tabular text-xs font-semibold text-amber-400">
                          {item.index} ·{' '}
                          {lang === 'en' ? item.categoryLabelEn : item.categoryLabelBn}
                        </span>
                        <span className="text-xs font-mono-tabular text-slate-200">
                          {lang === 'en' ? `Min Order: ${item.minOrderEn}` : `সর্বনিম্ন: ${item.minOrderBn}`}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      {/* Unboxed Metadata Line */}
                      <div className="text-xs text-slate-500 font-mono-tabular mb-2">
                        {lang === 'en' ? item.metadataLineEn : item.metadataLineBn}
                      </div>

                      <h3 className="text-xl font-bold text-slate-950 mb-3">
                        {item.index}. {lang === 'en' ? item.nameEn : item.nameBn}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {lang === 'en' ? item.descriptionEn : item.descriptionBn}
                      </p>

                      {/* Technical Specifications Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                        {item.specifications.map((spec, idx) => (
                          <div key={idx} className="text-xs">
                            <span className="text-slate-500 block">
                              {lang === 'en' ? spec.labelEn : spec.labelBn}
                            </span>
                            <strong className="text-slate-900 font-mono-tabular">
                              {spec.value}
                            </strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 sm:px-7 py-4 bg-stone-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveMaterialModal(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Eye className="w-4 h-4 text-amber-600" />
                      <span>
                        {lang === 'en' ? 'View Full Specifications' : 'সম্পূর্ণ স্পেসিফিকেশন দেখুন'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectMaterialForQuote(item.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-amber-400 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>
                        {lang === 'en' ? 'Add to Bulk Quote' : 'কোটেশনে যুক্ত করুন'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Real Estate & Government Sector Supply Section (#sectors) */}
        <section id="sectors" className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
                {lang === 'en'
                  ? 'DEDICATED B2B & PUBLIC SECTOR PROCUREMENT'
                  : 'রিয়েল এস্টেট এবং সরকারি খাতে বিশেষায়িত সরবরাহ'}
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
                {lang === 'en'
                  ? 'Engineered Supply Chain for Real Estate & Government Sectors'
                  : 'রিয়েল এস্টেট ডেভেলপার ও সরকারি টেন্ডার প্রজেক্টে বিশ্বস্ত অংশীদার'}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Large-scale construction demands uninterrupted material flow, strict adherence to engineering specifications, and transparent tax and trade documentation. KHAN ENTERPRIZE is structured specifically around these two core pillars.'
                  : 'বৃহৎ নির্মাণ প্রজেক্টে নির্ধারিত সময়ে মানসম্মত মালামাল পৌঁছানো এবং সরকারি ভ্যাট, টিন ও ট্রেড লাইসেন্সের নির্ভুল ডকুমেন্টেশন অত্যন্ত জরুরি। খান এন্টারপ্রাইজ এই দুটি খাতেই সর্বোচ্চ পেশাদারিত্বের সাথে রড, সিমেন্ট, ইট ও বালু সরবরাহ করে আসছে।'}
              </p>
            </div>

            {/* Asymmetric Bento Grid (7 cols + 5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
              {/* Real Estate Sector Card (7 Cols) */}
              <div className="lg:col-span-7 bg-stone-50 border border-slate-200 rounded-xl p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-tabular text-slate-500">
                      {lang === 'en'
                        ? 'SECTOR 01 · HIGH-RISE & HOUSING DEVELOPERS'
                        : 'খাত ০১ · বহুতল আবাসিক ও বাণিজ্যিক ভবন'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                    {lang === 'en'
                      ? '01. Real Estate Developers & Commercial High-Rises'
                      : '০১. রিয়েল এস্টেট কোম্পানি ও আবাসিক/বাণিজ্যিক প্রজেক্ট'}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {lang === 'en'
                      ? 'We partner with real estate developers, apartment builders, and commercial housing societies to deliver phased floor-by-floor casting materials—eliminating on-site storage bottlenecks while locking in competitive wholesale rates.'
                      : 'বহুতল অ্যাপার্টমেন্ট, কমার্শিয়াল টাওয়ার এবং হাউজিং প্রজেক্টের প্রতিটি ছাদ ঢালাই ও ফাউন্ডেশন কাজের সিডিউল অনুযায়ী আমরা ধাপে ধাপে রড, সিমেন্ট, ইট ও সিলেট বালু সাইটে পৌঁছে দিই।'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {lang === 'en'
                          ? 'Scheduled Casting Dispatch'
                          : 'ঢালাই সিডিউল অনুযায়ী ডেলিভারি'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {lang === 'en'
                          ? 'Synchronized night and daytime truck unloading for congested urban real estate sites.'
                          : 'শহরাঞ্চলের প্রজেক্টে দিন বা রাতের সুবিধাজনক সময়ে নিজস্ব ট্রাকে মালামাল আনলোডিং।'}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {lang === 'en'
                          ? 'Mill Test & Batch Consistency'
                          : 'ল্যাব টেস্টেড ও অভিন্ন মান'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {lang === 'en'
                          ? 'Guaranteed 500W ductile rebar lots and high-FM Sylhet coarse sand for superior cube test results.'
                          : 'স্ট্রাকচারাল ইঞ্জিনিয়ারদের চাহিদা অনুযায়ী আসল সিলেট বালু এবং ৫০০ ডব্লিউ রডের নিশ্চয়তা।'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono-tabular">
                    {lang === 'en'
                      ? 'Coverage: Munshiganj · Dhaka · Keraniganj · Narayanganj'
                      : 'এলাকা: মুন্সীগঞ্জ · ঢাকা · কেরানীগঞ্জ · নারায়ণগঞ্জ'}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSectorType('Real Estate Development Project')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>
                      {lang === 'en' ? 'Inquire for Real Estate' : 'রিয়েল এস্টেট কোটেশন'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Government Sector Card (5 Cols) */}
              <div className="lg:col-span-5 bg-slate-950 text-white border border-slate-800 rounded-xl p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-tabular text-amber-400">
                      {lang === 'en'
                        ? 'SECTOR 02 · PUBLIC WORKS & TENDERS'
                        : 'খাত ০২ · সরকারি টেন্ডার ও অবকাঠামো'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {lang === 'en'
                      ? '02. Government Sector & Public Infrastructure'
                      : '০২. সরকারি সেক্টর ও অবকাঠামো উন্নয়ন প্রজেক্ট'}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {lang === 'en'
                      ? 'Trusted material supplier for enlisted government contractors executing LGED, PWD, RHD, Upazila, and Union Parishad civil works—including roads, bridges, culverts, and public institutional buildings.'
                      : 'এলজিইডি (LGED), পিডব্লিউডি (PWD), সড়ক ও জনপথ, উপজেলা এবং ইউনিয়ন পরিষদের রাস্তা, ব্রিজ, কালভার্ট ও সরকারি ভবন নির্মাণ কাজে তালিকাভুক্ত ঠিকাদারদের জন্য সম্পূর্ণ বৈধ কাগজপত্রসহ মালামাল সরবরাহ।'}
                  </p>

                  <ul className="space-y-3 pt-5 border-t border-slate-800 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        {lang === 'en'
                          ? 'Active Trade Licence (20265917481000094) & NBR TIN (252764986609) for tender billing'
                          : 'সরকারি বিলের জন্য হালনাগাদ ট্রেড লাইসেন্স ও টিন (TIN) সনদপত্র'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        {lang === 'en'
                          ? 'PWD standard 1st class bricks & HBB road soling picket bricks'
                          : 'পিডব্লিউডি (PWD) স্ট্যান্ডার্ড ১ নং ইট ও রাস্তার এইচবিবি সলিং ইট'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        {lang === 'en'
                          ? 'Notarized company pad challans & official tax invoices'
                          : 'অফিশিয়াল কোম্পানি প্যাডে চালান ও ভ্যাট/ট্যাক্স উপযোগী বিলিং'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono-tabular">
                    {lang === 'en' ? '100% Audit & Tender Ready' : 'সরকারি অডিট ও টেন্ডার উপযোগী'}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSectorType('Government Sector / Tender Project')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>
                      {lang === 'en' ? 'Request Govt. Tender Rate' : 'সরকারি প্রজেক্ট কোটেশন'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Claim-to-Proof Adjacency: Recent Bulk Supply Ledger Table */}
            <div className="bg-stone-50 border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-6 sm:px-8 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {lang === 'en'
                      ? 'Representative Sector Supply & Dispatch Ledger'
                      : 'রিয়েল এস্টেট ও সরকারি খাতে সাম্প্রতিক সরবরাহের বিবরণ'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === 'en'
                      ? 'Verified bulk deliveries of Rod, Cement, Brick, and Sand executed from Syedpur Market depot'
                      : 'সৈয়দপুর বাজার ডিপো থেকে পরিচালিত রড, সিমেন্ট, ইট ও বালুর পাইকারি ডেলিভারি রেকর্ড'}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setLedgerFilter('all')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      ledgerFilter === 'all'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {lang === 'en' ? 'All Deliveries' : 'সবগুলো'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLedgerFilter('real-estate')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      ledgerFilter === 'real-estate'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {lang === 'en' ? 'Real Estate' : 'রিয়েল এস্টেট'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLedgerFilter('government')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      ledgerFilter === 'government'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {lang === 'en' ? 'Government' : 'সরকারি খাত'}
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-stone-100/80 text-xs font-semibold text-slate-600">
                      <th className="py-3.5 px-6 whitespace-nowrap">
                        {lang === 'en' ? 'Batch Ref' : 'ব্যাচ কোড'}
                      </th>
                      <th className="py-3.5 px-6 whitespace-nowrap">
                        {lang === 'en' ? 'Sector' : 'খাত'}
                      </th>
                      <th className="py-3.5 px-6">
                        {lang === 'en' ? 'Project Description & Zone' : 'প্রজেক্ট ও এলাকা'}
                      </th>
                      <th className="py-3.5 px-6">
                        {lang === 'en' ? 'Materials Supplied (Bulk Volume)' : 'সরবরাহকৃত মালামাল'}
                      </th>
                      <th className="py-3.5 px-6 whitespace-nowrap">
                        {lang === 'en' ? 'Dispatch Status' : 'ডেলিভারি স্ট্যাটাস'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {filteredLedger.map((row) => (
                      <tr key={row.id} className="hover:bg-white transition-colors">
                        <td className="py-4 px-6 font-mono-tabular text-xs font-semibold text-slate-900 whitespace-nowrap">
                          {row.id}
                        </td>
                        <td className="py-4 px-6 text-xs font-semibold text-amber-800 whitespace-nowrap">
                          {lang === 'en' ? row.sectorEn : row.sectorBn}
                        </td>
                        <td className="py-4 px-6 font-medium text-slate-900">
                          {lang === 'en' ? row.projectEn : row.projectBn}
                        </td>
                        <td className="py-4 px-6 font-mono-tabular text-xs text-slate-700">
                          {row.materialsSupplied}
                        </td>
                        <td className="py-4 px-6 font-mono-tabular text-xs text-slate-500 whitespace-nowrap">
                          {row.timeline}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Live Ongoing Projects & Supply Album Section (#project-album) */}
        <ProjectAlbum lang={lang} />

        {/* Interactive Material BoQ Estimator Section (#estimator) */}
        <MaterialEstimator lang={lang} onApplyEstimate={handleApplyBoQEstimate} />

        {/* Managing Director Leadership & Verified Government Credentials (#credentials) */}
        <section id="credentials" className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
                {lang === 'en'
                  ? 'EXECUTIVE LEADERSHIP & NOTARIZED GOVERNMENT CREDENTIALS'
                  : 'প্রতিষ্ঠানের নেতৃত্ব এবং সরকারি লাইসেন্স ও সনদপত্র'}
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
                {lang === 'en'
                  ? 'Led by Managing Director Tanbir Ahmed Khan'
                  : 'ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খানের নেতৃত্বে পরিচালিত'}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Every bulk supply order at KHAN ENTERPRIZE is backed by verified government trade licensing, National Board of Revenue (NBR) tax compliance, and direct executive accountability.'
                  : 'খান এন্টারপ্রাইজের প্রতিটি পাইকারি অর্ডার ও টেন্ডার সরবরাহ সরকারি ট্রেড লাইসেন্স, জাতীয় রাজস্ব বোর্ডের (NBR) টিন সনদ এবং ম্যানেজিং ডিরেক্টরের প্রত্যক্ষ তদারকিতে সম্পন্ন হয়।'}
              </p>
            </div>

            {/* Leadership & Corporate Registry Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Managing Director Executive Card (5 Cols) */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-5 mb-6 pb-6 border-b border-slate-200">
                    {/* Executive Monogram Emblem */}
                    <div className="w-16 h-16 rounded-xl border border-amber-400/40 bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 font-display text-xl font-extrabold tracking-tight">
                      TAK
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        {lang === 'en'
                          ? COMPANY_INFO.managingDirector.roleEn
                          : COMPANY_INFO.managingDirector.roleBn}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-0.5">
                        {lang === 'en'
                          ? COMPANY_INFO.managingDirector.nameEn
                          : COMPANY_INFO.managingDirector.nameBn}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        KHAN ENTERPRIZE · Syedpur Bazar, Munshiganj
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-sm text-slate-700 leading-relaxed mb-6">
                    {lang === 'en'
                      ? '“Our commitment at KHAN ENTERPRIZE is straightforward: whether supplying a multi-story real estate tower or a government infrastructure project, we never compromise on weight accuracy, material grade, or delivery timelines. Your vision is built on our foundation.”'
                      : '“খান এন্টারপ্রাইজের লক্ষ্য অত্যন্ত স্পষ্ট—রিয়েল এস্টেট বহুতল ভবন হোক কিংবা সরকারি অবকাঠামো প্রজেক্ট, রড, সিমেন্ট, ইট ও বালুর গুণগত মান, সঠিক ওজন এবং নির্ধারিত সময়ের ডেলিভারিতে আমরা কখনোই আপস করি না।”'}
                  </blockquote>
                </div>

                <div className="pt-5 border-t border-slate-200 space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">
                      {lang === 'en' ? 'Designation:' : 'পদবী:'}
                    </span>
                    <strong className="text-slate-950">
                      {lang === 'en' ? 'Managing Director' : 'ম্যানেজিং ডিরেক্টর'}
                    </strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">
                      {lang === 'en' ? 'Parents:' : 'পিতা ও মাতা:'}
                    </span>
                    <strong className="text-slate-900">
                      {COMPANY_INFO.managingDirector.fatherName} &amp;{' '}
                      {COMPANY_INFO.managingDirector.motherName}
                    </strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">
                      {lang === 'en' ? 'National ID (NID):' : 'জাতীয় পরিচয়পত্র (NID):'}
                    </span>
                    <strong className="font-mono-tabular text-slate-900">
                      {COMPANY_INFO.managingDirector.nid}
                    </strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">
                      {lang === 'en' ? 'Direct Contact:' : 'সরাসরি মোবাইল:'}
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                      className="font-mono-tabular font-bold text-amber-700 hover:underline"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Corporate Registration & Compliance Table (7 Cols) */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-amber-600" />
                      <h3 className="text-lg font-bold text-slate-950">
                        {lang === 'en'
                          ? 'Official Trade, Tax & Legal Registration Particulars'
                          : 'সরকারি ট্রেড লাইসেন্স, টিন (TIN) ও কর্পোরেট নিবন্ধন তথ্য'}
                      </h3>
                    </div>
                    <span className="text-xs font-mono-tabular text-emerald-700 font-semibold">
                      {lang === 'en' ? 'Notary Attested' : 'নোটারি সত্যায়িত'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-stone-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">
                        {lang === 'en' ? 'Trade Licence Number' : 'ট্রেড লাইসেন্স নম্বর'}
                      </span>
                      <strong className="text-sm sm:text-base font-bold font-mono-tabular text-slate-950 mt-1 block">
                        {COMPANY_INFO.managingDirector.tradeLicence}
                      </strong>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {lang === 'en'
                          ? 'Rajanagar Union Parishad · Valid to 30 June 2027'
                          : 'রাজানগর ইউনিয়ন পরিষদ · মেয়াদ: ৩০ জুন ২০২৭'}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-stone-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">
                        {lang === 'en' ? 'NBR TIN Certificate' : 'জাতীয় রাজস্ব বোর্ড টিন (TIN)'}
                      </span>
                      <strong className="text-sm sm:text-base font-bold font-mono-tabular text-slate-950 mt-1 block">
                        {COMPANY_INFO.managingDirector.tin}
                      </strong>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {lang === 'en'
                          ? 'Taxes Circle-021 (Tangabari), Zone Narayanganj'
                          : 'কর সার্কেল-০২১ (টাঙ্গাবাড়ী), কর অঞ্চল নারায়ণগঞ্জ'}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-stone-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">
                        {lang === 'en' ? 'Authorized Business Type' : 'অনুমোদিত ব্যবসার ধরন'}
                      </span>
                      <strong className="text-sm font-bold text-slate-950 mt-1 block">
                        ROD, CEMENT, BRICK, SAND
                      </strong>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {lang === 'en'
                          ? 'Construction Materials Wholesale & Supply'
                          : 'নির্মাণ সামগ্রী পাইকারি ও প্রজেক্ট সরবরাহ'}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-stone-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">
                        {lang === 'en' ? 'Registered Market & Office' : 'ব্যবসায়িক কার্যালয় ও ডিপো'}
                      </span>
                      <strong className="text-sm font-bold text-slate-950 mt-1 block">
                        Syedpur Market (Syedpur Bazar)
                      </strong>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {lang === 'en'
                          ? 'Kumudpur, PO: Syedpur - 1544, Sirajdikhan, Munshiganj'
                          : 'কুমুদপুর, ডাকঘর: সৈয়দপুর - ১৫৪৪, সিরাজদিখান, মুন্সীগঞ্জ'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                  <span>
                    {lang === 'en'
                      ? 'Registered Corporate Entity · Munshiganj, Bangladesh'
                      : 'নিবন্ধিত বাণিজ্যিক প্রতিষ্ঠান · মুন্সীগঞ্জ, বাংলাদেশ'}
                  </span>
                  <span className="font-mono-tabular font-semibold text-slate-800">
                    Post Code: 1544 · Dhaka Division
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Requisition & Direct Contact Section (#contact) */}
        <section id="contact" className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column: Direct Office & Managing Director Contact Info (5 Cols) */}
              <div className="lg:col-span-5 bg-slate-950 text-white rounded-xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
                    {lang === 'en'
                      ? 'DIRECT PROCUREMENT & TENDER DESK'
                      : 'সরাসরি পাইকারি অর্ডার ও যোগাযোগ'}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                    {lang === 'en'
                      ? 'Request a Bulk Supply Quotation'
                      : 'পাইকারি দর বা টেন্ডার কোটেশনের জন্য যোগাযোগ করুন'}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    {lang === 'en'
                      ? 'Connect directly with Managing Director Tanbir Ahmed Khan for real estate project rate contracts, government tender schedules, and immediate site delivery of Rod, Cement, Brick, and Sand.'
                      : 'রিয়েল এস্টেট প্রজেক্ট বা সরকারি টেন্ডারের জন্য রড, সিমেন্ট, ইট ও বালুর পাইকারি দর জানতে সরাসরি ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খানের সাথে যোগাযোগ করুন অথবা পাশের ফর্মটি পূরণ করুন।'}
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">
                          {lang === 'en'
                            ? 'Managing Director Hotline & WhatsApp'
                            : 'ম্যানেজিং ডিরেক্টর হটলাইন ও হোয়াটসঅ্যাপ'}
                        </span>
                        <a
                          href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                          className="text-lg font-bold font-mono-tabular text-white hover:text-amber-400 transition-colors"
                        >
                          {COMPANY_INFO.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">
                          {lang === 'en' ? 'Official Email Address' : 'অফিশিয়াল ইমেইল'}
                        </span>
                        <a
                          href={`mailto:${COMPANY_INFO.contact.email}`}
                          className="text-base font-semibold text-white hover:text-amber-400 transition-colors break-all"
                        >
                          {COMPANY_INFO.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">
                          {lang === 'en'
                            ? 'Commercial Office & Supply Depot'
                            : 'ব্যবসায়িক কার্যালয় ও ডিপো'}
                        </span>
                        <p className="text-sm font-semibold text-white">
                          {lang === 'en'
                            ? COMPANY_INFO.contact.marketAddressEn
                            : COMPANY_INFO.contact.marketAddressBn}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {lang === 'en'
                            ? COMPANY_INFO.contact.permanentAddressEn
                            : COMPANY_INFO.contact.permanentAddressBn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-2.5 text-xs text-amber-400 font-semibold mb-2">
                    <Truck className="w-4 h-4" />
                    <span>
                      {lang === 'en'
                        ? 'Direct Site Delivery Across Bangladesh'
                        : 'প্রজেক্ট সাইটে সরাসরি নিজস্ব পরিবহনে ডেলিভারি'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono-tabular">
                    Trade Licence: {COMPANY_INFO.managingDirector.tradeLicence} · TIN:{' '}
                    {COMPANY_INFO.managingDirector.tin}
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Bulk Quote Requisition Form (7 Cols) */}
              <div className="lg:col-span-7 bg-stone-50 border border-slate-200 rounded-xl p-7 sm:p-9">
                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  {lang === 'en'
                    ? 'Submit Bulk Material Requisition'
                    : 'পাইকারি মালামালের চাহিদাপত্র ও কোটেশন ফর্ম'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  {lang === 'en'
                    ? 'Select the materials required for your Real Estate or Government project to generate an official requisition for Managing Director Tanbir Ahmed Khan.'
                    : 'আপনার রিয়েল এস্টেট বা সরকারি প্রজেক্টের জন্য প্রয়োজনীয় মালামাল নির্বাচন করে ফর্মটি সাবমিট করুন।'}
                </p>

                <form onSubmit={handleQuoteSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        {lang === 'en'
                          ? 'Your Name / Procurement Officer *'
                          : 'আপনার নাম / প্রজেক্ট কর্মকর্তা *'}
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder={
                          lang === 'en' ? 'e.g. Engr. Mahmudul Hasan' : 'যেমন: ইঞ্জিঃ মাহমুদুল হাসান'
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-950"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="org-name"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        {lang === 'en'
                          ? 'Real Estate Company / Govt. Dept.'
                          : 'রিয়েল এস্টেট কোম্পানি / প্রতিষ্ঠানের নাম'}
                      </label>
                      <input
                        id="org-name"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder={
                          lang === 'en'
                            ? 'e.g. Horizon Developments / LGED Contractor'
                            : 'কোম্পানি বা ঠিকাদারি প্রতিষ্ঠানের নাম'
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="client-phone"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        {lang === 'en' ? 'Mobile / WhatsApp Number *' : 'মোবাইল / হোয়াটসঅ্যাপ নম্বর *'}
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm font-mono-tabular text-slate-900 focus:outline-none focus:border-slate-950"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="client-email"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        {lang === 'en' ? 'Email Address (Optional)' : 'ইমেইল (ঐচ্ছিক)'}
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="procurement@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sector-select"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        {lang === 'en' ? 'Project Sector' : 'প্রজেক্ট খাত নির্বাচন করুন'}
                      </label>
                      <select
                        id="sector-select"
                        value={sectorType}
                        onChange={(e) => setSectorType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-950"
                      >
                        <option value="Real Estate Development Project">
                          {lang === 'en'
                            ? 'Real Estate Development Project'
                            : 'রিয়েল এস্টেট ডেভেলপমেন্ট প্রজেক্ট'}
                        </option>
                        <option value="Government Sector / Tender Project">
                          {lang === 'en'
                            ? 'Government Sector / Tender Project (LGED/PWD)'
                            : 'সরকারি টেন্ডার / অবকাঠামো প্রজেক্ট (LGED/PWD)'}
                        </option>
                        <option value="Commercial / Industrial Infrastructure">
                          {lang === 'en'
                            ? 'Commercial / Industrial Infrastructure'
                            : 'বাণিজ্যিক / শিল্প কারখানা ভবন'}
                        </option>
                        <option value="Private Residential Building">
                          {lang === 'en'
                            ? 'Private Residential Construction'
                            : 'ব্যক্তিগত বহুতল ভবন নির্মাণ'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="site-location"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        {lang === 'en' ? 'Project Site Delivery Location' : 'প্রজেক্ট সাইটের ঠিকানা'}
                      </label>
                      <input
                        id="site-location"
                        type="text"
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        placeholder={
                          lang === 'en'
                            ? 'e.g. Sirajdikhan / Munshiganj / Dhaka'
                            : 'যেমন: সিরাজদিখান / মুন্সীগঞ্জ / ঢাকা'
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-950"
                      />
                    </div>
                  </div>

                  {/* Multi-select Material Checkboxes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-2">
                      {lang === 'en'
                        ? 'Select Materials Required for Supply *'
                        : 'প্রয়োজনীয় নির্মাণ সামগ্রী নির্বাচন করুন *'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {MATERIALS_DATA.map((mat) => {
                        const checked = selectedMaterials.includes(mat.id);
                        return (
                          <button
                            key={mat.id}
                            type="button"
                            onClick={() => toggleMaterialSelection(mat.id)}
                            className={`px-3 py-2.5 rounded-lg border text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                              checked
                                ? 'bg-slate-950 border-slate-950 text-amber-400'
                                : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                            }`}
                          >
                            <span className="uppercase">{mat.id}</span>
                            <span className="font-mono-tabular text-[11px]">
                              {checked ? '✓' : '+'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quantity-notes"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      {lang === 'en'
                        ? 'Estimated Quantities / BoQ & Delivery Schedule'
                        : 'মালামালের পরিমাণ ও ডেলিভারির বিবরণ'}
                    </label>
                    <textarea
                      id="quantity-notes"
                      rows={4}
                      value={quantityNotes}
                      onChange={(e) => setQuantityNotes(e.target.value)}
                      placeholder={
                        lang === 'en'
                          ? 'Specify required quantities (e.g., 25 MT 500W Rod, 1,200 Bags Cement, 30,000 Pcs 1st Class Bricks, 3,500 CFT Sylhet Sand) and target delivery date...'
                          : 'প্রয়োজনীয় রড (টন), সিমেন্ট (বস্তা), ১ নং ইট (পিস) এবং বালুর (সিএফটি) পরিমাণ উল্লেখ করুন...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-950"
                    />
                  </div>

                  {formError && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-800">
                      {formError}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {lang === 'en'
                          ? 'Prepare Official Requisition & Rate Inquiry'
                          : 'পাইকারি কোটেশন রিকোয়েস্ট তৈরি করুন'}
                      </span>
                    </button>
                  </div>
                </form>

                {/* Instant Validated Confirmation & Direct Dispatch Links */}
                {submittedQuote && (
                  <div className="mt-6 p-5 rounded-xl bg-white border border-emerald-300">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-emerald-800">
                        {lang === 'en'
                          ? 'Requisition Ready for Managing Director Review'
                          : 'আপনার চাহিদাপত্রটি প্রস্তুত হয়েছে'}
                      </span>
                      <span className="text-xs font-mono-tabular font-semibold text-slate-600">
                        Ref: {submittedQuote.referenceId}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4">
                      {lang === 'en'
                        ? 'Send your prepared BoQ requisition directly to Managing Director Tanbir Ahmed Khan via WhatsApp or Email for immediate wholesale pricing:'
                        : 'দ্রুত পাইকারি দর পেতে নিচের বাটনে ক্লিক করে সরাসরি হোয়াটসঅ্যাপ অথবা ইমেইলে পাঠিয়ে দিন:'}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={submittedQuote.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors whitespace-nowrap shrink-0"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>
                          {lang === 'en'
                            ? 'Send via WhatsApp (+880 1910-254525)'
                            : 'হোয়াটসঅ্যাপে পাঠান (+880 1910-254525)'}
                        </span>
                      </a>
                      <a
                        href={submittedQuote.mailtoUrl}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold transition-colors whitespace-nowrap shrink-0"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>
                          {lang === 'en'
                            ? 'Send via Official Email (tanveerdip@gmail.com)'
                            : 'ইমেইলে পাঠান (tanveerdip@gmail.com)'}
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Corporate Footer */}
      <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
            <div className="md:col-span-5">
              <BrandLogo size="md" darkText={false} />
              <p className="text-xs font-semibold tracking-wider uppercase text-amber-400 mt-3">
                {COMPANY_INFO.taglineEn} · CONSTRUCTION MATERIALS SUPPLIERS
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mt-3 max-w-sm">
                {lang === 'en'
                  ? 'Premier wholesale supplier of Rod, Cement, Brick, and Sand for Real Estate developers and Government infrastructure projects. Led by Managing Director Tanbir Ahmed Khan.'
                  : 'রিয়েল এস্টেট ডেভেলপার এবং সরকারি অবকাঠামো প্রজেক্টে রড, সিমেন্ট, ইট ও বালু পাইকারি সরবরাহকারী। পরিচালনায়: তানবীর আহমেদ খান (ম্যানেজিং ডিরেক্টর)।'}
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                {lang === 'en' ? 'Supply Lines' : 'সরবরাহকৃত সামগ্রী'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#materials" className="hover:text-amber-400 transition-colors">
                    01. Deformed Steel Rod (TMT 500W)
                  </a>
                </li>
                <li>
                  <a href="#materials" className="hover:text-amber-400 transition-colors">
                    02. Industrial OPC &amp; PCC Cement
                  </a>
                </li>
                <li>
                  <a href="#materials" className="hover:text-amber-400 transition-colors">
                    03. First-Class Kiln Red Bricks
                  </a>
                </li>
                <li>
                  <a href="#materials" className="hover:text-amber-400 transition-colors">
                    04. Graded Sylhet &amp; River Sand
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 font-mono-tabular text-xs space-y-2">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white mb-3">
                {lang === 'en' ? 'Registered Corporate Office' : 'নিবন্ধিত কার্যালয়'}
              </h4>
              <p className="text-white font-sans font-semibold">
                Tanbir Ahmed Khan — Managing Director
              </p>
              <p>Syedpur Market, Syedpur Bazar, Sirajdikhan, Munshiganj - 1544</p>
              <p>Trade Licence: {COMPANY_INFO.managingDirector.tradeLicence}</p>
              <p>NBR TIN: {COMPANY_INFO.managingDirector.tin}</p>
              <p>
                Phone:{' '}
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="text-amber-400 hover:underline"
                >
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>{' '}
                · {COMPANY_INFO.contact.email}
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} KHAN ENTERPRIZE. All rights reserved.
            </p>
            <p className="font-mono-tabular">
              Syedpur Bazar, Sirajdikhan, Munshiganj · Real Estate &amp; Government Suppliers
            </p>
          </div>
        </div>
      </footer>

      {/* Modal for Material Specifications */}
      <InspectionModal
        lang={lang}
        activeMaterial={activeMaterialModal}
        onClose={() => setActiveMaterialModal(null)}
        onSelectMaterialForQuote={handleSelectMaterialForQuote}
      />
    </div>
  );
}
