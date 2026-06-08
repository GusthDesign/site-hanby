# Requirements Document

## Introduction

Este documento descreve os requisitos para o site institucional da **Hanby — Gestão Ambiental e Inteligência de Dados**, empresa especializada em soluções ambientais completas para conformidade regulatória, gestão de resíduos e recuperação de áreas degradadas.

O site tem como objetivo apresentar a empresa, seus serviços e diferenciais ao público-alvo, gerar leads qualificados por meio de canais de contato direto (WhatsApp, e-mail e formulário), e reforçar a credibilidade e posicionamento da marca no mercado de gestão ambiental.

O slogan da empresa é **"Inteligência Hoje, Sustentabilidade Para Sempre."** e a tagline é **"O futuro sustentável começa com escolhas inteligentes hoje."**

---

## Glossary

- **Site**: O site institucional da Hanby hospedado em www.hanbyambiental.com.br.
- **Usuário**: Qualquer pessoa que acessa o Site por meio de um navegador web.
- **Visitante**: Usuário não autenticado que navega pelo Site.
- **Lead**: Visitante que demonstra interesse nos serviços da Hanby ao preencher o formulário de contato ou acionar um canal de comunicação.
- **CTA (Call to Action)**: Elemento interativo que convida o Visitante a realizar uma ação, como entrar em contato ou solicitar um orçamento.
- **Hero_Section**: Seção principal de destaque no topo da página inicial.
- **Serviço**: Cada uma das nove soluções ambientais oferecidas pela Hanby.
- **Card_de_Servico**: Componente visual que apresenta o nome, ícone e descrição resumida de um Serviço.
- **Formulario_de_Contato**: Componente que coleta nome, e-mail, telefone e mensagem do Visitante.
- **WhatsApp_Button**: Botão flutuante que abre uma conversa no WhatsApp com o número (47) 9 9909-1254.
- **Viewport**: Área visível da tela do dispositivo do Usuário.
- **Breakpoint**: Largura de tela que define a transição entre layouts responsivos (mobile ≤ 768 px, tablet 769–1024 px, desktop ≥ 1025 px).
- **WCAG_2_1_AA**: Web Content Accessibility Guidelines versão 2.1, nível de conformidade AA.
- **SEO**: Search Engine Optimization — conjunto de práticas para melhorar o posicionamento do Site em mecanismos de busca.
- **Meta_Tag**: Elemento HTML que fornece metadados sobre a página para mecanismos de busca e redes sociais.
- **Schema_Markup**: Dados estruturados em formato JSON-LD que descrevem o conteúdo da página para mecanismos de busca.
- **Core_Web_Vitals**: Métricas de desempenho definidas pelo Google: LCP, FID/INP e CLS.
- **LCP**: Largest Contentful Paint — tempo até o maior elemento visível ser renderizado.
- **CLS**: Cumulative Layout Shift — medida de estabilidade visual durante o carregamento.
- **LGPD**: Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
- **Cookie_Banner**: Componente que informa o Visitante sobre o uso de cookies e solicita consentimento.
- **Politica_de_Privacidade**: Página que descreve como os dados pessoais dos Visitantes são coletados, usados e protegidos.

---

## Requirements

### Requirement 1: Estrutura Geral e Navegação

**User Story:** Como Visitante, quero navegar pelo site de forma intuitiva, para que eu encontre rapidamente as informações sobre a empresa e seus serviços.

#### Acceptance Criteria

1. THE Site SHALL conter as seguintes seções acessíveis por âncora: Início (Hero), Sobre, Serviços, Diferenciais, Contato e Rodapé.
2. THE Site SHALL exibir um menu de navegação fixo (sticky) no topo da página, visível durante toda a rolagem.
3. WHEN o Visitante clica em um item do menu de navegação, THE Site SHALL rolar suavemente até a seção correspondente em no máximo 600 ms.
4. WHEN o Viewport tem largura menor ou igual a 768 px, THE Site SHALL substituir o menu de navegação horizontal por um menu hambúrguer colapsável.
5. WHEN o Visitante abre o menu hambúrguer, THE Site SHALL exibir os itens de navegação em lista vertical com área de toque mínima de 44 por 44 px por item.
6. THE Site SHALL exibir o logotipo da Hanby no canto superior esquerdo do menu de navegação com link que retorna ao topo da página.
7. WHEN o Visitante rola a página além de 100 px do topo, THE Site SHALL destacar visualmente o item de menu correspondente à seção atualmente visível no Viewport.

---

### Requirement 2: Hero Section

**User Story:** Como Visitante, quero ver uma apresentação impactante da empresa ao acessar o site, para que eu compreenda imediatamente a proposta de valor da Hanby.

#### Acceptance Criteria

1. THE Site SHALL exibir na Hero_Section o slogan "Inteligência Hoje, Sustentabilidade Para Sempre." como título principal H1.
2. THE Site SHALL exibir na Hero_Section a tagline "O futuro sustentável começa com escolhas inteligentes hoje." como subtítulo.
3. THE Site SHALL exibir na Hero_Section um CTA primário com o texto "Fale com um especialista" que aciona o WhatsApp_Button.
4. THE Site SHALL exibir na Hero_Section um CTA secundário com o texto "Conheça nossos serviços" que rola a página até a seção Serviços.
5. THE Site SHALL exibir na Hero_Section uma imagem ou ilustração de fundo relacionada ao tema ambiental e sustentabilidade.
6. WHEN o Viewport tem largura menor ou igual a 768 px, THE Site SHALL reorganizar os elementos da Hero_Section em coluna única mantendo o H1 e os CTAs visíveis sem necessidade de rolagem.
7. THE Site SHALL garantir que o texto da Hero_Section tenha contraste mínimo de 4,5:1 em relação ao fundo conforme WCAG_2_1_AA critério 1.4.3.

---

### Requirement 3: Seção Sobre a Empresa

**User Story:** Como Visitante, quero conhecer a proposta de valor e os diferenciais da Hanby, para que eu avalie a credibilidade da empresa antes de contratar seus serviços.

#### Acceptance Criteria

1. THE Site SHALL exibir na seção Sobre o texto da proposta de valor: "Soluções ambientais completas para garantir conformidade, reduzir riscos e impulsionar o crescimento sustentável da empresa."
2. THE Site SHALL exibir na seção Sobre os três diferenciais da empresa — "Decisões Inteligentes", "Conformidade" e "Resultados" — cada um acompanhado de ícone representativo e descrição.
3. THE Site SHALL exibir na seção Sobre o slogan "Gestão Responsável · Resultados Inteligentes · Futuro Sustentável" como elemento de destaque visual.
4. WHEN o Viewport tem largura menor ou igual a 768 px, THE Site SHALL exibir os três diferenciais em coluna única empilhados verticalmente.

---

### Requirement 4: Seção de Serviços

**User Story:** Como Visitante, quero visualizar todos os serviços oferecidos pela Hanby com descrições claras, para que eu identifique qual solução atende à necessidade da minha empresa.

#### Acceptance Criteria

1. THE Site SHALL exibir na seção Serviços os nove Serviços a seguir, cada um em um Card_de_Servico individual: Licença Ambiental de Operação, Certidão de Conformidade Ambiental, Autorização Ambiental, Renovação de Licença Ambiental, PRAD — Plano de Recuperação de Área Degradada, IBAMA — Regularização e acompanhamento de processos, MTR — Manifesto de Transporte de Resíduos, Plano de Gerenciamento de Resíduos de Serviço e Saúde (PGRSS) e Auditoria Ambiental.
2. THE Site SHALL exibir em cada Card_de_Servico o nome do serviço, um ícone representativo e a descrição resumida conforme o folder da empresa.
3. WHEN o Visitante passa o cursor sobre um Card_de_Servico em dispositivo com mouse, THE Site SHALL aplicar um efeito visual de destaque no card.
4. THE Site SHALL exibir em cada Card_de_Servico um CTA "Solicitar orçamento" que aciona o WhatsApp_Button com mensagem pré-preenchida referenciando o serviço correspondente.
5. WHEN o Viewport tem largura maior ou igual a 1025 px, THE Site SHALL exibir os Cards_de_Servico em grade de 3 colunas.
6. WHEN o Viewport tem largura entre 769 px e 1024 px, THE Site SHALL exibir os Cards_de_Servico em grade de 2 colunas.
7. WHEN o Viewport tem largura menor ou igual a 768 px, THE Site SHALL exibir os Cards_de_Servico em coluna única.

---

### Requirement 5: Seção de Diferenciais

**User Story:** Como Visitante, quero entender por que devo escolher a Hanby em vez de concorrentes, para que eu tome uma decisão de contratação com confiança.

#### Acceptance Criteria

1. THE Site SHALL exibir na seção Diferenciais os três pilares da empresa com título, ícone e descrição expandida: "Decisões Inteligentes — com base em dados e responsabilidade", "Conformidade — que gera segurança e credibilidade" e "Resultados — que impulsionam o futuro do negócio".
2. THE Site SHALL exibir na seção Diferenciais elementos visuais alinhados à identidade visual da Hanby utilizando a paleta verde escuro, verde médio, azul e branco.
3. WHEN o Viewport tem largura menor ou igual a 768 px, THE Site SHALL exibir os diferenciais em coluna única empilhados verticalmente.

---

### Requirement 6: Seção de Contato

**User Story:** Como Visitante interessado nos serviços da Hanby, quero entrar em contato com a empresa de forma simples, para que eu possa solicitar informações ou um orçamento rapidamente.

#### Acceptance Criteria

1. THE Site SHALL exibir na seção Contato um Formulario_de_Contato com os campos: Nome (obrigatório), E-mail (obrigatório), Telefone (opcional) e Mensagem (obrigatório).
2. WHEN o Visitante submete o Formulario_de_Contato com todos os campos obrigatórios preenchidos corretamente, THE Site SHALL exibir uma mensagem de confirmação de envio bem-sucedido.
3. IF o Visitante submete o Formulario_de_Contato com campos obrigatórios vazios ou com formato de e-mail inválido, THEN THE Site SHALL exibir mensagens de erro descritivas ao lado de cada campo inválido sem recarregar a página.
4. THE Site SHALL exibir na seção Contato as informações de contato direto: endereço (Rua Miguel Cercal, 609 — Joinville/SC — CEP: 89214-610), e-mail (hanby.ambiental@gmail.com) e telefone/WhatsApp ((47) 9 9909-1254).
5. THE Site SHALL exibir na seção Contato um link clicável para o e-mail que abre o cliente de e-mail padrão do Usuário.
6. THE Site SHALL exibir na seção Contato um link clicável para o telefone que inicia uma chamada em dispositivos móveis.
7. THE Site SHALL exibir na seção Contato um mapa incorporado indicando a localização do endereço da empresa em Joinville/SC.
8. WHEN o Visitante clica no WhatsApp_Button ou em qualquer CTA de WhatsApp, THE Site SHALL abrir o WhatsApp com o número (47) 9 9909-1254 e uma mensagem pré-preenchida em nova aba.

---

### Requirement 7: Rodapé

**User Story:** Como Visitante, quero encontrar informações institucionais e links úteis no rodapé do site, para que eu acesse rapidamente contatos e políticas da empresa.

#### Acceptance Criteria

1. THE Site SHALL exibir no Rodapé o logotipo da Hanby, o endereço completo, o e-mail, o telefone e o link para o WhatsApp.
2. THE Site SHALL exibir no Rodapé links de navegação rápida para as seções principais do Site.
3. THE Site SHALL exibir no Rodapé o texto "Gestão Responsável · Resultados Inteligentes · Futuro Sustentável".
4. THE Site SHALL exibir no Rodapé um link para a Politica_de_Privacidade.
5. THE Site SHALL exibir no Rodapé o aviso de direitos autorais com o ano corrente e o nome da empresa.
6. WHEN o Viewport tem largura menor ou igual a 768 px, THE Site SHALL reorganizar o conteúdo do Rodapé em coluna única.

---

### Requirement 8: Botão Flutuante de WhatsApp

**User Story:** Como Visitante em qualquer ponto do site, quero acionar o WhatsApp da Hanby com um clique, para que eu entre em contato sem precisar procurar o número.

#### Acceptance Criteria

1. THE Site SHALL exibir o WhatsApp_Button como elemento flutuante fixo no canto inferior direito da tela visível em todas as seções.
2. THE Site SHALL garantir que o WhatsApp_Button tenha área de toque mínima de 44 por 44 px.
3. WHEN o Visitante clica no WhatsApp_Button, THE Site SHALL abrir o WhatsApp com o número (47) 9 9909-1254 e a mensagem pré-preenchida "Olá! Gostaria de saber mais sobre os serviços da Hanby." em nova aba.
4. THE Site SHALL exibir no WhatsApp_Button um ícone reconhecível do WhatsApp com texto alternativo "Fale conosco pelo WhatsApp" para leitores de tela.
5. WHEN o Visitante passa o cursor sobre o WhatsApp_Button em dispositivo com mouse, THE Site SHALL exibir um tooltip com o texto "Fale conosco pelo WhatsApp".

---

### Requirement 9: Responsividade

**User Story:** Como Visitante que acessa o site por dispositivo móvel, tablet ou desktop, quero que o site se adapte ao meu dispositivo, para que eu tenha uma experiência de navegação confortável em qualquer tela.

#### Acceptance Criteria

1. THE Site SHALL adotar abordagem mobile-first garantindo que o layout base seja projetado para Viewport menor ou igual a 768 px e expandido progressivamente para Breakpoints maiores.
2. THE Site SHALL garantir que nenhum elemento de conteúdo ultrapasse a largura do Viewport em qualquer Breakpoint eliminando rolagem horizontal.
3. THE Site SHALL garantir que imagens e mídias sejam responsivas redimensionando-se proporcionalmente ao Viewport sem distorção.
4. THE Site SHALL garantir que fontes tenham tamanho mínimo de 16 px no corpo do texto em todos os Breakpoints.
5. THE Site SHALL garantir que todos os elementos interativos tenham área de toque mínima de 44 por 44 px em Viewports menores ou iguais a 768 px.
6. WHEN o Viewport tem largura menor ou igual a 768 px, THE Site SHALL ocultar elementos decorativos não essenciais que prejudiquem a performance ou legibilidade.

---

### Requirement 10: Acessibilidade

**User Story:** Como Visitante com deficiência visual, motora ou cognitiva, quero que o site seja acessível com tecnologias assistivas, para que eu possa navegar e obter informações sem barreiras.

#### Acceptance Criteria

1. THE Site SHALL garantir contraste mínimo de 4,5:1 entre texto e fundo para texto normal e 3:1 para texto grande (maior ou igual a 18 pt ou maior ou igual a 14 pt negrito) conforme WCAG_2_1_AA critério 1.4.3.
2. THE Site SHALL garantir que toda a navegação e interação seja realizável exclusivamente pelo teclado com indicador visual de foco claramente visível em todos os elementos interativos.
3. THE Site SHALL garantir que todas as imagens não decorativas possuam atributo alt descritivo e que imagens decorativas possuam alt vazio.
4. THE Site SHALL garantir que o Formulario_de_Contato tenha labels associados a cada campo via atributo for/id ou aria-label.
5. THE Site SHALL garantir que mensagens de erro do Formulario_de_Contato sejam anunciadas por leitores de tela via aria-live ou role="alert".
6. THE Site SHALL garantir que a estrutura de cabeçalhos H1 a H6 seja hierárquica e lógica com exatamente um H1 por página.
7. THE Site SHALL garantir que o menu hambúrguer tenha atributos aria-expanded e aria-controls atualizados dinamicamente conforme o estado aberto ou fechado.
8. THE Site SHALL declarar o idioma da página no atributo lang do elemento html como pt-BR.

---

### Requirement 11: SEO

**User Story:** Como gestor da Hanby, quero que o site apareça nos primeiros resultados de busca para termos relacionados a gestão ambiental em Joinville, para que potenciais clientes encontrem a empresa organicamente.

#### Acceptance Criteria

1. THE Site SHALL incluir em cada página uma Meta_Tag title única com até 60 caracteres contendo o nome da empresa e a palavra-chave principal da página.
2. THE Site SHALL incluir em cada página uma Meta_Tag description única com entre 120 e 160 caracteres descrevendo o conteúdo da página.
3. THE Site SHALL incluir Meta_Tags Open Graph (og:title, og:description, og:image, og:url) para compartilhamento em redes sociais.
4. THE Site SHALL incluir Schema_Markup do tipo LocalBusiness em JSON-LD com os dados: nome "Hanby — Gestão Ambiental e Inteligência de Dados", endereço, telefone, e-mail e URL.
5. THE Site SHALL disponibilizar um arquivo sitemap.xml listando todas as URLs públicas do Site.
6. THE Site SHALL disponibilizar um arquivo robots.txt permitindo a indexação de todas as páginas públicas.
7. THE Site SHALL garantir que todas as imagens possuam atributo alt descritivo com palavras-chave relevantes ao contexto ambiental.
8. THE Site SHALL garantir que URLs sejam amigáveis em letras minúsculas sem caracteres especiais e com hífens como separadores de palavras.
9. THE Site SHALL ser acessível via HTTPS com certificado SSL válido.

---

### Requirement 12: Performance

**User Story:** Como Visitante com conexão de internet limitada, quero que o site carregue rapidamente, para que eu não abandone a página antes de ver o conteúdo.

#### Acceptance Criteria

1. THE Site SHALL atingir LCP inferior a 2,5 segundos em conexão 4G simulada conforme métricas Core_Web_Vitals do Google.
2. THE Site SHALL atingir CLS inferior a 0,1 durante o carregamento da página inicial.
3. THE Site SHALL servir imagens nos formatos WebP ou AVIF com fallback para JPEG ou PNG em navegadores sem suporte.
4. THE Site SHALL aplicar lazy loading em imagens abaixo da dobra fora do Viewport inicial.
5. THE Site SHALL minificar arquivos CSS e JavaScript antes do deploy em produção.
6. THE Site SHALL utilizar cache de browser com cabeçalhos Cache-Control para assets estáticos com TTL mínimo de 86400 segundos (1 dia).
7. WHEN o Visitante acessa o Site em conexão lenta, THE Site SHALL exibir o conteúdo textual principal antes de carregar imagens pesadas utilizando carregamento progressivo.

---

### Requirement 13: Conformidade com LGPD

**User Story:** Como Visitante, quero ser informado sobre o uso dos meus dados pessoais e ter controle sobre o consentimento, para que minha privacidade seja respeitada conforme a legislação brasileira.

#### Acceptance Criteria

1. WHEN o Visitante acessa o Site pela primeira vez, THE Site SHALL exibir o Cookie_Banner informando sobre o uso de cookies e solicitando consentimento explícito.
2. WHEN o Visitante recusa cookies não essenciais no Cookie_Banner, THE Site SHALL desativar todos os scripts de rastreamento e analytics de terceiros.
3. THE Site SHALL disponibilizar a Politica_de_Privacidade descrevendo: quais dados são coletados, finalidade, base legal conforme LGPD, tempo de retenção, direitos do titular e canal de contato para exercício de direitos.
4. THE Site SHALL garantir que o Formulario_de_Contato inclua um checkbox de consentimento explícito para tratamento de dados pessoais com link para a Politica_de_Privacidade sendo este campo obrigatório para submissão.
5. IF o Visitante não marca o checkbox de consentimento no Formulario_de_Contato, THEN THE Site SHALL impedir a submissão e exibir mensagem informando que o consentimento é necessário.
6. THE Site SHALL transmitir todos os dados do Formulario_de_Contato exclusivamente via HTTPS.

---

### Requirement 14: Identidade Visual e Design

**User Story:** Como gestor da Hanby, quero que o site reflita fielmente a identidade visual da empresa, para que a marca seja percebida como profissional, confiável e alinhada ao tema ambiental.

#### Acceptance Criteria

1. THE Site SHALL utilizar a paleta de cores oficial da Hanby: verde escuro, verde médio, azul e branco conforme aprovação da empresa.
2. THE Site SHALL exibir o logotipo oficial da Hanby no menu de navegação e no Rodapé.
3. THE Site SHALL utilizar tipografia profissional com fonte sans-serif para corpo do texto e fonte de destaque para títulos mantendo consistência em todas as seções.
4. THE Site SHALL utilizar ícones e ilustrações com estilo visual consistente em todas as seções.
5. THE Site SHALL garantir espaçamento vertical mínimo de 64 px entre seções em desktop e 40 px em mobile.
6. THE Site SHALL garantir que animações e transições tenham duração máxima de 300 ms sem prejudicar a acessibilidade ou performance.
7. WHERE o sistema operacional do Visitante tiver a preferência prefers-reduced-motion ativada, THE Site SHALL desativar ou reduzir animações e transições automáticas.
