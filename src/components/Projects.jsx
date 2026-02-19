import { motion } from 'framer-motion'
import { Shield, Gamepad2, Target, Wrench, CheckCircle, Swords, Trophy, Layers } from 'lucide-react'

const projects = [
    {
        title: 'Déploiement d\'une Plateforme Réseau Sécurisée',
        subtitle: 'Projet Cyber — OPNsense',
        icon: Shield,
        color: '#ef4444',
        gradient: 'from-red-500/10 to-orange-500/10',
        borderGlow: 'hover:shadow-red-500/10',
        context:
            'Concevoir un réseau segmenté, isoler les services critiques dans une DMZ, et tester sa résistance avec des outils d\'audit et d\'analyse de flux réseau.',
        tasks: [
            'Déploiement et configuration d\'un pare-feu OPNsense',
            'Règles de filtrage personnalisées entre LAN, DMZ et WAN',
            'Tests de sécurité avec Nmap et Wireshark',
            'Activation de l\'IDS pour la détection d\'intrusion en temps réel',
        ],
        results: [
            'Réseau segmenté, filtré et prêt pour la production',
            'Bonnes pratiques cybersécurité appliquées (filtrage, DMZ, supervision)',
            'Expérience terrain réutilisable en entreprise',
            'VPN fonctionnel déployé',
        ],
        tags: ['OPNsense', 'Nmap', 'Wireshark', 'IDS', 'DMZ', 'VPN', 'Firewall'],
    },
    {
        title: 'Plantamitz 2025',
        subtitle: 'Jeu console inspiré de FarmHeroes',
        icon: Gamepad2,
        color: '#22c55e',
        gradient: 'from-green-500/10 to-emerald-500/10',
        borderGlow: 'hover:shadow-green-500/10',
        context:
            'Jeu de type match-3 en mode console : aligner des items sur un plateau 25×45 pour remplir des contrats dans un temps et un nombre de coups limités.',
        tasks: [
            'Plateau de jeu 25×45 avec items colorés (S, F, P, O, M)',
            'Système de gravité et remplissage aléatoire après suppression',
            'Déplacement au clavier (ZQSD / flèches) avec curseur et sélection',
            'Initialisation sans combinaison possible existante',
        ],
        results: [
            'Groupes de 4 : 4 pts bonus',
            'Groupes de 6 : suppression de tous les items identiques',
            'Forme en H : 2 × X points',
            'Forme rectangle : 2 × (L × l) points',
            'Système de 5 vies + sauvegarde progression',
        ],
        tags: ['C', 'Console', 'Algorithme', 'Match-3', 'Gestion fichiers'],
    },
]

function ProjectCard({ project, index }) {
    const Icon = project.icon
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`glass-card overflow-hidden group ${project.borderGlow}`}
        >
            {/* Top gradient band */}
            <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} style={{ background: `linear-gradient(to right, ${project.color}40, ${project.color}10)` }} />

            <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: project.color + '15', color: project.color }}
                    >
                        <Icon size={24} />
                    </div>
                    <div>
                        <span
                            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1.5"
                            style={{ backgroundColor: project.color + '20', color: project.color }}
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
                        <Target size={14} style={{ color: project.color }} />
                        <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Contexte</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{project.context}</p>
                </div>

                {/* Two columns: Tasks & Results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Tasks */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Wrench size={14} style={{ color: project.color }} />
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Réalisations</span>
                        </div>
                        <ul className="space-y-2">
                            {project.tasks.map((task, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Results */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <CheckCircle size={14} style={{ color: project.color }} />
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Résultats</span>
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
                    {project.tags.map((tag) => (
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
                        Projets
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Project cards */}
                <div className="space-y-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
