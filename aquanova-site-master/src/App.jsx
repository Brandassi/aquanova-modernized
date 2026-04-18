import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext.jsx"
import { ScrollToTop } from "./components/ScrollToTop.jsx"

import { Home } from "./components/Home.jsx"
import { Instrucoes } from "./pages/Instrucoes.jsx"
import { Componentes } from "./pages/Componentes.jsx"
import { Jogo } from "./pages/Jogo.jsx"
import { QuemSomos } from "./pages/QuemSomos.jsx"
import { Profile } from "./pages/Profile.jsx"
import { Referencias } from "./pages/Referencias.jsx"
import { Sistema } from "./pages/Sistema.jsx"
import { Login } from "./pages/Login.jsx"
import { Cadastro } from "./pages/Cadastro.jsx"

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#f4f7fb] transition-colors duration-500 dark:bg-[#050816]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instrucoes" element={<Instrucoes />} />
            <Route path="/componentes" element={<Componentes />} />
            <Route path="/jogo" element={<Jogo />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/sistema" element={<Sistema />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
