import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Award,
  Zap,
  BookOpen,
  Headphones,
  Network,
  Layers,
  FileText,
  Video,
  ClipboardList,
  Presentation,
  BarChart3,
  Target,
  Sparkles,
  Clock,
  TrendingUp,
  X,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";

// Link-base do checkout — todos os botões apontam para aqui.
const CHECKOUT_URL =
  "https://pay.hotmart.com/M105713377D?off=qpg8f4yx&checkoutMode=10";

// Parâmetros de rastreamento que devem continuar na URL do checkout.
const TRACKING_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "sck",
  "fbclid",
] as const;

function buildCheckoutUrlWithTracking() {
  if (typeof window === "undefined") {
    return CHECKOUT_URL;
  }

  const checkoutUrl = new URL(CHECKOUT_URL);
  const landingPageParameters = new URLSearchParams(window.location.search);

  TRACKING_PARAMETERS.forEach((parameter) => {
    const value = landingPageParameters.get(parameter);

    if (value) {
      checkoutUrl.searchParams.set(parameter, value);
    }
  });

  return checkoutUrl.toString();
}

function useCheckoutUrl() {
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_URL);

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrlWithTracking());
  }, []);

  return checkoutUrl;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método IA para Concursos | Estude com Inteligência Artificial por R$27" },
      {
        name: "description",
        content:
          "Aprenda a usar IA para estudar para concursos com mais eficiência. Gere mapas mentais, flashcards, áudios, vídeos e relatórios em minutos. Acesso por R$27.",
      },
      { property: "og:title", content: "Método IA para Concursos | Estude com Inteligência Artificial por R$27" },
      {
        property: "og:description",
        content:
          "Aprenda a usar IA para estudar para concursos com mais eficiência. Gere mapas mentais, flashcards, áudios, vídeos e relatórios em minutos. Acesso por R$27.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function CTAButton({
  children,
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const checkoutUrl = useCheckoutUrl();

  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta ${size === "lg" ? "text-base px-8 py-4 sm:text-lg" : "text-sm sm:text-base"} ${className}`}
    >
      {children}
      <ChevronRight className="h-5 w-5" />
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VSLSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <CurriculumSection />
      <TransformationSection />
      <AudienceSection />
      <TeacherSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <SiteFooter />
      <FloatingMobileCTA />
    </div>
  );
}

function Navbar() {
  const checkoutUrl = useCheckoutUrl();

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-black shadow-glow">
            IA
          </div>
          <span className="hidden font-display text-sm font-bold sm:inline">
            Método IA para Concursos
          </span>
        </div>
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-xs sm:text-sm"
        >
          Quero acessar
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            NOVO • Método atualizado para 2026
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Use a <span className="text-primary glow-text">Inteligência Artificial</span>{" "}
            para aprender mais em menos tempo e estudar com muito mais{" "}
            <span className="text-primary glow-text">eficiência</span> para concursos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Aprenda, na prática, a usar IA para gerar materiais de estudo, análises,
            áudios, mapas mentais, flashcards, questões, vídeos e relatórios — mesmo
            sem saber nada de tecnologia.
          </p>

          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {[
              "Aprenda mais rápido e retenha melhor",
              "Revise com inteligência, não com força",
              "Crie materiais em minutos com IA",
              "Método aplicável a qualquer concurso",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-muted-foreground line-through">De R$47</span>
              <span className="font-display text-4xl font-black text-primary glow-text sm:text-5xl">
                R$27
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Pagamento único • Acesso imediato
            </p>
            <CTAButton size="lg">Quero aproveitar a oferta por R$27</CTAButton>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 7 dias
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" /> Certificado incluso
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-primary" /> Acesso imediato
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VSLSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
        Assista antes de continuar
      </p>
      <h2 className="mt-3 text-center font-display text-2xl font-bold sm:text-3xl">
        Descubra como usar IA para acelerar sua preparação para concursos
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/ZkaNfaT2tZ4?rel=0"
            title="Método IA para Concursos"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <CTAButton>Quero estudar com IA</CTAButton>
      </div>
    </section>
  );
}

function ProblemSection() {
  const pains = [
    { icon: Clock, text: "Você estuda muitas horas e sente que rende pouco" },
    { icon: Brain, text: "Revisa, revisa e ainda assim esquece o conteúdo" },
    { icon: ClipboardList, text: "Perde tempo demais organizando material de estudo" },
    { icon: FileText, text: "Não sabe qual a melhor forma de revisar cada matéria" },
    { icon: TrendingUp, text: "Dificuldade em transformar teoria em prática nas questões" },
    { icon: Layers, text: "Excesso de informação, pouca clareza sobre por onde começar" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Você não tem <span className="text-primary">falta de esforço</span>.
          <br />
          Você tem falta de <span className="text-primary">método</span>.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Estudar para concursos hoje sem usar IA é como continuar escrevendo à mão
          enquanto todo mundo já está usando o computador.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((p) => (
          <div
            key={p.text}
            className="card-surface flex items-start gap-3 p-5 transition hover:border-primary/50"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <p className="text-sm text-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="card-surface relative overflow-hidden p-8 sm:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Rocket className="h-3.5 w-3.5" /> A SOLUÇÃO
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Apresentando o <span className="text-primary">Método IA para Concursos</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Um curso passo a passo que mostra como usar a inteligência artificial
              nos seus estudos de forma objetiva, prática e aplicável — mesmo que
              você nunca tenha usado IA antes.
            </p>
            <p className="mt-4 text-muted-foreground">
              Aqui você <strong className="text-foreground">não vai aprender teoria sobre IA</strong>.
              Você vai aprender a <strong className="text-primary">usar a IA para estudar de verdade</strong>:
              transformar conteúdos em mapas mentais, flashcards, áudios, vídeos,
              análises de edital e muito mais.
            </p>
            <div className="mt-6">
              <CTAButton>Quero o Método IA para Concursos</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Brain, label: "IA Aplicada" },
              { icon: Headphones, label: "Áudios" },
              { icon: Network, label: "Mapas Mentais" },
              { icon: Layers, label: "Flashcards" },
              { icon: Video, label: "Vídeos" },
              { icon: FileText, label: "Relatórios" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background/50 p-4 text-center"
              >
                <t.icon className="h-8 w-8 text-primary" />
                <span className="text-xs font-semibold">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { icon: BookOpen, title: "Estude com mais qualidade", text: "Foco no que realmente importa para sua prova." },
    { icon: Zap, title: "Aprenda mais rápido", text: "Absorva conteúdos densos em muito menos tempo." },
    { icon: Brain, title: "Revise com inteligência", text: "Revisões estratégicas que fixam o conteúdo." },
    { icon: Layers, title: "Organize seus estudos", text: "Materiais e cronogramas sempre à mão." },
    { icon: Sparkles, title: "Produza em minutos", text: "Crie materiais completos com poucos cliques." },
    { icon: Target, title: "IA aplicada a concursos", text: "Prompts prontos e adaptados ao seu edital." },
    { icon: TrendingUp, title: "Mais produtividade", text: "Ganhe horas por semana no seu ciclo de estudo." },
    { icon: ClipboardList, title: "Clareza no que estudar", text: "Chega de perder tempo com o que não cai." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          O que a IA vai fazer <span className="text-primary">pelos seus estudos</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="card-surface p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
              <b.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CurriculumSection() {
  const modules = [
    {
      icon: Sparkles,
      title: "Módulo 1 — Primeiros passos com IA",
      items: [
        "Como adicionar fontes na IA",
        "Configuração e primeiros passos",
        "Alteração de idioma e modo claro/escuro",
      ],
    },
    {
      icon: Brain,
      title: "Módulo 2 — IA aplicada ao estudo reverso",
      items: [
        "O que é estudo reverso com IA",
        "Como usar a IA para revisar do fim para o começo",
        "Exemplos práticos aplicados a concursos",
      ],
    },
    {
      icon: Headphones,
      title: "Módulo 3 — Áudios, debates e explicações",
      items: [
        "Geração de análises detalhadas em áudio",
        "Criação de debates em áudio entre \"especialistas\"",
        "Estude enquanto caminha, dirige ou treina",
      ],
    },
    {
      icon: Network,
      title: "Módulo 4 — Mapas mentais, flashcards e vídeos",
      items: [
        "Geração de mapas mentais em segundos",
        "Criação de flashcards para revisão espaçada",
        "Geração de vídeos explicativos + exemplo prático",
      ],
    },
    {
      icon: ClipboardList,
      title: "Módulo 5 — Editais, testes e questões",
      items: [
        "Análise de editais com IA",
        "Demonstração prática de análise de edital",
        "Prompts para gerar questões inéditas",
        "Prompts para resolver e explicar questões",
      ],
    },
    {
      icon: Presentation,
      title: "Módulo 6 — Apresentações, infográficos, tabelas e relatórios",
      items: [
        "Criação de apresentações",
        "Produção de infográficos",
        "Organização de informações em tabelas",
        "Geração de relatórios completos",
      ],
    },
    {
      icon: Target,
      title: "Módulo 7 — Desafio final prático",
      items: [
        "Teste final: aplique tudo o que aprendeu",
        "Estudo de caso completo com IA",
        "Certificado de conclusão",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Conteúdo do Curso
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          O que você <span className="text-primary">vai aprender</span> na prática
        </h2>
        <p className="mt-4 text-muted-foreground">
          7 módulos objetivos, sem enrolação, com aplicação imediata nos seus estudos.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {modules.map((m) => (
          <div
            key={m.title}
            className="card-surface p-6 transition hover:border-primary/50"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold sm:text-lg">{m.title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {m.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <CTAButton size="lg">Quero acessar todos os módulos</CTAButton>
      </div>
    </section>
  );
}

function TransformationSection() {
  const results = [
    "Transformar qualquer conteúdo em mapa mental",
    "Criar flashcards em minutos para revisão",
    "Gerar análises em áudio de qualquer matéria",
    "Criar debates em áudio sobre um tema",
    "Produzir vídeos explicativos personalizados",
    "Analisar editais e priorizar o que estudar",
    "Montar testes e questões inéditas",
    "Criar relatórios e apresentações de estudo",
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="card-surface relative overflow-hidden p-8 sm:p-12">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Transforme qualquer conteúdo de concurso em{" "}
              <span className="text-primary glow-text">materiais personalizados</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Depois de aplicar o método, você será capaz de:
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {results.map((r) => (
              <div
                key={r}
                className="flex items-start gap-3 rounded-lg bg-background/50 p-4 text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const forYou = [
    "Quem estuda para concursos públicos",
    "Quem quer usar IA de forma prática nos estudos",
    "Quem sente que estuda muito e rende pouco",
    "Quem quer revisar melhor e esquecer menos",
    "Quem quer ganhar produtividade real",
    "Quem quer um método simples e aplicável",
  ];
  const notForYou = [
    "Quem procura fórmula mágica de aprovação",
    "Quem não quer aplicar nenhum método",
    "Quem não estuda para concursos",
    "Quem espera resultado sem colocar em prática",
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold">Este curso é para você se...</h3>
          </div>
          <ul className="mt-6 space-y-3">
            {forYou.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-surface p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-destructive/15 text-destructive">
              <X className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold">Este curso não é para você se...</h3>
          </div>
          <ul className="mt-6 space-y-3">
            {notForYou.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TeacherSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="card-surface p-8 sm:p-12">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow sm:mx-0">
            <BookOpen className="h-14 w-14" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quem vai te ensinar esse método
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Prof. Lucas MPC
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Professor de Matemática e produtor de conteúdos voltados à preparação
              para concursos públicos. Criador do Método IA para Concursos, com foco
              na aplicação prática da inteligência artificial para melhorar a
              organização, a revisão e o aproveitamento dos estudos.
            </p>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              O objetivo é simples: ajudar você a estudar com mais inteligência e
              menos desperdício de tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="oferta" className="mx-auto max-w-4xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border-2 border-primary/50 bg-gradient-to-b from-surface to-background p-8 shadow-glow-strong sm:p-12">
        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Oferta atual de lançamento
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Método IA para Concursos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Acesso completo ao curso, com certificado e garantia.
          </p>

          <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {[
              "Acesso completo ao curso",
              "Todos os módulos e prompts prontos",
              "Certificado de conclusão",
              "Garantia de 7 dias",
              "Pagamento único — sem mensalidade",
              "Acesso pelo computador ou celular",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="text-sm text-muted-foreground line-through">De R$47</p>
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="text-2xl font-bold text-primary">R$</span>
              <span className="font-display text-6xl font-black text-primary glow-text sm:text-7xl">
                27
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Pagamento único • Acesso imediato
            </p>
          </div>

          <div className="mt-8">
            <CTAButton size="lg" className="w-full sm:w-auto">
              Garantir minha vaga por R$27
            </CTAButton>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            🔒 Pagamento 100% seguro processado pela Hotmart
          </p>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="card-surface grid gap-6 p-8 sm:grid-cols-[auto_1fr] sm:items-center sm:p-12">
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border-4 border-primary bg-primary/10 text-primary shadow-glow sm:mx-0">
          <ShieldCheck className="h-14 w-14" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Garantia de 7 dias
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Você pode acessar o curso, assistir às aulas e aplicar o método. Se em
            até 7 dias após a compra perceber que o curso não é para você, poderá
            solicitar o reembolso diretamente pelos canais disponibilizados pela
            Hotmart, conforme as condições da plataforma.
          </p>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A garantia permite avaliar o conteúdo com tranquilidade dentro do prazo.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-surface overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-sm font-semibold sm:text-base">{q}</span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-primary" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-primary" />
        )}
      </button>
      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4 text-sm text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Preciso entender de tecnologia para fazer o curso?",
      a: "Não. O curso foi feito para pessoas comuns, que nunca usaram IA antes. Cada passo é explicado do zero.",
    },
    {
      q: "O curso serve para qualquer concurso?",
      a: "Sim. O método é aplicável a qualquer concurso público, pois foca em como estudar melhor com IA — independente da matéria ou banca.",
    },
    {
      q: "O acesso é online?",
      a: "Sim. 100% online. Você acessa de qualquer lugar, na hora que quiser.",
    },
    {
      q: "O pagamento é único?",
      a: "Sim. Você paga apenas uma vez R$27 e tem acesso ao curso. Sem mensalidade, sem taxa oculta.",
    },
    {
      q: "Tenho garantia?",
      a: "Sim. Você tem 7 dias para solicitar o reembolso pelos canais disponibilizados pela Hotmart, conforme as condições da plataforma.",
    },
    {
      q: "Recebo certificado?",
      a: "Sim. Ao concluir o curso você recebe um certificado de conclusão.",
    },
    {
      q: "Posso assistir pelo celular?",
      a: "Sim. A plataforma é 100% responsiva. Assista pelo celular, tablet ou computador.",
    },
    {
      q: "O curso ensina aplicação prática da IA?",
      a: "Sim. O foco não é teoria, e sim mostrar exatamente como usar a IA para estudar de verdade: gerar materiais, revisar, analisar editais e muito mais.",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Ainda com dúvidas? Aqui estão as respostas.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <BarChart3 className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-5xl">
          Comece agora a estudar com{" "}
          <span className="text-primary glow-text">mais inteligência</span> usando IA
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Garanta seu acesso ao Método IA para Concursos por apenas R$27 e transforme
          a forma como você estuda a partir de hoje.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-baseline gap-3">
            <span className="text-sm text-muted-foreground line-through">De R$47</span>
            <span className="font-display text-5xl font-black text-primary glow-text">
              R$27
            </span>
          </div>
          <CTAButton size="lg">Quero acessar agora</CTAButton>
          <p className="text-xs text-muted-foreground">
            Pagamento único • Garantia de 7 dias • Certificado incluso
          </p>
        </div>
      </div>
    </section>
  );
}

function FloatingMobileCTA() {
  const [show, setShow] = useState(false);
  const checkoutUrl = useCheckoutUrl();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 sm:hidden">
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta w-full text-sm"
      >
        Quero acessar por R$27
        <ChevronRight className="h-5 w-5" />
      </a>
    </div>
  );
}
