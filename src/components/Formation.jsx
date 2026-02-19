import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'

const formations = [
    {
        title: "Diplôme d'Ingénieur",
        school: 'ECE Paris',
        status: 'En cours',
        icon: GraduationCap,
        color: '#00d4ff',
        description: 'Formation d\'ingénieur généraliste avec spécialisation en réseaux et cybersécurité.',
    },
    {
        title: 'BUT Réseaux et Télécommunications',
        school: 'UPEC',
        status: 'Diplômé',
        icon: BookOpen,
        color: '#8b5cf6',
        description: 'Parcours Cybersécurité — Formation technique approfondie en réseaux, télécommunications et sécurité informatique.',
    },
]

export default function Formation() {
    return (
        <section id="formation" className="relative py-24 px-6">
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
                        Formation
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formations.map((f, i) => {
                        const Icon = f.icon
                        return (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="glass-card p-6 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: f.color + '15', color: f.color }}
                                    >
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <span
                                            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1"
                                            style={{ backgroundColor: f.color + '20', color: f.color }}
                                        >
                                            {f.status}
                                        </span>
                                        <h3 className="text-lg font-bold text-white leading-tight">
                                            {f.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-neon/80 font-medium mb-2">{f.school}</p>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {f.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
