import { motion } from 'framer-motion'
import { Linkedin, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
    const { t } = useLanguage()
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20"
        >



            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center leading-tight text-white/50"
            >
                {t.hero.title}{' '}
                <span className="bg-gradient-to-r from-neon to-blue-400 bg-clip-text text-transparent font-bold">
                    {t.hero.titleHighlight}
                </span>
            </motion.h1>

            {/* Description "About me" */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 max-w-2xl w-full space-y-5 text-base md:text-lg text-white/60 leading-relaxed"
            >
                <p>{t.hero.p1}</p>
                <p>{t.hero.p2}</p>
                <p>{t.hero.p3}</p>
                <p>{t.hero.p4}</p>
            </motion.div>

            {/* LinkedIn CTA */}
            <motion.a
                href="https://fr.linkedin.com/in/toli-ince-a450a1235"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon/10 to-blue-500/10 border border-neon/30 text-neon font-medium hover:border-neon/60 transition-all duration-300"
            >
                <Linkedin size={20} />
                {t.hero.linkedin}
            </motion.a>

            {/* Scroll indicator */}
            <motion.a
                href="#skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 text-white/20 hover:text-neon transition-colors duration-300"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={28} />
                </motion.div>
            </motion.a>
        </section>
    )
}
