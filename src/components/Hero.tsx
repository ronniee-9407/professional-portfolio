import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
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
        <div className="section-container min-h-screen">
            <motion.div
                className="max-w-7xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting */}
                <motion.div variants={itemVariants} className="mb-6">
                    <span className="inline-block px-4 py-2 glass-card text-primary-400 font-medium rounded-full text-sm">
                        👋 Welcome to my portfolio
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
                >
                    Hi, I'm{' '}
                    <span className="gradient-text">Your Name</span>
                </motion.h1>

                {/* Title */}
                <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-semibold mb-4">
                        Full Stack Developer & Designer
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                        I craft beautiful, functional, and user-centric digital experiences with modern technologies
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const contact = document.getElementById('contact');
                            contact?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Get In Touch
                    </motion.button>

                    <motion.button
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const projects = document.getElementById('projects');
                            projects?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        View My Work
                    </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
                    {[
                        { name: 'GitHub', icon: '🔗', href: '#' },
                        { name: 'LinkedIn', icon: '💼', href: '#' },
                        { name: 'Twitter', icon: '🐦', href: '#' },
                        { name: 'Email', icon: '✉️', href: '#' },
                    ].map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-2xl hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            title={social.name}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-gray-500"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                    <span className="text-sm text-gray-500 mt-2">Scroll to explore</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
