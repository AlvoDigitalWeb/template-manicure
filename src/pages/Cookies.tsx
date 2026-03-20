import { Container, Section } from "../components/ui/Layout"
import { Heading, Text } from "../components/ui/Typography"
import { siteConfig } from "../config/site"
import { Cookie, Info, Settings, ShieldCheck, Mail, Phone, AlertTriangle } from "lucide-react"
import { Button } from "../components/ui/Button"
import { useCookies } from "../lib/cookies"

export default function CookiesPage() {
  const { setIsModalOpen } = useCookies();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section padding="lg" variant="primary" className="bg-primary/90 text-secondary">
        <Container>
          <div className="max-w-3xl">
            <Heading size="h1" color="secondary" className="mb-6">
              Política de <span className="text-luxury">Cookies</span>
            </Heading>
            <Text size="lg" color="secondary" className="opacity-80">
              Descubra o que são cookies, quais utilizamos e como pode gerir as suas preferências para uma navegação segura e personalizada.
            </Text>
          </div>
        </Container>
      </Section>

      <Section padding="lg" variant="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">

            {/* DISCLAIMER OBRIGATÓRIO */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl shadow-sm">
              <div className="flex gap-4">
                <AlertTriangle className="text-amber-500 shrink-0" size={24} />
                <div className="space-y-2">
                  <Text weight="bold" className="text-amber-900 uppercase tracking-wider text-xs">⚠️ Aviso Importante</Text>
                  <Text size="sm" className="text-amber-800 leading-relaxed">
                    Este é um modelo de política de cookies para manicures. Deve ser adaptado à realidade do seu negócio antes da publicação. Recomenda-se validação jurídica para garantir conformidade legal total.
                  </Text>
                </div>
              </div>
            </div>

            {/* 1. O que são cookies? */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Cookie className="text-accent" size={24} />
                <Heading size="h3">1. O que são Cookies?</Heading>
              </div>
              <Text color="muted" className="leading-relaxed">
                Cookies são pequenos ficheiros de texto que são armazenados no seu computador ou dispositivo móvel através do navegador (browser), retendo apenas informação relacionada com as suas preferências, não incluindo, como tal, os seus dados pessoais.
              </Text>
              <Text color="muted" className="leading-relaxed">
                A colocação de cookies ajudará o website a reconhecer o seu dispositivo na próxima vez que o utilizador o visita, melhorando a experiência de navegação e a rapidez de resposta.
              </Text>
            </div>

            {/* 2. Tipos de Cookies que utilizamos */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-accent" size={24} />
                <Heading size="h3">2. Que tipos de Cookies utilizamos?</Heading>
              </div>
              <div className="grid gap-6">
                <div className="p-8 bg-surface rounded-3xl border border-border/50 transition-all hover:bg-white/60">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/5 p-3 rounded-2xl text-primary"><Settings size={22} /></div>
                    <Heading size="h4">Cookies Essenciais (Necessários)</Heading>
                  </div>
                  <Text size="sm" color="muted" className="leading-relaxed">
                    Estes cookies permitem a navegação no website e a utilização das suas aplicações, bem como aceder a áreas seguras do website. Sem estes cookies, os serviços que tenha solicitado não podem ser prestados. São obrigatórios para o correto funcionamento do site.
                  </Text>
                </div>

                <div className="p-8 bg-surface rounded-3xl border border-border/50 transition-all hover:bg-white/60">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/5 p-3 rounded-2xl text-primary"><Info size={22} /></div>
                    <Heading size="h4">Cookies Analíticos (Estatísticos)</Heading>
                  </div>
                  <Text size="sm" color="muted" className="leading-relaxed">
                    São utilizados anonimamente para efeitos de criação e análise de estatísticas, no sentido de melhorar o funcionamento do website. Estes cookies apenas serão instalados com o seu consentimento prévio.
                  </Text>
                  <Text size="xs" italic color="muted" className="mt-3 block font-medium">Nota: Atualmente, este template pode não utilizar cookies analíticos avançados, mas está preparado para a sua integração futura.</Text>
                </div>
              </div>
            </div>

            {/* 3. Finalidade */}
            <div className="space-y-4">
              <Heading size="h3">3. Finalidade dos Cookies</Heading>
              <Text color="muted" className="leading-relaxed">
                Utilizamos cookies para personalizar a sua experiência no {siteConfig.name}, memorizar as suas preferências e garantir que o site funciona conforme esperado. Os dados recolhidos através de cookies não são partilhados com terceiros para fins publicitários externos.
              </Text>
            </div>

            {/* 4. Gestão de Cookies */}
            <div className="space-y-6 pt-6 border-t border-border/40">
              <div className="flex items-center gap-3">
                <Settings className="text-accent" size={24} />
                <Heading size="h3">4. Gestão de Consentimento</Heading>
              </div>
              <Text color="muted" className="leading-relaxed">
                Todos os browsers permitem ao utilizador aceitar, recusar ou apagar cookies, nomeadamente através da seleção das definições apropriadas no respetivo navegador. Pode configurar os cookies no menu "opções" ou "preferências" do seu browser.
              </Text>

              <div className="bg-accent/5 p-8 rounded-3xl border border-accent/10 space-y-6">
                <div className="space-y-2 text-center sm:text-left">
                  <Heading size="h4">Deseja alterar as suas preferências?</Heading>
                  <Text size="sm" color="muted">Clique no botão abaixo para reabrir o banner de consentimento e alterar as suas opções de privacidade no nosso site.</Text>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <Button
                    variant="accent"
                    radius="full"
                    className="px-10 h-14 text-sm font-bold shadow-md hover:scale-105 transition-all"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Gerir Preferências de Cookies
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-10">
              <Heading size="h3">Contacto para Dúvidas</Heading>
              <Text color="muted" className="leading-relaxed">
                Se tiver qualquer dúvida sobre a nossa utilização de cookies, pode contactar-nos através do e-mail: <span className="font-bold text-primary">{siteConfig.contact.email}</span>.
              </Text>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg"><Mail size={18} className="text-accent" /></div>
                  <Text size="sm" weight="medium">{siteConfig.contact.email}</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg"><Phone size={18} className="text-accent" /></div>
                  <Text size="sm" weight="medium">{siteConfig.contact.phoneDisplay}</Text>
                </div>
              </div>
            </div>

            <div className="pt-12 text-center">
              <Text size="xs" color="muted" className="opacity-50">
                Última atualização: {new Date().toLocaleDateString('pt-PT')}
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
