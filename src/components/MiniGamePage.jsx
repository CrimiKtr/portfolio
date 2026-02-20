import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import MetroGame from './MetroGame'
import ClickEffect from './ClickEffect'

export default function MiniGamePage() {
    return (
        <div className="relative min-h-screen bg-dark overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 bg-deep-space pointer-events-none z-0" />
            <div className="orb w-[600px] h-[600px] bg-neon top-[-200px] left-[-200px]" />
            <div className="orb w-[400px] h-[400px] bg-blue-600 bottom-[20%] right-[-100px]" />
            <div className="orb w-[300px] h-[300px] bg-purple-600 top-[60%] left-[10%]" />

            {/* Click particle effect */}
            <ClickEffect />

            {/* Content */}
            <div className="relative z-10">
                {/* Mini header with back button */}
                <motion.header
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-black/20"
                >
                    <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-white/60 hover:text-neon transition-colors duration-300 group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                            <span className="text-sm font-medium">Retour au portfolio</span>
                        </Link>
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

                <div className="pt-20">
                    <MetroGame />
                </div>
            </div>
        </div>
    )
}
