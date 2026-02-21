import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FlaskConical,
    ShieldCheck,
    Settings,
    Globe,
    Mail,
    Phone,
    Instagram,
    Send,
    CheckCircle2,
    ChevronRight,
    Factory,
    TestTube2,
    FileText,
    Users,
    Building2,
    MessageSquare
} from 'lucide-react';

const Navbar = () => (
    <nav className="nav-sticky">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src="/logo.png" alt="NeuroPept Logo" style={{ height: '40px', width: 'auto' }} />
            </div>
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                <a href="#about" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>About us</a>
                <a href="#services" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>Services</a>
                <a href="#manufacturing" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>Manufacturing</a>
                <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:133f815e-c8a3-4bb0-8ad9-2c4927d7a012" target="_blank" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>Catalogue</a>
                <a href="#contact" className="btn-scientific" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>Contact Us</a>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section className="manufacturing-hero" style={{ padding: '120px 0' }}>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge-qc">
                        <ShieldCheck size={16} /> Ultra-High Purity Guaranteed
                    </div>
                    <h1 style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '2rem' }}>
                        High-Purity <span className="text-cyan">Research Peptides</span> & Custom Synthesis
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#64748B', marginBottom: '3rem', maxWidth: '600px' }}>
                        NeuroPept supplies ultra-high purity research peptides and custom peptide synthesis for laboratories, biotech and scientific research worldwide. Direct from our state-of-the-art manufacturing facilities.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="http://wa.me/+13472965740" className="btn-scientific" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            Request a Quote <ChevronRight size={20} />
                        </a>
                        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:133f815e-c8a3-4bb0-8ad9-2c4927d7a012" className="btn-outline">View Catalogue</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        background: '#FFFFFF',
                        border: '8px solid #F1F5F9',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src="/hero.png"
                            alt="Lab Manufacturing"
                            style={{ width: '100%', display: 'block' }}
                        />
                        <div style={{ padding: '1.5rem', background: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#06B6D4', textTransform: 'uppercase' }}>Facility Standard</span>
                                <p style={{ fontWeight: 700 }}>ISO 9001:2015 Certified</p>
                            </div>
                            <CheckCircle2 color="#10B981" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="section-sterile">
        <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About Neuro<span className="text-cyan">Pept</span></h2>
                <p style={{ fontSize: '1.15rem', color: '#64748B' }}>
                    We are more than just a supplier; we are manufacturers dedicated to the frontier of scientific progress. Our portfolio includes a wide range of research chemicals, with a strong focus on advanced research peptides tailored for the needs of laboratories and biotech companies worldwide.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
                <div className="card-lab">
                    <Building2 color="#06B6D4" size={40} style={{ marginBottom: '1.5rem' }} />
                    <h3>Direct Manufacturer</h3>
                    <p style={{ color: '#64748B', marginTop: '1rem' }}>Eliminating the middleman to provide pure laboratory-direct pricing and uncompromising quality control.</p>
                </div>
                <div className="card-lab">
                    <Settings color="#06B6D4" size={40} style={{ marginBottom: '1.5rem' }} />
                    <h3>Custom Synthesis</h3>
                    <p style={{ color: '#64748B', marginTop: '1rem' }}>Tailored peptide production featuring various modifications, purity levels, and scale-up capabilities.</p>
                </div>
                <div className="card-lab">
                    <Globe color="#06B6D4" size={40} style={{ marginBottom: '1.5rem' }} />
                    <h3>Global Distribution</h3>
                    <p style={{ color: '#64748B', marginTop: '1rem' }}>Cold-chain logistics and secure worldwide shipping to maintain peptide stability and integrity.</p>
                </div>
            </div>
        </div>
    </section>
);

const ManufacturingProcess = () => (
    <section id="manufacturing">
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Production Excellence</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            {
                                icon: Factory,
                                title: "Scalable Production",
                                desc: "From milligram to kilogram scale, our facilities are equipped for rapid scale-up without loss of purity."
                            },
                            {
                                icon: TestTube2,
                                title: "Rigorous Testing",
                                desc: "Every batch undergoes HPLC and MS analysis. We provide Certificates of Analysis (CoA) with all orders."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Highest Aligned Purity",
                                desc: "Our standard research peptides feature 98%+ purity, with 99%+ available upon request."
                            }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{
                                    flexShrink: 0,
                                    width: '56px',
                                    height: '56px',
                                    background: 'var(--accent-soft)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <item.icon color="#06B6D4" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                    <p style={{ color: '#64748B' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ background: '#F1F5F9', borderRadius: '24px', padding: '3rem' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Quality Assurance</h3>
                    <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '2rem', borderLeft: '4px solid #06B6D4' }}>
                        <p style={{ fontStyle: 'italic', color: '#475569', marginBottom: '1.5rem' }}>
                            "At NeuroPept, manufacturing isn't just a process; it's a commitment to scientific precision. We ensure that every peptide leaving our laboratory meets the exact specifications required for cutting-edge research."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', background: '#CBD5E1', borderRadius: '50%' }}></div>
                            <div>
                                <p style={{ fontWeight: 700 }}>Head of Synthesis</p>
                                <p style={{ fontSize: '0.85rem', color: '#64748B' }}>NeuroPept Manufacturing Facility</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FacilityTour = () => (
    <section style={{ background: '#FFFFFF' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Automated <span className="text-cyan">Synthesis Excellence</span></h2>
                <p style={{ color: '#64748B', maxWidth: '700px', margin: '1rem auto' }}>
                    Our laboratory utilizes the latest in solid-phase peptide synthesis (SPPS) technology, providing high precision and consistency across every batch.
                </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                {[
                    { label: 'Controlled Environment', val: 'ISO Class 7' },
                    { label: 'Batch Capacity', val: '50+ Batches/Day' },
                    { label: 'Instrumentation', val: 'Agilent HPLC' },
                    { label: 'QC Protocol', val: 'Triple-Validation' }
                ].map((stat, i) => (
                    <div key={i} style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{stat.label}</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>{stat.val}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TechnicalDocs = () => (
    <section style={{ background: '#0F172A', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ maxWidth: '600px' }}>
                    <h2 style={{ color: '#FFFFFF', fontSize: '2.5rem', marginBottom: '1rem' }}>Technical Documentation</h2>
                    <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
                        Transparency is core to our manufacturing philosophy. Every peptide is delivered with comprehensive HPLC and Mass Spectrometry validation reports.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-scientific">Download CoA Template</button>
                    <button className="btn-outline" style={{ borderColor: '#64748B', color: '#FFFFFF' }}>QC Protocol PDF</button>
                </div>
            </div>
        </div>
    </section>
);

const Wholesales = () => (
    <section className="section-sterile" id="services">
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>B2B & Wholesale Partnerships</h2>
            <p style={{ color: '#64748B', maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
                We support biotech entrepreneurs and laboratories with optimized lead generation and supply chain solutions.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[
                    { title: "Volume Discounts", desc: "Competitive pricing for bulk orders tailored to large-scale research projects.", icon: FileText },
                    { title: "Custom Branding", desc: "White-label manufacturing solutions for established resellers and startups.", icon: Users },
                    { title: "Technical Support", desc: "24/7 access to our team of chemists and synthesis specialists.", icon: MessageSquare }
                ].map((item, idx) => (
                    <div key={idx} className="card-lab">
                        <item.icon color="#06B6D4" size={32} style={{ marginBottom: '1rem' }} />
                        <h4>{item.title}</h4>
                        <p style={{ color: '#64748B', marginTop: '0.5rem' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
                        <p style={{ color: '#64748B', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Have a custom request or looking to start a partnership? Our team is ready to support your research.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <Mail color="#06B6D4" size={24} />
                                <div>
                                    <p style={{ fontWeight: 600 }}>Email Us</p>
                                    <a href="mailto:contact@neuropept.solutions" style={{ color: '#64748B', textDecoration: 'none' }}>contact@neuropept.solutions</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <Phone color="#06B6D4" size={24} />
                                <div>
                                    <p style={{ fontWeight: 600 }}>WhatsApp</p>
                                    <a href="https://wa.me/+13472965740" style={{ color: '#64748B', textDecoration: 'none' }}>+1 (347) 296-5740</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <a href="https://t.me/neuropepts" style={{ width: '40px', height: '40px', background: '#F1F5F9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#06B6D4' }}><Send size={18} /></a>
                                <a href="https://www.instagram.com/neuropept/" style={{ width: '40px', height: '40px', background: '#F1F5F9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#06B6D4' }}><Instagram size={18} /></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '3rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Request a Quotation</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="First Name" style={{ width: '100%', padding: '0.85rem', border: '1px solid #E2E8F0', borderRadius: '6px' }} />
                                <input type="text" placeholder="Last Name" style={{ width: '100%', padding: '0.85rem', border: '1px solid #E2E8F0', borderRadius: '6px' }} />
                            </div>
                            <input type="email" placeholder="Professional Email" style={{ width: '100%', padding: '0.85rem', border: '1px solid #E2E8F0', borderRadius: '6px' }} />
                            <select style={{ width: '100%', padding: '0.85rem', border: '1px solid #E2E8F0', borderRadius: '6px', background: '#fff' }}>
                                <option>Custom Synthesis Request</option>
                                <option>Wholesale/Bulk Order</option>
                                <option>Catalogue Request</option>
                                <option>Other Inquiry</option>
                            </select>
                            <textarea placeholder="Message details..." rows="4" style={{ width: '100%', padding: '0.85rem', border: '1px solid #E2E8F0', borderRadius: '6px' }}></textarea>
                            <button className="btn-scientific" style={{ width: '100%' }}>Submit Inquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer style={{ padding: '60px 0', background: '#0F172A', color: '#94A3B8' }}>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <img src="/logo.png" alt="NeuroPept Logo" style={{ height: '32px', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                        Leading manufacturer of high-purity research peptides supporting cutting-edge scientific progress worldwide.
                    </p>
                </div>
                <div>
                    <h4 style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>Navigation</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                        <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About us</a></li>
                        <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
                        <li><a href="#manufacturing" style={{ color: 'inherit', textDecoration: 'none' }}>Manufacturing</a></li>
                        <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>Portfolio</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Research Peptides</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Custom Synthesis</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Wholesale Solutions</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Imprint</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #1E293B', paddingTop: '2.5rem', textAlign: 'center', fontSize: '0.85rem' }}>
                <p>© 2026 NeuroPept. All products are for research purposes only. Not for human consumption.</p>
            </div>
        </div>
    </footer>
);

const StickyContactButtons = () => (
    <div className="sticky-contact-wrapper">
        <a href="https://t.me/neuropepts" target="_blank" rel="noreferrer" className="sticky-btn telegram-btn">
            <Send size={28} />
        </a>
        <a href="https://wa.me/+13472965740" target="_blank" rel="noreferrer" className="sticky-btn whatsapp-btn">
            <MessageSquare size={28} />
        </a>
    </div>
);

export default function App() {
    return (
        <div style={{ background: '#FFFFFF' }}>
            <Navbar />
            <Hero />
            <About />
            <ManufacturingProcess />
            <FacilityTour />
            <TechnicalDocs />
            <Wholesales />
            <Contact />
            <Footer />
            <StickyContactButtons />
        </div>
    );
}
