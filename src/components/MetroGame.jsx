import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, RotateCcw, Flag, Trophy, Timer, MapPin } from 'lucide-react'
import { metroLines, uniqueStations, stationSearchMap, normalizeText, totalStationCount, lineRoutes, getLineCoords } from '../data/metroData'

// Line IDs for rendering (includes branches)
const renderLineIds = ['1', '2', '3', '3b', '4', '5', '6', '7', '7v', '7b', '8', '9', '10', '11', '12', '13a', '13b', '13', '14'];

// Map branch line IDs to their parent line color
function getLineColor(lineId) {
    if (lineId === '7v') return metroLines['7'].color;
    if (lineId === '13a' || lineId === '13b') return metroLines['13'].color;
    return metroLines[lineId]?.color || '#888';
}

export default function MetroGame() {
    const [found, setFound] = useState(new Set())
    const [input, setInput] = useState('')
    const [lastFound, setLastFound] = useState(null)
    const [showAll, setShowAll] = useState(false)
    const [timer, setTimer] = useState(0)
    const [running, setRunning] = useState(false)
    const [gameWon, setGameWon] = useState(false)
    const [shake, setShake] = useState(false)
    const [flashStation, setFlashStation] = useState(null)
    const inputRef = useRef(null)
    const timerRef = useRef(null)
    const svgRef = useRef(null)

    const [viewBox, setViewBox] = useState({ x: 50, y: 50, w: 950, h: 680 })
    const [isPanning, setIsPanning] = useState(false)
    const [panStart, setPanStart] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (running && !gameWon) {
            timerRef.current = setInterval(() => setTimer(t => t + 1), 1000)
        }
        return () => clearInterval(timerRef.current)
    }, [running, gameWon])

    const formatTime = (s) => {
        const m = Math.floor(s / 60)
        const sec = s % 60
        return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        if (!running) setRunning(true)
        const normalized = normalizeText(input)
        if (!normalized) return
        const station = stationSearchMap.get(normalized)
        if (station && !found.has(station.name)) {
            const newFound = new Set(found)
            newFound.add(station.name)
            setFound(newFound)
            setLastFound(station.name)
            setFlashStation(station.name)
            setTimeout(() => setFlashStation(null), 1500)
            setInput('')
            if (newFound.size === totalStationCount) {
                setGameWon(true)
                clearInterval(timerRef.current)
            }
        } else {
            setShake(true)
            setTimeout(() => setShake(false), 500)
        }
    }, [input, found, running])

    const handleGiveUp = () => { setShowAll(true); setRunning(false); clearInterval(timerRef.current) }
    const handleReset = () => {
        setFound(new Set()); setInput(''); setLastFound(null); setShowAll(false)
        setTimer(0); setRunning(false); setGameWon(false); setFlashStation(null)
        setViewBox({ x: 50, y: 50, w: 950, h: 680 }); clearInterval(timerRef.current)
    }

    const handleWheel = useCallback((e) => {
        e.preventDefault()
        const svg = svgRef.current; if (!svg) return
        const rect = svg.getBoundingClientRect()
        const mouseX = ((e.clientX - rect.left) / rect.width) * viewBox.w + viewBox.x
        const mouseY = ((e.clientY - rect.top) / rect.height) * viewBox.h + viewBox.y
        const factor = e.deltaY > 0 ? 1.1 : 0.9
        const newW = Math.min(1200, Math.max(200, viewBox.w * factor))
        const newH = Math.min(900, Math.max(150, viewBox.h * factor))
        setViewBox({ x: mouseX - (mouseX - viewBox.x) * (newW / viewBox.w), y: mouseY - (mouseY - viewBox.y) * (newH / viewBox.h), w: newW, h: newH })
    }, [viewBox])

    const handleMouseDown = (e) => { if (e.button !== 0) return; setIsPanning(true); setPanStart({ x: e.clientX, y: e.clientY }) }
    const handleMouseMove = useCallback((e) => {
        if (!isPanning) return; const svg = svgRef.current; if (!svg) return
        const rect = svg.getBoundingClientRect()
        const dx = ((e.clientX - panStart.x) / rect.width) * viewBox.w
        const dy = ((e.clientY - panStart.y) / rect.height) * viewBox.h
        setViewBox(vb => ({ ...vb, x: vb.x - dx, y: vb.y - dy }))
        setPanStart({ x: e.clientX, y: e.clientY })
    }, [isPanning, panStart, viewBox])
    const handleMouseUp = () => setIsPanning(false)

    useEffect(() => {
        const svg = svgRef.current; if (!svg) return
        svg.addEventListener('wheel', handleWheel, { passive: false })
        return () => svg.removeEventListener('wheel', handleWheel)
    }, [handleWheel])

    // Pre-compute line coordinate paths
    const lineCoords = useMemo(() => {
        const result = {}
        renderLineIds.forEach(id => { result[id] = getLineCoords(id) })
        return result
    }, [])

    const percentage = Math.round((found.size / totalStationCount) * 100)

    return (
        <div className="relative w-full" style={{ height: 'calc(100vh - 80px)' }}>
            {/* Full-screen SVG Map */}
            <div className="absolute inset-0 overflow-hidden" style={{ cursor: isPanning ? 'grabbing' : 'grab' }}>
                <svg
                    ref={svgRef}
                    viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
                    className="w-full h-full"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <defs>
                        <filter id="stationGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        <filter id="flashGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>

                    {/* Page background - very light */}
                    <rect x="-200" y="-200" width="1400" height="1200" fill="#f7f6f2" />

                    {/* ======= PARIS CITY OUTLINE (Périphérique shape) ======= */}
                    <path
                        d={`M 215,325
                            Q 215,295 222,275
                            Q 235,255 260,245
                            Q 285,237 310,230
                            Q 345,218 380,195
                            Q 395,185 415,185
                            Q 435,185 460,185
                            Q 485,178 510,175
                            Q 535,172 555,178
                            Q 580,178 600,175
                            Q 625,175 650,185
                            Q 680,195 700,215
                            Q 720,230 740,250
                            Q 760,270 775,290
                            Q 790,310 795,335
                            Q 800,360 795,385
                            Q 790,400 780,415
                            Q 770,435 755,455
                            Q 740,470 720,480
                            Q 700,490 680,500
                            Q 650,512 620,530
                            Q 600,540 580,555
                            Q 565,565 545,575
                            Q 525,580 505,580
                            Q 480,580 460,575
                            Q 440,568 420,558
                            Q 400,548 380,540
                            Q 355,530 330,525
                            Q 310,520 290,510
                            Q 265,500 245,480
                            Q 230,465 218,445
                            Q 210,425 208,405
                            Q 205,380 210,355
                            Z`}
                        fill="#eceae4"
                        stroke="#ddd8ce"
                        strokeWidth="1.5"
                    />

                    {/* ======= MAJOR ROADS (white lines inside Paris) ======= */}
                    {/* Champs-Élysées / Grand Axe */}
                    <line x1="215" y1="330" x2="430" y2="360" stroke="#f7f6f2" strokeWidth="2.5" opacity="0.8" />
                    {/* Grands Boulevards (north) */}
                    <path d="M 300,300 Q 400,290 500,300 Q 550,310 600,335" fill="none" stroke="#f7f6f2" strokeWidth="2" opacity="0.7" />
                    {/* Boulevard Saint-Michel / Saint-Germain */}
                    <line x1="505" y1="415" x2="525" y2="575" stroke="#f7f6f2" strokeWidth="2" opacity="0.6" />
                    {/* Avenue de la République */}
                    <line x1="625" y1="330" x2="750" y2="270" stroke="#f7f6f2" strokeWidth="1.8" opacity="0.6" />
                    {/* Rue de Rivoli (E-W) */}
                    <line x1="430" y1="360" x2="650" y2="380" stroke="#f7f6f2" strokeWidth="2" opacity="0.7" />
                    {/* Boulevard Périphérique south */}
                    <path d="M 250,480 Q 350,530 450,570 Q 550,575 650,510" fill="none" stroke="#f7f6f2" strokeWidth="2" opacity="0.5" />
                    {/* Radiating avenues from Étoile */}
                    <line x1="295" y1="330" x2="220" y2="290" stroke="#f7f6f2" strokeWidth="1.5" opacity="0.5" />
                    <line x1="295" y1="330" x2="280" y2="400" stroke="#f7f6f2" strokeWidth="1.5" opacity="0.5" />
                    {/* Boulevard Haussmann */}
                    <path d="M 300,310 Q 370,295 420,290 Q 465,295 500,310" fill="none" stroke="#f7f6f2" strokeWidth="1.8" opacity="0.6" />
                    {/* North-South axis */}
                    <line x1="540" y1="175" x2="530" y2="400" stroke="#f7f6f2" strokeWidth="2" opacity="0.6" />

                    {/* ======= SEINE RIVER (realistic curve through Paris) ======= */}
                    <path
                        d={`M 180,430
                            Q 220,418 265,435
                            Q 310,450 350,430
                            Q 390,408 430,395
                            Q 460,387 490,383
                            Q 520,380 545,388
                            Q 565,395 580,408
                            Q 600,420 625,432
                            Q 655,445 690,448
                            Q 720,447 750,440
                            Q 775,432 800,438`}
                        fill="none" stroke="#bcd0de" strokeWidth="20" strokeLinecap="round" opacity="0.55"
                    />
                    <path
                        d={`M 180,430
                            Q 220,418 265,435
                            Q 310,450 350,430
                            Q 390,408 430,395
                            Q 460,387 490,383
                            Q 520,380 545,388
                            Q 565,395 580,408
                            Q 600,420 625,432
                            Q 655,445 690,448
                            Q 720,447 750,440
                            Q 775,432 800,438`}
                        fill="none" stroke="#c8dae6" strokeWidth="14" strokeLinecap="round" opacity="0.7"
                    />

                    {/* Metro line polylines - using explicit route ordering */}
                    {renderLineIds.map(lineId => {
                        const coords = lineCoords[lineId]
                        if (!coords || coords.length < 2) return null
                        const color = getLineColor(lineId)
                        return (
                            <polyline
                                key={lineId}
                                points={coords.map(c => `${c.x},${c.y}`).join(' ')}
                                fill="none"
                                stroke={color}
                                strokeWidth={2.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity={0.85}
                            />
                        )
                    })}

                    {/* Station dots */}
                    {uniqueStations.map((st) => {
                        const isFound = found.has(st.name)
                        const isRevealed = showAll && !isFound
                        const isFlashing = flashStation === st.name
                        const lineColor = metroLines[st.lines[0]]?.color || '#888'
                        const isCorrespondance = st.lines.length > 1

                        return (
                            <g key={st.name}>
                                {isFlashing && (
                                    <circle cx={st.x} cy={st.y} r="4" fill={lineColor} filter="url(#flashGlow)" opacity="0.8">
                                        <animate attributeName="r" values="4;20;4" dur="1.2s" repeatCount="1" />
                                        <animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="1" />
                                    </circle>
                                )}

                                {isFound && !isFlashing && (
                                    <circle cx={st.x} cy={st.y} r="8" fill={lineColor} opacity="0.12">
                                        <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" />
                                    </circle>
                                )}

                                {/* Correspondance stations: larger white circle with dark border */}
                                {isCorrespondance ? (
                                    <circle
                                        cx={st.x} cy={st.y}
                                        r={isFound ? 4 : isRevealed ? 3.5 : 3}
                                        fill={isFound ? '#ffffff' : isRevealed ? '#ffdddd' : '#ffffff'}
                                        stroke={isFound ? lineColor : isRevealed ? '#cc4444' : '#999'}
                                        strokeWidth={isFound ? 2 : 1.2}
                                        opacity={isFound ? 1 : isRevealed ? 0.8 : 0.6}
                                        filter={isFound ? 'url(#stationGlow)' : undefined}
                                    />
                                ) : (
                                    <circle
                                        cx={st.x} cy={st.y}
                                        r={isFound ? 3.5 : isRevealed ? 3 : 2.5}
                                        fill={isFound ? '#ffffff' : isRevealed ? '#ffdddd' : '#ffffff'}
                                        stroke={isFound ? lineColor : isRevealed ? '#cc4444' : '#bbb'}
                                        strokeWidth={isFound ? 2 : 0.8}
                                        opacity={isFound ? 1 : isRevealed ? 0.7 : 0.45}
                                    />
                                )}

                                {(isFound || isRevealed) && (
                                    <text
                                        x={st.x + 7} y={st.y + 1}
                                        fontSize="4.5" fontWeight={isFound ? '600' : '400'}
                                        fill={isFound ? '#333' : '#cc4444'}
                                        opacity={isFound ? 0.8 : 0.5}
                                        fontFamily="Inter, system-ui, sans-serif"
                                        dominantBaseline="middle"
                                    >
                                        {st.name}
                                    </text>
                                )}
                            </g>
                        )
                    })}
                </svg>
            </div>

            {/* Floating search bar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-md px-4">
                {!gameWon && !showAll ? (
                    <form onSubmit={handleSubmit} className="relative">
                        <motion.div
                            animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}}
                            transition={{ duration: 0.4 }}
                            className="flex items-center bg-white rounded-full shadow-lg shadow-black/10 border border-gray-200/80 overflow-hidden"
                        >
                            <Search size={18} className="ml-4 text-gray-400 shrink-0" />
                            <input
                                ref={inputRef} type="text" value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="Station"
                                className="flex-1 px-3 py-3 bg-transparent text-gray-800 placeholder-gray-400 outline-none text-base"
                                autoFocus autoComplete="off"
                            />
                            <button type="submit" className="px-4 py-3 text-gray-500 hover:text-blue-600 transition-colors" aria-label="Rechercher">
                                <MapPin size={18} />
                            </button>
                        </motion.div>
                    </form>
                ) : (
                    <div className="bg-white rounded-full shadow-lg shadow-black/10 border border-gray-200/80 px-6 py-3 text-center">
                        <span className="text-gray-800 font-semibold">{gameWon ? '🎉 Félicitations !' : 'Partie terminée'}</span>
                    </div>
                )}
            </div>

            {/* Stats panel */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-black/8 border border-gray-200/80 px-4 py-2 flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        <Timer size={14} className="text-gray-400" />
                        <span className="font-mono text-sm font-semibold text-gray-700">{formatTime(timer)}</span>
                    </div>
                    <div className="w-px h-5 bg-gray-200" />
                    <div className="flex items-center gap-1.5">
                        <Trophy size={14} className="text-amber-500" />
                        <span className="font-mono text-sm font-semibold text-gray-700">{found.size}<span className="text-gray-400">/{totalStationCount}</span></span>
                    </div>
                </div>
                <div className="relative group">
                    <button className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-black/8 border border-gray-200/80 p-2.5 text-gray-500 hover:text-gray-800 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>
                    </button>
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl shadow-black/15 border border-gray-200 py-2 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <button onClick={handleReset} className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"><RotateCcw size={14} />Recommencer</button>
                        {!gameWon && !showAll && (
                            <button onClick={handleGiveUp} className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"><Flag size={14} />Abandonner</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Last found notification */}
            <AnimatePresence>
                {lastFound && !showAll && (
                    <motion.div key={lastFound} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
                        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg shadow-black/10 border border-gray-200/80 px-5 py-2.5 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: metroLines[uniqueStations.find(s => s.name === lastFound)?.lines[0]]?.color || '#888' }} />
                            <span className="text-gray-700 text-sm font-medium">{lastFound}</span>
                            <span className="text-gray-400 text-xs">✓</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom progress bar + line badges */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-black/8 border border-gray-200/80 px-4 py-2.5 flex items-center gap-3">
                    <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1">
                        {Object.entries(metroLines).map(([id, line]) => {
                            const lineStations = uniqueStations.filter(st => st.lines.includes(id))
                            const foundCount = lineStations.filter(st => found.has(st.name)).length
                            const allFound = foundCount === lineStations.length && foundCount > 0
                            return (
                                <div key={id} className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold relative"
                                    style={{ backgroundColor: allFound ? line.color : `${line.color}40`, color: allFound ? '#fff' : line.color }}
                                    title={`Ligne ${id}: ${foundCount}/${lineStations.length}`}
                                >{id}</div>
                            )
                        })}
                    </div>
                    <div className="shrink-0 text-xs font-semibold text-gray-500">{percentage}%</div>
                    <div className="shrink-0 w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" animate={{ width: `${percentage}%` }} transition={{ duration: 0.5 }} />
                    </div>
                </div>
            </div>

            {/* Win overlay */}
            <AnimatePresence>
                {gameWon && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-30 flex items-center justify-center bg-white/40 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="bg-white rounded-2xl shadow-2xl shadow-black/15 p-8 text-center max-w-sm mx-4">
                            <div className="text-5xl mb-4">🏆</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Bravo !</h2>
                            <p className="text-gray-500 mb-1">Toutes les {totalStationCount} stations trouvées</p>
                            <p className="text-3xl font-mono font-bold text-blue-600 mb-6">{formatTime(timer)}</p>
                            <button onClick={handleReset} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">Rejouer</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
