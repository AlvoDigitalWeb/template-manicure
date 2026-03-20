import { siteConfig } from "../config/site"
import { Button } from "../components/ui/Button"
import { Container, Section } from "../components/ui/Layout"
import { Heading, Text } from "../components/ui/Typography"
import { Card } from "../components/ui/Interactive"
import { Star, ArrowRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router"
import { TemplateBanner } from "../components/TemplateBanner"

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

  return (
    <div className="w-full">
      <TemplateBanner />
      {/* Hero Section Refinada */}
      <Section padding="none" className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary/95">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 z-0">
          {/* Nova Imagem de Alta Definição */}
          <img
            src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=2000"
            className="h-full w-full object-cover grayscale-[20%] transition-transform duration-[10s] hover:scale-110"
            alt="Studio Manicure Elegante"
          />
        </div>
        <Container className="relative z-20 flex h-full items-center py-24 lg:py-32">
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary/40 backdrop-blur-md border border-white/10 px-6 py-2 text-accent shadow-2xl">
              <span className="text-xs font-bold tracking-[0.3em] uppercase">Excelência em Lisboa</span>
            </div>

            <div className="space-y-6 w-full">
              <Heading size="h1" color="secondary" className="leading-tight w-full">
                Revele a beleza das <span className="text-luxury">suas mãos</span>
              </Heading>
              <Text size="xl" color="secondary" className="opacity-80 font-light">
                {siteConfig.description} Oferecemos um serviço personalizado com acabamento hospitalar e elegância intemporal.
              </Text>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button size="lg" radius="full" variant="accent" asChild className="px-12 h-16 text-lg hover:shadow-accent/40 shadow-xl transition-all">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Reservar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" radius="full" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:border-white h-16 px-10 backdrop-blur-sm transition-all shadow-lg" asChild>
                <Link to="/servicos">
                  Descobrir Serviços
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-secondary/10">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100"
                ].map((src, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-primary bg-accent/20 overflow-hidden shadow-lg">
                    <img src={src} alt={`Cliente ${i + 1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-accent">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <Text size="xs" color="secondary" weight="bold" className="opacity-60">+500 Clientes Satisfeitas</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Summary PT */}
      <Section padding="lg" variant="surface">
        <Container>
          <div className="mb-20 flex flex-col items-center justify-center text-center space-y-6">
            <div className="h-1 w-20 bg-accent rounded-full mb-2" />
            <Heading size="h2" align="center">As Nossas Especialidades</Heading>
            <Text size="lg" color="muted" align="center" className="">
              Descubra os tratamentos mais procurados no nosso espaço, adaptados à saúde e beleza das suas unhas.
            </Text>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.slice(0, 3).map((service) => (
              <Card key={service.id} padding="none" className="group border-none shadow-md overflow-hidden bg-white">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 right-4 glass text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.price}
                  </div>
                </div>
                <div className="p-8 space-y-3">
                  <Heading size="h3" weight="bold" className="text-xl">{service.title}</Heading>
                  <Text color="muted" size="sm" className="leading-relaxed line-clamp-3">{service.description}</Text>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" radius="full" asChild className="h-14 px-10 hover:border-accent">
              <Link to="/servicos" className="inline-flex items-center font-bold">
                Ver Listagem Completa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Social Proof (PT) */}
      <Section padding="lg" variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <Heading size="h2" className="lg:text-4xl">O que as nossas clientes dizem</Heading>
                <Text size="lg" color="muted" className="leading-relaxed">
                  A excelência está nos detalhes. É por isso que somos o studio de eleição de centenas de mulheres em Lisboa.
                </Text>
              </div>
              <div className="space-y-6">
                {siteConfig.testimonials.map((test, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-surface rounded-3xl border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-accent/20">
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Text weight="medium" size="lg" italic className="text-primary/80">"{test.comment}"</Text>
                    <div className="flex items-center gap-4">
                      <div className="h-1 w-12 bg-accent/40 rounded-full" />
                      <Text size="sm" weight="bold">{test.name}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
              <img
                src={siteConfig.about.image}
                alt="Detalhe Studio Nails"
                className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[650px] object-cover border-[12px] border-white"
              />
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2rem] shadow-2xl z-20 space-y-3 hidden md:block border border-white/40">
                <CheckCircle2 size={40} className="text-accent mb-2" />
                <Text weight="bold" size="xl">Garantia Studio Nails</Text>
                <Text size="sm" color="muted" className="leading-relaxed">Esterilização certificada e materiais eco-friendly para a sua segurança total.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA PT */}
      <Section padding="lg" variant="primary" className="text-secondary overflow-hidden bg-primary">
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -ml-[400px] -mb-[400px] pointer-events-none" />
        <Container className="relative z-10 text-center space-y-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <Heading size="h2" color="secondary" align="center" className="lg:text-5xl">Pronta para a sua transformação?</Heading>
            <Text size="xl" color="secondary" align="center" className="opacity-70 font-light">
              Seja para um evento especial ou para o seu autocuidado semanal. O Studio Nails & Beauty está pronto para a receber.
            </Text>
          </div>
          <Button size="lg" radius="full" variant="accent" className="px-16 h-20 text-xl font-bold hover:scale-105 active:scale-95 transition-transform w-full lg:w-auto" asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Efetuar Marcação pelo WhatsApp
            </a>
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-16 text-secondary/40 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-accent" /> Em Lisboa
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-accent" /> Aberto Sábados
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-accent" /> Materiais Seguros
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
