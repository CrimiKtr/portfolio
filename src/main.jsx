import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import EcosystemPage from './components/EcosystemPage.jsx'
import MiniGamePage from './components/MiniGamePage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/ecosystem" element={<EcosystemPage />} />
                <Route path="/mini-jeu" element={<MiniGamePage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
