import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            id: 1,
            company: 'Tech Innovators Inc.',
            position: 'Senior Full Stack Developer',
            duration: '2022 - Present',
            location: 'Remote',
            description: [
                'Led development of microservices architecture serving 1M+ users',
                'Mentored junior developers and conducted code reviews',
                'Implemented CI/CD pipelines reducing deployment time by 60%',
                'Built real-time features using WebSockets and Redis',
            ],
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
            icon: '🚀',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            company: 'Creative Solutions Ltd.',
            position: 'Full Stack Developer',
            duration: '2020 - 2022',
            location: 'Hybrid',
            description: [
                'Developed and maintained e-commerce platforms with Stripe integration',
                'Optimized application performance resulting in 40% faster load times',
                'Collaborated with UX team to implement responsive designs',
                'Created RESTful APIs consumed by web and mobile applications',
            ],
            technologies: ['Next.js', 'Express', 'MongoDB', 'TailwindCSS'],
            icon: '💼',
            color: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            company: 'Digital Startup Co.',
            position: 'Junior Web Developer',
            duration: '2019 - 2020',
            location: 'On-site',
            description: [
                'Built responsive web applications using React and Vue.js',
                'Integrated third-party APIs and payment gateways',
                'Participated in agile development process and daily standups',
                'Contributed to open-source projects and internal tooling',
            ],
            technologies: ['Vue.js', 'Firebase', 'JavaScript', 'CSS'],
            icon: '⚡',
            color: 'from-green-500 to-emerald-500',
        },
    ];

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

    return (
        <div className="section-container bg-gray-900/30" ref={ref}>
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey and contributions
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 hidden md:block">
                                    <motion.div
                                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        {exp.icon}
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    className={`md:w-[calc(50%-4rem)] glass-card p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all group ${index % 2 === 0 ? 'md:text-right' : ''
                                        }`}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    {/* Mobile Icon */}
                                    <div className="md:hidden mb-4">
                                        <div
                                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl inline-flex`}
                                        >
                                            {exp.icon}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                                            {exp.position}
                                        </h3>
                                        <div className="text-primary-400 font-semibold text-lg mb-2">
                                            {exp.company}
                                        </div>
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-2">
                                            <span className="flex items-center gap-1">
                                                📅 {exp.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                📍 {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                <span className="text-primary-400 mt-1">▸</span>
                                                <span className="flex-1">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Download Resume Button */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        📄 Download Resume
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Experience;
