import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent-v1";
const META_PIXEL_ID = "25752058891159282";

function loadMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;

  const pixelWindow = window as typeof window & {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  };

  if (pixelWindow.fbq) return;

  /* eslint-disable */
  (function (
    f: any,
    b: Document,
    e: string,
    v: string,
    n?: any,
    t?: HTMLScriptElement,
    s?: Element
  ) {
    if (f.fbq) return;

    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };

    if (!f._fbq) f._fbq = n;

    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;

    s = b.getElementsByTagName(e)[0];

    if (s?.parentNode) {
      s.parentNode.insertBefore(t, s);
    }
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  pixelWindow.fbq?.("init", pixelId);
  pixelWindow.fbq?.("track", "PageView");
  /* eslint-enable */
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(STORAGE_KEY);

    if (!storedConsent) {
      setVisible(true);
      return;
    }

    if (storedConsent === "accepted") {
      loadMetaPixel(META_PIXEL_ID);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    loadMetaPixel(META_PIXEL_ID);
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md">
      <div className="card-surface p-5 shadow-2xl backdrop-blur-xl">
        <h3 className="text-sm font-bold text-foreground">
          Este site utiliza cookies
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Utilizamos um recurso necessário para lembrar sua escolha e, com sua
          autorização, o Meta Pixel para medir visitas e resultados das
          campanhas publicitárias. Você pode aceitar ou recusar. Consulte nossa{" "}
          <Link
            to="/politica-de-cookies"
            className="text-primary underline"
          >
            Política de Cookies
          </Link>{" "}
          e nossa{" "}
          <Link
            to="/politica-de-privacidade"
            className="text-primary underline"
          >
            Política de Privacidade
          </Link>
          .
        </p>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={acceptCookies}
            className="flex-1 rounded-md bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition hover:opacity-90"
          >
            Aceitar
          </button>

          <button
            type="button"
            onClick={rejectCookies}
            className="flex-1 rounded-md border border-border bg-transparent px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-muted"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
