document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        id: {
            'nav.home': 'Beranda',
            'nav.ourStory': 'Tentang Kami',
            'nav.visiMisi': 'Visi & Misi',
            'nav.layanan': 'Layanan',
            'nav.partner': 'Partner',
            'nav.contact': 'Kontak',
            'hero.title': 'Tantangan Anda, <span class="gold-text italic">Solusi Kami.</span>',
            'hero.subtitle': 'Mitra hukum strategis yang memadukan integritas dan wawasan bisnis untuk melindungi aset serta memastikan kepatuhan perusahaan Anda.',
            'hero.cta_free': 'KONSULTASI GRATIS',
            'hero.cta_learn': 'Pelajari Layanan',
            'contact.title': 'Hubungi Kami',
        'contact.submit': 'Kirim Pesan',
        'values.integrity.title': 'Integritas',
        'values.integrity.description': 'Fondasi utama penanganan kasus.',
        'values.excellence.title': 'Keunggulan',
        'values.excellence.description': 'Standar kualitas layanan tertinggi.',
        'values.collaboration.title': 'Kolaborasi',
        'values.collaboration.description': 'Sinergi tim untuk solusi terbaik.',
        'values.innovation.title': 'Inovasi',
        'values.innovation.description': 'Solusi hukum cerdas & efisien.',
        'values.responsibility.title': 'Tanggung Jawab',
        'values.responsibility.description': 'Dedikasi penuh pada hasil.',
        'services.title': 'Area Praktik & Layanan',
        'services.description': 'Kami menyediakan solusi hukum terintegrasi mulai dari pendirian badan usaha, litigasi, hingga perlindungan aset intelektual.',
        'services.business.title': 'Hukum Bisnis & Korporasi',
        'services.business.description': 'Pendirian badan usaha, perizinan OSS, legal audit, compliance, serta dukungan transaksi perusahaan.',
        'services.intellectual.title': 'Kekayaan Intelektual (HAKI)',
        'services.intellectual.description': 'Pendaftaran merek, paten, hak cipta, desain industri, dan penanganan sengketa HAKI.',
        'services.litigation.title': 'Litigasi & Sengketa',
        'services.litigation.description': 'Pendampingan litigasi (perdata/pidana), banding/peninjauan, serta penyelesaian alternatif (mediasi/arbitrase).',
        'services.industrial.title': 'Hubungan Industrial',
        'services.industrial.description': 'Penyusunan Peraturan Perusahaan (PP), PKB, penanganan PHK, dan penyelesaian perselisihan hubungan industrial.',
        'services.property.title': 'Properti & Pertanahan',
        'services.property.description': 'Due Diligence tanah, jual beli, sewa menyewa, dan penyelesaian sengketa agraria secara komprehensif.',
        'services.family.title': 'Hukum Keluarga',
        'services.family.description': 'Pewarisan, Wasiat, Perjanjian Pranikah, dan pembagian Harta Bersama dengan pendekatan yang bijaksana.',
        'contact.name.placeholder': 'Nama Anda',
        'contact.email.placeholder': 'Email',
        'contact.phone.placeholder': 'Telepon (opsional)',
        'contact.message.placeholder': 'Pesan Anda',
        'layanan.hero.title': 'Layanan Hukum Profesional',
        'layanan.hero.subtitle': 'Solusi hukum terintegrasi untuk kebutuhan bisnis dan personal—strategis, praktis, dan dapat diandalkan.',
        'layanan.services.title': 'Area Praktik & Layanan',
        'layanan.services.description': 'Kami menyediakan solusi hukum terintegrasi mulai dari pendirian badan usaha, litigasi, hingga perlindungan aset intelektual.'
    },
        en: {
            'nav.home': 'Home',
            'nav.ourStory': 'Our Story',
            'nav.visiMisi': 'Vision & Mission',
            'nav.layanan': 'Services',
            'nav.partner': 'Partners',
            'nav.contact': 'Contact',
            'hero.title': 'Your Challenge, <span class="gold-text italic">Our Solution.</span>',
            'hero.subtitle': 'A strategic legal partner combining integrity and business insight to protect assets and ensure compliance for your company.',
            'hero.cta_free': 'FREE CONSULTATION',
            'hero.cta_learn': 'Explore Services',
            'contact.title': 'Contact Us',
            'contact.submit': 'Send Message',
            'values.integrity.title': 'Integrity',
            'values.integrity.description': 'The main foundation for case handling.',
            'values.excellence.title': 'Excellence',
            'values.excellence.description': 'The highest standard of service quality.',
            'values.collaboration.title': 'Collaboration',
            'values.collaboration.description': 'Team synergy for the best solutions.',
            'values.innovation.title': 'Innovation',
            'values.innovation.description': 'Smart & efficient legal solutions.',
            'values.responsibility.title': 'Responsibility',
            'values.responsibility.description': 'Full dedication to results.',
            'services.title': 'Practice Areas & Services',
            'services.description': 'We provide integrated legal solutions starting from business establishment, litigation, to intellectual property protection.',
            'services.business.title': 'Business & Corporate Law',
            'services.business.description': 'Establishment of PT, OSS Licensing, Legal Audit, Compliance System, up to mergers and acquisitions. We ensure your business runs in accordance with regulations.',
            'services.intellectual.title': 'Intellectual Property (IP)',
            'services.intellectual.description': 'Registration and protection of Trademarks, Patents, Copyrights, and Industrial Designs. Protect your intangible assets from disputes.',
            'services.litigation.title': 'Litigation & Disputes',
            'services.litigation.description': 'Legal assistance in District Courts up to the Supreme Court (Criminal/Civil), as well as settlement via Mediation & Arbitration.',
            'services.industrial.title': 'Industrial Relations',
            'services.industrial.description': 'Drafting of Company Regulations (PP), Collective Labor Agreements, handling of terminations, and resolution of industrial relations disputes.',
            'services.property.title': 'Property & Land',
            'services.property.description': 'Land Due Diligence, sales, leases, and comprehensive resolution of agrarian disputes.',
            'services.family.title': 'Family Law',
            'services.family.description': 'Inheritance, Wills, Prenuptial Agreements, and division of Marital Assets with a wise approach.',
            'contact.name.placeholder': 'Your Name',
            'contact.email.placeholder': 'Email',
            'contact.phone.placeholder': 'Phone (optional)',
            'contact.message.placeholder': 'Your Message',
            'layanan.hero.title': 'Professional Legal Services',
            'layanan.hero.subtitle': 'Integrated legal solutions for business and personal needs—strategic, practical, and reliable.',
            'layanan.services.title': 'Practice Areas & Services',
            'layanan.services.description': 'We provide integrated legal solutions starting from business establishment, litigation, to intellectual property protection.'
        }
    };

    function setLang(lang) {
        if (!translations[lang]) return;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = (lang === 'id') ? 'id' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const txt = translations[lang][key];
            if (!txt) return;
            // For inputs/textarea use placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = txt;
            } else {
                el.innerHTML = txt;
            }
        });
        // Visual state for language buttons
        document.querySelectorAll('.lang-switch').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
            btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
        });
    }

    // initialize
    const saved = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'id');
    setLang(saved);

    document.querySelectorAll('.lang-switch').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLang(lang);
        });
    });
});
