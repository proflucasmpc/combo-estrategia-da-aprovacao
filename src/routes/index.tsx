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
  Monitor,
  Play,
  Plus,
  Quote,
  Route as RouteIcon,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";

const CHECKOUT_URL = "https://pay.hotmart.com/Q107598512K?checkoutMode=10";
const HERO_VSL_URL = "/vsl-combo-estrategia-aprovacao.mp4";
const PROFESSOR_PHOTO_SOURCE_URL =
  "https://raw.githubusercontent.com/proflucasmpc/turma-coletiva-academia-matematica/main/index.html";
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
  if (typeof window === "undefined") return CHECKOUT_URL;
  const checkoutUrl = new URL(CHECKOUT_URL);
  const landingPageParameters = new URLSearchParams(window.location.search);
  TRACKING_PARAMETERS.forEach((parameter) => {
    const value = landingPageParameters.get(parameter);
    if (value) checkoutUrl.searchParams.set(parameter, value);
  });
  return checkoutUrl.toString();
}

function useCheckoutUrl() {
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_URL);
  useEffect(() => setCheckoutUrl(buildCheckoutUrlWithTracking()), []);
  return checkoutUrl;
}

function useProfessorPhoto() {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPhoto() {
      try {
        const response = await fetch(PROFESSOR_PHOTO_SOURCE_URL, { cache: "force-cache" });
        if (!response.ok) return;
        const html = await response.text();
        const match = html.match(
          /<div class="teacher-photo">[\s\S]*?<img src="(data:image\/webp;base64,[^"]+)"/,
        );
        if (!cancelled && match?.[1]) setPhoto(match[1]);
      } catch (error) {
        console.error("Não foi possível carregar a foto do Prof. Lucas.", error);
      }
    }

    void loadPhoto();
    return () => {
      cancelled = true;
    };
  }, []);

  return photo;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Combo Estratégia da Aprovação — 4 Cursos Online | Prof. Lucas MPC" },
      {
        name: "description",
        content:
          "Quatro cursos online em vídeo para organizar os estudos, usar inteligência artificial, corrigir erros e tomar decisões melhores na prova. De R$188 por R$27.",
      },
      { property: "og:title", content: "Combo Estratégia da Aprovação — 4 Cursos Online" },
      {
        property: "og:description",
        content:
          "Como Passar em Concursos, Método IA, Erros dos Concurseiros e Técnicas de Chute. Aulas em vídeo na plataforma por R$27.",
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
  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
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
    stage: "Planejar",
    icon: RouteIcon,
    title: "Como Passar em Concursos",
    demoVideoId: "IdlCW2Ltw5Q",
    promise: "Construa uma preparação com direção, organização e constância.",
    lessons: ["O caminho da aprovação", "Planejamento estratégico", "Métodos de estudo", "Revisão e constância"],
    items: [
      "Escolha o concurso certo para o seu momento",
      "Organize rotina, metas e prioridades",
      "Melhore produtividade, memorização e revisão",
      "Desenvolva disciplina sem depender de motivação",
    ],
  },
  {
    number: "02",
    stage: "Potencializar com IA",
    icon: Brain,
    title: "Método IA para Concursos",
    demoVideoId: "SWhp5h8rDCM",
    promise: "Use a inteligência artificial como ferramenta prática de estudo.",
    lessons: ["Primeiros passos com IA", "Prompts para estudar", "Resumos e questões", "Planejamento com IA"],
    items: [
      "Crie mapas mentais, flashcards, áudios e resumos",
      "Analise editais e transforme conteúdos em questões",
      "Produza materiais personalizados em minutos",
      "Aprenda do zero, mesmo sem experiência com tecnologia",
    ],
  },
  {
    number: "03",
    stage: "Corrigir erros",
    icon: AlertTriangle,
    title: "Erros que os Concurseiros Costumam Cometer",
    demoVideoId: "MCOCwILz8wE",
    promise: "Reconheça comportamentos que atrasam a preparação e saiba corrigi-los.",
    lessons: ["Erros mais comuns", "Procrastinação", "Revisão insuficiente", "Disciplina e rotina"],
    items: [
      "Identifique falhas de planejamento e execução",
      "Evite trocar de estratégia a todo momento",
      "Pare de confundir muitas horas com estudo eficiente",
      "Corrija hábitos que alimentam a verdadeira fórmula da reprovação",
    ],
  },
  {
    number: "04",
    stage: "Decidir na prova",
    icon: Target,
    title: "Técnicas de Chute",
    demoVideoId: "3Q25R8m1Jcw",
    promise: "Tome decisões mais criteriosas quando não souber uma resposta.",
    lessons: ["Mentalidade e estratégia", "Análise da questão", "Eliminação de alternativas", "Quando não chutar"],
    items: [
      "Elimine alternativas improváveis com critérios",
      "Observe linguagem, estrutura e padrões da banca",
      "Compare opções semelhantes antes de decidir",
      "Combine pistas sem substituir o estudo do conteúdo",
    ],
  },
];

const testimonialVideos = [
  { id: "sS2bS046uTk", label: "Depoimento 01" },
  { id: "ZZpsUE9vAFE", label: "Depoimento 02" },
  { id: "fE56EfppMe8", label: "Depoimento 03" },
  { id: "UTjIZTanhWs", label: "Depoimento 04" },
  { id: "zGbXMEXi1Sw", label: "Depoimento 05" },
  { id: "QnfS0yuSEZQ", label: "Depoimento 06" },
  { id: "he2WpV4G2oE", label: "Depoimento 07" },
  { id: "OMtvBhXKNMo", label: "Depoimento 08" },
];

type Course = (typeof courses)[number];

function ProfessorImage({ photo, className = "" }: { photo: string | null; className?: string }) {
  if (photo) {
    return <img src={photo} alt="Prof. Lucas MPC" className={`h-full w-full object-cover object-top ${className}`} />;
  }

  return (
    <div className={`grid h-full w-full place-items-center bg-gradient-to-br from-primary/30 to-surface text-2xl font-black text-primary ${className}`}>
      MPC
    </div>
  );
}

function YouTubePreview({
  videoId,
  title,
  badge,
  compact = false,
}: {
  videoId: string;
  title: string;
  badge?: string;
  compact?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden bg-[#061121] text-left"
      aria-label={`Assistir ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/15 to-black/10" />
      {badge && (
        <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-black/70 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-primary backdrop-blur">
          {badge}
        </span>
      )}
      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition group-hover:scale-110 sm:h-14 sm:w-14">
        <Play className="ml-1 h-5 w-5 fill-current sm:h-6 sm:w-6" />
      </span>
      {!compact && (
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Clique para assistir</p>
          <p className="mt-1 font-display text-base font-black text-white sm:text-lg">{title}</p>
        </div>
      )}
    </button>
  );
}


function TestimonialVideo({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden bg-black text-left"
      aria-label={`Assistir ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hq2.jpg`}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-black/5 transition group-hover:bg-transparent" />
      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition group-hover:scale-110 sm:h-14 sm:w-14">
        <Play className="ml-1 h-5 w-5 fill-current sm:h-6 sm:w-6" />
      </span>
    </button>
  );
}

function CoursePlatformMockup({ course }: { course: Course }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary/25 bg-[#040b16] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#071427] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-xs font-black text-primary-foreground">L</div>
          <span className="text-xs font-bold text-white sm:text-sm">Prof. Lucas MPC</span>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
          Curso online
        </span>
      </div>

      <div className="grid sm:grid-cols-[minmax(0,1fr)_155px]">
        <div className="bg-[#061121]">
          <YouTubePreview
            videoId={course.demoVideoId}
            title={`Aula demonstrativa — ${course.title}`}
            badge="Aula demonstrativa"
            compact
          />
          <div className="border-t border-white/10 bg-[#050e1c] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Aula em vídeo</p>
            <div className="mt-1 flex items-center justify-between gap-3">
              <h4 className="font-display text-base font-black text-white sm:text-lg">{course.title}</h4>
              <span className="shrink-0 text-[9px] text-white/45">Demonstração real</span>
            </div>
          </div>
        </div>

        <div className="hidden border-l border-white/10 bg-[#071427] p-3 sm:block">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/55">Conteúdo do curso</p>
          <div className="mt-3 space-y-2">
            {course.lessons.map((lesson, index) => (
              <div key={lesson} className={`rounded-lg border px-2.5 py-2 ${index === 0 ? "border-primary/40 bg-primary/10" : "border-white/10 bg-white/[0.03]"}`}>
                <div className="flex items-start gap-2">
                  <span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[8px] ${index === 0 ? "bg-primary text-primary-foreground" : "bg-white/10 text-white/60"}`}>
                    {index + 1}
                  </span>
                  <span className="text-[10px] leading-snug text-white/80">{lesson}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-t border-white/10 bg-[#050e1c] text-center">
        <div className="px-2 py-3 text-[9px] font-bold uppercase tracking-wide text-white/65">Aulas em vídeo</div>
        <div className="border-x border-white/10 px-2 py-3 text-[9px] font-bold uppercase tracking-wide text-white/65">Plataforma digital</div>
        <div className="px-2 py-3 text-[9px] font-bold uppercase tracking-wide text-white/65">Estude no seu ritmo</div>
      </div>
    </div>
  );
}

function BundlePlatformMockup() {
  return (
    <div className="relative rounded-[28px] border border-primary/30 bg-[#020817] p-3 shadow-2xl shadow-black/50 sm:p-4">
      <div className="absolute -inset-10 -z-10 rounded-full bg-primary/10 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050f20]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#071427] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-black text-primary-foreground">4</div>
            <div>
              <p className="text-xs font-black text-white">Combo Estratégia da Aprovação</p>
              <p className="text-[9px] uppercase tracking-widest text-primary">4 cursos online em vídeo</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 text-white/50 sm:flex">
            <Monitor className="h-4 w-4" />
            <Smartphone className="h-4 w-4" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-b border-white/10 p-3 sm:grid-cols-4">
          {courses.map((course) => (
            <div key={course.title} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5">
              <course.icon className="h-4 w-4 text-primary" />
              <p className="mt-2 text-[9px] font-bold leading-tight text-white/90">{course.title}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-[minmax(0,1fr)_180px]">
          <div className="relative min-h-[330px] overflow-hidden bg-black sm:min-h-[390px]">
            <video
              className="absolute inset-0 h-full w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label="VSL do Combo Estratégia da Aprovação"
            >
              <source src={HERO_VSL_URL} type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
            <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-primary/30 bg-black/65 px-3 py-1 text-[10px] font-bold text-primary backdrop-blur">
              VSL oficial do combo
            </div>
          </div>

          <div className="hidden border-l border-white/10 bg-[#071427] p-4 md:block">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">Sua jornada</p>
            <div className="mt-4 space-y-3">
              {courses.map((course, index) => (
                <div key={course.stage} className="flex gap-2.5">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-[10px] font-black text-primary">{index + 1}</span>
                  <div>
                    <p className="text-[10px] font-bold text-white">{course.stage}</p>
                    <p className="mt-0.5 text-[9px] leading-snug text-white/45">{course.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-primary/25 bg-primary/10 p-3">
              <p className="text-[10px] font-black uppercase tracking-wide text-primary">Acesso pela plataforma</p>
              <p className="mt-1 text-[9px] leading-relaxed text-white/60">Assista no computador ou celular após a confirmação do pagamento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  const professorPhoto = useProfessorPhoto();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <JourneySection />
      <CourseDetailsSection />
      <DeliverySection />
      <BenefitsSection />
      <ValueSection />
      <AudienceSection />
      <TeacherSection photo={professorPhoto} />
      <TestimonialsSection />
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
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary font-black text-primary-foreground shadow-glow">4x1</div>
          <div>
            <p className="font-display text-sm font-black sm:text-base">Estratégia da Aprovação</p>
            <p className="text-[10px] uppercase tracking-widest text-primary">4 cursos online</p>
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
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24 lg:pt-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles className="h-4 w-4" />
            4 CURSOS ONLINE EM VÍDEO • PAGAMENTO ÚNICO
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[3.5rem]">
            Pare de estudar no improviso. Construa uma{" "}
            <span className="text-primary glow-text">estratégia completa</span> para a sua aprovação.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Quatro cursos que se complementam para você planejar melhor, usar IA nos estudos,
            corrigir erros que atrasam sua evolução e tomar decisões mais criteriosas na prova.
          </p>

          <div className="mt-7 grid gap-2 sm:grid-cols-2">
            {courses.map((course) => (
              <div key={course.stage} className="flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-3">
                <course.icon className="h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-primary">{course.stage}</p>
                  <p className="text-xs font-semibold text-foreground">{course.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground">Valor dos 4 cursos: <span className="line-through">R$188</span></p>
            <div className="mt-1 flex items-end gap-3">
              <span className="pb-2 text-base font-bold text-primary">por apenas</span>
              <span className="font-display text-6xl font-black text-primary glow-text">R$27</span>
            </div>
            <p className="mt-2 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">Economia de R$161</p>
          </div>

          <div className="mt-7 flex flex-col items-start gap-4">
            <CTAButton size="lg">Quero os 4 cursos por R$27</CTAButton>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 7 dias</span>
              <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-primary" /> Acesso após confirmação</span>
              <span className="flex items-center gap-1"><BookOpen className="h-4 w-4 text-primary" /> Aulas em vídeo</span>
            </div>
          </div>
        </div>

        <BundlePlatformMockup />
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
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Você pode conhecer a matéria e ainda perder pontos por <span className="text-primary">falta de estratégia</span></h2>
        <p className="mt-4 text-muted-foreground">Preparação eficiente não é apenas assistir aulas. É saber planejar, aprender, revisar, corrigir decisões ruins e agir com critério sob pressão.</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain) => (
          <div key={pain} className="card-surface flex items-start gap-3 p-5"><X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" /><p className="text-sm">{pain}</p></div>
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
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Planejar → potencializar → corrigir → <span className="text-primary">decidir melhor</span></h2>
            <p className="mt-4 text-muted-foreground">Os quatro cursos não estão juntos por acaso. Cada um entra em uma etapa diferente da sua preparação.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div key={course.title} className="rounded-2xl border border-border bg-background/70 p-5">
                <div className="flex items-center justify-between"><course.icon className="h-7 w-7 text-primary" /><span className="font-display text-2xl font-black text-primary/40">{course.number}</span></div>
                <p className="mt-5 text-xs font-black uppercase tracking-widest text-primary">{course.stage}</p>
                <h3 className="mt-1 font-display text-lg font-bold">{course.title}</h3>
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
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Veja os cursos por dentro</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Assista a uma <span className="text-primary">aula demonstrativa real</span> de cada curso</h2>
        <p className="mt-4 text-muted-foreground">Clique no player de cada curso para conhecer a didática antes de comprar. O vídeo só é carregado quando você decide assistir, deixando a página mais leve.</p>
      </div>
      <div className="mt-12 grid gap-7 lg:grid-cols-2">
        {courses.map((course) => (
          <article key={course.title} className="card-surface overflow-hidden p-4 transition hover:-translate-y-1 hover:border-primary/50 sm:p-5">
            <CoursePlatformMockup course={course} />
            <div className="px-2 pb-2 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Curso {course.number} • R$47 separadamente</p>
              <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">{course.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{course.promise}</p>
              <ul className="mt-5 space-y-3">
                {course.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center"><CTAButton size="lg">Quero os quatro cursos</CTAButton></div>
    </section>
  );
}

function DeliverySection() {
  const delivery = [
    { icon: Monitor, title: "Plataforma online", text: "Os cursos ficam organizados em uma área digital para você acessar as aulas." },
    { icon: Play, title: "Aulas em vídeo", text: "O conteúdo é apresentado em aulas para você assistir e avançar no seu ritmo." },
    { icon: Zap, title: "Liberação após o pagamento", text: "Após a confirmação do pagamento, você recebe as orientações de acesso pela Hotmart." },
    { icon: Smartphone, title: "Computador ou celular", text: "Acesse a plataforma pelo dispositivo que for mais conveniente para sua rotina." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-background p-8 sm:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Como você recebe</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Compra simples. <span className="text-primary">Acesso digital.</span></h2>
          <p className="mt-4 text-muted-foreground">O pagamento é processado pela Hotmart. Depois da confirmação, você recebe o acesso aos cursos online na plataforma.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {delivery.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-background/70 p-5">
              <item.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
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
      <div className="mx-auto max-w-3xl text-center"><h2 className="font-display text-3xl font-bold sm:text-4xl">O que muda quando você conecta <span className="text-primary">método e execução</span></h2></div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="card-surface p-6"><benefit.icon className="h-7 w-7 text-primary" /><h3 className="mt-4 font-display text-lg font-bold">{benefit.title}</h3><p className="mt-2 text-sm text-muted-foreground">{benefit.text}</p></div>
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
              <div key={course.title} className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm"><span>{course.title}</span><strong>R$47</strong></div>
            ))}
          </div>
          <p className="mt-6 text-right font-display text-4xl font-black line-through">R$188</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-primary/10 p-8 shadow-glow">
          <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-4 py-2 text-xs font-black text-primary-foreground">MELHOR ESCOLHA</div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Combo 4 em 1</p>
          <h3 className="mt-4 font-display text-3xl font-black">Estratégia da Aprovação</h3>
          <p className="mt-4 text-muted-foreground">Os quatro cursos online em vídeo reunidos em uma única oferta.</p>
          <p className="mt-8 text-sm text-muted-foreground">Pagamento único de</p>
          <p className="font-display text-6xl font-black text-primary glow-text">R$27</p>
          <p className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-black text-primary-foreground">Economia real de R$161</p>
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
  const notForYou = ["Procura promessa de aprovação sem estudar", "Não pretende aplicar nenhuma das estratégias", "Acredita que técnicas de chute substituem conhecimento"];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-8"><CheckCircle2 className="h-10 w-10 text-primary" /><h2 className="mt-4 font-display text-2xl font-bold">Este combo é para você se...</h2><ul className="mt-6 space-y-3">{forYou.map((item) => <li key={item} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul></div>
        <div className="card-surface p-8"><X className="h-10 w-10 text-destructive" /><h2 className="mt-4 font-display text-2xl font-bold">Não é para você se...</h2><ul className="mt-6 space-y-3">{notForYou.map((item) => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><X className="h-5 w-5 shrink-0 text-destructive" />{item}</li>)}</ul></div>
      </div>
    </section>
  );
}

function TeacherSection({ photo }: { photo: string | null }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="card-surface grid gap-8 overflow-hidden p-6 sm:grid-cols-[220px_1fr] sm:items-center sm:p-10">
        <div className="mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-2xl border border-primary/30 bg-surface shadow-2xl sm:mx-0">
          <ProfessorImage photo={photo} />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Quem preparou este combo</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Prof. Lucas MPC</h2>
          <p className="mt-2 text-sm font-semibold text-foreground">Professor de Matemática para concursos públicos</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Os quatro cursos foram reunidos para atacar problemas diferentes da preparação: falta de direção,
            uso pouco eficiente da tecnologia, hábitos que atrasam o estudo e decisões ruins na hora da prova.
            A proposta é entregar uma trilha prática, objetiva e aplicável à rotina do concurseiro.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">Método de estudos</span>
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">IA para concursos</span>
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">Estratégia de prova</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto h-10 w-10 text-primary" />
        <span className="mt-4 block text-sm font-bold uppercase tracking-widest text-primary">Depoimentos</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Veja experiências de quem já estudou com o <span className="text-primary">Prof. Lucas MPC</span></h2>
        <p className="mt-4 text-muted-foreground">Relatos em vídeo de alunos, com o frame real de cada vídeo antes da reprodução.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonialVideos.map((testimonial) => (
          <article key={testimonial.id} className="card-surface overflow-hidden p-4 sm:p-5">
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-black">
              <TestimonialVideo videoId={testimonial.id} title={testimonial.label} />
            </div>
            <div className="px-2 pb-2 pt-5">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Relato real em vídeo</p>
              <h3 className="mt-1 font-display text-xl font-bold">{testimonial.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Clique no vídeo para assistir ao depoimento completo.</p>
            </div>
          </article>
        ))}
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
          <p className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-primary">4 cursos online em vídeo • pagamento único</p>
          <h2 className="mt-5 font-display text-3xl font-black sm:text-5xl">Combo Estratégia da Aprovação</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Planeje melhor, use IA, corrija erros recorrentes e amplie seu repertório de decisão para a prova.</p>
          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {courses.map((course) => <li key={course.title} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{course.title}</span></li>)}
            <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" />Acesso pela plataforma</li>
            <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" />Garantia de 7 dias</li>
          </ul>
          <div className="mt-10"><p className="text-sm text-muted-foreground">De <span className="line-through">R$188</span> por</p><p className="mt-1 font-display text-7xl font-black text-primary glow-text">R$27</p><p className="mt-3 font-bold text-primary">Economize R$161 e receba os quatro cursos</p></div>
          <div className="mt-8"><CTAButton size="lg" className="w-full sm:w-auto">Garantir o Combo 4 em 1</CTAButton></div>
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
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border-4 border-primary bg-primary/10 text-primary sm:mx-0"><ShieldCheck className="h-14 w-14" /></div>
        <div><h2 className="font-display text-3xl font-bold">Você tem 7 dias para avaliar</h2><p className="mt-3 text-sm text-muted-foreground sm:text-base">Acesse o conteúdo e conheça a proposta. Se dentro do prazo legal perceber que o combo não é adequado para você, solicite o reembolso pelos canais disponibilizados pela Hotmart, conforme as condições da plataforma.</p></div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-surface overflow-hidden">
      <button onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between gap-4 p-5 text-left"><span className="text-sm font-semibold sm:text-base">{q}</span>{open ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-primary" />}</button>
      {open && <div className="border-t border-border px-5 pb-5 pt-4 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { q: "São realmente quatro cursos online?", a: "Sim. A oferta reúne Como Passar em Concursos, Método IA para Concursos, Erros que os Concurseiros Costumam Cometer e Técnicas de Chute, todos apresentados como cursos online na plataforma." },
    { q: "Posso assistir antes de comprar?", a: "Sim. A página disponibiliza uma aula demonstrativa de cada um dos quatro cursos para você conhecer a didática antes da compra." },
    { q: "O valor de R$27 é mensal?", a: "Não. É um pagamento único pelo combo, sem mensalidade." },
    { q: "Como recebo os cursos?", a: "O pagamento é processado pela Hotmart. Após a confirmação, você recebe as orientações para acessar os cursos na plataforma." },
    { q: "Posso assistir pelo celular?", a: "Sim. A plataforma pode ser acessada pelo navegador em celular ou computador, de acordo com a sua rotina." },
    { q: "Serve para qualquer concurso?", a: "As estratégias são gerais e podem apoiar candidatos de diferentes áreas e bancas. O conteúdo específico do edital continua sendo indispensável." },
    { q: "Preciso saber usar inteligência artificial?", a: "Não. O Método IA começa pelos primeiros passos e mostra aplicações práticas para a rotina de estudos." },
    { q: "As técnicas de chute garantem acertos?", a: "Não. Elas ensinam critérios de análise para situações de dúvida, mas não substituem estudo nem garantem aprovação ou acerto." },
    { q: "O curso garante minha aprovação?", a: "Não existe garantia séria de aprovação. O combo oferece métodos e ferramentas; o resultado depende da aplicação, do estudo e das condições de cada concurso." },
    { q: "Tenho garantia de compra?", a: "Sim. A compra conta com garantia de 7 dias, conforme as condições da Hotmart." },
  ];
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center"><Lightbulb className="mx-auto h-10 w-10 text-primary" /><h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2></div>
      <div className="mt-10 flex flex-col gap-3">{faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <Sparkles className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-6 font-display text-3xl font-black sm:text-5xl">Quatro cursos online de R$47. <span className="text-primary glow-text">Todos por R$27.</span></h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Você já pode assistir às aulas demonstrativas acima. Se a proposta fizer sentido para sua preparação, o combo reúne os quatro cursos em uma única compra.</p>
        <div className="mt-8"><CTAButton size="lg">Quero o Combo Estratégia da Aprovação</CTAButton></div>
        <p className="mt-4 text-xs text-muted-foreground">Pagamento único • Aulas em vídeo • Garantia de 7 dias</p>
      </div>
    </section>
  );
}

function FloatingMobileCTA() {
  const [show, setShow] = useState(false);
  const checkoutUrl = useCheckoutUrl();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 sm:hidden">
      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn-cta w-full text-sm">4 cursos por R$27 <ChevronRight className="h-5 w-5" /></a>
    </div>
  );
}
