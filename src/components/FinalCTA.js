import React from "react";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
import { brandData } from "../data/mock";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-soft-peach/20 to-lavender-pastel/20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h2 className="hero-medium">
              Siap Tampil Cantik dan Percaya Diri?
            </h2>
            
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Jangan biarkan momen spesial Anda berlalu tanpa tampilan yang sempurna. 
              Booking sekarang dan rasakan transformasi menakjubkan bersama {brandData.name}!
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="body-small text-gray-600">4.9/5 Rating</span>
              </div>
              
              <div className="h-4 w-px bg-gray-300"></div>
              
              <div className="body-small text-gray-600">
                <span className="font-medium text-charcoal">500+</span> Klien Puas
              </div>
              
              <div className="h-4 w-px bg-gray-300"></div>
              
              <div className="body-small text-gray-600">
                <span className="font-medium text-charcoal">5+</span> Tahun Pengalaman
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={`${brandData.whatsappLink}?text=Halo ${brandData.name}! Saya ingin booking makeup untuk acara saya. Bisa info lebih lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                <MessageCircle size={20} className="mr-3" />
                Booking Sekarang via WhatsApp
              </a>
              
              <a
                href={`${brandData.whatsappLink}?text=Halo, saya ingin konsultasi gratis tentang makeup yang cocok untuk acara saya`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                Konsultasi Gratis Dulu
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>

            {/* Urgency & Benefits */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="final-cta-benefit">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-medium mb-2">Respon Cepat</h4>
                <p className="body-small text-gray-600">
                  Chat WhatsApp dijawab dalam 15 menit
                </p>
              </div>
              
              <div className="final-cta-benefit">
                <div className="text-2xl mb-2">💎</div>
                <h4 className="font-medium mb-2">Kualitas Premium</h4>
                <p className="body-small text-gray-600">
                  Produk makeup internasional terbaik
                </p>
              </div>
              
              <div className="final-cta-benefit">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-medium mb-2">Hasil Terjamin</h4>
                <p className="body-small text-gray-600">
                  Tidak puas? Kami perbaiki gratis
                </p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-100">
              <div className="flex items-center justify-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="body-regular text-gray-700 italic mb-1">
                    "Makeup wisudanya bagus banget! Natural tapi tetap keliatan cantik. 
                    Recommended banget untuk yang mau makeup berkualitas dengan harga terjangkau!"
                  </p>
                  <div className="body-small text-gray-600">- Sarah, Fresh Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;