import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "./termos-de-uso";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      {
        title: "Política de Cookies | Método IA para Concursos",
      },
      {
        name: "description",
        content: "Política de Cookies do Método IA para Concursos.",
      },
      {
        name: "robots",
        content: "noindex",
      },
      {
        property: "og:url",
        content: "/politica-de-cookies",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/politica-de-cookies",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      updated="Julho de 2026"
    >
      <p>
        Esta Política de Cookies explica como o site do{" "}
        <strong>Método IA para Concursos</strong>, desenvolvido pelo{" "}
        <strong>Prof. Lucas MPC</strong>, pode utilizar cookies e tecnologias
        semelhantes durante a navegação.
      </p>

      <p>
        Esta Política deve ser lida em conjunto com a nossa{" "}
        <Link to="/politica-de-privacidade">
          Política de Privacidade
        </Link>
        .
      </p>

      <h2>1. O que são cookies?</h2>

      <p>
        Cookies são pequenos arquivos ou identificadores armazenados no
        navegador ou no dispositivo do usuário durante a utilização de um site.
      </p>

      <p>
        Eles podem ser utilizados para permitir funcionalidades básicas,
        registrar preferências, obter informações sobre a navegação e medir os
        resultados de campanhas publicitárias.
      </p>

      <p>
        Além de cookies, o site poderá utilizar tecnologias semelhantes, como
        armazenamento local do navegador, pixels e identificadores técnicos.
      </p>

      <h2>2. Cookies necessários</h2>

      <p>
        Cookies necessários são utilizados para permitir o funcionamento básico
        e seguro do site.
      </p>

      <p>
        No Método IA para Concursos, uma tecnologia de armazenamento local pode
        ser utilizada para registrar a escolha feita pelo usuário no banner de
        cookies, evitando que o aviso seja apresentado novamente em todas as
        páginas ou visitas.
      </p>

      <p>
        Esses recursos não são utilizados para publicidade personalizada.
      </p>

      <h2>3. Cookies e tecnologias de publicidade</h2>

      <p>
        Quando autorizado pelo usuário, o site poderá carregar o{" "}
        <strong>Meta Pixel</strong>, ferramenta utilizada para medir visitas,
        interações, cliques e resultados relacionados às campanhas
        publicitárias.
      </p>

      <p>
        Essa tecnologia pode permitir a mensuração do desempenho dos anúncios,
        a identificação de ações realizadas no site e a criação de públicos para
        campanhas de publicidade.
      </p>

      <p>
        O Meta Pixel é considerado uma tecnologia não essencial e deverá ser
        carregado somente após o usuário selecionar a opção de aceitar no banner
        de cookies.
      </p>

      <p>
        Caso o usuário selecione a opção de recusar, o site continuará
        disponível, mas o Meta Pixel não deverá ser carregado naquela navegação.
      </p>

      <h2>4. Cookies analíticos</h2>

      <p>
        Atualmente, o site não utiliza uma ferramenta independente de análise,
        como o Google Analytics.
      </p>

      <p>
        Caso uma ferramenta desse tipo seja instalada futuramente, esta
        Política será atualizada e o seu carregamento deverá respeitar as
        escolhas apresentadas ao usuário.
      </p>

      <h2>5. Conteúdo incorporado do YouTube</h2>

      <p>
        O site pode apresentar vídeos incorporados do YouTube.
      </p>

      <p>
        Ao reproduzir ou interagir com um vídeo, o navegador poderá estabelecer
        comunicação com serviços mantidos pelo Google ou pelo YouTube, que
        poderão utilizar cookies, identificadores ou outras tecnologias de
        acordo com suas próprias políticas.
      </p>

      <p>
        A utilização de conteúdo incorporado envolve serviços de terceiros que
        não são controlados diretamente pelo Método IA para Concursos.
      </p>

      <h2>6. Checkout da Hotmart</h2>

      <p>
        Os botões de compra direcionam o usuário para o ambiente externo da
        Hotmart, responsável pelo checkout, processamento do pagamento e
        liberação do acesso ao produto.
      </p>

      <p>
        Ao acessar o checkout, o usuário deixa o domínio desta página e passa a
        utilizar uma plataforma administrada pela Hotmart.
      </p>

      <p>
        A Hotmart poderá utilizar cookies e outras tecnologias de acordo com
        seus próprios termos, políticas de privacidade e mecanismos de
        consentimento.
      </p>

      <h2>7. Cookies próprios e de terceiros</h2>

      <p>
        Os cookies e tecnologias semelhantes podem ser classificados como:
      </p>

      <ul>
        <li>
          <strong>próprios:</strong> definidos diretamente pelo site que está
          sendo visitado;
        </li>
        <li>
          <strong>de terceiros:</strong> definidos ou acessados por serviços
          externos incorporados ou utilizados pelo site, como Meta, YouTube e
          Hotmart.
        </li>
      </ul>

      <h2>8. Banner de consentimento</h2>

      <p>
        Ao acessar o site, o usuário poderá visualizar um banner contendo
        informações resumidas sobre o uso de cookies e tecnologias semelhantes.
      </p>

      <p>O banner apresenta as seguintes opções:</p>

      <ul>
        <li>
          <strong>Aceitar:</strong> autoriza o carregamento das tecnologias não
          essenciais de publicidade utilizadas no site;
        </li>
        <li>
          <strong>Recusar:</strong> impede o carregamento dessas tecnologias não
          essenciais.
        </li>
      </ul>

      <p>
        A ausência de consentimento ou a seleção da opção de recusar não deverá
        impedir o acesso ao conteúdo principal da página.
      </p>

      <h2>9. Registro da escolha</h2>

      <p>
        A escolha do usuário poderá ser armazenada localmente no navegador para
        que o site reconheça se os cookies não essenciais foram aceitos ou
        recusados.
      </p>

      <p>
        Esse registro será utilizado apenas para lembrar a preferência
        selecionada.
      </p>

      <h2>10. Como alterar a escolha</h2>

      <p>
        O usuário poderá alterar sua decisão removendo os dados armazenados por
        este site nas configurações do navegador.
      </p>

      <p>
        Após a exclusão dos dados locais ou cookies do site, o banner deverá ser
        exibido novamente em uma nova visita, permitindo uma nova escolha.
      </p>

      <p>
        Os nomes e caminhos das configurações podem variar conforme o navegador,
        dispositivo e versão utilizada.
      </p>

      <h2>11. Gerenciamento pelo navegador</h2>

      <p>
        Os principais navegadores permitem visualizar, bloquear ou remover
        cookies e dados armazenados por sites.
      </p>

      <p>Essas opções costumam estar localizadas em áreas como:</p>

      <ul>
        <li>privacidade e segurança;</li>
        <li>cookies e dados de sites;</li>
        <li>permissões do site;</li>
        <li>limpar dados de navegação.</li>
      </ul>

      <p>
        O bloqueio geral de cookies pelo navegador poderá afetar determinadas
        funcionalidades de sites e plataformas externas.
      </p>

      <h2>12. Tempo de armazenamento</h2>

      <p>
        O período de armazenamento poderá variar de acordo com o tipo de
        tecnologia utilizada, sua finalidade e as configurações do navegador.
      </p>

      <p>
        A preferência registrada no banner poderá permanecer armazenada até que
        o usuário remova os dados do site ou até que o registro seja apagado ou
        substituído.
      </p>

      <h2>13. Alterações desta Política</h2>

      <p>
        Esta Política poderá ser atualizada para refletir mudanças no site, nas
        ferramentas utilizadas ou nas práticas relacionadas a cookies e
        tecnologias semelhantes.
      </p>

      <p>
        A versão vigente será sempre aquela publicada nesta página,
        acompanhada da data da última atualização.
      </p>

      <h2>14. Contato</h2>

      <p>
        Para dúvidas relacionadas a cookies, privacidade ou proteção de dados,
        entre em contato pelo e-mail:{" "}
        <a href="mailto:matematecnica@gmail.com">
          <strong>matematecnica@gmail.com</strong>
        </a>
        .
      </p>
    </LegalLayout>
  );
}
