import { useState } from 'react';
import { useReveal } from './useReveal';
import { I18nProvider, translations, type Lang } from './i18n';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function detectLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'pt-BR' || stored === 'en-US') return stored;
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US';
}

export default function App() {
  useReveal();
  const [lang, setLangState] = useState<Lang>(detectLang);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
  };

  return (
    <I18nProvider value={{ lang, setLang, t: translations[lang] }}>
      <main>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
          <Hero />
          <Nav />
        </div>
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
