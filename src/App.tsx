import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, MapPin } from 'lucide-react';
import Scene from './components/Scene';
import { projects } from './data/projects';
import './index.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  return (
    <main className="app">
      <Scene />

      <nav className="navbar">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo h3"
        >
          jepixo.
        </motion.div>
        <div className="nav-links">
          <Github size={24} className="icon-btn" style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/jepixo', '_blank')} />
        </div>
      </nav>

      <section className="hero">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="hero-content"
        >
          <motion.h1
            variants={fadeIn}
            className="gradient-text"
            style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.05em' }}
          >
            Creative <span className="primary-gradient-text">Engineer.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '600px', margin: '24px auto' }}
          >
            Building high-performance digital experiences at the intersection of design and data.
          </motion.p>
          <motion.div variants={fadeIn}>
            <button
              className="glass-card"
              style={{ padding: '12px 32px', cursor: 'pointer', background: 'white', color: 'black', fontWeight: 600, border: 'none' }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '48px' }}>Crafted Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card project-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <h3 className="h4">{project.title}</h3>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>

                {project.isPrivate && (
                  <span style={{ fontSize: '0.75rem', color: '#71717a', fontStyle: 'italic' }}>Private Repository</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h2 className="primary-gradient-text" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>jepixo.</h2>
            <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} jepixo. All rights reserved.</p>
          </div>

          <div style={{ display: 'flex', gap: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} />
              <span>Global / Remote</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} />
              <a href="mailto:admin@jepixo.in" style={{ color: 'inherit', textDecoration: 'none' }}>admin@jepixo.in</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
