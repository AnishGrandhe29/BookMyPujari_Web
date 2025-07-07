'use client';

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Making Rituals Accessible for All
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At BookMyPujari, we believe that everyone should have access to authentic, traditional Hindu ceremonies. 
            Our platform connects you with verified, experienced priests who understand the sanctity and importance 
            of each ritual. Whether it's a simple daily puja or a grand celebration, we ensure that every ceremony 
            is performed with devotion, knowledge, and respect for tradition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-600">Verified Priests</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10,000+</div>
              <p className="text-gray-600">Happy Families</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">Types of Ceremonies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}