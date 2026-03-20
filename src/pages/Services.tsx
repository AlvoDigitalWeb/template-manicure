import { siteConfig } from "../config/site"
import { Container, Section } from "../components/ui/Layout"
import { Heading, Text } from "../components/ui/Typography"
import { Card } from "../components/ui/Interactive"
import { CheckCircle } from "lucide-react"

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <Section padding="lg" variant="surface" className="text-center">
        <Container className="space-y-6 max-w-3xl">
          <Heading size="h1" align="center">Os Nossos Serviços</Heading>
          <Text size="xl" color="muted" align="center">
            Oferecemos uma gama completa de cuidados para as suas mãos e pés, com as técnicas mais modernas do mercado europeu.
          </Text>
        </Container>
      </Section>

      {/* Services List */}
      <Section padding="lg">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {siteConfig.services.map((service) => (
              <Card key={service.id} padding="none" variant="outline" className="flex flex-col md:flex-row h-full overflow-hidden group hover:border-accent/40 bg-white transition-all hover:shadow-lg">
                 <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 </div>
                 <div className="md:w-2/3 p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <Heading size="h3">{service.title}</Heading>
                          <Text weight="bold" color="accent" size="lg" className="whitespace-nowrap">{service.price}</Text>
                        </div>
                        <Text color="muted" size="sm" className="leading-relaxed">{service.description}</Text>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-border/50">
                        <ul className="flex flex-wrap gap-4">
                           <li className="flex items-center gap-2 text-xs font-semibold text-primary/40">
                              <CheckCircle size={14} className="text-accent" /> Premium
                           </li>
                           <li className="flex items-center gap-2 text-xs font-semibold text-primary/40">
                              <CheckCircle size={14} className="text-accent" /> Esterilizado
                           </li>
                        </ul>
                    </div>
                 </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ / Info PT */}
      <Section variant="surface" padding="lg">
         <Container>
            <div className="max-w-4xl mx-auto space-y-12">
               <div className="text-center space-y-4">
                  <Heading size="h2">Perguntas Frequentes</Heading>
                  <Text color="muted">Tudo o que precisa de saber para a sua marcação.</Text>
               </div>
               <div className="grid gap-12 md:grid-cols-2">
                  <div className="space-y-3">
                     <Text weight="bold" size="lg">É necessário marcar?</Text>
                     <Text color="muted" size="sm" className="leading-relaxed">Sim, trabalhamos exclusivamente por marcação para garantir que cada cliente recebe o tempo e dedicação necessários.</Text>
                  </div>
                  <div className="space-y-3">
                     <Text weight="bold" size="lg">Formas de pagamento?</Text>
                     <Text color="muted" size="sm" className="leading-relaxed">Aceitamos MBWay, Cartão de Débito/Crédito e Numerário.</Text>
                  </div>
                  <div className="space-y-3">
                     <Text weight="bold" size="lg">Duração do gelinho?</Text>
                     <Text color="muted" size="sm" className="leading-relaxed">Com a manutenção correta a cada 20-30 dias, as unhas mantêm-se perfeitas e resistentes.</Text>
                  </div>
                  <div className="space-y-3">
                     <Text weight="bold" size="lg">Os materiais são seguros?</Text>
                     <Text color="muted" size="sm" className="leading-relaxed">A saúde é a nossa prioridade. Utilizamos processos rigorosos de esterilização e materiais descartáveis premium.</Text>
                  </div>
               </div>
            </div>
         </Container>
      </Section>
    </div>
  )
}
