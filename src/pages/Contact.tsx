import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Get In
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700"> Touch </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're here to help with all your dental needs. Reach out to us for appointments, 
              questions, or emergency care. Your smile is our priority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 text-white text-center"
            >
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-teal-100 mb-2">General Inquiries</p>
              <a href="tel:+923240133166" className="text-white font-medium hover:text-teal-100 transition-colors">
              (+92) 3240133166
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Mail className="h-8 w-8 mx-auto mb-4 text-teal-600" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Email Us</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="pdeveloper133@gmail.com" className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
               pdeveloper133@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <MapPin className="h-8 w-8 mx-auto mb-4 text-teal-600" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Visit Us</h3>
              <p className="text-gray-600 mb-2">Our Location</p>
              <p className="text-gray-700 text-sm">123 Dental Street<br />Medical District, City</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-red-500 rounded-2xl p-6 text-white text-center"
            >
              <AlertCircle className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Emergency</h3>
              <p className="text-red-100 mb-2">24/7 Urgent Care</p>
              <a href="tel:+923240133166" className="text-white font-medium hover:text-red-100 transition-colors">
               (+92) 3240133166
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="appointment">Appointment Request</option>
                        <option value="consultation">General Consultation</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="insurance">Insurance Questions</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Clinic Info & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Clinic Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Clinic Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-red-600 font-medium">Emergency Only</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Our Location</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 mb-2">
                      123 Dental Street<br />
                      Medical District<br />
                      City, State 12345
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Click to view directions</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                      Get Directions
                    </button>
                    <button className="flex-1 border border-teal-600 text-teal-600 px-4 py-2 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-colors">
                      Find Parking
                    </button>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-semibold">Dental Emergency?</h3>
                </div>
                <p className="text-red-100 mb-4">
                  Don't wait - dental emergencies require immediate attention. 
                  We're available 24/7 for urgent care.
                </p>
                <a
                  href="tel:+1234567890"
                  className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors inline-block"
                >
                  Call Emergency Line
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;