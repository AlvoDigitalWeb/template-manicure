import { BrowserRouter, Routes, Route } from "react-router"
import { MainLayout } from "./components/layout/MainLayout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import { About, Contact } from "./pages/Info"
import Privacy from "./pages/Privacy"
import Cookies from "./pages/Cookies"
import ScrollToTop from "./components/ScrollToTop"
import { CookieProvider } from "./lib/cookies"
import { CookieBanner } from "./components/CookieBanner"
import { CookiePreferencesModal } from "./components/CookiePreferencesModal"

function App() {
  return (
    <CookieProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <CookieBanner />
        <CookiePreferencesModal />
      </BrowserRouter>
    </CookieProvider>
  )
}

export default App
