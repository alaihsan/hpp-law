// Full translations map (ID + EN) and runtime
const translations = {
  id: {
    "nav.home": "Home",
    "nav.ourStory": "Our Story",
    "nav.visiMisi": "Visi & Misi",
    "nav.layanan": "Layanan",
    "nav.partner": "Partner",
    "nav.contact": "Contact",

    "home.hero.title": "Your Challenge, <span class=\"gold-text italic\">Our Solution.</span>",
    "home.hero.subtitle": "Mitra hukum strategis yang memadukan integritas dan wawasan bisnis untuk melindungi aset serta memastikan kepatuhan perusahaan Anda.",
    "home.cta.consult": "KONSULTASI GRATIS",
    "home.cta.learnServices": "Pelajari Layanan",

    "values.title": "Nilai-Nilai Kami",
    "values.integrity": "Integritas",
    "values.integrity.desc": "Fondasi utama penanganan kasus.",
    "values.excellence": "Keunggulan",
    "values.excellence.desc": "Standar kualitas layanan tertinggi.",
    "values.collaboration": "Kolaborasi",
    "values.collaboration.desc": "Sinergi tim untuk solusi terbaik.",
    "values.innovation": "Inovasi",
    "values.innovation.desc": "Solusi hukum cerdas & efisien.",
    "values.responsibility": "Tanggung Jawab",
    "values.responsibility.desc": "Dedikasi penuh pada hasil.",

    "services.title": "Area Praktik & Layanan",
    "services.desc": "Kami menyediakan solusi hukum terintegrasi mulai dari pendirian badan usaha, litigasi, hingga perlindungan aset intelektual.",

    "services.corp.title": "Hukum Bisnis & Korporasi",
    "services.corp.desc": "Pendirian PT, Perizinan OSS, Legal Audit, Compliance System, hingga merger dan akuisisi. Kami memastikan bisnis Anda berjalan sesuai regulasi.",
    "services.corp.list.1": "Pendirian PT, CV, dan badan usaha lainnya",
    "services.corp.list.2": "Perizinan melalui sistem OSS RBA",
    "services.corp.list.3": "Legal Audit dan Compliance System",
    "services.corp.list.4": "M&A (Merger & Acquisition)",
    "services.corp.list.5": "Restrukturisasi dan likuidasi perusahaan",

    "services.haki.title": "Kekayaan Intelektual (HAKI)",
    "services.haki.desc": "Pendaftaran dan perlindungan Merek, Paten, Hak Cipta, serta Desain Industri. Lindungi aset tak berwujud Anda dari sengketa.",
    "services.haki.list.1": "Pendaftaran Merek Dagang",
    "services.haki.list.2": "Paten dan Desain Industri",
    "services.haki.list.3": "Hak Cipta dan Rahasia Dagang",
    "services.haki.list.4": "Due Diligence HAKI",
    "services.haki.list.5": "Penanganan sengketa HAKI",

    "services.litigation.title": "Penyelesaian Sengketa & Litigasi",
    "services.litigation.subtitle": "Litigasi dan Alternatif Penyelesaian",
    "services.litigation.list.1": "Litigasi di Semua Tingkatan: Beracara di Pengadilan Negeri, Pengadilan Tinggi, dan Mahkamah Agung (Hukum Pidana & Hukum Perdata).",
    "services.litigation.list.2": "Alternatif Dispute Resolution (ADR): Representasi dalam Arbitrase (BANI) dan Mediasi.",
    "services.litigation.list.3": "Penanganan perkara korporasi dan sengketa komersial.",
    "services.litigation.list.4": "Konsultasi pra-litigasi dan strategi penyelesaian sengketa.",

    "services.industrial.title": "HUKUM KETENAGAKERJAAN (Industrial Relation)",
    "services.industrial.list.1": "Penyusunan PKB, Peraturan Perusahaan (PP), penanganan PHK, dan Perjanjian Bersama.",
    "services.industrial.list.2": "Analisis Risiko Hubungan Industrial dan kebijakan ketenagakerjaan.",
    "services.industrial.list.3": "Penyelesaian Perselisihan Hubungan Industrial (Bipartit, PHI, Arbitrase).",

    "services.property.title": "Properti & Pertanahan",
    "services.property.desc": "Due Diligence tanah, jual beli, sewa menyewa, dan penyelesaian sengketa agraria secara komprehensif.",

    "services.family.title": "Hukum Keluarga",
    "services.family.desc": "Pewarisan, Wasiat, Perjanjian Pranikah, dan pembagian Harta Bersama dengan pendekatan yang bijaksana.",
    "services.family.list.1": "Gugatan Cerai, Pembatalan Perkawinan, Harta Bersama, dan Pengasuhan Anak.",
    "services.family.list.2": "Pembuatan Wasiat (Testament), Perwarisan, dan Perjanjian Pranikah.",

    "services.readMoreLabel": "Selengkapnya →",

    "blog.title": "Artikel & Berita",
    "blog.desc": "Wawasan hukum terbaru, analisis kasus, dan pembaruan regulasi untuk mendukung keputusan bisnis Anda.",

    "partner.title": "Mitra Kerja Sama Kami",
    "partner.desc": "Kami bekerja sama dengan berbagai institusi dan profesional terkemuka untuk memberikan layanan hukum yang komprehensif dan berkualitas tinggi.",
    "partner.clients.heading": "Kami dipercaya oleh berbagai klien",
    "partner.clients.list.1": "Perusahaan Startup",
    "partner.clients.list.2": "Perdagangan dan Distribusi",
    "partner.clients.list.3": "Perusahaan Manufaktur",
    "partner.clients.list.4": "Usaha Kecil dan Menengah (UMKM)",
    "partner.clients.list.5": "Perorangan (High-Net-Worth Individuals)",
    "partner.network.title": "Jaringan Profesional",
    "partner.network.desc": "Kami memiliki jaringan yang kuat dengan notaris, akuntan publik, konsultan pajak, dan konsultan bisnis untuk memberikan solusi yang terintegrasi bagi klien.",
    "partner.network.items.notary": "Notaris",
    "partner.network.items.accountant": "Akuntan Publik",
    "partner.network.items.tax": "Konsultan Pajak",
    "partner.network.items.business": "Konsultan Bisnis",
    "partner.benefits.heading": "Keuntungan Kemitraan",
    "partner.benefits.item.1.title": "Akses ke Sumber Daya Global",
    "partner.benefits.item.1.desc": "Melalui jaringan mitra internasional, kami dapat memberikan layanan hukum lintas negara dengan standar internasional.",
    "partner.benefits.item.2.title": "Solusi Terintegrasi",
    "partner.benefits.item.2.desc": "Kolaborasi dengan berbagai disiplin profesional memungkinkan kami memberikan solusi hukum yang menyeluruh.",
    "partner.benefits.item.3.title": "Pengetahuan Spesialis",
    "partner.benefits.item.3.desc": "Akses ke spesialis di berbagai bidang hukum memastikan kualitas layanan yang optimal untuk setiap kasus.",
    "partner.benefits.item.4.title": "Efisiensi dan Kecepatan",
    "partner.benefits.item.4.desc": "Jaringan mitra yang luas memungkinkan penyelesaian kasus dengan lebih efisien dan tepat waktu.",
    "partner.cta.join.title": "Bergabunglah dengan Kami",
    "partner.cta.join.desc": "Tertarik untuk menjalin kemitraan strategis? Mari kita bangun kolaborasi yang saling menguntungkan untuk kemajuan dunia hukum.",
    "partner.cta.join.button": "Hubungi Kami untuk Partnership",

    "partner.people.title": "Mitra Utama & Penasihat",
    "partner.people.subtitle": "Profesional yang berkontribusi langsung pada layanan dan strategi hukum kami.",
    "partner.people.indra.name": "Indra Purnama Pamungkas",
    "partner.people.indra.desc": "Dengan pengalaman yang luas di bidang manajemen sumber daya manusia, Indra berperan sebagai Spesialis Kompensasi dan Benefit, Konsultan Human Capital, serta aktif dalam berbagai kegiatan yang mendukung penguatan hubungan industrial di lingkungan kerja.",
    "partner.people.gladis.name": "Gladis Gayatri",
    "partner.people.gladis.desc": "Dengan pengalaman yang diperoleh melalui keterlibatan dalam Lembaga Kajian Hukum serta organisasi kemahasiswaan, Gladis memiliki keahlian sebagai konsultan spesialis dalam penyusunan kontrak, hukum perdata, kepailitan, serta di bidang persaingan usaha.",

    "story.hero.title": "Our Story",
    "story.hero.subtitle": "Journey of Excellence in Legal Services",
    "story.leader.headline": "Pengalaman Korporasi untuk Keamanan Bisnis Anda",
    "story.leader.p1": "Di dunia bisnis yang kompleks, Anda membutuhkan lebih dari sekadar pengacara biasa. Anda membutuhkan mitra strategis.",
    "story.leader.p2": "Hendra Pratama memiliki rekam jejak lebih dari 11 tahun sebagai Head of Legal di PT Panasonic Gobel Indonesia dan pengalaman di MNC Media. Pengalaman menangani korporasi multinasional ini dibawa ke HPP Law Office untuk memberikan standar layanan hukum tertinggi bagi bisnis Anda.",
    "story.cta.contact": "Hubungi Kami",
    "story.leader.cert.1": "Lisensi Advokat PERADI",
    "story.leader.cert.2": "Certified Legal Auditor & ISO Auditor",
    "story.leader.cert.3": "Spesialis Hubungan Industrial & Korporasi",

    "vision.hero.title": "Visi & Misi",
    "vision.hero.subtitle": "Komitmen Kami untuk Keunggulan dan Integritas",
    "vision.title": "Visi Kami",
    "vision.body": "Menjadi Pusat Hukum profesional yang memberikan kontribusi nyata dalam meningkatkan kepatuhan dan Kadilan serta mendukung kesuksesan klien melalui solusi hukum yang inovatif, andal dan berintegritas",
    "mission.title": "Misi Kami",
    "mission.item.1.title": "Menghadirkan solusi strategis yang optimal bagi pengembangan bisnis",
    "mission.item.1.desc": "Menghadirkan solusi strategis yang optimal bagi pengembangan bisnis melalui peran utama sebagai pusat konsultasi hukum yang profesional dan terpercaya.",
    "mission.item.2.title": "Menjunjung tinggi etika profesi",
    "mission.item.2.desc": "Menjunjung tinggi etika profesi, kerahasiaan, adil dan kejujuran dalam setiap aspek.",
    "mission.item.3.title": "Membangun kemitraan jangka panjang",
    "mission.item.3.desc": "Membangun hubungan kemitraan jangka panjang yang didasarkan pada kepercayaan dan kinerja.",
    "mission.item.4.title": "Pengembangan berkelanjutan tim",
    "mission.item.4.desc": "Berinvestasi dalam pengembangan berkelanjutan dari pengetahuan dan keahlian team.",

    "contact.hero.title": "HPP Law Office - Advocates & Legal Consultants",
    "contact.hero.subtitle": "Profesional, Terpercaya, dan Terintegrasi — Hubungi kami untuk konsultasi hukum.",
    "contact.headOffice.title": "Head Office",
    "contact.headOffice.address": "Menara 165, Lantai 17 Unit A, Jl. Simatupang Kav. 1 Rt. 003 Rw. 003 Kel. Cilandak Timur, Kec Pasar Minggu Kota Administrasi Jakarta Selatan, DKI Jakarta 12650",
    "contact.headOffice.telLabel": "Telp / Fax",
    "contact.headOffice.tel": "(021) 38820017 / (021) 38820010",
    "contact.headOffice.mobileLabel": "Mobile Phone",
    "contact.headOffice.mobile": "+62 813 8132 2865 (Call & Whatsapp)",
    "contact.headOffice.emailLabel": "Email",
    "contact.headOffice.email": "law@hppadvocates.com",
    "contact.headOffice.websiteLabel": "Website",
    "contact.headOffice.website": "https://hppadvocates.com",
    "contact.branch.title": "Branch Office",
    "contact.branch.address": "Jl. Kesadaran No. 18 Rt. 003 Rw. 005, Kel. Pondok Benda, Kec. Pamulang, Kota Tangerang Selatan, Banten 15416",
    "contact.branch.emailLabel": "Branch Email",
    "contact.branch.email": "hendrapratama.advokat@gmail.com",
    "contact.form.title": "Formulir Kontak Singkat",
    "contact.form.placeholder.name": "Nama Lengkap",
    "contact.form.placeholder.email": "Email",
    "contact.form.placeholder.phone": "Nomor Telepon",
    "contact.form.placeholder.message": "Pesan singkat",
    "contact.form.button": "Kirim Pesan",

    "footer.brand.tagline": "Kami berdedikasi untuk menjadi perpanjangan tangan dari tim hukum internal Anda. Keberhasilan Anda adalah keberhasilan Kami.",
    "footer.quick.home": "Home",
    "footer.quick.about": "Tentang Kami",
    "footer.quick.services": "Layanan Hukum",
    "footer.quick.blog": "Artikel & Berita",
    "footer.copy": "© 2025 HPP Law Office (Hendra Pratama & Partners). All Rights Reserved."
  },
  en: {
    "nav.home": "Home",
    "nav.ourStory": "Our Story",
    "nav.visiMisi": "Vision & Mission",
    "nav.layanan": "Services",
    "nav.partner": "Partners",
    "nav.contact": "Contact",

    "home.hero.title": "Your Challenge, <span class=\"gold-text italic\">Our Solution.</span>",
    "home.hero.subtitle": "A strategic legal partner combining integrity and business insight to protect assets and ensure corporate compliance.",
    "home.cta.consult": "FREE CONSULTATION",
    "home.cta.learnServices": "Explore Services",

    "values.title": "Our Values",
    "values.integrity": "Integrity",
    "values.integrity.desc": "The foundation of case handling.",
    "values.excellence": "Excellence",
    "values.excellence.desc": "The highest standard of service quality.",
    "values.collaboration": "Collaboration",
    "values.collaboration.desc": "Team synergy for the best solutions.",
    "values.innovation": "Innovation",
    "values.innovation.desc": "Smart & efficient legal solutions.",
    "values.responsibility": "Responsibility",
    "values.responsibility.desc": "Full dedication to results.",

    "services.title": "Practice Areas & Services",
    "services.desc": "We provide integrated legal solutions from company formation, litigation, to intellectual property protection.",

    "services.corp.title": "Business & Corporate Law",
    "services.corp.desc": "Company formation, OSS permits, legal audits, compliance systems, mergers and acquisitions. We ensure your business operates within regulations.",
    "services.corp.list.1": "Company formation (PT, CV, etc.)",
    "services.corp.list.2": "Permits via OSS RBA",
    "services.corp.list.3": "Legal Audit and Compliance Systems",
    "services.corp.list.4": "Mergers & Acquisitions (M&A)",
    "services.corp.list.5": "Restructuring and liquidation",

    "services.haki.title": "Intellectual Property (IP)",
    "services.haki.desc": "Trademark, patent, copyright and industrial design registration and protection. Safeguard your intangible assets from disputes.",
    "services.haki.list.1": "Trademark registration",
    "services.haki.list.2": "Patents and industrial designs",
    "services.haki.list.3": "Copyright and trade secrets",
    "services.haki.list.4": "IP due diligence",
    "services.haki.list.5": "IP dispute handling",

    "services.litigation.title": "Dispute Resolution & Litigation",
    "services.litigation.subtitle": "Litigation and Alternative Dispute Resolution",
    "services.litigation.list.1": "Litigation at all levels: District Court, High Court, and Supreme Court (Criminal & Civil law).",
    "services.litigation.list.2": "Alternative Dispute Resolution (ADR): Representation in Arbitration (BANI) and Mediation.",
    "services.litigation.list.3": "Handling corporate and commercial disputes.",
    "services.litigation.list.4": "Pre-litigation consultation and dispute strategy.",

    "services.industrial.title": "Industrial Relations",
    "services.industrial.list.1": "Collective bargaining agreements, company regulations, termination handling, and joint agreements.",
    "services.industrial.list.2": "Industrial relations risk analysis and employment policy.",
    "services.industrial.list.3": "Resolution of industrial relations disputes (Bipartite, Industrial Relations Court, Arbitration).",

    "services.property.title": "Property & Land",
    "services.property.desc": "Land due diligence, sales & leases, and comprehensive agrarian dispute resolution.",

    "services.family.title": "Family Law",
    "services.family.desc": "Inheritance, wills, prenuptial agreements, and division of marital assets with a thoughtful approach.",
    "services.family.list.1": "Divorce, annulment, marital assets, and child custody.",
    "services.family.list.2": "Wills, inheritance, and prenuptial agreements.",

    "services.readMoreLabel": "Read more →",

    "blog.title": "Articles & News",
    "blog.desc": "Latest legal insights, case analyses, and regulatory updates to support your business decisions.",

    "partner.title": "Our Partners",
    "partner.desc": "We collaborate with leading institutions and professionals to deliver comprehensive, high-quality legal services.",
    "partner.clients.heading": "Trusted by diverse clients",
    "partner.clients.list.1": "Startup Companies",
    "partner.clients.list.2": "Trade & Distribution",
    "partner.clients.list.3": "Manufacturing Companies",
    "partner.clients.list.4": "SMEs (Small & Medium Enterprises)",
    "partner.clients.list.5": "Individuals (High-Net-Worth)",
    "partner.network.title": "Professional Network",
    "partner.network.desc": "We maintain a strong network with notaries, public accountants, tax consultants, and business consultants to provide integrated solutions.",
    "partner.network.items.notary": "Notary",
    "partner.network.items.accountant": "Public Accountant",
    "partner.network.items.tax": "Tax Consultant",
    "partner.network.items.business": "Business Consultant",
    "partner.benefits.heading": "Partnership Benefits",
    "partner.benefits.item.1.title": "Access to Global Resources",
    "partner.benefits.item.1.desc": "Through international partner networks, we provide cross-border legal services to international standards.",
    "partner.benefits.item.2.title": "Integrated Solutions",
    "partner.benefits.item.2.desc": "Collaboration across disciplines allows us to deliver comprehensive legal solutions.",
    "partner.benefits.item.3.title": "Specialist Knowledge",
    "partner.benefits.item.3.desc": "Access to specialists ensures optimal service quality for each matter.",
    "partner.benefits.item.4.title": "Efficiency & Speed",
    "partner.benefits.item.4.desc": "A wide partner network enables more efficient and timely case resolution.",
    "partner.cta.join.title": "Join Us",
    "partner.cta.join.desc": "Interested in strategic partnership? Let's build mutually beneficial collaboration.",
    "partner.cta.join.button": "Contact Us for Partnership",

    "partner.people.title": "Key Partners & Advisors",
    "partner.people.subtitle": "Professionals who contribute directly to our services and legal strategy.",
    "partner.people.indra.name": "Indra Purnama Pamungkas",
    "partner.people.indra.desc": "With broad experience in human resource management, Indra serves as a Compensation & Benefits Specialist, Human Capital Consultant, and is active in activities supporting strong industrial relations in the workplace.",
    "partner.people.gladis.name": "Gladis Gayatri",
    "partner.people.gladis.desc": "With experience gained through involvement in Legal Research Institutes and student organizations, Gladis specializes in contract drafting, civil law, bankruptcy, and competition law.",

    "story.hero.title": "Our Story",
    "story.hero.subtitle": "Journey of Excellence in Legal Services",
    "story.leader.headline": "Corporate Experience for Your Business Security",
    "story.leader.p1": "In a complex business world, you need more than an ordinary lawyer. You need a strategic partner.",
    "story.leader.p2": "Hendra Pratama has over 11 years of experience as Head of Legal at PT Panasonic Gobel Indonesia and experience at MNC Media. This multinational corporate experience is brought to HPP Law Office to deliver the highest legal service standards for your business.",
    "story.cta.contact": "Contact Us",
    "story.leader.cert.1": "PERADI Advocate License",
    "story.leader.cert.2": "Certified Legal Auditor & ISO Auditor",
    "story.leader.cert.3": "Industrial Relations & Corporate Specialist",

    "vision.hero.title": "Vision & Mission",
    "vision.hero.subtitle": "Our commitment to excellence and integrity",
    "vision.title": "Our Vision",
    "vision.body": "To become a professional legal center that contributes to improving compliance and justice while supporting client success through innovative, reliable and integrity-driven legal solutions.",
    "mission.title": "Our Mission",
    "mission.item.1.title": "Deliver strategic solutions optimal for business development",
    "mission.item.1.desc": "Deliver strategic solutions optimal for business development through our role as a professional and trusted legal advisory center.",
    "mission.item.2.title": "Uphold professional ethics",
    "mission.item.2.desc": "Uphold professional ethics, confidentiality, fairness and honesty in every aspect.",
    "mission.item.3.title": "Build long-term partnerships",
    "mission.item.3.desc": "Build long-term partnerships based on trust and performance.",
    "mission.item.4.title": "Sustainable team development",
    "mission.item.4.desc": "Invest in ongoing development of team knowledge and expertise.",

    "contact.hero.title": "HPP Law Office - Advocates & Legal Consultants",
    "contact.hero.subtitle": "Professional, Trusted, and Integrated — Contact us for legal consultation.",
    "contact.headOffice.title": "Head Office",
    "contact.headOffice.address": "Menara 165, 17th Floor Unit A, Jl. Simatupang Kav. 1 Rt. 003 Rw. 003 Cilandak Timur, Pasar Minggu, South Jakarta, DKI Jakarta 12650",
    "contact.headOffice.telLabel": "Tel / Fax",
    "contact.headOffice.tel": "(021) 38820017 / (021) 38820010",
    "contact.headOffice.mobileLabel": "Mobile Phone",
    "contact.headOffice.mobile": "+62 813 8132 2865 (Call & Whatsapp)",
    "contact.headOffice.emailLabel": "Email",
    "contact.headOffice.email": "law@hppadvocates.com",
    "contact.headOffice.websiteLabel": "Website",
    "contact.headOffice.website": "https://hppadvocates.com",
    "contact.branch.title": "Branch Office",
    "contact.branch.address": "Jl. Kesadaran No.18 Rt.003 Rw.005, Pd. Benda, Pamulang, South Tangerang, Banten 15416",
    "contact.branch.emailLabel": "Branch Email",
    "contact.branch.email": "hendrapratama.advokat@gmail.com",
    "contact.form.title": "Quick Contact Form",
    "contact.form.placeholder.name": "Full Name",
    "contact.form.placeholder.email": "Email",
    "contact.form.placeholder.phone": "Phone Number",
    "contact.form.placeholder.message": "Short message",
    "contact.form.button": "Send Message",

    "footer.brand.tagline": "We are dedicated to being an extension of your in-house legal team. Your success is our success.",
    "footer.quick.home": "Home",
    "footer.quick.about": "About Us",
    "footer.quick.services": "Legal Services",
    "footer.quick.blog": "Articles & News",
    "footer.copy": "© 2025 HPP Law Office (Hendra Pratama & Partners). All Rights Reserved."
  }
};

function applyTranslations(lang) {
  const map = translations[lang] || translations.id;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = map[key];
    if (val === undefined) return;
    if (el.placeholder !== undefined && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  // update active language UI
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const b = btn.getAttribute('data-lang-btn');
    if (b === lang) {
      btn.classList.add('bg-[#0F172A]','text-white');
    } else {
      btn.classList.remove('bg-[#0F172A]','text-white');
    }
  });
  localStorage.setItem('site-lang', lang);
}

function initI18n() {
  const stored = localStorage.getItem('site-lang') || 'id';
  applyTranslations(stored);
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      applyTranslations(lang);
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
