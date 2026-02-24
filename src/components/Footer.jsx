import { motion } from 'framer-motion'
import { Mail, MapPin, Globe, Heart } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const languagePcts = [100, 70, 50]

export default function Footer() {
    const { t } = useLanguage()
    return (
        <footer id="contact" className="relative pt-24 pb-8 px-6">
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
                        {t.footer.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-6"
                    >
                        <h3 className="text-lg font-semibold text-white mb-6">{t.footer.coordonnees}</h3>
                        <div className="space-y-4">
                            <a
                                href="mailto:incetoli0@gmail.com"
                                className="flex items-center gap-3 text-white/60 hover:text-neon transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center text-neon group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/30">{t.footer.email}</p>
                                    <p className="text-sm">incetoli0@gmail.com</p>
                                </div>
                            </a>
                            <div className="flex items-center gap-3 text-white/60">
                                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center text-neon">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/30">{t.footer.ville}</p>
                                    <p className="text-sm">Bagnolet</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="glass-card p-6"
                    >
                        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <Globe size={18} className="text-neon" />
                            {t.footer.langues}
                        </h3>
                        <div className="space-y-5">
                            {t.footer.langueItems.map((lang, i) => (
                                <div key={lang.name}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-white/70">{lang.name}</span>
                                        <span className="text-xs text-white/40">{lang.level}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${languagePcts[i]}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            className="h-full bg-gradient-to-r from-neon to-blue-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-white/5 pt-8 text-center"
                >
                    <p className="text-sm text-white/30 flex items-center justify-center gap-1">
                        {t.footer.createdBy} <Heart size={14} className="text-neon inline-block" /> {t.footer.by} Toli INCE — {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
