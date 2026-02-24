import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
    Network, Server, Monitor, Code,
    Wifi, Shield, Terminal, Database,
    Activity, BarChart3, Eye, Bug,
    FileCode, Hash, Braces, Cpu
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const skillCategories = [
    {
        icon: Network,
        color: '#00d4ff',
        skills: [
            { name: 'TCP/IP', icon: Wifi },
            { name: 'VLAN', icon: Network },
            { name: 'VPN Wireguard', icon: Shield },
            { name: 'OPNsense', icon: Server },
        ],
    },
    {
        icon: Server,
        color: '#8b5cf6',
        skills: [
            { name: 'Linux', icon: Terminal },
            { name: 'Cisco IOS', icon: Cpu },
            { name: 'Windows', icon: Monitor },
            { name: 'Omada', icon: Wifi },
        ],
    },
    {
        icon: Activity,
        color: '#22c55e',
        skills: [
            { name: 'ELK', icon: BarChart3 },
            { name: 'Grafana', icon: Activity },
            { name: 'Nagios', icon: Eye },
            { name: 'Thruk/Naemon', icon: Bug },
        ],
    },
    {
        icon: Code,
        color: '#f59e0b',
        skills: [
            { name: 'Python', icon: FileCode },
            { name: 'PHP', icon: Hash },
            { name: 'Bash', icon: Terminal },
            { name: 'SQL', icon: Database },
            { name: 'C', icon: Braces },
        ],
    },
]

function TiltCard({ children, index }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 })
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 })

    function handleMouse(e) {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
    }

    function handleLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="glass-card p-6 cursor-default"
        >
            {children}
        </motion.div>
    )
}

export default function Skills() {
    const { t } = useLanguage()
    return (
        <section id="skills" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {t.skills.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((cat, i) => {
                        const Icon = cat.icon
                        const catTitle = t.skills.categories[i]?.title || ''
                        return (
                            <TiltCard key={i} index={i}>
                                <div className="flex items-center gap-3 mb-5">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: cat.color + '15', color: cat.color }}
                                    >
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {catTitle}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => {
                                        const SkillIcon = skill.icon
                                        return (
                                            <span
                                                key={skill.name}
                                                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-white/70 hover:text-white hover:border-white/15 transition-all duration-200"
                                            >
                                                <SkillIcon size={14} className="opacity-50" />
                                                {skill.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </TiltCard>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
