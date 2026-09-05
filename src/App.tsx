import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    ExternalLink,
    Mail,
    MapPin,
    Globe,
    Palette,
    Shirt,
    Video,
    ArrowRight,
    Send,
} from 'lucide-react';
import Scene from './components/Scene';
import { services, suiteUrl } from './data/services';
import { products } from './data/products';
import { caseStudies } from './data/caseStudies';
import './index.css';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] as const },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const serviceIcons = [Globe, Palette, Video, Shirt];

const statusLabel: Record<string, string> = {
    live: 'Live',
    'in-progress': 'In Progress',
    'coming-soon': 'Coming Soon',
};

function App() {
    const [problem, setProblem] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmitProblem = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent('New problem for Jepixo');
        const body = encodeURIComponent(
            `${problem}\n\n---\nReach me at: ${contact || '(not provided)'}`
        );
        window.location.href = `mailto:admin@jepixo.in?subject=${subject}&body=${body}`;
    };

    return (
        <main className="app">
            <Scene />

            <nav className="navbar">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo h3"
                >
                    Jepixo
                </motion.div>
                <div className="nav-links">
                    <a href="#suite" className="nav-link">Suite</a>
                    <a href="#products" className="nav-link">Products</a>
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link nav-link-cta">Tell Us</a>
                    <Github
                        size={22}
                        className="icon-btn"
                        style={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://github.com/jepixo', '_blank')}
                    />
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="hero-content"
                >
                    <motion.span variants={fadeIn} className="eyebrow">
                        Jepixo &middot; Pune, India
                    </motion.span>
                    <motion.h1
                        variants={fadeIn}
                        className="gradient-text"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05 }}
                    >
                        Whatever you need <span className="primary-gradient-text">built, sold,</span> or branded.
                    </motion.h1>
                    <motion.p
                        variants={fadeIn}
                        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '24px auto' }}
                    >
                        Jepixo is a builder's studio out of Pune. One team, two branches — a services
                        division that ships web, brand, and merch work, and a products division that
                        builds software of its own.
                    </motion.p>
                    <motion.div variants={fadeIn} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            className="glass-card btn-primary"
                            onClick={() => document.getElementById('suite')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Jepixo Suite
                        </button>
                        <button
                            className="glass-card btn-secondary"
                            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            See Our Products
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* JEPIXO SUITE */}
            <section id="suite" className="section-container suite-section">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <span className="eyebrow">The Services Branch</span>
                        <h2 className="gradient-text section-title">Jepixo Suite</h2>
                        <p className="section-sub">
                            Whatever the ask, our services team gets it designed, built, and delivered — one
                            coherent studio behind it, not a list of disconnected freelancers.
                        </p>
                        <a
                            href={suiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="suite-visit-link"
                        >
                            Visit suite.jepixo.in <ExternalLink size={15} />
                        </a>
                    </div>

                    <div className="suite-grid">
                        {services.map((service, index) => {
                            const Icon = serviceIcons[index % serviceIcons.length];
                            return (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="suite-card"
                                >
                                    <div className="suite-card-top">
                                        <div className="suite-card-icon">
                                            <Icon size={26} />
                                        </div>
                                        <span className={`status-badge status-${service.status}`}>
                                            {statusLabel[service.status]}
                                        </span>
                                    </div>
                                    <h3 className="h4">{service.name}</h3>
                                    <p className="suite-card-category">{service.category}</p>
                                    <p className="suite-card-tagline">{service.tagline}</p>
                                    <p className="suite-card-desc">{service.description}</p>
                                    <ul className="suite-card-list">
                                        {service.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    {service.status === 'live' && service.url && (
                                        <a
                                            href={service.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="suite-card-link"
                                        >
                                            Visit {service.url.replace('https://', '')} <ArrowRight size={15} />
                                        </a>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* PRODUCTS */}
            <section id="products" className="section-container products-section">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <span className="eyebrow">The Products Branch</span>
                        <h2 className="gradient-text section-title">Products</h2>
                        <p className="section-sub">
                            Software we build and ship ourselves — used every day, not just demoed.
                        </p>
                    </div>

                    <div className="products-grid">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`glass-card product-card ${product.status === 'live' ? 'product-card-live' : ''}`}
                            >
                                <span className={`status-badge ${product.status === 'live' ? 'status-live' : 'status-dev'}`}>
                                    {product.statusLabel}
                                </span>
                                <h3 className="h4">{product.name}</h3>
                                <p className="product-tagline">{product.tagline}</p>
                                <p className="product-desc">{product.description}</p>
                                <div className="product-ctas">
                                    {product.primaryCta && (
                                        <a
                                            href={product.primaryCta.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary product-btn"
                                        >
                                            {product.primaryCta.label} <ExternalLink size={16} />
                                        </a>
                                    )}
                                    {product.secondaryCta && (
                                        <a
                                            href={product.secondaryCta.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="product-link-secondary"
                                        >
                                            {product.secondaryCta.label}
                                        </a>
                                    )}
                                    {product.status === 'in-development' && (
                                        <span className="product-soon">More soon</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Placeholder slot so the grid visibly has room to grow */}
                        <div className="product-card product-card-next">
                            <span className="product-next-label">What's next</span>
                            <p>Got a product idea for us to build? That's a conversation, not a form.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* TELL US THE PROBLEM */}
            <section id="contact" className="section-container problem-section">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="problem-inner"
                >
                    <h2 className="gradient-text section-title">Tell Us The Problem.</h2>
                    <p className="section-sub" style={{ margin: '0 auto 40px' }}>
                        Website down? Need a POS? Uniforms for the whole staff by Friday? Start here —
                        we'll figure out the rest.
                    </p>

                    <form className="problem-form glass-card" onSubmit={handleSubmitProblem}>
                        <textarea
                            required
                            placeholder="What's the problem?"
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            rows={4}
                        />
                        <input
                            type="text"
                            placeholder="Email or phone to reach you"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        <button type="submit" className="btn-primary problem-submit">
                            Send it over <Send size={16} />
                        </button>
                    </form>

                    <div className="problem-alt">
                        <a href="mailto:admin@jepixo.in" className="problem-alt-link">
                            <Mail size={16} /> admin@jepixo.in
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* WORK */}
            <section id="work" className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <span className="eyebrow">Work</span>
                        <h2 className="gradient-text section-title">Selected Projects</h2>
                    </div>

                    <div className="work-grid">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.title + study.client}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`glass-card work-card ${study.isPlaceholder ? 'work-card-placeholder' : ''}`}
                            >
                                <div className="tech-stack" style={{ marginBottom: '16px' }}>
                                    {study.tags.map((tag) => (
                                        <span key={tag} className="chip">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="h4">{study.title}</h3>
                                <p className="work-client">{study.client}</p>
                                <p className="work-summary">{study.summary}</p>
                                {study.url && (
                                    <a href={study.url} target="_blank" rel="noopener noreferrer" className="work-link">
                                        View site <ArrowRight size={16} />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="about" className="section-container about-section">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-inner"
                >
                    <div className="section-header" style={{ textAlign: 'left', margin: 0 }}>
                        <span className="eyebrow">About</span>
                        <h2 className="gradient-text section-title" style={{ textAlign: 'left' }}>
                            Started in IT and branding. Won't stop there.
                        </h2>
                    </div>
                    <div className="about-text">
                        <p>
                            Jepixo was founded by <strong>Joel Sanjay</strong> in Pune, India, building websites
                            and brand identities for clients who needed things done properly and done fast.
                        </p>
                        <p>
                            That work became Jepixo Suite. But the same instinct that had us fixing a client's
                            broken site at midnight also had us building our own tools — because most of the
                            software we needed to run a small studio didn't fit the way we actually worked.
                            That became the Products branch, starting with Billblaze.
                        </p>
                        <p>
                            Jepixo today is both: a studio that ships work for other people, and a small
                            products company shipping its own. Neither is the side project.
                        </p>
                    </div>
                </motion.div>
            </section>

            <footer className="footer">
                <div className="footer-inner">
                    <div>
                        <h2 className="primary-gradient-text" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Jepixo</h2>
                        <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Jepixo. All rights reserved.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-item">
                            <MapPin size={16} />
                            <span>Pune, India</span>
                        </div>
                        <div className="footer-item">
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
