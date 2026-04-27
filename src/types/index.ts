export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  wa: string;
  waNumber: string;
  email: string;
  location: string;
}

export interface Stat {
  val: string;
  label: string;
}

export interface HowStep {
  step: string;
  icon: string;
  title: string;
  desc: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  colorClass: string;
}

export interface Plan {
  tier: string;
  featured: boolean;
  badge?: string;
  originalPrice: string;
  price: string;
  save: string;
  period: string;
  features: string[];
  waMessage: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  avClass: string;
  text: string;
}
