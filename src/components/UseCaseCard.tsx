import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { UseCase } from '../types';

interface UseCaseCardProps extends UseCase {
  href: string;
}

export function UseCaseCard({ title, description, icon, benefits, image, href }: UseCaseCardProps) {
  const Icon = Icons[icon as keyof typeof Icons];
  
  return (
    <Link 
      to={href}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <Icon className="h-5 w-5 mr-2" />
          <span className="font-medium">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Icons.Check className="h-4 w-4 text-green-500 mr-2" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}