import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Code, FolderKanban, Briefcase, GraduationCap, Mail, FileText, MonitorCog, Gamepad2, Globe, Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../i18n/ThemeContext'

const navLinksDef = [
    { key: 'profil', href: '#hero', icon: User },
    { key: 'competences', href: '#skills', icon: Code },
    { key: 'projets', href: '#projects', icon: FolderKanban },
    { key: 'experiences', href: '#experience', icon: Briefcase },
    { key: 'formation', href: '#formation', icon: GraduationCap },
    { key: 'ecosysteme', href: '/ecosystem', icon: MonitorCog, isRoute: true },
    { key: 'miniJeu', href: '/mini-jeu', icon: Gamepad2, isRoute: true },
    { key: 'contact', href: '#contact', icon: Mail },
]

const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
]

export default function Header() {
    const { lang, setLang, t } = useLanguage()
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [langOpen, setLangOpen] = useState(false)
    const langRef = useRef(null)

    // Close language dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

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
                    className="text-2xl font-bold tracking-tight"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-white">Toli </span>
                    <span className="bg-gradient-to-r from-neon to-blue-400 bg-clip-text text-transparent">INCE</span>
                </motion.a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinksDef.map((link) => {
                        const Icon = link.icon
                        const label = t.nav[link.key]
                        const linkClass = "text-white/60 hover:text-neon transition-colors duration-300 relative flex items-center justify-center p-2"
                        const inner = (
                            <>
                                <Icon size={20} strokeWidth={1.8} />
                                {/* Tooltip */}
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-dark/90 border border-glass-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm">
                                    {label}
                                </span>
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-neon group-hover:w-full transition-all duration-300" />
                            </>
                        )
                        return (
                            <li key={link.href} className="relative group">
                                {link.isRoute ? (
                                    <Link to={link.href} className={linkClass} aria-label={label}>
                                        {inner}
                                    </Link>
                                ) : (
                                    <a href={link.href} className={linkClass} aria-label={label}>
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

                    {/* Language switcher */}
                    <li className="relative" ref={langRef}>
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="text-white/60 hover:text-neon transition-colors duration-300 flex items-center gap-1.5 p-2"
                            aria-label="Langue"
                        >
                            <Globe size={20} strokeWidth={1.8} />
                            <span className="text-sm font-medium uppercase">{lang}</span>
                            <motion.span
                                animate={{ rotate: langOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-xs"
                            >
                                ▼
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 top-full mt-2 bg-dark/95 backdrop-blur-xl border border-glass-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden min-w-[160px]"
                                >
                                    {languages.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                setLang(l.code)
                                                setLangOpen(false)
                                            }}
                                            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors duration-200 ${lang === l.code
                                                ? 'text-neon bg-neon/10'
                                                : 'text-white/70 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="text-lg">{l.flag}</span>
                                            <span className="text-sm font-medium">{l.label}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>

                    {/* Theme toggle */}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="text-white/60 hover:text-neon transition-colors duration-300 p-2 relative"
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? <Sun size={20} strokeWidth={1.8} /> : <Moon size={20} strokeWidth={1.8} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
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
                            {navLinksDef.map((link) => {
                                const Icon = link.icon
                                const label = t.nav[link.key]
                                const linkClass = "flex items-center gap-3 text-lg text-white/70 hover:text-neon transition-colors duration-300"
                                return (
                                    <li key={link.href}>
                                        {link.isRoute ? (
                                            <Link to={link.href} onClick={() => setMobileOpen(false)} className={linkClass}>
                                                <Icon size={20} strokeWidth={1.8} />
                                                {label}
                                            </Link>
                                        ) : (
                                            <a href={link.href} onClick={() => setMobileOpen(false)} className={linkClass}>
                                                <Icon size={20} strokeWidth={1.8} />
                                                {label}
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
                            {/* Language switcher mobile */}
                            <li className="pt-4 border-t border-glass-border mt-2">
                                <div className="flex items-center gap-4 justify-center">
                                    {languages.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                setLang(l.code)
                                                setMobileOpen(false)
                                            }}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${lang === l.code
                                                ? 'text-neon bg-neon/10 border border-neon/30'
                                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="text-lg">{l.flag}</span>
                                            <span className="text-sm font-medium uppercase">{l.code}</span>
                                        </button>
                                    ))}
                                </div>
                            </li>
                            {/* Theme toggle mobile */}
                            <li>
                                <button
                                    onClick={() => {
                                        toggleTheme()
                                        setMobileOpen(false)
                                    }}
                                    className="flex items-center gap-3 text-lg text-white/70 hover:text-neon transition-colors duration-300"
                                >
                                    {theme === 'dark' ? <Sun size={20} strokeWidth={1.8} /> : <Moon size={20} strokeWidth={1.8} />}
                                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
