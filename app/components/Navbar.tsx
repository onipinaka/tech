'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import styles from './Navbar.module.css';

gsap.registerPlugin();

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: { label: string; href: string }[];
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Printer Rental', href: '/printer-rental' },
  { label: 'Laptop Repair', href: '/laptop-repair' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname() || '/';
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Entrance animation
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.1,
    });
  }, { scope: navRef });

  const toggleMenu = () => setMenuOpen(v => !v);

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Raion Technologies home">
          <span className={styles.logoIcon} aria-hidden="true">
            <img src="/brandlogo.webp" alt="Raion Technologies Icon" width="64" height="64" style={{ objectFit: 'contain' }} />
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Raion Technologies</span>
            <span className={styles.logoTagline}>Print. Support. Simplified.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks} role="list">
          {NAV_LINKS.map(link => (
            <li
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? styles.active : ''}`}
                aria-current={pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'page' : undefined}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className={styles.chevron} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {link.hasDropdown && link.dropdown && activeDropdown === link.label && (
                <ul className={styles.dropdown} role="list">
                  {link.dropdown.map(item => (
                    <li key={item.label}>
                      <Link href={item.href} className={styles.dropdownLink}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href="/book" className={styles.ctaBtn} id="navbar-book-btn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <rect x="2" y="3" width="14" height="13" rx="2" stroke="white" strokeWidth="1.5" />
            <path d="M6 2v2M12 2v2M2 7h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Book a Service
        </Link>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          id="hamburger-btn"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} id="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <ul role="list">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${styles.mobileLink} ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? styles.mobileLinkActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && link.dropdown && (
                  <ul className={styles.mobileSubmenu} role="list">
                    {link.dropdown.map(item => (
                      <li key={item.label}>
                        <Link href={item.href} className={styles.mobileSubmenuLink} onClick={() => setMenuOpen(false)}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href="/book" className={styles.mobileCtaBtn} onClick={() => setMenuOpen(false)}>
                Book a Service
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
