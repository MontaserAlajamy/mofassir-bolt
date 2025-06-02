import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        title="Contact Us"
        description="Have questions about our AI solutions? We're here to help. Reach out to our team and we'll get back to you as soon as possible."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">info@mofassir.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">+971 (000) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Office</h3>
                  <p className="mt-1 text-gray-600">
                    Level 01, Innovation One<br />
                    Dubai International Financial Centre<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Monday - Friday</dt>
                  <dd className="text-gray-900">9:00 AM - 5:00 PM (PST)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Saturday - Sunday</dt>
                  <dd className="text-gray-900">Urgent Calls Only)</dd>
                </div>

              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}