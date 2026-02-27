import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Gamepad2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import MetroGame from './MetroGame'
import ClickEffect from './ClickEffect'

// ── Liste des jeux disponibles ──────────────────────────────────────
// Pour ajouter un jeu : { id, name, description, icon (emoji), component }
const GAMES = [
    {
        id: 'metro',
        name: 'Métro Parisien',
        description: 'Trouve toutes les stations du métro de Paris le plus vite possible !',
        icon: '🚇',
        component: MetroGame,
    },
]

// ── Carte de jeu ────────────────────────────────────────────────────
function GameCard({ game, index, onSelect }) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(game.id)}
            className="glass-card group relative flex flex-col items-center gap-4 p-8 text-center cursor-pointer
                       hover:border-neon/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]
                       transition-all duration-300 w-full max-w-xs"
        >
            {/* Glow circle behind icon */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                            bg-gradient-to-b from-neon/5 to-transparent transition-opacity duration-500" />

            <span className="text-5xl drop-shadow-lg relative z-10">{game.icon}</span>

            <h3 className="text-xl font-bold text-white relative z-10">{game.name}</h3>

            <p className="text-sm text-white/50 leading-relaxed relative z-10">
                {game.description}
            </p>

            <span className="mt-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase
                            bg-neon/10 text-neon border border-neon/20
                            group-hover:bg-neon/20 group-hover:border-neon/40
                            transition-all duration-300 relative z-10">
                Jouer
            </span>
        </motion.button>
    )
}

// ── Page principale ─────────────────────────────────────────────────
export default function MiniGamePage() {
    const [selectedGame, setSelectedGame] = useState(null)

    const ActiveGame = selectedGame
        ? GAMES.find((g) => g.id === selectedGame)?.component
        : null

    return (
        <div className="relative min-h-screen bg-dark overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 bg-deep-space pointer-events-none z-0" />
            <div className="orb w-[600px] h-[600px] bg-neon top-[-200px] left-[-200px]" />
            <div className="orb w-[400px] h-[400px] bg-blue-600 bottom-[20%] right-[-100px]" />
            <div className="orb w-[300px] h-[300px] bg-purple-600 top-[60%] left-[10%]" />

            <ClickEffect />

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <motion.header
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-black/20"
                >
                    <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        {selectedGame ? (
                            <button
                                onClick={() => setSelectedGame(null)}
                                className="flex items-center gap-2 text-white/60 hover:text-neon transition-colors duration-300 group"
                            >
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                                <span className="text-sm font-medium">Retour aux jeux</span>
                            </button>
                        ) : (
                            <Link
                                to="/"
                                className="flex items-center gap-2 text-white/60 hover:text-neon transition-colors duration-300 group"
                            >
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                                <span className="text-sm font-medium">Retour au portfolio</span>
                            </Link>
                        )}

                        <motion.a
                            href="/"
                            className="text-xl font-bold tracking-tight"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-white">toli</span>
                            <span className="text-neon">.dev</span>
                        </motion.a>
                    </nav>
                </motion.header>

                {/* Body */}
                <div className="pt-20">
                    <AnimatePresence mode="wait">
                        {ActiveGame ? (
                            <motion.div
                                key="game"
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ActiveGame />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="hub"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center px-6 py-16"
                            >
                                {/* Title */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-center mb-12"
                                >
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <Gamepad2 size={32} className="text-neon" />
                                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                                            Mini-<span className="text-neon">Jeux</span>
                                        </h1>
                                    </div>
                                    <p className="text-white/50 text-lg max-w-md mx-auto">
                                        Choisis un jeu et amuse-toi !
                                    </p>
                                </motion.div>

                                {/* Game grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-4xl">
                                    {GAMES.map((game, i) => (
                                        <GameCard
                                            key={game.id}
                                            game={game}
                                            index={i}
                                            onSelect={setSelectedGame}
                                        />
                                    ))}
                                </div>

                                {/* Teaser */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="mt-16 text-white/30 text-sm italic"
                                >
                                    D'autres jeux arrivent bientôt… 👀
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
