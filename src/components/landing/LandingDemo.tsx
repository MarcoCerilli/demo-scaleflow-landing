import React, { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Calculator,
  Send,
  Lock,
  Clock,
  Award,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LANDING_PRICING_PLANS, LANDING_FAQS } from '../../data/landingData';
import { LeadFormState } from '../../types';

export const LandingDemo: React.FC = () => {
  // ROI Calculator State
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000);
  const [currentConversionRate, setCurrentConversionRate] = useState(1.2); // %
  const [averageOrderValue, setAverageOrderValue] = useState(180); // €

  // Computed ROI
  const currentLeads = Math.round((monthlyVisitors * currentConversionRate) / 100);
  const currentMonthlyRevenue = currentLeads * averageOrderValue;
  // With high conversion optimization (+2.8% conversion rate)
  const optimizedConversionRate = Number((currentConversionRate + 2.8).toFixed(1));
  const optimizedLeads = Math.round((monthlyVisitors * optimizedConversionRate) / 100);
  const optimizedMonthlyRevenue = optimizedLeads * averageOrderValue;
  const extraMonthlyRevenue = Math.max(0, optimizedMonthlyRevenue - currentMonthlyRevenue);
  const extraAnnualRevenue = extraMonthlyRevenue * 12;

  // Billing Cycle for Pricing (Monthly vs Annual with 20% discount)
  const [isAnnualBilling, setIsAnnualBilling] = useState(true);

  // FAQ open states
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Multi-step Lead Funnel
  const [leadStep, setLeadStep] = useState(1);
  const [leadForm, setLeadForm] = useState<LeadFormState>({
    step: 1,
    projectType: 'landing-page',
    budgetRange: '€2.000 - €5.000',
    timeline: 'Entro 30 giorni',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    goals: 'Aumentare le conversioni e lanciare campagne Google Ads'
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleNextLeadStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadStep < 3) {
      setLeadStep(leadStep + 1);
    } else {
      setIsSubmittingLead(true);
      setTimeout(() => {
        setIsSubmittingLead(false);
        setLeadSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 700);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Top Notification */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 text-white text-[11px] font-bold py-1.5 px-4 text-center tracking-wider shadow-sm">
        🚀 ACCELERA IL TUO BUSINESS • Slot di sviluppo e ottimizzazione aperti per il Q2 2026
      </div>

      {/* Navigation */}
      <nav className="border-b border-indigo-900/30 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/25">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-tight text-white block leading-none">
                SCALE<span className="text-indigo-400">FLOW</span>
              </span>
              <span className="text-[10px] text-indigo-400/80 uppercase tracking-widest block font-semibold">
                High Conversion Engineering
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#calcolatore" className="hover:text-indigo-400 transition-colors">Calcolatore ROI</a>
            <a href="#piani" className="hover:text-indigo-400 transition-colors">Piani & Tariffe</a>
            <a href="#funnel" className="hover:text-indigo-400 transition-colors">Richiedi Audit</a>
            <a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a>
          </div>

          <a
            href="#funnel"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-indigo-500/20 active:scale-95 cursor-pointer"
          >
            Inizia il Tuo Progetto
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-indigo-900/30 bg-radial from-indigo-950/40 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Garanzia Velocità Core Web Vitals 100/100
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Trasforma i Visitatori in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Clienti Paganti</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Sviluppiamo Landing Page e Web Application ultra-veloci in Next.js 15 e Astro, progettate scientificamente per massimizzare il ROI delle tue campagne pubblicitarie.
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 su oltre 45 progetti</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <TrendingUp className="w-4 h-4" /> +240% Tasso Medio di Conversione
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-4 h-4 text-indigo-400" /> Consegna Rapida in 7-14 Giorni
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section id="calcolatore" className="py-16 sm:py-20 bg-slate-900/50 border-b border-indigo-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Simulatore Finanziario Dinamico
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Quanto Fatturato Stai Perdendo con un Sito Lento?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Sposta i cursori con i parametri del tuo traffico per stimare l'impatto economico immediato.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            
            {/* Input Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Visitors */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300">Visitatori Unici Mensili</label>
                  <span className="text-sm font-extrabold font-mono text-indigo-400">
                    {monthlyVisitors.toLocaleString('it-IT')} visite/mese
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Conversion Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300">Tasso di Conversione Attuale</label>
                  <span className="text-sm font-extrabold font-mono text-amber-400">
                    {currentConversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Average Order Value / Lead Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300">Valore Medio per Cliente Acquisito</label>
                  <span className="text-sm font-extrabold font-mono text-emerald-400">
                    €{averageOrderValue}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
            </div>

            {/* Computed Output Box (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-indigo-500/30 space-y-4 shadow-xl">
              <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                Stima Rendimento con ScaleFlow:
              </div>

              <div>
                <div className="text-xs text-slate-400">Fatturato Aggiuntivo Annuo Stimato</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-0.5">
                  +€{extraAnnualRevenue.toLocaleString('it-IT')}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Lead Mensili Attuali:</span>
                  <span className="font-bold text-slate-200 font-mono">{currentLeads} contatti</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Nuovi Lead Potenziali:</span>
                  <span className="font-bold text-emerald-400 font-mono">{optimizedLeads} contatti (+{optimizedLeads - currentLeads})</span>
                </div>
              </div>

              <a
                href="#funnel"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/25 block text-center cursor-pointer"
              >
                <span>Genera Questi Risultati Ora</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-step Lead Funnel */}
      <section id="funnel" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Audit Gratuito & Preventivo</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Raccontaci il Tuo Progetto</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Compila il questionario interattivo per ricevere uno studio di fattibilità su misura in 24 ore.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {leadSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Richiesta Ricevuta con Successo!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Grazie <strong>{leadForm.fullName}</strong>. Il nostro team tecnico analizzerà la tua richiesta e ti ricontatterà via email/WhatsApp entro 24 ore lavorative.
              </p>
              <button
                onClick={() => {
                  setLeadSubmitted(false);
                  setLeadStep(1);
                }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Invia un'altra richiesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleNextLeadStep} className="space-y-6">
              
              {/* Step Indicators */}
              <div className="flex items-center justify-between text-xs font-bold pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${leadStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    1
                  </span>
                  <span className={leadStep === 1 ? 'text-white' : 'text-slate-500'}>Tipologia Progetto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${leadStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    2
                  </span>
                  <span className={leadStep === 2 ? 'text-white' : 'text-slate-500'}>Budget & Tempi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${leadStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    3
                  </span>
                  <span className={leadStep === 3 ? 'text-white' : 'text-slate-500'}>Dati di Contatto</span>
                </div>
              </div>

              {/* Step 1: Project Type */}
              {leadStep === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <label className="block text-xs font-bold text-slate-300">
                    Qual è l'obiettivo principale del tuo nuovo sito o applicazione?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'landing-page', title: 'Landing Page Alta Conversione', desc: 'Per campagne Google Ads & Meta' },
                      { id: 'realestate-portal', title: 'Sito Agenzia Immobiliare', desc: 'Con filtri avanzati, schede e mappa' },
                      { id: 'ecommerce-d2c', title: 'Mini E-Commerce / Negozio Online', desc: 'Vendita diretta prodotti fisici o digitali' },
                      { id: 'custom-webapp', title: 'Web App / Calcolatore / Portale', desc: 'Software personalizzato su misura' }
                    ].map(item => (
                      <div
                        key={item.id}
                        onClick={() => setLeadForm({ ...leadForm, projectType: item.id })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          leadForm.projectType === item.id
                            ? 'bg-indigo-500/15 border-indigo-500 text-white shadow-md'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-bold text-xs">{item.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Budget & Urgency */}
              {leadStep === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Budget Indicativo Previsto:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['€1.000 - €2.500', '€2.500 - €5.000', 'Oltre €5.000'].map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setLeadForm({ ...leadForm, budgetRange: b })}
                          className={`p-3 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                            leadForm.budgetRange === b
                              ? 'bg-indigo-600 border-indigo-500 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Tempistiche di Consegna Desiderate:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Urgente (7-10 gg)', 'Entro 30 giorni', 'Pianificazione Q3'].map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setLeadForm({ ...leadForm, timeline: t })}
                          className={`p-3 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                            leadForm.timeline === t
                              ? 'bg-indigo-600 border-indigo-500 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {leadStep === 3 && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Nome e Cognome *</label>
                      <input
                        type="text"
                        required
                        value={leadForm.fullName}
                        onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                        placeholder="Mario Rossi"
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Nome Azienda / Brand</label>
                      <input
                        type="text"
                        value={leadForm.company}
                        onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                        placeholder="Rossi S.r.l."
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Email Aziendale *</label>
                      <input
                        type="email"
                        required
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="mario@azienda.it"
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Telefono / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="+39 340 1234567"
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                {leadStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setLeadStep(leadStep - 1)}
                    className="text-xs text-slate-400 hover:text-white cursor-pointer"
                  >
                    ← Indietro
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  disabled={isSubmittingLead}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-md shadow-indigo-500/25 cursor-pointer"
                >
                  {isSubmittingLead ? (
                    <span>Invio in corso...</span>
                  ) : leadStep === 3 ? (
                    <>
                      <span>Invia Richiesta e Ricevi Proposta</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>Prosegui al Passo Successivo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="piani" className="py-16 sm:py-24 border-t border-indigo-900/30 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Investimento Trasparente</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Piani & Pacchetti di Crescita</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Nessun costo nascosto. Codice sorgente proprietario tuo al 100% e nessun vincolo di lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LANDING_PRICING_PLANS.map(plan => (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.isPopular
                    ? 'bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10 relative'
                    : 'bg-slate-900/50 border border-slate-800'
                }`}
              >
                <div>
                  {plan.badge && (
                    <span className="inline-block bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{plan.description}</p>

                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white font-mono">€{plan.monthlyPrice}</span>
                      <span className="text-xs text-slate-400">/mese gestione</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                      + €{plan.setupFee} setup una tantum
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#funnel"
                  className={`mt-8 w-full py-2.5 rounded-xl text-xs font-bold text-center transition-all block ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-500/25'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 border-t border-indigo-900/30 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Domande Frequenti</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Tutto Quello che Devi Sapere</h2>
          </div>

          <div className="space-y-3">
            {LANDING_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm text-white cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {openFaqIndex === idx && (
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        ScaleFlow High-Conversion Agency • Demo Landing Page pronta per Vercel by Marco Cerilli
      </footer>
    </div>
  );
};
