'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import QuickBookForm from './QuickBookForm';
import styles from './HeroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

// Stats strip at the bottom
const STATS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#EFF6FF" />
        <rect x="8" y="12" width="16" height="12" rx="2" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 12V9a4 4 0 018 0v3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="18" r="1.5" fill="#2563EB" />
      </svg>
    ),
    value: '5000+',
    label: 'Printers Installed',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#F0FDF4" />
        <circle cx="13" cy="14" r="4" stroke="#16A34A" strokeWidth="1.5" />
        <circle cx="20" cy="14" r="4" stroke="#16A34A" strokeWidth="1.5" />
        <path d="M8 24c0-3.314 2.239-6 5-6M19 24c0-3.314-2.239-6-5-6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: '3000+',
    label: 'Happy Clients',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#FFF7ED" />
        <circle cx="16" cy="16" r="7" stroke="#F97316" strokeWidth="1.5" />
        <path d="M16 12v4l3 2" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: '24/7',
    label: 'Support',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#F5F3FF" />
        <circle cx="16" cy="16" r="7" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M11 16l3.5 3.5L21 12" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: 'Same Day',
    label: 'Service',
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Left column: stagger children from bottom
      gsap.from(leftRef.current!.children, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Center illustration float in
      gsap.from(centerRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Feature pills stagger in from left
      gsap.from(pillsRef.current ? pillsRef.current.children : [], {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.7,
      });

      // Right form slide in from right
      gsap.from(rightRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.45,
      });

      // Stats strip slide up with stagger
      gsap.from('.stat-item', {
        opacity: 0,
        y: 30,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 90%',
        },
      });

      // Subtle float animation on center image
      gsap.to(centerRef.current, {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-label="Hero section - Professional Printer Rental & IT Support"
    >
      {/* ── Main Hero Grid ── */}
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* LEFT - Copy */}
          <div ref={leftRef} className={styles.left}>
            <div className={styles.trustBadge}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1l1.5 4.5H13l-3.75 2.75L10.75 13 7 10.25 3.25 13l1.5-4.75L1 5.5h4.5L7 1z" fill="#2563EB" />
              </svg>
              Trusted by 3000+ Businesses &amp; Homes
            </div>

            <h1 className={styles.heading}>
              Professional<br />
              Printer Rental &amp;<br />
              IT Support for{' '}
              <span className={styles.headingAccent}>
                Homes and Businesses
              </span>
            </h1>

            <p className={styles.subheading}>
              Smart printing solutions, expert IT support and reliable
              service-delivered to your home or office.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="/printer-rental" className={styles.btnPrimary} id="hero-rent-printer-btn">
                Rent a Printer
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/laptop-repair" className={styles.btnOutline} id="hero-book-repair-btn">
                Book Laptop Repair
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Social Proof */}
            <div className={styles.socialProof}>
              <div className={styles.avatars} aria-hidden="true">
                {['A','B','C','D'].map((l, i) => (
                  <span key={i} className={styles.avatar} style={{ zIndex: 4 - i }}>
                    {l}
                  </span>
                ))}
              </div>
              <div>
                <p className={styles.clientCount}>3000+ Happy Clients</p>
                <div className={styles.stars} aria-label="Rating: 4.9 out of 5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < 5 ? '#F59E0B' : 'none'} stroke="#F59E0B" strokeWidth="0.5" aria-hidden="true">
                      <path d="M7 1l1.5 4.5H13l-3.75 2.75L10.75 13 7 10.25 3.25 13l1.5-4.75L1 5.5h4.5L7 1z" />
                    </svg>
                  ))}
                  <span className={styles.ratingText}>4.9/5 (1200+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER - Hero Image */}
          <div ref={centerRef} className={styles.center}>

            {/* Blue radial gradient behind image */}
            <div className={styles.circleGrad} aria-hidden="true" />

            {/* Feature Pills - left side */}
            <div ref={pillsRef} className={styles.pills}>
              {/* Pay Per Print */}
              <div className={styles.pill}>
                <span className={styles.pillIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 2a5 5 0 00-4 8.06V14a1 1 0 001 1h6a1 1 0 001-1v-3.94A5 5 0 0011 2z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 15v2a2 2 0 004 0v-2" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 11h4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <p className={styles.pillTitle}>Pay Per Print</p>
                  <p className={styles.pillSub}>Cost Effective</p>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className={styles.pill}>
                <span className={styles.pillIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M4 10a7 7 0 0114 0v1a3 3 0 01-3 3h-1a1 1 0 01-1-1V9a1 1 0 011-1h1A7 7 0 014 10z" stroke="#2563EB" strokeWidth="1.5"/>
                    <path d="M4 11a3 3 0 003 3h1a1 1 0 001-1V9a1 1 0 00-1-1H7" stroke="#2563EB" strokeWidth="1.5"/>
                    <path d="M15 17c0 1.1-.9 2-2 2h-2" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <p className={styles.pillTitle}>24/7 Support</p>
                  <p className={styles.pillSub}>Always Available</p>
                </div>
              </div>

              {/* Same Day Service */}
              <div className={styles.pill}>
                <span className={styles.pillIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <rect x="2" y="6" width="18" height="11" rx="2" stroke="#2563EB" strokeWidth="1.5"/>
                    <path d="M6 6V5a2 2 0 012-2h6a2 2 0 012 2v1" stroke="#2563EB" strokeWidth="1.5"/>
                    <path d="M2 10h18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="11" cy="14" r="1" fill="#2563EB"/>
                  </svg>
                </span>
                <div>
                  <p className={styles.pillTitle}>Same Day Service</p>
                  <p className={styles.pillSub}>Quick &amp; Reliable</p>
                </div>
              </div>
            </div>

            {/* Hero Image - floats above gradient */}
            <Image
              src="/f.png"
              alt="Professional printer rental and IT support - Raion Technologies"
              width={700}
              height={600}
              priority
              className={styles.heroImg}
              style={{ width: '150%', height: 'auto', maxWidth: 'none' }}
            />
          </div>

          {/* RIGHT - Quick Book Form */}
          <div ref={rightRef} className={styles.right}>
            <QuickBookForm />
          </div>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div ref={statsRef} className={styles.statsStrip}>
        <div className={styles.statsInner}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`${styles.statItem} stat-item`}>
              {i > 0 && <div className={styles.statDivider} aria-hidden="true" />}
              <span className={styles.statIcon}>{stat.icon}</span>
              <div>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Inline SVG Illustration (Printer + Laptop + Tech Rep)
   Built with pure SVG - no external image dependency
   ──────────────────────────────────────────────────────────── */
function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.illustration}
      role="img"
      aria-label="3D illustration of a printer and laptop"
    >
      {/* ── Laptop Base ── */}
      <rect x="80" y="230" width="200" height="12" rx="4" fill="#CBD5E1" />
      <rect x="60" y="235" width="240" height="8" rx="4" fill="#94A3B8" />

      {/* ── Laptop Screen ── */}
      <rect x="90" y="120" width="180" height="115" rx="8" fill="#1E293B" />
      <rect x="96" y="126" width="168" height="102" rx="5" fill="#0F172A" />
      {/* Windows wallpaper */}
      <rect x="96" y="126" width="168" height="102" rx="5" fill="url(#winGrad)" />
      {/* Windows swirl */}
      <ellipse cx="180" cy="177" rx="55" ry="55" fill="url(#winInner)" opacity="0.85" />

      {/* ── Laptop Hinge / Bottom ── */}
      <rect x="85" y="233" width="190" height="8" rx="4" fill="#64748B" />
      <rect x="160" y="241" width="40" height="4" rx="2" fill="#94A3B8" />

      {/* ── Printer Body ── */}
      <rect x="185" y="100" width="145" height="100" rx="10" fill="#F1F5F9" />
      <rect x="185" y="100" width="145" height="30" rx="10" fill="#E2E8F0" />
      {/* Printer top panel */}
      <rect x="195" y="108" width="125" height="12" rx="4" fill="#CBD5E1" />
      {/* Printer screen/display */}
      <rect x="230" y="130" width="60" height="40" rx="5" fill="#1E293B" />
      <rect x="233" y="133" width="54" height="34" rx="3" fill="#2563EB" opacity="0.8" />
      <rect x="238" y="140" width="30" height="3" rx="1.5" fill="white" opacity="0.8" />
      <rect x="238" y="147" width="20" height="3" rx="1.5" fill="white" opacity="0.5" />
      {/* Print output slot */}
      <rect x="185" y="175" width="145" height="8" rx="2" fill="#CBD5E1" />
      {/* Paper */}
      <rect x="205" y="167" width="50" height="16" rx="2" fill="white" />
      <rect x="209" y="170" width="30" height="2" rx="1" fill="#94A3B8" />
      <rect x="209" y="174" width="20" height="2" rx="1" fill="#94A3B8" />
      {/* Printer paper tray */}
      <rect x="185" y="195" width="145" height="20" rx="5" fill="#E2E8F0" />
      <rect x="205" y="199" width="60" height="6" rx="2" fill="#CBD5E1" />
      {/* Printer feet */}
      <rect x="195" y="215" width="20" height="8" rx="3" fill="#CBD5E1" />
      <rect x="300" y="215" width="20" height="8" rx="3" fill="#CBD5E1" />

      {/* ── Tech Representative (stylized) ── */}
      {/* Body */}
      <rect x="295" y="130" width="55" height="90" rx="12" fill="#2563EB" />
      {/* Collar */}
      <path d="M310 130 L322.5 145 L335 130" stroke="white" strokeWidth="2" fill="none" />
      {/* Head */}
      <ellipse cx="322" cy="108" rx="24" ry="26" fill="#FBBF24" />
      {/* Hair */}
      <ellipse cx="322" cy="84" rx="24" ry="8" fill="#1E293B" />
      <rect x="298" y="84" width="48" height="10" rx="5" fill="#1E293B" />
      {/* Eyes */}
      <ellipse cx="315" cy="107" rx="3" ry="3.5" fill="#1E293B" />
      <ellipse cx="329" cy="107" rx="3" ry="3.5" fill="#1E293B" />
      <ellipse cx="316" cy="106" rx="1" ry="1.5" fill="white" />
      <ellipse cx="330" cy="106" rx="1" ry="1.5" fill="white" />
      {/* Smile */}
      <path d="M314 116 Q322 121 330 116" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cap */}
      <rect x="299" y="82" width="46" height="10" rx="5" fill="#1E40AF" />
      <circle cx="322" cy="82" r="4" fill="#1E40AF" />
      <rect x="294" y="87" width="10" height="4" rx="2" fill="#1E40AF" />
      {/* Cap badge */}
      <circle cx="322" cy="86" r="3" fill="#FFFFFF" />
      <text x="320" y="89" fontSize="4" fill="#2563EB" fontWeight="bold">P</text>
      {/* Arm holding tablet */}
      <rect x="348" y="148" width="14" height="55" rx="7" fill="#2563EB" />
      <rect x="348" y="148" width="14" height="55" rx="7" fill="#1D4ED8" />
      {/* Hand */}
      <ellipse cx="355" cy="207" rx="10" ry="9" fill="#FBBF24" />
      {/* Tablet */}
      <rect x="356" y="170" width="32" height="44" rx="4" fill="#1E293B" />
      <rect x="358" y="172" width="28" height="40" rx="3" fill="#2563EB" opacity="0.7" />
      <rect x="360" y="178" width="20" height="2" rx="1" fill="white" opacity="0.8" />
      <rect x="360" y="184" width="16" height="2" rx="1" fill="white" opacity="0.5" />
      {/* Left arm */}
      <rect x="278" y="145" width="18" height="50" rx="9" fill="#2563EB" />
      {/* Left hand */}
      <ellipse cx="287" cy="198" rx="10" ry="9" fill="#FBBF24" />
      {/* Pants */}
      <rect x="295" y="212" width="24" height="50" rx="6" fill="#1E293B" />
      <rect x="323" y="212" width="24" height="50" rx="6" fill="#1E293B" />
      {/* Shoes */}
      <ellipse cx="307" cy="263" rx="16" ry="8" fill="#111827" />
      <ellipse cx="335" cy="263" rx="16" ry="8" fill="#111827" />
      {/* Belt */}
      <rect x="295" y="210" width="52" height="8" rx="3" fill="#1E40AF" />
      <rect x="316" y="211" width="10" height="6" rx="2" fill="#F59E0B" />
      {/* Badge on shirt */}
      <rect x="314" y="165" width="16" height="10" rx="2" fill="white" opacity="0.9" />
      <text x="316" y="173" fontSize="5" fill="#2563EB" fontWeight="bold">TECH</text>
      {/* Watch */}
      <rect x="280" y="188" width="14" height="8" rx="2" fill="#374151" />
      <rect x="282" y="189" width="10" height="6" rx="1" fill="#2563EB" />

      {/* Floating icons */}
      {/* Analytics chart icon */}
      <rect x="70" y="230" width="52" height="42" rx="8" fill="white" filter="url(#shadow1)" />
      <polyline points="82,258 88,248 94,252 100,240 106,244 112,235" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Document icon floating */}
      <rect x="370" y="170" width="44" height="56" rx="6" fill="white" filter="url(#shadow1)" />
      <rect x="378" y="180" width="28" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="378" y="188" width="20" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="378" y="196" width="25" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="378" y="204" width="18" height="3" rx="1.5" fill="#CBD5E1" />

      {/* ── Gradient Defs ── */}
      <defs>
        <radialGradient id="winGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#1E40AF" />
        </radialGradient>
        <radialGradient id="winInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#818CF8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.4" />
        </radialGradient>
        <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(37,99,235,0.12)" />
        </filter>
      </defs>
    </svg>
  );
}
