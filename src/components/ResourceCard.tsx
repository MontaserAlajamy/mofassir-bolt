import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { Resource } from '../types';

export function ResourceCard({ title, description, category, icon, href }: Resource) {
  const Icon = Icons[icon as keyof typeof Icons];
  
  return (
    <Link 
      to={href}
      className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
          <Icon className="h-5 w-5 text-indigo-600 group-hover:text-white transition-colors" />
        </div>
        <span className="ml-3 text-sm font-medium text-indigo-600">{category}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}