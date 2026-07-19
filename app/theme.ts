/**
 * PrintTech — Centralized Design Tokens
 * Single source of truth for all colors, typography, spacing, and motion.
 * Import from here — never hard-code values in components.
 */

export const colors = {
  /** Brand primary — deep professional blue */
  primary: '#1E40AF',
  /** Interactive / secondary blue */
  secondary: '#3B82F6',
  /** Primary blue used for CTA buttons & accents (matches image) */
  blue: '#2563EB',
  /** Bright accent used in headings */
  accent: '#2563EB',
  /** Success / green accent */
  success: '#16A34A',
  /** Light blue background for hero */
  bgLight: '#EFF6FF',
  /** Pure white */
  white: '#FFFFFF',
  /** Near-black for headings */
  textDark: '#111827',
  /** Body text grey */
  textBody: '#4B5563',
  /** Muted/subtle grey */
  muted: '#E9EFF5',
  /** Border */
  border: '#DBEAFE',
  /** Star/rating yellow */
  star: '#F59E0B',
  /** Card background */
  cardBg: '#FFFFFF',
  /** Shadow color */
  shadow: 'rgba(37,99,235,0.10)',
  /** Circular hero gradient bg */
  heroBg: '#E8F0FE',
} as const;

export const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Open Sans', sans-serif",
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
};

export const borderRadius = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
};

export const transitions = {
  fast: '150ms ease',
  base: '250ms ease',
  slow: '400ms ease',
};

export const shadows = {
  card: '0 4px 24px rgba(37,99,235,0.08)',
  cardHover: '0 8px 40px rgba(37,99,235,0.15)',
  btn: '0 4px 16px rgba(37,99,235,0.30)',
  navbar: '0 2px 16px rgba(30,64,175,0.07)',
};

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
