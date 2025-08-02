const aws_card_modulo_nove = [
	{
        "q": "O que é o AWS KMS?",
        "a": `
        <ul>
            <li>É um serviço gerenciado da AWS que permite criar, gerenciar e usar chaves criptográficas para criptografar e descriptografar dados.</li>
        </ul>
		`
    },
	{
        "q": "Que tipos de chaves o AWS KMS gerencia?",
        "a": `
        <ul>
            <li>CMKs (Customer Master Keys).</li>
			<li>KMS Keys (nome atualizado).</li>
			<li>Suporta chaves simétricas e assimétricas.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os modos principais de uso do KMS?",
        "a": `
        <ul>
            <li>Criptografar dados diretamente.</li>
			<li>Gerenciar chaves usadas por outros serviços da AWS.</li>
        </ul>
		`
    },
	{
        "q": "O KMS pode ser usado com outros serviços da AWS?",
        "a": `
        <ul>
            <li>Sim. É integrado com S3, EBS, RDS, Lambda, Secrets Manager, CloudTrail, entre outros.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma Customer Managed Key (CMK)?",
        "a": `
        <ul>
            <li>Uma chave gerenciada pelo usuário, com controle total de permissões, rotação e exclusão.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma AWS Managed Key?",
        "a": `
        <ul>
            <li>Chave criada e gerenciada pela AWS, usada por padrão nos serviços integrados (ex: S3 default encryption).</li>
        </ul>
		`
    },
	{
        "q": "O AWS KMS realiza criptografia simétrica ou assimétrica?",
        "a": `
        <ul>
            <li>Simétrica: padrão e mais comum</li>
			<li>Assimétrica: para casos como assinatura digital e criptografia com par de chaves pública/privada.</li>
        </ul>
		`
    },
	{
        "q": "O que é a rotação de chaves no KMS?",
        "a": `
        <ul>
            <li>É o processo de girar automaticamente uma nova versão da chave a cada ano (para CMKs com rotação ativada).</li>
        </ul>
		`
    },
	{
        "q": "Como o KMS protege as chaves?",
        "a": `
        <ul>
            <li>Utiliza HSMs (Hardware Security Modules) validados pelo FIPS 140-2, e nunca expõe a chave fora do serviço.</li>
        </ul>
		`
    },
	{
        "q": "Como funciona o controle de acesso no KMS?",
        "a": `
        <ul>
            <li>Usa políticas do IAM, políticas da chave e grants (autorizações temporárias) para controlar quem pode usar ou gerenciar a chave.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon ECS?",
        "a": `
        <ul>
            <li>É um serviço da AWS que permite executar e escalar aplicações em containers com gerenciamento automatizado.</li>
        </ul>
		`
    },
	{
        "q": "Quais modos de execução o ECS suporta?",
        "a": `
        <ul>
            <li>Fargate (serverless – sem precisar gerenciar servidores).</li>
			<li>EC2 (com instâncias EC2 gerenciadas pelo usuário).</li>
        </ul>
		`
    },
	{
        "q": "O ECS é compatível com Docker?",
        "a": `
        <ul>
            <li>Sim. Ele suporta imagens Docker e pode usar o Amazon Elastic Container Registry (ECR) para armazená-las.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma Task no ECS?",
        "a": `
        <ul>
            <li>Uma unidade de execução composta por um ou mais containers definidos em um task definition.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Task Definition?",
        "a": `
        <ul>
            <li>Um arquivo (JSON) que define como os containers serão executados, incluindo imagem, CPU, memória, redes, roles, etc.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Service no ECS?",
        "a": `
        <ul>
            <li>Um recurso que mantém um número desejado de tasks em execução, com balanceamento, atualização e recuperação automática.</li>
        </ul>
		`
    },
	{
        "q": "O ECS funciona com load balancer?",
        "a": `
        <ul>
            <li>Sim. Pode integrar com Application Load Balancer (ALB) ou Network Load Balancer (NLB) para distribuir tráfego.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre ECS e EKS?",
        "a": `
        <ul>
            <li>ECS: Orquestrador da AWS, mais simples, integrado nativamente.</li>
			<li>EKS: Orquestrador baseado em Kubernetes, mais flexível e complexo.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Fargate no contexto do ECS?",
        "a": `
        <ul>
            <li>Um modo de execução serverless onde a AWS gerencia a infraestrutura, e você foca apenas nos containers.</li>
        </ul>
		`
    },
	{
        "q": "O ECS pode usar autoscaling?",
        "a": `
        <ul>
            <li>Sim. O ECS pode ajustar o número de tasks automaticamente com base em métricas do CloudWatch.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Fargate?",
        "a": `
        <ul>
            <li>É um serviço serverless para containers, que permite executar containers sem precisar provisionar ou gerenciar servidores.</li>
        </ul>
		`
    },
	{
        "q": "Com quais orquestradores o Fargate é compatível?",
        "a": `
        <ul>
            <li>Amazon ECS | Amazon EKS.</li>
        </ul>
		`
    },
	{
        "q": "Quais recursos você define ao usar o Fargate?",
        "a": `
        <ul>
            <li>CPU  | Memória | Número de containers (task) | Definições de rede e permissões.</li>
        </ul>
		`
    },
	{
        "q": "O AWS Fargate é ideal para quais casos de uso?",
        "a": `
        <ul>
            <li>Aplicações baseadas em microserviços</li>
			<li>Jobs em batch</li>
			<li>APIs e backends escaláveis</li>
			<li>Ambientes com alta elasticidade.</li>
        </ul>
		`
    },
	{
        "q": "Como é o modelo de cobrança do Fargate?",
        "a": `
        <ul>
            <li>Você paga apenas pelo tempo de execução dos containers, com base em CPU e memória alocadas.</li>
        </ul>
		`
    },
	{
        "q": "Qual a principal vantagem do Fargate em relação ao ECS com EC2?",
        "a": `
        <ul>
            <li>Elimina a necessidade de gerenciar clusters de instâncias EC2, reduzindo a complexidade operacional.</li>
        </ul>
		`
    },	
	{
        "q": "O Fargate é seguro?",
        "a": `
        <ul>
            <li>Sim. Cada task roda em seu próprio ambiente isolado com microVMs, com suporte a IAM, VPC e encryption.</li>
        </ul>
		`
    },	
	{
        "q": "O que você não precisa configurar ao usar Fargate?",
        "a": `
        <ul>
            <li>Nenhuma instância EC2</li>
			<li>Nenhum AMI</li>
			<li>Nenhum cluster de infraestrutura.</li>
        </ul>
		`
    },	
	{
        "q": "O Fargate oferece escalabilidade automática?",
        "a": `
        <ul>
            <li>Sim, com autoscaling configurado no ECS ou EKS, é possível escalar tasks dinamicamente com base em métricas.</li>
        </ul>
		`
    },	
	{
        "q": "O Fargate pode usar armazenamento persistente?",
        "a": `
        <ul>
            <li>Sim. Suporta EFS (Elastic File System) para armazenamento compartilhado entre containers.</li>
        </ul>
		`
    },	
	{
        "q": "O que é o Amazon EKS?",
        "a": `
        <ul>
            <li>É um serviço gerenciado de Kubernetes que permite executar clusters Kubernetes na AWS, sem precisar gerenciar o plano de controle.</li>
        </ul>
		`
    },	
	{
        "q": "O que o EKS gerencia automaticamente?",
        "a": `
        <ul>
            <li>O plano de controle do Kubernetes (control plane), incluindo API server, etcd, escalabilidade e atualizações.</li>
        </ul>
		`
    },	
	{
        "q": "Quais modos de execução o EKS suport?",
        "a": `
        <ul>
            <li>Fargate (serverless).</li>
			<li>EC2 (nós gerenciados ou autogerenciados).</li>
			<li>EKS Anywhere (on-premises).</li>
			<li>EKS on Outposts.</li>
        </ul>
		`
    },	
	{
        "q": "Qual é a vantagem do EKS em relação ao ECS?",
        "a": `
        <ul>
            <li>O EKS é baseado em Kubernetes padrão da CNCF, oferecendo portabilidade, flexibilidade e um ecossistema aberto.</li>
        </ul>
		`
    },	
	{
        "q": "O EKS pode ser usado fora da AWS?",
        "a": `
        <ul>
            <li>Sim. Com EKS Anywhere, é possível executar clusters EKS on-premises ou em outras nuvens.</li>
        </ul>
		`
    },	
	{	
        "q": "O que é o EKS Fargate Profile?",
        "a": `
        <ul>
            <li>Um perfil que define quais pods devem ser executados no modo Fargate, ou seja, sem provisionar nós EC2.</li>
        </ul>
		`	
	},
	{
        "q": "O que são worker nodes no EKS?",
        "a": `
        <ul>
            <li>São as instâncias (EC2 ou Fargate) onde os pods do Kubernetes são executados.</li>
        </ul>
		`
    },	
	{	
        "q": "Como é feito o controle de acesso no EKS?",
        "a": `
        <ul>
            <li>Através de IAM para autenticação e RBAC (Role-Based Access Control) para autorização dentro do cluster.</li>
        </ul>
		`
	},
	{	
        "q": "O EKS pode ser integrado com serviços da AWS?",
        "a": `
        <ul>
            <li>Sim! Integra com CloudWatch, ALB, IAM, EBS, EFS, App Mesh, entre outros.</li>
        </ul>
		`
    },	
	{	
        "q": "Qual CLI é usada para interagir com o EKS?",
        "a": `
        <ul>
            <li>A kubectl, a ferramenta oficial do Kubernetes. O EKS também pode ser gerenciado via eksctl.</li>
        </ul>
		`
    },	
	{	
        "q": "O que é o Amazon ECR?",
        "a": `
        <ul>
            <li>É um repositório de imagens de container totalmente gerenciado, integrado ao Amazon ECS, EKS e AWS Fargate.</li>
        </ul>
		`
    },	
	{
        "q": "O ECR é compatível com o Docker?",
        "a": `
        <ul>
            <li>Sim. O Amazon ECR é compatível com Docker e OCI, e permite usar o comando docker push e docker pull.</li>
        </ul>
		`
    },	
	{	
        "q": "O que diferencia o ECR de repositórios como o Docker Hub?",
        "a": `
        <ul>
            <li>É nativo da AWS, com integração com IAM, criptografia automática, rede privada (VPC) e maior controle de segurança.</li>
        </ul>
		`
	},	
	{
        "q": "O que é um repositório no ECR?",
        "a": `
        <ul>
            <li>É um local lógico onde você armazena imagens de container, organizadas por nome e tags.</li>
        </ul>
		`
	},
	{	
        "q": "Quais recursos de segurança o ECR oferece?",
        "a": `
        <ul>
            <li>Criptografia em repouso com AWS KMS.</li>
			<li>Criptografia em trânsito com HTTPS.</li>
			<li>Políticas de acesso com IAM.</li>
			<li>Scan de vulnerabilidades nas imagens.</li>
        </ul>
		`
    },
	{	
        "q": "O ECR pode fazer escaneamento de vulnerabilidades?",
        "a": `
        <ul>
			<li>Sim. Ele oferece escaneamento de imagem automatizado, usando o Amazon Inspector ou mecanismos nativos.</li>
        </ul>
		`
    },
	{	
        "q": "O ECR pode armazenar imagens privadas e públicas?",
        "a": `
        <ul>
			<li>Sim. ECR Private: para repositórios privados.</li>
			<li>ECR Public: para imagens públicas disponíveis globalmente.</li>
        </ul>
		`
    },
	{	
        "q": "Como o ECR se integra com ECS/EKS?",
        "a": `
        <ul>
			<li>As tasks e pods podem puxar automaticamente imagens do ECR, usando permissões definidas com IAM roles.</li>
        </ul>
		`
    },
	{	
        "q": "O ECR é cobrado como?",
        "a": `
        <ul>
			<li>Armazenamento (GB/mês).</li>
			<li>Transferência de dados para fora da AWS.</li>
			<li>Escaneamento (se ativado).</li>
        </ul>
		`
    },
	{	
        "q": "ECR funciona em redes privadas?",
        "a": `
        <ul>
			<li>Sim. Você pode configurá-lo para funcionar com VPC endpoints (AWS PrivateLink) e manter tráfego interno.</li>
        </ul>
		`
    },
	{	
        "q": "O que é o AWS Cloud Map?",
        "a": `
        <ul>
			<li>É um serviço de descoberta de recursos e serviços que permite que aplicações localizem componentes de forma dinâmica e confiável.</li>
        </ul>
		`
    },
	{	
        "q": "Quais tipos de recursos podem ser registrados no AWS Cloud Map?",
        "a": `
        <ul>
			<li>Instâncias de serviço (com nome e IP).</li>
			<li>Endpoints HTTP/HTTPS.</li>
			<li>Recursos personalizados (como bancos de dados, filas, etc.).</li>
        </ul>
		`
    },
	{	
        "q": "Qual problema o AWS Cloud Map resolve?",
        "a": `
        <ul>
			<li>Ele evita a necessidade de configurações estáticas de endpoints, facilitando a descoberta automática e resiliente de serviços.</li>
        </ul>
		`
    },
	{	
        "q": "O AWS Cloud Map pode ser integrado com quais serviços?",
        "a": `
        <ul>
			<li>Amazon ECS.<li>
			<li>AWS App Mesh.<li>
			<li>EKS (indiretamente).<li>
			<li>Lambda (via registros personalizados).<li>
        </ul>
		`
    },
	{	
        "q": "O que é um namespace no Cloud Map?",
        "a": `
        <ul>
			<li>É um espaço de nomes lógico (como um domínio DNS) onde você define seus serviços, ex: app.local ou service.internal.<li>
        </ul>
		`
    },
	{	
        "q": "Quais tipos de namespace o AWS Cloud Map suporta?",
        "a": `
        <ul>
			<li>Private DNS (para uso interno via VPC).<li>
			<li>Public DNS (resolvido na internet).<li>
			<li>HTTP namespace (via API do Cloud Map).<li>
        </ul>
		`
    },
	{	
        "q": "O AWS Cloud Map suporta atualizações dinâmicas?",
        "a": `
        <ul>
			<li>Sim. Ele permite registrar, atualizar e remover dinamicamente serviços conforme eles iniciam ou param.<li>
        </ul>
		`
    },
	{	
        "q": "O AWS Cloud Map é baseado em DNS?",
        "a": `
        <ul>
			<li>Parcialmente. Ele pode ser usado via resolução DNS ou via API de descoberta (HTTP).<li>
        </ul>
		`
    },
	{	
        "q": "Qual serviço da AWS usa o Cloud Map para descoberta de serviço?",
        "a": `
        <ul>
			<li>O AWS App Mesh usa o Cloud Map para descobrir endpoints de microserviços de forma resiliente.<li>
        </ul>
		`
    },
	{	
        "q": "Quando usar o AWS Cloud Map?",
        "a": `
        <ul>
			<li>Quando você precisa de descoberta de serviços dinâmica, integração com DNS privado e monitoramento de integridade.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o AWS App Mesh?",
        "a": `
        <ul>
			<li>É um serviço de malha de serviço (service mesh) que permite controlar e observar a comunicação entre microserviços executados em diferentes ambientes da AWS.<li>
        </ul>
		`
    },
	{	
        "q": "Para que serve uma service mesh como o App Mesh?",
        "a": `
        <ul>
			<li>Para fornecer controle de tráfego, observabilidade, segurança e resiliência entre serviços distribuídos, sem alterar o código da aplicação.<li>
        </ul>
		`
    },
	{	
        "q": "Quais serviços da AWS são compatíveis com o App Mesh?",
        "a": `
        <ul>
			<li>Amazon ECS.<li>
			<li>Amazon EKS.<li>
			<li>AWS Fargate.<li>
			<li>EC2 diretamente.<li>
        </ul>
		`
    },
	{	
        "q": "O que é um Virtual Node no App Mesh?",
        "a": `
        <ul>
			<li>Representa um serviço real (como um pod ou container) dentro da malha. Cada Virtual Node é associado a um endereço de rede ou DNS.<li>
        </ul>
		`
    },
	{	
        "q": "O que é um Virtual Service no App Mesh?",
        "a": `
        <ul>
			<li>Um nome lógico que abstrai um serviço na malha e permite que ele aponte para um ou mais Virtual Nodes ou Virtual Routers.<li>
        </ul>
		`
    },
	{	
        "q": "O que é um Virtual Router no App Mesh?",
        "a": `
        <ul>
			<li>É o componente que define regras de roteamento entre Virtual Services e seus Virtual Nodes, permitindo balanceamento e controle de versões.<li>
        </ul>
		`
    },
	{	
        "q": "O App Mesh exige proxies?",
        "a": `
        <ul>
			<li>Sim. Utiliza sidecar proxies Envoy, que interceptam e gerenciam o tráfego entre os serviços.<li>
        </ul>
		`
    },
	{	
        "q": "O App Mesh pode realizar observabilidade?",
        "a": `
        <ul>
			<li>Sim. Ele coleta logs, métricas e traces com integração nativa com CloudWatch, X-Ray e Prometheus.<li>
        </ul>
		`
    },
	{	
        "q": "O App Mesh fornece criptografia?",
        "a": `
        <ul>
			<li>Sim. Suporta TLS mTLS (mutual TLS) para comunicação segura entre serviços.<li>
        </ul>
		`
    },
	{	
        "q": "Quando usar AWS App Mesh?",
        "a": `
        <ul>
			<li>Quando se precisa de controle centralizado e seguro de tráfego entre microserviços, observabilidade detalhada e implementações de deploy progressivo (como canary ou blue/green).<li>
        </ul>
		`
    },
	{	
        "q": "O que é o AWS Lambda?",
        "a": `
        <ul>
			<li>É um serviço de computação serverless da AWS que executa código em resposta a eventos, sem precisar gerenciar servidores.<li>
        </ul>
		`
    },
	{	
        "q": "Quais linguagens o AWS Lambda suporta nativamente?",
        "a": `
        <ul>
			<li>Python | Node.js | Java | Go | Ruby | .NET Core | Também permite runtimes personalizados (custom runtimes).<li>
        </ul>
		`
    },
	{	
        "q": "Como o código é executado no AWS Lambda?",
        "a": `
        <ul>
			<li> O código é executado dentro de ambientes isolados (containers) que escalam automaticamente conforme a demanda.<li>
        </ul>
		`
    },
	{	
        "q": "O que pode disparar uma função Lambda?",
        "a": `
        <ul>
			<li>Eventos do S3, DynamoDB, Kinesis, SNS, SQS, API Gateway, EventBridge, entre outros Execução direta via SDK ou CLI.<li>
        </ul>
		`
    },
	{	
        "q": "Como o Lambda é cobrado?",
        "a": `
        <ul>
			<li>Número de execuções | Duração da execução (em milissegundos) | Memória alocada.<li>
        </ul>
		`
    },
	{	
        "q": "O AWS Lambda escala automaticamente?",
        "a": `
        <ul>
			<li>Sim. Ele escala automaticamente para atender ao volume de eventos, podendo processar milhares de requisições simultâneas.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Lambda@Edge?",
        "a": `
        <ul>
			<li>Permite executar funções Lambda em locais distribuídos globalmente (com Amazon CloudFront), para reduzir latência.<li>
        </ul>
		`
    },
	{	
        "q": "Qual o tempo máximo de execução de uma função Lambda?",
        "a": `
        <ul>
			<li>15 minutos (900 segundos) por invocação.<li>
        </ul>
		`
    },
	{	
        "q": "O Lambda pode acessar recursos em uma VPC?",
        "a": `
        <ul>
			<li>Sim. Você pode configurar a função Lambda para executar dentro de uma VPC privada, com acesso a bancos, servidores, etc.<li>
        </ul>
		`
    },
	{	
        "q": "O que são camadas (layers) no AWS Lambda?",
        "a": `
        <ul>
			<li>São pacotes reutilizáveis de código ou bibliotecas que podem ser compartilhados entre múltiplas funções Lambda.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Amazon API Gateway?",
        "a": `
        <ul>
			<li>É um serviço gerenciado da AWS que permite criar, publicar, monitorar e proteger APIs RESTful, HTTP e WebSocket em grande escala.<li>
        </ul>
		`
    },
	{	
        "q": "Quais tipos de API o API Gateway suporta?",
        "a": `
        <ul>
			<li>REST APIs.<li>
			<li>HTTP APIs (mais leve e rápida).<li>
			<li>WebSocket APIs (para comunicação bidirecional em tempo real).<li>
        </ul>
		`
    },
	{	
        "q": "O API Gateway pode se integrar com quais backends?",
        "a": `
        <ul>
			<li>AWS Lambda.<li>
			<li>Serviços HTTP/HTTPS externos.<li>
			<li>AWS services via VPC Link.<li>
			<li>Step Functions, DynamoDB, etc.<li>
        </ul>
		`
    },
	{	
        "q": "Qual a diferença entre REST API e HTTP API no API Gateway?",
        "a": `
        <ul>
			<li>HTTP API: mais leve, com menor latência e custo.<li>
			<li>REST API: oferece recursos avançados como autorizadores personalizados, API keys, modelos de transformação, caching.<li>
        </ul>
		`
    },
	{	
        "q": "Como o API Gateway trata autenticação e autorização?",
        "a": `
        <ul>
			<li>IAM roles/policies.<li>
			<li>Cognito User Pools.<li>
			<li>Lambda Authorizers (Custom Authorizers).<li>
			<li>JWT com OIDC (em HTTP APIs).<li>
			<li>REST API: oferece recursos avançados como autorizadores personalizados, API keys, modelos de transformação, caching.<li>
        </ul>
		`
    },
	{	
        "q": "O API Gateway tem suporte a CORS?",
        "a": `
        <ul>
			<li>Sim, ele suporta CORS (Cross-Origin Resource Sharing) e pode ser configurado por recurso ou método.<li>
        </ul>
		`
    },
	{	
        "q": "O API Gateway realiza throttling e rate limiting?",
        "a": `
        <ul>
			<li>Sim. É possível configurar limites de requisição por cliente e planos de uso (usage plans) com API keys.<li>
        </ul>
		`
    },
	{	
        "q": "Como o API Gateway pode proteger contra ataques DDoS?",
        "a": `
        <ul>
			<li>Integração com AWS WAF.<li>
			<li>Proteção nativa via AWS Shield Standard.<li>
			<li>Throttling automático.<li>
        </ul>
		`
    },
	{	
        "q": "O API Gateway oferece caching de respostas?",
        "a": `
        <ul>
			<li>Sim, nas REST APIs, com Amazon CloudFront integrado, para melhorar desempenho e reduzir chamadas ao backend.<li>
        </ul>
		`
    },
	{	
        "q": "Quando usar o API Gateway com AWS Lambda?",
        "a": `
        <ul>
			<li>Quando você quer criar APIs serverless e expor funções Lambda como endpoints HTTP/RESTful, com autenticação, logging e escalabilidade.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o AWS Step Functions?",
        "a": `
        <ul>
			<li>É um serviço de orquestração serverless que permite coordenar múltiplos serviços da AWS em fluxos de trabalho visuais e baseados em estados.<li>
        </ul>
		`
    },
	{	
        "q": "Qual linguagem é usada para definir os workflows no Step Functions?",
        "a": `
        <ul>
			<li>Amazon States Language (ASL) — uma linguagem baseada em JSON usada para descrever os estados e transições.<li>
        </ul>
		`
    },
	{	
        "q": "O que é uma state machine no Step Functions?",
        "a": `
        <ul>
			<li>É a definição do fluxo de trabalho, composta por estados como tarefas, escolhas, paralelos e esperas.<li>
        </ul>
		`
    },
	{	
        "q": "Quais são os tipos de estado no AWS Step Functions?",
        "a": `
        <ul>
			<li>Choice | Parallel | Wait | Pass | Fail / Succeed.<li>
        </ul>
		`
    },
	{	
        "q": "O Step Functions é integrado com quais serviços da AWS?",
        "a": `
        <ul>
			<li>AWS Lambda | ECS/Fargate | SNS, SQS, DynamoDB | Glue, SageMaker, EMR, Batch | SDK integrations (mais de 200 serviços).<li>
        </ul>
		`
    },
	{	
        "q": "O que são Standard Workflows e Express Workflows?",
        "a": `
        <ul>
			<li>Standard: Para execuções longas e rastreáveis (até 1 ano).<li>
			<li>Express: Para execuções curtas e de alta taxa (até 5 minutos).<li>
        </ul>
		`
    },
	{	
        "q": "O que acontece se um passo falhar em uma state machine?",
        "a": `
        <ul>
			<li>É possível definir tratamento de erros (retry/catch), fluxos alternativos ou falhas controladas.<li>
        </ul>
		`
    },
	{	
        "q": "Como visualizar e depurar execuções no Step Functions?",
        "a": `
        <ul>
			<li>Pela interface gráfica no console da AWS, com logs detalhados por estado e integração com o CloudWatch Logs.<li>
        </ul>
		`
    },
	{	
        "q": "O AWS Step Functions escala automaticamente?",
        "a": `
        <ul>
			<li>Sim. Ele orquestra serviços sem precisar escalar recursos manualmente.<li>
        </ul>
		`
    },
	{	
        "q": "Quando usar AWS Step Functions?",
        "a": `
        <ul>
			<li>Para automatizar fluxos de tarefas complexas.<li>
			<li>Para orquestrar microserviços ou funções Lambda.<li>
			<li>Para controle de execução, paralelismo e lógica condicional.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Pilar Excelência Operacional?",
        "a": `
        <ul>
			<li>Foca em executar e monitorar sistemas para entregar valor ao negócio e melhorar continuamente processos e procedimentos.<li>
        </ul>
		`
    },
	{	
        "q": "Quais práticas são recomendadas no Pilar Excelência Operacional?",
        "a": `
        <ul>
			<li>Automação de operações.<li>
			<li>Monitoramento contínuo.<li>
			<li>Gestão de mudanças e incidentes.<li>
			<li>Melhoria contínua.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Pilar Confiabilidade?",
        "a": `
        <ul>
			<li>Garante que um sistema execute sua função de forma consistente e resiliente, incluindo recuperação rápida de falhas e escalabilidade.<li>
        </ul>
		`
    },
	{	
        "q": "Quais aspectos o Pilar Confiabilidade aborda?",
        "a": `
        <ul>
			<li>Tolerância a falhas.<li>
			<li>Recuperação automática.<li>
			<li>Escalabilidade.<li>
			<li>Testes de resiliência.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Pilar Segurança?",
        "a": `
        <ul>
			<li>Protege informações, sistemas e ativos com foco em confidencialidade, integridade, disponibilidade e conformidade.<li>
        </ul>
		`
    },
	{	
        "q": "Quais são os principais pontos do Pilar Segurança?",
        "a": `
        <ul>
			<li>Gestão de identidade e acesso (IAM).<li>
			<li>Detecção e resposta a incidentes.<li>
			<li>Proteção de dados (criptografia).<li>
			<li>Gerenciamento de riscos e conformidade.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Pilar Eficiência de Performance?",
        "a": `
        <ul>
			<li>Usa recursos de TI de forma eficiente para atender requisitos de desempenho e escalar conforme demanda.<li>
        </ul>
		`
    },
	{	
        "q": "Como garantir Eficiência de Performance?",
        "a": `
        <ul>
			<li>Escolha adequada de recursos.<li>
			<li>Monitoramento de performance.<li>
			<li>Ajuste dinâmico e escalabilidade.<li>
			<li>Uso de tecnologias modernas e otimizadas.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Pilar Otimização de Custo?",
        "a": `
        <ul>
			<li>Controla e reduz custos, mantendo valor máximo para o negócio, evitando desperdícios.<li>
        </ul>
		`
    },
	{	
        "q": "Quais práticas para Otimização de Custo?",
        "a": `
        <ul>
			<li>Uso de recursos sob demanda.<li>
			<li>Monitoramento e análise de gastos.<li>
			<li>Eliminação de recursos ociosos.<li>
			<li>Escolha de planos e serviços adequados.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o Pilar Sustentabilidade?",
        "a": `
        <ul>
			<li>Promove o uso eficiente de recursos para minimizar impactos ambientais e contribuir para a sustentabilidade do negócio.<li>
        </ul>
		`
    },
	{	
        "q": "Como aplicar o Pilar Sustentabilidade?",
        "a": `
        <ul>
			<li>Otimização do consumo de energia.<li>
			<li>Uso consciente de recursos computacionais.<li>
			<li>Monitoramento ambiental e de uso.<li>
        </ul>
		`
    },
	{	
        "q": "O que é o AWS Storage Gateway?",
        "a": `
        <ul>
			<li>É um serviço híbrido que conecta ambientes locais (on-premises) ao armazenamento na nuvem AWS, facilitando a integração entre os dois.<li>
        </ul>
		`
    },
	{	
        "q": "Quais são os principais tipos de gateway do AWS Storage Gateway?",
        "a": `
        <ul>
			<li>File Gateway (NFS/SMB para armazenamento de arquivos).<li>
			<li>Volume Gateway (armazenamento em bloco).<li>
			<li>Tape Gateway (backup em fita virtual).<li>
        </ul>
		`
    },
	{	
        "q": "Para que serve o File Gateway?",
        "a": `
        <ul>
			<li>Permite que aplicativos locais acessem objetos no Amazon S3 via protocolos de arquivos como NFS e SMB.<li>
        </ul>
		`
    },
	{	
        "q": "Qual a função do Volume Gateway?",
        "a": `
        <ul>
			<li>Fornece armazenamento em bloco para backups e recuperação, com modos cached (dados na nuvem) e stored (dados locais).</li>
		`
    },
	{	
        "q": "O que é o Tape Gateway?",
        "a": `
        <ul>
			<li>Simula fitas magnéticas virtuais para backup, integrando com soluções de backup existentes, armazenando dados no Amazon S3 e Glacier.</li>
		`
    },
	{	
        "q": "Como o Storage Gateway se conecta à AWS?",
        "a": `
        <ul>
			<li>Via VPN ou rede dedicada, transferindo dados para serviços como S3, Glacier e EBS.</li>
		`
    },
	{	
        "q": "Quais benefícios o AWS Storage Gateway oferece?",
        "a": `
        <ul>
			<li>Backup e recuperação híbridos.</li>
			<li>Migração de dados gradual.</li>
			<li>Redução de custos com armazenamento na nuvem.</li>
			<li>Compatibilidade com aplicações locais.</li>
		`
    },
	{	
        "q": "Como o Storage Gateway gerencia a segurança dos dados?",
        "a": `
        <ul>
			<li>Criptografia em trânsito e em repouso.</li>
			<li>Controle de acesso via IAM.</li>
			<li>Logs e monitoramento com CloudWatch.</li>
		`
    },
	{	
        "q": "O Storage Gateway é adequado para quais casos de uso?",
        "a": `
        <ul>
			<li>Backup e arquivamento híbrido.</li>
			<li>Migração incremental para nuvem.</li>
			<li>Acesso rápido a dados locais e em nuvem.</li>
			<li>Extensão de armazenamento on-premises.</li>
		`
    },
	{	
        "q": "O AWS Storage Gateway é um serviço totalmente gerenciado?",
        "a": `
        <ul>
			<li>Sim, a AWS gerencia a infraestrutura de backend, enquanto o gateway local é configurado e mantido pelo cliente.</li>
		`
    },
]
  