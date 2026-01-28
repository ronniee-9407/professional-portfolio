import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const timeoutsRef = useRef<any[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Capture timeout IDs for cleanup
        const successTimeout = setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            const idleTimeout = setTimeout(() => {
                setStatus('idle');
            }, 3000);

            timeoutsRef.current.push(successTimeout, idleTimeout);
        }, 1500);
    };

    // Robust cleanup to prevent memory leaks
    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach(t => clearTimeout(t));
            timeoutsRef.current = [];
        };
    }, []);

    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'your.email@example.com',
            href: 'mailto:your.email@example.com',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: '📱',
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: '📍',
            label: 'Location',
            value: 'Your City, Country',
            href: '#',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/yourprofile',
            href: 'https://linkedin.com',
            color: 'from-orange-500 to-red-500',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    } as const;

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    } as const;

    return (
        <div className="section-container min-h-screen" ref={ref}>
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's build something amazing together
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                Feel free to reach out through any of these channels.
                                I'm always open to new opportunities and collaborations.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                                        whileHover={{ x: 10, scale: 1.02 }}
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}
                                        >
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-gray-400 dark:text-gray-500 text-sm">{info.label}</p>
                                            <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                {[
                                    { name: 'GitHub', icon: '💻', href: '#' },
                                    { name: 'LinkedIn', icon: '💼', href: '#' },
                                    { name: 'Twitter', icon: '🐦', href: '#' },
                                    { name: 'Instagram', icon: '📷', href: '#' },
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        className="w-14 h-14 glass-card rounded-xl flex items-center justify-center text-2xl hover:bg-white/10 transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className={`w-full btn-primary ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                                    }`}
                                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                                disabled={status === 'sending'}
                            >
                                {status === 'idle' && '📨 Send Message'}
                                {status === 'sending' && '⏳ Sending...'}
                                {status === 'success' && '✅ Message Sent!'}
                                {status === 'error' && '❌ Error, Try Again'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-16 pt-8 border-t border-white/10"
                >
                    <p className="text-gray-400">
                        © 2024 Your Name. Built with ❤️ using React, Vite, TailwindCSS & Framer Motion
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
