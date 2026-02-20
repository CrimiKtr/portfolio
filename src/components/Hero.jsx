import { motion } from 'framer-motion'
import { Linkedin, ChevronDown } from 'lucide-react'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20"
        >
            {/* Profile picture */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative mb-8"
            >
                <div className="w-40 h-40 rounded-full neon-border overflow-hidden border-2 border-neon/50 relative">
                    <div className="w-full h-full bg-gradient-to-br from-neon/20 to-blue-900/30 flex items-center justify-center">
                        <span className="text-5xl font-bold text-neon/80">TI</span>
                    </div>
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full border border-neon/20 scale-125 animate-ping opacity-20" />
            </motion.div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight"
            >
                <span className="text-white">Toli </span>
                <span className="bg-gradient-to-r from-neon to-blue-400 bg-clip-text text-transparent">
                    INCE
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-3 text-lg md:text-xl text-white/50 font-light text-center"
            >
                Étudiant Ingénieur ECE Paris
            </motion.p>

            {/* Description "About me" */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 max-w-2xl w-full space-y-5 text-base md:text-lg text-white/60 leading-relaxed"
            >
                <p>
                    Salut, moi c'est <span className="text-neon font-semibold">Toli Ince</span>, actuellement en{' '}
                    <span className="text-white font-semibold">1ère année du cycle ingénieur</span> à l'{' '}
                    <span className="text-white font-semibold">ECE Paris</span>.
                </p>

                <p>
                    Ce qui me motive au quotidien, c'est la{' '}
                    <span className="text-white font-semibold">cybersécurité</span> et l'
                    <span className="text-white font-semibold">administration réseau</span>. J'aime comprendre
                    comment fonctionnent les systèmes pour mieux les protéger et les renforcer.
                </p>

                <p>
                    Je me dirige vers une spécialisation en{' '}
                    <span className="text-white font-semibold">Réseaux & Cybersécurité</span>. J'ai pour ambition
                    de développer mon expertise en{' '}
                    <span className="text-white font-semibold">sécurité</span> et en{' '}
                    <span className="text-white font-semibold">architecture réseau</span>, afin de bâtir des
                    infrastructures solides et fiables.
                </p>

                <p>
                    En dehors des cours et des projets, je suis un grand fan d'
                    <span className="text-white font-semibold">🏎️ automobile</span>, de{' '}
                    <span className="text-white font-semibold">🎬 cinéma</span> et d'
                    <span className="text-white font-semibold">🎮 esport</span>.
                </p>
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
                Voir mon LinkedIn
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
