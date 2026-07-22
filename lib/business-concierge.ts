import {
  Building2,
  Warehouse,
  Layers,
  Globe,
  RefreshCw,
  FilePen,
  FileX,
  Building,
  BadgeCheck,
  Award,
  Briefcase,
  Stamp,
  FileSignature,
  FileCheck,
  Languages,
  CreditCard,
  Stethoscope,
  ReceiptText,
  HandCoins,
  Percent,
  BookOpen,
  Calculator,
  Scale,
  BarChart3,
  Landmark,
  Wallet,
  ShieldCheck,
  TrendingUp,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react"

export type ItemDetail = {
  /** What the service is */
  overview: string
  /** Who the service is for */
  forWho: string
  /** What is typically included or required */
  includes: string[]
  /** Relevant process / turnaround notes */
  process?: string
}

export type ConciergeItem = {
  title: string
  description: string
  icon: LucideIcon
  detail: ItemDetail
}

export type ConciergeGroup = {
  heading: string
  items: ConciergeItem[]
}

export type BusinessCategory = {
  slug: string
  title: string
  /** One-line description shown on the landing card */
  tagline: string
  /** Longer intro paragraph shown on the sub-page */
  intro: string
  icon: LucideIcon
  image: string
  groups: ConciergeGroup[]
}

export const businessCategories: BusinessCategory[] = [
  {
    slug: "company-formation",
    title: "Company Formation",
    tagline: "Mainland, free zone and offshore business setup across the UAE.",
    intro:
      "From choosing the right jurisdiction to securing your trade license, I manage every step of establishing your business in the UAE — quickly, compliantly and without the paperwork burden.",
    icon: Building2,
    image: "/images/business-concierge/company-formation.png",
    groups: [
      {
        heading: "Setup Services",
        items: [
          {
            title: "Mainland License",
            description: "Onshore licensing with full access to the UAE market.",
            icon: Building2,
            detail: {
              overview:
                "A mainland (onshore) license is issued by the Department of Economic Development of the relevant emirate and allows your company to trade freely anywhere in the UAE, including directly with the local market and government entities.",
              forWho:
                "Entrepreneurs and established businesses that want to serve UAE-based clients, bid for government contracts, or operate a physical retail, hospitality or professional presence on the mainland.",
              includes: [
                "Business activity selection and trade name reservation",
                "Initial approval and MOA drafting",
                "Ejari-registered office lease arrangement",
                "License issuance and Chamber of Commerce registration",
                "Guidance on shareholding and local service agent requirements where applicable",
              ],
              process:
                "Typically completed in 5–10 working days once documents and approvals are in place. I coordinate every government touchpoint on your behalf.",
            },
          },
          {
            title: "Free Zone License",
            description: "100% ownership and tax-efficient free zone setups.",
            icon: Warehouse,
            detail: {
              overview:
                "Free zone companies are registered within one of the UAE's specialised economic zones, offering 100% foreign ownership, full profit repatriation and streamlined import/export handling.",
              forWho:
                "Founders who want complete ownership without a local partner, along with cost-efficient packages for consulting, trading, e-commerce, media or tech ventures.",
              includes: [
                "Free zone selection matched to your activity and budget",
                "Company registration and license issuance",
                "Flexi-desk or office package arrangement",
                "Establishment card and investor visa allocation",
                "Bank account introduction support",
              ],
              process:
                "Most free zone setups are finalised within 3–7 working days. I recommend the zone that best fits your activity, visa needs and long-term plans.",
            },
          },
          {
            title: "Holding Company",
            description: "Structures to consolidate and protect your assets.",
            icon: Layers,
            detail: {
              overview:
                "A holding company owns shares, real estate, intellectual property or other assets in subsidiary companies rather than trading directly — providing a clean structure for control, succession and asset protection.",
              forWho:
                "Investors and family offices consolidating multiple businesses or assets, and groups seeking a tax-efficient parent structure over their operating entities.",
              includes: [
                "Jurisdiction and structure advisory (mainland or free zone)",
                "Incorporation of the holding entity",
                "Shareholding and subsidiary structuring",
                "Corporate governance documentation",
                "Ongoing compliance guidance",
              ],
              process:
                "Structuring begins with a review of your existing assets and objectives, followed by incorporation and share transfers, usually within 1–3 weeks.",
            },
          },
          {
            title: "Offshore Company",
            description: "International offshore incorporation and management.",
            icon: Globe,
            detail: {
              overview:
                "An offshore company is a non-resident entity used for international business, asset holding and confidentiality. It cannot trade within the UAE but is ideal for holding overseas assets and conducting cross-border business.",
              forWho:
                "International investors seeking a reputable, low-administration vehicle for holding assets, owning property in designated areas, or structuring global operations.",
              includes: [
                "Offshore jurisdiction selection (e.g. JAFZA, RAK ICC)",
                "Incorporation and registered agent services",
                "Share certificates and corporate documents",
                "Multi-currency bank account introductions",
                "Annual renewal and compliance management",
              ],
              process:
                "Incorporation is typically complete within 2–5 working days once due diligence documents are provided.",
            },
          },
        ],
      },
      {
        heading: "License Management",
        items: [
          {
            title: "Trade License Renewal",
            description: "Timely renewals to keep your business compliant.",
            icon: RefreshCw,
            detail: {
              overview:
                "Every UAE trade license must be renewed annually. Late renewal triggers fines and can suspend your ability to operate, bank and process visas.",
              forWho:
                "Any company with an active mainland or free zone license approaching its renewal date.",
              includes: [
                "License expiry tracking and reminders",
                "Ejari / lease renewal coordination",
                "Settlement of government renewal fees",
                "Updated license issuance",
                "Immigration and labour card renewals where required",
              ],
              process:
                "I handle renewals ahead of the deadline so there is never a lapse — usually completed within 1–3 working days once the lease is current.",
            },
          },
          {
            title: "Trade License Amendment",
            description: "Activity, ownership and structure amendments.",
            icon: FilePen,
            detail: {
              overview:
                "Amendments update the official details of your license — such as adding business activities, changing shareholders, updating the trade name, or altering share capital.",
              forWho:
                "Growing businesses adding new activities, onboarding or exiting partners, or restructuring ownership.",
              includes: [
                "Review of the requested change and its requirements",
                "Board/shareholder resolutions and MOA amendments",
                "Notarisation and government submissions",
                "Updated license and registry records",
                "Visa quota adjustments where relevant",
              ],
              process:
                "Timelines depend on the type of amendment; most activity or ownership changes are completed within 3–7 working days.",
            },
          },
          {
            title: "Company Liquidation",
            description: "Orderly, fully compliant company closure.",
            icon: FileX,
            detail: {
              overview:
                "Liquidation is the formal, legal process of closing a company — cancelling the license, visas and registrations while settling liabilities so no fines accrue afterwards.",
              forWho:
                "Owners winding down operations who need a clean, compliant exit rather than simply letting a license expire.",
              includes: [
                "Shareholder resolution and liquidator appointment",
                "Official liquidation notice publication",
                "Visa and establishment card cancellations",
                "Clearance from utilities, banks and authorities",
                "Final deregistration certificate",
              ],
              process:
                "A structured process that typically spans 4–8 weeks, largely due to the mandatory notice period.",
            },
          },
        ],
      },
      {
        heading: "Business Support",
        items: [
          {
            title: "Office Setup Services",
            description: "Flexi-desks, offices and Ejari tenancy arrangements.",
            icon: Building,
            detail: {
              overview:
                "The right workspace solution — from a compliant flexi-desk to a fitted private office — registered correctly with Ejari or the free zone to satisfy licensing and visa requirements.",
              forWho:
                "New companies needing a registered address, and growing teams upgrading from shared desks to dedicated offices.",
              includes: [
                "Workspace needs assessment and budgeting",
                "Flexi-desk, co-working or private office sourcing",
                "Lease negotiation and Ejari registration",
                "Fit-out and setup coordination",
                "Alignment with your visa quota requirements",
              ],
              process:
                "I shortlist suitable options, arrange viewings, and finalise the tenancy and registration — usually within 1–2 weeks.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "visa-immigration",
    title: "Visa & Immigration",
    tagline: "Residency, legalization and Emirates ID services, handled end to end.",
    intro:
      "Residency, document legalization and Emirates ID — I coordinate the entire immigration process for you and your family, so nothing is left to chance.",
    icon: Stamp,
    image: "/images/business-concierge/visa-immigration.png",
    groups: [
      {
        heading: "Residency & Work",
        items: [
          {
            title: "UAE Residency Visa",
            description: "Investor, employment and family residency visas.",
            icon: BadgeCheck,
            detail: {
              overview:
                "A UAE residency visa allows you to legally live in the Emirates, sponsor family members, open bank accounts and access services. It can be obtained through investment, employment or property ownership.",
              forWho:
                "Business owners, employees, property owners and their dependents seeking legal residency in the UAE.",
              includes: [
                "Eligibility assessment and entry permit",
                "Medical fitness test and Emirates ID coordination",
                "Visa stamping / e-visa issuance",
                "Family sponsorship processing",
                "Renewal reminders and management",
              ],
              process:
                "The full cycle — entry permit, medical, Emirates ID and stamping — is typically completed within 7–14 working days.",
            },
          },
          {
            title: "UAE Golden Visa",
            description: "Long-term 10-year residency for eligible applicants.",
            icon: Award,
            detail: {
              overview:
                "The Golden Visa is a long-term (5 or 10 year) renewable residency granted to investors, entrepreneurs, highly skilled professionals, and other qualifying categories — with no need for a local sponsor.",
              forWho:
                "Investors, business owners, specialised talents, top professionals and their families who qualify under one of the eligibility routes.",
              includes: [
                "Eligibility review against the qualifying categories",
                "Nomination and application preparation",
                "Document compilation and attestation",
                "Medical and Emirates ID processing",
                "Family inclusion under the same visa",
              ],
              process:
                "After confirming eligibility, applications generally receive a decision within 2–4 weeks depending on the category and documentation.",
            },
          },
          {
            title: "Work Permit Services",
            description: "Labour cards and work permit processing.",
            icon: Briefcase,
            detail: {
              overview:
                "Work permits and labour cards issued by the Ministry of Human Resources authorise an employee to work legally for a UAE company, and are a prerequisite to the employment residency visa.",
              forWho:
                "Companies hiring staff and individuals moving onto an employment visa with a UAE employer.",
              includes: [
                "MOHRE establishment and quota setup",
                "Offer letter and labour contract processing",
                "Work permit and labour card issuance",
                "Linkage to the residency visa process",
                "Renewals and cancellations",
              ],
              process:
                "Work permits are usually processed within 3–7 working days, then linked to the residency visa cycle.",
            },
          },
          {
            title: "Visa Cancellation",
            description: "Compliant cancellation and status changes.",
            icon: FileX,
            detail: {
              overview:
                "Proper visa cancellation formally ends a residency or employment visa, avoiding overstay fines and enabling a clean transfer to a new sponsor or exit from the country.",
              forWho:
                "Employers offboarding staff and individuals changing sponsors, leaving the UAE, or switching visa categories.",
              includes: [
                "Work permit and residency cancellation",
                "Establishment card updates",
                "Overstay and fine checks",
                "Coordination of grace period timelines",
                "Support for status change to a new visa",
              ],
              process:
                "Cancellations are typically completed within 1–3 working days, after which the grace period applies.",
            },
          },
        ],
      },
      {
        heading: "Legalization",
        items: [
          {
            title: "MOFA / Embassy Attestation",
            description: "Attestation of documents for official use.",
            icon: Stamp,
            detail: {
              overview:
                "Attestation authenticates personal, educational and commercial documents through the relevant embassy and the UAE Ministry of Foreign Affairs so they are legally recognised in the UAE.",
              forWho:
                "Anyone using foreign-issued certificates, degrees, marriage/birth certificates or commercial documents for visas, schooling, employment or company setup.",
              includes: [
                "Document review and attestation roadmap",
                "Home-country and embassy attestation coordination",
                "MOFA attestation in the UAE",
                "Secure document handling and return",
                "Legal translation where required",
              ],
              process:
                "Turnaround depends on the document origin and channel; UAE-side MOFA attestation is usually 1–3 working days.",
            },
          },
          {
            title: "Notary Services (POA)",
            description: "Power of attorney drafting and notarization.",
            icon: FileSignature,
            detail: {
              overview:
                "A notarised power of attorney legally authorises another person to act on your behalf for company, property, banking or legal matters in the UAE.",
              forWho:
                "Investors and residents who need someone to represent them locally, and companies delegating signing authority.",
              includes: [
                "POA drafting in the correct legal format",
                "Bilingual (Arabic/English) preparation",
                "Notary public appointment and attestation",
                "Guidance on scope and limitations",
                "Legal translation where required",
              ],
              process:
                "Drafting and notarisation are generally completed within 1–2 working days once wording is confirmed.",
            },
          },
          {
            title: "Document Clearing",
            description: "Government document clearing and typing.",
            icon: FileCheck,
            detail: {
              overview:
                "Document clearing handles the typing, submission and follow-up of applications through UAE government portals and typing centres, saving you queues and rejected forms.",
              forWho:
                "Individuals and companies needing accurate, correctly-typed submissions for visas, licenses and official applications.",
              includes: [
                "Application typing in Arabic where required",
                "Portal submissions and fee payments",
                "Status tracking and follow-up",
                "Correction and resubmission handling",
                "Collection and delivery of outputs",
              ],
              process:
                "Most clearing tasks are handled same-day or within 1–2 working days depending on the authority.",
            },
          },
          {
            title: "Legal Translation",
            description: "Certified legal translation in all languages.",
            icon: Languages,
            detail: {
              overview:
                "Certified legal translation by UAE Ministry of Justice–approved translators, accepted by courts, government departments and notaries.",
              forWho:
                "Anyone submitting non-Arabic documents to UAE authorities, courts or for attestation and notarisation.",
              includes: [
                "Certified translation of legal and personal documents",
                "Contracts, certificates and court documents",
                "Arabic and major international languages",
                "Stamped, court-accepted output",
                "Fast-track options for urgent needs",
              ],
              process:
                "Standard documents are usually returned within 1–2 working days, with express service available.",
            },
          },
        ],
      },
      {
        heading: "Emirates ID & Medical",
        items: [
          {
            title: "Emirates ID Application",
            description: "New applications, renewals and replacements.",
            icon: CreditCard,
            detail: {
              overview:
                "The Emirates ID is the mandatory national identity card for all residents, required for banking, healthcare, telecoms, tenancy and virtually every official transaction.",
              forWho:
                "New residents obtaining their first ID, and existing residents renewing or replacing a lost or expired card.",
              includes: [
                "ICP application typing and submission",
                "Biometrics appointment booking",
                "Coordination with the residency visa process",
                "Renewal and replacement handling",
                "Delivery tracking",
              ],
              process:
                "Emirates ID is issued alongside the residency visa; standalone renewals typically take 3–5 working days.",
            },
          },
          {
            title: "Medical Fitness Test",
            description: "Fast-tracked medical fitness appointments.",
            icon: Stethoscope,
            detail: {
              overview:
                "A mandatory medical fitness screening (blood test and chest X-ray) required for issuing and renewing UAE residency visas.",
              forWho:
                "All residency visa applicants above 18, with VIP and express options for those who prefer minimal waiting.",
              includes: [
                "Appointment booking at approved centres",
                "Standard, express or VIP service tiers",
                "Results tracking and follow-up",
                "Coordination with the visa timeline",
                "Support for fit-to-work certificates where needed",
              ],
              process:
                "Standard results are ready within 2–3 working days; express and VIP options can return results same-day.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "corporate-taxation",
    title: "Corporate Taxation",
    tagline: "Corporate tax, VAT and accounting support for compliant growth.",
    intro:
      "Stay ahead of UAE corporate tax and VAT obligations with structured registration, filing and accounting support that keeps your finances accurate and audit-ready.",
    icon: Calculator,
    image: "/images/business-concierge/corporate-taxation.png",
    groups: [
      {
        heading: "Taxation Services",
        items: [
          {
            title: "Tax Registration & Returns",
            description: "Corporate tax registration and return filing.",
            icon: ReceiptText,
            detail: {
              overview:
                "Registration with the Federal Tax Authority for UAE corporate tax, plus accurate preparation and filing of periodic corporate tax returns in line with current legislation.",
              forWho:
                "All UAE companies subject to the 9% corporate tax regime, including mainland and qualifying free zone entities.",
              includes: [
                "FTA corporate tax registration",
                "Taxable income assessment",
                "Return preparation and filing",
                "Small business relief and exemption review",
                "Deadline and penalty management",
              ],
              process:
                "Registration is completed promptly after onboarding; returns are prepared and filed ahead of each FTA deadline.",
            },
          },
          {
            title: "Advisory & Refund",
            description: "Tax planning, advisory and refund claims.",
            icon: HandCoins,
            detail: {
              overview:
                "Proactive tax advisory to structure your business efficiently, plus preparation and submission of refund claims where you are entitled to recover tax.",
              forWho:
                "Businesses wanting to optimise their tax position and reclaim eligible VAT or corporate tax refunds.",
              includes: [
                "Tax structure and efficiency review",
                "Impact assessments for new activities",
                "Refund eligibility analysis",
                "Refund claim preparation and submission",
                "Liaison with the FTA on queries",
              ],
              process:
                "Advisory is delivered on an ongoing or project basis; refund claims are prepared and tracked through to FTA approval.",
            },
          },
          {
            title: "VAT Services",
            description: "VAT registration, filing and compliance.",
            icon: Percent,
            detail: {
              overview:
                "End-to-end management of the 5% UAE VAT obligations — from registration and periodic return filing to compliant invoicing and record-keeping.",
              forWho:
                "Companies meeting the mandatory or voluntary VAT registration thresholds and needing accurate periodic filing.",
              includes: [
                "VAT registration or deregistration",
                "Periodic VAT return preparation and filing",
                "Input/output VAT reconciliation",
                "Compliant invoice and record guidance",
                "FTA audit support",
              ],
              process:
                "Returns are prepared and filed each tax period (monthly or quarterly) ahead of the FTA deadline.",
            },
          },
        ],
      },
      {
        heading: "Accounting",
        items: [
          {
            title: "Bookkeeping Services",
            description: "Accurate day-to-day transaction recording.",
            icon: BookOpen,
            detail: {
              overview:
                "Systematic recording of your daily financial transactions, keeping your books accurate, organised and ready for tax filing and reporting at all times.",
              forWho:
                "SMEs and growing companies that want reliable books without hiring an in-house accountant.",
              includes: [
                "Recording of sales, purchases and expenses",
                "Ledger maintenance and categorisation",
                "Cloud accounting software setup",
                "Monthly summaries",
                "VAT-ready transaction records",
              ],
              process:
                "Handled on a monthly or quarterly cycle, with secure digital records you can access any time.",
            },
          },
          {
            title: "Accounting Services",
            description: "Full-cycle accounting managed for you.",
            icon: Calculator,
            detail: {
              overview:
                "Comprehensive, full-cycle accounting — from bookkeeping through management reporting — giving you a clear, continuous view of your company's financial health.",
              forWho:
                "Businesses that want their entire finance function managed by a dependable external partner.",
              includes: [
                "Complete bookkeeping and ledgers",
                "Accounts payable and receivable management",
                "Management reports and dashboards",
                "Payroll coordination where needed",
                "Year-end preparation for audit",
              ],
              process:
                "Delivered on a recurring monthly basis with regular reporting tailored to your needs.",
            },
          },
          {
            title: "Bank Reconciliation",
            description: "Reconciled statements you can rely on.",
            icon: Scale,
            detail: {
              overview:
                "Matching your accounting records against bank statements to identify discrepancies, uncatalogued transactions and errors — ensuring your reported cash position is accurate.",
              forWho:
                "Any business that wants confidence its books reflect true bank balances, especially ahead of filing or audit.",
              includes: [
                "Statement-to-ledger matching",
                "Identification of discrepancies",
                "Correction of misposted entries",
                "Flagging of unrecorded fees or transactions",
                "Reconciliation reports",
              ],
              process:
                "Performed monthly as part of the accounting cycle, or as a one-off clean-up when needed.",
            },
          },
          {
            title: "Financial Statements",
            description: "Audit-ready financial statement preparation.",
            icon: BarChart3,
            detail: {
              overview:
                "Preparation of IFRS-compliant financial statements — balance sheet, profit and loss, and cash flow — suitable for banks, investors, auditors and authorities.",
              forWho:
                "Companies needing formal statements for audit, financing, license renewal, or investor reporting.",
              includes: [
                "Balance sheet preparation",
                "Profit and loss statement",
                "Cash flow statement",
                "Notes to the accounts",
                "Audit liaison and support",
              ],
              process:
                "Prepared at year-end or on demand, structured to meet the requirements of your intended recipient.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "banks",
    title: "Banks",
    tagline: "Personal and corporate banking setup with ongoing support.",
    intro:
      "Opening and managing UAE bank accounts can be complex. I guide you through personal and corporate banking, KYC and strategy — with support that continues well beyond account opening.",
    icon: Landmark,
    image: "/images/business-concierge/banks.png",
    groups: [
      {
        heading: "Banking Services",
        items: [
          {
            title: "Personal Banking",
            description: "Personal account opening with leading UAE banks.",
            icon: Wallet,
            detail: {
              overview:
                "Assistance opening a personal current or savings account with a reputable UAE bank, matched to your residency status, salary profile and lifestyle needs.",
              forWho:
                "New residents and investors who want a smooth account opening without repeated branch visits and rejections.",
              includes: [
                "Bank selection matched to your profile",
                "Documentation preparation and review",
                "Application submission and relationship-manager introduction",
                "Debit/credit card and online banking setup",
                "Guidance on minimum balance requirements",
              ],
              process:
                "With documents in order, personal accounts are typically opened within 3–10 working days depending on the bank.",
            },
          },
          {
            title: "Corporate Banking",
            description: "Business account setup for companies of all sizes.",
            icon: Landmark,
            detail: {
              overview:
                "Guidance through the increasingly rigorous UAE corporate account-opening process, presenting your business correctly to the bank to maximise approval chances.",
              forWho:
                "Newly formed and established companies needing a compliant operating account and payment facilities.",
              includes: [
                "Bank selection based on activity and structure",
                "Corporate KYC and document pack preparation",
                "Business profile and source-of-funds narrative",
                "Application submission and interview support",
                "Online banking and payment gateway setup",
              ],
              process:
                "Corporate accounts generally take 2–6 weeks; thorough preparation is the single biggest factor in faster approval.",
            },
          },
          {
            title: "KYC Documentation",
            description: "Preparation of compliant KYC documentation.",
            icon: ShieldCheck,
            detail: {
              overview:
                "Preparation of the Know Your Customer documentation banks require — company profiles, source-of-funds evidence and beneficial ownership records — presented to compliance standards.",
              forWho:
                "Companies and individuals whose applications risk delay or rejection without properly structured KYC.",
              includes: [
                "Company profile and business plan preparation",
                "Beneficial ownership documentation",
                "Source-of-funds and source-of-wealth evidence",
                "Supporting contracts and invoices compilation",
                "Compliance-ready formatting",
              ],
              process:
                "Prepared upfront so applications pass compliance review the first time, avoiding costly back-and-forth.",
            },
          },
          {
            title: "Banking Strategy",
            description: "Guidance on the right banking partners and structure.",
            icon: TrendingUp,
            detail: {
              overview:
                "Advisory on which banks, account types and structures best fit your business model, transaction flows and international needs.",
              forWho:
                "Businesses with cross-border flows, multiple entities, or specific financing and cash-management requirements.",
              includes: [
                "Assessment of your transaction and currency needs",
                "Bank and product comparison",
                "Multi-account and multi-currency structuring",
                "Trade finance and facility guidance",
                "Introductions to suitable relationship managers",
              ],
              process:
                "Delivered as a focused advisory engagement, resulting in a clear banking roadmap.",
            },
          },
          {
            title: "Ongoing Banking Support",
            description: "Continued liaison and support after onboarding.",
            icon: LifeBuoy,
            detail: {
              overview:
                "Continued assistance after your account is live — from resolving compliance queries to adding facilities — so banking never becomes a bottleneck for your business.",
              forWho:
                "Clients who want a single point of contact to manage bank relationships and periodic compliance requests.",
              includes: [
                "Liaison with relationship managers",
                "Periodic KYC refresh support",
                "Facility and card upgrade requests",
                "Assistance with account queries and holds",
                "Support adding new signatories or entities",
              ],
              process:
                "Provided on a retained or as-needed basis, giving you responsive help whenever the bank requires action.",
            },
          },
        ],
      },
    ],
  },
]

export function getBusinessCategory(slug: string) {
  return businessCategories.find((c) => c.slug === slug)
}
