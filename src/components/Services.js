import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { servicesData, brandData } from "../data/mock";

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">Layanan Makeup Professional</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Pilih paket makeup yang sesuai dengan kebutuhan acara Anda. 
            Semua paket menggunakan produk premium dan teknik profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className={`service-card hover-lift ${index % 2 === 0 ? 'featured' : ''}`}>
              {/* Service Icon/Number */}
              <div className="service-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="service-content">
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="body-regular text-gray-600 mb-4">{service.description}</p>
                
                <div className="service-price mb-6">
                  <span className="text-rose-gold font-medium">{service.price}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="body-small text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`${brandData.whatsappLink}?text=Halo, saya tertarik dengan layanan ${service.title}. Bisa info lebih lanjut?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-cta"
                >
                  Booking Sekarang
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-lavender-pastel/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">Kenapa Pilih {brandData.name}?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-medium mb-2">Produk Premium</h4>
                <p className="body-small text-gray-600">
                  Menggunakan brand internasional seperti MAC, Urban Decay, Fenty Beauty
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">⏰</div>
                <h4 className="font-medium mb-2">Tepat Waktu</h4>
                <p className="body-small text-gray-600">
                  Professional dan selalu on time untuk acara penting Anda
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">💯</div>
                <h4 className="font-medium mb-2">Hasil Terjamin</h4>
                <p className="body-small text-gray-600">
                  Makeup tahan lama dan fotogenic untuk semua jenis acara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;