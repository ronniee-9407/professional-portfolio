import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-featured online shopping platform with payment integration, admin dashboard, and real-time inventory management.',
            image: '🛒',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'fullstack',
            demo: '#',
            github: '#',
        },
        {
            id: 2,
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for managing multiple social media accounts with real-time metrics and scheduling features.',
            image: '📊',
            tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
            category: 'fullstack',
            demo: '#',
            github: '#',
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'Collaborative project management tool with drag-and-drop functionality, team chat, and file sharing.',
            image: '✅',
            tags: ['React', 'Firebase', 'Material-UI'],
            category: 'frontend',
            demo: '#',
            github: '#',
        },
        {
            id: 4,
            title: 'Weather Forecast App',
            description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
            image: '🌤️',
            tags: ['React', 'OpenWeather API', 'CSS'],
            category: 'frontend',
            demo: '#',
            github: '#',
        },
        {
            id: 5,
            title: 'REST API Backend',
            description: 'Scalable RESTful API with authentication, rate limiting, caching, and comprehensive documentation.',
            image: '🔌',
            tags: ['Node.js', 'Express', 'MongoDB', 'Redis'],
            category: 'backend',
            demo: '#',
            github: '#',
        },
        {
            id: 6,
            title: 'Portfolio Website Builder',
            description: 'SaaS platform for creating beautiful portfolio websites with drag-and-drop editor and hosting.',
            image: '🎨',
            tags: ['Next.js', 'Prisma', 'AWS', 'Stripe'],
            category: 'fullstack',
            demo: '#',
            github: '#',
        },
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

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
        <div className="section-container" ref={ref}>
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        A showcase of my recent work and side projects
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((f) => (
                            <motion.button
                                key={f.id}
                                onClick={() => setFilter(f.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === f.id
                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                                    : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {f.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            variants={itemVariants}
                            className="glass-card rounded-2xl overflow-hidden group hover:bg-white/10 transition-all"
                            whileHover={{ y: -10, scale: 1.02 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            {/* Project Image/Icon */}
                            <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center overflow-hidden">
                                <motion.div
                                    className="text-8xl"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {project.image}
                                </motion.div>

                                {/* Overlay on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-accent-500/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <motion.a
                                        href={project.demo}
                                        className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        className="px-4 py-2 bg-gray-900/80 text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Code
                                    </motion.a>
                                </motion.div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-400 py-12"
                    >
                        No projects found in this category.
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Projects;
