import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ExploreCard } from '../components/ExploreCard';
import type { ExploreSection } from '../types';

const sections: ExploreSection[] = [
  {
    title: 'SME Platform',
    description: 'Dedicated platform for Small/Medium Enterprises to manage their AI deployments.',
    icon: 'Building',
    href: '/explore/sme-platform'
  },
  {
    title: 'Industry Insights',
    description: 'Latest trends and market research about AI adoption across various sectors.',
    icon: 'Lightbulb',
    href: '/explore/industry-insights'
  },
  {
    title: 'Development Features',
    description: 'Technical documentation for APIs, SDKs, and frameworks we support.',
    icon: 'Code',
    href: '/explore/development'
  },
  {
    title: 'Design Systems',
    description: 'UI/UX best practices and component libraries for AI integration.',
    icon: 'Palette',
    href: '/explore/design-systems'
  },
  {
    title: 'Collaboration',
    description: 'Tools for cross-team collaboration on AI projects and version control.',
    icon: 'Users',
    href: '/explore/collaboration'
  },
  {
    title: 'Design Process',
    description: 'End-to-end overview of our design sprints and prototyping process.',
    icon: 'Workflow',
    href: '/explore/design-process'
  }
];

export function Explore() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader 
        title="Explore"
        description="Dive deep into AI capabilities, industry trends, and development resources. Learn how to leverage our platform for your specific needs."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <ExploreCard key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}