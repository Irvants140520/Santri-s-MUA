// Mock data untuk Santri's MUA Landing Page

export const brandData = {
  name: "Santri's MUA",
  owner: "Andiansi Rahwawati",
  whatsappNumber: "6289633187547",
  instagramLink: "https://www.instagram.com/santri.mua?igsh=MXdkMnJpcDQydTh5Ng==",
  whatsappLink: "https://wa.me/6289633187547"
};

export const heroData = {
  title: "Santri's MUA",
  tagline: "Cantik Natural, Elegan di Setiap Momen",
  description: "Makeup artist profesional untuk wisuda, tunangan, prewedding, dan acara spesial. Tampil percaya diri dengan makeup natural yang tahan lama.",
  ctaText: "Booking Sekarang via WhatsApp",
  whatsappLink: brandData.whatsappLink
};

export const servicesData = [
  {
    id: 1,
    title: "Makeup Wisuda",
    description: "Makeup natural dan elegan untuk hari kelulusan yang berkesan. Tahan lama hingga acara selesai.",
    price: "Mulai dari 150K",
    features: ["Makeup natural & fresh", "Tahan lama 6-8 jam", "Free touch up", "Foto dokumentasi"]
  },
  {
    id: 2,
    title: "Makeup Tunangan & Prewedding",
    description: "Tampil memukau di momen spesial dengan makeup yang fotogenic dan romantis.",
    price: "Mulai dari 300K",
    features: ["Konsultasi style", "Makeup photogenic", "Hair styling", "Free trial makeup"]
  },
  {
    id: 3,
    title: "Special Occasion",
    description: "Makeup untuk acara keluarga, pesta, atau event penting lainnya.",
    price: "Mulai dari 200K",
    features: ["Sesuai tema acara", "Makeup fleksibel", "Consultation gratis", "Produk premium"]
  },
  {
    id: 4,
    title: "Photoshoot Makeup",
    description: "Makeup khusus untuk photoshoot dengan hasil yang stunning dan camera-ready.",
    price: "Mulai dari 250K",
    features: ["Camera-ready makeup", "Multiple looks", "Professional products", "Retouching tips"]
  }
];

export const portfolioData = [
  {
    id: 1,
    title: "Makeup Wisuda Natural",
    category: "wisuda",
    beforeImage: "/img/zulfa-before.jpg",
    afterImage: "/img/zulfa-after2.jpg",
    description: "Fresh natural look untuk wisuda"
  },
  {
    id: 2,
    title: "Bridal Makeup Elegan",
    category: "wedding",
    beforeImage: "/img/hanun-before.webp",
    afterImage: "/img/hanun-after.jpg",
    description: "Makeup prewedding romantis dan timeless"
  },
  {
    id: 3,
    title: "Party Makeup Glamour",
    category: "party",
    beforeImage: "/img/putri-before.jpg",
    afterImage: "/img/putri-afrer.jpg",
    description: "Bold dan stunning untuk acara malam"
  },
  {
    id: 4,
    title: "Photoshoot Professional",
    category: "photoshoot",
    beforeImage: "/img/khusnita-before.jpg",
    afterImage: "/img/khusnita-after.webp",
    description: "Camera-ready makeup untuk portfolio"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Putri",
    role: "Fresh Graduate",
    content: "Makeup wisudanya bagus banget! Natural tapi tetap keliatan cantik di foto. Tahan lama juga sampai acara selesai. Puas banget sama hasilnya!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Ayu Maharani",
    role: "Bride-to-be",
    content: "Kak Andin bener-bener ngerti apa yang aku mau. Makeup preweddingnya romantic banget dan cocok sama tema foto kami. Terima kasih!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616c04840d1?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Dinda Sari",
    role: "Event Organizer",
    content: "Sudah beberapa kali pake jasa Santri MUA. Selalu professional, on time, dan hasilnya memuaskan. Recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
  }
];

export const faqData = [
  {
    id: 1,
    question: "Berapa lama durasi makeup?",
    answer: "Untuk makeup reguler sekitar 1-1.5 jam, sedangkan untuk makeup kompleks seperti bridal bisa 2-3 jam. Kami selalu pastikan hasil yang sempurna tanpa terburu-buru."
  },
  {
    id: 2,
    question: "Apakah bisa trial makeup dulu?",
    answer: "Ya, tersedia trial makeup khusus untuk paket wedding/prewedding dengan biaya 150K yang bisa dipotong dari total pembayaran jika jadi booking."
  },
  {
    id: 3,
    question: "Produk makeup apa yang digunakan?",
    answer: "Kami menggunakan produk premium seperti MAC, Urban Decay, Fenty Beauty, dan brand internasional lainnya untuk hasil terbaik dan aman untuk kulit."
  },
  {
    id: 4,
    question: "Area coverage untuk home service?",
    answer: "Kami melayani area Yogyakarta dan sekitarnya (Sleman, Bantul, Kulon Progo, Gunung Kidul). Untuk area di luar itu ada tambahan transport fee yang reasonable."
  },
  {
    id: 5,
    question: "Bagaimana sistem pembayaran?",
    answer: "DP 50% saat booking untuk secure slot, sisanya dibayar setelah makeup selesai. Pembayaran bisa cash, transfer, atau e-wallet."
  },
  {
    id: 6,
    question: "Apakah ada garansi touch up?",
    answer: "Ya, kami provide touch up gratis dalam 2 jam pertama setelah makeup selesai (khusus area Yogyakarta)."
  }
];

export const aboutData = {
  name: brandData.name,
  owner: brandData.owner,
  description: `Hai! Saya ${brandData.owner}, \n\n makeup artist berpengalaman 5+ tahun di Yogyakarta yang passionate dalam menciptakan makeup natural dan elegan. Dengan pengalaman menangani 500+ klien untuk berbagai acara spesial, saya memahami kebutuhan setiap klien untuk tampil percaya diri.\n\nSaya menggunakan produk-produk premium dan teknik profesional untuk memastikan makeup tidak hanya cantik, tapi juga tahan lama dan aman untuk kulit. Setiap klien adalah prioritas, dan kepuasan Anda adalah kebanggaan saya.`,
  experience: "5+ Tahun Pengalaman",
  clients: "500+ Klien Puas",
  specializations: ["Natural Makeup", "Bridal Makeup", "Editorial Makeup", "Special Effects"],
  image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=400&h=500&fit=crop"
};
