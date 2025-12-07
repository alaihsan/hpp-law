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
            'contact.submit': 'Kirim Pesan'
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
            'contact.submit': 'Send Message'
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
