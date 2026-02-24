import { motion } from 'framer-motion'
import { Shield, Gamepad2, Target, Wrench, CheckCircle, Swords, Trophy, Layers } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const projectsMeta = [
    {
        icon: Shield,
        color: '#ef4444',
        gradient: 'from-red-500/10 to-orange-500/10',
        borderGlow: 'hover:shadow-red-500/10',
        tags: ['OPNsense', 'Nmap', 'Wireshark', 'IDS', 'DMZ', 'VPN', 'Firewall'],
    },
    {
        icon: Gamepad2,
        color: '#22c55e',
        gradient: 'from-green-500/10 to-emerald-500/10',
        borderGlow: 'hover:shadow-green-500/10',
        tags: ['C', 'Console', 'Algorithme', 'Match-3', 'Gestion fichiers'],
    },
]

function ProjectCard({ project, meta, index, t }) {
    const Icon = meta.icon
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`glass-card overflow-hidden group ${meta.borderGlow}`}
        >
            {/* Top gradient band */}
            <div className={`h-1 w-full bg-gradient-to-r ${meta.gradient}`} style={{ background: `linear-gradient(to right, ${meta.color}40, ${meta.color}10)` }} />

            <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: meta.color + '15', color: meta.color }}
                    >
                        <Icon size={24} />
                    </div>
                    <div>
                        <span
                            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1.5"
                            style={{ backgroundColor: meta.color + '20', color: meta.color }}
                        >
                            {project.subtitle}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {project.title}
                        </h3>
                    </div>
                </div>

                {/* Context */}
                <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                        <Target size={14} style={{ color: meta.color }} />
                        <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{t.projects.contextLabel}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{project.context}</p>
                </div>

                {/* Two columns: Tasks & Results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Tasks */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Wrench size={14} style={{ color: meta.color }} />
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{t.projects.tasksLabel}</span>
                        </div>
                        <ul className="space-y-2">
                            {project.tasks.map((task, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: meta.color }} />
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Results */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <CheckCircle size={14} style={{ color: meta.color }} />
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{t.projects.resultsLabel}</span>
                        </div>
                        <ul className="space-y-2">
                            {project.results.map((result, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/20" />
                                    {result}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {meta.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-white/50 border border-white/5 hover:border-white/15 hover:text-white/70 transition-all duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const { t } = useLanguage()
    return (
        <section id="projects" className="relative py-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {t.projects.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Project cards */}
                <div className="space-y-8">
                    {t.projects.items.map((project, i) => (
                        <ProjectCard key={i} project={project} meta={projectsMeta[i]} index={i} t={t} />
                    ))}
                </div>
            </div>
        </section>
    )
}
