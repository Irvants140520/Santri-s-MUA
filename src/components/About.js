import React from "react";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { aboutData, brandData } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid-two-column items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="about-image-container">
              <img
                src="/frontend/src/data/img/andin.jpg"
                alt={`${brandData.name} - ${aboutData.owner} professional makeup artist`}
                className="about-main-image"
              />
              
              {/* Floating Stats */}
              <div className="about-floating-stat">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-rose-gold/20 p-2 rounded-full">
                      <Users size={20} className="text-rose-gold" />
                    </div>
                    <div>
                      <div className="font-bold text-charcoal">500+</div>
                      <div className="text-xs text-gray-600">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-floating-badge">
                <div className="bg-rose-gold text-white px-3 py-2 rounded-full text-sm font-medium">
                  ✨ Certified MUA
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-1 mb-4">Tentang {brandData.name}</h2>
              <div className="prose prose-gray">
                {aboutData.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="body-regular text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock size={24} className="text-rose-gold mr-2" />
                  <span className="text-2xl font-bold text-charcoal">5+</span>
                </div>
                <p className="body-small text-gray-600">Tahun Pengalaman</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users size={24} className="text-rose-gold mr-2" />
                  <span className="text-2xl font-bold text-charcoal">500+</span>
                </div>
                <p className="body-small text-gray-600">Klien Puas</p>
              </div>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="heading-3 mb-4">Keahlian Khusus</h3>
              <div className="grid grid-cols-2 gap-3">
                {aboutData.specializations.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                    <span className="body-small text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-lavender-pastel/20 rounded-lg p-6">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Award size={18} className="text-rose-gold" />
                Sertifikasi & Pelatihan
              </h4>
              <ul className="space-y-2 body-small text-gray-600">
                <li>• Certified Professional Makeup Artist - IMA Jakarta</li>
                <li>• Advanced Bridal Makeup Course - Beauty Academy</li>
                <li>• Editorial & Fashion Makeup Workshop</li>
                <li>• Product Training: MAC, Urban Decay, Fenty Beauty</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={`${brandData.whatsappLink}?text=Halo, saya ingin tahu lebih lanjut tentang layanan makeup`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat Langsung dengan Saya
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <h3 className="heading-2 text-center mb-12">Mengapa Memilih {brandData.name}?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <div className="bg-soft-peach/20 p-4 rounded-full">
                  🎨
                </div>
              </div>
              <h4 className="heading-3 mb-3">Produk Premium</h4>
              <p className="body-regular text-gray-600">
                Menggunakan produk makeup berkualitas internasional yang aman untuk semua jenis kulit 
                dan memberikan hasil tahan lama.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <div className="bg-lavender-pastel/20 p-4 rounded-full">
                  💡
                </div>
              </div>
              <h4 className="heading-3 mb-3">Konsultasi Personal</h4>
              <p className="body-regular text-gray-600">
                Setiap klien mendapat konsultasi mendalam untuk memastikan makeup sesuai dengan 
                karakter, acara, dan preferensi personal.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <div className="bg-rose-gold/20 p-4 rounded-full">
                  ⭐
                </div>
              </div>
              <h4 className="heading-3 mb-3">Service Excellence</h4>
              <p className="body-regular text-gray-600">
                Komitment untuk memberikan pengalaman terbaik dari konsultasi hingga hasil akhir 
                yang memuaskan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;