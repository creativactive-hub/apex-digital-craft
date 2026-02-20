import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  location: string;
  image: string;
  link: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  business: string;
}