import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 py-16 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
      </div>
    </div>
  );
}