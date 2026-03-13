import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiGo,
  SiLaravel,
  SiPython,
  SiPostman,
  SiMysql,
  SiGithub,
  SiDocker,
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiGraphql,
  SiPhp,
} from 'react-icons/si';
import {
  FaDatabase,
  FaExchangeAlt,
  FaLeaf,
  FaSitemap,
  FaProjectDiagram,
  FaCloud,
} from 'react-icons/fa';

const SKILL_ICON_MAP = {
  'HTML & CSS': { icon: SiHtml5, color: '#E34F26' },
  Bootstrap: { icon: SiBootstrap, color: '#7952B3' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  Reactjs: { icon: SiReact, color: '#61DAFB' },
  Vue: { icon: SiVuedotjs, color: '#4FC08D' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  'Go (Golang)': { icon: SiGo, color: '#00ADD8' },
  PHP: { icon: SiPhp, color: '#777BB4' },
  Laravel: { icon: SiLaravel, color: '#FF2D20' },
  'RESTful API': { icon: SiPostman, color: '#FF6C37' },
  Graphql: { icon: SiGraphql, color: '#E10098' },
  Python: { icon: SiPython, color: '#3776AB' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  'Schema Design': { icon: FaDatabase, color: '#60a5fa' },
  Migration: { icon: FaExchangeAlt, color: '#34d399' },
  Seeding: { icon: FaLeaf, color: '#a3e635' },
  'Git & GitHub': { icon: SiGithub, color: '#e2e8f0' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Azure: { icon: FaCloud, color: '#0078D4' },
  'Visual Paradigm': { icon: FaSitemap, color: '#c084fc' },
  'BPMN / UML': { icon: FaProjectDiagram, color: '#fb923c' },
};

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 120 },
  },
};

const chipVars = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 150 },
  },
};

export default function Skills({ skills }) {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <motion.div
          className="bento-grid"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-100px' }}
        >
          {skills.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVars}
              className="bento-item hover-target"
              style={{ justifyContent: 'flex-start' }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '1.25rem',
                  color: 'var(--accent)',
                  fontWeight: 700,
                }}
              >
                {category.category}
              </h3>

              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
              >
                {category.items.map((skill, skillIdx) => {
                  const mapped = SKILL_ICON_MAP[skill.name];
                  const IconComp = mapped?.icon;
                  const iconColor = mapped?.color ?? 'var(--accent)';

                  return (
                    <motion.div
                      key={skillIdx}
                      variants={chipVars}
                      whileHover={{ scale: 1.08, y: -2 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.45rem 0.85rem',
                        borderRadius: '99px',
                        background: 'var(--card)',
                        border: '1px solid var(--border)',
                        cursor: 'default',
                        transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = iconColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--border)')
                      }
                    >
                      {IconComp && (
                        <IconComp
                          style={{
                            fontSize: '1.15rem',
                            color: iconColor,
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <span
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--text)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
