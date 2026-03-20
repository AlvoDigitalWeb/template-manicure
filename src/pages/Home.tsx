import { siteConfig } from "../config/site"
import { Button } from "../components/ui/Button"
import { Container, Section } from "../components/ui/Layout"
import { Heading, Text } from "../components/ui/Typography"
import { Card } from "../components/ui/Interactive"
import { Star, ArrowRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router"
import { TemplateBanner } from "../components/TemplateBanner"
import heroImage from "../assets/images/Mãos delicadas com unhas cuidadas.png"

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

  return (
    <div className="w-full">
      <TemplateBanner />
      {/* Hero Section Banner - Toda Horizontal */}
      <Section padding="none" className="relative flex items-center overflow-hidden">
        {/* Imagem de Fundo Total */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src={heroImage}
            alt="Unhas Cuidadas Manicure"
            className="w-full h-full object-cover object-[70%_center] md:object-[60%_center] 2xl:object-center"
          />
          {/* Opcional: Gradiente sutil se o texto sumir em certas imagens */}
          <div className="absolute inset-0 bg-white/40 md:bg-transparent pointer-events-none" />
        </div>

        <Container className="relative z-20 flex h-full items-center py-24 sm:py-32 lg:py-40 w-full">
          {/* Conteúdo à Esquerda Totalmente Livre de Quebras */}
          <div className="w-full lg:w-[60%] space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 bg-white/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl md:rounded-none">
            <div className="space-y-6 w-full">
              <Heading size="h1" className="leading-[1.1] w-full text-accent font-serif tracking-normal text-4xl sm:text-5xl lg:text-[4.5rem]">
                Revele a beleza <br className="hidden lg:block" /> das suas mãos
              </Heading>
              <Text size="lg" className="text-primary/90 font-medium leading-relaxed md:text-xl lg:pr-10">
                Especialistas em unhas de gel, verniz gel e cuidados avançados de estética em Lisboa. Oferecemos um serviço personalizado com acabamento hospitalar e elegância atemporal.
              </Text>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" radius="full" variant="accent" asChild className="px-10 h-14 text-base font-bold shadow-lg shadow-accent/20 transition-all hover:-translate-y-1 w-full sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Reservar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" radius="full" variant="secondary" className="px-8 h-14 text-base font-bold shadow-sm transition-all hover:-translate-y-1 bg-white/60 backdrop-blur-md border border-white hover:bg-white w-full sm:w-auto" asChild>
                <Link to="/servicos">
                  Descobrir Serviços <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-10">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100"
                ].map((src, i) => (
                  <div key={i} className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-[3px] border-white/80 overflow-hidden shadow-sm shrink-0">
                    <img src={src} alt={`Cliente ${i + 1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-accent border border-white/20 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full inline-flex">
                  <Star size={14} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" />
                  <Star size={14} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" />
                  <Star size={14} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" />
                  <Star size={14} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" />
                  <Star size={14} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" />
                  <span className="text-xs font-bold text-primary/80 ml-2">+500 Clientes</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Summary PT */}
      <Section padding="lg" variant="default" className="bg-bg">
        <Container>
          <div className="mb-20 flex flex-col items-center justify-center text-center space-y-6">
            <Heading size="h2" align="center" className="text-accent font-serif tracking-normal">As Nossas Especialidades</Heading>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.slice(0, 3).map((service) => (
              <Card key={service.id} padding="none" className="group border-none shadow-sm hover:shadow-md overflow-hidden bg-surface rounded-3xl transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] relative overflow-hidden m-2 rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#eae3db] text-primary px-4 py-1.5 rounded-xl text-sm font-bold shadow-sm">
                    {service.price}
                  </div>
                </div>
                <div className="p-8 space-y-4 text-center">
                  <Heading size="h3" weight="bold" className="text-xl text-primary font-sans">{service.title}</Heading>
                  <Text color="muted" size="sm" className="leading-relaxed line-clamp-3 mx-auto">
                    {service.description.split('.')[0]}.
                  </Text>
                  <Button variant="ghost" className="text-primary hover:text-accent font-bold mt-2 hover:bg-transparent" asChild>
                    <Link to="/servicos">
                      Ver Listagem Completa <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Proof (PT) */}
      <Section padding="lg" variant="default" className="bg-bg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <Heading size="h2" className="lg:text-4xl text-accent font-serif tracking-normal">O que as nossas clientes dizem</Heading>
                <Text size="lg" color="muted" className="leading-relaxed">
                  A excelência está nos detalhes. É por isso que somos o studio de eleição de centenas de mulheres em Lisboa.
                </Text>
              </div>
              <div className="space-y-6">
                {siteConfig.testimonials.map((test, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-surface rounded-3xl border-none shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Text weight="medium" size="lg" italic className="text-primary/70 font-serif">"{test.comment}"</Text>
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-8 bg-accent/40" />
                      <Text size="sm" weight="bold" className="text-primary">{test.name}</Text>
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
                className="rounded-[2.5rem] shadow-xl relative z-10 w-full h-[400px] lg:h-[650px] object-cover border-[6px] lg:border-[8px] border-white"
              />
              <div className="absolute -bottom-10 -right-4 lg:-right-10 bg-white p-6 lg:p-10 rounded-2xl lg:rounded-[2rem] shadow-xl z-20 space-y-2 lg:space-y-3 hidden sm:block max-w-[80%] lg:max-w-none">
                <CheckCircle2 size={40} className="text-accent mb-2" />
                <Text weight="bold" size="xl" className="text-primary font-serif">Garantia Studio Nails</Text>
                <Text size="sm" className="leading-relaxed text-primary/70">Esterilização certificada e materiais eco-friendly para a sua segurança total.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA PT */}
      <Section padding="lg" variant="surface" className="relative overflow-hidden bg-surface py-32 rounded-t-[3rem]">
        <div className="absolute inset-0 bg-accent/5" />
        <Container className="relative z-10 text-center space-y-12">
          <div className="flex flex-col items-center justify-center space-y-6 mx-auto">
            <Heading size="h2" align="center" className="lg:text-5xl text-accent font-serif tracking-normal">Pronta para a sua transformação?</Heading>
            <Text size="lg" align="center" className="text-primary/70 font-medium">
              Seja para um evento especial ou para o seu autocuidado semanal. O Studio Nails & Beauty está pronto para a receber.
            </Text>
          </div>
          <Button size="lg" radius="full" variant="accent" className="px-16 h-16 text-lg font-bold hover:-translate-y-1 shadow-lg shadow-accent/20 transition-all w-full lg:w-auto" asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Efetuar Marcação <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-16 text-primary/50 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase pt-8 border-t border-accent/10">
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
