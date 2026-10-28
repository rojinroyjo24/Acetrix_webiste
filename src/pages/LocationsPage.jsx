import { useState } from 'react'
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Globe2,
  CheckCircle2,
  Compass,
  PhoneCall
} from 'lucide-react'

export default function LocationsPage({ onNavigate }) {
  const [selectedHub, setSelectedHub] = useState('all')

  const hubs = [
    {
      id: 'dubai',
      name: 'Dubai Flagship Advisory Hub',
      flag: '🇦🇪',
      emirate: 'Dubai',
      badge: 'Commercial & Freezone Headquarters',
      address: 'Level 18, Prime Business Center, Business Bay / Sheikh Zayed Road Corridor, Dubai, United Arab Emirates',
      landmark: 'Near Business Bay Metro & Downtown Dubai Financial District',
      phone: '+971 4 123 4567',
      email: 'dubai@acetrix.ae',
      hours: 'Mon - Fri: 8:30 AM - 6:00 PM (UAE GST)',
      status: 'Open Now',
      jurisdictions: 'DMCC • DIFC • JAFZA • DAFZA • Dubai South • Dubai Mainland LLCs',
      specialties: [
        'Mainland & Freezone Statutory Annual Audits',
        'FTA Corporate Tax (9%) & VAT Compliance Desk',
        'International Holding Company Structuring',
        'RERA Real Estate & Developer Escrow Audits',
      ],
      mapUrl: 'https://maps.google.com/?q=Business+Bay+Dubai',
    },
    {
      id: 'abudhabi',
      name: 'Abu Dhabi Capital Practice Hub',
      flag: '🇦🇪',
      emirate: 'Abu Dhabi',
      badge: 'Institutional & Sovereign Focus',
      address: 'Tower 2, Al Maryah Financial Quarter, Al Maryah Island, Abu Dhabi, United Arab Emirates',
      landmark: 'Adjacent to Abu Dhabi Global Market (ADGM) Square',
      phone: '+971 2 987 6543',
      email: 'abudhabi@acetrix.ae',
      hours: 'Mon - Fri: 8:30 AM - 6:00 PM (UAE GST)',
      status: 'Open Now',
      jurisdictions: 'ADGM • Khalifa Industrial Zone (KEZAD) • Abu Dhabi Ports • Abu Dhabi Mainland',
      specialties: [
        'ADGM SPV Accounting & Regulatory Filings',
        'ICV (In-Country Value) Audit Preparation',
        'Government Contractor & Energy Sector Accounting',
        'Qualifying Free Zone Person (QFZP) 0% Advisory',
      ],
      mapUrl: 'https://maps.google.com/?q=Al+Maryah+Island+Abu+Dhabi',
    },
    {
      id: 'sharjah',
      name: 'Sharjah & Northern Emirates Hub',
      flag: '🇦🇪',
      emirate: 'Northern Emirates',
      badge: 'Industrial & Trade Logistics Desk',
      address: 'Suite 405, Executive Business Tower, Al Majaz Waterfront & SAIF Zone Corridor, Sharjah, UAE',
      landmark: 'Minutes from Sharjah Airport International Free Zone',
      phone: '+971 6 543 2109',
      email: 'sharjah@acetrix.ae',
      hours: 'Mon - Fri: 8:30 AM - 6:00 PM (UAE GST)',
      status: 'Open Now',
      jurisdictions: 'SAIF Zone • Hamriyah Free Zone (HFZA) • UAQ FTZ • RAKEZ • Northern Emirates',
      specialties: [
        'Manufacturing & Inventory Valuation Audits',
        'Import / Export Cross-Border Customs VAT',
        'Small Business Relief (SBR) Tax Optimization',
        'Backlog Cleanup for Northern Emirates Enterprises',
      ],
      mapUrl: 'https://maps.google.com/?q=Sharjah+SAIF+Zone',
    },
    {
      id: 'india',
      name: 'Global Delivery Center (India)',
      flag: '🇮🇳',
      emirate: 'Global Offshore',
      badge: 'High-Volume Execution & Technology Center',
      address: 'Technology Innovation Campus, Phase 2, Infopark Financial Corridor, Kochi & Bengaluru, India',
      landmark: 'Special Economic Technology Zone',
      phone: '+91 484 290 1234',
      email: 'delivery@acetrix.ae',
      hours: 'Mon - Sat: 24/7 Operations Coverage',
      status: '24/7 Live Coverage',
      jurisdictions: 'Dual-Shore Offshore Processing Engine for UAE Practice',
      specialties: [
        'Rapid Historical Backlog Reconstruction & Sorting',
        'High-Volume Daily Bank & POS Batch Reconciliations',
        'Cloud ERP Data Migration & Multi-Platform Bookkeeping',
        'Continuous Audit Testing & 4-Eye Ledger Pre-checks',
      ],
      mapUrl: 'https://maps.google.com/?q=Infopark+Kochi',
    },
  ]

  const freezonesList = [
    { name: 'Jebel Ali Free Zone (Jafza)', emirate: 'Dubai', logo: '/images/jafza.jpg', desc: 'Premier logistics & trade hub in the Middle East.' },
    { name: 'Dubai Airport Freezone (DAFZA)', emirate: 'Dubai', logo: '/images/dafza.jpg', desc: 'Aviation, electronics, and global commerce hub.' },
    { name: 'Abu Dhabi Global Market (ADGM)', emirate: 'Abu Dhabi', logo: '/images/abu-dhabi-global-market.jpg', desc: 'Leading international financial center.' },
    { name: 'International Free Zone Authority (IFZA)', emirate: 'Dubai', logo: '/images/IFZA.jpg', desc: 'Dynamic commercial ecosystem in Dubai Silicon Oasis.' },
    { name: 'Umm Al Quwain Free Trade Zone (UAQ FTZ)', emirate: 'Northern Emirates', logo: '/images/uaq.jpg', desc: 'Cost-effective SME hub with strategic maritime links.' },
    { name: 'Dubai Studio City & Media Freezones', emirate: 'Dubai', logo: '/images/studio-city.jpg', desc: 'Broadcasting, film, and digital creative hub.' },
    { name: 'Abu Dhabi Ports & KEZAD', emirate: 'Abu Dhabi', logo: '/images/abudhabi-ports.jpg', desc: 'Integrated industrial trade zone and Khalifa Port.' },
  ]

  const filteredHubs = selectedHub === 'all' ? hubs : hubs.filter((h) => h.id === selectedHub)

  return (
    <div className="inner-page locations-page">
      {/* Page Hero */}
      <section className="inner-hero">
        <div className="inner-hero-backdrop" aria-hidden="true" />
        <div className="container inner-hero-content">
          <div className="inner-hero-top-bar">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Home</a>
              <ChevronRight size={14} />
              <span aria-current="page">Locations</span>
            </nav>

            <span className="inner-hero-badge">
              <Compass size={15} />
              <span>LOCALIZED ACCESSIBILITY • GLOBAL SCALE</span>
            </span>
          </div>

          <h1 className="inner-hero-title">
            Our Regional Presence & <span>Advisory Hubs</span>
          </h1>

          <p className="inner-hero-lead">
            With direct boardroom partner advisory across Dubai, Abu Dhabi, and Sharjah, backed by our dedicated 24/7 delivery center in India, Acetrix brings high-touch advisory to your doorstep.
          </p>

          <div className="hub-filter-tabs">
            <button
              type="button"
              className={`hub-filter-btn ${selectedHub === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedHub('all')}
            >
              All Hubs (4)
            </button>
            {hubs.map((h) => (
              <button
                key={h.id}
                type="button"
                className={`hub-filter-btn ${selectedHub === h.id ? 'active' : ''}`}
                onClick={() => setSelectedHub(h.id)}
              >
                <span>{h.flag}</span>
                <span>{h.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3D UAE Map Featured Section */}
      <section className="section map-feature-section">
        <div className="container">
          <div className="map-showcase-wrapper">
            <div className="map-showcase-image-box">
              <img
                src="/images/uae-presence-map-new.jpg"
                alt="Acetrix 3D UAE Relief Map showcasing Dubai, Abu Dhabi, Sharjah & India Hubs"
                className="map-feature-img"
              />
              <div className="map-live-indicator">
                <span className="pulse-ring" />
                <span>Live UAE Regulatory & Advisory Grid</span>
              </div>
            </div>

            <div className="map-showcase-legend">
              <div className="legend-head">
                <Building2 size={20} className="legend-icon" />
                <div>
                  <h3>Dual-Shore Footprint</h3>
                  <p>Coordinated regional advisory with offshore speed</p>
                </div>
              </div>

              <div className="legend-items">
                <div className="legend-item">
                  <span className="pin-badge uae-pin">🇦🇪</span>
                  <div>
                    <strong>UAE Advisory Core (Dubai, Abu Dhabi, Sharjah)</strong>
                    <p>Client onboarding, FTA tax audit representations, board presentations, and freezone authority filings.</p>
                  </div>
                </div>
                <div className="legend-item">
                  <span className="pin-badge ind-pin">🇮🇳</span>
                  <div>
                    <strong>Global Delivery Center (India)</strong>
                    <p>High-volume bookkeeping, continuous bank statement reconciliation, software configuration, and backlog sorting.</p>
                  </div>
                </div>
              </div>

              <div className="legend-footer">
                <ShieldCheck size={18} />
                <span>Approved Auditors across all 7 Emirates and Freezone Authorities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Office Cards Grid */}
      <section className="section office-cards-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">OFFICE DIRECTORY</span>
            <h2>Visit or Connect with Our Regional Offices</h2>
            <p>Direct contact numbers, operational hours, and specialized practice leaders at each hub.</p>
          </div>

          <div className="offices-grid">
            {filteredHubs.map((hub) => (
              <div className="office-card" key={hub.id}>
                <div className="office-card-header">
                  <div className="office-title-row">
                    <span className="office-flag">{hub.flag}</span>
                    <div>
                      <span className="office-badge-text">{hub.badge}</span>
                      <h3>{hub.name}</h3>
                    </div>
                  </div>
                  <span className="office-status-pill">{hub.status}</span>
                </div>

                <div className="office-details-list">
                  <div className="office-detail-row">
                    <MapPin size={18} className="office-icon" />
                    <div>
                      <strong>Address:</strong>
                      <p>{hub.address}</p>
                      <small className="landmark-text">📍 Landmark: {hub.landmark}</small>
                    </div>
                  </div>

                  <div className="office-detail-row">
                    <Clock size={18} className="office-icon" />
                    <div>
                      <strong>Hours:</strong>
                      <p>{hub.hours}</p>
                    </div>
                  </div>

                  <div className="office-detail-row">
                    <Building2 size={18} className="office-icon" />
                    <div>
                      <strong>Jurisdictions Covered:</strong>
                      <p className="jurisdiction-text">{hub.jurisdictions}</p>
                    </div>
                  </div>
                </div>

                <div className="office-specialties">
                  <strong>Key Practice Specializations:</strong>
                  <ul>
                    {hub.specialties.map((spec, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="spec-check" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="office-actions">
                  <a href={`tel:${hub.phone.replace(/\s+/g, '')}`} className="office-call-btn">
                    <Phone size={15} />
                    <span>{hub.phone}</span>
                  </a>
                  <a
                    href={hub.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="office-map-link"
                  >
                    <span>View Map</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freezones Approval Grid */}
      <section className="section approved-freezones-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">FREEZONE AUDIT RECOGNITION</span>
            <h2>Approved & Registered Across UAE Major Freezones</h2>
            <p>Our audit reports are officially accepted by Freezone Registrars, Banks, and Federal Tax Authorities.</p>
          </div>

          <div className="freezone-cards-grid">
            {freezonesList.map((fz) => (
              <div className="freezone-box-card" key={fz.name}>
                <div className="fz-box-logo">
                  <img src={fz.logo} alt={fz.name} loading="lazy" />
                </div>
                <h4>{fz.name}</h4>
                <span className="fz-emirate-tag">{fz.emirate}</span>
                <p>{fz.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Meeting Scheduler CTA */}
      <section className="about-cta-strip">
        <div className="container cta-flex">
          <div className="cta-text">
            <h3>Prefer an In-Person Meeting at Our Dubai, Abu Dhabi, or Sharjah Office?</h3>
            <p>Schedule a private boardroom consultation with our Practice Directors.</p>
          </div>
          <div className="cta-actions">
            <a
              href="#/contact"
              className="button button-primary"
              onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
            >
              Book Office Visit <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

