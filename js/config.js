/**
 * JANNAT ENTERPRISE - Central Business Configuration
 * Edit any business detail, phone number, address, or service here.
 * All changes will automatically reflect across the entire website.
 */

const JANNAT_CONFIG = {
  // Business Core Information
  businessName: "JANNAT ENTERPRISE",
  shortName: "JE",
  siteUrl: "https://jannat.un1ca.qzz.io",
  tagline: "Your One-Stop Digital Service & Technology Centre",
  bengaliTagline: "সব ডিজিটাল পরিষেবা, এক ছাদের নিচে",
  subTagline: "CSC Services • Ayushman Bharat BIS • Bank BC • PAN Services • Bill Payment • Internet & Broadband • Cable Network",
  
  // Location & Contact
  address: {
    village: "Moktarpur",
    gramPanchayat: "Raipur",
    block: "Domkal",
    district: "Murshidabad",
    state: "West Bengal",
    country: "India",
    pinCode: "742303",
    fullAddress: "Moktarpur, Raipur, Domkal, Murshidabad, West Bengal, India"
  },
  
  phone: "8918273721",
  formattedPhone: "+91 8918273721",
  whatsapp: "8918273721",
  whatsappIntl: "918918273721",
  
  // Official CSC & VLE Credentials
  cscId: "222365420014",
  vleRole: "CSC-linked BIS Operator Service",
  
  // Official Google Maps Place URL
  googleMapsUrl: "https://www.google.com/maps/place/JANNAT+ENTERPRISE/@24.0970196,88.6124894,17z/data=!3m1!4b1!4m6!3m5!1s0x39f9597d6ade8401:0xe783e1b93852d328!8m2!3d24.0970147!4d88.6150643!16s%2Fg%2F11jg7qbr8w",

  // Exact Geo Coordinates
  geo: {
    latitude: 24.0970147,
    longitude: 88.6150643
  },
  
  // Business Opening Hours (24-hour format for live open/closed logic)
  businessHours: {
    display: "Monday – Sunday: 9:00 AM – 8:00 PM",
    days: "Monday to Sunday",
    openHour: 9,    // 9:00 AM
    openMinute: 0,
    closeHour: 20,  // 8:00 PM
    closeMinute: 0,
    timezone: "Asia/Kolkata"
  },
  
  // Verified Training Credentials (strictly genuine, no fake certificates)
  trainings: [
    {
      id: "bis-web",
      title: "BIS for Operators Web Application",
      description: "Operator application training for Ayushman Bharat PM-JAY Beneficiary Identification System web portal."
    },
    {
      id: "bis-mobile",
      title: "BIS for Operators Mobile Application",
      description: "Operator training on mobile-based beneficiary verification, biometric e-KYC, and field operations."
    },
    {
      id: "abdm-overview",
      title: "Overview of Ayushman Bharat Digital Mission",
      description: "Comprehensive foundational orientation on the Ayushman Bharat Digital Mission (ABDM) framework."
    },
    {
      id: "ump-users",
      title: "UMP for Users",
      description: "User Management Portal procedures, verification protocols, and operator account security standards."
    }
  ],

  // Popular Services Catalog
  services: [
    {
      id: "ayushman-pmjay",
      category: "ayushman",
      categoryName: "Ayushman Bharat",
      badge: "BIS Operator Service",
      icon: "shield-check",
      title: "Ayushman Bharat PM-JAY",
      subtitle: "BIS e-KYC Service",
      shortDescription: "Eligible beneficiaries can receive assistance with Ayushman Bharat PM-JAY BIS e-KYC through the available CSC/BIS operator service.",
      fullDescription: "Under the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY), our centre acts as a CSC-linked BIS operator service to assist verified eligible beneficiaries with biometric and OTP-based e-KYC, family verification, and card processing assistance.",
      whoNeedsIt: "Eligible families listed under PM-JAY / SECC / National & State databases seeking BIS e-KYC and beneficiary card processing.",
      features: [
        "BIS e-KYC assistance",
        "Beneficiary assistance",
        "CSC-based service",
        "Local support"
      ],
      documents: [
        "Aadhaar Card of beneficiary / family members",
        "Ration Card (Digital Ration Card / Family ID)",
        "Active Mobile Number linked with Aadhaar",
        "Existing PM-JAY letter or HHID if available"
      ],
      importantNote: "Required documents may vary depending on beneficiary eligibility and service requirements. Services are provided through authorized CSC/BIS operator credentials. Bring original documents where applicable.",
      actionLabel: "View Details & Documents",
      isPopular: true
    },
    {
      id: "csc-digital",
      category: "other",
      categoryName: "CSC Services",
      badge: "CSC Service",
      icon: "cpu-chip",
      title: "CSC Digital Services",
      subtitle: "Citizen & Digital Services",
      shortDescription: "Various citizen and digital services available through CSC.",
      fullDescription: "As an active Common Services Centre (CSC ID: 222365420014), we provide rural and local citizens with seamless access to online citizen services, digital applications, registrations, and official CSC-supported initiatives.",
      whoNeedsIt: "Citizens, students, and local residents needing assistance with online government portals, registrations, and citizen forms.",
      features: [
        "Online citizen services",
        "Digital applications",
        "Online assistance",
        "Supported CSC services"
      ],
      documents: [
        "Aadhaar Card / Valid Photo ID",
        "Active Mobile Number for OTP",
        "Relevant application forms or prior reference numbers",
        "Passport size photographs where required"
      ],
      importantNote: "Required documents may vary depending on service, eligibility and applicable rules. Bring original documents where applicable.",
      actionLabel: "View Details & Documents",
      isPopular: true
    },
    {
      id: "pan-card",
      category: "pan",
      categoryName: "PAN Card",
      badge: "Through CSC",
      icon: "id-card",
      title: "PAN Card Services through CSC",
      subtitle: "New PAN & Application Assistance",
      shortDescription: "New PAN application, PAN-related assistance, application filling, and status assistance where available through CSC.",
      fullDescription: "Obtain your Permanent Account Number (PAN) through authorized CSC portals with complete operator guidance. We assist with digital submission, biometric/OTP authentication, photo and signature upload, and application tracking.",
      whoNeedsIt: "Individuals needing a fresh PAN card for banking, financial transactions, scholarship disbursements, or tax compliance.",
      features: [
        "New PAN application",
        "PAN-related assistance",
        "Application assistance",
        "Status assistance where available"
      ],
      documents: [
        "Proof of Identity (e.g. Aadhaar Card, Voter ID)",
        "Proof of Address (e.g. Aadhaar, Electricity Bill)",
        "Proof of Date of Birth (e.g. Aadhaar, Birth Certificate, Admit Card)",
        "Active Mobile Number",
        "Applicant photo & signature where applicable"
      ],
      importantNote: "Required documents may vary depending on application type and applicable rules. Bring original documents where applicable.",
      actionLabel: "View Details & Documents",
      isPopular: true
    },
    {
      id: "bank-bc",
      category: "banking",
      categoryName: "Bank BC",
      badge: "Local BC Service",
      icon: "banknotes",
      title: "Bank BC Services",
      subtitle: "Supported Customer Banking Services",
      shortDescription: "Banking assistance, Business Correspondent (BC) services, and supported customer banking assistance.",
      fullDescription: "Bringing doorstep customer banking assistance to Moktarpur, Raipur, and Domkal. Get assistance with basic banking inquiries, cash transactions, mini statements, and BC customer services through authorized digital financial networks.",
      whoNeedsIt: "Villagers, farmers, small traders, and seniors wanting fast, local banking transactions without travelling to far-off bank branches.",
      features: [
        "Banking assistance",
        "BC services",
        "Supported customer banking services",
        "Balance enquiry & statement support"
      ],
      documents: [
        "Valid identity document (Aadhaar Card / Voter ID)",
        "Bank / account details where required",
        "Registered mobile number",
        "Service-specific documents"
      ],
      importantNote: "Services are provided within authorized BC network capabilities. Bring original documents where applicable.",
      actionLabel: "View Details & Documents",
      isPopular: true
    },
    {
      id: "bill-payment",
      category: "bills",
      categoryName: "Bill Payment",
      badge: "Instant Receipts",
      icon: "receipt-percent",
      title: "Bill Payment",
      subtitle: "Electricity, Water & Utility Bills",
      shortDescription: "Payment of Electricity Bills, Water Bills, Supported Utility Bills, and other supported bill payment services with instant receipts.",
      fullDescription: "Pay your monthly utility bills on time with verified digital confirmation. We handle electricity bill payments (WBSEDCL and other supported boards), water bills, and municipal dues with instant printed confirmation.",
      whoNeedsIt: "Households and shop owners wanting to pay their monthly utility bills securely with printed confirmation.",
      features: [
        "Electricity Bill",
        "Water Bill",
        "Supported Utility Bills",
        "Other supported bill payment services"
      ],
      documents: [
        "Consumer Number / Consumer ID",
        "Account Number / Previous Bill copy",
        "Mobile Number where applicable"
      ],
      importantNote: "Please bring your recent bill or clearly noted Consumer ID. Instant receipts are provided upon successful payment.",
      actionLabel: "View Details & Documents",
      isPopular: true
    },
    {
      id: "mobile-recharge",
      category: "bills",
      categoryName: "Mobile & DTH Recharge",
      badge: "All Networks",
      icon: "device-phone-mobile",
      title: "Mobile Recharge",
      subtitle: "Prepaid Plans & Supported Mobile Services",
      shortDescription: "Prepaid mobile recharges for Jio, Airtel, Vi, BSNL, special unlimited combo packs, data top-ups, and DTH recharges.",
      fullDescription: "Fast, error-free prepaid mobile recharges across all telecom operators. We guide you to the latest talk-time, unlimited calling, high-speed data add-ons, and long-validity yearly plans, as well as DTH satellite dish recharges.",
      whoNeedsIt: "Subscribers needing quick prepaid top-ups or advice on best-value validity and data plans.",
      features: [
        "Prepaid Recharge",
        "Supported mobile services",
        "DTH satellite recharge",
        "Instant SMS confirmation"
      ],
      documents: [
        "Mobile Number (10 digits)",
        "Selected Recharge Plan",
        "Viewing Card / Subscriber ID (for DTH)"
      ],
      importantNote: "Verify your 10-digit mobile number carefully prior to plan recharge confirmation.",
      actionLabel: "View Details & Documents",
      isPopular: false
    },
    {
      id: "lpg-gas",
      category: "lpg",
      categoryName: "LPG Gas",
      badge: "Online Booking",
      icon: "fire",
      title: "LPG Gas Booking",
      subtitle: "LPG Booking Assistance",
      shortDescription: "LPG Booking Assistance and supported gas-related online services for Indane, HP, and Bharat Gas consumers.",
      fullDescription: "Get quick assistance booking your domestic LPG cylinder refill. We help verify your booking reference, check delivery status, and ensure your registered mobile number and LPG ID are correctly mapped.",
      whoNeedsIt: "Families and consumers seeking hassle-free cylinder refill bookings or booking status checks.",
      features: [
        "LPG Booking Assistance",
        "Supported gas-related online services",
        "Immediate booking confirmation code",
        "Guidance on digital receipt"
      ],
      documents: [
        "Consumer Number",
        "LPG ID (17-digit number)",
        "Registered Mobile Number"
      ],
      importantNote: "Bring your gas passbook or previous cash memo to quickly locate your 17-digit LPG ID.",
      actionLabel: "View Details & Documents",
      isPopular: false
    },
    {
      id: "online-application",
      category: "online",
      categoryName: "Online Forms",
      badge: "Govt & Education",
      icon: "document-text",
      title: "Online Form & Application",
      subtitle: "Government & Education Applications",
      shortDescription: "Government applications, education applications, scholarship applications, online forms, and status assistance.",
      fullDescription: "Accurate, professional assistance for all major online recruitment forms (police, defense, clerk, railways, teachers), state scholarships (Oasis, SVMCM, Aikyashree, National Scholarship), and college admission registrations.",
      whoNeedsIt: "Students, job seekers, and candidates who want their forms filled out accurately without technical rejections.",
      features: [
        "Government Applications",
        "Education Applications",
        "Scholarship Applications",
        "Online Forms",
        "Application Submission",
        "Application Status Assistance"
      ],
      documents: [
        "Aadhaar Card / Photo ID",
        "Academic marksheets & certificates",
        "Recent passport-sized photo & signature specimen",
        "Income / Caste / Domicile certificate where applicable",
        "Active Mobile Number and Email ID"
      ],
      importantNote: "Required documents vary by service and official advertisement notification. Please bring all original marksheets and certificates for accurate data entry.",
      actionLabel: "View Details & Documents",
      isPopular: true
    },
    {
      id: "printing-xerox",
      category: "printing",
      categoryName: "Printing & Xerox",
      badge: "Print • Xerox • Scan",
      icon: "printer",
      title: "Print • Xerox • Scan • Lamination",
      subtitle: "High Quality Document Preparation",
      shortDescription: "Printing, Photocopy / Xerox, Scanning, Lamination, and complete document preparation services.",
      fullDescription: "Equipped with high-speed digital copiers and color printers. We provide clean black & white and vivid color printouts from WhatsApp/Email/USB, duplicate xerox copies, document digitization to PDF, and durable lamination.",
      whoNeedsIt: "Students, legal document owners, applicants, and local residents needing clean, durable document processing.",
      features: [
        "Printing (Black & White and Color)",
        "Photocopy / Xerox",
        "Scanning to PDF / JPG",
        "Lamination for certificates and cards",
        "Document preparation"
      ],
      documents: [
        "Original documents for Xerox / Scan / Lamination",
        "Digital file (PDF / DOC / JPG) via WhatsApp or Pen Drive for Printing"
      ],
      importantNote: "High-grade paper and durable thermal lamination pouches used for lasting preservation.",
      actionLabel: "View Details & Documents",
      isPopular: false
    },
    {
      id: "computer-services",
      category: "other",
      categoryName: "Computer Services",
      badge: "Tech Assistance",
      icon: "computer-desktop",
      title: "Computer & Digital Services",
      subtitle: "Online Work & Document Upload",
      shortDescription: "Online work, PDF assistance, document upload, computer assistance, and everyday digital services.",
      fullDescription: "Comprehensive computer assistance for all everyday digital needs: merging or splitting PDF files, typing Bengali and English biodatas, resizing photos and documents for portals, email forwarding, and online paperwork.",
      whoNeedsIt: "Anyone needing hands-on help with computer tasks, document resizing, or digital paperwork.",
      features: [
        "Online Work",
        "PDF Assistance",
        "Document Upload",
        "Computer Assistance",
        "Digital Services"
      ],
      documents: [
        "Details or instructions for the required task",
        "Existing documents or rough drafts to be typed / uploaded"
      ],
      importantNote: "Hands-on operator guidance provided directly at our service desk.",
      actionLabel: "View Details & Documents",
      isPopular: false
    }
  ],

  // Internet, Broadband & Cable Network Details
  broadband: {
    title: "Internet, Broadband & Cable Network",
    tagline: "Fast Connectivity • Reliable Service • Local Support",
    description: "High-speed broadband internet and dependable cable network services for homes, shops, schools, and businesses in Moktarpur, Raipur, Domkal, and neighboring areas.",
    cards: [
      {
        id: "speed",
        icon: "bolt",
        title: "High-Speed Broadband",
        desc: "Ultra-fast optical fiber speeds for buffer-free 4K video streaming, online learning, and gaming."
      },
      {
        id: "new-conn",
        icon: "globe-alt",
        title: "New Internet Connection",
        desc: "Fast on-site installation and optical line routing directly to your home or shop in Domkal."
      },
      {
        id: "wifi",
        icon: "wifi",
        title: "Home Wi-Fi",
        desc: "High-performance dual-band wireless coverage eliminating dead spots throughout your house."
      },
      {
        id: "office",
        icon: "building-office",
        title: "Office Internet",
        desc: "Reliable, high-bandwidth connections built for business operations, cyber centres, and retail counters."
      },
      {
        id: "router",
        icon: "wrench-screwdriver",
        title: "Router Installation",
        desc: "Professional router setup, secure Wi-Fi password encryption, and multi-device network pairing."
      },
      {
        id: "trouble",
        icon: "cpu-chip",
        title: "Internet Troubleshooting",
        desc: "Prompt local on-site diagnostic support for speed issues, fiber link cuts, or configuration errors."
      },
      {
        id: "network",
        icon: "signal",
        title: "Network Support",
        desc: "Cabling, ethernet switch management, Wi-Fi range extension, and localized network maintenance."
      },
      {
        id: "cable",
        icon: "tv",
        title: "Cable Network",
        desc: "Stable digital cable TV connection with vibrant picture clarity across regional and national channels."
      },
      {
        id: "home-conn",
        icon: "home",
        title: "Home Connectivity",
        desc: "Tailored, budget-friendly broadband packages designed for daily domestic family entertainment."
      },
      {
        id: "biz-conn",
        icon: "briefcase",
        title: "Business Connectivity",
        desc: "Symmetric upload/download bandwidth and dedicated local support for commercial businesses."
      }
    ]
  },

  // Interactive Document Centre Categories
  documentCategories: [
    { id: "all", label: "All Services" },
    { id: "ayushman", label: "Ayushman Bharat" },
    { id: "pan", label: "PAN Card" },
    { id: "banking", label: "Bank BC" },
    { id: "bills", label: "Bill Payment" },
    { id: "lpg", label: "LPG Gas" },
    { id: "online", label: "Online Forms" },
    { id: "printing", label: "Printing & Xerox" },
    { id: "other", label: "Other Digital Services" }
  ],

  // Why Choose JANNAT ENTERPRISE Points
  whyChooseUs: [
    {
      icon: "squares-plus",
      title: "Multiple Services Under One Roof",
      titleBn: "সব পরিষেবা এক ছাদের নিচে",
      desc: "Save your time and travel expenses by getting CSC services, internet broadband, banking, and printing in one convenient place."
    },
    {
      icon: "shield-check",
      title: "CSC & Digital Services",
      titleBn: "অনুমোদিত CSC VLE সেবা",
      desc: "Operated with active CSC ID: 222365420014, delivering authentic digital citizen assistance according to official guidelines."
    },
    {
      icon: "academic-cap",
      title: "Ayushman BIS e-KYC Assistance",
      titleBn: "দক্ষ BIS অপারেটর সহায়তা",
      desc: "Trained operator support for beneficiary identification, biometric checks, and Ayushman PM-JAY e-KYC applications."
    },
    {
      icon: "banknotes",
      title: "Banking & Bill Payment Support",
      titleBn: "সহজ ব্যাঙ্কিং ও বিল পেমেন্ট",
      desc: "Doorstep BC banking support and instant utility bill payments with verified digital printed receipts."
    },
    {
      icon: "id-card",
      title: "PAN Services through CSC",
      titleBn: "নির্ভুল প্যান কার্ড আবেদন",
      desc: "Careful application assistance for new PAN generation and corrections with complete document verification."
    },
    {
      icon: "wifi",
      title: "Internet & Broadband Services",
      titleBn: "হাই-স্পিড ব্রডব্যান্ড ইন্টারনেট",
      desc: "High-speed optical fiber connectivity with swift local installation and on-call troubleshooting support."
    },
    {
      icon: "tv",
      title: "Cable Network Support",
      titleBn: "ক্লিয়ার কেবল নেটওয়ার্ক সংযোগ",
      desc: "Reliable television cable connection with top regional entertainment and news channels."
    },
    {
      icon: "user-group",
      title: "Local Customer Assistance",
      titleBn: "স্থানীয় আন্তরিক গ্রাহক সেবা",
      desc: "Clear Bengali communication, polite guidance, and honest advice for every resident of Moktarpur, Domkal and surrounding areas."
    },
    {
      icon: "map-pin",
      title: "Convenient Service Centre",
      titleBn: "সহজ যাতায়াত ও কেন্দ্রীয় অবস্থান",
      desc: "Centrally located at Moktarpur, Raipur, Domkal with prompt response by phone and WhatsApp."
    }
  ],

  // How It Works Steps
  howItWorks: [
    {
      step: "01",
      title: "Choose Your Service",
      titleBn: "আপনার প্রয়োজনীয় পরিষেবা বাছুন",
      desc: "Browse our complete catalog of CSC citizen services, banking assistance, bill payments, or broadband connectivity."
    },
    {
      step: "02",
      title: "Check Required Documents",
      titleBn: "প্রয়োজনীয় Documents দেখে নিন",
      desc: "Check our interactive Documents Centre or message us on WhatsApp to confirm the exact original papers needed."
    },
    {
      step: "03",
      title: "Visit / Call / WhatsApp JANNAT ENTERPRISE",
      titleBn: "যোগাযোগ করুন বা সেন্টারে আসুন",
      desc: "Call 8918273721 or visit our Moktarpur centre to get your work completed accurately and quickly."
    }
  ],

  // Legal & Operational Disclaimer
  disclaimer: "Services are provided according to applicable rules, authorization, eligibility and service availability. Government and third-party services are subject to their respective policies and requirements. JANNAT ENTERPRISE is an independent local digital service centre and CSC-linked operator (CSC ID: 222365420014) and is not a government department."
};

// Universal export for browser window, globalThis, and Node.js testing environments
if (typeof window !== "undefined") {
  window.JANNAT_CONFIG = JANNAT_CONFIG;
}
if (typeof globalThis !== "undefined") {
  globalThis.JANNAT_CONFIG = JANNAT_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = JANNAT_CONFIG;
}
