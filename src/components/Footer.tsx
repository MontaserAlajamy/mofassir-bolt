import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-primary-300" />
              </div>
              <span className="text-xl font-bold">Mofassir</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making AI Speak Your Language. Advanced solutions for modern businesses in the MENA region.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/mofassir" className="text-gray-400 hover:text-primary-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/mofassir_ai" className="text-gray-400 hover:text-primary-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/mofassir.ai" className="text-gray-400 hover:text-primary-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@mofassir.com" className="text-gray-400 hover:text-primary-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-primary-300">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>info@mofassir.com</li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Mofassir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}