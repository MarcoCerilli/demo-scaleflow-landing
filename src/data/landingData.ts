export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  setupFee: number;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export const LANDING_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Essential Growth',
    badge: 'Ideale per Piccole Imprese',
    monthlyPrice: 790,
    setupFee: 1400,
    description: 'Sito web veloce con SEO locale, funnel di contatto e tracciamento conversioni per acquisire contatti qualificati.',
    features: [
      'Sito Web / Landing Page Ultra-Veloce (100/100 PageSpeed)',
      'Design Responsivo & Copywriting Orientato alla Vendita',
      'Configurazione Pixel Meta, Google Ads & GA4',
      'Modulo Lead Multi-Step con Notifiche WhatsApp & CRM',
      'Certificato SSL & Hosting Cloud ad Alte Prestazioni',
      'Assistenza Tecnica & Monitoraggio Uptime 99.9%'
    ],
    isPopular: false,
    ctaText: 'Inizia con Essential'
  },
  {
    id: 'scale',
    name: 'Scale & Dominate',
    badge: 'Più Scelto dalle PMI',
    monthlyPrice: 1490,
    setupFee: 2200,
    description: 'Piattaforma digitale completa con funnel avanzato, automatismi email/SMS e ottimizzazione continua del tasso di conversione (CRO).',
    features: [
      'Tutto ciò che è incluso nel piano Essential',
      'Funnel Multi-Canale con A/B Testing Dinamico',
      'Integrazione Automazioni Marketing (Make / Zapier / HubSpot)',
      'Calcolatore Preventivo / Simulatore Interattivo Personalizzato',
      'Dashboard Statistiche in Tempo Reale su Misura',
      'Sessioni Mensili di Ottimizzazione Strategica CRO',
      'Supporto Prioritario WhatsApp Dedicato'
    ],
    isPopular: true,
    ctaText: 'Scala il Tuo Business'
  },
  {
    id: 'enterprise',
    name: 'Custom Ecosystem',
    badge: 'Progetti su Misura',
    monthlyPrice: 2800,
    setupFee: 4500,
    description: 'Architettura software customizzata, web application interna, portale clienti e sistemi di intelligenza artificiale integrati.',
    features: [
      'Tutto ciò che è incluso nel piano Scale',
      'Sviluppo Full-Stack Next.js 15 / Cloud SQL / Database',
      'Area Riservata Clienti con Gestione Ruoli & Pagamenti Stripe',
      'Assistente Virtuale AI su Dati Aziendali Proprietari',
      'Integrazione con Gestionali Interni (Zucchetti, TeamSystem, ERP)',
      'Accordo Livello di Servizio SLA Garantito 4 Ore'
    ],
    isPopular: false,
    ctaText: 'Richiedi Studio di Fattibilità'
  }
];

export const LANDING_FAQS = [
  {
    question: 'Quanto tempo richiede la realizzazione e la messa online?',
    answer: 'Per le Landing Page e siti web focalizzati sulla conversione, i tempi medi sono di 7-14 giorni lavorativi dalla ricezione dei materiali. Per applicazioni web complesse o portali custom, concordiamo una roadmap con rilasci continui ogni 2 settimane.'
  },
  {
    question: 'Perché utilizzate Next.js e Astro al posto di WordPress?',
    answer: 'WordPress è spesso lento, vulnerabile ad attacchi e richiede continui aggiornamenti di plugin che rischiano di rompere il sito. Con Next.js e Astro garantiamo punteggi 100/100 su Google Lighthouse, caricamento in meno di 0.5 secondi, sicurezza granitica e posizionamento SEO di gran lunga superiore.'
  },
  {
    question: 'Come tracciamo i lead e le conversioni generate?',
    answer: 'Configuriamo un sistema di tracking end-to-end con Google Tag Manager, GA4 e Meta Conversion API lato server. Riceverai notifiche istantanee via email e WhatsApp ogni volta che un cliente compila un form o richiede un preventivo.'
  },
  {
    question: 'Cosa succede dopo il lancio?',
    answer: 'Non vi lasciamo mai soli: includiamo manutenzione evolutiva, monitoraggio continuo delle performance, backup automatici e ottimizzazione dei tassi di conversione (CRO) per incrementare costantemente il ritorno sull\'investimento.'
  }
];
