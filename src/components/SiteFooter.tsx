import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-primary font-bold text-primary-foreground">
                IA
              </div>

              <span className="font-display text-lg font-bold">
                Método IA para Concursos
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Aprenda a utilizar a inteligência artificial para estudar com
              mais eficiência, organização e produtividade.
            </p>

            <p className="mt-4 text-xs text-muted-foreground">
              Responsável:{" "}
              <span className="text-foreground">Prof. Lucas MPC</span>
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Contato:{" "}
              <a
                href="mailto:matematecnica@gmail.com"
                className="text-foreground hover:text-primary"
              >
                matematecnica@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Legal
            </span>

            <Link
              to="/termos-de-uso"
              className="text-foreground hover:text-primary"
            >
              Termos de Uso
            </Link>

            <Link
              to="/politica-de-privacidade"
              className="text-foreground hover:text-primary"
            >
              Política de Privacidade
            </Link>

            <Link
              to="/politica-de-cookies"
              className="text-foreground hover:text-primary"
            >
              Política de Cookies
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Método IA para Concursos. Todos os
          direitos reservados.
          <br />
          Este site não é afiliado ao Facebook, à Meta, ao Google ou a qualquer
          órgão público oficial.
        </div>
      </div>
    </footer>
  );
}
