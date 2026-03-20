import { siteConfig } from "../config/site"
import { Container, Section } from "../components/ui/Layout"
import { Heading, Text } from "../components/ui/Typography"
import { Card } from "../components/ui/Interactive"
import { CheckCircle2, MapPin, Clock, MessageCircle, Instagram, Facebook, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/Button"

export function About() {
   return (
      <div className="w-full">
         <Section padding="lg" variant="surface">
            <Container>
               <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                     <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] blur-3xl" />
                     <img
                        src={siteConfig.about.image}
                        alt="Expert Manicure Lisboa"
                        className="rounded-[3rem] shadow-2xl h-[650px] w-full object-cover relative z-10 border-8 border-white"
                     />
                     <div className="absolute -bottom-10 -right-10 bg-primary text-secondary p-12 rounded-[2.5rem] hidden lg:block border-[12px] border-bg z-20 shadow-2xl">
                        <Text weight="bold" size="3xl" className="text-accent">10+</Text>
                        <Text size="xs" weight="bold" className="tracking-widest text-secondary uppercase opacity-60">Anos de Experiência</Text>
                     </div>
                  </div>
                  <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
                     <div className="space-y-6">
                        <div className="h-1 w-20 bg-accent rounded-full" />
                        <Heading size="h1">{siteConfig.about.title}</Heading>
                        {siteConfig.about.description.map((p, i) => (
                           <Text key={i} size="lg" color="muted" className="leading-relaxed">
                              {p}
                           </Text>
                        ))}
                     </div>

                     <div className="grid sm:grid-cols-2 gap-8">
                        {[
                           "Higiene e Autoclave",
                           "Marcas Internacionais",
                           "Nail Art Exclusiva",
                           "Conforto Absoluto"
                        ].map((skill) => (
                           <div key={skill} className="flex gap-4 items-center">
                              <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center">
                                 <CheckCircle2 size={16} className="text-accent" />
                              </div>
                              <Text weight="semibold" size="sm">{skill}</Text>
                           </div>
                        ))}
                     </div>

                     <Card variant="accent" padding="lg" className="bg-accent/5 border-none rounded-[2rem]">
                        <Text italic color="muted" size="lg" className="leading-relaxed">
                           "A nossa missão é proporcionar não apenas unhas perfeitas, mas um momento de verdadeira pausa e renovação para a mulher moderna de Lisboa."
                        </Text>
                     </Card>
                  </div>
               </div>
            </Container>
         </Section>
      </div>
   )
}

export function Contact() {
   const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

   return (
      <div className="w-full">
         <Section padding="lg">
            <Container>
               <div className="grid lg:grid-cols-2 gap-32">
                  <div className="space-y-16">
                     <div className="space-y-6">
                        <div className="h-1 w-20 bg-accent rounded-full" />
                        <Heading size="h1" className="lg:text-6xl">Vamos conversar?</Heading>
                        <Text size="xl" color="muted" className="font-light">Estamos situados no coração de Lisboa, prontos para a receber com toda a exclusividade.</Text>
                     </div>

                     <div className="space-y-10">
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-8 p-8 rounded-[2rem] border border-border/50 hover:border-accent/40 group transition-all bg-white hover:shadow-xl">
                           <div className="h-20 w-20 bg-accent rounded-[1.5rem] flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                              <MessageCircle size={40} />
                           </div>
                           <div className="space-y-2">
                              <Text weight="bold" size="xs" className="uppercase tracking-widest opacity-50">Marcações via WhatsApp</Text>
                              <Text color="accent" weight="bold" size="2xl">{siteConfig.contact.phoneDisplay}</Text>
                           </div>
                        </a>

                        <div className="flex items-center gap-8 p-8">
                           <div className="h-20 w-20 bg-surface rounded-[1.5rem] flex items-center justify-center text-primary/30 border border-border/50">
                              <MapPin size={40} />
                           </div>
                           <div className="space-y-2">
                              <Text weight="bold" size="xs" className="uppercase tracking-widest opacity-50">A nossa Morada</Text>
                              <Text weight="bold" size="lg" className="leading-tight">{siteConfig.contact.address}</Text>
                              <a href={siteConfig.contact.googleMaps} target="_blank" rel="noreferrer" className="inline-block text-accent text-sm font-bold border-b-2 border-accent/20 hover:border-accent transition-all pt-1">Abrir Direções no Maps</a>
                           </div>
                        </div>

                        <div className="flex items-center gap-8 p-8">
                           <div className="h-20 w-20 bg-surface rounded-[1.5rem] flex items-center justify-center text-primary/30 border border-border/50">
                              <Clock size={40} />
                           </div>
                           <div className="space-y-2">
                              <Text weight="bold" size="xs" className="uppercase tracking-widest opacity-50">Horários</Text>
                              <div className="grid grid-cols-1 gap-1 pt-1">
                                 {siteConfig.schedule.map((item) => (
                                    <Text key={item.day} color="muted" size="sm" weight="medium">{item.day}: <span className="text-primary font-bold">{item.hours}</span></Text>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="relative">
                     <Card padding="none" className="h-full bg-primary text-secondary p-8 sm:p-12 lg:p-20 flex flex-col justify-center space-y-10 overflow-hidden relative border-none rounded-[3rem] shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                           <MessageCircle size={300} />
                        </div>
                        <div className="space-y-6 relative z-10 text-center lg:text-left">
                           <Heading size="h2" color="secondary" className="text-3xl sm:text-4xl lg:text-5xl">Deseja garantir o seu horário?</Heading>
                           <Text color="secondary" className="opacity-60 text-base sm:text-lg font-light leading-relaxed">Clique no botão abaixo e fale connosco. A nossa equipa responderá em breves minutos para confirmar a sua marcação.</Text>
                        </div>
                        <div className="relative z-10 pt-4">
                           <Button size="lg" variant="accent" radius="full" className="w-full h-16 sm:h-20 text-lg sm:text-xl font-bold shadow-xl shadow-accent/20" asChild>
                              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                                 Iniciar Conversa <ArrowRight className="ml-2 h-6 w-6" />
                              </a>
                           </Button>
                        </div>
                        <div className="pt-12 flex justify-center gap-6 sm:gap-10 relative z-10 border-t border-secondary/10">
                           <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors group">
                              <Instagram size={20} className="sm:size-24 opacity-50 group-hover:opacity-100" /> <Text color="secondary" weight="bold" size="xs" className="sm:text-sm tracking-widest uppercase">Instagram</Text>
                           </a>
                           <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors group">
                              <Facebook size={20} className="sm:size-24 opacity-50 group-hover:opacity-100" /> <Text color="secondary" weight="bold" size="sm" className="sm:text-sm tracking-widest uppercase">Facebook</Text>
                           </a>
                        </div>
                     </Card>
                  </div>
               </div>
            </Container>
         </Section>

         {/* Map Section Premium */}
         <Section padding="none" variant="surface" className="pb-32">
            <Container>
               <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  <iframe
                     title="Localização Studio Nails & Beauty"
                     width="100%"
                     height="500"
                     style={{ border: 0 }}
                     src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`}
                     loading="lazy"
                     className="grayscale-[20%] hover:grayscale-0 transition-all duration-700 block"
                  ></iframe>
                  
                  {/* Floating Info Plate */}
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-white max-w-[300px] hidden sm:block scale-90 md:scale-100 origin-top-left">
                     <div className="flex items-center gap-3 mb-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                        <Heading size="h4" className="text-[10px] uppercase tracking-[0.2em] text-accent">Studio Nails & Beauty</Heading>
                     </div>
                     <Text size="lg" weight="bold" className="leading-tight mb-2">{siteConfig.contact.address}</Text>
                     <Text size="xs" color="muted" className="leading-relaxed font-medium">Localização privilegiada com estacionamento fácil e acesso via metro.</Text>
                  </div>
               </div>
            </Container>
         </Section>
      </div>
   )
}
