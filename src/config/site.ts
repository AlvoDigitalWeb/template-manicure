export const siteConfig = {
  name: "Studio Nails & Beauty",
  description: "Especialistas em unhas de gel, verniz gel e cuidados avançados de estética em Lisboa.",
  url: "https://studio-nails-beauty.pt",
  author: "Studio Nails & Beauty",
  
  // Contato
  contact: {
    phone: "351999999999", // Exemplo de prefixo PT
    phoneDisplay: "+351 999 999 999",
    email: "[EMAIL_ADDRESS]",
    address: "R. Rosa Araújo, 1250-148 Lisboa",
    googleMaps: "https://maps.google.com/maps?q=R.+Rosa+Araújo,+1250-148+Lisboa",
    whatsappMessage: "Olá, vim do site e gostaria de fazer uma marcação",
  },

  // Horários de Funcionamento (PT)
  schedule: [
    { day: "Segunda - Sexta", hours: "09:00 - 19:00" },
    { day: "Sábado", hours: "09:00 - 14:00" },
    { day: "Domingo", hours: "Fechado" },
  ],

  // Links sociais
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  // Serviços Localizados para Portugal
  services: [
    {
      id: "verniz-gel",
      title: "Verniz Gel",
      description: "Esmaltação semi-permanente com brilho intenso e durabilidade de até 3 semanas.",
      price: "15€",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "unhas-gel-extensao",
      title: "Unhas de Gel (Extensão)",
      description: "Alongamento personalizado com gel de alta resistência para unhas longas e impecáveis.",
      price: "35€",
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "manutencao-gel",
      title: "Manutenção de Gel",
      description: "Reposição e renovação do gel para manter a estrutura e beleza das suas extensões.",
      price: "25€",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "pedicure-completa",
      title: "Pedicure Completa",
      description: "Tratamento profundo dos pés, incluindo remoção de calosidades e verniz gel.",
      price: "20€",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
    },
  ],

  // Seção Sobre
  about: {
    title: "Excelência e bem-estar no coração de Lisboa",
    description: [
      "No Studio Nails & Beauty, acreditamos que o cuidado com as mãos e pés é um ritual de confiança e autoestima.",
      "O nosso espaço foi pensado para oferecer o máximo conforto, utilizando apenas as melhores marcas do mercado europeu e garantindo uma esterilização hospitalar de todos os materiais.",
    ],
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
  },

  // Prova Social
  testimonials: [
    {
      name: "Catarina Santos",
      comment: "O melhor studio em Lisboa! O gelinho dura imenso tempo e o atendimento é 5 estrelas.",
      rating: 5,
    },
    {
      name: "Beatriz Oliveira",
      comment: "Super profissionais. A manutenção das minhas unhas de gel fica sempre perfeita.",
      rating: 5,
    },
  ],
}

export type SiteConfig = typeof siteConfig
