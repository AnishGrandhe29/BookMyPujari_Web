"use client";

import { useState } from "react";

export default function PriestPartner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    languages: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    try {
      const response = await fetch("/api/priest-partner", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", city: "", experience: "", languages: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Become a Priest Partner</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">Fill in your details and we will get in touch with you soon.</p>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" placeholder="Enter your full name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" placeholder="Enter your phone number" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City *</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" placeholder="Enter your city" />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Experience (years) *</label>
            <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} required min="0" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" placeholder="Years of experience" />
          </div>
          <div className="mb-4">
            <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-2">Languages Known *</label>
            <input type="text" id="languages" name="languages" value={formData.languages} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" placeholder="E.g. Hindi, Telugu, English" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none" placeholder="Tell us about yourself or ask any questions..." />
            <div className="text-right text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</div>
          </div>
          <button type="submit" disabled={isSubmitting || formData.message.length > 500} className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer">
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          {submitStatus === "success" && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">Thank you! Your details have been submitted successfully. We'll get back to you soon.</div>
          )}
          {submitStatus === "error" && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">Sorry, there was an error submitting your details. Please try again.</div>
          )}
        </form>
      </div>
    </div>
  );
} 