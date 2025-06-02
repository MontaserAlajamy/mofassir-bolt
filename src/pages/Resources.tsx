import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ResourceCard } from '../components/ResourceCard';
import type { Resource } from '../types';

const resources: Resource[] = [
  {
    title: 'Getting Started with AI',
    description: 'Learn the basics of AI and how to implement it in your business.',
    category: 'Guide',
    icon: 'BookOpen',
    href: '/resources/getting-started'
  },
  {
    title: 'API Documentation',
    description: 'Comprehensive documentation for our AI APIs and SDKs.',
    category: 'Technical',
    icon: 'FileCode',
    href: '/resources/api-docs'
  },
  {
    title: 'Best Practices',
    description: 'Guidelines for implementing AI responsibly and effectively.',
    category: 'Guide',
    icon: 'CheckCircle',
    href: '/resources/best-practices'
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of successful AI implementations.',
    category: 'Business',
    icon: 'FileText',
    href: '/resources/case-studies'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other developers and share experiences.',
    category: 'Community',
    icon: 'Users',
    href: '/resources/forum'
  },
  {
    title: 'Support Center',
    description: 'Get help with technical issues and implementation questions.',
    category: 'Support',
    icon: 'HelpCircle',
    href: '/resources/support'
  }
];

export function Resources() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader 
        title="Resources"
        description="Access guides, documentation, and tools to help you make the most of our AI platform. Find everything you need to succeed."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
}