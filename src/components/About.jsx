import { motion } from 'framer-motion';

export default function About({ data }) {
  const { description, description2, stats } = data;

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <p className="section-subtitle">A little bit about who I am</p>

        <motion.div
          className="bento-grid"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-100px' }}
        >
          <motion.div variants={itemVars} className="bento-item bento-large">
            <h3
              style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--text)',
              }}
            >
              Background
            </h3>
            <p
              style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              {description}
            </p>
            {description2 && (
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                {description2}
              </p>
            )}
          </motion.div>

          {stats.map((s, i) => (
            <motion.div
              variants={itemVars}
              className="bento-item bento-square hover-target"
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginTop: '0.5rem',
                  }}
                >
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
