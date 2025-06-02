import React from 'react';
import { ServiceCard } from './ServiceCard';
import type { ServiceCard as ServiceCardType } from '../types';

const services: (ServiceCardType & { href: string })[] = [
  {
    icon: 'Server',
    title: 'On-Premises AI Cloud',
    description: 'Private, secure AI infrastructure deployed directly on your servers with unlimited usage and no token limits.',
    href: '/services/on-premises'
  },
  {
    icon: 'Globe',
    title: 'AI Localization',
    description: 'Partner with international AI experts for Arabic UIs & documentation, breaking down language barriers for regional SMEs.',
    href: '/services/localization'
  },
  {
    icon: 'Cloud',
    title: 'Cloud Deployment',
    description: 'Deploy on AWS, Azure, Google Cloud, Alibaba Cloud, or G42 with full migration and optimization support.',
    href: '/services/cloud'
  },
  {
    icon: 'Palette',
    title: 'Web Design Bundle',
    description: 'Complete digital onboarding with web design, social media setup, and email solutions.',
    href: '/services/web-design'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our comprehensive AI solutions can transform your business with local expertise and secure deployment options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Mofassir?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Local Expertise in Arabic AI</h4>
              <p className="text-gray-600">Deep understanding of regional languages and business contexts.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Secure Deployment Options</h4>
              <p className="text-gray-600">Choose between on-premises or cloud deployment based on your needs.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Unlimited Usage</h4>
              <p className="text-gray-600">No token limits or hidden fees - transparent pricing for all services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}