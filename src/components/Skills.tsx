import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    interface Skill {
        name: string;
        level: number;
    }

    interface SkillCategory {
        title: string;
        icon: string;
        color: string;
        skills: Skill[];
    }

    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend',
            icon: '🎨',
            color: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'React / Next.js', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'HTML / CSS', level: 95 },
                { name: 'TailwindCSS', level: 90 },
                { name: 'Framer Motion', level: 80 },
            ],
        },
        {
            title: 'Backend',
            icon: '⚙️',
            color: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'Node.js / Express', level: 85 },
                { name: 'Python / Django', level: 75 },
                { name: 'RESTful APIs', level: 90 },
                { name: 'GraphQL', level: 70 },
                { name: 'Socket.io', level: 80 },
            ],
        },
        {
            title: 'Database',
            icon: '💾',
            color: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'MongoDB', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'Redis', level: 75 },
                { name: 'Firebase', level: 80 },
                { name: 'MySQL', level: 75 },
            ],
        },
        {
            title: 'DevOps & Tools',
            icon: '🛠️',
            color: 'from-orange-500 to-red-500',
            skills: [
                { name: 'Git / GitHub', level: 90 },
                { name: 'Docker', level: 75 },
                { name: 'AWS / Vercel', level: 80 },
                { name: 'CI/CD', level: 70 },
                { name: 'Linux', level: 75 },
            ],
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
                damping: 20,
            },
        },
    } as const;

    return (
        <div className="section-container bg-slate-500/5 dark:bg-gray-900/30" ref={ref}>
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category: SkillCategory) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="glass-card p-8 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-all group"
                            whileHover={{ scale: 1.01, y: -2 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {category.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill: Skill, index: number) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-slate-800 dark:text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-slate-600 dark:text-gray-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{
                                                    duration: 1,
                                                    delay: index * 0.05,
                                                    ease: 'easeOut',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div variants={itemVariants} className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Also Familiar With</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Jest',
                            'Webpack',
                            'Vite',
                            'Figma',
                            'Photoshop',
                            'Agile/Scrum',
                            'WebSockets',
                            'OAuth',
                            'Stripe',
                            'Three.js',
                        ].map((skill) => (
                            <motion.span
                                key={skill}
                                className="px-4 py-2 glass-card rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white hover:border-primary-500/50 border border-white/10 transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Skills;
