import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqData, brandData } from "../data/mock";

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-cream-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Ada pertanyaan tentang layanan kami? Temukan jawabannya di sini 
              atau hubungi kami langsung untuk konsultasi lebih lanjut.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="faq-item"
              >
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-question">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="faq-content">
                  <p className="body-regular text-gray-600">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Help */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h3 className="heading-3 mb-4">Masih Ada Pertanyaan?</h3>
              <p className="body-regular text-gray-600 mb-6">
                Tim kami siap membantu Anda dengan pertanyaan spesifik tentang layanan makeup, 
                harga, atau kebutuhan khusus untuk acara Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`${brandData.whatsappLink}?text=Halo, saya punya pertanyaan tentang layanan makeup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Chat via WhatsApp
                </a>
                
                <a
                  href={`tel:+${brandData.whatsappNumber}`}
                  className="btn-secondary"
                >
                  Call Langsung
                </a>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-soft-peach/10 rounded-lg p-6">
              <h4 className="font-medium mb-3 text-charcoal">💡 Tips Booking</h4>
              <ul className="body-small text-gray-600 space-y-1">
                <li>• Booking minimal H-7 untuk hasil maksimal</li>
                <li>• Siapkan referensi makeup yang diinginkan</li>
                <li>• Informasikan jenis acara dan dress code</li>
              </ul>
            </div>
            
            <div className="bg-lavender-pastel/10 rounded-lg p-6">
              <h4 className="font-medium mb-3 text-charcoal">🎯 Persiapan Makeup</h4>
              <ul className="body-small text-gray-600 space-y-1">
                <li>• Pastikan kulit dalam kondisi bersih</li>
                <li>• Hindari facial treatment H-2 sebelum makeup</li>
                <li>• Informasikan alergi atau masalah kulit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;