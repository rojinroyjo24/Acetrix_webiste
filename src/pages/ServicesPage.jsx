import { useState } from 'react'
import {
  FileCheck2,
  BriefcaseBusiness,
  FileSearch,
  Clock3,
  LineChart,
  Calculator,
  ShieldCheck,
  Building2,
  Scale,
  Sparkles,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  FileText,
  BadgePercent,
  Laptop,
  Layers,
  Search,
  Filter
} from 'lucide-react'

export default function ServicesPage({ onNavigate, initialCategory = 'accounting' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')

  const pillarsData = [
    {
      id: 'accounting',
      title: 'Accounting Services',
      eyebrow: 'FOUNDATIONAL BOOKKEEPING & REPORTING',
      tagline: 'Flawless Ledgers, IFRS Statements & On-Demand Fractional Support',
      icon: FileCheck2,
      desc: 'Accurate, timely financial records are the lifeblood of every high-performing business. We manage your full accounting lifecycle—from day-to-day transaction entry to board-level IFRS financial statements.',
      standards: ['IFRS Compliant', 'Monthly Close in 5 Days', 'Multi-Currency Reconciled'],
      services: [
        {
          title: 'Account Reconciliation Services',
          desc: 'Comprehensive reconciliation of bank accounts, payment gateway batches (Stripe, Tabby), credit cards, vendor statements, and customer ledgers to eliminate discrepancies and identify hidden leakage.',
          deliverables: ['Monthly bank reconciliation reports', 'Vendor balance confirmations', 'Discrepancy resolution memos'],
        },
        {
          title: 'Accounting Outsourcing Services',
          desc: 'End-to-end outsourcing of your entire finance department. We handle accounts payable (AP), accounts receivable (AR), fixed asset registers, and payroll so you can focus entirely on scaling your core enterprise.',
          deliverables: ['Dedicated outsourced accounting team', 'Weekly AP/AR aging summaries', 'Month-end closing binder'],
        },
        {
          title: 'Updating of Backlog Accounts Service',
          desc: 'Rapid historical cleanup for enterprises with months or years of unorganized receipts, missed reconciliations, or pending transactions. We bring your books 100% current for FTA tax filings or audits.',
          deliverables: ['Historical ledger reconstruction', 'Missing invoice tracking', 'Auditor-ready backlog package'],
        },
        {
          title: 'Part-Time & Fractional CFO Services',
          desc: 'Senior financial leadership without the cost of a full-time executive. Our fractional CFOs provide cash flow forecasting, budget vs actual variance analysis, banking relationship management, and investor reporting.',
          deliverables: ['13-week rolling cashflow models', 'Board presentations & KPI dashboards', 'Capital allocation advisory'],
        },
        {
          title: 'Accounting System Analysis',
          desc: 'In-depth diagnostic review of your chart of accounts, invoicing workflows, expense approvals, and accounting software configuration to identify vulnerabilities, bottlenecks, and compliance gaps.',
          deliverables: ['System diagnostic scorecards', 'Standard Operating Procedures (SOPs)', 'Workflow optimization roadmap'],
        },
        {
          title: 'Accounting & Financial Reporting (IFRS)',
          desc: 'Preparation of audited-ready annual and quarterly financial statements adhering strictly to International Financial Reporting Standards (IFRS) and UAE Commercial Companies Law No. 32 of 2021.',
          deliverables: ['IFRS Statement of Financial Position', 'Comprehensive P&L & Cash Flow', 'Full disclosure footnotes'],
        },
        {
          title: 'Bookkeeping Services',
          desc: 'Systematic daily and weekly classification of income, expenses, bank feeds, and journal entries, maintaining a clean general ledger that makes tax season and audits frictionless.',
          deliverables: ['Daily/Weekly ledger maintenance', 'Digital receipt archiving', 'Real-time financial visibility'],
        },
        {
          title: 'Regular Accounting & High-Volume Data Entry',
          desc: 'High-speed, dual-shore transaction capture for businesses with heavy invoice volumes—retail chains, e-commerce stores, trading entities, and freight operators.',
          deliverables: ['Fast invoice extraction & entry', 'Batch expense verification', 'Automated bill allocation'],
        },
      ],
    },
    {
      id: 'auditing',
      title: 'Auditing & Assurance',
      eyebrow: 'STATUTORY AUDIT & CORPORATE GOVERNANCE',
      tagline: 'Independent Rigor Approved by UAE Freezones, Mainland & Major Banks',
      icon: ShieldCheck,
      desc: 'Independent, partner-led assurance services that reinforce stakeholder trust, fulfill mandatory freezone trade license renewals, satisfy banking covenants, and detect operational vulnerabilities before they escalate.',
      standards: ['FTA Certified Tax Agency', 'Approved in All Major UAE Freezones', 'Bank Recognized'],
      services: [
        {
          title: 'External Statutory Audit Services',
          desc: 'Comprehensive annual statutory financial audits required for license renewals across Dubai, Abu Dhabi, and Northern Emirates Freezones (DMCC, DIFC, DAFZA, JAFZA, ADGM, etc.) and UAE Mainland.',
          deliverables: ['Independent Auditor’s Report', 'Audited Balance Sheet & P&L', 'Management Recommendation Letter'],
        },
        {
          title: 'Internal Audit & Risk Governance',
          desc: 'Independent evaluation of your company’s internal controls, operating procedures, and governance frameworks to identify operational redundancies, prevent fraud, and optimize asset security.',
          deliverables: ['Risk assessment matrix', 'Control gap remediation plan', 'Executive internal audit briefing'],
        },
        {
          title: 'Organisational Restructuring Services',
          desc: 'Strategic operational and corporate alignment for holding companies, multi-entity groups, and growing family businesses looking to streamline management, enhance accountability, and cut overhead.',
          deliverables: ['Corporate restructuring blueprint', 'Responsibility matrix (RACI)', 'Operational workflow design'],
        },
        {
          title: 'Business Strategy Consulting Services',
          desc: 'Commercial financial consulting designed to help founders and executive leadership model new market entry, evaluate mergers & acquisitions (M&A), and stress-test unit economics.',
          deliverables: ['Strategic financial projections', 'Commercial feasibility studies', 'Capital efficiency assessments'],
        },
        {
          title: 'Financial Restructuring & Distress Advisory',
          desc: 'Specialized advisory for businesses confronting liquidity crunches, debt maturities, or operational distress. We renegotiate debt covenants, restructure vendor obligations, and preserve going-concern status.',
          deliverables: ['Debt restructuring proposals', 'Creditor negotiation support', 'Turnaround operational cash plan'],
        },
        {
          title: 'Internal Control Procedure Services',
          desc: 'Drafting and auditing Standard Operating Procedures (SOPs), dual-authorization workflows, procurement safeguards, and petty cash controls to ensure total fiduciary oversight.',
          deliverables: ['Formal Internal Control Manual', 'Segregation of duties policy', 'Fraud vulnerability review'],
        },
      ],
    },
    {
      id: 'vat',
      title: 'VAT & UAE Corporate Tax',
      eyebrow: 'REGULATORY TAX COMPLIANCE & FTA FILINGS',
      tagline: 'End-to-End Compliance for 9% Corporate Tax, FTA VAT & Freezone 0% QFZP',
      icon: BadgePercent,
      desc: 'UAE tax regulations are dynamic and strictly enforced. We protect your enterprise from crippling penalties through rigorous return preparation, FTA representation, and strategic Corporate Tax threshold planning.',
      standards: ['FTA Registered Tax Agency', '9% Corporate Tax Ready', '0% Freezone QFZP Specialists'],
      services: [
        {
          title: 'UAE Corporate Tax Registration & Assessment',
          desc: 'Mandatory Federal Tax Authority (FTA) Corporate Tax registration under Federal Decree-Law No. 47 of 2022. Includes preliminary impact assessments to calculate taxable income vs exempt profits.',
          deliverables: ['Corporate Tax Registration Certificate', 'Tax group structuring advisory', 'Accounting vs Tax income bridge'],
        },
        {
          title: 'FTA VAT Return Preparation & Filing',
          desc: 'Meticulous quarterly and monthly VAT return preparation (Form 201). Complete verification of input tax recovery, reverse charge mechanism (RCM) applicability, and zero-rated export validations.',
          deliverables: ['Quarterly VAT return filing memo', 'Input tax recovery verification', 'FTA portal submission confirmation'],
        },
        {
          title: 'VAT Voluntary Disclosure (Form 211) & Reconsideration',
          desc: 'Correction of historical filing errors through formal FTA Voluntary Disclosures before penalties trigger. We also draft formal legal reconsiderations against administrative tax fines.',
          deliverables: ['Form 211 preparation & substantiation', 'Penalty waiver request submissions', 'FTA clarification correspondence'],
        },
        {
          title: 'VAT Health Check & Pre-Audit Diagnostic',
          desc: 'A comprehensive mock FTA audit of your sales invoices, purchase records, customs declarations, and tax ledgers to uncover and rectify compliance vulnerabilities ahead of FTA inspectors.',
          deliverables: ['FTA audit risk scorecard', 'Invoice compliance audit report', 'Actionable remediation checklist'],
        },
        {
          title: 'Corporate Tax 9% Threshold & Relief Optimization',
          desc: 'Strategic structuring under Small Business Relief (SBR) guidelines (AED 3M revenue threshold) and optimization of allowable deductible expenses, interest caps, and tax depreciation schedules.',
          deliverables: ['Deductibility qualification report', 'Interest capping calculations', 'Small business relief verification'],
        },
        {
          title: 'Qualifying Free Zone Person (QFZP) 0% Advisory',
          desc: 'Detailed assessment of whether your Freezone entity satisfies all statutory criteria (adequate substance, qualifying income, audited financials, transfer pricing) to maintain the coveted 0% tax rate.',
          deliverables: ['Substance verification documentation', 'Qualifying vs non-qualifying income analysis', 'De-minimis rule compliance audit'],
        },
        {
          title: 'Transfer Pricing & Related Party Documentation',
          desc: 'Drafting mandatory Local Files, Master Files, and Transfer Pricing Disclosure forms under arm’s length principles for transactions between sister entities, shareholders, and cross-border affiliates.',
          deliverables: ['Transfer pricing benchmark report', 'Intercompany service agreements', 'Annual TP disclosure schedules'],
        },
        {
          title: 'Corporate Tax Return Filing & Annual Compliance',
          desc: 'Final annual Corporate Tax calculation, book-to-tax adjustments, loss carry-forward tracking, foreign tax credit calculations, and timely submission on the FTA EmaraTax digital platform.',
          deliverables: ['Annual Corporate Tax computations', 'Tax return filing receipts', 'Deferred tax asset/liability register'],
        },
      ],
    },
    {
      id: 'software',
      title: 'Accounting Software & Cloud ERP',
      eyebrow: 'FINANCIAL TECHNOLOGY & WORKFLOW AUTOMATION',
      tagline: 'Accredited Software Setup, Chart of Accounts & Team Training',
      icon: Laptop,
      desc: 'Modern businesses cannot afford disconnected spreadsheets. We implement, configure, and train your team on FTA-accredited cloud accounting systems tailored to your unique transactional volume.',
      standards: ['FTA Certified Software Partners', 'Automated Bank Feeds', 'Custom API Integrations'],
      services: [
        {
          title: 'Accounting Software Consultancy & Selection',
          desc: 'Independent evaluation and deployment of the optimal accounting software for your enterprise—Zoho Books, QuickBooks Online, Xero, Tally Prime, or customized ERP platforms.',
          deliverables: ['Software fitment recommendation report', 'Clean Chart of Accounts setup', 'Historical data migration & verification'],
        },
        {
          title: 'Corporate Training on Accounting Software',
          desc: 'Hands-on, role-specific training for your accounting personnel, procurement team, and sales coordinators to ensure error-free daily data entry, invoice generation, and tax code application.',
          deliverables: ['Standard Operating Procedures manual', 'Recorded training workshops', 'Ongoing software helpdesk support'],
        },
      ],
    },
  ]

  const activePillar = pillarsData.find((p) => p.id === activeCategory) || pillarsData[0]

  const filteredServices = activePillar.services.filter((s) => {
    if (!searchQuery) return true
    return (
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="inner-page services-page">
      {/* Page Hero */}
      <section className="inner-hero">
        <div className="inner-hero-backdrop" aria-hidden="true" />
        <div className="container inner-hero-content">
          <div className="inner-hero-top-bar">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Home</a>
              <ChevronRight size={14} />
              <span aria-current="page">Services</span>
            </nav>

            <span className="inner-hero-badge">
              <Layers size={15} />
              <span>FULL-SPECTRUM FINANCIAL & REGULATORY CAPABILITIES</span>
            </span>
          </div>

          <h1 className="inner-hero-title">
            Comprehensive <span>Accounting, Audit & Tax</span> Advisory
          </h1>

          <p className="inner-hero-lead">
            Precision-engineered financial services designed to ensure total UAE Federal Tax Authority (FTA) compliance, eliminate regulatory fines, and give executive teams absolute clarity over their enterprise numbers.
          </p>

          {/* Quick Filter Pill Buttons */}
          <div className="services-filter-pills">
            {pillarsData.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`service-filter-pill ${activeCategory === p.id ? 'active' : ''}`}
                onClick={() => { setActiveCategory(p.id); setSearchQuery('') }}
              >
                <span>{p.title}</span>
                <span className="pill-count">{p.services.length}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Service Pillar Section */}
      <section className="section services-main-section">
        <div className="container">
          {/* Active Pillar Header Card */}
          <div className="active-pillar-banner">
            <div className="pillar-banner-text">
              <span className="eyebrow">{activePillar.eyebrow}</span>
              <h2>{activePillar.title}</h2>
              <p className="pillar-lead">{activePillar.desc}</p>
            </div>
            <div className="pillar-banner-badges">
              {activePillar.standards.map((std, i) => (
                <div className="std-badge" key={i}>
                  <CheckCircle2 size={15} />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Search / Filter in category */}
          <div className="services-search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={`Search within ${activePillar.title} (${activePillar.services.length} services)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </div>

          {/* Services Cards Grid */}
          <div className="services-detailed-grid">
            {filteredServices.map((service, index) => (
              <div className="service-detail-card" key={service.title}>
                <div className="service-card-top">
                  <span className="service-index-badge">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-card-desc">{service.desc}</p>

                <div className="service-deliverables">
                  <strong>Key Deliverables:</strong>
                  <ul>
                    {service.deliverables.map((del, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="del-check" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-footer">
                  <a
                    href="#/contact"
                    className="service-inquire-link"
                    onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Methodology */}
      <section className="section services-methodology-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">OUR METHODOLOGY</span>
            <h2>How We Onboard & Execute Seamlessly</h2>
            <p>From initial diagnostic review to partner-led signoff, our process is systematic, predictable, and transparent.</p>
          </div>

          <div className="methodology-steps-grid">
            <div className="method-step-card">
              <span className="step-num-pill">Step 01</span>
              <h4>Diagnostic Health Check</h4>
              <p>We review your existing chart of accounts, backlog receipts, and previous VAT/tax filings to identify immediate compliance gaps.</p>
            </div>
            <div className="method-step-card">
              <span className="step-num-pill">Step 02</span>
              <h4>Architecture & SOP Setup</h4>
              <p>We configure standardized accounting rules, role access, and document collection workflows tailored to your operational rhythm.</p>
            </div>
            <div className="method-step-card">
              <span className="step-num-pill">Step 03</span>
              <h4>Dual-Shore Execution</h4>
              <p>Daily and weekly reconciliations are processed by our dedicated accounting specialists with multi-tier quality reviews.</p>
            </div>
            <div className="method-step-card">
              <span className="step-num-pill">Step 04</span>
              <h4>Partner Sign-Off & Insights</h4>
              <p>A Senior Practice Partner reviews final statements, files FTA returns on time, and presents monthly management KPI dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Compatibility Strip */}
      <section className="section software-strip-section">
        <div className="container">
          <div className="software-box">
            <div className="software-text">
              <span className="eyebrow">ACCREDITED TECHNOLOGY</span>
              <h3>Certified Across Leading Cloud Accounting Software</h3>
              <p>We integrate, configure, and train your staff on FTA-compliant accounting solutions.</p>
            </div>
            <div className="software-chips-grid">
              <span className="software-chip">Zoho Books (Certified Partner)</span>
              <span className="software-chip">QuickBooks Online</span>
              <span className="software-chip">Xero Cloud Accounting</span>
              <span className="software-chip">Tally Prime (UAE VAT Edition)</span>
              <span className="software-chip">SAP Business One</span>
              <span className="software-chip">Microsoft Dynamics 365</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta-strip">
        <div className="container cta-flex">
          <div className="cta-text">
            <h3>Need a Custom Service Package for Your UAE Entity?</h3>
            <p>Speak directly with our Practice Leaders to tailor an engagement that matches your exact transaction volume.</p>
          </div>
          <div className="cta-actions">
            <a
              href="#/contact"
              className="button button-primary"
              onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
            >
              Get Custom Service Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

