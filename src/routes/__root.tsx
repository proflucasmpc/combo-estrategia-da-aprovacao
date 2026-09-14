import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { CookieBanner } from "../components/CookieBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Você pode tentar novamente ou voltar ao início.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Tentar novamente
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "Combo Estratégia da Aprovação — 4 em 1 | Prof. Lucas MPC",
      },
      {
        name: "description",
        content:
          "Quatro cursos para organizar os estudos, usar inteligência artificial, evitar erros e tomar decisões melhores na prova. De R$188 por R$27.",
      },
      {
        property: "og:title",
        content:
          "Combo Estratégia da Aprovação — 4 em 1 | Prof. Lucas MPC",
      },
      {
        property: "og:description",
        content:
          "Quatro cursos para organizar os estudos, usar inteligência artificial, evitar erros e tomar decisões melhores na prova. De R$188 por R$27.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Combo Estratégia da Aprovação",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Combo Estratégia da Aprovação — 4 em 1 | Prof. Lucas MPC",
      },
      {
        name: "twitter:description",
        content:
          "Quatro cursos para organizar os estudos, usar inteligência artificial, evitar erros e tomar decisões melhores na prova. De R$188 por R$27.",
      },
      {
        name: "theme-color",
        content: "#0b1220",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

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

function TestimonialsEnhancement() {
  useEffect(() => {
    let observer: MutationObserver | null = null;

    const activatePreview = (
      preview: HTMLElement,
      videoId: string,
      label: string,
    ) => {
      preview.innerHTML = `
        <button type="button" aria-label="Assistir ${label}" class="group relative block aspect-video w-full overflow-hidden bg-[#061121] text-left">
          <img src="https://i.ytimg.com/vi/${videoId}/hq2.jpg" alt="${label}" loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]" />
          <div class="absolute inset-0 bg-black/5 transition group-hover:bg-black/0"></div>
          <span class="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition group-hover:scale-110 sm:h-14 sm:w-14">
            <span class="ml-1 text-xl leading-none">▶</span>
          </span>
        </button>
      `;

      const button = preview.querySelector("button");
      button?.addEventListener("click", () => {
        preview.innerHTML = `
          <div class="relative aspect-video w-full overflow-hidden bg-black">
            <iframe
              class="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0"
              title="${label}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        `;
      });
    };

    const setup = () => {
      const label = Array.from(document.querySelectorAll("span")).find(
        (element) => element.textContent?.trim() === "Depoimentos",
      );
      const section = label?.closest("section");
      if (!section) return false;

      const grid = Array.from(section.querySelectorAll("div")).find(
        (element) =>
          element.className.includes("grid") &&
          element.querySelector(":scope > article"),
      ) as HTMLElement | undefined;
      if (!grid) return false;

      if (!grid.className.includes("lg:grid-cols-3")) {
        grid.className = "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3";
      }

      const articles = Array.from(
        grid.querySelectorAll(":scope > article"),
      ) as HTMLElement[];

      testimonialVideos.forEach((testimonial, index) => {
        let article = articles[index];

        if (!article) {
          article = document.createElement("article");
          article.className = "card-surface overflow-hidden p-4 sm:p-5";
          article.innerHTML = `
            <div class="overflow-hidden rounded-2xl border border-primary/20 bg-black" data-testimonial-preview></div>
            <div class="px-2 pb-2 pt-5">
              <p class="text-xs font-black uppercase tracking-widest text-primary">Relato real em vídeo</p>
              <h3 class="mt-1 font-display text-xl font-bold">${testimonial.label}</h3>
              <p class="mt-2 text-sm text-muted-foreground">Clique no vídeo para assistir ao depoimento completo.</p>
            </div>
          `;
          grid.appendChild(article);
        }

        article.dataset.testimonialId = testimonial.id;
        const preview =
          (article.querySelector("[data-testimonial-preview]") as HTMLElement | null) ??
          (article.querySelector("div") as HTMLElement | null);

        if (preview && preview.dataset.enhanced !== "true") {
          preview.dataset.enhanced = "true";
          activatePreview(preview, testimonial.id, testimonial.label);
        }
      });

      return true;
    };

    if (!setup()) {
      observer = new MutationObserver(() => {
        if (setup()) {
          observer?.disconnect();
          observer = null;
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer?.disconnect();
  }, []);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <TestimonialsEnhancement />
      <CookieBanner />
    </QueryClientProvider>
  );
}
