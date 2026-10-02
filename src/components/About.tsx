import { useI18n } from '../i18n';

export default function About() {
  const { t } = useI18n();
  return (
    <section id="sobre">
      <div className="container reveal">
        <p className="section-label">{t.about.label}</p>
        <h2>{t.about.title}</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: 720, fontSize: 17 }}>
          {t.about.text}
        </p>
      </div>
    </section>
  );
}
