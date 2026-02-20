import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Formation from './components/Formation'
import Footer from './components/Footer'
import ClickEffect from './components/ClickEffect'

function App() {
    return (
        <div className="relative min-h-screen bg-dark overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
            <div className="orb w-[600px] h-[600px] bg-neon top-[-200px] left-[-200px]" />
            <div className="orb w-[400px] h-[400px] bg-blue-600 bottom-[20%] right-[-100px]" />
            <div className="orb w-[300px] h-[300px] bg-purple-600 top-[60%] left-[10%]" />

            {/* Click particle effect */}
            <ClickEffect />

            {/* Content */}
            <div className="relative z-10">
                <Header />
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Formation />
                <Footer />
            </div>
        </div>
    )
}

export default App
