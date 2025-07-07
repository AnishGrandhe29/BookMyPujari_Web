'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Anish Grandhe',
    role: 'Founder & CEO',
    image: '/images/linkedin.png',
    description: 'Passionate about connecting traditional Hindu culture with modern technology'
  },
  {
    name: 'Dhiraj Monthri',
    role: 'Co-Founder',
    image: '/images/dhiraj.png',
    description: 'Passionate about connecting traditional Hindu culture with modern technology'
  },
  {
    name: 'Eshwar Grandhe',
    role: 'CTO',
    image: '/images/eshwar.jpg',
    description: 'Tech innovator driving seamless booking experiences through reliable, user-friendly platforms.'
  },
  {
    name: 'Bhavana Kasula',
    role: 'COO',
    image: '/images/bhavana.png',
    description: 'Operations expert ensuring smooth, trusted service delivery for every sacred ceremony.'
  }
];

const values = [
  {
    icon: 'ri-shield-check-line',
    title: 'Trust',
    description: 'We thoroughly verify all our priests and maintain the highest standards of authenticity and reliability.'
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Simplicity',
    description: 'We make booking traditional ceremonies as simple as ordering food online, without compromising on tradition.'
  },
  {
    icon: 'ri-community-line',
    title: 'Tradition',
    description: 'We preserve and promote authentic Hindu traditions while making them accessible to modern families.'
  },
  {
    icon: 'ri-eye-line',
    title: 'Transparency',
    description: 'Clear pricing, honest communication, and transparent processes in everything we do.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
     

      <section 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Peaceful%20Hindu%20temple%20interior%20with%20beautiful%20architecture%2C%20golden%20light%20streaming%20through%20ornate%20pillars%2C%20spiritual%20atmosphere%20with%20traditional%20decorations%2C%20serene%20and%20divine%20ambiance%2C%20ancient%20temple%20design%20with%20intricate%20carvings%2C%20warm%20lighting%20creating%20sacred%20mood&width=1920&height=600&seq=about_hero001&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About BookMyPujari
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Bridging the gap between tradition and technology to make sacred ceremonies accessible to all
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                BookMyPujari was born from a simple yet profound realization: in our fast-paced modern world, 
                many families struggle to maintain their spiritual traditions due to lack of access to qualified priests 
                and the complexity of organizing traditional ceremonies.
              </p>
              
              <p className="mb-6">
                Founded in 2023, our platform emerged from the personal experiences of our founders who faced difficulties 
                in finding authentic, knowledgeable priests for their family ceremonies. We recognized that while technology 
                had simplified many aspects of our lives, the sacred domain of spiritual ceremonies remained largely untouched 
                by digital innovation.
              </p>
              
              <p className="mb-6">
                Today, BookMyPujari serves thousands of families across India, connecting them with over 500 verified priests 
                who are not just knowledgeable in scriptures and rituals, but also understand the emotional significance of 
                each ceremony. We believe that every family deserves access to authentic spiritual experiences, regardless of 
                their location or familiarity with traditional practices.
              </p>
              
              <p className="mb-8">
                Our mission extends beyond just booking services – we're preserving and promoting Hindu traditions for future 
                generations while making them accessible in today's digital age. Every ceremony facilitated through our platform 
                is a step towards keeping our rich cultural heritage alive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <p className="text-gray-600">Verified Priests</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">10,000+</div>
                <p className="text-gray-600">Ceremonies Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                <p className="text-gray-600">Cities Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <i className={`${value.icon} text-2xl text-orange-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind BookMyPujari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover object-top mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a family looking for authentic ceremonies or a qualified priest wanting to serve more devotees, 
            we invite you to be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
              Book a Ceremony
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Become a Priest Partner
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}