# Introdução

No cenário atual de avanços tecnológicos acelerados, os dispositivos eletrônicos tornaram-se uma extensão fundamental de nossas vidas. Entre as marcas líderes que conquistaram nosso entusiasmo e confiança, a Apple se destaca por sua dedicação implacável à inovação e qualidade. No entanto, mesmo os produtos de tecnologia mais excepcionais podem, ocasionalmente, requerer assistência para manter seu desempenho impecável.

É aqui que a jornada da assistência técnica autorizada Apple começa, oferecendo um elo crucial entre a excelência tecnológica e a satisfação do cliente.

Uma assistência técnica autorizada Apple é um ponto de contato essencial para os proprietários de produtos da marca enfrentarem desafios técnicos, desde pequenas consultas até reparos mais complexos.
 A Apple, reconhecida por sua estética inconfundível e funcionalidades inovadoras, estabeleceu um padrão elevado para a experiência do usuário.
  Como resultado, a assistência técnica autorizada deve alinhar-se a esses padrões, oferecendo um serviço que não apenas restaure a funcionalidade do dispositivo, mas também reflita a atenção aos detalhes e a dedicação à excelência que a marca representa.

## Problema

Um problema comum que uma assistência técnica autorizada pode enfrentar no atendimento ao cliente é a falta de comunicação clara e transparente em relação ao status dos reparos. Isso pode levar a frustração e insatisfação por parte dos clientes. Por outro lado a empresa sofre com um número alto de ligações e menssagens para responder, que tem por consequência uma atraso no atendimento ao cliente.

## Objetivos

Considerando o problema apresentado, o objetivo do projeto é desenvolver uma aplicação móvel prática e intuitiva, que oferece aos usuários um meio para acompanhar o andamento dos reparos de seus aparelhos.

Com o Aplicativo, será possível:
-  Informar ao cliente qual o tipo de reparo a ser feito.
-   O prazo para o serviço.
-   O status do serviço, informando quando finalizado.

## Justificativa

A criação deste aplicativo irá trazer diversos benefícios a empresa e ao usuário:

-   Satisfação do Cliente: A comunicação clara e transparente eleva a confiança no serviço a ser prestado, já que o cliente consegue verificar que seu aparelho está sendo consertado.
-   Reputação: O bom atendimento da empresa refletirá em boas recomendações em midias sociais  e em canais de avaliação online. 
-   Fidelização do cliente: A empresa poderá usar o cadastro dos usuários para ações de marketing.
-   Garantia: O cliente terá a comprovanção dos serviços prestados pela assistência técnica autorizada.

## Público-Alvo

O público-alvo para o aplicativo de assistência técnica autorizada Apple é composto por usuários de produtos Apple que necessitam de serviços de reparo, suporte e manutenção para seus dispositivos. Esse grupo de pessoas abrange uma ampla gama de idades e interesses, mas compartilha a característica de possuir produtos da marca Apple e procurar soluções de assistência técnica confiáveis e convenientes.


## Requisitos
As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicamos uma técnica de priorização de requisitos e detalhamos, em sequência, como a técnica foi aplicada.

A técnica MoSCoW foi aplicada para priorização dos requsitos:

Must Have (Tenho que fazer)
Should Have (Devo fazer)
Could Have (Poderia fazer)
Won’t Have (Não vou fazer)
Nesse sentido a ordem de importância das tarefas vai seguindo uma ordem decrescente, em que "Must Have" são as tarefas mais relevantes e as "Won’t Have" são tarefas que podem ficar para depois.

## Requisitos Funcionais

ID	Descrição do Requisito	Prioridade
RF-001	O sistema deverá permitir a criação de um perfil de usuário para o responsável do aparelho Apple ao seu e-mail.	ALTA
RF-002	O sistema deverá permitir a alteração e a exclusão dos dados de usuários, nesse caso, excluindo também qualquer aparelho Apple  vinculado a ele.	ALTA
RF-003	O sistema deverá permitir a inserção, a alteração e a exclusão dos dados de prestadores de serviços afiliados.	ALTA
RF-004	O sistema deverá permitir a adição de equipamento ( modelo,tipo do equipamento, etc.), permitindo a exibição de seus dados básicos.	ALTA
RF-005	O sistema deverá armazenar os dados  de manutenções efetuadas.	ALTA
RF-006	O sistema deverá gerar relatórios sobre os dados preenchidos pelos usuários.	MÉDIA
RF-007	O sistema deverá permitir a edição e a exclusão dos dados do aparelho Apple. 	MÉDIA
RF-008	O sistema deve emitir lembretes para os usuários.	MÉDIA
RF-009	O sistema deverá permitir a busca em lojas conveniadas próximas a sua localidade.	BAIXA

## Requisitos não Funcionais
ID	Descrição do Requisito	Prioridade
RNF-001	O sistema deve ser responsivo para rodar em diversos dispositivos móveis	ALTA
RNF-002	O sistema deve ser implementado utilizando React Native.	ALTA
RNF-003	A persistência dos dados será feita no banco JSON Server.	MÉDIA
RNF-004	O sistema deve processar requisições do usuário em no máximo 11 segundos.	BAIXA

## Restrições de Projeto:

## ID	Restrição 01:
Proibida a subcontratação ou terceirização de desenvolvimento do sistema em sua totalidade ou de módulos isolados.
## ID Restrição 02:
O projeto deve ser desenvolvido exclusivamente utilizando o framework React Native e a linguagem de programação JavaScript.
## ID Restrição 03:
Está permitida a utilização de frameworks prontos, como o Firebase, para facilitar a implementação do backend, funcionalidades de login e gestão de banco de dados.
## ID Restrição 04:
Todos os componentes, módulos e tarefas associadas ao projeto devem ser entregues dentro do prazo estipulado, sem exceções.
## ID Restrição 05:
Não será permitida a utilização de outras linguagens de programação além de JavaScript ou frameworks que não sejam compatíveis ou recomendados para uso com React Native.

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










