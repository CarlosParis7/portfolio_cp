import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { ArrowRight, Mail } from 'lucide-react';

const WA_NUMBER = '50764535848';
const WA_MESSAGE = encodeURIComponent('Hola Carlos, vi tu portafolio y me interesa contactarte.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const EMAIL = 'carlosparis826@gmail.com';
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Contacto%20desde%20tu%20portafolio`;

export default function Contact() {
  const { t } = useAppContext();

  return (
    <section id="contact" className="section py-20" style={{paddingBottom: '100px'}}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'var(--surface-color)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '24px', 
          padding: '80px 5%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Abstract Technical Grid Pattern */}
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.15, pointerEvents: 'none'}}></div>
        
        <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '24px', zIndex: 1, lineHeight: 1.1, maxWidth: '800px'}}>
          {t.contact.title}
        </h2>
        <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '48px', zIndex: 1, lineHeight: 1.6}}>
          {t.contact.subtitle}
        </p>

        {/* DUAL CTA BUTTONS */}
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1}}>
          {/* WhatsApp primary */}
          <a 
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              background: 'var(--text-primary)',
              color: 'var(--bg-color)',
              fontWeight: 600,
              padding: '20px 40px',
              borderRadius: '100px',
              fontSize: '1.05rem',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              textDecoration: 'none'
            }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >
            {t.contact.btn} <ArrowRight size={20} />
          </a>

          {/* Email secondary */}
          <a 
            href={GMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontWeight: 500,
              padding: '20px 36px',
              borderRadius: '100px',
              fontSize: '1.05rem',
              border: '1px solid var(--border-color)',
              transition: 'border-color 0.2s ease',
              textDecoration: 'none'
            }}
            onMouseOver={e => e.currentTarget.style.borderColor = 'var(--text-secondary)'}
            onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <Mail size={18} /> {t.contact.btnEmail}
          </a>
        </div>
      </motion.div>

      <footer style={{marginTop: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontFamily: 'monospace', fontSize: '0.85rem', textTransform: 'uppercase'}}>
        <p>© {new Date().getFullYear()} CARLOS P. // {t.contact.rights}</p>
        <div style={{display: 'flex', gap: '32px'}}>
          <a href="https://www.linkedin.com/in/carlos-paris21/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', transition: 'color 0.2s ease'}} onMouseOver={e=>e.target.style.color='var(--text-primary)'} onMouseOut={e=>e.target.style.color='inherit'}>LINKEDIN</a>
          <a href="https://github.com/CarlosParis7" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', transition: 'color 0.2s ease'}} onMouseOver={e=>e.target.style.color='var(--text-primary)'} onMouseOut={e=>e.target.style.color='inherit'}>GITHUB</a>
        </div>
      </footer>
    </section>
  );
}
