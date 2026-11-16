export type ProjectAlbumCategory =
  | 'depot-stock'
  | 'rcc-culvert-rebar'
  | 'casting-roadworks'
  | 'site-inspection';

export interface ProjectAlbumPhoto {
  id: string;
  index: string;
  imageUrl: string;
  category: ProjectAlbumCategory;
  categoryLabelEn: string;
  categoryLabelBn: string;
  titleEn: string;
  titleBn: string;
  captionEn: string;
  captionBn: string;
}

export const PROJECT_ALBUM_PHOTOS: ProjectAlbumPhoto[] = [
  {
    id: 'album-md-office-1',
    index: '01',
    imageUrl: '/assets/aistudio/TANBIR-PHOTO__4__474247e4.jpg',
    category: 'site-inspection',
    categoryLabelEn: 'Corporate Office & Quality Control',
    categoryLabelBn: 'কর্পোরেট অফিস ও মান নিয়ন্ত্রণ',
    titleEn: 'Managing Director Tanbir Ahmed Khan Reviewing Project Requisitions & Material Samples',
    titleBn: 'কর্পোরেট অফিসে প্রজেক্ট ফাইল ও নির্মাণ সামগ্রীর স্যাম্পল পর্যালোচনায় ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খান',
    captionEn:
      'Managing Director Tanbir Ahmed Khan at the KHAN ENTERPRIZE corporate desk reviewing project supply schedules alongside graded sample jars of 25mm & 20mm Stone Chips, Dubai Black Stone, 1st Class Brick Chips (Khoa), and Sylhet & River Sand.',
    captionBn:
      'খান এন্টারপ্রাইজের কর্পোরেট অফিসে প্রজেক্টের কাগজপত্র পর্যালোচনা করছেন ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খান। টেবিলে প্রদর্শিত রয়েছে ২৫ মিমি ও ২০ মিমি পাথর, দুবাই ব্ল্যাক স্টোন, ১ নং ইটের খোয়া এবং সিলেট ও নদী বালুর গ্রেডেড স্যাম্পল।',
  },
  {
    id: 'album-md-office-2',
    index: '02',
    imageUrl: '/assets/aistudio/TANBIR-PHOTO__3__ebc91f2c.jpg',
    category: 'site-inspection',
    categoryLabelEn: 'Corporate Office & Quality Control',
    categoryLabelBn: 'কর্পোরেট অফিস ও মান নিয়ন্ত্রণ',
    titleEn: 'KHAN ENTERPRIZE Corporate Headquarters & Construction Material Sample Desk',
    titleBn: 'খান এন্টারপ্রাইজ কর্পোরেট কার্যালয় ও নির্মাণ সামগ্রীর কোয়ালিটি স্যাম্পল ডিসপ্লে',
    captionEn:
      'Executive headquarters of KHAN ENTERPRIZE featuring our signature 3D architectural emblem and an organized display of tested stone aggregates, brick chips, and graded sands for real estate developers and government engineers.',
    captionBn:
      'রিয়েল এস্টেট ডেভেলপার ও সরকারি প্রকৌশলীদের সামনে নির্মাণ সামগ্রীর সঠিক মান প্রদর্শনের জন্য আমাদের কর্পোরেট অফিসে সাজানো পাথর, ইটের খোয়া ও বালুর স্যাম্পল জার এবং দাপ্তরিক কার্যক্রমে ব্যস্ত ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খান।',
  },
  {
    id: 'album-30',
    index: '03',
    imageUrl: '/assets/aistudio/30_e1367437.jpeg',
    category: 'site-inspection',
    categoryLabelEn: 'Engineering & Site Inspection',
    categoryLabelBn: 'ইঞ্জিনিয়ারিং ও সাইট পরিদর্শন',
    titleEn: 'Site Office Engineering Review & Quality Audit',
    titleBn: 'সাইট অফিসে ইঞ্জিনিয়ারিং টিম ও ম্যানেজিং ডিরেক্টরের কাজের মান পর্যালোচনা',
    captionEn:
      'Managing Director Tanbir Ahmed Khan and project engineers reviewing structural drawings, BoQ schedules, and quality compliance reports at the project site office.',
    captionBn:
      'চলমান প্রজেক্টের সাইট অফিসে স্ট্রাকচারাল ড্রয়িং, মালামালের কোয়ালিটি রিপোর্ট এবং কাজের অগ্রগতি পর্যালোচনা করছেন ম্যানেজিং ডিরেক্টর তানবীর আহমেদ খান ও প্রকৌশলী দল।',
  },
  {
    id: 'album-29',
    index: '02',
    imageUrl: '/assets/aistudio/29_d6d802de.jpeg',
    category: 'site-inspection',
    categoryLabelEn: 'Engineering & Site Inspection',
    categoryLabelBn: 'ইঞ্জিনিয়ারিং ও সাইট পরিদর্শন',
    titleEn: 'On-Site Inspection of Reinforced Concrete Box Drain Slab',
    titleBn: 'চলমান আরসিসি বক্স ড্রেন ও রড বাইন্ডিং কাজের সরেজমিন পরিদর্শন',
    captionEn:
      'Project engineers and officials inspecting TMT steel reinforcement spacing and shuttering alignment along an urban commercial corridor.',
    captionBn:
      'শহরের ব্যস্ত বাণিজ্যিক সড়কে চলমান আরসিসি ড্রেনের রড বাইন্ডিং ও শাটারিং কাজের গুণগত মান সরেজমিনে পরিদর্শন করছেন প্রজেক্ট ইঞ্জিনিয়ার ও কর্মকর্তাবৃন্দ।',
  },
  {
    id: 'album-05',
    index: '03',
    imageUrl: '/assets/aistudio/5_9c27915e.jpeg',
    category: 'depot-stock',
    categoryLabelEn: 'Depot & Cement Stock',
    categoryLabelBn: 'সিমেন্ট ডিপো ও মজুদ',
    titleEn: 'Bulk Warehouse Stock of Fresh Cement & Crown Cement',
    titleBn: 'খান এন্টারপ্রাইজ ডিপোতে ফ্রেশ সিমেন্ট ও ক্রাউন সিমেন্টের বিশাল মজুদ',
    captionEn:
      'Factory-fresh 50kg bags of Fresh Cement and Crown Cement stacked systematically at KHAN ENTERPRIZE depot for uninterrupted project supply.',
    captionBn:
      'রিয়েল এস্টেট ও সরকারি প্রজেক্টে তাৎক্ষণিক সরবরাহের জন্য খান এন্টারপ্রাইজের নিজস্ব গোডাউনে ফ্রেশ ও ক্রাউন সিমেন্টের বিপুল মজুদ।',
  },
  {
    id: 'album-01',
    index: '04',
    imageUrl: '/assets/aistudio/1_ed92c4dd.jpeg',
    category: 'depot-stock',
    categoryLabelEn: 'Depot & Cement Stock',
    categoryLabelBn: 'সিমেন্ট ডিপো ও মজুদ',
    titleEn: 'High-Capacity Fresh & Supercrete Cement Storage',
    titleBn: 'ফ্রেশ ও সুপারক্রিট সিমেন্টের পাইকারি স্টক',
    captionEn:
      'Moisture-protected indoor storage of Portland Composite Cement bags ready for bulk dispatch to ongoing construction sites.',
    captionBn:
      'আর্দ্রতামুক্ত নিরাপদ পরিবেশে সংরক্ষিত ৫০ কেজি সিমেন্টের বস্তা, যা সরাসরি প্রজেক্ট সাইটে পাঠানোর জন্য প্রস্তুত।',
  },
  {
    id: 'album-02',
    index: '05',
    imageUrl: '/assets/aistudio/2_c4ceb0c9.jpeg',
    category: 'depot-stock',
    categoryLabelEn: 'Depot & Cement Stock',
    categoryLabelBn: 'সিমেন্ট ডিপো ও মজুদ',
    titleEn: 'Crown Cement Bulk Consignment Ready for Dispatch',
    titleBn: 'প্রজেক্ট ডেলিভারির জন্য প্রস্তুত ক্রাউন সিমেন্টের লট',
    captionEn:
      'Dedicated rows of Crown Cement (OPC/PCC) maintained at Syedpur Bazar depot for heavy structural casting and piling works.',
    captionBn:
      'ভারী ঢালাই ও পাইলিং কাজের জন্য সৈয়দপুর বাজার ডিপোতে সারিবদ্ধভাবে রাখা ক্রাউন সিমেন্টের পাইকারি স্টক।',
  },
  {
    id: 'album-04',
    index: '07',
    imageUrl: '/assets/aistudio/4_735a8f19.jpeg',
    category: 'depot-stock',
    categoryLabelEn: 'Depot & Cement Stock',
    categoryLabelBn: 'সিমেন্ট ডিপো ও মজুদ',
    titleEn: 'Daytime Wholesale Counter & Cement Godown',
    titleBn: 'সৈয়দপুর বাজারে আমাদের সিমেন্ট গোডাউন ও অফিস কাউন্টার',
    captionEn:
      'Direct wholesale supply hub serving real estate builders and government contractors across Munshiganj, Narayanganj, and Dhaka.',
    captionBn:
      'মুন্সীগঞ্জ, নারায়ণগঞ্জ ও ঢাকার বিভিন্ন চলমান প্রজেক্টে সরাসরি সিমেন্ট ও নির্মাণ সামগ্রী সরবরাহের মূল কেন্দ্র।',
  },
  {
    id: 'album-10',
    index: '08',
    imageUrl: '/assets/aistudio/10_33ca1722.jpeg',
    category: 'site-inspection',
    categoryLabelEn: 'Engineering & Site Inspection',
    categoryLabelBn: 'ইঞ্জিনিয়ারিং ও সাইট পরিদর্শন',
    titleEn: 'Dimensional Verification of Precast Beam Formwork & Rebar',
    titleBn: 'প্রিকাস্ট গার্ডার ও বিমের রড বাইন্ডিং এবং স্টিল শাটারিংয়ের মাপ পরীক্ষা',
    captionEn:
      'On-site dimensional accuracy check of fabricated TMT 500W steel reinforcement cages inside heavy-gauge steel channels before concrete casting.',
    captionBn:
      'ঢালাইয়ের পূর্বে স্টিল ফর্মওয়ার্কের ভেতর টিএমটি রডের খাঁচা ও স্পেসিং নিখুঁতভাবে পরিমাপ করছেন প্রকৌশলী ও সুপারভাইজার।',
  },
  {
    id: 'album-11',
    index: '09',
    imageUrl: '/assets/aistudio/11_27a0a62e.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Heavy-Duty Steel Shuttering & TMT Rebar Cages for Precast Beams',
    titleBn: 'ভারী স্টিল শাটারিংয়ে প্রস্তুতকৃত প্রিকাস্ট আরসিসি বিমের রডের খাঁচা',
    captionEn:
      'Parallel rows of high-tensile deformed steel reinforcement cages aligned inside precision steel molds for structural beam fabrication.',
    captionBn:
      'উচ্চ ক্ষমতাসম্পন্ন টিএমটি রড দিয়ে তৈরি খাঁচাগুলো সমান্তরাল স্টিল মোল্ডে বসিয়ে ঢালাইয়ের জন্য প্রস্তুত করা হয়েছে।',
  },
  {
    id: 'album-08',
    index: '10',
    imageUrl: '/assets/aistudio/8_6514ccb1.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Structural Beam Concrete Casting with Mechanical Vibrator',
    titleBn: 'ভাইব্রেটর মেশিন ব্যবহার করে প্রিকাস্ট আরসিসি বিম ঢালাই',
    captionEn:
      'Pouring high-strength concrete mixed with Crown Cement and Sylhet coarse sand into reinforced beam molds with mechanical compaction.',
    captionBn:
      'ক্রাউন সিমেন্ট ও উন্নত সিলেট বালুর মিশ্রণে তৈরি কংক্রিট ভাইব্রেটর মেশিনের সাহায্যে নিখুঁতভাবে বিম শাটারিংয়ে ঢালাই করা হচ্ছে।',
  },
  {
    id: 'album-12',
    index: '11',
    imageUrl: '/assets/aistudio/12_601925f1.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Completed Precast RCC Beams Undergoing Curing',
    titleBn: 'ঢালাই সম্পন্ন হওয়া প্রিকাস্ট আরসিসি বিম ও কিউরিং প্রক্রিয়া',
    captionEn:
      'Smooth-finished reinforced concrete structural beams curing inside steel channels after casting.',
    captionBn:
      'সফলভাবে ঢালাই সম্পন্ন হওয়ার পর স্টিল ফর্মওয়ার্কের ভেতরে কিউরিং পর্যায়ে থাকা মজবুত আরসিসি বিমসমূহ।',
  },
  {
    id: 'album-13',
    index: '12',
    imageUrl: '/assets/aistudio/13_68d877bf.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Dense TMT Rebar Mat & Vertical Wall Reinforcement at Culvert Junction',
    titleBn: 'কালভার্ট চেম্বারে ঘন টিএমটি রডের ম্যাট ও ওয়াল রিইনফোর্সমেন্ট স্থাপন',
    captionEn:
      'Technicians verifying spacing of heavy double-layer deformed steel bars at the mouth of a large underground RCC pipe culvert.',
    captionBn:
      'বৃহৎ আন্ডারগ্রাউন্ড আরসিসি পাইপ কালভার্টের মুখে ডাবল-লেয়ার টিএমটি রডের জালি ও খাঁচার মাপ যাচাই করা হচ্ছে।',
  },
  {
    id: 'album-16',
    index: '13',
    imageUrl: '/assets/aistudio/16_691871e3.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: ' Precision Steel Binding for Underground Culvert Chamber',
    titleBn: 'কালভার্ট চেম্বারের ফ্লোর ও দেয়ালের নিখুঁত রড বাইন্ডিং',
    captionEn:
      'High-tensile 500W steel rods tied with concrete cover blocks to ensure long-term structural durability under heavy traffic loads.',
    captionBn:
      'ভারী যানবাহনের চাপ সহনশীল করার লক্ষ্যে কংক্রিট কভার ব্লকসহ অত্যন্ত মজবুতভাবে বাঁধা টিএমটি রডের জালি।',
  },
  {
    id: 'album-15',
    index: '14',
    imageUrl: '/assets/aistudio/15_9399525f.jpeg',
    category: 'casting-roadworks',
    categoryLabelEn: 'RMC Casting & Road Works',
    categoryLabelBn: 'রেডি-মিক্স ঢালাই ও সড়ক নির্মাণ',
    titleEn: 'Night-Shift Ready-Mix Concrete (RMC) Foundation Pouring',
    titleBn: 'রাতের শিফটে রেডি-মিক্স কংক্রিট (RMC) ট্রাকের মাধ্যমে ফাউন্ডেশন ঢালাই',
    captionEn:
      'Direct chute discharge from a transit mixer truck onto a reinforced base slab with graded 1st class brick aggregate (khoa) staged nearby.',
    captionBn:
      'ট্রানজিট মিক্সার ট্রাক থেকে সরাসরি রডের জালির ওপর রেডি-মিক্স কংক্রিট ঢালাই এবং পাশে মজুদকৃত ১ নং ইটের খোয়া।',
  },
  {
    id: 'album-17',
    index: '15',
    imageUrl: '/assets/aistudio/17_95843cef.jpeg',
    category: 'casting-roadworks',
    categoryLabelEn: 'RMC Casting & Road Works',
    categoryLabelBn: 'রেডি-মিক্স ঢালাই ও সড়ক নির্মাণ',
    titleEn: 'High-Slump Structural Concrete Casting on Double Rebar Mesh',
    titleBn: 'ডাবল লেয়ার রডের জালিতে উচ্চ ক্ষমতাসম্পন্ন রেডি-মিক্স ঢালাই',
    captionEn:
      'Continuous night-time concrete pouring for heavy civil infrastructure to avoid daytime traffic disruption.',
    captionBn:
      'দিনের বেলার যানজট এড়াতে রাতের পালায় নিরবচ্ছিন্নভাবে চলছে ভারী অবকাঠামোর রেডি-মিক্স কংক্রিট ঢালাই।',
  },
  {
    id: 'album-19',
    index: '16',
    imageUrl: '/assets/aistudio/19_ae546774.jpeg',
    category: 'casting-roadworks',
    categoryLabelEn: 'RMC Casting & Road Works',
    categoryLabelBn: 'রেডি-মিক্স ঢালাই ও সড়ক নির্মাণ',
    titleEn: 'Base Slab Concrete Spreading & Surface Levelling',
    titleBn: 'ফাউন্ডেশন স্ল্যাবের কংক্রিট সমানকরণ ও ভাইব্রেশন কাজ',
    captionEn:
      'Masons and crew levelling freshly poured ready-mix concrete across a reinforced structural foundation bed.',
    captionBn:
      'রেডি-মিক্স ঢালাইয়ের পর ফাউন্ডেশন স্ল্যাবের উপরিভাগ সমান ও নিখুঁত করার কাজে ব্যস্ত দক্ষ নির্মাণ শ্রমিক দল।',
  },
  {
    id: 'album-24',
    index: '17',
    imageUrl: '/assets/aistudio/24_b6225bbb.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Heavy-Duty Large-Diameter Precast RCC Culvert Pipes Delivered on Site',
    titleBn: 'সরকারি ড্রেনেজ প্রজেক্টে ট্রাকে করে বিশালাকার প্রিকাস্ট আরসিসি পাইপ সরবরাহ',
    captionEn:
      'Multiple large-diameter reinforced concrete drainage pipes unloaded from heavy transport trucks for municipal storm-water line installation.',
    captionBn:
      'নগরীর জলাবদ্ধতা নিরসন ও সরকারি ড্রেনেজ প্রজেক্টের জন্য ভারী ট্রাকে করে সাইটে পৌঁছানো হয়েছে বিশালাকার আরসিসি পাইপ।',
  },
  {
    id: 'album-14',
    index: '18',
    imageUrl: '/assets/aistudio/14_197777ec.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Excavator Placement of Giant Precast RCC Culvert Pipe',
    titleBn: 'ভেকু (Excavator) মেশিনের সাহায্যে মাটির নিচে বিশালাকার আরসিসি পাইপ স্থাপন',
    captionEn:
      'Heavy tracked excavator carefully positioning a high-load precast concrete pipe into the excavated municipal drainage trench.',
    captionBn:
      'গভীর ট্রেঞ্চে অত্যন্ত সতর্কতার সাথে ভারী এক্সকাভেটর দিয়ে বসানো হচ্ছে বৃহৎ ব্যাসের প্রিকাস্ট আরসিসি কালভার্ট পাইপ।',
  },
  {
    id: 'album-21',
    index: '19',
    imageUrl: '/assets/aistudio/21_414ef6e1.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Night-Shift Heavy Rigging & Lowering of RCC Drainage Pipe',
    titleBn: 'রাতের পালায় এক্সকাভেটর ক্রেন দিয়ে গভীর ড্রেনে আরসিসি পাইপ বসানোর কাজ',
    captionEn:
      'Precision cable rigging from an excavator boom lowering a heavy concrete culvert section into position at night.',
    captionBn:
      'রাতের আলোয় ক্যাবল স্লিং ও এক্সকাভেটরের সাহায্যে গভীর খাতে নামানো হচ্ছে ভারী আরসিসি ড্রেনেজ পাইপ।',
  },
  {
    id: 'album-20',
    index: '20',
    imageUrl: '/assets/aistudio/20_646c16a2.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Internal Joint Sealing & Mortar Finishing Inside Culvert Pipe',
    titleBn: 'স্থাপিত আরসিসি কালভার্ট পাইপের ভেতরের জয়েন্ট সিলিং ও ফিনিশিং কাজ',
    captionEn:
      'Workers sealing internal pipe joints with rich cement-sand mortar to guarantee leak-proof underground flow.',
    captionBn:
      'ভূগর্ভস্থ পানির প্রবাহ নির্বিঘ্ন রাখতে পাইপের সংযোগস্থলে উন্নত সিমেন্ট ও বালুর মর্টার দিয়ে নিখুঁত জয়েন্ট ফিনিশিং করা হচ্ছে।',
  },
  {
    id: 'album-07',
    index: '21',
    imageUrl: '/assets/aistudio/7_f0c4e623.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Urban Drainage Trenching, Pipe Laying & 1st Class Brick Supply',
    titleBn: 'শহরের ড্রেনেজ লাইন খনন, আরসিসি পাইপ স্থাপন ও ১ নং ইট সরবরাহ',
    captionEn:
      'Simultaneous trench excavation, precast concrete pipe alignment, and staging of first-class red clay bricks for inspection chambers.',
    captionBn:
      'একই সাথে চলছে এক্সকাভেটর দিয়ে মাটি খনন, আরসিসি পাইপ বসানো এবং ম্যানহোল চেম্বারের জন্য ১ নং লাল ইট সরবরাহের কাজ।',
  },
  {
    id: 'album-06',
    index: '22',
    imageUrl: '/assets/aistudio/6_c059b608.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Deep Culvert Pipe Connection & Brick Masonry Work',
    titleBn: 'গভীর ড্রেনেজ পাইপ সংযোগ ও ১ নং ইটের গাঁথুনি কাজ',
    captionEn:
      'Skilled masons constructing a brick bulkhead around the newly installed underground concrete culvert pipe.',
    captionBn:
      'নতুন স্থাপিত আন্ডারগ্রাউন্ড আরসিসি পাইপের মুখে উন্নত মানের ১ নং ইট ও সিমেন্ট-বালু দিয়ে মজবুত গাঁথুনি তৈরি করা হচ্ছে।',
  },
  {
    id: 'album-09',
    index: '23',
    imageUrl: '/assets/aistudio/9_ebdc5ccc.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'First-Class Red Brick Manhole Chamber & CAT Excavator Operations',
    titleBn: '১ নং লাল ইট দিয়ে ম্যানহোল চেম্বার নির্মাণ ও ক্যাট এক্সকাভেটর কার্যক্রম',
    captionEn:
      'Constructing a multi-course red clay brick inspection chamber with cement mortar alongside heavy CAT excavator trenching.',
    captionBn:
      'ক্যাট (CAT) এক্সকাভেটর দিয়ে ড্রেন খননের পাশাপাশি আমাদের সরবরাহকৃত ১ নং লাল ইট ও সিমেন্ট দিয়ে তৈরি হচ্ছে সুদৃঢ় ম্যানহোল চেম্বার।',
  },
  {
    id: 'album-18',
    index: '24',
    imageUrl: '/assets/aistudio/18_f35f7894.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Continuous RCC Box Drain Wall & Base Rebar Network',
    titleBn: 'দীর্ঘ আরসিসি বক্স ড্রেনের ফ্লোর ঢালাই ও দুই পাশের দেয়ালের রড বাইন্ডিং',
    captionEn:
      'Extended urban box drain channel featuring freshly poured base concrete and vertical deformed steel reinforcement bars.',
    captionBn:
      'সীমানা প্রাচীর ঘেঁষে দীর্ঘ আরসিসি বক্স ড্রেনের তলদেশ ঢালাই ও দুই পাশের দেয়ালের খাড়া টিএমটি রডের মজবুত কাঠামো।',
  },
  {
    id: 'album-28',
    index: '25',
    imageUrl: '/assets/aistudio/28_e2db449b.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Top-Slab Steel Reinforcement Grid & Manhole Access Framing',
    titleBn: 'আরসিসি ড্রেনের উপরের স্ল্যাব ঢালাইয়ের জন্য রড বাইন্ডিং ও ম্যানহোল ফ্রেম স্থাপন',
    captionEn:
      'Completed top-slab TMT rebar mesh with integrated steel inspection covers ready for final concrete casting along a busy market street.',
    captionBn:
      'ব্যস্ত মার্কেট সড়কের পাশে আরসিসি ড্রেনের উপরের স্ল্যাব ঢালাইয়ের জন্য প্রস্তুতকৃত নিখুঁত রডের জালি ও লোহার ম্যানহোল ফ্রেম।',
  },
  {
    id: 'album-27',
    index: '26',
    imageUrl: '/assets/aistudio/27_ba8915f9.jpeg',
    category: 'rcc-culvert-rebar',
    categoryLabelEn: 'RCC Drain, Culvert & Rebar',
    categoryLabelBn: 'আরসিসি ড্রেন, কালভার্ট ও রড বাইন্ডিং',
    titleEn: 'Active On-Site Concrete Mixing & Drain Wall Casting',
    titleBn: 'চলমান আরসিসি ড্রেনের দেয়াল ঢালাই ও পাথর/খোয়া কংক্রিট সরবরাহ',
    captionEn:
      'Construction crew transporting freshly mixed concrete over bamboo scaffolding to cast reinforced concrete drain walls, with coarse Sylhet sand and stone aggregate stockpiled nearby.',
    captionBn:
      'পাশে মজুদকৃত সিলেট লাল বালু, পাথর ও সিমেন্টের মিশ্রণে তৈরি কংক্রিট মাথায় বহন করে আরসিসি ড্রেনের দেয়াল ঢালাই করছেন শ্রমিকরা।',
  },
  {
    id: 'album-25',
    index: '27',
    imageUrl: '/assets/aistudio/25_7391c1b0.jpeg',
    category: 'casting-roadworks',
    categoryLabelEn: 'RMC Casting & Road Works',
    categoryLabelBn: 'রেডি-মিক্স ঢালাই ও সড়ক নির্মাণ',
    titleEn: 'Night-Shift Highway Asphalt Paver & Tandem Roller Operation',
    titleBn: 'রাতের পালায় অত্যাধুনিক পেভার মেশিন ও রোলার দিয়ে মহাসড়ক কার্পেটিং',
    captionEn:
      'Heavy-duty asphalt paver and HAMM tandem vibratory roller working in tandem at night to lay a smooth highway wearing course.',
    captionBn:
      'রাতের আলোর নিচে অত্যাধুনিক অ্যাসফল্ট পেভার ও হ্যাম (HAMM) রোলার মেশিনের সাহায্যে দ্রুতগতিতে চলছে মূল সড়কের বিটুমিনাস কার্পেটিং কাজ।',
  },
  {
    id: 'album-22',
    index: '28',
    imageUrl: '/assets/aistudio/22_3b4f407b.jpeg',
    category: 'casting-roadworks',
    categoryLabelEn: 'RMC Casting & Road Works',
    categoryLabelBn: 'রেডি-মিক্স ঢালাই ও সড়ক নির্মাণ',
    titleEn: 'Precision Road Surfacing at City Monument Intersection',
    titleBn: 'শহরের প্রধান চত্বরে পেভার মেশিনের সাহায্যে নিখুঁত সড়ক কার্পেটিং',
    captionEn:
      'Automated paver machine laying hot-mix asphalt concrete with manual edge raking for a durable urban roadway.',
    captionBn:
      'প্রধান সড়ক চত্বরে স্বয়ংক্রিয় পেভার মেশিন ও দক্ষ কর্মীদের সমন্বয়ে সম্পন্ন হচ্ছে টেকসই সড়ক কার্পেটিং কাজ।',
  },
  {
    id: 'album-26',
    index: '29',
    imageUrl: '/assets/aistudio/26_5afdd7c4.jpeg',
    category: 'casting-roadworks',
    categoryLabelEn: 'RMC Casting & Road Works',
    categoryLabelBn: 'রেডি-মিক্স ঢালাই ও সড়ক নির্মাণ',
    titleEn: 'Final Compaction with HAMM Vibratory Road Roller',
    titleBn: 'হ্যাম (HAMM) ভাইব্রেটরি রোড রোলার দিয়ে সড়কের ফাইনাল কম্প্যাকশন',
    captionEn:
      'High-density compaction of newly laid asphalt pavement using a heavy tandem drum roller along a commercial avenue.',
    captionBn:
      'নতুন কার্পেটিং করা বাণিজ্যিক সড়কের স্থায়িত্ব নিশ্চিত করতে ভারী রোড রোলার দিয়ে ফাইনাল কম্প্যাকশন করা হচ্ছে।',
  },
  {
    id: 'album-23',
    index: '30',
    imageUrl: '/assets/aistudio/23_0213711f.jpeg',
    category: 'casting-roadworks',
    categoryLabelEn: 'RMC Casting & Road Works',
    categoryLabelBn: 'রেডি-মিক্স ঢালাই ও সড়ক নির্মাণ',
    titleEn: 'Newly Completed Wide Urban Highway After Asphalt Carpeting',
    titleBn: 'কার্পেটিং ও উন্নয়ন কাজ শেষে সম্পূর্ণ প্রস্তুত প্রশস্ত নগর সড়ক',
    captionEn:
      'Morning view of the newly resurfaced multi-lane urban roadway and median corridor completed to government engineering standards.',
    captionBn:
      'সফলভাবে ড্রেনেজ ও কার্পেটিং কাজ সম্পন্ন হওয়ার পর ভোরের আলোয় ঝকঝকে প্রশস্ত মূল সড়ক।',
  },
];
