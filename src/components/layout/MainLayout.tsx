import * as React from "react"
import { Link, NavLink, Outlet } from "react-router"
import { Menu, X, Instagram, Facebook, Phone, MapPin, Shield, Cookie, Settings } from "lucide-react"
import { siteConfig } from "../../config/site"
import { Button } from "../ui/Button"
import { Container } from "../ui/Layout"
import { Text } from "../ui/Typography"
import { WhatsAppButton } from "../ui/Interactive"
import { cn } from "../../lib/utils"
import { useCookies } from "../../lib/cookies"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
]

export function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { setIsModalOpen } = useCookies()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-bg/80 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center space-x-2 group">
                <span className="text-xl lg:text-2xl font-bold tracking-tight text-luxury transition-transform group-hover:scale-105 shrink-0">
                  {siteConfig.name}
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-semibold tracking-wide uppercase transition-colors hover:text-accent",
                      isActive ? "text-accent" : "text-primary/70"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="primary" size="sm" radius="full" className="px-6 bg-primary text-secondary hover:bg-accent hover:text-primary transition-all shadow-md" asChild>
                <a
                  href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Marcação
                </a>
              </Button>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </Container>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-bg px-4 py-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block text-xl font-bold tracking-widest uppercase py-2 transition-colors",
                    isActive ? "text-accent" : "text-primary/70"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="accent" className="w-full h-14 text-lg font-bold" radius="full" asChild>
              <a
                href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Marcação
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Refinado */}
      <footer className="border-t border-border bg-surface pb-10 pt-20">
        <Container>
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6 w-full">
              <Text weight="bold" size="xl" className="text-luxury mb-4">{siteConfig.name}</Text>
              <Text className="text-primary/80 leading-relaxed text-sm">{siteConfig.description}</Text>
              <div className="flex space-x-6">
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent transition-colors">
                  <Instagram size={22} />
                </a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent transition-colors">
                  <Facebook size={22} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <Text weight="bold" size="lg" className="tracking-widest uppercase text-xs opacity-80 decoration-accent/30 decoration-2 underline underline-offset-8">Contactos</Text>
              <div className="space-y-4 pt-2">
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-primary/90 hover:text-accent transition-colors">
                  <Phone size={18} /> <Text size="sm" weight="bold">{siteConfig.contact.phoneDisplay}</Text>
                </a>
                <a
                  href={siteConfig.contact.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary/80 hover:text-accent transition-colors group"
                >
                  <MapPin size={18} className="mt-1 shrink-0 opacity-50 group-hover:opacity-100" />
                  <Text size="sm" className="leading-relaxed font-medium">{siteConfig.contact.address}</Text>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <Text weight="bold" size="lg" className="tracking-widest uppercase text-xs opacity-80 decoration-accent/30 decoration-2 underline underline-offset-8">Horário</Text>
              <div className="space-y-3 pt-2">
                {siteConfig.schedule.map((item) => (
                  <div key={item.day} className="flex justify-between items-center text-xs">
                    <Text size="xs" className="text-primary/70 font-medium">{item.day}</Text>
                    <Text size="xs" weight="bold" className="text-primary">{item.hours}</Text>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Text weight="bold" size="lg" className="tracking-widest uppercase text-xs opacity-80 decoration-accent/30 decoration-2 underline underline-offset-8">Legal</Text>
              <nav className="flex flex-col space-y-3 pt-2">
                <Link to="/privacy" className="flex items-center gap-2 text-sm text-primary/80 hover:text-accent transition-colors font-medium">
                  <Shield size={14} /> Privacidade
                </Link>
                <Link to="/cookies" className="flex items-center gap-2 text-sm text-primary/80 hover:text-accent transition-colors font-medium">
                  <Cookie size={14} /> Cookies
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 text-sm text-primary/80 hover:text-accent transition-colors text-left cursor-pointer font-medium"
                >
                  <Settings size={14} /> Gerir Cookies
                </button>
              </nav>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10 pt-8 border-t border-border/90 text-center space-y-2">
            <Text size="xs" className="text-primary/70 font-medium tracking-wide">
              © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
            </Text>
            <Text size="xs" className="text-primary/70 text-end font-medium tracking-wide">
              Desenvolvido por <a href="https://alvodigitalweb.pt" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-accent underline underline-offset-4 transition-colors">Alvo Digital Web</a>
            </Text>
          </div>
        </Container>
      </footer>

      {/* WhatsApp Floating */}
      <WhatsAppButton
        phoneNumber={siteConfig.contact.phone}
        message={siteConfig.contact.whatsappMessage}
      />
    </div>
  )
}
