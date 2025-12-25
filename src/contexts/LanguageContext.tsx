import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'A Professional Developer',
    'hero.title': 'Full-Stack Developer',
    'hero.subtitle': 'Based in Karaj, Iran',
    'hero.description': 'I craft beautiful, performant web applications with modern technologies. Passionate about clean code and exceptional user experiences.',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me better',
    'about.intro': 'I am a passionate full-stack developer with years of experience in building modern web applications.',
    'about.description': 'My journey in programming started with curiosity and has evolved into a deep passion for creating elegant solutions to complex problems. I specialize in React, TypeScript, Node.js, and modern web technologies.',
    'about.skills': 'Skills & Technologies',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    
    // Portfolio
    'portfolio.title': 'My Work',
    'portfolio.subtitle': 'Recent projects I have worked on',
    'portfolio.viewProject': 'View Project',
    'portfolio.viewCode': 'View Code',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s work together',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.location': 'Location',
    'contact.locationValue': 'Karaj, Iran',
    'contact.emailLabel': 'Email',
    'contact.phone': 'Phone',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.about': 'درباره من',
    'nav.portfolio': 'نمونه کارها',
    'nav.contact': 'تماس با ما',
    
    // Hero
    'hero.greeting': 'سلام، من هستم',
    'hero.name': 'یک برنامه‌نویس حرفه‌ای',
    'hero.title': 'توسعه‌دهنده فول‌استک',
    'hero.subtitle': 'مقیم کرج، ایران',
    'hero.description': 'من برنامه‌های وب زیبا و با کارایی بالا با استفاده از تکنولوژی‌های مدرن می‌سازم. علاقه‌مند به کد تمیز و تجربه کاربری استثنایی.',
    'hero.cta': 'مشاهده نمونه کارها',
    'hero.contact': 'تماس با من',
    
    // About
    'about.title': 'درباره من',
    'about.subtitle': 'بیشتر با من آشنا شوید',
    'about.intro': 'من یک توسعه‌دهنده فول‌استک با تجربه چندین ساله در ساخت برنامه‌های وب مدرن هستم.',
    'about.description': 'سفر من در برنامه‌نویسی با کنجکاوی شروع شد و به یک علاقه عمیق برای ایجاد راه‌حل‌های زیبا برای مشکلات پیچیده تبدیل شده است. من در React، TypeScript، Node.js و تکنولوژی‌های مدرن وب تخصص دارم.',
    'about.skills': 'مهارت‌ها و تکنولوژی‌ها',
    'about.experience': 'سال تجربه',
    'about.projects': 'پروژه تکمیل شده',
    'about.clients': 'مشتری راضی',
    
    // Portfolio
    'portfolio.title': 'نمونه کارها',
    'portfolio.subtitle': 'پروژه‌های اخیر من',
    'portfolio.viewProject': 'مشاهده پروژه',
    'portfolio.viewCode': 'مشاهده کد',
    
    // Contact
    'contact.title': 'تماس با ما',
    'contact.subtitle': 'بیایید با هم کار کنیم',
    'contact.name': 'نام شما',
    'contact.email': 'ایمیل شما',
    'contact.message': 'پیام شما',
    'contact.send': 'ارسال پیام',
    'contact.location': 'موقعیت',
    'contact.locationValue': 'کرج، ایران',
    'contact.emailLabel': 'ایمیل',
    'contact.phone': 'تلفن',
    
    // Footer
    'footer.rights': 'تمامی حقوق محفوظ است.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'fa';
  });

  const isRTL = language === 'fa';

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
