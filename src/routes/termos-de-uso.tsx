import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteFooter } from "../components/SiteFooter";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary font-black text-primary-foreground">
              IA
            </div>

            <span className="font-display text-sm font-bold">
              Método IA para Concursos
            </span>
          </Link>

          <Link
            to="/"
            className="text-xs font-semibold text-primary hover:underline sm:text-sm"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          {title}
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: {updated}
        </p>

        <div className="prose prose-invert mt-8 max-w-none text-sm leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      {
        title: "Termos de Uso | Método IA para Concursos",
      },
      {
        name: "description",
        content: "Termos de Uso do Método IA para Concursos.",
      },
      {
        name: "robots",
        content: "noindex",
      },
      {
        property: "og:url",
        content: "/termos-de-uso",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/termos-de-uso",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Termos de Uso" updated="Julho de 2026">
      <p>
        Bem-vindo(a) ao <strong>Método IA para Concursos</strong>, produto
        digital educacional desenvolvido pelo <strong>Prof. Lucas MPC</strong>.
        Estes Termos de Uso regulam o acesso ao site, aos materiais e ao curso.
      </p>

      <p>
        Ao acessar este site ou adquirir o produto, você declara que leu,
        compreendeu e concorda com as condições apresentadas nesta página.
      </p>

      <h2>1. Apresentação do produto</h2>

      <p>
        O Método IA para Concursos apresenta estratégias, exemplos, ferramentas
        e possibilidades de uso da inteligência artificial aplicadas à
        preparação para concursos públicos.
      </p>

      <p>
        O conteúdo pode abordar, entre outros recursos, criação de resumos,
        flashcards, questões, relatórios, mapas mentais, análises de editais,
        apresentações, áudios e materiais de revisão.
      </p>

      <h2>2. Finalidade educacional</h2>

      <p>
        Todo o conteúdo possui finalidade exclusivamente educacional e
        informativa. O curso não representa promessa ou garantia de aprovação,
        classificação, nomeação, aumento de desempenho ou obtenção de qualquer
        resultado específico.
      </p>

      <p>
        Os resultados dependem de diversos fatores individuais, como dedicação,
        rotina de estudos, conhecimentos prévios, aplicação prática e
        características de cada concurso.
      </p>

      <h2>3. Acesso ao curso</h2>

      <p>
        O acesso é individual, pessoal e intransferível. O período de acesso será
        aquele informado na página de vendas, no checkout ou na área de membros
        no momento da aquisição.
      </p>

      <p>
        O aluno é responsável por utilizar um dispositivo, conexão com a
        internet e programas compatíveis com os conteúdos disponibilizados.
      </p>

      <h2>4. Regras de utilização</h2>

      <p>Ao utilizar o site e o curso, o usuário compromete-se a:</p>

      <ul>
        <li>utilizar o conteúdo apenas para fins pessoais e educacionais;</li>
        <li>manter seus dados de acesso e sua senha em segurança;</li>
        <li>não compartilhar credenciais de acesso com terceiros;</li>
        <li>não copiar, gravar, distribuir ou revender as aulas e materiais;</li>
        <li>não utilizar o conteúdo para práticas ilegais ou fraudulentas;</li>
        <li>
          não tentar invadir, alterar ou prejudicar o funcionamento do site ou
          das plataformas utilizadas.
        </li>
      </ul>

      <h2>5. Propriedade intelectual</h2>

      <p>
        Os textos, vídeos, aulas, imagens, apresentações, materiais, prompts,
        estruturas de ensino, marcas e demais conteúdos pertencem aos seus
        respectivos titulares e são protegidos pela legislação aplicável.
      </p>

      <p>
        É proibida a reprodução, distribuição, revenda, publicação,
        compartilhamento ou disponibilização total ou parcial do conteúdo sem
        autorização prévia e expressa por escrito.
      </p>

      <h2>6. Ferramentas de inteligência artificial</h2>

      <p>
        O curso pode ensinar a utilização de plataformas, aplicativos e
        ferramentas de inteligência artificial mantidos por empresas
        independentes.
      </p>

      <p>
        Essas ferramentas podem alterar funcionalidades, preços, limites,
        políticas, nomes, interfaces ou condições de uso sem aviso prévio. O
        Método IA para Concursos não controla essas alterações e não garante a
        disponibilidade permanente de nenhuma plataforma externa.
      </p>

      <p>
        Respostas produzidas por ferramentas de inteligência artificial podem
        conter erros, informações incompletas ou interpretações imprecisas. O
        usuário deve revisar e conferir as informações antes de utilizá-las em
        seus estudos.
      </p>

      <h2>7. Serviços e plataformas de terceiros</h2>

      <p>
        A compra, o pagamento e a entrega do acesso podem ser processados por
        plataformas externas, como a Hotmart. O uso desses serviços também está
        sujeito aos termos e políticas das respectivas empresas.
      </p>

      <p>
        Não nos responsabilizamos por indisponibilidades temporárias,
        interrupções, falhas técnicas ou alterações realizadas por plataformas
        de terceiros.
      </p>

      <h2>8. Pagamento e liberação do acesso</h2>

      <p>
        O acesso ao produto será liberado após a confirmação do pagamento,
        conforme os procedimentos da plataforma responsável pelo checkout e pela
        área de membros.
      </p>

      <p>
        Pagamentos recusados, cancelados, contestados ou identificados como
        fraudulentos poderão resultar na suspensão ou no encerramento do acesso.
      </p>

      <h2>9. Garantia e reembolso</h2>

      <p>
        O produto possui prazo de garantia de <strong>7 dias</strong>, contados
        a partir da confirmação da compra.
      </p>

      <p>
        Durante esse período, o comprador poderá solicitar o cancelamento e o
        reembolso pelos canais disponibilizados pela plataforma de pagamento,
        observadas as regras aplicáveis à transação.
      </p>

      <h2>10. Suspensão do acesso</h2>

      <p>
        O acesso poderá ser suspenso ou encerrado em casos de compartilhamento
        de senha, distribuição não autorizada do conteúdo, fraude, tentativa de
        invasão ou descumprimento destes Termos de Uso.
      </p>

      <h2>11. Limitação de responsabilidade</h2>

      <p>
        Não nos responsabilizamos por resultados individuais em concursos, por
        decisões tomadas exclusivamente com base em respostas geradas por
        inteligência artificial ou por danos decorrentes do uso inadequado das
        ferramentas apresentadas.
      </p>

      <p>
        O usuário permanece responsável por revisar as informações, respeitar
        os editais e utilizar os recursos apresentados de forma ética e legal.
      </p>

      <h2>12. Privacidade e dados pessoais</h2>

      <p>
        O tratamento de dados pessoais relacionados ao site é explicado em
        nossa{" "}
        <Link to="/politica-de-privacidade">
          Política de Privacidade
        </Link>.
      </p>

      <p>
        O uso de cookies e tecnologias semelhantes é explicado em nossa{" "}
        <Link to="/politica-de-cookies">
          Política de Cookies
        </Link>.
      </p>

      <h2>13. Alterações destes Termos</h2>

      <p>
        Estes Termos de Uso podem ser atualizados para refletir mudanças no
        produto, nas ferramentas utilizadas, nas plataformas parceiras ou nas
        práticas do site.
      </p>

      <p>
        A versão vigente será sempre aquela publicada nesta página, acompanhada
        da data da última atualização.
      </p>

      <h2>14. Contato</h2>

      <p>
        Para dúvidas relacionadas ao produto ou a estes Termos de Uso, entre em
        contato pelo e-mail:{" "}
        <a href="mailto:matematecnica@gmail.com">
          <strong>matematecnica@gmail.com</strong>
        </a>
        .
      </p>
    </LegalLayout>
  );
}
