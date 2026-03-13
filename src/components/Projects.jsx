import { motion } from 'framer-motion';

export default function Projects({ projects }) {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-subtitle">Some of the work I've built</p>

        <motion.div
          className="projects-grid"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-50px' }}
        >
          {projects.map((p, i) => (
            <motion.div
              className="project-card hover-target"
              variants={itemVars}
              key={i}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            >
              <div className="project-img">
                {p.image ? (
                  <img src={p.image} alt={p.title} />
                ) : (
                  <div className="project-img-placeholder">
                    <span>{p.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span className="tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
