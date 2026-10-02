import { useI18n } from '../i18n';

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills">
      <div className="container reveal">
        <p className="section-label">{t.skills.label}</p>
        <h2>{t.skills.title}</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}
        >
          {t.skills.groups.map((g) => (
            <div
              key={g.title}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: 24,
                background: 'var(--bg-elevated)',
              }}
            >
              <h3 style={{ fontSize: 15, marginBottom: 16, color: 'var(--accent)' }}>{g.title}</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 8 }}>
                {g.items.map((item) => (
                  <li key={item} style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
