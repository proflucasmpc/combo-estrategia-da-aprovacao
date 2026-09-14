import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "./termos-de-uso";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      {
        title: "Política de Privacidade | Método IA para Concursos",
      },
      {
        name: "description",
        content: "Política de Privacidade do Método IA para Concursos.",
      },
      {
        name: "robots",
        content: "noindex",
      },
      {
        property: "og:url",
        content: "/politica-de-privacidade",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/politica-de-privacidade",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      updated="Julho de 2026"
    >
      <p>
        Esta Política de Privacidade explica como os dados pessoais podem ser
        tratados durante a utilização do site do{" "}
        <strong>Método IA para Concursos</strong>, produto educacional
        desenvolvido pelo <strong>Prof. Lucas MPC</strong>.
      </p>

      <p>
        O tratamento de dados pessoais busca observar a Lei Geral de Proteção
        de Dados Pessoais — LGPD, Lei nº 13.709/2018 — e os princípios de
        finalidade, adequação, necessidade, segurança e transparência.
      </p>

      <h2>1. Responsável pelo tratamento</h2>

      <p>
        O responsável pelas decisões relacionadas ao tratamento de dados
        pessoais realizado diretamente neste site é:
      </p>

      <p>
        <strong>Prof. Lucas MPC</strong>
        <br />
        E-mail de contato:{" "}
        <a href="mailto:matematecnica@gmail.com">
          <strong>matematecnica@gmail.com</strong>
        </a>
      </p>

      <h2>2. Dados que podem ser tratados</h2>

      <p>
        Dependendo da forma como o usuário utiliza o site, poderão ser tratados
        os seguintes dados:
      </p>

      <ul>
        <li>
          dados fornecidos voluntariamente em mensagens de contato, como nome,
          e-mail e conteúdo da solicitação;
        </li>
        <li>
          endereço IP, data e horário do acesso, navegador e sistema
          operacional;
        </li>
        <li>
          tipo de dispositivo, idioma, resolução de tela e informações técnicas
          semelhantes;
        </li>
        <li>
          páginas acessadas, origem da visita e interações realizadas no site;
        </li>
        <li>
          identificadores armazenados por cookies ou tecnologias semelhantes,
          quando autorizados;
        </li>
        <li>
          eventos relacionados à visualização da página, cliques e conversões,
          quando utilizados recursos de análise e publicidade.
        </li>
      </ul>

      <p>
        A página de vendas não solicita diretamente dados bancários ou números
        de cartão. Essas informações são inseridas pelo comprador no ambiente
        da plataforma responsável pelo checkout.
      </p>

      <h2>3. Formas de coleta</h2>

      <p>Os dados poderão ser obtidos por meio de:</p>

      <ul>
        <li>navegação e interação com a página;</li>
        <li>mensagens enviadas voluntariamente pelo usuário;</li>
        <li>registros técnicos do servidor e do serviço de hospedagem;</li>
        <li>cookies e tecnologias semelhantes;</li>
        <li>
          ferramentas de medição e publicidade, quando autorizadas pelo usuário;
        </li>
        <li>
          informações fornecidas pelas plataformas responsáveis pelo pagamento
          e pela entrega do produto, quando necessárias.
        </li>
      </ul>

      <h2>4. Finalidades do tratamento</h2>

      <p>Os dados poderão ser utilizados para:</p>

      <ul>
        <li>permitir o funcionamento e a segurança do site;</li>
        <li>responder a dúvidas e solicitações enviadas pelo usuário;</li>
        <li>identificar e corrigir falhas técnicas;</li>
        <li>compreender o desempenho e a utilização da página;</li>
        <li>medir resultados de campanhas publicitárias;</li>
        <li>processar compras e liberar o acesso ao produto;</li>
        <li>prevenir fraudes e acessos indevidos;</li>
        <li>cumprir obrigações legais, regulatórias ou contratuais;</li>
        <li>
          enviar comunicações comerciais, quando houver autorização ou outra
          base legal aplicável.
        </li>
      </ul>

      <h2>5. Bases legais</h2>

      <p>
        O tratamento dos dados poderá ocorrer com fundamento nas bases legais
        aplicáveis a cada situação, incluindo:
      </p>

      <ul>
        <li>
          <strong>consentimento</strong>, especialmente para cookies de
          publicidade e determinadas comunicações comerciais;
        </li>
        <li>
          <strong>execução de contrato</strong> ou procedimentos relacionados à
          compra e à entrega do produto;
        </li>
        <li>
          <strong>cumprimento de obrigação legal ou regulatória</strong>;
        </li>
        <li>
          <strong>exercício regular de direitos</strong>;
        </li>
        <li>
          <strong>legítimo interesse</strong>, quando aplicável e respeitados os
          direitos e as expectativas do titular.
        </li>
      </ul>

      <h2>6. Cookies e tecnologias semelhantes</h2>

      <p>
        O site pode utilizar cookies necessários para lembrar escolhas do
        usuário e manter funcionalidades básicas.
      </p>

      <p>
        Cookies ou tecnologias não essenciais, especialmente os relacionados à
        medição de publicidade, somente deverão ser ativados de acordo com a
        escolha registrada no banner de cookies.
      </p>

      <p>
        O usuário poderá aceitar ou rejeitar os cookies não essenciais. A
        rejeição desses cookies não deve impedir o acesso ao conteúdo principal
        da página.
      </p>

      <p>
        Informações detalhadas estão disponíveis em nossa{" "}
        <Link to="/politica-de-cookies">
          Política de Cookies
        </Link>
        .
      </p>

      <h2>7. Meta Pixel</h2>

      <p>
        Quando autorizado pelo usuário, o site poderá utilizar o Meta Pixel,
        tecnologia fornecida pela Meta, para medir visitas, cliques, ações e
        resultados relacionados às campanhas publicitárias.
      </p>

      <p>
        Essas informações podem ser utilizadas para mensuração de anúncios,
        criação de públicos e análise de desempenho das campanhas.
      </p>

      <p>
        No site do Método IA para Concursos, o carregamento dessa tecnologia
        deverá respeitar a escolha feita pelo usuário no banner de cookies.
      </p>

      <p>
        Ao acessar ambientes externos, como o checkout da Hotmart, passam a ser
        aplicáveis também as políticas e os mecanismos de consentimento das
        respectivas plataformas.
      </p>

      <h2>8. Vídeos incorporados</h2>

      <p>
        A página pode apresentar vídeos incorporados do YouTube. Ao reproduzir
        ou interagir com esses vídeos, o usuário poderá estabelecer comunicação
        com serviços mantidos pelo Google ou pelo YouTube.
      </p>

      <p>
        Esses serviços possuem políticas próprias e podem tratar informações
        técnicas relacionadas ao acesso, ao dispositivo e à interação com o
        conteúdo.
      </p>

      <h2>9. Pagamento e Hotmart</h2>

      <p>
        A compra do produto é realizada por meio da Hotmart, plataforma externa
        responsável pelo checkout, processamento do pagamento, cadastro do
        comprador e liberação do acesso ao curso.
      </p>

      <p>
        Ao prosseguir para o checkout, o usuário passa a interagir diretamente
        com a Hotmart. O tratamento realizado por essa plataforma está sujeito
        aos seus próprios termos e políticas de privacidade.
      </p>

      <p>
        Poderemos receber da Hotmart informações necessárias para identificar a
        compra, prestar atendimento, liberar o produto e cumprir obrigações
        legais e contratuais.
      </p>

      <h2>10. Compartilhamento de dados</h2>

      <p>
        Os dados poderão ser compartilhados, dentro do necessário, com:
      </p>

      <ul>
        <li>Hotmart, para pagamento e entrega do produto;</li>
        <li>Meta, quando o usuário autorizar cookies de publicidade;</li>
        <li>Google e YouTube, em razão dos vídeos incorporados;</li>
        <li>serviços de hospedagem, infraestrutura e segurança do site;</li>
        <li>
          prestadores de serviços necessários ao funcionamento da operação;
        </li>
        <li>
          autoridades públicas, quando houver obrigação legal ou ordem válida.
        </li>
      </ul>

      <p>
        Não comercializamos nem vendemos bancos de dados pessoais.
      </p>

      <h2>11. Transferência internacional</h2>

      <p>
        Alguns fornecedores de tecnologia utilizados no site possuem
        infraestrutura ou empresas localizadas fora do Brasil. Por isso,
        determinados dados poderão ser processados ou armazenados em outros
        países, observadas as medidas de proteção aplicáveis.
      </p>

      <h2>12. Retenção dos dados</h2>

      <p>
        Os dados serão mantidos somente pelo período necessário para cumprir as
        finalidades descritas nesta Política, atender solicitações, executar
        contratos, proteger direitos ou cumprir obrigações legais.
      </p>

      <p>
        Após esse período, os dados poderão ser eliminados, anonimizados ou
        mantidos quando a legislação permitir ou exigir sua conservação.
      </p>

      <h2>13. Direitos do titular</h2>

      <p>
        Nos termos da LGPD, o titular poderá solicitar, quando aplicável:
      </p>

      <ul>
        <li>confirmação da existência de tratamento;</li>
        <li>acesso aos dados pessoais;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>
          anonimização, bloqueio ou eliminação de dados desnecessários,
          excessivos ou tratados em desconformidade;
        </li>
        <li>informações sobre o compartilhamento dos dados;</li>
        <li>portabilidade, nos termos da regulamentação aplicável;</li>
        <li>eliminação de dados tratados com base no consentimento;</li>
        <li>revogação do consentimento;</li>
        <li>
          informação sobre as consequências de eventual recusa do
          consentimento;
        </li>
        <li>
          oposição a tratamentos realizados em desconformidade com a legislação.
        </li>
      </ul>

      <p>
        Para exercer esses direitos, o titular poderá entrar em contato pelo
        e-mail{" "}
        <a href="mailto:matematecnica@gmail.com">
          <strong>matematecnica@gmail.com</strong>
        </a>
        .
      </p>

      <p>
        Poderemos solicitar informações adicionais para confirmar a identidade
        do solicitante e evitar o fornecimento de dados a terceiros não
        autorizados.
      </p>

      <h2>14. Segurança</h2>

      <p>
        São adotadas medidas razoáveis de segurança para reduzir riscos de
        acesso não autorizado, alteração, divulgação, perda ou destruição de
        dados pessoais.
      </p>

      <p>
        Nenhum sistema conectado à internet é completamente livre de riscos.
        Caso seja identificado um incidente relevante, serão adotadas as
        providências cabíveis conforme a legislação aplicável.
      </p>

      <h2>15. Dados de crianças e adolescentes</h2>

      <p>
        O site e o produto não são direcionados especificamente à coleta de
        dados pessoais de crianças.
      </p>

      <p>
        Caso seja identificada a coleta indevida de dados de criança ou
        adolescente, o responsável legal poderá solicitar esclarecimentos ou a
        exclusão das informações pelo canal de contato indicado nesta Política.
      </p>

      <h2>16. Alterações desta Política</h2>

      <p>
        Esta Política poderá ser atualizada para refletir mudanças no site, nas
        ferramentas utilizadas, nos fornecedores ou na legislação aplicável.
      </p>

      <p>
        A versão vigente será aquela publicada nesta página, acompanhada da data
        da última atualização.
      </p>

      <h2>17. Contato</h2>

      <p>
        Para dúvidas, solicitações ou exercício de direitos relacionados à
        privacidade e à proteção de dados pessoais, entre em contato:
      </p>

      <p>
        <a href="mailto:matematecnica@gmail.com">
          <strong>matematecnica@gmail.com</strong>
        </a>
      </p>
    </LegalLayout>
  );
}
