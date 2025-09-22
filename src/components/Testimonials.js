import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData, brandData } from "../data/mock";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-cream-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">Kata Mereka Tentang Kami</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman nyata dari klien-klien yang telah mempercayai 
            kami untuk momen spesial mereka.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card">
            {/* Quote Icon */}
            <div className="testimonial-quote-icon">
              <Quote size={32} className="text-rose-gold/30" />
            </div>

            {/* Content */}
            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="testimonial-text mb-8">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="testimonial-avatar"
                />
                <div className="text-left">
                  <div className="font-medium text-charcoal">{currentTestimonial.name}</div>
                  <div className="body-small text-gray-600">{currentTestimonial.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button 
                onClick={goToPrevious}
                className="testimonial-nav-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`testimonial-dot ${
                      index === currentIndex ? 'active' : ''
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={goToNext}
                className="testimonial-nav-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid (Mobile) */}
        <div className="mt-12 md:hidden">
          <div className="space-y-6">
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial-card-mobile ${
                index === currentIndex ? 'active' : ''
              }`}>
                <div className="flex gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar-small"
                  />
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="body-small text-gray-700 mb-2">"{testimonial.content}"</p>
                    <div>
                      <div className="font-medium text-sm text-charcoal">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="body-regular text-gray-600 mb-6">
            Ingin merasakan pengalaman yang sama? Mari wujudkan makeup impian Anda!
          </p>
          <a
            href={`${brandData.whatsappLink}?text=Halo, saya ingin konsultasi tentang layanan makeup`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;