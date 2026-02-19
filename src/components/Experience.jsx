import { motion } from 'framer-motion'
import { Briefcase, Server, Phone, BarChart3, Wrench, Code } from 'lucide-react'

const experiences = [
    {
        year: '2025',
        title: 'Stagiaire Technicien Réseau',
        company: 'Réseaux Bureautique',
        icon: Server,
        color: '#00d4ff',
        tasks: [
            'Migration du système de ticketing via PHP/API REST',
            'Optimisation du monitoring avec PowerShell',
            'Déploiement de MeshCentral pour la gestion à distance',
        ],
        tags: ['PHP', 'API REST', 'PowerShell', 'MeshCentral'],
    },
    {
        year: '2024',
        title: 'Stagiaire Technicien Réseau & Télécom',
        company: '',
        icon: Phone,
        color: '#8b5cf6',
        tasks: [
            'Configuration 3CX (VoIP)',
            'Déploiement WatchGuard T35',
            'Mise en place de la stack ELK/Grafana pour le monitoring',
        ],
        tags: ['3CX', 'VoIP', 'WatchGuard', 'ELK', 'Grafana'],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Expériences
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="timeline-line" />

                    {experiences.map((exp, i) => {
                        const Icon = exp.icon
                        const isLeft = i % 2 === 0
                        return (
                            <motion.div
                                key={exp.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: i * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Card */}
                                <div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
                                    <div className="glass-card p-6">
                                        {/* Year badge */}
                                        <div
                                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                                            style={{ backgroundColor: exp.color + '15', color: exp.color }}
                                        >
                                            <Briefcase size={12} />
                                            {exp.year}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {exp.title}
                                        </h3>
                                        {exp.company && (
                                            <p className="text-sm text-white/40 mb-4">{exp.company}</p>
                                        )}

                                        <ul className="space-y-2 mb-4">
                                            {exp.tasks.map((task, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 rounded-md bg-white/5 text-xs text-white/50 border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                                        style={{
                                            backgroundColor: exp.color + '10',
                                            borderColor: exp.color + '50',
                                            color: exp.color,
                                        }}
                                    >
                                        <Icon size={16} />
                                    </div>
                                </div>

                                {/* Empty spacer on opposite side */}
                                <div className="hidden md:block w-[calc(50%-40px)]" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
