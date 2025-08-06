import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [beforeAfterStates, setBeforeAfterStates] = useState(
    galleryImages.reduce((acc, img) => ({ ...acc, [img.id]: false }), {})
  );

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const toggleBeforeAfter = (imageId) => {
    setBeforeAfterStates(prev => ({
      ...prev,
      [imageId]: !prev[imageId]
    }));
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
              Before &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700"> After </span>
              Gallery
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Witness the incredible transformations we've achieved for our patients. 
              Each smile tells a story of confidence restored and dreams fulfilled.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={beforeAfterStates[image.id] ? image.after : image.before}
                    alt={`${image.treatment} - ${beforeAfterStates[image.id] ? 'After' : 'Before'}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Before/After Toggle */}
                  <div className="absolute top-4 left-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBeforeAfter(image.id);
                      }}
                      className="bg-white/90 backdrop-blur-sm text-teal-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-white transition-colors"
                    >
                      {beforeAfterStates[image.id] ? 'After' : 'Before'}
                    </button>
                  </div>

                  {/* Treatment Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {image.treatment}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {image.treatment}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBeforeAfter(image.id);
                      }}
                      className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                    >
                      Toggle View
                    </button>
                    <span className="text-gray-400 text-xs">Click to enlarge</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl overflow-hidden">
                {/* Before Image */}
                <div className="relative">
                  <img
                    src={selectedImage.before}
                    alt={`${selectedImage.treatment} - Before`}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </span>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative">
                  <img
                    src={selectedImage.after}
                    alt={`${selectedImage.treatment} - After`}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-b-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {selectedImage.treatment}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Your Transformation Awaits
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              These amazing results could be yours too. Schedule a consultation to discuss 
              your goals and create a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-200">
                View More Results
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;