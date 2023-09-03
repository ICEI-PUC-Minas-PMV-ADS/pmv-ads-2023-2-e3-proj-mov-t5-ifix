# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/AutoApp/blob/6e8341aac6887998ec783beca8ce97995d7e896a/docs/01-Documenta%C3%A7%C3%A3o%20de%20Contexto.md"> Documentação de Contexto</a></span>

Nesta seção, apresentamos o diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições identificadas para o desenvolvimento deste projeto.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Tabela que se seguem.

| Cod | Tipo do Usuário               | Descrição                                                                                                                                                                                     |
| --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Usuário Leigo                 | Uma pessoa não técnico que possui um iPhone, mas tem dificuldades em lidar com problemas técnicos. Ele busca uma solução fácil para receber ajuda quando seu dispositivo apresenta problemas. |
| 2   | Técnico com Certificado Apple | Um profissional que deseja usar a plataforma para acessar manuais de reparo e obter informações técnicas detalhadas sobre produtos Apple, para melhor atender seus clientes.                  |
| 3   | Estudante Universitário       | Um estudante que possui um MacBook e depende muito dele para suas tarefas acadêmicas. Ele relata que procura uma maneira rápida de obter assistência em caso de falhas.                       |
| 4   | Cliente Fiel Apple            | Um entusiasta da Apple com vários produtos da marca, busca uma plataforma unificada para gerenciar seus dispositivos e receber suporte quando necessário.    
| 5   | Usuário Empresarial           | Uma pequena empresa que utiliza dispositivos Apple em sua operação diária, ele precisa de um canal eficiente para agendar reparos e minimizar a interrupção nas atividades comerciais.        |

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

| EU COMO... `PERSONA`      | QUERO/PRECISO ... `FUNCIONALIDADE`                               | PARA ... `MOTIVO/VALOR`                                                    |
| ------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Usuário Leigo             | relatar problemas com meu iPhone                                 | receber instruções simples e obter assistência técnica de maneira fácil.   |
| Técnico Certificado Apple | acessar manuais de reparo detalhados para produtos Apple         | executar reparos com mais eficácia e precisão.                             |
| Estudante Universitário   | agendar reparos rápidos para o meu MacBook                       | evitar interrupções em minhas atividades acadêmicas e continuar produtivo. |
| Cliente Fiel Apple        | receber notificações sobre o status do reparo do meu dispositivo | ficar atualizado sobre o progresso e estimativas de conclusão.             ||
| Usuário Empresarial       | um canal eficiente para agendar reparos                          | minimizar a interrupção nas atividades comerciais                       

## Indicadores de Desempenho

Os indicadores estabelecidos para a avaliação do desempenho do aplicativo do AutoApp, após sua disponibilização na Play Store e na Apple Store, são detalhados a seguir:

|Nº| Indicador | Objetivo | Descrição | Cálculo | Fonte de Dados | Perspectiva | Meta | Periodicidade |
|--|-----------|--------|-----------|--------|-----------|--------|-----------|-----------|
|01| Índice de avaliação na Play Store e Apple Store | Verificar a aceitação do aplicativo | Medir a média das avaliações dadas pelos usuários que baixaram e utilizaram o app  | Número de estrelas  | Play Store e Apple Store  | Qualidade do produto | Avaliação acima de 4 estrelas  | Semestral |
|02| Usuários cadastrados       | Mensurar a quantidade de cadastros efetuados no aplicativo  | Avaliar a taxa de cadastros realizados no aplicativo após download | nº de cadastro/período | Banco de Dados | Crescimento e Aprendizado | Chegar próximo à quantidade de downloadas efetuadas | Mensal |
|03| Download      | Acompanhar crescimento do aplicativo  | Avaliar a taxa de downloads na Play Store e Apple Store | nº de downloads/período | Play Store e Apple Store  | Aumentar nº de usuários | Crescimento e Aprendizado| Mensal |
|04| Reclamações    | Verificar as reclamações recebidas  | Verificar o índice de reclamações recebidas com relação ao app e respondê-las| nº de reclamações/downloads | Play Store e Apple Store  | Qualidade do Produto | índice 0% de reclamação| Mensal |
|05| Net Promoter Score | Satisfação dos usuários em relação ao app  | Medir a satisfação dos clientes | Diferença dos clientes promotores pelos detratores  | pergunta aos clientes que usam o app   | Melhoria contínua | Qualidade do produto| Semestral |
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicamos uma técnica de priorização de requisitos e detalhamos, em sequência, como a técnica foi aplicada.

A técnica MoSCoW foi aplicada para priorização dos requsitos:

- Must Have (Tenho que fazer)
- Should Have (Devo fazer)
- Could Have (Poderia fazer)
- Won’t Have (Não vou fazer)

Nesse sentido a ordem de importância das tarefas vai seguindo uma ordem decrescente, em que "Must Have" são as tarefas mais relevantes e as "Won’t Have" são tarefas que podem ficar para depois.

### Requisitos Funcionais
|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
| RF-001 | O sistema deverá permitir a criação de um perfil de usuário para o responsável aparelho Apple associado ao seu e-mail. | ALTA | 
| RF-002 | O sistema deverá permitir a alteração e a exclusão dos dados de usuários, nesse caso, excluindo também qualquer aparelho Apple vinculado a ele.   | ALTA | 
| RF-003 | O sistema deverá permitir a inserção, a alteração e a exclusão dos dados de prestadores de serviços afiliados.   | ALTA | 
| RF-004 | O sistema deverá permitir a adição de equipamento ( modelo,tipo do equipamento, etc.), permitindo a exibição de seus dados básicos.	ALTA
| RF-005 |O sistema deverá armazenar os dados  de manutenções efetuadas.	ALTA
| RF-006 | O sistema deverá gerar relatórios sobre os dados preenchidos pelos usuários. | MÉDIA |
| RF-007 | O sistema deverá permitir a edição e a exclusão dos dados do aparelho Apple
| RF-008 | O sistema deve emitir lembretes para os usuários. | MÉDIA |
| RF-009 | OO sistema deverá permitir a busca em lojas conveniadas próximas a sua localidade.	BAIXA

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RNF-001 | O sistema deve ser responsivo para rodar em diversos dispositivos móveis | ALTA | 
| RNF-002 | O sistema deve ser implementado utilizando React Native. | ALTA |
| RNF-003 | A persistência dos dados será feita no banco MySQL.  |  MÉDIA |
| RNF-004 | O sistema deve processar requisições do usuário em no máximo 11 segundos. |  BAIXA |
                                            
## Restrições de Projeto:

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Proibida a subcontratação ou terceirização de desenvolvimento do sistema em sua totalidade ou de módulos isolados. |
|02|O projeto deve ser desenvolvido exclusivamente utilizando o framework React Native e a linguagem de programação JavaScript.      |
|03| Está permitida a utilização de frameworks prontos, como o Firebase, para facilitar a implementação do backend, funcionalidades de login e gestão de banco de dados.  |
|04| Todos os componentes, módulos e tarefas associadas ao projeto devem ser entregues dentro do prazo estipulado, sem exceções.  |
|05| Não será permitida a utilização de outras linguagens de programação além de JavaScript ou frameworks que não sejam compatíveis ou recomendados para uso com React Native.  |

## Casos de Uso:

## 1. Cadastro de Usuário
Identificador: CU001
Nome: Cadastro de Usuário e Produtos Apple
Ator Principal: Usuário Final
Pré-condições: O usuário deve ter baixado o aplicativo e ter acesso à internet.
Fluxo Principal:
 1.	O usuário inicia o aplicativo e seleciona a opção "Cadastrar".
	2. O sistema apresenta um formulário de cadastro.
	3. O usuário insere suas informações básicas: nome, e-mail e senha.
	4. O usuário insere detalhes do produto Apple, incluindo tipo de dispositivo, modelo e número de série.
	5. O usuário seleciona "Concluir Cadastro".
	6. O sistema valida as informações e confirma o cadastro.
	7. O sistema envia um e-mail de confirmação ao usuário.

Fluxo Alternativo:
A. Em qualquer ponto, se o usuário decidir não prosseguir com o cadastro:
	1. O usuário seleciona "Cancelar".
	2. O sistema volta para a tela inicial.

Pós-condições: O usuário está cadastrado no sistema e pode começar a solicitar serviços de assistência técnica.

## 2. Solicitar Assistência Técnica
Identificador: CU002
Nome: Solicitar Assistência Técnica
Ator Principal: Usuário Final
Pré-condições: O usuário deve estar cadastrado e logado no aplicativo.
Fluxo Principal:
	1. O usuário inicia o aplicativo e faz login.
	2. O usuário seleciona a opção "Solicitar Assistência".
	3. O sistema apresenta um formulário de solicitação.
	4. O usuário descreve o problema que está enfrentando com seu dispositivo Apple.
	5. O usuário seleciona "Enviar Solicitação".
	6. O sistema registra a solicitação e notifica a assistência técnica autorizada.

Fluxo Alternativo:
A. Se o usuário decide voltar antes de enviar a solicitação:
	1. O usuário seleciona "Voltar".
	2. O sistema retorna à tela inicial.

Pós-condições: O pedido de assistência do usuário é registrado e a assistência técnica é notificada.

## 3. Acompanhar Status do Reparo
Identificador: CU003
Nome: Acompanhar Status do Reparo
Ator Principal: Usuário Final
Pré-condições: O usuário deve ter uma solicitação de reparo ativa.
Fluxo Principal:
	1. O usuário inicia o aplicativo e faz login.
	2. O usuário seleciona a opção "Acompanhar Reparo".
	3. O sistema mostra os detalhes da solicitação de reparo, incluindo o status atual.
	4. O usuário verifica as informações.
	5. Se desejar, o usuário pode selecionar "Atualizar" para verificar se houve mudanças no status do reparo.

Fluxo Alternativo:
A. Se o reparo estiver concluído:
	1. O sistema mostra a opção "Avaliar Serviço".
	2. O usuário pode fornecer feedback sobre a qualidade do serviço.

Pós-condições: O usuário está informado sobre o status atual de seu reparo


## Especificações em Matriz de rastreabilidade

| Necessidade/Requisito            | Funcionalidade/Atividade                         | Evidência                               |
| -------------------------------- | ------------------------------------------------ | --------------------------------------- |
| Acompanhamento de reparos        | Desenvolvimento do aplicativo móvel              | Aplicativo móvel em funcionamento       |
| Comunicação clara sobre status   | Implementar atualizações de status em tempo real | Status atualizado visível no aplicativo |
| Redução de ligações/mensagens    | Integrar notificações de status por push         | Notificações enviadas e recebidas       |
| Cadastro de usuários             | Criar sistema de registro e login                | Cadastro e login funcionais             |
| Informar tipo de reparo e prazo  | Mostrar detalhes do serviço e prazo de conclusão | Informações corretas exibidas           |
| Indicação de conclusão de reparo | Atualização do status para "Concluído"           | Mudança de status visível               |
| Melhorar reputação da empresa    | Coletar avaliações dos clientes                  | Avaliações positivas recebidas          |
| Fidelização do cliente           | Implementar programas de fidelidade              | Benefícios para usuários fiéis          |



#### Código & Detalhes: Gerais
| Cod		| Detalhes	   |
| :--:   | :--:		   |
| Po		| Jeosefa      |
| Responsável	| {nome}	|
> A tabela `Código & Detalhes: Gerais` acima contém informações de identificação e detalhes sobre elementos adicionais do projeto.


#### Código & Detalhes: Caso de testes
| Cod	| Detalhes							|
| :--:	| :--:								|
| CT-1	| Teste de Cadastro de Novos Usuários e Produtos Apple		|
| CT-2	| Teste de Cadastro com Dados Inválidos				|
| CT-3	| Teste de Cadastro de Produtos com Informações Incompletas	|
| CT-4	| Teste de Acompanhamento de Status de Atualização de Status	|
| CT-5	| Teste de Notificação						|
| CT-6	| Teste de Envio da Avaliação e Feedback do Cliente		|
>Esta tabela relaciona os códigos de Casos de Testes (CT) aos seus detalhes específicos. 
Os Casos de Testes representam situações de teste que serão executadas para validar a funcionalidade do projeto.


#### Código & Detalhes: Requisitos Funcionais
| Cod	| Detalhes					|
| :--:	| :--:						|
| RF-1	| Cadastro de usuários e produtos Apple		|
| RF-2 	| Solicitação de assistência técnica		|
| RF-3	| Acompanhamento do status de reparo		|
| RF-4	| Notificações sobre atualizações no status	|
| RF-5	| Acesso a guias de solução de problemas	|
| RF-6	| Avaliação e feedback pós-reparo		|
>Nesta tabela, os códigos de Requisitos Funcionais (RF) estão vinculados às suas descrições correspondentes. 
Os Requisitos Funcionais definem as funcionalidades específicas que o projeto deve oferecer para atender às necessidades dos usuários.


#### Código & Detalhes: Requisitos Não Funcionais
| Cod	| Detalhes									|
| :--:	| :--:                                                                     |
| RNF-1	| O sistema deve ser responsivo para rodar em diversos dispositivos móveis	|
| RNF-2	| O sistema deve ser implementado utilizando React Native			|
| RNF-3	| A persistência dos dados será feita no banco JSON Server			|
>Aqui, os códigos de Requisitos Não Funcionais (RNF) estão conectados às suas descrições. Os Requisitos Não Funcionais delineiam os critérios de desempenho, segurança e usabilidade que são importantes para o sucesso do projeto.


## Matriz de Rastreabilidade
A tabela a seguir apresenta a **matriz de rastreabilidade entre os elementos do projeto**. Os códigos utilizados nesta tabela correspondem aos _identificadores_ atribuídos aos `Requisitos Funcionais` (RF), `Requisitos Não Funcionais` (RNF), `Casos de Testes` (CT), e outros elementos relacionados. Cada célula da tabela mostra as _dependências_ e _relações_ entre esses _elementos_, permitindo uma _visualização clara das conexões_ que existem no âmbito do projeto.
|	      | Responsável	| PO	   | RF-1	| RF-2	| RF-3	| RF-4	| RF-5	| RF-6	| RNF-1	| RNF-2	| RNF-3	| CT-1	| CT-2	| CT-3	| CT-4	| CT-5	| CT-6   |
| :---:	| :---: 	      | :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:	| :--:   |
| Resp.	|		   |	      |	      |      	|   	   |      	|	      |	      |	      |	      |	      |	      |	      |	      |      	|      	|      |
| PO	   |	      |	      |      	|   	   |      	|	      |	      |	      |	      |	      |	      |	      |	      |      	|      	|	      |      |
| RF-1	|		   |	      |	      |   	   |      	|	      |      	|      	|      	|      	|      	|X      	|X      	|X      	|      	|      	|      |
| RF-2	|		   |	      |	      |      	|X      	|      	|      	|      	|      	|      	|      	|      	|X      	|      	|X      	|X      	|      |
| RF-3	|		   |	      |      	|X      	|      	|X      	|      	|      	|      	|      	|      	|      	|      	|      	|X      	|X      	|      |
| RF-4	|		   |	   |	|	|X	|	|X	|	|	|	|	|	|	|	|X	|	|	|
| RF-5	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|X	|	|
| RF-6	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|X	|
| RNF-1	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| RNF-2	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| RNF-3	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| CT-1	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| CT-2	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| CT-3	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| CT-4	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| CT-5	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|
| CT-6	|		   |	   |	|	|	|	|	|	|	|	|	|	|	|	|	|	|	|



## Gerenciamento de Projeto

De acordo com Vargas (2018), "[p]rojeto é um empreendimento não repetitivo, caracterizado por uma sequência clara e lógica de eventos, com início, meio e fim, que se destina a atingir um objetivo claro e definido, sendo conduzido por pessoas dentro de parâmetros predefinidos de tempo, custo, recursos envolvidos e qualidade." (VARGAS, 2018). Com essa definição em mente, desenvolvemos a documentação e o aplicativo AutoApp, tomando como base, também, os pressupostos sumarizados no PMBoK. 

De acordo com a sexta edição do PMBoK, as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos, um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e relacionam-se de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

Todo projeto, antes de iniciado, deve ser avaliado sob uma perspectiva financeira. Há algumas técnicas que podem ser utilizadas para fornecer tal perspectiva: valor presente líquido, taxa interna de retorno, análise de custo-benefício, payback ou cost of delay. Além disso, ter a visão do produto é de extrema importância para o início e o fim do projeto. 

## Divisão de Papéis

A equipe Ifix utiliza métodos ágeis como metodologia de trabalho de acompanhamento do projeto. O método Scrum foi definido como base do processo de desenvolvimento. A equipe está organizada da seguinte maneira:

-	Product Owner (P.O.): Jeosafa Boy Eller;
-	Scrum Master: Ronald Justiniano Costa ;
-	Equipe de Desenvolvimento: Taciana Emanuela Campos Vitorino, Ronald Justiniano Costa, Jeosafa Boy Eller
-	Equipe de Design: Felipe Corrêa Carneiro, Taciana Emanuela Campos Vitorino

A equipe trabalhará com divisões de tarefas e com encontros semanais após reunião com o P.O. para planejar e tirar dúvidas a respeito das tarefas delegadas.
Na primeira reunião de cada etapa, as tarefas serão organizadas e distribuídas.
Na segunda-feira que precede a entrega da etapa, a equipe irá se se reunir para revisar e alinhar se o que foi solicitado está pronto para ser entregue.
A Scrum Master acompanhará estas sprints (tarefas) semanalamente.

O projeto seguirá o seguinte fluxo de metodologia:

![Scrum](img/SCRUM.png)

Utilizando essa metodologia, prevê-se ter uma maior produtividade, melhoria na comunicação, maior qualidade, integração entre os integrantes, respostas a imprevistos.

## Gerenciamento de Tempo

Segundo Vargas (2018), o gerenciamento do cronograma tem como principal objetivo garantir que o projeto seja concluído dentro do prazo determinado.

Com diagramas bem organizados, que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

Para construir um bom diagrama, deve-se partir de um conjunto de atividades definidas, sequenciando-as de acordo com as dependências conhecidas entre si, estimando as durações das atividades individualmente e desenvolvendo a estrutura do projeto, em termos das tarefas e suas interações. É preciso, ademais, definir uma abordagem de ciclo de vida mais adequada ao projeto em questão.

O diagrama de rede pode ser entendido como um gráfico que mostra as tarefas que precisam ser realizadas para a finalização de um projeto. Além de mostrar as relações contínuas de atividades, mostra como fazer as atividades e o cronograma determina quando fazer as tarefas do projeto.

A seguir, encontra-se o diagrama de redes do projeto Ifix.

![Diagrama de Redes](img/diagrama_de_rede.png)

O gráfico de Gantt, ou diagrama de Gantt, também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.
A seguir, encontra-se o diagrama de Gantt do projeto Ifix, utilizado como ferramenta de gerenciamento do cronograma do projeto.

![Grafico de Gantt](img/grafico_de_gantt.jpg)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados.

A Gestão do Código Fonte e a Divisão de Papéis da equipe, bem como o ambiente utilizado para o gerenciamento de recursos, encontram-se detalhados no tópico de Metodologia.

A seguir, é descrito o planejamento que auxiliará e direcionará a gestão de recursos durante o projeto.

>**Planejar o gerenciamento de recursos**
-	Planejar como será feita a gestão de recursos do projeto;
-	Consultar opinião especializada sobre esse tipo de projeto;
-	Obter documentações necessárias para o desenvolvimento do projeto;
-	Atribuir funções às pessoas da equipe;
-	Planejar o cronograma de trabalho.

>**Estimar os recursos das atividades**
-	Analisar quais os recursos necessários para realização das atividades e quantificar;
-	Recursos humanos: desenvolvedores e gestores do projeto;
-	Recursos materiais: seis computadores com editores de código fonte instalados;
-	Acesso ao Figma;
-	Aulas PUC-Minas.

>**Adquirir recursos**
-	Acesso às aulas da PUC Minas via matrícula de alunos;
-	Acesso ao figma por contas vinculadas (gmail);
-	Alunos e componentes do projeto atuam como desenvolvedores e gestores;
-	Utilização de computadores dos alunos do projeto.

>**Desenvolver a equipe**
-	Treinamento da equipe em React Native;
-	Treinamento da equipe em gerenciamento de projetos;
-	Treinamento na utilização do Figma;
-	Soft skills.

>**Gerenciar a equipe**
-	Atualizar a documentação;
-	Atualizar outros fatores que podem influenciar no desenvolvimento do projeto;
-	Planejamento por entregas;
-	Atualização do plano de gerenciamento do projeto.

>**Controlar os recursos**
-	Informações sobre o desempenho e andamento do trabalho;
-	Atualizações sobre o plano de gerenciamento de recursos.


## Gestão de Orçamento

| Orçamento                     |     (R$)         |
| ----------------------------- | ------------ |
| **Recursos Humanos**            | **150,000** |
|   - Gerente de Projeto (4 meses)  | 12,000  |
|   - Desenvolvedor (6 meses) x 5   | 138,000 |
| **Hardware**                    | **15,000**  |
|   - Computadores e Equipamentos   | 10,000  |
|   - Dispositivos Móveis           | 5,000   |
| **Rede**                        |  **5,000**   |
|   - Equipamentos de Rede          | 3,000   |
|   - Instalação e Configuração     | 2,000   |
|  **Software**                    | **10,000**  |
|   - Licenças de Software          | 8,000   |
|   - Ferramentas de Desenvolvimento | 2,000  |
|  **Serviços**                     | **8,000**  |
|   - Consultoria Externa           | 5,000   |
|   - Suporte Técnico               | 3,000   |
| **Total**                       | **196,000** |

Detalhes para cada item:

- Recursos Humanos:
   - Gerente de Projeto (4 meses): O Gerente de Projeto receberá R$ 12,000 pelo período de 4 meses.
   - Desenvolvedores (6 meses) x 5: Cada um dos 5 desenvolvedores receberá R$ 23,000 (totalizando R$ 115,000) pelo período de 6 meses.

- Hardware:
   - Computadores e Equipamentos: O custo de hardware é de R$ 10,000 para adquirir computadores e outros equipamentos necessários.
   - Dispositivos Móveis: R$ 5,000 para dispositivos móveis necessários para o desenvolvimento e teste.

- Rede:
   - Equipamentos de Rede: Os equipamentos de rede têm um custo de R$ 3,000.
   - Instalação e Configuração: A instalação e configuração da rede têm um custo de R$ 2,000.

- Software:
   - Licenças de Software: R$ 8,000 para adquirir as licenças de software necessárias para o desenvolvimento.
   - Ferramentas de Desenvolvimento: R$ 2,000 para adquirir ferramentas específicas de desenvolvimento.

- Serviços:
   - Consultoria Externa: Custa R$ 5,000 para contratar serviços de consultoria externa.
   - Suporte Técnico: R$ 3,000 para serviços de suporte técnico ao longo do projeto.
