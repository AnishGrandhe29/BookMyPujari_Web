'use client';

import React from "react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://static.readdy.ai/image/84c3058f27b2c17b3912085300ae77ce/c4d40d71373d46eee8fe05a99547ca95.png" 
                alt="BookMyPujari" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-orange-400 font-pacifico">BookMyPujari</span>
            </div>
            <p className="text-gray-400">Making sacred rituals accessible for everyone with trusted, verified priests.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors block cursor-pointer">
                Home
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors block cursor-pointer">
                Services
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors block cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors block cursor-pointer">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Griha Pravesh</p>
              <p className="text-gray-400">Satyanarayana Puja</p>
              <p className="text-gray-400">Marriage Ceremonies</p>
              <p className="text-gray-400">Vastu Puja</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-orange-400"></i>
                </div>
                <span className="text-gray-400">+91 8977002911</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-orange-400"></i>
                </div>
                <span className="text-gray-400">bmpoffice24x7@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-orange-400"></i>
                </div>
                <span className="text-gray-400">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 BookMyPujari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}