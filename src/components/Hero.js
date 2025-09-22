import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { heroData } from "../data/mock";

const Hero = () => {
  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      <div className="container">
        <div className="grid-two-column">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="hero-large">
              {heroData.title}
            </h1>
            
            <p className="hero-tagline text-rose-gold">
              {heroData.tagline}
            </p>
            
            <p className="body-large max-w-lg">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={heroData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} className="mr-2" />
                {heroData.ctaText}
              </a>
              
              <button 
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Lihat Portfolio
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-charcoal">500+</div>
                <div className="body-small text-gray-600">Klien Puas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-charcoal">5+</div>
                <div className="body-small text-gray-600">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-charcoal">⭐ 4.9</div>
                <div className="body-small text-gray-600">Rating Client</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="hero-image-container">
              <img
                src="/frontend/src/data/img/zulfa-before.jpg"
                alt="Santri's Makeup Artist - Professional makeup result"
                className="hero-image"
              />
              
              {/* Floating Elements */}
              <div className="floating-badge">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-sm font-medium text-charcoal">✨ Makeup Natural</div>
                  <div className="text-xs text-gray-600">Tahan Lama 8+ Jam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={heroData.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </section>
  );
};

export default Hero;