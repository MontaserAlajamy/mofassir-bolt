import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { ExploreSection } from '../types';

interface ExploreCardProps extends ExploreSection {}

export function ExploreCard({ title, description, icon, href }: ExploreCardProps) {
  const Icon = Icons[icon as keyof typeof Icons];
  
  return (
    <Link 
      to={href}
      className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
        <Icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}