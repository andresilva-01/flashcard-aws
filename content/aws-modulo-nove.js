const aws_card_modulo_nove = [
	{
        "q": "O que é o Amazon EC2 Auto Scaling?",
        "a": `
        <ul>
            <li>É um serviço que permite aumentar ou reduzir automaticamente o número de instâncias EC2 com base em políticas definidas, garantindo disponibilidade e economia de custos.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais componentes do EC2 Auto Scaling?",
        "a": `
        <ul>
            <li>Launch Template / Launch Configuration.</li>
			<li>Auto Scaling Group (ASG).</li>
			<li>Scaling Policies.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Auto Scaling Group (ASG)?",
        "a": `
        <ul>
            <li>É um grupo de instâncias EC2 com regras para escalar horizontalmente, mantendo um número mínimo, máximo e desejado de instâncias.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os tipos de escalonamento no EC2 Auto Scaling?",
        "a": `
        <ul>
            <li>Escalonamento dinâmico (dynamic scaling).</li>
			<li>Escalonamento preditivo (predictive scaling).</li>
			<li>Escalonamento baseado em programação (scheduled scaling).</li>
        </ul>
		`
    },
	{
        "q": "O que é escalonamento dinâmico?",
        "a": `
        <ul>
            <li>Ajusta automaticamente o número de instâncias com base em métricas monitoradas, como uso de CPU ou tráfego de rede.</li>
        </ul>
		`
    },
	{
        "q": "O que é escalonamento preditivo?",
        "a": `
        <ul>
            <li>Usa machine learning da AWS para prever a demanda futura e escalar antecipadamente com base em padrões históricos.</li>
        </ul>
		`
    },
	{
        "q": "O que acontece quando uma instância em um ASG falha?",
        "a": `
        <ul>
            <li>O Auto Scaling detecta e substitui automaticamente a instância defeituosa para manter a capacidade desejada.</li>
        </ul>
		`
    },
	{
        "q": "É possível usar instâncias spot com Auto Scaling?",
        "a": `
        <ul>
            <li>Sim, você pode configurar Mixed Instance Policies para usar uma combinação de instâncias sob demanda e spot.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Launch Template?",
        "a": `
        <ul>
            <li>É um recurso que define as configurações da instância EC2 (AMI, tipo, chave SSH, etc.) usadas pelo Auto Scaling para iniciar novas instâncias.</li>
        </ul>
		`
    },
	{
        "q": "Qual serviço da AWS pode monitorar métricas para acionar escalonamento automático?",
        "a": `
        <ul>
            <li>Amazon CloudWatch, que coleta métricas como CPU, memória (custom), latência, etc., e aciona ações com base em alarmes.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon Elastic Load Balancing (ELB)?",
        "a": `
        <ul>
            <li>É um serviço gerenciado da AWS que distribui automaticamente o tráfego de entrada entre múltiplos destinos (como instâncias EC2) para garantir alta disponibilidade e escalabilidade.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os 3 principais tipos de Load Balancers no ELB?",
        "a": `
        <ul>
            <li>Application Load Balancer (ALB).</li>
			<li>Network Load Balancer (NLB).</li>
			<li>Gateway Load Balancer (GWLB).</li>
        </ul>
		`
    },
	{
        "q": "Quando usar um Application Load Balancer (ALB)?",
        "a": `
        <ul>
            <li>Para tráfego HTTP/HTTPS, com recursos de roteamento baseado em conteúdo, autenticação, e suporte a WebSockets.</li>
        </ul>
		`
    },
	{
        "q": "Quando usar um Network Load Balancer (NLB)?",
        "a": `
        <ul>
            <li>Para tráfego TCP/UDP de alto desempenho e baixa latência, ideal para aplicações que exigem conexões rápidas e estáveis.</li>
        </ul>
		`
    },
	{
        "q": "Quando usar um Gateway Load Balancer (GWLB)?",
        "a": `
        <ul>
            <li>Para inspeção e segurança de tráfego em camadas mais baixas (L3/L4), com suporte a firewalls de terceiros e appliances de rede.</li>
        </ul>
		`
    },
	{
        "q": "O ELB funciona em quais camadas do modelo OSI?",
        "a": `
        <ul>
            <li>ALB: Camada 7 (aplicação).</li>
			<li>NLB: Camada 4 (transporte).</li>
			<li>GWLB: Camada 3/4 (rede/transporte).</li>
        </ul>
		`
    },
	{
        "q": "O que é um Target Group no ELB?",
        "a": `
        <ul>
            <li>É um conjunto de destinos (instâncias EC2, IPs ou lambdas) que o load balancer pode encaminhar tráfego, com verificações de saúde aplicadas a cada destino.</li>
        </ul>
		`
    },
	{
        "q": "Qual load balancer suporta Lambda functions como destino?",
        "a": `
        <ul>
            <li>Application Load Balancer (ALB).</li>
        </ul>
		`
    },
	{
        "q": "O ELB realiza verificações de saúde (health checks)?",
        "a": `
        <ul>
            <li>Sim. O ELB monitora os destinos com health checks e só envia tráfego para os que estiverem saudáveis.</li>
        </ul>
		`
    },
	{
        "q": "O ELB é um serviço regional ou global?",
        "a": `
        <ul>
            <li>Regional – Ele distribui tráfego entre zonas de disponibilidade dentro da mesma região.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon Aurora Serverless?",
        "a": `
        <ul>
            <li>É uma versão sob demanda e com escalabilidade automática do Amazon Aurora, que ajusta a capacidade do banco de dados automaticamente com base no uso.</li>
        </ul>
		`
    },
	{
        "q": "Amazon Aurora Serverless é compatível com quais bancos de dados?",
        "a": `
        <ul>
            <li>É uma versão sob demanda e com escalabilidade automática do Amazon Aurora, que ajusta a capacidade do banco de dados automaticamente com base no uso.</li>
        </ul>
		`
    },
	{
        "q": "Qual a principal vantagem do Aurora Serverless em relação ao Aurora padrão?",
        "a": `
        <ul>
            <li>Não exige provisionamento de capacidade fixa — você paga apenas pelo uso real, e ele escala automaticamente.</li>
        </ul>
		`
    },
	{
        "q": "Qual a principal vantagem do Aurora Serverless em relação ao Aurora padrão?",
        "a": `
        <ul>
            <li>Aurora Serverless v1.</li>
			<li>Aurora Serverless v2 (mais avançada, com escalonamento quase instantâneo e granular).</li>
        </ul>
		`
    },
	{
        "q": "O que são Aurora Capacity Units (ACUs)?",
        "a": `
        <ul>
            <li>Unidade de medida usada no Aurora Serverless para indicar capacidade computacional e de memória combinadas, usadas para cobrança e escalabilidade.</li>
        </ul>
		`
    },
	{
        "q": "O Aurora Serverless pode ser usado em aplicações sem tráfego constante?",
        "a": `
        <ul>
            <li>Sim. Ele é ideal para aplicações intermitentes ou imprevisíveis, pois pode até pausar automaticamente durante inatividade.</li>
        </ul>
		`
    },
	{
        "q": "Aurora Serverless v2 oferece alta disponibilidade?",
        "a": `
        <ul>
            <li>Sim. Aurora Serverless v2 roda em multi-AZ com failover automático, semelhante ao Aurora provisionado.</li>
        </ul>
		`
    },
	{
        "q": "O Aurora Serverless se integra com quais ferramentas da AWS?",
        "a": `
        <ul>
            <li>Lambda</li>
			<li>API Gateway</li>
			<li>Secrets Manager</li>
			<li>CloudWatch</li>
			<li>RDS Proxy (opcional).</li>
        </ul>
		`
    },
	{
        "q": "Aurora Serverless substitui o Amazon RDS?",
        "a": `
        <ul>
            <li>Não. Ele é uma opção complementar, ideal para cargas variáveis. RDS continua sendo usado para cargas constantes e altamente controladas.</li>
        </ul>
		`
    },
	{
        "q": "Qual versão do Aurora Serverless deve ser usada para produção moderna?",
        "a": `
        <ul>
            <li>Aurora Serverless v2, pois oferece resposta mais rápida, melhor escalabilidade, suporte a mais recursos e alta disponibilidade aprimorada.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon CloudWatch?",
        "a": `
        <ul>
            <li>É um serviço da AWS para monitorar recursos e aplicações, coletando métricas, logs e eventos em tempo real.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais componentes do CloudWatch?",
        "a": `
        <ul>
            <li>Métricas (Metrics)</li>
			<li>Logs (Log Groups e Streams)</li>
			<li>Alarmes (Alarms)</li>
			<li>Painéis (Dashboards)</li>
			<li>Eventos (EventBridge/Rules)</li>
			<li>CloudWatch Logs Insights.</li>
        </ul>
		`
    },
	{
        "q": "O que são métricas no Amazon CloudWatch?",
        "a": `
        <ul>
            <li>Dados numéricos sobre o desempenho de recursos AWS, como uso de CPU, memória, latência, throughput etc.</li>
        </ul>
		`
    },
	{
        "q": "O que são os CloudWatch Logs?",
        "a": `
        <ul>
            <li>Um sistema que coleta e armazena logs de aplicações e serviços para análise, pesquisa e monitoramento.</li>
        </ul>
		`
    },
	{
        "q": "O que um CloudWatch Alarm pode fazer?",
        "a": `
        <ul>
            <li>Pode monitorar uma métrica e acionar ações quando atinge determinado limiar — como enviar notificações, executar autoscaling ou funções Lambda.</li>
        </ul>
		`
    },
	{
        "q": "O que é o CloudWatch Logs Insights?",
        "a": `
        <ul>
            <li>Uma ferramenta integrada para consultar e analisar logs com SQL-like queries, diretamente no console da AWS.</li>
        </ul>
		`
    },
	{
        "q": "Qual a função dos CloudWatch Dashboards?",
        "a": `
        <ul>
            <li>Permitem visualizar métricas e alarmes em painéis customizados para fácil monitoramento visual.</li>
        </ul>
		`
    },
	{
        "q": "O Amazon CloudWatch substitui o Amazon EventBridge?",
        "a": `
        <ul>
            <li>Não. Mas o CloudWatch Events foi integrado ao EventBridge, que agora é usado para roteamento de eventos.</li>
        </ul>
		`
    },
	{
        "q": "O CloudWatch pode monitorar apenas serviços da AWS?",
        "a": `
        <ul>
            <li>Não. Ele também pode coletar métricas e logs customizados de aplicações e servidores on-premises.</li>
        </ul>
		`
    },
	{
        "q": "Como o CloudWatch se relaciona com o Auto Scaling?",
        "a": `
        <ul>
            <li>Ele dispara alarmes com base em métricas, que podem acionar ações de Auto Scaling em instâncias EC2 automaticamente.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon Route 53?",
        "a": `
        <ul>
            <li>É o serviço de DNS gerenciado da AWS que fornece registro de domínios, roteamento de tráfego e verificação de integridade (health checks).</li>
        </ul>
		`
    },
	{
        "q": "Por que o nome Route 53?",
        "a": `
        <ul>
            <li>Porque o DNS usa a porta 53, e o serviço é focado em roteamento e resolução de nomes.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os três principais recursos do Route 53?",
        "a": `
        <ul>
            <li>Registro de domínios.</li>
			<li>Serviço de DNS (Zone Files).</li>
			<li>Verificações de integridade (Health Checks).</li>
        </ul>
		`
    },
	},
	{
        "q": "O que é uma zona hospedada (hosted zone)?",
        "a": `
        <ul>
            <li>É um conjunto de registros DNS gerenciados no Route 53 para um domínio específico.</li>
        </ul>
		`
    },
	{
        "q": "Quais tipos de registros o Route 53 suporta?",
        "a": `
        <ul>
            <li>Suporta todos os principais tipos: A, AAAA, CNAME, MX, TXT, NS, SOA, SRV, PTR e Alias.</li>
        </ul>
		`
    },
	{
        "q": "O que é um registro Alias no Route 53?",
        "a": `
        <ul>
            <li>Um tipo especial de registro que permite apontar para recursos da AWS (como ELB, CloudFront, S3) sem custo adicional de consultas.</li>
        </ul>
		`
    },	
	{
        "q": "O que é roteamento baseado em latência?",
        "a": `
        <ul>
            <li>Direciona usuários para a região com menor latência medida para a origem da requisição.</li>
        </ul>
		`
    },
	{
        "q": "O Route 53 pode realizar failover?",
        "a": `
        <ul>
            <li>Sim, com verificações de integridade (health checks), pode redirecionar o tráfego para recursos de backup em caso de falha.</li>
        </ul>
		`
    },
	{
        "q": "O Route 53 é integrado com outros serviços da AWS?",
        "a": `
        <ul>
            <li>Sim. Ele se integra com ELB, S3, CloudFront, API Gateway, Global Accelerator e mais, facilitando o roteamento direto com Alias records.</li>
        </ul>
		`
    },
	{
        "a": "Se você pensou no AWS Cost Explorer, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Mostrar gráficos e análises visuais sobre seus custos e uso da AWS ao longo do tempo.</li>
			<li>Minhas Características: Análises rápidas, planejamento financeiro simples.</li>
			<li>Melhor uso: Ver onde você está gastando mais, Comparar uso por serviço, conta ou tag, Prever gastos futuros com base em tendências.</li>
        </ul>
        `
    },
	{
        "a": "Se você pensou no AWS Budgets, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Permitir definir orçamentos personalizados e configurar alertas por e-mail, SNS, etc., ao atingir limites.</li>
			<li>Minhas Características: Criar um alerta quando um projeto ultrapassar 80% do orçamento, Definir limites por serviço, tag, linked account, etc.</li>
			<li>Melhor uso: Controle proativo de custos e notificações.</li>
        </ul>
        `
    },
	{
        "a": "Se você pensou no AWS Cost and Usage Reports (CUR), parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Gera relatórios extremamente detalhados de uso e custo, exportados como arquivos CSV para S3.</li>
			<li>Minhas Características: Integrar com ferramentas externas de BI (como Athena, QuickSight, Excel), Auditorias, contabilidade, análises avançadas.</li>
			<li>Melhor uso: FinOps, relatórios contábeis, análises detalhadas.</li>
        </ul>
        `
    },
	{
        "a": "Se você pensou no AWS Solutions Library, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para:Fornece modelos arquiteturais prontos (blueprints) para soluções empresariais e técnicas baseadas nas boas práticas da AWS.</li>
			<li>Minhas Características: Implementar rapidamente um data lake, CI/CD, VDI, etc. Usar arquiteturas recomendadas pela AWS.</li>
			<li>Melhor uso: Arquitetos de soluções, desenvolvedores buscando acelerar implementações.</li>
        </ul>
        `
    },
	{
        "q": "O que é o AWS CloudFormation?",
        "a": `
        <ul>
            <li>É um serviço que permite criar e gerenciar infraestrutura AWS como código, usando arquivos de template em YAML ou JSON.</li>
        </ul>
		`
    },
	{
        "q": "Quais tipos de arquivos o CloudFormation utiliza como entrada?",
        "a": `
        <ul>
            <li>Arquivos de template em YAML ou JSON que descrevem recursos e configurações AWS.</li>
        </ul>
		`
    },
	{
        "q": "O que é um stack no CloudFormation?",
        "a": `
        <ul>
            <li>É uma instância de execução de um template, ou seja, o conjunto de recursos criados e gerenciados por aquele template.</li>
        </ul>
		`
    },
	{
        "q": "O que são recursos (resources) em um template do CloudFormation?",
        "a": `
        <ul>
            <li>São os serviços AWS que serão criados, como EC2, S3, IAM, RDS, etc.</li>
        </ul>
		`
    },
	{
        "q": "O que são parâmetros (parameters) em um template?",
        "a": `
        <ul>
            <li>São valores dinâmicos que o usuário fornece ao iniciar o stack, tornando o template mais reutilizável.</li>
        </ul>
		`
    },
	{
        "q": "O que são outputs em um template do CloudFormation?",
        "a": `
        <ul>
            <li>Valores retornados após a criação do stack, como URLs, nomes de recursos, ou IDs.</li>
        </ul>
		`
    },
	{
        "q": "O CloudFormation aplica alterações automaticamente em produção?",
        "a": `
        <ul>
            <li>Sim, mas pode usar o recurso de Change Sets para visualizar o impacto antes de aplicar mudanças.</li>
        </ul>
		`
    },
	{
        "q": "O que são “nested stacks” no CloudFormation?",
        "a": `
        <ul>
            <li>São stacks inseridos dentro de outros stacks, usados para modularizar e reutilizar templates.</li>
        </ul>
		`
    },
	{
        "q": "O que acontece se a criação de um stack falhar?",
        "a": `
        <ul>
            <li>O CloudFormation executa o rollback automático, desfazendo as alterações aplicadas até o ponto de erro.</li>
        </ul>
		`
    },
	{
        "q": "O AWS CloudFormation é gratuito?",
        "a": `
        <ul>
            <li>Sim, o serviço em si é gratuito. Você paga apenas pelos recursos AWS que ele cria.</li>
        </ul>
		`
    },
	{
        "q": "O que são os AWS Quick Starts?",
        "a": `
        <ul>
            <li>São templates pré-configurados e automatizados que ajudam a implantar rapidamente arquiteturas complexas na AWS usando CloudFormation.</li>
        </ul>
		`
    },
	{
        "q": "Para que servem os AWS Quick Starts?",
        "a": `
        <ul>
            <li>Facilitam a implantação de soluções completas, seguindo melhores práticas da AWS, como ambientes de segurança, bancos de dados, aplicações, entre outros.</li>
        </ul>
		`
    },
	{
        "q": "Quem pode usar os AWS Quick Starts?",
        "a": `
        <ul>
            <li>Desenvolvedores, arquitetos e equipes de operações que desejam implementar rapidamente infraestruturas prontas.</li>
        </ul>
		`
    },
	{
        "q": "Como os Quick Starts são entregues?",
        "a": `
        <ul>
            <li>Via templates AWS CloudFormation que automatizam a criação dos recursos AWS necessários.</li>
        </ul>
		`
    },
	{
        "q": "Os AWS Quick Starts são gratuitos?",
        "a": `
        <ul>
            <li>Sim, os templates são gratuitos, mas você paga pelos recursos AWS utilizados durante a implantação.</li>
        </ul>
		`
    },
	{
        "q": "Onde encontrar os AWS Quick Starts?",
        "a": `
        <ul>
            <li>No site oficial da AWS Quick Starts ou no AWS Solutions Library.</li>
        </ul>
		`
    },
	{
        "q": "Os Quick Starts são atualizados?",
        "a": `
        <ul>
            <li>Sim, a AWS e parceiros atualizam frequentemente para refletir as melhores práticas e novos serviços.</li>
        </ul>
		`
    },
	{
        "q": "É possível customizar um Quick Start?",
        "a": `
        <ul>
            <li>Sim, você pode modificar os templates CloudFormation conforme suas necessidades.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre AWS Quick Starts e AWS Solutions Library?",
        "a": `
        <ul>
            <li>Quick Starts são templates CloudFormation para implantação rápida; Solutions Library inclui arquiteturas, whitepapers e mais.</li>
        </ul>
		`
    },
	{
        "q": "Como os Quick Starts ajudam na conformidade?",
        "a": `
        <ul>
            <li>Eles implementam arquiteturas baseadas em práticas recomendadas, incluindo segurança e governança.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Systems Manager (SSM)?",
        "a": `
        <ul>
            <li>É um serviço que permite gerenciar, automatizar e monitorar sua infraestrutura AWS e ambientes híbridos (on-premises e em nuvem).</li>
        </ul>
		`
    },
	{
        "q": "O que é o SSM Agent?",
        "a": `
        <ul>
            <li>É um software instalado em instâncias EC2 ou servidores que permite que o AWS Systems Manager execute comandos, scripts e tarefas remotamente.</li>
        </ul>
		`
    },
	{
        "q": "O que é necessário para que o SSM Agent funcione em uma instância EC2?",
        "a": `
        <ul>
            <li>O SSM Agent instalado e em execução.</li>
			<li>Permissões corretas via IAM Role (AmazonSSMManagedInstanceCore).</li>
			<li>A instância deve estar em rede com acesso ao SSM endpoint.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais recursos habilitados pelo SSM Agent?",
        "a": `
        <ul>
            <li>AWS Systems Manager Session Manager.</li>
			<li>Run Command.</li>
			<li>Patch Manager.</li>
			<li>Automation.</li>
			<li>Inventory.</li>
			<li>State Manager.</li>
			<li>Permissões corretas via IAM Role (AmazonSSMManagedInstanceCore).</li>
			<li>A instância deve estar em rede com acesso ao SSM endpoint.</li>
        </ul>
		`
    },
	{
        "q": "O SSM Agent vem pré-instalado em quais AMIs?",
        "a": `
        <ul>
            <li>Amazon Linux 2 e superior.</li>
			<li>Ubuntu 16.04+ (algumas versões).</li>
			<li>Algumas Windows Server AMIs da AWS.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Session Manager?",
        "a": `
        <ul>
            <li>Um recurso do SSM que permite acesso remoto a instâncias EC2 sem SSH, diretamente pelo console da AWS ou CLI.</li>
        </ul>
		`
    },
	{
        "q": "O SSM Agent requer acesso à internet pública?",
        "a": `
        <ul>
            <li>Não, ele pode funcionar usando VPC Endpoints (Interface endpoints) para Systems Manager.</li>
        </ul>
		`
    },
	{
        "q": "Como verificar se o SSM Agent está funcionando?",
        "a": `
        <ul>
            <li>Verificar no console do Systems Manager > Managed Instances.</li>
			<li>Checar logs localmente (/var/log/amazon/ssm/ ou serviços no Windows).</li>
        </ul>
		`
    },
	{
        "q": "O que acontece se o SSM Agent estiver ausente ou falhar?",
        "a": `
        <ul>
            <li>A instância não aparecerá como gerenciada e você não poderá usar recursos como Session Manager ou Run Command.</li>
        </ul>
		`
    },
	{
        "q": "O uso do SSM Agent tem custo?",
        "a": `
        <ul>
            <li>O SSM Agent é gratuito. Você paga apenas pelos recursos utilizados (ex: execução de automações que consomem outros serviços).</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS OpsWorks?",
        "a": `
        <ul>
            <li>É um serviço que permite gerenciar configurações e automação de servidores usando Chef ou Puppet, ferramentas populares de infraestrutura como código (IaC).</li>
        </ul>
		`
    },
	{
        "q": "Quais são os três tipos de stacks disponíveis no OpsWorks?",
        "a": `
        <ul>
            <li>OpsWorks for Chef Automate.</li>
			<li>OpsWorks for Puppet Enterprise.</li>
			<li>OpsWorks Stacks.</li>
        </ul>
		`
    },
	{
        "q": "O que é o OpsWorks Stacks?",
        "a": `
        <ul>
            <li>Uma opção gerenciada pela AWS que permite usar receitas Chef diretamente para configurar servidores, sem precisar de um servidor Chef externo.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre OpsWorks for Chef Automate e OpsWorks Stacks?",
        "a": `
        <ul>
            <li>Chef Automate: AWS gerencia um servidor Chef completo, você escreve e mantém cookbooks.</li>
			<li>Stacks: Você usa uma versão simplificada, gerenciada diretamente na AWS com suporte limitado a receitas Chef.</li>
        </ul>
		`
    },
	{
        "q": "O que é um layer em OpsWorks Stacks?",
        "a": `
        <ul>
            <li>Um grupo lógico de recursos (como web servers, bancos de dados), com configuração própria, que organiza as funções da aplicação dentro do stack.</li>
        </ul>
		`
    },
	{
        "q": "O que são recipes no contexto do OpsWorks?",
        "a": `
        <ul>
            <li>Scripts Chef que automatizam tarefas como instalar pacotes, configurar serviços ou alterar arquivos em servidores gerenciados.</li>
        </ul>
		`
    },
	{
        "q": "AWS OpsWorks é indicado para workloads modernos?",
        "a": `
        <ul>
            <li>Não é a principal escolha para workloads modernos baseados em containers ou serverless — CloudFormation, CDK, Systems Manager são mais comuns atualmente.</li>
        </ul>
		`
    },
	{
        "q": "É possível usar instâncias EC2 customizadas com OpsWorks?",
        "a": `
        <ul>
            <li>Sim. Você pode usar instâncias personalizadas, além de instâncias provisionadas automaticamente pelo serviço.</li>
        </ul>
		`
    },
	{
        "q": "AWS OpsWorks substitui o AWS Systems Manager?",
        "a": `
        <ul>
            <li>Não. Embora ambos façam automação, o SSM é mais moderno, versátil e amplamente adotado. OpsWorks é ideal para quem já usa Chef/Puppet.</li>
        </ul>
		`
    },
	{
        "q": "O AWS OpsWorks tem custo adicional?",
        "a": `
        <ul>
            <li>Sim, especialmente nas versões Chef Automate e Puppet Enterprise, onde você paga uma taxa por hora além dos custos de instância.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Elastic Beanstalk?",
        "a": `
        <ul>
            <li>É um serviço que implanta, gerencia e escala aplicações web automaticamente, usando infraestrutura da AWS, sem exigir configuração manual de servidores.</li>
        </ul>
		`
    },
	{
        "q": "Quais linguagens e plataformas o Beanstalk suporta?",
        "a": `
        <ul>
            <li>Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker.</li>
			<li>Também suporta aplicações baseadas em contêineres (com Docker ou multicontêiner no ECS).</li>
        </ul>
		`
    },
	{
        "q": "O que você precisa fornecer ao Beanstalk para iniciar um ambiente?",
        "a": `
        <ul>
            <li>Um pacote de aplicação (ZIP ou WAR), e o Beanstalk cuida do resto: provisiona EC2, ELB, Auto Scaling, etc.</li>
        </ul>
		`
    },
	{
        "q": "O AWS Elastic Beanstalk é gratuito?",
        "a": `
        <ul>
            <li>O uso do serviço é gratuito, mas você paga pelos recursos AWS provisionados (como EC2, RDS, S3, etc.).</li>
        </ul>
		`
    },
	{
        "q": "O que é um environment no Beanstalk?",
        "a": `
        <ul>
            <li>É uma instância de execução de uma aplicação, composta por recursos como EC2, Auto Scaling, Load Balancer e configurações.</li>
        </ul>
		`
    },
	{
        "q": "O Elastic Beanstalk permite customização da infraestrutura?",
        "a": `
        <ul>
            <li>Sim. Você pode usar arquivos de configuração .ebextensions para modificar instâncias, instalar pacotes, definir variáveis etc.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre Beanstalk e ECS/Fargate?",
        "a": `
        <ul>
            <li>Beanstalk é uma plataforma PaaS gerenciada para aplicações completas.</li>
			<li>ECS/Fargate é voltado para execução de containers, com controle mais granular da infraestrutura.</li>
        </ul>
		`
    },
	{
        "q": "O Beanstalk suporta banco de dados?",
        "a": `
        <ul>
            <li>Sim. Pode provisionar instâncias RDS junto com o ambiente, mas o banco é destruído se o ambiente for excluído, a menos que seja separado.</li>
        </ul>
		`
    },
	{
        "q": "O Elastic Beanstalk permite escalabilidade automática?",
        "a": `
        <ul>
            <li>Sim. Ele integra Auto Scaling e Load Balancer, e ajusta a capacidade conforme a carga da aplicação.</li>
        </ul>
		`
    },
	{
        "q": "Quais recursos da AWS o Beanstalk gerencia para você?",
        "a": `
        <ul>
            <li>EC2 (máquinas virtuais).</li>
			<li>Auto Scaling.</li>
			<li>Elastic Load Balancer.</li>
			<li>CloudWatch.</li>
			<li>RDS (opcional).</li>
			<li>S3 (armazenamento de pacotes).</li>
        </ul>
		`
    }
]
  