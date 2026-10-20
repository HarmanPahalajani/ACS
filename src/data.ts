import type { 
  CompanyInfo, 
  ServiceCategory, 
  ServiceItem, 
  ReviewItem 
} from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Awasthi Consultancy Services",
  brandAbbreviation: "ACS",
  monogramTagline: "Complete Accounting Solution",
  representative: "Pankaj Awasthi",
  address: "Flat No. 121, SR LIG, Ashoka Palace, Raisen Road, near Apsara Cinema",
  area: "Ashoka Palace, Raisen Road",
  city: "Bhopal",
  state: "Madhya Pradesh",
  pincode: "462023",
  phones: [
    "+91 91658 94496",
    "+91 86430 94468"
  ],
  googleMapsUrl: "https://maps.app.goo.gl/T5HLJLGrZ1ZSeGSQ9",
  rating: 4.9,
  reviewCount: 130,
  workingHours: "Monday – Saturday: 10:00 AM – 8:00 PM"
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: 'registration',
    label: 'Business Registration',
    shortLabel: 'Business Registration',
    description: 'Foundational paperwork, local licensing, Gumasta, and government registrations to start and operate your commercial entity legally.',
    colorName: 'emerald',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/40',
    badgeText: 'text-emerald-700 dark:text-emerald-400',
    borderAccent: 'border-emerald-500',
    gradient: 'from-emerald-500 to-teal-600',
    icon: 'Building2'
  },
  {
    key: 'taxation',
    label: 'Taxation & Compliance',
    shortLabel: 'Taxation & Compliance',
    description: 'End-to-end assistance with GST, Income Tax Returns, EPF, and ESIC registrations and periodic filings with zero confusion.',
    colorName: 'blue',
    badgeBg: 'bg-blue-100 dark:bg-blue-950/40',
    badgeText: 'text-blue-700 dark:text-blue-400',
    borderAccent: 'border-blue-500',
    gradient: 'from-blue-600 to-indigo-600',
    icon: 'FileSpreadsheet'
  },
  {
    key: 'accounting',
    label: 'Accounting & Financial Reports',
    shortLabel: 'Accounting & Reports',
    description: 'Systematic bookkeeping, Profit & Loss reports, Balance Sheets, CMA reports for bank limits, and practical Tally training.',
    colorName: 'rose',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/40',
    badgeText: 'text-rose-700 dark:text-rose-400',
    borderAccent: 'border-rose-500',
    gradient: 'from-rose-500 to-red-600',
    icon: 'Calculator'
  },
  {
    key: 'documentation',
    label: 'Digital & Personal Documentation',
    shortLabel: 'Digital Documentation',
    description: 'Digital Signature Certificates (DSC), passport application guidance, income certificates, and official documentation support.',
    colorName: 'purple',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/40',
    badgeText: 'text-purple-700 dark:text-purple-400',
    borderAccent: 'border-purple-500',
    gradient: 'from-purple-600 to-pink-600',
    icon: 'ShieldCheck'
  },
  {
    key: 'loans',
    label: 'Loans & Financial Assistance',
    shortLabel: 'Loans & Finance',
    description: 'Structuring required financial records, income proofs, and project files for smooth bank loan evaluations.',
    colorName: 'amber',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/40',
    badgeText: 'text-amber-800 dark:text-amber-400',
    borderAccent: 'border-amber-500',
    gradient: 'from-amber-500 to-orange-600',
    icon: 'Landmark'
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  // Category A: Business & Firm Registration
  {
    id: "firm-registration-gumasta",
    num: "01",
    title: "Firm Registration and Gumasta",
    category: "registration",
    categoryLabel: "Business & Firm Registration",
    shortDesc: "Complete assistance with proprietorship, partnership registration, and municipal Gumasta licensing.",
    description: "Help with registering a business or firm and preparing the required paperwork. Assistance with the relevant local Gumasta registration or licence process.",
    keyPoints: [
      "Help with registering a business or firm and preparing required paperwork",
      "Assistance with the relevant local Gumasta registration or licence process",
      "Drafting partnership deed guidelines where applicable",
      "Guidance on local municipal body compliance and fee structures"
    ],
    documentsRequired: ["PAN Card of Owners/Partners", "Aadhaar Card", "Office Rent Agreement or Property Tax Receipt", "Electricity Bill", "Business Name & Nature of Trade"],
    whoNeedsThis: "Shop owners, traders, consultants, and new businesses establishing commercial premises in Bhopal and Madhya Pradesh.",
    tagline: "Start your business lawfully with official municipal sanction.",
    icon: "Building2",
    badgeColor: "emerald"
  },
  {
    id: "society-registration",
    num: "02",
    title: "Society Registration",
    category: "registration",
    categoryLabel: "Business & Firm Registration",
    shortDesc: "Documentation and step-by-step guidance for non-profit, welfare, and resident society registration.",
    description: "Help prepare documents for registering a society or organization. Guidance on the required forms and application process.",
    keyPoints: [
      "Help prepare documents for registering a society or organization",
      "Guidance on the required forms and application process",
      "Drafting Memorandum of Association (MOA) and bylaws",
      "Assistance with executive committee lists and meeting resolutions"
    ],
    documentsRequired: ["Aadhaar & PAN of founding members", "Address proof of society office", "Draft MOA & Rules/Regulations", "Affidavits and consent letters"],
    whoNeedsThis: "Resident welfare associations (RWAs), cultural clubs, charitable trusts, and community organizations.",
    tagline: "Formalize community and welfare initiatives with recognized status.",
    icon: "Users2",
    badgeColor: "emerald"
  },
  {
    id: "fssai-registration",
    num: "03",
    title: "FSSAI Registration",
    category: "registration",
    categoryLabel: "Business & Firm Registration",
    shortDesc: "Food safety registration and state licence paperwork for all food business operators.",
    description: "Help food businesses apply for the appropriate food-safety registration or licence. Assistance with documentation required for the application.",
    keyPoints: [
      "Help food businesses apply for appropriate food-safety registration or licence",
      "Assistance with documentation required for the application",
      "Guidance on basic registration vs. state licence thresholds",
      "FOSCOS online portal filing support"
    ],
    documentsRequired: ["Passport photo of applicant", "Government ID proof (Aadhaar/Voter ID)", "Business address proof", "Food category list"],
    whoNeedsThis: "Restaurants, cloud kitchens, bakeries, cafes, food stalls, caterers, grocery stores, and food distributors.",
    tagline: "Ensure mandatory food safety compliance and customer confidence.",
    icon: "UtensilsCrossed",
    badgeColor: "emerald"
  },
  {
    id: "import-export-licence",
    num: "04",
    title: "Import-Export Licence Registration",
    category: "registration",
    categoryLabel: "Business & Firm Registration",
    shortDesc: "DGFT Importer Exporter Code (IEC) application and advisory for cross-border trade.",
    description: "Help businesses understand the registration process for importing or exporting goods. Assistance with the required Importer Exporter Code (IEC) application paperwork, where applicable.",
    keyPoints: [
      "Help businesses understand the registration process for importing or exporting goods",
      "Assistance with required Importer Exporter Code (IEC) application paperwork",
      "DGFT portal filing and certificate retrieval",
      "Bank certificate and business verification formatting"
    ],
    documentsRequired: ["Firm PAN Card", "Cancelled Cheque of Current Account", "Proof of Business Premises", "Authorized Signatory Digital Signature / Aadhaar OTP"],
    whoNeedsThis: "Manufacturers, traders, merchant exporters, and e-commerce sellers shipping overseas.",
    tagline: "Expand your trade horizons globally with a lifetime valid IEC.",
    icon: "Globe2",
    badgeColor: "emerald"
  },

  // Category B: Taxation & Government Compliance
  {
    id: "pan-card-services",
    num: "05",
    title: "PAN Card Services",
    category: "taxation",
    categoryLabel: "Taxation & Compliance",
    shortDesc: "Speedy new PAN applications, name corrections, updates, and lost PAN re-issuance.",
    description: "Assistance with PAN applications and relevant documentation. Help customers understand the application or correction process.",
    keyPoints: [
      "Assistance with PAN applications and relevant documentation",
      "Help customers understand the application or correction process",
      "Individual, Minor, Firm, and Trust PAN issuance support",
      "Aadhaar-PAN linking guidance and verification"
    ],
    documentsRequired: ["Proof of Identity (Aadhaar/Voter ID)", "Proof of Address", "Date of Birth proof", "Passport photos"],
    whoNeedsThis: "Individuals, business owners, students, firms, and organizations requiring tax identification.",
    tagline: "Fast and hassle-free tax identity issuance and corrections.",
    icon: "CreditCard",
    badgeColor: "blue"
  },
  {
    id: "gst-registration",
    num: "06",
    title: "GST Registration",
    category: "taxation",
    categoryLabel: "Taxation & Compliance",
    shortDesc: "End-to-end Goods and Services Tax (GST) registration for traders, manufacturers, and service providers.",
    description: "Help eligible businesses apply for GST registration. Guidance on the documents and information generally required.",
    keyPoints: [
      "Help eligible businesses apply for GST registration",
      "Guidance on the documents and information generally required",
      "Selecting the right constitution: Regular vs. Composition Scheme",
      "Timely response to GST portal queries and verification"
    ],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Electricity Bill / Rent Agreement", "Bank statement or Cancelled Cheque", "Photograph"],
    whoNeedsThis: "Businesses crossing turnover thresholds, inter-state suppliers, e-commerce vendors, and voluntary applicants.",
    tagline: "Obtain your 15-digit GSTIN with complete documentation accuracy.",
    icon: "Receipt",
    badgeColor: "blue"
  },
  {
    id: "gst-return-filing",
    num: "07",
    title: "GST Return Filing",
    category: "taxation",
    categoryLabel: "Taxation & Compliance",
    shortDesc: "Monthly and quarterly GST return filing (GSTR-1, GSTR-3B, annual GSTR-9) and ITC reconciliation.",
    description: "Assistance with preparing and filing applicable GST returns. Help organize the sales, purchases, and tax information needed for filing.",
    keyPoints: [
      "Assistance with preparing and filing applicable GST returns (GSTR-1, GSTR-3B)",
      "Help organize sales, purchases, and tax information needed for filing",
      "Input Tax Credit (ITC) reconciliation with GSTR-2B to avoid credit loss",
      "Avoid late fees, penalties, and interest with scheduled monthly filing"
    ],
    documentsRequired: ["Sales Invoices", "Purchase Bills", "Bank Statement", "Expense vouchers"],
    whoNeedsThis: "All registered GST taxpayers needing regular monthly or quarterly compliance.",
    tagline: "Error-free filing, optimized tax credits, and peace of mind.",
    icon: "FileSpreadsheet",
    badgeColor: "blue"
  },
  {
    id: "income-tax-return-filing",
    num: "08",
    title: "Income Tax Return Filing",
    category: "taxation",
    categoryLabel: "Taxation & Compliance",
    shortDesc: "Accurate ITR filing for salaried employees, business proprietors, professionals, and senior citizens.",
    description: "Help individuals and businesses prepare their income-tax return information. Guidance on the documents and details needed to complete the filing.",
    keyPoints: [
      "Help individuals and businesses prepare income-tax return information",
      "Guidance on documents and details needed to complete the filing",
      "Filing across ITR-1, ITR-2, ITR-3, and ITR-4 forms",
      "Old vs. New Tax Regime comparison to legally minimize tax liability",
      "Assistance with tax refund claim tracking and AIS/TIS review"
    ],
    documentsRequired: ["Form 16 / Salary Slips", "Bank statements for the financial year", "PAN & Aadhaar", "Investment & deduction proofs (80C, 80D)", "Capital gains / interest statements"],
    whoNeedsThis: "Salaried individuals, professionals, business owners, freelancers, and retirees.",
    tagline: "Maximize eligible deductions and file before statutory deadlines.",
    icon: "Percent",
    badgeColor: "blue"
  },
  {
    id: "esic-registration",
    num: "09",
    title: "ESIC Registration",
    category: "taxation",
    categoryLabel: "Taxation & Compliance",
    shortDesc: "Employee State Insurance registration for commercial establishments employing staff.",
    description: "Assistance with ESIC registration for eligible employers and businesses. Help organize the relevant employee and business details.",
    keyPoints: [
      "Assistance with ESIC registration for eligible employers and businesses",
      "Help organize relevant employee and business details",
      "Obtaining ESIC employer code on the official portal",
      "Guidance on wage ceilings and monthly contribution obligations"
    ],
    documentsRequired: ["Certificate of registration / Gumasta", "PAN of entity & partners/directors", "Employee roster with salary breakdown", "Bank account proof"],
    whoNeedsThis: "Factories and establishments with 10 or more employees (or applicable state rules).",
    tagline: "Protect your team with mandatory health insurance compliance.",
    icon: "HeartHandshake",
    badgeColor: "blue"
  },
  {
    id: "epf-registration",
    num: "10",
    title: "EPF Registration",
    category: "taxation",
    categoryLabel: "Taxation & Compliance",
    shortDesc: "Employees' Provident Fund registration to support retirement savings and statutory employee welfare.",
    description: "Assistance with EPF registration and required business documentation. Guidance on the relevant employer and employee information.",
    keyPoints: [
      "Assistance with EPF registration and required business documentation",
      "Guidance on relevant employer and employee information",
      "Generating establishment identification number (EPFO portal)",
      "Digital signature linkage for authorized signatory"
    ],
    documentsRequired: ["Business registration certificate", "PAN of business", "Cancelled cheque", "List of employees with date of joining and wages"],
    whoNeedsThis: "Commercial establishments with 20 or more workers or those opting for voluntary PF coverage.",
    tagline: "Empower staff retirement savings with statutory PF enrollment.",
    icon: "ShieldAlert",
    badgeColor: "blue"
  },
  {
    id: "esic-epf-return-filing",
    num: "11",
    title: "ESIC and EPF Return Filing",
    category: "taxation",
    categoryLabel: "Taxation & Compliance",
    shortDesc: "Monthly challan generation, ECR filing, and return submissions for PF and ESIC.",
    description: "Help with applicable periodic returns and compliance paperwork. Assistance with organizing the required records and contribution details.",
    keyPoints: [
      "Help with applicable periodic returns and compliance paperwork",
      "Assistance with organizing required records and contribution details",
      "Monthly Electronic Challan cum Return (ECR) preparation",
      "Timely payment challan creation to prevent interest and damages"
    ],
    documentsRequired: ["Monthly attendance register", "Wages/salary sheet", "Bank payment transaction details"],
    whoNeedsThis: "All organizations holding active EPF and ESIC registration codes.",
    tagline: "Keep your establishment in good standing with timely monthly filings.",
    icon: "FileCheck2",
    badgeColor: "blue"
  },

  // Category C: Accounting & Financial Statements
  {
    id: "account-management",
    num: "12",
    title: "Account Management",
    category: "accounting",
    categoryLabel: "Accounting & Financial Statements",
    shortDesc: "Systematic day-to-day bookkeeping, ledger maintenance, bank reconciliation, and cash-flow tracking.",
    description: "Help maintain and organize regular business financial records. Keep income, expenses, and accounting information easier to track.",
    keyPoints: [
      "Help maintain and organize regular business financial records",
      "Keep income, expenses, and accounting information easier to track",
      "Bank account reconciliation and vendor ledger balancing",
      "Clean classification of capital expenditures vs. revenue expenses"
    ],
    documentsRequired: ["Bank account statements", "Purchase & sales bills", "Vouchers for routine expenses", "Cash book entries"],
    whoNeedsThis: "Small and medium business owners, retail shops, contractors, and service providers who need organized financial books.",
    tagline: "Clear books, zero clutter, and complete financial clarity.",
    icon: "BookOpenCheck",
    badgeColor: "rose"
  },
  {
    id: "profit-and-loss-statement",
    num: "13",
    title: "Profit and Loss Statement",
    category: "accounting",
    categoryLabel: "Accounting & Financial Statements",
    shortDesc: "Accurate P&L preparation revealing operational income, direct expenses, gross margin, and net profitability.",
    description: "Prepare a report showing business income, expenses, profit, or loss. Help business owners better understand their financial performance.",
    keyPoints: [
      "Prepare report showing business income, expenses, profit, or loss",
      "Help business owners better understand their financial performance",
      "Breakdown of operating costs vs. administrative overheads",
      "Essential foundation for tax planning and banker evaluations"
    ],
    documentsRequired: ["Audited or recorded sales totals", "Purchases summary", "Expense receipts", "Opening and closing inventory records"],
    whoNeedsThis: "Traders, manufacturers, and service enterprises reviewing annual performance.",
    tagline: "Know your real bottom line to make confident commercial decisions.",
    icon: "TrendingUp",
    badgeColor: "rose"
  },
  {
    id: "balance-sheet",
    num: "14",
    title: "Balance Sheet",
    category: "accounting",
    categoryLabel: "Accounting & Financial Statements",
    shortDesc: "Comprehensive financial statement presenting business assets, liabilities, owner's capital, and solvency.",
    description: "Prepare a statement showing a business's assets, liabilities, and capital. Help present the financial position of the business based on its records.",
    keyPoints: [
      "Prepare a statement showing a business's assets, liabilities, and capital",
      "Help present the financial position of the business based on its records",
      "Reconciliation of current assets, debtors, creditors, and loans",
      "Required document for bank credit limits, tenders, and tax filings"
    ],
    documentsRequired: ["Trial balance", "P&L statement", "Asset registers & depreciation schedules", "Debtors and creditors lists", "Bank loan balances"],
    whoNeedsThis: "Firms seeking bank facilities, participating in tenders, or assessing net worth.",
    tagline: "A true, balanced snapshot of your business strength and solvency.",
    icon: "Scale",
    badgeColor: "rose"
  },
  {
    id: "tally-software-training",
    num: "15",
    title: "Tally Software Training",
    category: "accounting",
    categoryLabel: "Accounting & Financial Statements",
    shortDesc: "Practical, hands-on Tally Prime training covering voucher entries, GST billing, inventory, and reporting.",
    description: "Learn how to use Tally for accounting and common business tasks. Cover relevant practical activities such as entering transactions and maintaining accounts.",
    keyPoints: [
      "Learn how to use Tally for accounting and common business tasks",
      "Cover practical activities such as entering transactions and maintaining accounts",
      "Hands-on GST invoice creation and E-way bill generation in Tally",
      "Generating Trial Balance, Profit & Loss, and Balance Sheet reports with confidence"
    ],
    documentsRequired: ["Basic computer familiarity", "Interest in practical accounting workflows"],
    whoNeedsThis: "Commerce students, small business owners, in-house accountants, and billing clerks.",
    tagline: "Master real-world business accounting in practical layman terms.",
    icon: "GraduationCap",
    badgeColor: "rose"
  },
  {
    id: "cma-report",
    num: "16",
    title: "CMA Report",
    category: "accounting",
    categoryLabel: "Accounting & Financial Statements",
    shortDesc: "Credit Monitoring Arrangement (CMA) report preparation for working capital limits and bank term loans.",
    description: "Prepare a Credit Monitoring Arrangement (CMA) report for relevant financial or loan applications. Help organize the financial information banks may request when assessing a business loan.",
    keyPoints: [
      "Prepare Credit Monitoring Arrangement (CMA) report for loan applications",
      "Help organize financial information banks request when assessing loans",
      "Detailed past 2-3 years financial data plus realistic projected cash flows",
      "Working capital assessment (Operating cycle, MPBF, Debt-Service Coverage Ratios)"
    ],
    documentsRequired: ["Audited / filed balance sheets of past 2-3 years", "Current year provisional statements", "Future financial projections", "Sanction letter of existing credit facilities"],
    whoNeedsThis: "Businesses applying for Cash Credit (CC) limits, Overdraft (OD), or bank term loans.",
    tagline: "Professional financial dossiers structured to banker standards.",
    icon: "BarChart3",
    badgeColor: "rose"
  },

  // Category D: Digital & Personal Documentation
  {
    id: "digital-signature-certificate",
    num: "17",
    title: "Digital Signature Certificate (DSC)",
    category: "documentation",
    categoryLabel: "Digital & Personal Documentation",
    shortDesc: "Class-3 DSC tokens for GST, MCA/ROC, Income Tax, E-Tendering, and trademark filings.",
    description: "Assistance with obtaining a digital signature certificate. Help with documentation needed to use digital signatures for applicable online filings and transactions.",
    keyPoints: [
      "Assistance with obtaining a digital signature certificate (Class 3 DSC)",
      "Help with documentation needed for online filings and transactions",
      "Paperless Aadhaar OTP or biometric video verification guidance",
      "Secure encrypted USB crypto-token provisioning"
    ],
    documentsRequired: ["Aadhaar Card", "PAN Card", "Mobile number linked with Aadhaar", "Recent photograph"],
    whoNeedsThis: "Company directors, GST taxpayers, contractors participating in e-tenders, and chartered professionals.",
    tagline: "Cryptographically secure digital signatures issued quickly and smoothly.",
    icon: "KeyRound",
    badgeColor: "purple"
  },
  {
    id: "passport-services",
    num: "18",
    title: "Passport Services",
    category: "documentation",
    categoryLabel: "Digital & Personal Documentation",
    shortDesc: "Online application submission, appointment booking at PSK, and document checklist review.",
    description: "Guidance on the passport application process and required documents. Assistance with preparing and completing relevant application steps.",
    keyPoints: [
      "Guidance on the passport application process and required documents",
      "Assistance with preparing and completing relevant application steps",
      "PSK appointment scheduling and fees payment guidance",
      "Fresh passport, renewal, and minor passport application review"
    ],
    documentsRequired: ["Aadhaar Card", "PAN Card / Voter ID", "Birth certificate or 10th marksheet (DOB proof)", "Bank passbook with photo / utility bill"],
    whoNeedsThis: "Citizens planning international travel, students pursuing foreign education, and pilgrims.",
    tagline: "Clear guidance for hassle-free Passport Seva Kendra visits.",
    icon: "Compass",
    badgeColor: "purple"
  },
  {
    id: "income-certificate",
    num: "19",
    title: "Income Certificate",
    category: "documentation",
    categoryLabel: "Digital & Personal Documentation",
    shortDesc: "Assistance with documentation and submission procedures for official state revenue income certificates.",
    description: "Help applicants understand the documents and application steps required for an income certificate. Guidance on submitting the relevant information through the appropriate official process.",
    keyPoints: [
      "Help applicants understand documents and application steps required",
      "Guidance on submitting relevant info through the appropriate official process",
      "Assistance with affidavit drafting and income declaration",
      "Lok Seva Kendra portal workflow navigation"
    ],
    documentsRequired: ["Ration Card / Samagra ID", "Aadhaar Card", "Self-declaration affidavit of annual income", "Salary slip or land revenue receipt (if applicable)"],
    whoNeedsThis: "Students seeking scholarships, candidates applying for fee concessions, and government welfare applicants.",
    tagline: "Accurate paperwork for official government revenue verification.",
    icon: "FileBadge",
    badgeColor: "purple"
  },
  {
    id: "caste-certificate",
    num: "20",
    title: "Caste Certificate",
    category: "documentation",
    categoryLabel: "Digital & Personal Documentation",
    shortDesc: "Documentation guidance and procedural advice for caste certificate verification with competent authorities.",
    description: "Assistance with understanding the documentation and application process for a caste certificate. The certificate itself remains subject to the appropriate government authority's approval.",
    keyPoints: [
      "Assistance with understanding documentation and application process",
      "Guidance on family lineage and historical residence proofs",
      "The certificate itself remains subject to the competent revenue authority's approval",
      "Support with Lok Seva Kendra application formats"
    ],
    documentsRequired: ["Samagra ID", "Aadhaar Card", "Father / paternal relative's caste certificate or old revenue records", "Affidavit on stamp paper"],
    whoNeedsThis: "Individuals seeking official verification under eligible constitutional categories for education and public benefits.",
    tagline: "Organize the necessary ancestral and identity records with clarity.",
    icon: "FileCheck",
    badgeColor: "purple"
  },

  // Category E: Loan Documentation & Support
  {
    id: "home-loan-assistance",
    num: "21",
    title: "Home Loan Assistance",
    category: "loans",
    categoryLabel: "Loan Documentation & Support",
    shortDesc: "Preparation and organization of income papers, ITR copies, and banking records required by home loan lenders.",
    description: "Help organize documents commonly required for a home loan application. Guidance on preparing the paperwork requested by the relevant lender.",
    keyPoints: [
      "Help organize documents commonly required for a home loan application",
      "Guidance on preparing the paperwork requested by the relevant lender",
      "Compiling 3-year ITR sets with computation sheets",
      "Organizing bank statements and salary records for clean credit appraisal"
    ],
    documentsRequired: ["Last 3 years ITR with computation of income", "Last 6-12 months bank statements", "Salary slips / business profit statements", "Property documents (Agreement to sale, registry copy)"],
    whoNeedsThis: "Individuals and families purchasing a flat, constructing a house, or buying residential plots.",
    tagline: "Present organized financial dossiers to accelerate your lender's review.",
    icon: "Home",
    badgeColor: "amber"
  },
  {
    id: "vehicle-loan-assistance",
    num: "22",
    title: "Vehicle Loan Assistance",
    category: "loans",
    categoryLabel: "Loan Documentation & Support",
    shortDesc: "Assembling financial credentials, income statements, and business proofs for commercial and personal vehicle finance.",
    description: "Assistance with organizing documentation for vehicle loan applications. Help customers understand the information a lender may ask them to provide.",
    keyPoints: [
      "Assistance with organizing documentation for vehicle loan applications",
      "Help customers understand the information a lender may ask them to provide",
      "Fast assembly of KYC, ITR, and bank passbooks",
      "Support for both commercial transport vehicles and personal cars"
    ],
    documentsRequired: ["PAN & Aadhaar Card", "Bank statements (past 6 months)", "ITR copies or Form 16", "Vehicle quotation / proforma invoice from dealer"],
    whoNeedsThis: "Commercial vehicle operators, business owners, and salaried buyers seeking vehicle loans.",
    tagline: "Get your vehicle loan paperwork organized without delays.",
    icon: "Car",
    badgeColor: "amber"
  },
  {
    id: "business-loan-assistance",
    num: "23",
    title: "Business Loan Assistance",
    category: "loans",
    categoryLabel: "Loan Documentation & Support",
    shortDesc: "Comprehensive financial dossiers, project reports, Balance Sheet structuring, and bank compliance folders.",
    description: "Help business owners prepare relevant financial and business paperwork for loan applications. Explain common documentation requirements and the application process.",
    keyPoints: [
      "Help business owners prepare relevant financial and business paperwork for loan applications",
      "Explain common documentation requirements and the application process",
      "Preparing CMA data, projected balance sheets, and debt-service summaries",
      "Compiling GST returns, bank statements, and business vintage proofs"
    ],
    documentsRequired: ["Past 3 years audited / filed Balance Sheets and P&L", "Past 12 months bank statements & GST returns", "Business registration proof (Gumasta / Udyam / GST)", "CMA Report & Project Report"],
    whoNeedsThis: "SME entrepreneurs, traders, manufacturers, and service firms seeking capital for expansion or working capital.",
    tagline: "Build a solid, defensible financial dossier for your business loan approval.",
    icon: "BriefcaseBusiness",
    badgeColor: "amber"
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Verified Google Maps Reviewer",
    initials: "VR",
    rating: 5,
    text: "Excellent service. The filing process was smooth, quick, and clearly explained. Very professional, helpful, and responsive to all queries.",
    source: "Google Maps Review",
    badge: "5.0 ★ Verified Customer",
    relativeTime: "Verified Review",
    isVerifiedExcerpt: true
  },
  {
    id: "rev-2",
    author: "Local Business Client",
    initials: "LB",
    rating: 5,
    text: "They guided properly regarding tax saving and documentation.",
    source: "Google Maps Review",
    badge: "5.0 ★ Verified Customer",
    relativeTime: "Verified Review",
    isVerifiedExcerpt: true
  },
  {
    id: "rev-3",
    author: "Taxation Client",
    initials: "PA",
    rating: 5,
    text: "Mr Pankaj Awasthi is a very knowledgeable person and makes you understand the subject in a very layman language.",
    source: "Google Maps Review",
    badge: "5.0 ★ Verified Customer",
    relativeTime: "Verified Review",
    isVerifiedExcerpt: true
  },
  {
    id: "rev-4",
    author: "Shop Proprietor, Bhopal",
    initials: "SP",
    rating: 5,
    text: "Got my Gumasta licence and GST registration done within days. Very transparent guidance and prompt updates throughout.",
    source: "Google Maps Review",
    badge: "5.0 ★ Verified Customer",
    relativeTime: "Verified Review",
    isVerifiedExcerpt: false
  },
  {
    id: "rev-5",
    author: "Manufacturing Firm Partner",
    initials: "MP",
    rating: 5,
    text: "Their preparation of our Balance Sheet and CMA report for our bank limit was accurate and well appreciated by our bank branch.",
    source: "Google Maps Review",
    badge: "5.0 ★ Verified Customer",
    relativeTime: "Verified Review",
    isVerifiedExcerpt: false
  }
];

export const ACS_VALUES = [
  {
    title: "Layman Language Guidance",
    desc: "We demystify complex tax codes, compliance portals, and legal paperwork into plain, straightforward terms you can understand easily.",
    icon: "MessageSquareHeart",
    color: "emerald"
  },
  {
    title: "Speed & Accuracy",
    desc: "Rigorous attention to detail on GST, ITR, and registration forms to prevent rejection, notice issuance, or avoidable penalties.",
    icon: "Zap",
    color: "blue"
  },
  {
    title: "Personalized Attention",
    desc: "Direct access to Mr. Pankaj Awasthi and senior consultants rather than automated chatbots or call-center runarounds.",
    icon: "UserCheck",
    color: "rose"
  },
  {
    title: "Transparent & Honest",
    desc: "Clear upfront consultation, transparent service assistance, and honest guidance regarding statutory government processes.",
    icon: "ShieldCheck",
    color: "amber"
  }
];

export const FAQS = [
  {
    question: "What documents are required for GST Registration for a new business?",
    answer: "Typically, you need the proprietor or partner's PAN Card, Aadhaar Card, photograph, office address proof (electricity bill with rent agreement or NOC), and bank proof (cancelled cheque or bank statement). We verify all documents before filing to ensure seamless approval."
  },
  {
    question: "How long does it take to obtain a Gumasta (Shop Act) license in Bhopal?",
    answer: "Once all required documents (rent agreement, electricity bill, applicant ID, shop photos) are compiled, the application is processed through the local municipal portal. Usually, the certificate is issued within a few working days after municipal verification."
  },
  {
    question: "Can ITR be filed if I missed the July 31 deadline?",
    answer: "Yes, you can file a 'Belated Return' under section 139(4) of the Income Tax Act up to December 31 of the assessment year (subject to applicable late fees and interest). We help you calculate the exact figures and file cleanly."
  },
  {
    question: "What is a CMA Report and when is it required?",
    answer: "A Credit Monitoring Arrangement (CMA) report is a comprehensive financial dossier showing past performance, working capital operating cycle, and future financial projections. Banks require it whenever a business applies for Cash Credit (CC) limits, Overdraft facilities, or commercial term loans."
  },
  {
    question: "Where is Awasthi Consultancy Services located in Bhopal?",
    answer: "Our office is conveniently located at Flat No. 121, SR LIG, Ashoka Palace, Raisen Road, near Apsara Cinema, Bhopal, Madhya Pradesh 462023. You can click the Google Maps button on our website for direct directions or call us before visiting."
  },
  {
    question: "How does the consultation and paperwork process work?",
    answer: "You can call us directly on our phone numbers (+91 91658 94496, +91 86430 94468) or submit your requirement via our website. We review your requirement, provide a straightforward checklist of required papers, and handle the drafting and online submission."
  }
];
