export interface MaterialItem {
  id: 'rod' | 'cement' | 'brick' | 'sand';
  index: string;
  nameEn: string;
  nameBn: string;
  categoryLabelEn: string;
  categoryLabelBn: string;
  image: string;
  unitEn: string;
  unitBn: string;
  minOrderEn: string;
  minOrderBn: string;
  metadataLineEn: string;
  metadataLineBn: string;
  descriptionEn: string;
  descriptionBn: string;
  specifications: {
    labelEn: string;
    labelBn: string;
    value: string;
  }[];
  applicationsEn: string[];
  applicationsBn: string[];
  sectors: ('real-estate' | 'government')[];
}

export interface CredentialDoc {
  id: string;
  titleEn: string;
  titleBn: string;
  authorityEn: string;
  authorityBn: string;
  referenceNo: string;
  issueDate: string;
  validity: string;
  imageUrl: string;
  summaryEn: string;
  summaryBn: string;
}

export const COMPANY_INFO = {
  name: 'KHAN ENTERPRIZE',
  taglineEn: 'Your Vision - Our Foundation',
  taglineBn: 'আপনার স্বপ্ন - আমাদের ভিত্তি',
  descriptorEn: 'Construction Materials Suppliers · Real Estate & Government Sector',
  descriptorBn: 'নির্মাণ সামগ্রী সরবরাহকারী · রিয়েল এস্টেট ও সরকারি প্রজেক্ট',
  managingDirector: {
    nameEn: 'Tanbir Ahmed Khan',
    nameBn: 'তানবীর আহমেদ খান',
    roleEn: 'Managing Director',
    roleBn: 'ম্যানেজিং ডিরেক্টর (ব্যবস্থাপনা পরিচালক)',
    fatherName: 'Md Hanif Khan',
    motherName: 'Syma Khanam',
    nid: '1505380764',
    tin: '252764986609',
    tradeLicence: '20265917481000094',
  },
  contact: {
    phoneDisplay: '+880 1910-254 525',
    phoneRaw: '+8801910254525',
    whatsappRaw: '8801910254525',
    email: 'tanveerdip@gmail.com',
    marketAddressEn: 'Syedpur Market, Syedpur Bazar, Sirajdikhan, Munshiganj - 1544',
    marketAddressBn: 'সৈয়দপুর মার্কেট, সৈয়দপুর বাজার, সিরাজদিখান, মুন্সীগঞ্জ - ১৫৪৪',
    permanentAddressEn: 'Khan Bari, Kumudpur, PO: Syedpur - 1544, Sirajdikhan, Munshiganj, Dhaka, Bangladesh',
    permanentAddressBn: 'খান বাড়ি, কুমুদপুর, ডাকঘর: সৈয়দপুর - ১৫৪৪, সিরাজদিখান, মুন্সীগঞ্জ',
    taxJurisdiction: 'Taxes Circle-021 (Tangabari), Taxes Zone Narayanganj',
    unionParishad: 'Rajanagar Union Parishad, Sirajdikhan, Munshiganj',
    notaryAttestation: 'Attested by Mohammed Younus, Advocate & Notary Public, Govt. of Bangladesh',
  },
};

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: 'rod',
    index: '01',
    nameEn: 'Deformed Steel Reinforcement Rod (TMT 500W)',
    nameBn: 'উচ্চ ক্ষমতাসম্পন্ন টিএমটি স্টিল রড (TMT 500W)',
    categoryLabelEn: 'Structural Steel',
    categoryLabelBn: 'স্ট্রাকচারাল স্টিল রড',
    image: '/src/assets/images/material_tmt_steel_rods_1794735189752.jpg',
    unitEn: 'Metric Ton (MT)',
    unitBn: 'মেট্রিক টন (MT)',
    minOrderEn: '5 Metric Tons',
    minOrderBn: '৫ মেট্রিক টন',
    metadataLineEn: 'Grade 500W / B500DWR · Sizes: 8mm–32mm · BSTI & BUET Tested',
    metadataLineBn: 'গ্রেড 500W / B500DWR · সাইজ: ৮ মিমি–৩২ মিমি · বিএসটিআই অনুমোদিত',
    descriptionEn:
      'High-tensile thermo-mechanically treated (TMT) deformed steel bars engineered for earthquake-resistant high-rise real estate towers, heavy foundations, bridges, and government culvert structures.',
    descriptionBn:
      'ভূমিকম্প-সহনীয় বহুতল রিয়েল এস্টেট ভবন, গভীর ফাউন্ডেশন, ব্রিজ এবং সরকারি কালভার্ট নির্মাণের জন্য সর্বোচ্চ মানের টিএমটি ৫০০ ডব্লিউ (TMT 500W) ডিফর্মড স্টিল রড পাইকারি সরবরাহ করা হয়।',
    specifications: [
      { labelEn: 'Yield Strength', labelBn: 'ইল্ড স্ট্রেংথ', value: '≥ 500 MPa (500W / 60G)' },
      { labelEn: 'Available Diameters', labelBn: 'উপলব্ধ সাইজ', value: '8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm' },
      { labelEn: 'Elongation Ratio', labelBn: 'নমনীয়তা হার', value: '≥ 14% (Seismic Ductile Grade)' },
      { labelEn: 'Standard Length', labelBn: 'স্ট্যান্ডার্ড দৈর্ঘ্য', value: '12 Meters (39.37 Feet) Bundle' },
    ],
    applicationsEn: [
      'High-rise residential & commercial RCC columns and shear walls',
      'LGED & RHD bridge girders, box culverts, and retaining walls',
      'Deep mat foundations and cast-in-situ bored piling cages',
    ],
    applicationsBn: [
      'বহুতল আবাসিক ও বাণিজ্যিক ভবনের আরসিসি কলাম এবং শিয়ার ওয়াল',
      'সরকারি ব্রিজ গার্ডার, বক্স কালভার্ট ও রিটেইনিং ওয়াল',
      'গভীর ম্যাট ফাউন্ডেশন এবং পাইলিং খাঁচা নির্মাণ',
    ],
    sectors: ['real-estate', 'government'],
  },
  {
    id: 'cement',
    index: '02',
    nameEn: 'Industrial Portland & Composite Cement (OPC & PCC)',
    nameBn: 'ইন্ডাস্ট্রিয়াল পোর্টল্যান্ড ও কম্পোজিট সিমেন্ট (OPC & PCC)',
    categoryLabelEn: 'Binding Materials',
    categoryLabelBn: 'সিমেন্ট সরবরাহ',
    image: '/src/assets/images/material_portland_cement_1794735191288.jpg',
    unitEn: '50kg Bag',
    unitBn: '৫০ কেজি বস্তা',
    minOrderEn: '100 Bags',
    minOrderBn: '১০০ বস্তা',
    metadataLineEn: 'CEM I 52.5N (OPC) · CEM II/B-M (PCC) · Fresh Factory Batch',
    metadataLineBn: 'CEM I 52.5N (OPC) · CEM II/B-M (PCC) · সরাসরি ফ্যাক্টরি ব্যাচ',
    descriptionEn:
      'Direct factory-fresh dispatch of Ordinary Portland Cement (OPC) for rapid-strength heavy infrastructure and Portland Composite Cement (PCC) for durable real estate slabs, beams, and masonry work.',
    descriptionBn:
      'ভারী সরকারি অবকাঠামো ও পাইলিংয়ের জন্য অর্ডিনারি পোর্টল্যান্ড সিমেন্ট (OPC) এবং রিয়েল এস্টেট ভবনের ছাদ, বিম ও প্লাস্টারের জন্য দীর্ঘস্থায়ী পোর্টল্যান্ড কম্পোজিট সিমেন্ট (PCC) সরাসরি ফ্যাক্টরি থেকে সাইটে সরবরাহ।',
    specifications: [
      { labelEn: 'OPC Specification', labelBn: 'ওপিসি মানদণ্ড', value: 'BDS EN 197-1 : CEM I 42.5N / 52.5N' },
      { labelEn: 'PCC Specification', labelBn: 'পিসিসি মানদণ্ড', value: 'BDS EN 197-1 : CEM II/B-M (S-V-L) 42.5N' },
      { labelEn: 'Packaging Format', labelBn: 'প্যাকেজিং', value: '50kg Laminated Moisture-Resistant PP Bag' },
      { labelEn: '28-Day Compressive Strength', labelBn: '২৮ দিনে কম্প্রেসিভ শক্তি', value: '42.5 MPa – 52.5 MPa' },
    ],
    applicationsEn: [
      'Pre-stressed concrete girders, piling, and heavy infrastructure footings',
      'Multi-story real estate floor slabs, beams, and column casting',
      'Sulfate-resistant underground basements and water-retaining structures',
    ],
    applicationsBn: [
      'প্রি-স্ট্রেসড কংক্রিট গার্ডার, পাইলিং এবং ভারী ফুটিং ঢালাই',
      'বহুতল ভবনের ছাদ ঢালাই, বিম ও কলাম কাস্টিং',
      'ভূগর্ভস্থ বেজমেন্ট এবং পানির ট্যাংক ও রিটেইনিং স্ট্রাকচার',
    ],
    sectors: ['real-estate', 'government'],
  },
  {
    id: 'brick',
    index: '03',
    nameEn: 'First-Class Kiln Red Clay Bricks & Pickets (Khoa)',
    nameBn: '১ নং উন্নত মানের লাল ইট ও পিকেট (খোয়া)',
    categoryLabelEn: 'Masonry & Aggregates',
    categoryLabelBn: 'ইট ও খোয়া',
    image: '/src/assets/images/material_red_clay_bricks_1794735192689.jpg',
    unitEn: '1,000 Pieces',
    unitBn: 'প্রতি ১,০০০ পিস',
    minOrderEn: '5,000 Pieces',
    minOrderBn: '৫,০০০ পিস',
    metadataLineEn: '1st Class Kiln Fired · Uniform Dimensions · Water Absorption < 12%',
    metadataLineBn: '১ নং কয়লায় পোড়ানো ইট · নিখুঁত মাপ · পানি শোষণ ক্ষমতা < ১২%',
    descriptionEn:
      'Thoroughly vitrified first-class red clay bricks, machine-molded Ceramic/10-hole engineering bricks, and well-burnt picket bricks for crushed aggregate (Khoa) with clear metallic ring and high crushing strength.',
    descriptionBn:
      'উন্নত মানের মাটি ও কয়লায় পোড়ানো ১ নং লাল ইট, অটো-মেশিনে তৈরি ১০-হোল ইঞ্জিনিয়ারিং ইট এবং রাস্তার সলিং ও খোয়ার জন্য ঝামা/পিকেট ইট—যার প্রতিটি ইটে রয়েছে নিখুঁত কোণা ও উচ্চ চাপ সহনশীলতা।',
    specifications: [
      { labelEn: 'Grade Options', labelBn: 'ইটের ধরন', value: '1st Class Solid, Pickets (Jhama), 10-Hole Auto Brick' },
      { labelEn: 'Standard Size (PWD)', labelBn: 'পিডব্লিউডি স্ট্যান্ডার্ড মাপ', value: '9.5" × 4.5" × 2.75" (240 × 115 × 70 mm)' },
      { labelEn: 'Crushing Strength', labelBn: 'চাপ সহনশীলতা', value: '≥ 3,000 PSI (20.5 MPa)' },
      { labelEn: 'Efflorescence Rating', labelBn: 'লবণাক্ততা হার', value: 'Nil to Slight (Tested Batch)' },
    ],
    applicationsEn: [
      'Real estate apartment partition walls and architectural exterior facades',
      'Government road sub-base Herringbone Bond (HBB) brick soling',
      'Graded 20mm crushed brick chips (Khoa) for structural & floor concrete',
    ],
    applicationsBn: [
      'রিয়েল এস্টেট অ্যাপার্টমেন্টের পার্টিশন ওয়াল ও বাহ্যিক গাঁথুনি',
      'সরকারি সড়ক ও ইউনিয়ন পরিষদের রাস্তায় এইচবিবি (HBB) সলিং',
      'ঢালাই কাজের জন্য ২০ মিমি গ্রেডেড ভাঙা ইটের খোয়া',
    ],
    sectors: ['real-estate', 'government'],
  },
  {
    id: 'sand',
    index: '04',
    nameEn: 'Graded Sylhet Coarse Sand & Washed River Sand',
    nameBn: 'সিলেট মোটা বালু (লাল বালু) ও প্লাস্টার নদী বালু',
    categoryLabelEn: 'Natural Aggregates',
    categoryLabelBn: 'সিলেট ও ভিটি বালু',
    image: '/src/assets/images/material_sylhet_sand_1794735192963.jpg',
    unitEn: 'Cubic Feet (CFT)',
    unitBn: 'ঘনফুট (CFT)',
    minOrderEn: '500 CFT (1 Truck)',
    minOrderBn: '৫০০ সিএফটি (১ ট্রাক)',
    metadataLineEn: 'Sylhet Sand (FM 2.5–2.9) · Plaster Sand (FM 1.3–1.6) · Silt Free',
    metadataLineBn: 'সিলেট বালু (FM 2.5–2.9) · প্লাস্টার বালু (FM 1.3–1.6) · কাদামুক্ত',
    descriptionEn:
      'Screened, low-silt golden Sylhet coarse sand with high Fineness Modulus (FM) for structural RCC casting, paired with fine local river sand for smooth plastering and bulk earth-filling sand.',
    descriptionBn:
      'স্ট্রাকচারাল আরসিসি ঢালাইয়ের জন্য উচ্চ এফএম (FM 2.5–2.9) সম্পন্ন আসল সিলেট লাল/মোটা বালু, নিখুঁত প্লাস্টার ও গাঁথুনির জন্য পরিষ্কার চিকন নদী বালু এবং প্রজেক্ট ভরাটের জন্য ভিটি বালু ট্রাক ও বলগেটে সরবরাহ।',
    specifications: [
      { labelEn: 'Sylhet Coarse Sand FM', labelBn: 'সিলেট বালুর এফএম (FM)', value: '2.50 – 2.90 (RCC Casting Grade)' },
      { labelEn: 'Medium / Plaster Sand FM', labelBn: 'প্লাস্টার বালুর এফএম (FM)', value: '1.30 – 1.60 (Mortar & Finishing)' },
      { labelEn: 'Silt & Organic Content', labelBn: 'কাদা ও অপদ্রব্যের মাত্রা', value: '< 2.5% (Washed & Screened)' },
      { labelEn: 'Delivery Mode', labelBn: 'সরবরাহ মাধ্যম', value: '10-Wheeler Dump Truck / Bulkhead Barge' },
    ],
    applicationsEn: [
      'High-strength concrete batching for columns, beams, and bridge decks',
      'Crack-free internal and external wall plastering and brickwork mortar',
      'Large-scale real estate land development and highway embankment filling',
    ],
    applicationsBn: [
      'কলাম, বিম এবং ব্রিজ ডেক ঢালাইয়ের জন্য উচ্চ শক্তির কংক্রিট মিক্সিং',
      'ফাটলমুক্ত অভ্যন্তরীণ ও বাহ্যিক প্লাস্টার এবং ইটের গাঁথুনি',
      'রিয়েল এস্টেট প্রজেক্টের জমি ভরাট ও সরকারি সড়ক বাঁধ নির্মাণ',
    ],
    sectors: ['real-estate', 'government'],
  },
];

export const VERIFIED_CREDENTIALS: CredentialDoc[] = [
  {
    id: 'trade-licence',
    titleEn: 'Official Government Trade Licence',
    titleBn: 'সরকারি ট্রেড লাইসেন্স সনদ',
    authorityEn: 'Rajanagar Union Parishad, Sirajdikhan, Munshiganj',
    authorityBn: 'রাজানগর ইউনিয়ন পরিষদ, সিরাজদিখান, মুন্সীগঞ্জ',
    referenceNo: '20265917481000094',
    issueDate: '24 September 2026',
    validity: 'Valid through June 30, 2027 (FY 2026–2027)',
    imageUrl: '/assets/aistudio/1_e2b58c2d.jpg',
    summaryEn:
      'Issued to KHAN ENTERPRIZE (Tanbir Ahmed Khan) for authorized commercial trading and supply of Rod, Cement, Brick, and Sand at Syedpur Market, Sirajdikhan, Munshiganj.',
    summaryBn:
      'খান এন্টারপ্রাইজ (তানবীর আহমেদ খান)-এর অনুকূলে সৈয়দপুর মার্কেট, সিরাজদিখান, মুন্সীগঞ্জ হতে রড, সিমেন্ট, ইট ও বালু ব্যবসার জন্য প্রদত্ত সরকারি ট্রেড লাইসেন্স।',
  },
  {
    id: 'tin-certificate',
    titleEn: 'National Board of Revenue (NBR) TIN Certificate',
    titleBn: 'জাতীয় রাজস্ব বোর্ড (NBR) টিন সনদপত্র',
    authorityEn: 'Taxes Circle-021 (Tangabari), Taxes Zone Narayanganj',
    authorityBn: 'কর সার্কেল-০২১ (টাঙ্গাবাড়ী), কর অঞ্চল নারায়ণগঞ্জ',
    referenceNo: 'TIN: 252764986609',
    issueDate: '21 April 2024',
    validity: 'Active Registered Taxpayer (Govt. of Bangladesh)',
    imageUrl: '/assets/aistudio/5_d5742b4a.jpg',
    summaryEn:
      'Official Taxpayer Identification Number (TIN) certificate certifying Tanbir Ahmed Khan of Khan Bari, Kumudpur, Syedpur, Sirajdikhan, Munshiganj as a registered taxpayer.',
    summaryBn:
      'গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের জাতীয় রাজস্ব বোর্ড কর্তৃক তানবীর আহমেদ খান-এর অনুকূলে প্রদত্ত অফিশিয়াল টিন (TIN) সার্টিফিকেট।',
  },
  {
    id: 'visiting-card',
    titleEn: 'Notarized Corporate Identity & Visiting Card',
    titleBn: 'নোটারিকৃত কর্পোরেট ভিজিটিং কার্ড ও লোগো',
    authorityEn: 'Attested by Notary Public, People’s Republic of Bangladesh',
    authorityBn: 'নোটারি পাবলিক কর্তৃক সত্যায়িত কর্পোরেট পরিচিতি',
    referenceNo: 'NID: 1505380764',
    issueDate: '02 November 2026',
    validity: 'Verified Corporate Identity',
    imageUrl: '/assets/aistudio/3_Notary-Stamped_Khan_Enterprise_Card_35b5975f.png',
    summaryEn:
      'Official brand mark and corporate contact card of KHAN ENTERPRIZE ("Your Vision - Our Foundation · Construction Materials Suppliers"), attested by Advocate Mohammed Younus.',
    summaryBn:
      'খান এন্টারপ্রাইজের অফিশিয়াল লোগো এবং যোগাযোগের তথ্য সম্বলিত নোটারি পাবলিক কর্তৃক সত্যায়িত কর্পোরেট কার্ড।',
  },
  {
    id: 'letterhead',
    titleEn: 'Official Attested Company Pad / Letterhead',
    titleBn: 'অফিশিয়াল সত্যায়িত কোম্পানি প্যাড',
    authorityEn: 'KHAN ENTERPRIZE · Syedpur Bazar, Sirajdikhan, Munshiganj',
    authorityBn: 'খান এন্টারপ্রাইজ · সৈয়দপুর বাজার, সিরাজদিখান, মুন্সীগঞ্জ',
    referenceNo: '+880 1910-254525',
    issueDate: '02 November 2026',
    validity: 'Authorized Requisition & Billing Pad',
    imageUrl: '/assets/aistudio/4_0b414bc4.jpg',
    summaryEn:
      'Used for formal tender quotations, bill of quantities (BoQ) submissions, delivery challans, and government/real estate procurement invoicing.',
    summaryBn:
      'সরকারি টেন্ডার কোটেশন, রিয়েল এস্টেট বিল অফ কোয়ান্টিটিজ (BoQ), চালান এবং অফিশিয়াল চুক্তিপত্রের জন্য ব্যবহৃত সত্যায়িত প্যাড।',
  },
];

export const SUPPLY_RECORD_DATA = [
  {
    id: 'DEL-01',
    sectorEn: 'Real Estate Sector',
    sectorBn: 'রিয়েল এস্টেট সেক্টর',
    projectEn: '10-Story Residential & Commercial Complex, Munshiganj Sadar',
    projectBn: '১০ তলা আবাসিক ও বাণিজ্যিক কমপ্লেক্স, মুন্সীগঞ্জ সদর',
    materialsSupplied: '145 MT 500W Rod · 6,400 Bags Cement · 18,000 CFT Sylhet Sand',
    timeline: 'Q3 2026 · On-Schedule Phased Delivery',
  },
  {
    id: 'DEL-02',
    sectorEn: 'Government Infrastructure',
    sectorBn: 'সরকারি অবকাঠামো প্রজেক্ট',
    projectEn: 'Union Parishad Approach Road & RCC Box Culvert Works, Sirajdikhan',
    projectBn: 'ইউনিয়ন পরিষদ সংযোগ সড়ক ও আরসিসি বক্স কালভার্ট নির্মাণ, সিরাজদিখান',
    materialsSupplied: '62 MT TMT Rod · 3,200 Bags OPC Cement · 85,000 Pcs 1st Class Bricks',
    timeline: 'Q2–Q3 2026 · 100% Tender Spec Compliant',
  },
  {
    id: 'DEL-03',
    sectorEn: 'Real Estate Sector',
    sectorBn: 'রিয়েল এস্টেট সেক্টর',
    projectEn: 'Twin Tower Housing Development Project, Keraniganj–Dhaka Corridor',
    projectBn: 'টুইন টাওয়ার হাউজিং ডেভেলপমেন্ট প্রজেক্ট, কেরানীগঞ্জ-ঢাকা করিডোর',
    materialsSupplied: '210 MT TMT 500W Rod · 9,500 Bags PCC Cement · 120,000 Pcs Auto Bricks',
    timeline: 'Ongoing 2026 · Dedicated Fleet Dispatch',
  },
  {
    id: 'DEL-04',
    sectorEn: 'Government Sector',
    sectorBn: 'সরকারি শিক্ষা ও ভবন খাত',
    projectEn: 'Public Institutional Building & Boundary Wall Construction, Narayanganj Zone',
    projectBn: 'সরকারি প্রাতিষ্ঠানিক ভবন ও সীমানা প্রাচীর নির্মাণ, নারায়ণগঞ্জ জোন',
    materialsSupplied: '48 MT 500W Rod · 2,800 Bags Cement · 65,000 Pcs 1st Class Red Bricks',
    timeline: 'Q1–Q2 2026 · Verified Challan & Tax Cleared',
  },
];
