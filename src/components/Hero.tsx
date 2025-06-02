import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.9)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-900/80" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <Brain className="h-8 w-8 text-primary-200" />
            </div>
            <span className="text-primary-200 font-medium">AI in Your Language</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Advancing AI for the <span className="text-primary-300">MENA Region</span>
          </h1>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            We specialize in advancing AI research and crafting applications tailored to local languages and specialized domains. Empowering SMEs across the GCC, MENA, and African-Asian regions with customizable, secure AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-primary-100 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}