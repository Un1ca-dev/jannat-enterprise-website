/**
 * JANNAT ENTERPRISE - Central Business Configuration
 * Complete Service Directory, Authenticity Credentials & Contact Settings
 */

const JANNAT_CONFIG = {
  // Business Core Information
  businessName: "JANNAT ENTERPRISE",
  shortName: "JE",
  ownerName: "SUMAN SHEIKH",
  siteUrl: "https://jannat.un1ca.qzz.io",
  tagline: "Your One-Stop Digital Service & Technology Centre",
  bengaliTagline: "সব ডিজিটাল পরিষেবা, এক ছাদের নিচে",
  subTagline: "CSC Services • Ayushman Bharat BIS • Bank BC • PAN Services • Bill Payment • Internet & Broadband • Mobile Repair",
  
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
  
  // Official Google Maps Link & Coordinates
  googleMapsUrl: "https://maps.app.goo.gl/zQPQ9THg9YLAYM4r6",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=24.0970147,88.6150643+(JANNAT+ENTERPRISE)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
  geo: {
    latitude: 24.0970147,
    longitude: 88.6150643
  },
  
  // Business Opening Hours
  businessHours: {
    display: "Monday – Sunday: 9:00 AM – 8:00 PM",
    days: "Monday to Sunday",
    openHour: 9,
    openMinute: 0,
    closeHour: 20,
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

  // 7 Structured Service Categories
  categories: [
    { id: "all", label: "All Services (সব পরিষেবা)", icon: "squares-2x2" },
    { id: "health-govt", label: "🏥 Health & Government", icon: "shield-check" },
    { id: "identity-doc", label: "🪪 Identity & Documentation", icon: "id-card" },
    { id: "banking-finance", label: "🏦 Banking & Finance", icon: "banknotes" },
    { id: "payments-recharge", label: "💳 Payments & Recharge", icon: "receipt-percent" },
    { id: "digital-computer", label: "💻 Digital & Computer", icon: "computer-desktop" },
    { id: "mobile-repair", label: "📱 Mobile & Repair", icon: "device-phone-mobile" },
    { id: "internet-broadband", label: "🌐 Internet & Connectivity", icon: "wifi" }
  ],

  // Axis Bank BC Configuration Toggle
  axisBankBc: {
    enabled: true,
    title: "Axis Bank BC Services",
    badge: "Authorized BC Point",
    roleNote: "Subject to active BC authorization and operational network status."
  },

  // Complete Comprehensive Service Catalog (22 Services)
  services: [
    // -----------------------------------------------------------------------
    // Category 1: Health & Government (🏥)
    // -----------------------------------------------------------------------
    {
      id: "ayushman-pmjay",
      category: "health-govt",
      categoryName: "Health & Government",
      badge: "BIS Operator Service",
      icon: "shield-check",
      title: "Ayushman Bharat PM-JAY",
      subtitle: "BIS e-KYC Service",
      shortDescription: "Assistance with Ayushman Bharat PM-JAY BIS e-KYC through available CSC/BIS operator service for eligible beneficiaries.",
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
        "Active Mobile Number linked with Aadhaar for OTP",
        "Existing PM-JAY letter or HHID if available"
      ],
      importantNote: "Required documents may vary depending on beneficiary eligibility and service requirements. Bring original documents where applicable.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "csc-digital",
      category: "health-govt",
      categoryName: "Health & Government",
      badge: "CSC Service",
      icon: "cpu-chip",
      title: "CSC Digital Services",
      subtitle: "Citizen & Digital Services",
      shortDescription: "Various citizen and digital services available through CSC.",
      fullDescription: "As an active Common Services Centre (CSC ID: 222365420014), we provide rural and local citizens with access to online citizen services, digital applications, registrations, and official CSC-supported initiatives.",
      whoNeedsIt: "Citizens needing access to digital services, central & state government online citizen portals, and certificate applications.",
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
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "ration-card",
      category: "health-govt",
      categoryName: "Health & Government",
      badge: "Food & Supplies",
      icon: "document-text",
      title: "Ration Card Services",
      subtitle: "New Application, Transfer & Correction",
      shortDescription: "Assistance with new Digital Ration Card applications, family member addition, transfer, correction, and online e-Ration status.",
      fullDescription: "Complete online assistance for Digital Ration Card services through official state food and supplies portals. We assist with form filling for new ration cards (Form 3/4), name and address corrections (Form 5), card surrender/transfer (Form 6/7), and Aadhaar-Ration linking (e-KYC).",
      whoNeedsIt: "Families and individuals requiring fresh ration cards, correction in spelling/address, card shifting after marriage, or Aadhaar seeding.",
      features: [
        "New Ration Card Application",
        "Ration Card Transfer",
        "Ration Card Correction (Name, Age, Address)",
        "Ration Card-related online assistance"
      ],
      documents: [
        "Existing Ration Card (where applicable)",
        "Aadhaar Card / Valid ID of all family members",
        "Address-related documents where applicable (Electricity bill, Voter ID)",
        "Registered Mobile Number for OTP verification",
        "Service-specific documents (e.g. Marriage certificate for transfer)"
      ],
      importantNote: "Requirements may vary depending on service, eligibility and applicable departmental rules. Bring original documents where applicable.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "pm-kisan",
      category: "health-govt",
      categoryName: "Health & Government",
      badge: "Agriculture",
      icon: "academic-cap",
      title: "PM-KISAN Samman Nidhi",
      subtitle: "Registration, e-KYC & Status Support",
      shortDescription: "Assistance for PM-KISAN farmer registrations, biometric e-KYC, land record updates, and installment payment status checks.",
      fullDescription: "Guidance for eligible small and marginal farmer families seeking assistance with Pradhan Mantri Kisan Samman Nidhi (PM-KISAN). We help with online new farmer registration, mandatory biometric/OTP e-KYC, bank account-NPCI linking verification, and status tracking.",
      whoNeedsIt: "Eligible landholder farmers seeking installment benefits or needing mandatory e-KYC authentication.",
      features: [
        "PM-KISAN application assistance",
        "Registration & profile update assistance",
        "Biometric & OTP e-KYC verification",
        "Status / application assistance where available"
      ],
      documents: [
        "Aadhaar Card of the applicant farmer",
        "Farmer details & Passport size photograph",
        "Land-related records / Khatian / Parcha where applicable",
        "Active Bank Account details (Passbook copy)",
        "Aadhaar-linked Mobile Number"
      ],
      importantNote: "Eligibility and required documents are subject to applicable PM-KISAN departmental rules. Government approval is determined by competent authorities.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "pmfby-crop-insurance",
      category: "health-govt",
      categoryName: "Health & Government",
      badge: "Crop Protection",
      icon: "shield-check",
      title: "PMFBY Crop Insurance",
      subtitle: "Pradhan Mantri Fasal Bima Yojana",
      shortDescription: "Assistance with seasonal crop insurance applications, sowing declarations, and policy status support for farmers.",
      fullDescription: "Assistance for loanee and non-loanee farmers applying for crop insurance under Pradhan Mantri Fasal Bima Yojana (PMFBY) or state-sponsored crop insurance programs. We help submit sowing certificates, crop area details, and verify enrollment receipts.",
      whoNeedsIt: "Farmers cultivating seasonal crops who wish to safeguard agricultural investments against natural calamities and pest attacks.",
      features: [
        "Crop insurance application assistance",
        "Online application & declaration support",
        "Premium calculation & receipt printing",
        "Status & policy support where available"
      ],
      documents: [
        "Farmer details & Identity Proof (Aadhaar / Voter ID)",
        "Land records / RoR / Khatian / Parcha or tenancy agreement",
        "Sowing certificate / Crop details from local agriculture office/Panchayat",
        "Bank Account details / Passbook with IFSC",
        "Registered Mobile Number"
      ],
      importantNote: "Service provides application assistance only. Does not guarantee claim approval or insurance coverage; approvals depend strictly on insurance company guidelines and government assessment.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },

    // -----------------------------------------------------------------------
    // Category 2: Identity & Documentation (🪪)
    // -----------------------------------------------------------------------
    {
      id: "pan-card",
      category: "identity-doc",
      categoryName: "Identity & Documents",
      badge: "Through CSC",
      icon: "id-card",
      title: "PAN Card Services through CSC",
      subtitle: "New PAN, Correction & Reprint",
      shortDescription: "New PAN application, PAN-related assistance, correction/update, and status tracking through authorized CSC portals.",
      fullDescription: "Complete operator guidance for obtaining a Permanent Account Number (PAN) through authorized CSC portals. We assist with digital form submission, biometric/OTP authentication, photo and signature upload, and physical document tracking.",
      whoNeedsIt: "Individuals needing a fresh PAN card for banking, tax compliance, official identification, or students opening scholarship accounts.",
      features: [
        "New PAN application",
        "PAN-related correction assistance",
        "Biometric / OTP application filling",
        "Status assistance where available"
      ],
      documents: [
        "Proof of Identity (e.g. Aadhaar Card, Voter ID)",
        "Proof of Address (e.g. Aadhaar, Electricity Bill, Bank Passbook)",
        "Proof of Date of Birth (e.g. Aadhaar, Birth Certificate, School Admit)",
        "Active Mobile Number and Email ID",
        "Applicant photo and signature where applicable"
      ],
      importantNote: "Required documents may vary depending on application type and applicable rules. Bring original documents where applicable.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "passport-seva",
      category: "identity-doc",
      categoryName: "Identity & Documents",
      badge: "Online Assistance",
      icon: "globe-alt",
      title: "Passport Seva Assistance",
      subtitle: "Fresh Passport, Re-issue & Appointment",
      shortDescription: "Online passport application assistance, document verification guidance, appointment scheduling at PSK/POPSK, and status tracking.",
      fullDescription: "Careful guidance for submitting online applications on the official Passport Seva portal. We assist with form filling for fresh passports, re-issue, Tatkaal scheduling, fee payment, and choosing suitable appointment slots at nearby Passport Seva Kendras (PSK / POPSK).",
      whoNeedsIt: "Citizens, students, and travelers applying for a new passport or renewing an expired passport.",
      features: [
        "Passport application assistance",
        "Online form assistance & document upload",
        "Appointment & fee payment assistance",
        "Status-related assistance where available"
      ],
      documents: [
        "Proof of Identity (Aadhaar Card, Voter ID, PAN Card)",
        "Proof of Address (Aadhaar, Electricity Bill, Bank Passbook with stamp)",
        "Proof of Date of Birth (Birth Certificate, School Leaving Certificate, Admit Card)",
        "Standard 10th / Secondary mark sheet (for ECNR status)",
        "Existing Passport copy (for re-issue / renewal applications)"
      ],
      importantNote: "JANNAT ENTERPRISE is an online service facilitator and is NOT a government Passport Office. Final issuance and police verification are subject to Ministry of External Affairs rules.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "driving-licence",
      category: "identity-doc",
      categoryName: "Identity & Documents",
      badge: "Transport Services",
      icon: "truck",
      title: "Driving Licence Services",
      subtitle: "Learner Licence, DL Renewal & Update",
      shortDescription: "Online assistance for Learner Licence applications, DL test slot booking, driving licence renewal, address change, and duplicate DL.",
      fullDescription: "Convenient online assistance for Parivahan / Sarathi transport services. We help applicants submit Learner Licence applications, upload medical certificates (Form 1A), schedule driving test appointments at the local RTO, and apply for licence renewals or duplicate cards.",
      whoNeedsIt: "New drivers applying for a Learner Licence, vehicle owners needing DL renewal, or individuals updating address/phone on their licence.",
      features: [
        "New Driving Licence application assistance",
        "Learner Licence assistance & online mock test guidance",
        "Renewal & duplicate DL assistance",
        "Correction / update assistance (Address, Name)"
      ],
      documents: [
        "Identity Proof (Aadhaar Card, Voter ID, PAN Card)",
        "Address Proof (Aadhaar, Electricity Bill, Ration Card)",
        "Date of Birth Proof (School Admit Card, Birth Certificate, Aadhaar)",
        "Existing Licence details (for renewal, endorsement, or duplicate)",
        "Blood Group report and recent passport-sized photos"
      ],
      importantNote: "JANNAT ENTERPRISE is a digital facilitator and is NOT a government RTO office. Driving tests, fitness certificates, and licence approvals are conducted by the competent transport authority.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "pvc-card-printing",
      category: "identity-doc",
      categoryName: "Identity & Documents",
      badge: "Durable Cards",
      icon: "credit-card",
      title: "PVC Card & Digital Card Printing",
      subtitle: "High Definition Thermal Plastic Cards",
      shortDescription: "High-grade PVC plastic card printing for supported identity cards, health cards, student cards, and utility cards.",
      fullDescription: "Convert your paper certificates and digital cards into water-proof, pocket-sized, long-lasting PVC plastic cards. Equipped with modern thermal card printers producing crisp text, vibrant colors, and durable lamination for everyday use.",
      whoNeedsIt: "Anyone wanting a durable, wallet-friendly PVC version of their authorized digital identity, health card, or student ID.",
      features: [
        "PVC card printing (waterproof & scratch-resistant)",
        "Digital card printing & formatting",
        "Supported ID & utility card printing",
        "Card customization where legally appropriate"
      ],
      documents: [
        "Official digital card PDF / soft copy downloaded from authorized portal",
        "Identity verification of cardholder prior to printing"
      ],
      importantNote: "Printing is performed strictly from valid citizen soft copies. JANNAT ENTERPRISE does NOT fabricate or reproduce restricted government cards in a misleading manner.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },

    // -----------------------------------------------------------------------
    // Category 3: Banking & Finance (🏦)
    // -----------------------------------------------------------------------
    {
      id: "bank-bc",
      category: "banking-finance",
      categoryName: "Banking & Finance",
      badge: "Local BC Service",
      icon: "banknotes",
      title: "Bank BC Services",
      subtitle: "Doorstep Customer Banking Assistance",
      shortDescription: "Banking assistance, Business Correspondent (BC) services, and supported customer banking micro-transactions.",
      fullDescription: "Bringing doorstep customer banking assistance to Moktarpur, Raipur, and Domkal. Get assistance with basic banking inquiries, cash deposits/withdrawals, mini statements, and BC customer services through authorized digital financial networks.",
      whoNeedsIt: "Villagers, farmers, small traders, and seniors wanting fast, local banking transactions without traveling to distant bank branches.",
      features: [
        "Customer banking assistance",
        "BC services & account inquiries",
        "Cash deposit & withdrawal assistance",
        "Balance enquiry & mini statement guidance"
      ],
      documents: [
        "Valid identity document (Aadhaar Card / Voter ID)",
        "Bank / account details where required (Passbook)",
        "Registered mobile number linked with bank",
        "Service-specific documents"
      ],
      importantNote: "Services are provided within authorized BC network capabilities and system availability. Bring original documents where applicable.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "axis-bank-bc",
      category: "banking-finance",
      categoryName: "Banking & Finance",
      badge: "Axis Bank Point",
      icon: "building-library",
      title: "Axis Bank BC Services",
      subtitle: "Supported Axis Bank Customer Services",
      shortDescription: "Authorized BC services, customer banking support, and supported banking transactions through Axis Bank BC integration.",
      fullDescription: "Assistance with supported customer banking services as an authorized Business Correspondent point for Axis Bank. We assist with customer inquiries, account-related transactions, balance inquiries, and authorized BC channel operations.",
      whoNeedsIt: "Local residents and Axis Bank account holders seeking neighborhood banking assistance.",
      features: [
        "Banking assistance & transactions",
        "BC services through Axis Bank network",
        "Customer service support & guidance",
        "Supported banking transactions & receipts"
      ],
      documents: [
        "Valid KYC document (Aadhaar Card / PAN Card)",
        "Axis Bank account number / debit card / passbook where applicable",
        "Registered mobile number for SMS OTP",
        "Service-specific transaction details"
      ],
      importantNote: "Axis Bank BC services are provided strictly in accordance with active BC authorization and operational gateway availability. Not an independent bank branch.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "new-bank-account",
      category: "banking-finance",
      categoryName: "Banking & Finance",
      badge: "Account Opening",
      icon: "building-library",
      title: "New Bank Account Opening",
      subtitle: "Savings & Zero Balance Accounts",
      shortDescription: "Online assistance for opening new savings bank accounts and zero-balance accounts with supported partner banks.",
      fullDescription: "Get complete digital assistance opening a new savings bank account with supported banking institutions. We assist applicants with digital KYC verification, biometric authentication, video KYC preparation, and submitting account opening requests.",
      whoNeedsIt: "Students opening scholarship accounts, rural citizens opening their first bank account, and small business owners.",
      features: [
        "Supported bank account opening assistance",
        "Digital & Biometric KYC assistance",
        "Online application assistance & document verification",
        "Debit card & net banking request guidance"
      ],
      documents: [
        "Aadhaar Card (linked with active mobile number for OTP)",
        "PAN Card (or Form 60 where applicable)",
        "Active personal Mobile Number",
        "Passport size colour photograph",
        "Other bank-specific KYC documents where required"
      ],
      importantNote: "Does NOT claim every bank is available. Account opening is subject to bank-specific KYC guidelines, verification, and approval by the respective bank.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "loan-services",
      category: "banking-finance",
      categoryName: "Banking & Finance",
      badge: "Application Support",
      icon: "currency-rupee",
      title: "Loan Application Assistance",
      subtitle: "Personal, Business & Farmer Loans",
      shortDescription: "Guidance and online application assistance for government schemes (PMEGP, Mudra, KCC) and partner digital lenders.",
      fullDescription: "Assistance with filling out online loan applications and uploading required documentation for government subsidized loan schemes (such as Mudra, PMEGP, Stand-Up India, Kisan Credit Card) and supported digital financial partners.",
      whoNeedsIt: "Entrepreneurs, shopkeepers, self-help groups, and farmers seeking assistance with formal loan paperwork and digital portals.",
      features: [
        "Online loan application assistance",
        "Document upload & PDF compression assistance",
        "Project report / basic paperwork guidance",
        "Application / status assistance where supported"
      ],
      documents: [
        "Valid KYC (Aadhaar Card, PAN Card, Voter ID)",
        "Address proof (Electricity bill, Trade Licence)",
        "Income / employment / trade documents (ITR, GST, or income certificate)",
        "Bank account statement (last 6 months)",
        "Other lender-specific documents"
      ],
      importantNote: "JANNAT ENTERPRISE provides application and document upload assistance only. We DO NOT promise or guarantee loan approval; all credit decisions rest exclusively with the lending institution.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "credit-card-services",
      category: "banking-finance",
      categoryName: "Banking & Finance",
      badge: "Card Application",
      icon: "credit-card",
      title: "Credit Card Application Assistance",
      subtitle: "Online Application & KYC Support",
      shortDescription: "Assistance with online credit card applications, eligibility checking guidance, and digital KYC documentation for major banks.",
      fullDescription: "Help navigating online credit card portals for supported banks. We guide applicants through accurate personal detail submission, employment verification document uploads, and tracking application progress.",
      whoNeedsIt: "Salaried individuals and self-employed professionals wanting help applying for a credit card online.",
      features: [
        "Online credit card application assistance",
        "KYC & document upload assistance",
        "Basic eligibility criteria checking",
        "Application status assistance where available"
      ],
      documents: [
        "PAN Card (mandatory)",
        "Aadhaar Card / Valid Identity & Address proof",
        "Income Proof (Salary slips, Form 16, or ITR acknowledgment)",
        "Bank account statement",
        "Active mobile number linked with Aadhaar"
      ],
      importantNote: "Credit card approval, credit limit, and issuance are strictly determined by the respective card issuing bank based on credit score (CIBIL) and policies. No approval guarantees.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "insurance-services",
      category: "banking-finance",
      categoryName: "Banking & Finance",
      badge: "Life & General",
      icon: "shield-check",
      title: "Insurance Services",
      subtitle: "Life, Health, Motor & Shop Insurance",
      shortDescription: "Online assistance for motor vehicle third-party/comprehensive insurance, life micro-insurance, and health policies.",
      fullDescription: "Assistance with browsing, applying for, and renewing insurance policies through authorized CSC insurance portals and digital aggregator platforms. We help with two-wheeler/four-wheeler insurance, PMJJBY, PMSBY, and basic term protection.",
      whoNeedsIt: "Vehicle owners needing immediate insurance renewals, families seeking affordable life micro-insurance, and shop owners.",
      features: [
        "Insurance application assistance",
        "Motor insurance (Bike / Car / Commercial) renewal",
        "Government micro-insurance (PMSBY, PMJJBY) guidance",
        "Policy download & printout support"
      ],
      documents: [
        "Vehicle RC (Registration Certificate) for motor insurance",
        "Previous insurance policy copy (if renewing)",
        "Aadhaar Card & PAN Card for life/health insurance",
        "Nominee details and bank account information"
      ],
      importantNote: "Insurance availability, eligibility, premium, and documentation depend on the selected product and authorized underwriter. Claims are settled directly by insurers.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },

    // -----------------------------------------------------------------------
    // Category 4: Payments & Recharge (💳)
    // -----------------------------------------------------------------------
    {
      id: "bill-payment",
      category: "payments-recharge",
      categoryName: "Payments & Recharge",
      badge: "Instant Receipts",
      icon: "receipt-percent",
      title: "Bill Payment",
      subtitle: "Electricity, Water & Utility Bills",
      shortDescription: "Payment of Electricity Bills (WBSEDCL), Water Bills, Utility Bills, and other supported bills with instant receipts.",
      fullDescription: "Pay your monthly utility bills on time with verified digital confirmation. We handle electricity bill payments (WBSEDCL and other supported boards), water bills, and municipal dues with instant printed confirmation.",
      whoNeedsIt: "Households and shop owners wanting to pay their monthly utility bills securely with printed confirmation.",
      features: [
        "Electricity Bill (WBSEDCL & more)",
        "Water Bill & Municipal charges",
        "Instant printed / digital receipts",
        "Supported utility bill payment services"
      ],
      documents: [
        "Consumer Number / Consumer ID",
        "Account Number / Previous Bill copy",
        "Mobile Number where applicable"
      ],
      importantNote: "Please bring your recent bill or clearly noted Consumer ID. Instant receipts are provided upon successful payment.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "mobile-recharge",
      category: "payments-recharge",
      categoryName: "Payments & Recharge",
      badge: "All Networks",
      icon: "device-phone-mobile",
      title: "Mobile Recharge",
      subtitle: "Prepaid Plans & Supported Mobile Services",
      shortDescription: "Prepaid mobile recharges for Jio, Airtel, Vi, BSNL, special unlimited combo packs, data top-ups, and DTH recharges.",
      fullDescription: "Fast, error-free prepaid mobile recharges across all telecom operators. We guide you to the latest talk-time, unlimited calling, high-speed data add-ons, and long-validity yearly plans, as well as DTH satellite dish recharges.",
      whoNeedsIt: "Subscribers needing quick prepaid top-ups or advice on best-value validity and data plans.",
      features: [
        "Prepaid Recharge for all networks",
        "Supported mobile services & data packs",
        "DTH satellite dish recharge",
        "Instant SMS confirmation"
      ],
      documents: [
        "Mobile Number (10 digits)",
        "Selected Recharge Plan",
        "Viewing Card / Subscriber ID (for DTH)"
      ],
      importantNote: "Verify your 10-digit mobile number carefully prior to plan recharge confirmation.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "lpg-gas",
      category: "payments-recharge",
      categoryName: "Payments & Recharge",
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
      actionLabel: "📋 Required Documents",
      isPopular: false
    },

    // -----------------------------------------------------------------------
    // Category 5: Digital & Computer (💻)
    // -----------------------------------------------------------------------
    {
      id: "online-application",
      category: "digital-computer",
      categoryName: "Digital & Computer",
      badge: "Govt & Education",
      icon: "document-text",
      title: "Online Form & Application",
      subtitle: "Govt Jobs, Scholarships & Admissions",
      shortDescription: "Government applications, education applications, scholarship applications, online forms, and status assistance.",
      fullDescription: "Accurate, professional assistance for all major online recruitment forms (police, defense, clerk, railways, teachers), state scholarships (Oasis, SVMCM, Aikyashree, National Scholarship), and college admission registrations.",
      whoNeedsIt: "Students, job seekers, and candidates who want their forms filled out accurately without technical rejections.",
      features: [
        "Government Applications",
        "Education Applications",
        "Scholarship Applications (Oasis, SVMCM)",
        "Online Forms & Status Assistance"
      ],
      documents: [
        "Aadhaar Card / Photo ID",
        "Academic marksheets & certificates",
        "Recent passport-sized photo & signature specimen",
        "Income / Caste / Domicile certificate where applicable",
        "Active Mobile Number and Email ID"
      ],
      importantNote: "Required documents vary by specific notification. Please bring all original marksheets and certificates for accurate data entry.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "printing-xerox",
      category: "digital-computer",
      categoryName: "Digital & Computer",
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
        "Lamination for certificates and cards"
      ],
      documents: [
        "Original documents for Xerox / Scan / Lamination",
        "Digital file (PDF / DOC / JPG) via WhatsApp or Pen Drive for Printing"
      ],
      importantNote: "High-grade paper and durable thermal lamination pouches used for lasting preservation.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "computer-services",
      category: "digital-computer",
      categoryName: "Digital & Computer",
      badge: "Tech Assistance",
      icon: "computer-desktop",
      title: "Computer & Digital Services",
      subtitle: "Online Work, PDF & Digital Assistance",
      shortDescription: "Online work, PDF assistance, document upload, computer assistance, and everyday digital services.",
      fullDescription: "Comprehensive computer assistance for all everyday digital needs: merging or splitting PDF files, typing Bengali and English biodatas, resizing photos and documents for portals, email forwarding, and online paperwork.",
      whoNeedsIt: "Anyone needing hands-on help with computer tasks, document resizing, or digital paperwork.",
      features: [
        "Online Work & Typing",
        "PDF Assistance & Compression",
        "Document Upload for Govt Portals",
        "Computer Assistance & Biodata"
      ],
      documents: [
        "Details or instructions for the required task",
        "Existing documents or rough drafts to be typed / uploaded"
      ],
      importantNote: "Hands-on operator guidance provided directly at our service desk.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },

    // -----------------------------------------------------------------------
    // Category 6: Mobile & Repair (📱)
    // -----------------------------------------------------------------------
    {
      id: "mobile-repair-hardware",
      category: "mobile-repair",
      categoryName: "Mobile & Repair",
      badge: "Hardware Care",
      icon: "wrench-screwdriver",
      title: "Mobile Repair & Hardware Diagnosis",
      subtitle: "Smartphone Screen, Battery & Hardware Check",
      shortDescription: "Expert diagnosis of hardware issues, charging port fixes, broken screen replacement guidance, and basic hardware repair.",
      fullDescription: "Reliable local assistance for malfunctioning smartphones and mobile devices. We perform preliminary hardware fault diagnostics, battery health assessments, charging connector cleaning/replacement guidance, and general device maintenance.",
      whoNeedsIt: "Customers with smartphones suffering from battery drain, broken screens, loose charging sockets, or speaker/mic problems.",
      features: [
        "Mobile repair & hardware issue diagnosis",
        "Screen & touch display replacement guidance",
        "Charging port & battery issue diagnosis",
        "General mobile maintenance & cleaning"
      ],
      documents: [
        "Mobile device with battery/charger",
        "Description of the issue or malfunction",
        "Device unlock pattern or PIN for diagnostic testing"
      ],
      importantNote: "Hardware repairs are performed based on part availability and initial inspection. We do not promise data recovery unless explicitly agreed upon.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "mobile-software-services",
      category: "mobile-repair",
      categoryName: "Mobile & Repair",
      badge: "Software & OS",
      icon: "device-phone-mobile",
      title: "Mobile Software & Troubleshooting",
      subtitle: "Software Update, Reset & App Setup",
      shortDescription: "Mobile software troubleshooting, official OS updates, safe factory reset, Google/Mi account recovery, and app setup.",
      fullDescription: "Professional software support for Android smartphones. We assist users with hanging or freezing issues, clean software re-installation, removing unwanted adware/bloatware, setting up banking/UPI apps securely, and transferring contacts safely.",
      whoNeedsIt: "Users experiencing phone slowdown, storage full warnings, app crashes, or setting up a brand new smartphone.",
      features: [
        "Mobile software troubleshooting & bug fixes",
        "Official software & security updates",
        "Factory reset assistance & safe setup",
        "Device setup & essential app configuration"
      ],
      documents: [
        "Mobile phone with sufficient battery charge (50%+)",
        "Google Account / Apple ID login credentials where needed",
        "Existing backup or backup instructions"
      ],
      importantNote: "Customers are advised that factory reset will erase device memory. Backup assistance is available upon request.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },
    {
      id: "smartphone-troubleshooting",
      category: "mobile-repair",
      categoryName: "Mobile & Repair",
      badge: "Diagnosis & Setup",
      icon: "cpu-chip",
      title: "Smartphone Troubleshooting",
      subtitle: "Device Setup, App Issues & Maintenance",
      shortDescription: "Basic smartphone troubleshooting, app error fixes, device setup, storage optimization, and general maintenance.",
      fullDescription: "Everyday assistance for smartphone users. We help diagnose device performance issues, resolve app crashes, configure email/accounts, organize device storage, and provide honest maintenance advice for smooth daily operation.",
      whoNeedsIt: "Anyone needing quick assistance resolving smartphone glitches, configuring new apps, or optimizing phone performance.",
      features: [
        "Basic smartphone troubleshooting",
        "App & software troubleshooting",
        "Device setup & account configuration",
        "General maintenance & cleaning advice"
      ],
      documents: [
        "Smartphone device with charger",
        "Account credentials where setup is requested"
      ],
      importantNote: "Requirements may vary depending on service, eligibility and applicable rules. We do not promise data recovery unless explicitly evaluated.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    },

    // -----------------------------------------------------------------------
    // Category 7: Internet & Connectivity (🌐)
    // -----------------------------------------------------------------------
    {
      id: "broadband-internet",
      category: "internet-broadband",
      categoryName: "Internet & Connectivity",
      badge: "Fiber Broadband",
      icon: "wifi",
      title: "High-Speed Broadband Internet",
      subtitle: "Optical Fiber Connection for Home & Office",
      shortDescription: "Ultra-fast optical fiber broadband internet connection with fast local installation, Wi-Fi router setup, and on-call maintenance.",
      fullDescription: "High-speed broadband internet and dependable cable network services for homes, shops, schools, and offices in Moktarpur, Raipur, Domkal, and neighboring areas. Enjoy buffer-free video calling, online education, and fast downloads with dedicated local customer support.",
      whoNeedsIt: "Households, students, commercial businesses, and CSC/cyber centres needing fast, reliable internet connectivity.",
      features: [
        "High-Speed Optical Fiber Broadband",
        "New Internet Connection setup in Domkal",
        "Home Wi-Fi & Office Internet coverage",
        "Router Installation & Internet Troubleshooting"
      ],
      documents: [
        "Identity Proof (Aadhaar Card / Voter ID) of applicant",
        "Address Proof of the installation premises",
        "Active Contact Mobile Number"
      ],
      importantNote: "Line feasibility and setup time depend on optical cable proximity to your building. Local technician support provided.",
      actionLabel: "📋 Required Documents",
      isPopular: true
    },
    {
      id: "cable-network-service",
      category: "internet-broadband",
      categoryName: "Internet & Connectivity",
      badge: "Digital Cable TV",
      icon: "tv",
      title: "Cable Network Services",
      subtitle: "Crystal-Clear Television Transmission",
      shortDescription: "Dependable cable TV connectivity with vibrant picture quality across all major regional, national, sports, and entertainment channels.",
      fullDescription: "Reliable television cable services with wide channel coverage for domestic households and commercial points. Quick new connection wiring, set-top box troubleshooting, and monthly subscription support.",
      whoNeedsIt: "Families and shopkeepers wanting stable, clear television cable connections with local on-call service.",
      features: [
        "Cable Network TV connection",
        "Popular Bengali, Sports, News & Hindi channels",
        "Fast local line maintenance & repair",
        "Home & commercial connectivity support"
      ],
      documents: [
        "Premises Address where connection is required",
        "Contact Phone Number"
      ],
      importantNote: "Available in supported distribution sectors in Moktarpur, Raipur, Domkal.",
      actionLabel: "📋 Required Documents",
      isPopular: false
    }
  ],

  // Internet, Broadband & Cable Network Cards
  broadband: {
    title: "Internet, Broadband & Cable Network",
    tagline: "Fast Connectivity • Reliable Service • Local Support",
    description: "High-speed broadband internet and dependable cable network services for homes, shops, schools, and businesses in Moktarpur, Raipur, Domkal, and neighboring areas.",
    cards: [
      { id: "speed", icon: "bolt", title: "High-Speed Broadband", desc: "Ultra-fast optical fiber speeds for buffer-free 4K video streaming, online learning, and gaming." },
      { id: "new-conn", icon: "globe-alt", title: "New Internet Connection", desc: "Fast on-site installation and optical line routing directly to your home or shop in Domkal." },
      { id: "wifi", icon: "wifi", title: "Home Wi-Fi", desc: "High-performance dual-band wireless coverage eliminating dead spots throughout your house." },
      { id: "office", icon: "building-office", title: "Office Internet", desc: "Reliable, high-bandwidth connections built for business operations, cyber centres, and retail counters." },
      { id: "router", icon: "wrench-screwdriver", title: "Router Installation", desc: "Professional router setup, secure Wi-Fi password encryption, and multi-device network pairing." },
      { id: "trouble", icon: "cpu-chip", title: "Internet Troubleshooting", desc: "Prompt local on-site diagnostic support for speed issues, fiber link cuts, or configuration errors." },
      { id: "network", icon: "signal", title: "Network Support", desc: "Cabling, ethernet switch management, Wi-Fi range extension, and localized network maintenance." },
      { id: "cable", icon: "tv", title: "Cable Network", desc: "Stable digital cable TV connection with vibrant picture clarity across regional and national channels." },
      { id: "home-conn", icon: "home", title: "Home Connectivity", desc: "Tailored, budget-friendly broadband packages designed for daily domestic family entertainment." },
      { id: "biz-conn", icon: "briefcase", title: "Business Connectivity", desc: "Symmetric upload/download bandwidth and dedicated local support for commercial businesses." }
    ]
  },

  // Why Choose Us
  whyChooseUs: [
    { icon: "squares-plus", title: "Multiple Services Under One Roof", titleBn: "সব পরিষেবা এক ছাদের নিচে", desc: "Save your time and travel expenses by getting CSC services, internet broadband, banking, mobile repair, and printing in one convenient place." },
    { icon: "shield-check", title: "CSC & Digital Services", titleBn: "অনুমোদিত CSC VLE সেবা", desc: "Operated with active CSC ID: 222365420014 by SUMAN SHEIKH, delivering authentic digital citizen assistance according to official guidelines." },
    { icon: "academic-cap", title: "Ayushman BIS e-KYC Assistance", titleBn: "দক্ষ BIS অপারেটর সহায়তা", desc: "Trained operator support for beneficiary identification, biometric checks, and Ayushman PM-JAY e-KYC applications." },
    { icon: "banknotes", title: "Banking & Bill Payment Support", titleBn: "সহজ ব্যাঙ্কিং ও বিল পেমেন্ট", desc: "Doorstep BC banking support, new account assistance, and instant utility bill payments with verified digital printed receipts." },
    { icon: "id-card", title: "PAN, Passport & DL Services", titleBn: "প্যান, পাসপোর্ট ও ড্রাইভিং লাইসেন্স", desc: "Step-by-step assistance for new PAN creation, Passport Seva appointments, and Driving Licence applications." },
    { icon: "wifi", title: "Internet & Broadband Services", titleBn: "হাই-স্পিড ব্রডব্যান্ড ইন্টারনেট", desc: "High-speed optical fiber connectivity with swift local installation and on-call troubleshooting support." },
    { icon: "device-phone-mobile", title: "Mobile Repair & Software", titleBn: "মোবাইল রিপেয়ার ও সফটওয়্যার", desc: "Smartphone hardware troubleshooting, software updates, and secure device setup right at our counter." },
    { icon: "user-group", title: "Local Customer Assistance", titleBn: "স্থানীয় আন্তরিক গ্রাহক সেবা", desc: "Clear Bengali communication, polite guidance, and honest advice for every resident of Moktarpur, Domkal and surrounding areas." },
    { icon: "map-pin", title: "Convenient Service Centre", titleBn: "সহজ যাতায়াত ও কেন্দ্রীয় অবস্থান", desc: "Centrally located at Moktarpur, Raipur, Domkal with prompt response by phone and WhatsApp." }
  ],

  // How It Works
  howItWorks: [
    { step: "01", title: "Choose Your Service", titleBn: "আপনার প্রয়োজনীয় পরিষেবা বাছুন", desc: "Browse our complete catalog of CSC citizen services, banking assistance, bill payments, mobile repair, or broadband connectivity." },
    { step: "02", title: "Check Required Documents", titleBn: "প্রয়োজনীয় Documents দেখে নিন", desc: "Check our interactive Documents Centre or message us on WhatsApp to confirm the exact original papers needed." },
    { step: "03", title: "Visit / Call / WhatsApp JANNAT ENTERPRISE", titleBn: "যোগাযোগ করুন বা সেন্টারে আসুন", desc: "Call 8918273721 or visit our Moktarpur centre to get your work completed accurately and quickly." }
  ],

  // Standard Compliant Disclaimer
  disclaimer: "Services are provided according to applicable rules, authorization, eligibility and service availability. Government and third-party services are subject to their respective policies and requirements. JANNAT ENTERPRISE is an independent local digital service centre and CSC-linked operator (CSC ID: 222365420014, Shop Owner: SUMAN SHEIKH) and is not a government department. We do not guarantee approval for loans, credit cards, insurance, or government applications."
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
