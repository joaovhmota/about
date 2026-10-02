import { useI18n } from '../i18n';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      style={{
        borderTop: 'none',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(94, 234, 212, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ textAlign: 'center' }}>
        <h1
          className="hero-title"
          style={{
            fontSize: 'clamp(28px, 6vw, 72px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            whiteSpace: 'nowrap',
            margin: '0 auto',
          }}
        >
          João Vinícius Hinkeldey Mota
        </h1>
        <p
          className="hero-sub"
          style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '24px auto 0', fontSize: 20 }}
        >
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
