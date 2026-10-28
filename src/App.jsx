import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Eye,
  FileBarChart,
  FileCheck2,
  FileSearch,
  Handshake,
  Landmark,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  X,
} from 'lucide-react'

const imageBase = 'https://images.unsplash.com'

const navItems = [
  { label: 'Home', href: '#home' },
  // { label: 'UAE Presence', href: '#uae-presence' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#contact' },
]

const footerQuickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#contact' },
]

const footerServices = [
  { label: 'Bookkeeping Services', href: '#services' },
  { label: 'Accounting Outsourcing', href: '#services' },
  { label: 'Account Reconciliation', href: '#services' },
  { label: 'Financial Reporting', href: '#services' },
  { label: 'Accounting System Analysis', href: '#services' },
  { label: 'Part-Time Accounting', href: '#services' },
]

const heroAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
]


const trustItems = [
  { icon: ShieldCheck, title: 'Accuracy in Accounting', detail: 'Consistent and reliable records' },
  { icon: Handshake, title: 'Transparent Processes', detail: 'Clear and open communication' },
  { icon: BarChart3, title: 'Business-Focused Solutions', detail: 'Support for your operational goals' },
  { icon: UsersRound, title: 'Reliable Financial Support', detail: 'Professional and timely assistance' },
]

const services = [
  { icon: FileCheck2, title: 'Account Reconciliation Services', detail: 'Reconcile financial records, identify discrepancies, and maintain consistency between accounts.' },
  { icon: BriefcaseBusiness, title: 'Accounting Outsourcing Services', detail: 'Outsource accounting activities to simplify financial administration and improve control.' },
  { icon: FileSearch, title: 'Updating of Backlog Accounts Service', detail: 'Bring pending accounting records up to date by organizing historical transactions.' },
  { icon: Clock3, title: 'Part Time Accounting Services', detail: 'Flexible accounting support for businesses that need professional assistance without a full-time team.' },
  { icon: LineChart, title: 'Accounting System Analysis', detail: 'Review accounting workflows and system usage to identify opportunities for better information.' },
  { icon: FileBarChart, title: 'Accounting And Financial Reporting Services', detail: 'Organize accounting information into meaningful financial reports for better decisions.' },
  { icon: Calculator, title: 'Bookkeeping Services', detail: 'Maintain organized records of business transactions, income and expenses.' },
  { icon: ClipboardCheck, title: 'Regular Accounting Services – Data Entry', detail: 'Support routine accounting operations through structured financial data entry.' },
]

const industries = [
  { title: 'Small and Medium-Sized Businesses', detail: 'Accounting support to manage and grow your business.', image: `${imageBase}/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80` },
  { title: 'Professional Services', detail: 'Tailored accounting solutions for service-based professionals.', image: `${imageBase}/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80` },
  { title: 'Retail and Ecommerce', detail: 'Support for retail operations and online businesses.', image: `${imageBase}/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80` },
  { title: 'Trading and Distribution', detail: 'Accounting for trade activities and distribution networks.', image: `${imageBase}/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80` },
  { title: 'Startups and Growing Businesses', detail: 'Flexible support for business at every stage.', image: `${imageBase}/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80` },
  { title: 'Service-Based Companies', detail: 'Accounting assistance for various service industries.', image: `${imageBase}/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80` },
]

const steps = [
  { number: '01', icon: FileSearch, title: 'Understand', detail: 'We learn about your business, current accounting processes, and requirements.' },
  { number: '02', icon: ClipboardCheck, title: 'Review', detail: 'We review the available records, identify priorities, and understand the scope of work.' },
  { number: '03', icon: BarChart3, title: 'Organize', detail: 'We carry out the agreed accounting activities using a structured workflow.' },
  { number: '04', icon: ShieldCheck, title: 'Support', detail: 'We provide the agreed record, reports, and ongoing accounting assistance.' },
]

const testimonials = [
  { quote: 'Acetrix helped us keep our accounting organized and up to date. Their professional approach and clear communication make working with them simple and effective.', name: 'Business Owner', company: 'Service industry', initials: 'BO' },
  { quote: 'Their support with bookkeeping and financial reporting has made a real difference in how we manage our business finances.', name: 'Managing Director', company: 'Retail business', initials: 'MD' },
  { quote: 'A reliable and responsive team. They understand our requirements and provide practical accounting support.', name: 'Founder', company: 'Professional services', initials: 'FO' },
]

const faqs = [
  ['What accounting services does Acetrix provide?', 'Acetrix provides reconciliation, bookkeeping, outsourced accounting, backlog updating, reporting, system analysis, part-time accounting and regular data entry services.'],
  ['Can a business use part-time accounting services?', 'Yes. Part-time support is ideal for businesses that need dependable accounting expertise without the cost of a full-time in-house team.'],
  ['What is accounting outsourcing?', 'Accounting outsourcing means engaging a specialist team to handle agreed accounting activities, giving your business more time and clarity to focus on operations.'],
  ['What is included in bookkeeping services?', 'Bookkeeping includes maintaining organized records of transactions, income, expenses, and the supporting information your business relies on.'],
  ['Can Acetrix help update pending accounting records?', 'Yes. Our backlog accounting service brings pending records up to date through a structured review and organization process.'],
  ['How can accounting and financial reporting help my business?', 'Reliable reports help you understand performance, monitor cash flow, plan ahead, and make decisions with greater confidence.'],
  ['What are account reconciliation services?', 'Reconciliation compares records from different sources, identifies discrepancies and helps keep financial information accurate and consistent.'],
  ['How can I request a consultation?', 'Use the contact form below or call our team. We will learn about your requirements and suggest the right next step.'],
]

const insights = [
  { category: 'Accounting', title: 'Why Account Reconciliation Matters for Businesses', detail: 'Understand how regular account reconciliation helps maintain accurate records and better financial control.', time: '5 min read', image: `${imageBase}/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=85` },
  { category: 'Business', title: 'The Benefits of Outsourcing Accounting Services', detail: 'Explore how outsourcing accounting can improve efficiency and reduce administrative workload.', time: '6 min read', image: `${imageBase}/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=85` },
  { category: 'Bookkeeping', title: 'How Organized Bookkeeping Supports Better Decisions', detail: 'Learn how consistent bookkeeping helps you understand your finances and plan for the future.', time: '5 min read', image: `${imageBase}/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=85` },
]

function Logo({ light = false }) {
  return (
    <a href="#home" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Acetrix home">
      <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
      <span className="logo-copy"><strong>Acetrix</strong><small>ACCOUNTING. ADVISORY.</small></span>
    </a>
  )
}

function SectionIntro({ eyebrow, title, light = false }) {
  return (
    <div className={`section-intro ${light ? 'section-intro-light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => <a className={index === 0 ? 'active' : ''} key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button-primary nav-cta" href="#contact">Book a Consultation <ArrowRight size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(item => <a key={item.href} href={item.href} onClick={close}>{item.label}</a>)}
        <a className="button button-primary" href="#contact" onClick={close}>Book a Consultation <ArrowRight size={15} /></a>
      </nav>}
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">YOUR TRUSTED FINANCIAL PARTNER</p>
          <h1>
            Clarity in Numbers.<br />
            <span>Confidence in<br className="desktop-only" /> Every Decision.</span>
          </h1>
          <p className="hero-body">
            Acetrix helps businesses simplify their accounting, streamline financial operations, and make confident decisions with reliable accounting and financial reporting services.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Explore Our Services <ArrowRight size={18} />
            </a>
            <a className="button button-outline" href="#contact">
              Talk to Our Experts
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero-workspace.png"
            alt="Professional financial analysis workspace with laptop, calculator, and reports"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="growth-card">
            <span className="card-title">Financial Growth</span>
            <div className="mini-bars" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="growth-stat">
              <strong>+18%</strong>
              <small>vs last year</small>
            </div>
          </div>
          <div className="check-card">
            <span><Check size={14} /> Organize</span>
            <span><Check size={14} /> Reconcile</span>
            <span><Check size={14} /> Report</span>
            <span><Check size={14} /> Grow</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return <section className="trust-strip"><div className="container trust-grid">{trustItems.map(({ icon: Icon, title, detail }) => <div className="trust-item" key={title}><span className="icon-badge"><Icon size={20} /></span><span><strong>{title}</strong><small>{detail}</small></span></div>)}</div></section>
}

function UAEPresence() {
  const [activeLocation, setActiveLocation] = useState(0)

  const locations = [
    {
      id: 'dubai',
      name: 'Dubai',
      flag: '🇦🇪',
      role: 'Commercial & Freezones Hub',
      jurisdiction: 'DMCC • DIFC • DAFZA • Mainland',
      desc: 'UAE Corporate Tax (9%), FTA VAT filings, and tailored mainland & freezone audit compliance.',
    },
    {
      id: 'abudhabi',
      name: 'Abu Dhabi',
      flag: '🇦🇪',
      role: 'Capital Advisory & ADGM',
      jurisdiction: 'ADGM & Abu Dhabi Mainland',
      desc: 'IFRS statutory audit, financial restructuring, and regulatory advisory for capital market entities.',
    },
    {
      id: 'sharjah',
      name: 'Sharjah',
      flag: '🇦🇪',
      role: 'Trade & Industrial Branch',
      jurisdiction: 'SAIF Zone • HFZA • Mainland',
      desc: 'Trade inventory valuation, cost accounting, and SME bookkeeping across the Northern Emirates.',
    },
    {
      id: 'india',
      name: 'India Delivery',
      flag: '🇮🇳',
      role: 'Global Offshore Center',
      jurisdiction: 'Dual-Shore Scalability',
      desc: 'Rapid backlog clearing, high-volume bookkeeping, and seamless dual-shore execution.',
    },
  ]

  const highlights = [
    { title: 'FTA Tax & VAT Compliant', detail: 'End-to-end UAE Corporate Tax (9%) & VAT filing support.' },
    { title: 'Mainland & Freezones', detail: 'Tailored accounting for DMCC, DIFC, ADGM, DAFZA & Mainland.' },
    { title: 'IFRS-Standard Reporting', detail: 'Audited financial reports adhering strictly to IFRS frameworks.' },
    { title: 'UAE & India Delivery', detail: 'Dual-shore agility with localized advisory and offshore scale.' },
  ]

  return (
    <section className="section uae-section" id="uae-presence">
      <div className="container uae-grid">
        <div className="uae-visual-col">
          {/* Interactive Hub Navigation Tabs */}
          <div className="uae-hub-nav" role="tablist" aria-label="Acetrix Regional Presence Hubs">
            {locations.map((loc, idx) => (
              <button
                key={loc.id}
                type="button"
                role="tab"
                aria-selected={activeLocation === idx}
                className={`uae-hub-tab ${activeLocation === idx ? 'active' : ''}`}
                onClick={() => setActiveLocation(idx)}
              >
                <span className="hub-flag" aria-hidden="true">{loc.flag}</span>
                <span className="hub-name">{loc.name}</span>
                {activeLocation === idx && <span className="hub-active-dot" aria-hidden="true" />}
              </button>
            ))}
          </div>

          {/* 3D UAE Map Showcase Card */}
          <div className="uae-map-card">
            <div className="uae-map-header-badges">
              <div className="uae-live-badge">
                <span className="uae-pulse-dot" aria-hidden="true" />
                <span>Live UAE Advisory Hubs</span>
              </div>
              <div className="uae-fta-badge">
                <ShieldCheck size={13} />
                <span>FTA Registered Tax Agency</span>
              </div>
            </div>

            <div className="uae-map-image-wrapper">
              <img
                src="/images/uae-presence-map-new.jpg"
                alt="Acetrix 3D UAE Presence Map - Dubai, Abu Dhabi, Sharjah & India"
                className="uae-map-image"
                loading="lazy"
              />
              <div className="uae-map-gradient-overlay" />
            </div>

            {/* Active Location Detail Callout */}
            <div className="uae-map-active-callout">
              <div className="callout-indicator">
                <MapPin size={16} />
                <span>{locations[activeLocation].flag} {locations[activeLocation].name} Hub — {locations[activeLocation].role}</span>
              </div>
              <p className="callout-desc">
                <strong>{locations[activeLocation].jurisdiction}:</strong> {locations[activeLocation].desc}
              </p>
            </div>
          </div>

          {/* Value Stats Strip */}
          <div className="uae-network-stats">
            <div className="uae-stat-pill">
              <span className="stat-number">7</span>
              <div>
                <strong>Emirates Coverage</strong>
                <small>Mainland & Freezones</small>
              </div>
            </div>
            <div className="uae-stat-pill">
              <span className="stat-number">100%</span>
              <div>
                <strong>FTA & IFRS Compliant</strong>
                <small>Certified Practice</small>
              </div>
            </div>
            <div className="uae-stat-pill">
              <span className="stat-number">Dual-Shore</span>
              <div>
                <strong>UAE + India Delivery</strong>
                <small>Local Advisory & Scale</small>
              </div>
            </div>
          </div>
        </div>

        <div className="uae-content-col">
          <div className="uae-pill-eyebrow">
            <span className="uae-flag" aria-hidden="true">🇦🇪</span>
            <span>Acetrix Accounting & Advisory, UAE</span>
          </div>

          <h2 className="uae-title">
            Looking For The Best Audit And Accounting Services In UAE?
          </h2>

          <p className="uae-lead">
            Our seasoned Chartered Accountants and financial specialists in the UAE bring their expertise across offices in <strong>Abu Dhabi, Dubai, Sharjah, and India</strong>. Whether you’re a bold startup or a seasoned MNC, Acetrix tailors its comprehensive accounting and financial advisory services to your journey.
          </p>

          <p className="uae-body">
            We provide full-spectrum support for UAE Corporate Tax registration and return filings, FTA VAT compliance, financial reporting, and backlog clearing. Our team of Auditors, Accountants, and Tax Specialists empowers you to navigate complex regulatory landscapes with total confidence, unlocking true potential across the dynamic Emirati market.
          </p>

          <div className="uae-highlights-grid">
            {highlights.map(item => (
              <div className="uae-highlight-item" key={item.title}>
                <span className="uae-check-icon"><Check size={14} /></span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="uae-actions">
            <a className="button button-primary" href="#contact">
              Schedule UAE Consultation <ArrowRight size={15} />
            </a>
            <a className="button button-secondary uae-call-btn" href="tel:+97141234567">
              <Phone size={15} />
              <span>+971 4 123 4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeadershipVision() {
  return (
    <section className="section leadership-section" id="about">
      {/* Ambient Visual Glows & Dot Matrix */}
      <div className="leadership-glow leadership-glow-1" aria-hidden="true" />
      <div className="leadership-glow leadership-glow-2" aria-hidden="true" />
      <div className="leadership-grid-pattern" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="leadership-header">
          <div className="leadership-pill-eyebrow">
            <Sparkles size={14} />
            <span>Acetrix Leadership & Corporate Vision</span>
          </div>
          <h2 className="leadership-title">
            A Vision for Financial Clarity, Integrity & Sustainable Growth
          </h2>
          <p className="leadership-subtitle">
            Founded on chartered accounting precision and driven by modern advisory agility, Acetrix bridges on-the-ground UAE regulatory authority with seamless cross-border delivery.
          </p>
        </div>

        {/* Two-Column Showcase: Executive Message + Acetrix Corporate Profile */}
        <div className="leadership-showcase-grid">
          {/* Column 1: Executive / CEO Message */}
          <div className="leadership-message-card">
            <div className="exec-badge-wrap">
              <span className="exec-quote-pill">
                <Quote size={13} />
                <span>Executive Leadership Message</span>
              </span>
              <span className="exec-since-badge">Est. In UAE & India</span>
            </div>

            <h3 className="exec-quote-headline">
              “True financial advisory must be more than compliance—it must be the compass that drives confident enterprise growth.”
            </h3>

            <div className="exec-body-content">
              <p>
                When we established Acetrix, our journey began with a clear purpose: to bridge the gap between traditional retrospective bookkeeping and forward-looking, high-precision financial stewardship.
              </p>
              <p>
                With roots in corporate finance and decades of collective experience across Big 4 accounting and banking advisory, we recognized the growing regulatory complexity modern businesses face in the UAE. Navigating the 9% UAE Corporate Tax, FTA VAT mandates, and multi-jurisdiction freezone audits in DIFC, ADGM, and DMCC requires more than standard data entry—it demands trusted, strategic financial leadership.
              </p>
              <p>
                Today, that vision has evolved into an agile cross-border practice operating across Dubai, Abu Dhabi, Sharjah, and our specialized delivery center in India. We empower businesses to operate with 100% regulatory confidence, streamlined cash flows, and institutional financial clarity.
              </p>
            </div>

            <div className="exec-signoff">
              <div className="exec-avatar-crest" aria-hidden="true">
                <span>AX</span>
              </div>
              <div className="exec-details">
                <strong>Executive Leadership & Partners</strong>
                <small>Acetrix Accounting & Financial Advisory LLC</small>
                <div className="exec-credentials-tags">
                  <span>FCA</span>
                  <span>FTA Certified Tax Specialists</span>
                  <span>IFRS Advisors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Acetrix Corporate Profile & Impact Showcase (In place of personal photo) */}
          <div className="acetrix-details-card">
            <div className="profile-card-top">
              <div className="profile-title-group">
                <span className="profile-icon-badge">
                  <Building2 size={22} />
                </span>
                <div>
                  <h3>Acetrix At A Glance</h3>
                  <p>Licensed Accounting, Corporate Tax & Audit Practice</p>
                </div>
              </div>
              <span className="fta-verified-pill">
                <ShieldCheck size={14} />
                <span>FTA Registered</span>
              </span>
            </div>

            {/* Core Competencies 2x2 Grid */}
            <div className="acetrix-pillars-grid">
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>FTA Tax & VAT Authority</strong>
                  <p>Full-cycle UAE Corporate Tax (9%), VAT returns, registrations & clarification filings.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>Dual-Shore Delivery Agility</strong>
                  <p>On-the-ground UAE partner advisory backed by our high-capacity India offshore center.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>Freezone & Mainland Mastery</strong>
                  <p>Expert compliance for DMCC, DIFC, ADGM, DAFZA, SAIF Zone & UAE Mainland entities.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>IFRS Statutory Auditing</strong>
                  <p>Auditor-ready balance sheets, P&L statements, and board-level management reporting.</p>
                </div>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="acetrix-profile-stats">
              <div className="profile-stat">
                <strong>500+</strong>
                <small>Enterprises Stewarded</small>
              </div>
              <div className="profile-stat">
                <strong>99.8%</strong>
                <small>On-Time Filing Rate</small>
              </div>
              <div className="profile-stat">
                <strong>4 Hubs</strong>
                <small>Dubai • Abu Dhabi • Sharjah • India</small>
              </div>
            </div>

            <div className="profile-card-footer">
              <p>
                <Sparkles size={14} /> Empowering startups, growing SMEs, and MNCs across the UAE & GCC.
              </p>
              <a href="#contact" className="profile-action-link">
                Consult Our Advisory Team <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Three Strategic Foundation Cards: Mission, Vision, Goals */}
        <div className="strategic-foundation-grid">
          {/* Mission Card */}
          <div className="foundation-card foundation-mission">
            <div className="foundation-card-header">
              <span className="foundation-icon-wrap mission-icon">
                <Target size={22} />
              </span>
              <span className="foundation-pill">Strategic Purpose</span>
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses across the UAE and global markets with uncompromising accounting integrity, proactive tax compliance, and strategic financial insights that eliminate regulatory risk and accelerate sustainable profitability.
            </p>
            <ul className="foundation-list">
              <li><Check size={14} /> Flawless FTA Tax & VAT Compliance</li>
              <li><Check size={14} /> Transparent Real-Time Financial Reporting</li>
              <li><Check size={14} /> Agile Dual-Shore Books Clearance</li>
            </ul>
            <div className="foundation-bar mission-bar" aria-hidden="true" />
          </div>

          {/* Vision Card */}
          <div className="foundation-card foundation-vision">
            <div className="foundation-card-header">
              <span className="foundation-icon-wrap vision-icon">
                <Eye size={22} />
              </span>
              <span className="foundation-pill">Future Horizon</span>
            </div>
            <h3>Our Vision</h3>
            <p>
              To stand as the Middle East’s benchmark accounting and financial advisory practice, renowned for combining on-the-ground regulatory mastery with innovative dual-shore delivery that elevates our clients' enterprise value.
            </p>
            <ul className="foundation-list">
              <li><Check size={14} /> Regional Benchmark in Corporate Tax Advisory</li>
              <li><Check size={14} /> Digital-First Automated Financial Infrastructure</li>
              <li><Check size={14} /> Trusted Cross-Border Financial Partner</li>
            </ul>
            <div className="foundation-bar vision-bar" aria-hidden="true" />
          </div>

          {/* Goals Card */}
          <div className="foundation-card foundation-goals">
            <div className="foundation-card-header">
              <span className="foundation-icon-wrap goals-icon">
                <Rocket size={22} />
              </span>
              <span className="foundation-pill">Action Commitments</span>
            </div>
            <h3>Our Goals</h3>
            <p>
              To deliver measurable capital efficiency, safeguard enterprises against penalties, cultivate enduring client partnerships, and provide scalable financial frameworks that support growth at every stage.
            </p>
            <ul className="foundation-list">
              <li><Check size={14} /> 100% Zero-Penalty Regulatory Track Record</li>
              <li><Check size={14} /> Rapid 24/7 Turnaround on Financial Books</li>
              <li><Check size={14} /> Dedicated CFO-Level Growth Advisory</li>
            </ul>
            <div className="foundation-bar goals-bar" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="services-ambient-glow services-ambient-glow-1" aria-hidden="true" />
      <div className="services-ambient-glow services-ambient-glow-2" aria-hidden="true" />
      <div className="container relative z-10">
        <SectionIntro eyebrow="What we do" title="Accounting Solutions for Your Business" />
        <div className="services-grid">
          {services.map(({ icon: Icon, title, detail }, index) => {
            const indexStr = String(index + 1).padStart(2, '0')
            return (
              <article className="service-card glass-card" key={title}>
                <div className="service-card-header">
                  <span className="service-icon-wrap">
                    <Icon size={22} />
                  </span>
                  <span className="service-index">{indexStr}</span>
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
                <div className="service-card-footer">
                  <a className="service-cta" href="#contact">
                    <span>Learn More</span>
                    <span className="service-cta-arrow">
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhyAcetrix() {
  const items = [
    ['01', 'Accuracy and Attention to Detail', 'Organized accounting processes designed to support accurate and consistent records.'],
    ['02', 'Flexible Service Options', 'Accounting support tailored to different operational needs and business stages.'],
    ['03', 'Clear Financial Information', 'Structured records and reporting that help you understand your financial position.'],
    ['04', 'A Business-Focused Approach', 'Practical accounting support that helps you focus on what matters most.'],
  ]
  return (
    <section className="why-section" id="why-us">
      <div className="container why-grid">
        <div className="why-copy"><p className="eyebrow eyebrow-light">Why Acetrix</p><h2>More Than Accounting.<br />A Clearer View of Your Finances.</h2><p>We combine dependable accounting expertise with a practical understanding of how businesses operate, so your numbers become a tool for confident decisions.</p><a className="button button-light" href="#contact">Learn More About Us <ArrowRight size={15} /></a></div>
        <div className="why-features">{items.map(([number, title, detail], index) => <div className="why-feature" key={number}><span className="why-feature-icon">{index === 0 ? <ShieldCheck size={20} /> : index === 1 ? <Sparkles size={20} /> : index === 2 ? <FileBarChart size={20} /> : <TrendingUp size={20} />}</span><span><small>{number}.</small><strong>{title}</strong><p>{detail}</p></span></div>)}</div>
      </div>
      <div className="why-building" aria-hidden="true"><div /></div>
    </section>
  )
}

function Industries() {
  return <section className="section" id="industries"><div className="container"><SectionIntro eyebrow="Our industries" title="Industries We Serve" /><div className="industry-grid">{industries.map(industry => <article className="industry-card" key={industry.title}><img src={industry.image} alt="" /><div><h3>{industry.title}</h3><p>{industry.detail}</p><a href="#contact" aria-label={`Learn more about ${industry.title}`}><ArrowUpRight size={17} /></a></div></article>)}</div></div></section>
}

function Process() {
  return <section className="section section-mist process-section"><div className="container"><div className="process-heading"><p className="eyebrow">How we work</p><h2>A Straightforward Approach to Accounting</h2></div><div className="process-line">{steps.map(({ number, icon: Icon, title, detail }, index) => <div className="process-step" key={number}><div className="step-top"><span>{number}</span>{index < steps.length - 1 && <i />}</div><span className="process-icon"><Icon size={21} /></span><h3>{title}</h3><p>{detail}</p></div>)}</div></div></section>
}

function Testimonials() {
  const [active, setActive] = useState(0)
  return <section className="section testimonials"><div className="container"><SectionIntro eyebrow="What our clients say" title="Built Around Your Business Needs" /><div className="testimonial-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}><ChevronLeft size={17} /></button><button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}><ChevronRight size={17} /></button></div><div className="testimonials-grid">{testimonials.map((item, index) => <article className={`testimonial-card ${index === active ? 'featured' : ''}`} key={item.name}><Quote size={24} className="quote-mark" /><p>{item.quote}</p><div className="testimonial-author"><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.company}</small></div></div></article>)}</div></div></section>
}

function FAQ() {
  const [active, setActive] = useState(0)
  return <section className="section section-mist faq-section"><div className="container"><div className="faq-heading"><p className="eyebrow">FAQ</p><h2>Frequently Asked Questions</h2></div><div className="faq-grid">{faqs.map(([question, answer], index) => <div className={`faq-item ${active === index ? 'open' : ''}`} key={question}><button type="button" onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>{question}</span><ChevronDown size={16} /></button>{active === index && <div className="faq-answer"><p>{answer}</p></div>}</div>)}</div></div></section>
}

function Insights() {
  return <section className="section" id="insights"><div className="container"><SectionIntro eyebrow="Latest insights" title="Insights for Better Financial Management" /><div className="insights-grid">{insights.map(article => <article className="insight-card" key={article.title}><img src={article.image} alt="" /><div className="insight-body"><span className="pill">{article.category}</span><h3>{article.title}</h3><p>{article.detail}</p><div className="insight-meta"><span>{article.time}</span><a href="#contact" aria-label={`Read ${article.title}`}><ArrowRight size={15} /></a></div></div></article>)}</div></div></section>
}

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '', privacy: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const update = (event) => {
    const { name, value, type, checked } = event.target
    setValues(current => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors(current => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }
  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email.'
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.'
    if (!values.service) next.service = 'Please select a service.'
    if (!values.message.trim()) next.message = 'Please tell us a little about your requirements.'
    if (!values.privacy) next.privacy = 'Please accept the privacy policy.'
    setErrors(next)
    if (!Object.keys(next).length) setSubmitted(true)
  }
  return <section className="contact-section" id="contact"><div className="contact-backdrop" /><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow eyebrow-light">Get in touch</p><h2>Let's Simplify Your Accounting</h2><p>Tell us about your accounting requirements in the UAE or India. Our team can help you explore tailored accounting, auditing, and corporate tax support.</p><div className="contact-list"><div><span><Mail size={16} /></span><p><strong>Email Address</strong>info@acetrix.com</p></div><div><span><Phone size={16} /></span><p><strong>Phone Numbers</strong>+971 4 123 4567 (UAE)<br />+91 98765 43210 (India)</p></div><div><span><MapPin size={16} /></span><p><strong>Regional Offices</strong>Dubai & Abu Dhabi, UAE<br />Kochi, Kerala, India</p></div><div><span><Clock3 size={16} /></span><p><strong>Business Hours</strong>Mon - Fri: 9:00 AM - 6:00 PM (GST / IST)</p></div></div></div><div className="contact-form-wrap"><div className="form-heading"><span>Request a Consultation</span>{submitted && <em><Check size={14} /> Request received</em>}</div><form onSubmit={submit} noValidate><div className="form-row"><Field label="Full Name*" name="name" value={values.name} onChange={update} error={errors.name} placeholder="Enter your name" /><Field label="Business Email*" name="email" type="email" value={values.email} onChange={update} error={errors.email} placeholder="Enter your email" /></div><div className="form-row"><Field label="Phone Number*" name="phone" value={values.phone} onChange={update} error={errors.phone} placeholder="Enter your number" /><Field label="Company Name" name="company" value={values.company} onChange={update} placeholder="Enter company name" /></div><Field label="Service Required*" name="service" type="select" value={values.service} onChange={update} error={errors.service} options={['Select a service', ...services.map(item => item.title)]} /><Field label="Message" name="message" type="textarea" value={values.message} onChange={update} error={errors.message} placeholder="Tell us about your requirements..." /><label className={`check-label ${errors.privacy ? 'has-error' : ''}`}><input type="checkbox" name="privacy" checked={values.privacy} onChange={update} /><span>I agree to the Privacy Policy</span></label>{errors.privacy && <small className="field-error privacy-error">{errors.privacy}</small>}<button className="button button-primary form-submit" type="submit">Request a Consultation <ArrowRight size={15} /></button></form></div></div></section>
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder, options }) {
  return <label className={`field ${error ? 'has-error' : ''}`}><span>{label}</span>{type === 'select' ? <select name={name} value={value} onChange={onChange}><option value="">{options[0]}</option>{options.slice(1).map(option => <option value={option} key={option}>{option}</option>)}</select> : type === 'textarea' ? <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows="3" /> : <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />}{error && <small className="field-error">{error}</small>}</label>
}

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p className="footer-description">
            Acetrix helps businesses simplify accounting, ensure UAE FTA tax compliance, improve financial visibility, and manage regional operations with confidence.
          </p>
          <div className="socials" aria-label="Social media links">
            <a href="#contact" aria-label="LinkedIn" className="social-link">in</a>
            <a href="#contact" aria-label="Facebook" className="social-link">f</a>
            <a href="#contact" aria-label="Instagram" className="social-link">◎</a>
            <a href="#contact" aria-label="YouTube" className="social-link">▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            {footerQuickLinks.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul className="footer-links-list">
            {footerServices.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>
          <div className="footer-contact-details">
            <a href="mailto:info@acetrix.com" className="footer-contact-item">
              <Mail size={18} />
              <span>info@acetrix.com</span>
            </a>
            <a href="tel:+97141234567" className="footer-contact-item">
              <Phone size={18} />
              <span>+971 4 123 4567 (UAE)</span>
            </a>
            <a href="tel:+919876543210" className="footer-contact-item">
              <Phone size={18} />
              <span>+91 98765 43210 (India)</span>
            </a>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Dubai, Abu Dhabi, Sharjah & India</span>
            </div>
            <div className="footer-contact-item">
              <Clock3 size={18} />
              <span>Mon - Fri: 9:00 AM - 6:00 PM GST</span>
            </div>
          </div>
          <a className="footer-cta-btn" href="#contact">
            Book a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <span className="copyright-text">
            © {currentYear} Acetrix. All rights reserved.
          </span>
          <div className="legal-links">
            <a href="#contact">Privacy Policy</a>
            <span className="legal-dot" aria-hidden="true">•</span>
            <a href="#contact">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <UAEPresence />
        <LeadershipVision />
        <Services />
        <WhyAcetrix />
        <Industries />
        <Process />
        <Testimonials />
        <FAQ />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <a className="floating-chat" href="#contact" aria-label="Chat with Acetrix">
        <MessageCircle size={22} />
      </a>
    </>
  )
}

