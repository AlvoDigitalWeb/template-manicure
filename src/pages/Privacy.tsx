import { Container, Section } from "../components/ui/Layout"
import { Heading, Text } from "../components/ui/Typography"
import { siteConfig } from "../config/site"
import { AlertTriangle, ShieldCheck, Mail, Phone, Building } from "lucide-react"

export default function Privacy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section padding="lg" variant="primary" className="bg-primary/95 text-secondary">
        <Container>
          <div className="max-w-3xl">
            <Heading size="h1" color="secondary" className="mb-6">
              Política de <span className="text-luxury">Privacidade</span>
            </Heading>
            <Text size="lg" color="secondary" className="opacity-80">
              A sua privacidade é fundamental para nós. Saiba como recolhemos, utilizamos e protegemos os seus dados pessoais.
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
                    Este é um modelo de política de privacidade para manicures. Deve ser adaptado à realidade do seu negócio antes da publicação. Recomenda-se validação jurídica para garantir conformidade legal total.
                  </Text>
                </div>
              </div>
            </div>

            {/* 1. Identificação do Responsável */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Building className="text-accent" size={24} />
                <Heading size="h3">1. Identificação do Responsável</Heading>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 bg-surface p-8 rounded-3xl border border-border/50">
                <div className="space-y-4">
                  <div>
                    <Text size="xs" weight="bold" color="muted" className="uppercase tracking-widest opacity-60">Empresa/Barbearia</Text>
                    <Text weight="medium" className="text-lg">[Nome da Barbearia]</Text>
                  </div>
                  <div>
                    <Text size="xs" weight="bold" color="muted" className="uppercase tracking-widest opacity-60">NIF/NIPC</Text>
                    <Text weight="medium" className="text-lg">[NIF]</Text>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Text size="xs" weight="bold" color="muted" className="uppercase tracking-widest opacity-60">Morada</Text>
                    <Text weight="medium" className="text-lg">[Morada]</Text>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Text size="xs" weight="bold" color="muted" className="uppercase tracking-widest opacity-60">E-mail</Text>
                      <Text weight="medium">[Email de contacto]</Text>
                    </div>
                    <div>
                      <Text size="xs" weight="bold" color="muted" className="uppercase tracking-widest opacity-60">Telefone</Text>
                      <Text weight="medium">[Telefone]</Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text size="xs" italic color="muted" className="mt-2 block">
                * Os dados acima devem ser preenchidos manualmente pelo proprietário do negócio para garantir a validade legal.
              </Text>
            </div>

            {/* 2. Dados Recolhidos */}
            <div className="space-y-4">
              <Heading size="h3">2. Que dados recolhemos?</Heading>
              <Text color="muted" className="leading-relaxed">
                No âmbito da sua interação connosco através deste website, podemos recolher os seguintes dados pessoais:
              </Text>
              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                {[
                  "Nome completo",
                  "Número de telefone/telemóvel",
                  "Endereço de e-mail",
                  "Mensagens enviadas via formulário ou WhatsApp",
                  "Dados de navegação (via cookies)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-border/30">
                    <ShieldCheck size={18} className="text-accent" />
                    <Text size="sm" weight="medium">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Finalidade e Base Legal */}
            <div className="space-y-4">
              <Heading size="h3">3. Qual a finalidade e base legal do tratamento?</Heading>
              <Text color="muted" className="leading-relaxed">
                Os seus dados são tratados com as seguintes finalidades:
              </Text>
              <div className="space-y-4">
                <div className="p-6 bg-surface rounded-2xl border border-border/30">
                  <Text weight="bold" size="sm" className="mb-2">Contacto e Agendamento</Text>
                  <Text size="sm" color="muted">Para responder aos seus pedidos de informação, dúvidas ou para a gestão e marcação de serviços de manicure/estética.</Text>
                  <Text size="xs" weight="bold" className="mt-3 text-accent uppercase tracking-wider">Base Legal: Consentimento</Text>
                </div>
                <div className="p-6 bg-surface rounded-2xl border border-border/30">
                  <Text weight="bold" size="sm" className="mb-2">Melhoria da Experiência</Text>
                  <Text size="sm" color="muted">Através de cookies analíticos, para compreender como as utilizadoras navegam no site e melhorar os nossos serviços (sempre sujeito a consentimento).</Text>
                  <Text size="xs" weight="bold" className="mt-3 text-accent uppercase tracking-wider">Base Legal: Consentimento / Interesse Legítimo</Text>
                </div>
              </div>
            </div>

            {/* 4. Retenção de Dados */}
            <div className="space-y-4">
              <Heading size="h3">4. Durante quanto tempo conservamos os seus dados?</Heading>
              <Text color="muted" className="leading-relaxed">
                Conservamos os seus dados apenas durante o período necessário para as finalidades para as quais foram recolhidos ou para o cumprimento de obrigações legais. No caso de contactos comerciais, os dados serão mantidos enquanto não retirar o seu consentimento.
              </Text>
            </div>

            {/* 5. Direitos do Titular (RGPD) */}
            <div className="space-y-4">
              <Heading size="h3">5. Quais são os seus direitos?</Heading>
              <Text color="muted" className="leading-relaxed mb-6">
                De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD), as utilizadoras têm o direito de:
              </Text>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Acesso", desc: "Saber se os seus dados estão a ser tratados." },
                  { title: "Retificação", desc: "Corrigir dados inexatos ou incompletos." },
                  { title: "Apagamento", desc: "Solicitar o 'esquecimento' dos seus dados." },
                  { title: "Oposição", desc: "Opor-se ao tratamento dos dados para fins específicos." },
                  { title: "Portabilidade", desc: "Receber os dados num formato estruturado." },
                  { title: "Limitação", desc: "Suspender o tratamento em certas situações." }
                ].map((direito, i) => (
                  <div key={i} className="p-5 border border-border/40 rounded-2xl hover:border-accent/40 transition-colors">
                    <Text weight="bold" size="sm" className="mb-1">{direito.title}</Text>
                    <Text size="xs" color="muted">{direito.desc}</Text>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Como exercer direitos */}
            <div className="space-y-4 pt-4 border-t border-border/60">
              <Heading size="h3">6. Como pode exercer os seus direitos?</Heading>
              <Text color="muted" className="leading-relaxed">
                Pode exercer qualquer um destes direitos enviando um pedido por escrito para o e-mail: <span className="text-primary font-bold">{siteConfig.contact.email}</span> ou através de carta para a morada identificada no Ponto 1.
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
