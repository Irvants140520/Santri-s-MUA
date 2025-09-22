import React from "react";
import { MessageCircle, Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";
import { brandData } from "../data/mock";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium mb-4 text-cream-white">{brandData.name}</h3>
            <p className="body-regular text-gray-300 mb-6 max-w-md">
              Makeup artist profesional di Yogyakarta yang menghadirkan kecantikan natural 
              dan elegan untuk setiap momen spesial Anda oleh {brandData.owner}.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={brandData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={brandData.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-medium mb-4 text-cream-white">Layanan Kami</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="footer-link">Makeup Wisuda</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Makeup Wedding</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Special Occasion</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Photoshoot Makeup</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-medium mb-4 text-cream-white">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-rose-gold mt-1 flex-shrink-0" />
                <span className="footer-contact">Yogyakarta & Sekitarnya</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-rose-gold mt-1 flex-shrink-0" />
                <a href={`tel:+${brandData.whatsappNumber}`} className="footer-contact hover:text-rose-gold transition-colors">
                  +{brandData.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={16} className="text-rose-gold mt-1 flex-shrink-0" />
                <a 
                  href={brandData.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-contact hover:text-rose-gold transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-rose-gold mt-1 flex-shrink-0" />
                <span className="footer-contact">08:00 - 20:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="heading-3 mb-4 text-cream-white">Siap untuk Tampil Cantik?</h4>
            <p className="body-regular text-gray-300 mb-6">
              Hubungi kami sekarang untuk konsultasi gratis dan booking makeup impian Anda!
            </p>
            <a
              href={`${brandData.whatsappLink}?text=Halo ${brandData.name}! Saya tertarik dengan layanan makeup`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-rose-gold border-rose-gold hover:bg-rose-gold/90"
            >
              <MessageCircle size={18} className="mr-2" />
              Chat Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="body-small text-gray-400">
              © 2024 {brandData.name}. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#portfolio" className="footer-bottom-link">Portfolio</a>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": brandData.name,
          "description": `Makeup artist profesional untuk wisuda, tunangan, prewedding, dan acara spesial di Yogyakarta oleh ${brandData.owner}`,
          "url": window.location.origin,
          "telephone": `+${brandData.whatsappNumber}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Yogyakarta",
            "addressCountry": "ID"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-7.7956",
            "longitude": "110.3695"
          },
          "openingHours": "Mo-Su 08:00-20:00",
          "priceRange": "150000-500000",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;