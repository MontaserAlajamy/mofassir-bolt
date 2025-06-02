import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { UseCaseCard } from '../components/UseCaseCard';
import type { UseCase } from '../types';

const useCases: (UseCase & { href: string })[] = [
  {
    title: 'Reporting',
    description: 'Transform raw data into insightful reports automatically with AI-powered analysis.',
    icon: 'FileText',
    benefits: [
      'Automated report generation',
      'Natural language summaries',
      'Custom formatting options',
      'Real-time data processing'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    href: '/use-cases/reporting'
  },
  {
    title: 'Communication',
    description: 'Enhance customer service and internal communication with AI chatbots.',
    icon: 'MessageSquare',
    benefits: [
      '24/7 customer support',
      'Multi-language support',
      'Context-aware responses',
      'Seamless handoff to humans'
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    href: '/use-cases/communication'
  },
  {
    title: 'Data Analysis',
    description: 'Unlock insights from your data with advanced AI analytics.',
    icon: 'BarChart',
    benefits: [
      'Predictive analytics',
      'Anomaly detection',
      'Pattern recognition',
      'Automated insights'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    href: '/use-cases/data-analysis'
  }
];

export function UseCases() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader 
        title="Use Cases"
        description="Discover how businesses are transforming their operations with our AI solutions. Explore real-world applications and success stories."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </div>
  );
}