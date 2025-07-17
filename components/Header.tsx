'use client';

import React from "react";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/84c3058f27b2c17b3912085300ae77ce/c4d40d71373d46eee8fe05a99547ca95.png" 
              alt="BookMyPujari" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-orange-600 font-pacifico">BookMyPujari</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}