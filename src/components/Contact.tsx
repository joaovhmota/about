import { useI18n } from '../i18n';

export default function Contact() {
  const { t } = useI18n();
  const links = [
    { label: t.contact.email, value: 'joaovhmota@gmail.com', href: 'mailto:joaovhmota@gmail.com' },
    { label: t.contact.linkedin, value: 'linkedin.com/in/joaovhmota', href: 'https://www.linkedin.com/in/joaovhmota' },
  ];
  return (
    <section id="contato">
      <div className="container reveal">
        <p className="section-label">{t.contact.label}</p>
        <h2>{t.contact.title}</h2>
        <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px 20px',
                border: '1px solid var(--border)',
                borderRadius: 10,
                background: 'var(--bg-elevated)',
                fontSize: 15,
              }}
            >
              <span style={{ color: 'var(--text-muted)' }}>{l.label}</span>
              <span style={{ color: 'var(--accent)' }}>{l.value} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
