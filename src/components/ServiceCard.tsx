import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { ServiceCard as ServiceCardType } from '../types';

interface ServiceCardProps extends ServiceCardType {
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const Icon = Icons[icon as keyof typeof Icons];
  
  return (
    <Link 
      to={href}
      className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-primary-100 hover:border-primary-200"
    >
      <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
        <Icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}