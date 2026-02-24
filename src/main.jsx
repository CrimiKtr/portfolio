import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { ThemeProvider } from './i18n/ThemeContext.jsx'
import App from './App.jsx'
import EcosystemPage from './components/EcosystemPage.jsx'
import MiniGamePage from './components/MiniGamePage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/ecosystem" element={<EcosystemPage />} />
                        <Route path="/mini-jeu" element={<MiniGamePage />} />
                    </Routes>
                </BrowserRouter>
            </LanguageProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
