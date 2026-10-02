import { useI18n } from '../i18n';

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experiencia">
      <div className="container reveal">
        <p className="section-label">{t.experience.label}</p>
        <h2>{t.experience.title}</h2>
        <div style={{ display: 'grid', gap: 24 }}>
          {t.experience.roles.map((r, i) => (
            <article
              key={i}
              style={{
                border: '1px solid',
                borderColor: r.highlight ? 'var(--accent)' : 'var(--border)',
                borderRadius: 12,
                padding: 28,
                background: r.highlight ? 'var(--accent-dim)' : 'var(--bg-elevated)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600 }}>{r.role}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>{r.company}</p>
                </div>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{r.period}</span>
              </div>
              <ul style={{ paddingLeft: 20, display: 'grid', gap: 6 }}>
                {r.bullets.map((b) => (
                  <li key={b} style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
