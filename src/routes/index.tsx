import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Brain,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileSearch,
  Lightbulb,
  Map,
  Minus,
  Plus,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";

// Insira aqui o checkout do Combo 4 em 1 quando ele estiver disponível.
// Enquanto estiver vazio, os botões levam à oferta sem redirecionar para outro produto.
const CHECKOUT_URL = "";
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
  if (!CHECKOUT_URL || typeof window === "undefined") return "#oferta";
  const checkoutUrl = new URL(CHECKOUT_URL);
  const landingPageParameters = new URLSearchParams(window.location.search);
  TRACKING_PARAMETERS.forEach((parameter) => {
    const value = landingPageParameters.get(parameter);
    if (value) checkoutUrl.searchParams.set(parameter, value);
  });
  return checkoutUrl.toString();
}

function useCheckoutUrl() {
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_URL || "#oferta");
  useEffect(() => setCheckoutUrl(buildCheckoutUrlWithTracking()), []);
  return checkoutUrl;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Combo Estratégia da Aprovação — 4 em 1 | Prof. Lucas MPC" },
      {
        name: "description",
        content:
          "Quatro cursos para organizar os estudos, usar inteligência artificial, evitar erros e tomar decisões melhores na prova. De R$188 por R$27.",
      },
      { property: "og:title", content: "Combo Estratégia da Aprovação — 4 em 1" },
      {
        property: "og:description",
        content:
          "Como Passar em Concursos, Método IA, Erros dos Concurseiros e Técnicas de Chute. Valor total R$188; oferta por R$27.",
      },
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
  const external = checkoutUrl.startsWith("http");
  return (
    <a
      href={checkoutUrl}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={[
        "btn-cta",
        size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "text-sm sm:text-base",
        className,
      ].join(" ")}
    >
      {children}
      <ChevronRight className="h-5 w-5" />
    </a>
  );
}

const courses = [
  {
    number: "01",
    icon: RouteIcon,
    title: "Como Passar em Concursos",
    promise: "Construa uma preparação com direção, organização e constância.",
    items: [
      "Escolha o concurso certo para o seu momento",
      "Organize rotina, metas e prioridades",
      "Melhore produtividade, memorização e revisão",
      "Desenvolva disciplina sem depender de motivação",
    ],
  },
  {
    number: "02",
    icon: Brain,
    title: "Método IA para Concursos",
    promise: "Use a inteligência artificial como ferramenta prática de estudo.",
    items: [
      "Crie mapas mentais, flashcards, áudios e resumos",
      "Analise editais e transforme conteúdos em questões",
      "Produza materiais personalizados em minutos",
      "Aprenda do zero, mesmo sem experiência com tecnologia",
    ],
  },
  {
    number: "03",
    icon: AlertTriangle,
    title: "Erros que os Concurseiros Costumam Cometer",
    promise: "Reconheça comportamentos que atrasam a preparação e saiba corrigi-los.",
    items: [
      "Identifique falhas de planejamento e execução",
      "Evite trocar de estratégia a todo momento",
      "Pare de confundir muitas horas com estudo eficiente",
      "Corrija hábitos que alimentam a verdadeira fórmula da reprovação",
    ],
  },
  {
    number: "04",
    icon: Target,
    title: "Técnicas de Chute",
    promise: "Tome decisões mais criteriosas quando não souber uma resposta.",
    items: [
      "Elimine alternativas improváveis com critérios",
      "Observe linguagem, estrutura e padrões da banca",
      "Compare opções semelhantes antes de decidir",
      "Combine pistas sem substituir o estudo do conteúdo",
    ],
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <JourneySection />
      <CourseDetailsSection />
      <BenefitsSection />
      <ValueSection />
      <AudienceSection />
      <TeacherSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      <SiteFooter />
      <FloatingMobileCTA />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary font-black text-primary-foreground shadow-glow">
            4x1
          </div>
          <div>
            <p className="font-display text-sm font-black sm:text-base">Estratégia da Aprovação</p>
            <p className="text-[10px] uppercase tracking-widest text-primary">Combo 4 em 1</p>
          </div>
        </div>
        <CTAButton className="text-xs sm:text-sm">Quero o combo</CTAButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles className="h-4 w-4" />
            OFERTA ESPECIAL • 4 CURSOS EM UM ÚNICO COMBO
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Conteúdo sozinho não basta. Você precisa de uma{" "}
            <span className="text-primary glow-text">estratégia completa</span> para estudar e fazer prova.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Aprenda a organizar sua preparação, usar a IA a seu favor, eliminar erros que
            atrasam seus resultados e tomar decisões melhores quando surgir uma questão difícil.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-2">
            {courses.map((course) => (
              <div key={course.title} className="flex items-center gap-3 rounded-xl border border-border bg-surface/70 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-semibold">{course.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Valor dos 4 cursos: <span className="line-through">R$188</span>
            </p>
            <div className="flex items-end justify-center gap-3">
              <span className="pb-2 text-lg font-bold text-primary">por apenas</span>
              <span className="font-display text-6xl font-black text-primary glow-text">R$27</span>
            </div>
            <p className="rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
              Você economiza R$161
            </p>
            <CTAButton size="lg">Quero os 4 cursos por R$27</CTAButton>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 7 dias</span>
              <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-primary" /> Pagamento único</span>
              <span className="flex items-center gap-1"><BookOpen className="h-4 w-4 text-primary" /> Acesso online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const pains = [
    "Começa a estudar sem saber exatamente o que priorizar",
    "Monta cronogramas impossíveis e abandona poucos dias depois",
    "Consome muito conteúdo, mas revisa e pratica pouco",
    "Troca de material ou estratégia sempre que surge uma novidade",
    "Usa a IA de forma superficial e recebe respostas genéricas",
    "Marca uma alternativa no escuro quando não sabe a questão",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">O problema real</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Você pode conhecer a matéria e ainda perder pontos por{" "}
          <span className="text-primary">falta de estratégia</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Preparação eficiente não é apenas assistir aulas. É saber planejar, aprender,
          revisar, corrigir decisões ruins e agir com critério sob pressão.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain) => (
          <div key={pain} className="card-surface flex items-start gap-3 p-5">
            <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <p className="text-sm">{pain}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="card-surface relative overflow-hidden p-8 sm:p-12">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Uma jornada completa</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Quatro habilidades que se <span className="text-primary">complementam</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada curso resolve uma parte da preparação. Juntos, eles formam um sistema
              para você estudar com mais direção e chegar mais preparado à prova.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div key={course.title} className="rounded-2xl border border-border bg-background/70 p-5">
                <div className="flex items-center justify-between">
                  <course.icon className="h-7 w-7 text-primary" />
                  <span className="font-display text-2xl font-black text-primary/40">{course.number}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{course.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{course.promise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseDetailsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">O que você recebe</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Um combo. <span className="text-primary">Quatro cursos completos.</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {courses.map((course) => (
          <article key={course.title} className="card-surface p-7 transition hover:-translate-y-1 hover:border-primary/50">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <course.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Curso {course.number} • Valor R$47</p>
                <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">{course.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{course.promise}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {course.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <CTAButton size="lg">Quero a preparação completa</CTAButton>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { icon: Map, title: "Direção", text: "Saiba o que fazer e pare de estudar no improviso." },
    { icon: Brain, title: "Aprendizagem", text: "Use IA para transformar conteúdos em materiais úteis." },
    { icon: FileSearch, title: "Autocorreção", text: "Reconheça falhas antes que elas consumam seu tempo." },
    { icon: Target, title: "Decisão", text: "Analise alternativas com mais critério na hora da prova." },
    { icon: TrendingUp, title: "Produtividade", text: "Concentre energia no que realmente move sua preparação." },
    { icon: ClipboardList, title: "Consistência", text: "Construa uma rotina possível de manter." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          O que muda quando você conecta <span className="text-primary">método e execução</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="card-surface p-6">
            <benefit.icon className="h-7 w-7 text-primary" />
            <h3 className="mt-4 font-display text-lg font-bold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-8 opacity-80">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Comprando separadamente</p>
          <div className="mt-6 space-y-4">
            {courses.map((course) => (
              <div key={course.title} className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm">
                <span>{course.title}</span>
                <strong>R$47</strong>
              </div>
            ))}
          </div>
          <p className="mt-6 text-right font-display text-4xl font-black line-through">R$188</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-primary/10 p-8 shadow-glow">
          <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-4 py-2 text-xs font-black text-primary-foreground">
            MELHOR ESCOLHA
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Combo 4 em 1</p>
          <h3 className="mt-4 font-display text-3xl font-black">Estratégia da Aprovação</h3>
          <p className="mt-4 text-muted-foreground">Os quatro cursos reunidos em uma única oferta.</p>
          <p className="mt-8 text-sm text-muted-foreground">Pagamento único de</p>
          <p className="font-display text-6xl font-black text-primary glow-text">R$27</p>
          <p className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-black text-primary-foreground">
            Economia real de R$161
          </p>
          <div className="mt-8"><CTAButton size="lg">Quero economizar R$161</CTAButton></div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const forYou = [
    "Quer organizar a preparação com um método claro",
    "Estuda para concursos e sente que poderia render mais",
    "Quer usar IA sem depender de conhecimentos técnicos",
    "Repete erros e precisa ajustar hábitos de estudo",
    "Quer aprender critérios para questões em que está em dúvida",
  ];
  const notForYou = [
    "Procura promessa de aprovação sem estudar",
    "Não pretende aplicar nenhuma das estratégias",
    "Acredita que técnicas de chute substituem conhecimento",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-8">
          <CheckCircle2 className="h-10 w-10 text-primary" />
          <h2 className="mt-4 font-display text-2xl font-bold">Este combo é para você se...</h2>
          <ul className="mt-6 space-y-3">
            {forYou.map((item) => <li key={item} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{item}</li>)}
          </ul>
        </div>
        <div className="card-surface p-8">
          <X className="h-10 w-10 text-destructive" />
          <h2 className="mt-4 font-display text-2xl font-bold">Não é para você se...</h2>
          <ul className="mt-6 space-y-3">
            {notForYou.map((item) => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><X className="h-5 w-5 shrink-0 text-destructive" />{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TeacherSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="card-surface grid gap-8 p-8 sm:grid-cols-[auto_1fr] sm:items-center sm:p-12">
        <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow sm:mx-0">
          <BookOpen className="h-14 w-14" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Seu professor</p>
          <h2 className="mt-2 font-display text-3xl font-bold">Prof. Lucas MPC</h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Professor de Matemática e produtor de conteúdos para concursos públicos.
            Neste combo, reúne estratégias de preparação, ferramentas de inteligência
            artificial, correção de erros e análise de alternativas em uma trilha prática.
          </p>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="oferta" className="mx-auto max-w-4xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border-2 border-primary/60 bg-gradient-to-b from-surface to-background p-8 text-center shadow-glow-strong sm:p-12">
        <div className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <p className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-primary">
            Oferta especial do Combo 4 em 1
          </p>
          <h2 className="mt-5 font-display text-3xl font-black sm:text-5xl">Estratégia da Aprovação</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Organize seus estudos, use IA, evite erros recorrentes e amplie seu repertório de decisão para a prova.
          </p>
          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {courses.map((course) => (
              <li key={course.title} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{course.title}</span>
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" />Pagamento único</li>
            <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" />Garantia de 7 dias</li>
          </ul>
          <div className="mt-10">
            <p className="text-sm text-muted-foreground">De <span className="line-through">R$188</span> por</p>
            <p className="mt-1 font-display text-7xl font-black text-primary glow-text">R$27</p>
            <p className="mt-3 font-bold text-primary">Economize R$161 e receba os quatro cursos</p>
          </div>
          <div className="mt-8">
            <CTAButton size="lg" className="w-full sm:w-auto">Garantir o Combo 4 em 1</CTAButton>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Pagamento seguro processado pela Hotmart</p>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="card-surface grid gap-6 p-8 sm:grid-cols-[auto_1fr] sm:items-center sm:p-12">
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border-4 border-primary bg-primary/10 text-primary sm:mx-0">
          <ShieldCheck className="h-14 w-14" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold">Você tem 7 dias para avaliar</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Acesse o conteúdo e conheça a proposta. Se dentro do prazo legal perceber
            que o combo não é adequado para você, solicite o reembolso pelos canais
            disponibilizados pela Hotmart, conforme as condições da plataforma.
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
      <button onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="text-sm font-semibold sm:text-base">{q}</span>
        {open ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-primary" />}
      </button>
      {open && <div className="border-t border-border px-5 pb-5 pt-4 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { q: "São realmente quatro cursos?", a: "Sim. A oferta reúne Como Passar em Concursos, Método IA para Concursos, Erros que os Concurseiros Costumam Cometer e Técnicas de Chute." },
    { q: "O valor de R$27 é mensal?", a: "Não. É um pagamento único pelo combo, sem mensalidade." },
    { q: "Serve para qualquer concurso?", a: "As estratégias são gerais e podem apoiar candidatos de diferentes áreas e bancas. O conteúdo específico do edital continua sendo indispensável." },
    { q: "Preciso saber usar inteligência artificial?", a: "Não. O Método IA começa pelos primeiros passos e mostra aplicações práticas para a rotina de estudos." },
    { q: "As técnicas de chute garantem acertos?", a: "Não. Elas ensinam critérios de análise para situações de dúvida, mas não substituem estudo nem garantem aprovação ou acerto." },
    { q: "O curso garante minha aprovação?", a: "Não existe garantia séria de aprovação. O combo oferece métodos e ferramentas; o resultado depende da aplicação, do estudo e das condições de cada concurso." },
    { q: "Tenho garantia de compra?", a: "Sim. A compra conta com garantia de 7 dias, conforme as condições da Hotmart." },
  ];
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <Lightbulb className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <Sparkles className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-6 font-display text-3xl font-black sm:text-5xl">
          Quatro cursos de R$47. <span className="text-primary glow-text">Todos por R$27.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Dê o próximo passo com uma preparação mais organizada, consciente e estratégica.
        </p>
        <div className="mt-8"><CTAButton size="lg">Quero o Combo Estratégia da Aprovação</CTAButton></div>
        <p className="mt-4 text-xs text-muted-foreground">Pagamento único • Garantia de 7 dias</p>
      </div>
    </section>
  );
}

function FloatingMobileCTA() {
  const [show, setShow] = useState(false);
  const checkoutUrl = useCheckoutUrl();
  const external = checkoutUrl.startsWith("http");
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 sm:hidden">
      <a href={checkoutUrl} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="btn-cta w-full text-sm">
        4 cursos por R$27 <ChevronRight className="h-5 w-5" />
      </a>
    </div>
  );
}
