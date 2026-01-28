import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    } as const;

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    } as const;

    const stats = [
        { value: '3+', label: 'Years Experience' },
        { value: '50+', label: 'Projects Completed' },
        { value: '30+', label: 'Happy Clients' },
        { value: '100%', label: 'Success Rate' },
    ];

    return (
        <div className="section-container" ref={ref}>
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Passionate developer crafting exceptional digital experiences
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Image/Avatar */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            <motion.div
                                className="glass-card p-8 rounded-3xl glow-effect"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
                                    <span className="text-9xl">👨‍💻</span>
                                </div>
                            </motion.div>

                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
                                animate={{ scale: [1.2, 1, 1.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Building Digital Dreams into Reality
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I'm a passionate full-stack developer with expertise in creating elegant solutions
                            to complex problems. With a strong foundation in both frontend and backend technologies,
                            I specialize in building scalable, performant, and user-friendly applications.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            My journey in tech has been driven by curiosity and a love for learning. I thrive on
                            challenges and am constantly exploring new technologies to stay at the forefront of
                            web development.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'TailwindCSS', 'AWS'].map((tech) => (
                                <motion.span
                                    key={tech}
                                    className="px-4 py-2 glass-card rounded-full text-sm font-medium text-primary-300 border border-primary-500/30"
                                    whileHover={{ scale: 1.1, borderColor: 'rgba(99, 102, 241, 0.8)' }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className="glass-card p-6 rounded-2xl text-center hover:bg-white/10 transition-colors group"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
