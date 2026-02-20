import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ClickEffect() {
    const [particles, setParticles] = useState([])

    const handleClick = useCallback((e) => {
        const id = Date.now()
        const x = e.clientX
        const y = e.clientY

        // Generate 8-12 particles per click
        const count = 8 + Math.floor(Math.random() * 5)
        const newParticles = Array.from({ length: count }, (_, i) => ({
            id: `${id}-${i}`,
            x,
            y,
            angle: (360 / count) * i + (Math.random() * 30 - 15),
            distance: 30 + Math.random() * 50,
            size: 3 + Math.random() * 4,
            color: ['#00d4ff', '#00d4ff', '#7dd3fc', '#38bdf8', '#818cf8', '#c084fc'][Math.floor(Math.random() * 6)],
            duration: 0.4 + Math.random() * 0.3,
        }))

        setParticles((prev) => [...prev, ...newParticles])

        // Clean up after animation
        setTimeout(() => {
            setParticles((prev) => prev.filter((p) => !p.id.startsWith(String(id))))
        }, 1000)
    }, [])

    useEffect(() => {
        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    }, [handleClick])

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            <AnimatePresence>
                {particles.map((p) => {
                    const rad = (p.angle * Math.PI) / 180
                    const dx = Math.cos(rad) * p.distance
                    const dy = Math.sin(rad) * p.distance

                    return (
                        <motion.div
                            key={p.id}
                            initial={{
                                x: p.x,
                                y: p.y,
                                scale: 1,
                                opacity: 1,
                            }}
                            animate={{
                                x: p.x + dx,
                                y: p.y + dy,
                                scale: 0,
                                opacity: 0,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: p.duration,
                                ease: 'easeOut',
                            }}
                            style={{
                                position: 'absolute',
                                width: p.size,
                                height: p.size,
                                borderRadius: '50%',
                                backgroundColor: p.color,
                                boxShadow: `0 0 6px ${p.color}, 0 0 12px ${p.color}50`,
                                top: 0,
                                left: 0,
                            }}
                        />
                    )
                })}
            </AnimatePresence>
        </div>
    )
}
