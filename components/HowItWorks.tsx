'use client';

const steps = [
  {
    number: '1',
    title: 'Choose Ritual',
    description: 'Select the ceremony or puja you need from our comprehensive list',
    icon: 'ri-search-line'
  },
  {
    number: '2', 
    title: 'Select Priest',
    description: 'Browse verified priests in your area and choose based on reviews',
    icon: 'ri-user-star-line'
  },
  {
    number: '3',
    title: 'Confirm & Pay',
    description: 'Book your preferred date and time, then make secure payment',
    icon: 'ri-secure-payment-line'
  },
  {
    number: '4',
    title: 'Ceremony Done',
    description: 'Our priest arrives on time and performs the ritual perfectly',
    icon: 'ri-check-double-line'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to book your perfect ceremony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center -mt-16 mb-4">
                  <i className={`${step.icon} text-orange-600 text-xl`}></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
            Start Booking Now
          </button>
        </div>
      </div>
    </section>
  );
}