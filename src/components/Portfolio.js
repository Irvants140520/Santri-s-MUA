import React, { useState } from "react";
import { portfolioData, brandData } from "../data/mock";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'wisuda', label: 'Wisuda' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'party', label: 'Party' },
    { id: 'photoshoot', label: 'Photoshoot' }
  ];

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-cream-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">Portfolio Karya Terbaik</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Lihat transformasi menakjubkan dari klien-klien kami. Setiap makeup dirancang khusus 
            untuk menonjolkan kecantikan natural Anda.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-button ${
                activeCategory === category.id ? 'active' : ''
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid-product-showcase">
          {filteredPortfolio.map(item => (
            <div key={item.id} className="portfolio-card hover-lift">
              <div className="relative overflow-hidden">
                {/* Before/After Images */}
                <div className="relative group cursor-pointer" 
                     onClick={() => setSelectedImage(item)}>
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    className="portfolio-image"
                  />
                  
                  {/* Overlay */}
                  <div className="portfolio-overlay">
                    <div className="text-white text-center">
                      <h3 className="heading-3 mb-2">{item.title}</h3>
                      <p className="body-small">{item.description}</p>
                      <div className="mt-4">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          Lihat Detail
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before/After Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-rose-gold text-white text-xs px-2 py-1 rounded">
                    Before → After
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="heading-3 mb-2">{item.title}</h3>
                <p className="body-small text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href={brandData.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Lihat Portfolio Lengkap di Instagram
          </a>
        </div>
      </div>

      {/* Modal for larger view */}
      {selectedImage && (
        <div className="portfolio-modal" onClick={() => setSelectedImage(null)}>
          <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="portfolio-modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="body-small text-gray-600 mb-2">Before</h4>
                <img 
                  src={selectedImage.beforeImage} 
                  alt={`${selectedImage.title} - Before`}
                  className="w-full h-64 object-cover rounded"
                />
              </div>
              <div>
                <h4 className="body-small text-gray-600 mb-2">After</h4>
                <img 
                  src={selectedImage.afterImage} 
                  alt={`${selectedImage.title} - After`}
                  className="w-full h-64 object-cover rounded"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="heading-3 mb-2">{selectedImage.title}</h3>
              <p className="body-regular text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;