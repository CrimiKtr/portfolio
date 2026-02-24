import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const formationsMeta = [
    {
        school: 'ECE Paris',
        icon: GraduationCap,
        color: '#00d4ff',
    },
    {
        school: 'UPEC',
        icon: BookOpen,
        color: '#8b5cf6',
    },
]

export default function Formation() {
    const { t } = useLanguage()
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
                        {t.formation.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.formation.items.map((f, i) => {
                        const meta = formationsMeta[i]
                        const Icon = meta.icon
                        return (
                            <motion.div
                                key={i}
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
                                        style={{ backgroundColor: meta.color + '15', color: meta.color }}
                                    >
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <span
                                            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1"
                                            style={{ backgroundColor: meta.color + '20', color: meta.color }}
                                        >
                                            {f.status}
                                        </span>
                                        <h3 className="text-lg font-bold text-white leading-tight">
                                            {f.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-neon/80 font-medium mb-2">{meta.school}</p>
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
