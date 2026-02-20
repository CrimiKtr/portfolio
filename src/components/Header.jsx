import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Code, FolderKanban, Briefcase, GraduationCap, Mail, FileText, MonitorCog, Gamepad2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
    { label: 'Profil', href: '#hero', icon: User },
    { label: 'Compétences', href: '#skills', icon: Code },
    { label: 'Projets', href: '#projects', icon: FolderKanban },
    { label: 'Expériences', href: '#experience', icon: Briefcase },
    { label: 'Formation', href: '#formation', icon: GraduationCap },
    { label: 'Écosystème', href: '/ecosystem', icon: MonitorCog, isRoute: true },
    { label: 'Mini-Jeu', href: '/mini-jeu', icon: Gamepad2, isRoute: true },
    { label: 'Contact', href: '#contact', icon: Mail },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-dark/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.a
                    href="#hero"
                    className="text-xl font-bold tracking-tight"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-white">toli</span>
                    <span className="text-neon">.dev</span>
                </motion.a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => {
                        const Icon = link.icon
                        const linkClass = "text-white/60 hover:text-neon transition-colors duration-300 relative flex items-center justify-center p-2"
                        const inner = (
                            <>
                                <Icon size={20} strokeWidth={1.8} />
                                {/* Tooltip */}
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-dark/90 border border-glass-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm">
                                    {link.label}
                                </span>
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-neon group-hover:w-full transition-all duration-300" />
                            </>
                        )
                        return (
                            <li key={link.href} className="relative group">
                                {link.isRoute ? (
                                    <Link to={link.href} className={linkClass} aria-label={link.label}>
                                        {inner}
                                    </Link>
                                ) : (
                                    <a href={link.href} className={linkClass} aria-label={link.label}>
                                        {inner}
                                    </a>
                                )}
                            </li>
                        )
                    })}
                    {/* CV link */}
                    <li className="relative group">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-neon transition-colors duration-300 relative flex items-center justify-center p-2"
                            aria-label="CV"
                        >
                            <FileText size={20} strokeWidth={1.8} />
                            {/* Tooltip */}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-dark/90 border border-glass-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm">
                                CV
                            </span>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-neon group-hover:w-full transition-all duration-300" />
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white/60 hover:text-neon transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-glass-border"
                    >
                        <ul className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => {
                                const Icon = link.icon
                                const linkClass = "flex items-center gap-3 text-lg text-white/70 hover:text-neon transition-colors duration-300"
                                return (
                                    <li key={link.href}>
                                        {link.isRoute ? (
                                            <Link to={link.href} onClick={() => setMobileOpen(false)} className={linkClass}>
                                                <Icon size={20} strokeWidth={1.8} />
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a href={link.href} onClick={() => setMobileOpen(false)} className={linkClass}>
                                                <Icon size={20} strokeWidth={1.8} />
                                                {link.label}
                                            </a>
                                        )}
                                    </li>
                                )
                            })}
                            {/* CV link mobile */}
                            <li>
                                <a
                                    href="/cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 text-lg text-white/70 hover:text-neon transition-colors duration-300"
                                >
                                    <FileText size={20} strokeWidth={1.8} />
                                    CV
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
