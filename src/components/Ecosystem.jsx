import { motion } from 'framer-motion'
import { Monitor, Laptop, Keyboard, Mouse, Mic, Headphones, MonitorPlay, Cpu, CircuitBoard, MemoryStick, Fan, Zap } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
}

const machines = [
    {
        icon: Monitor,
        title: 'Station Fixe',
        subtitle: 'PC Custom Build',
        specs: [
            { label: 'CPU', value: 'Intel Core i5-12400F (2.5 GHz)' },
            { label: 'GPU', value: 'Gigabyte GeForce RTX 3060 GAMING OC 12 Go' },
            { label: 'Carte mère', value: 'ASRock B660 PRO RS DDR4' },
            { label: 'RAM', value: 'Kingston Fury Beast RGB 16 Go (2x8) 3200 MHz' },
            { label: 'Refroidissement', value: 'MSI MAG CORELIQUID 240R V2' },
            { label: 'Alimentation', value: 'Cooler Master MWE 650 Bronze 650W' },
            { label: 'OS', value: 'Windows 10' },
        ],
        usage: 'Gaming, projets lourds et environnements virtualisés.',
    },
    {
        icon: Laptop,
        title: 'PC Portable',
        subtitle: 'ACER Aspire A715-76G',
        specs: [
            { label: 'CPU', value: 'Intel Core i5-12450H Octa-core (8 cœurs) 3,30 GHz' },
            { label: 'GPU', value: 'NVIDIA GeForce RTX 3050 4 Go' },
            { label: 'RAM', value: '16 Go DDR4 SDRAM' },
            { label: 'Stockage', value: '512 Go SSD' },
            { label: 'Écran', value: '15,6" Full HD (1920×1080) IPS 144 Hz' },
            { label: 'OS', value: 'Windows 11 Home' },
        ],
        usage: 'Cours, travail quotidien et déplacements.',
    },
]

const peripherals = [
    {
        icon: Keyboard,
        category: 'Clavier',
        name: 'Razer Blackwidow V3 Pro',
        desc: 'Mécanique sans fil, switches Green pour un retour tactile précis.',
    },
    {
        icon: Mouse,
        category: 'Souris',
        name: 'Razer Viper V3 Pro',
        desc: 'Ultra-légère et sans fil, idéale pour le gaming compétitif.',
    },
    {
        icon: Mic,
        category: 'Micro',
        name: 'Bird UM1',
        desc: 'Micro USB condensateur pour les communications et enregistrements.',
    },
    {
        icon: Headphones,
        category: 'Casque',
        name: 'Apple AirPods Pro',
        desc: 'Réduction de bruit active, parfait pour se concentrer en mobilité.',
    },
]

const displays = [
    {
        icon: MonitorPlay,
        label: 'Écran principal',
        name: '27" QHD 165Hz',
        desc: 'Résolution nette et fluidité maximale pour le gaming et le multitâche.',
    },
    {
        icon: Monitor,
        label: 'Écran secondaire',
        name: '27" HD 60Hz',
        desc: 'Écran d\'appoint pour la documentation, Discord ou le monitoring.',
    },
]

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                        Écosystème
                    </h2>
                    <div className="mt-3 w-16 h-1 bg-gradient-to-r from-neon to-blue-500 mx-auto rounded-full" />
                    <p className="mt-6 text-white/40 max-w-2xl mx-auto text-lg">
                        Mon setup est divisé entre une station fixe dédiée aux projets exigeants et un portable pour le quotidien.
                    </p>
                </motion.div>

                {/* Workstations */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {machines.map((machine, idx) => {
                        const Icon = machine.icon
                        return (
                            <motion.div
                                key={machine.title}
                                custom={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="glass-card p-8"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                                        <Icon size={20} className="text-neon" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{machine.title}</h3>
                                        <p className="text-white/40 text-sm">{machine.subtitle}</p>
                                    </div>
                                </div>

                                {machine.specs.length > 0 && (
                                    <ul className="space-y-2.5 mb-5">
                                        {machine.specs.map((spec) => (
                                            <li key={spec.label} className="flex items-start gap-2 text-sm">
                                                <span className="text-neon/60 mt-0.5">→</span>
                                                <span>
                                                    <span className="text-white/70 font-medium">{spec.label} :</span>{' '}
                                                    <span className="text-white/45">{spec.value}</span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="pt-4 border-t border-glass-border">
                                    <p className="text-sm text-white/40">
                                        <span className="text-neon/70 font-medium">Usage :</span>{' '}
                                        {machine.usage}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Displays */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-bold text-white mb-2">Affichage</h3>
                    <p className="text-white/40 mb-8">
                        Un setup dual-screen pour maximiser la productivité.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displays.map((display, idx) => {
                            const Icon = display.icon
                            return (
                                <motion.div
                                    key={display.label}
                                    custom={idx}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="glass-card p-6 flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center shrink-0">
                                        <Icon size={20} className="text-neon" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{display.label}</p>
                                        <p className="text-white font-semibold">{display.name}</p>
                                        <p className="text-white/40 text-sm mt-1">{display.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Peripherals */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-2">Périphériques</h3>
                    <p className="text-white/40 mb-8">
                        Les outils sur lesquels je compte pour garder un workflow fluide et confortable.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {peripherals.map((peri, idx) => {
                            const Icon = peri.icon
                            return (
                                <motion.div
                                    key={peri.name}
                                    custom={idx}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-5 rounded-xl border border-glass-border hover:border-neon/30 bg-glass hover:bg-glass-hover transition-all duration-300"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <Icon size={18} className="text-neon" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neon/60 uppercase tracking-wider mb-0.5">{peri.category}</p>
                                        <p className="text-white font-semibold">{peri.name}</p>
                                        <p className="text-white/40 text-sm mt-1">{peri.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
