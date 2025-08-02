const aws_card_modulo_oito = [
	{
        "q": "O que é o AWS CloudTrail?",
        "a": `
        <ul>
            <li>É um serviço da AWS que registra e armazena eventos de chamadas de API feitas em sua conta, para auditoria, segurança e conformidade.</li>
        </ul>
		`
    },
	{
        "q": "Que tipo de eventos o CloudTrail registra?",
        "a": `
        <ul>
            <li>Ações realizadas via Console da AWS, CLI, SDKs ou serviços da AWS, como criação de recursos, alterações de configuração e acessos.</li>
			<li>Amazon S3, Amazon CloudWatch Logs, Amazon CloudWatch Events / EventBridge.</li>
        </ul>
		`
    },
	{
        "q": "Onde os logs do CloudTrail podem ser armazenados?",
        "a": `
        <ul>
			<li>Amazon S3, Amazon CloudWatch Logs, Amazon CloudWatch Events / EventBridge.</li>
        </ul>
		`
    },
	{
        "q": "Por quanto tempo os eventos recentes ficam disponíveis no console do CloudTrail sem configuração adicional?",
        "a": `
        <ul>
			<li>90 dias, mas apenas eventos de gerenciamento (Management Events).</li>
        </ul>
		`
    },
	{
        "q": "O que é um "Trail" no CloudTrail?",
        "a": `
        <ul>
			<li>Um registro configurado que envia eventos de uma ou mais regiões para um bucket S3 e/ou CloudWatch Logs.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre eventos de gerenciamento e eventos de dados no CloudTrail?",
        "a": `
        <ul>
			<li>Eventos de gerenciamento: ações de controle (ex: criar instância EC2).</li>
			<li>Eventos de dados: acesso a dados (ex: GetObject no S3, Query no DynamoDB).</li>
        </ul>
		`
    },
	{
        "q": "O AWS CloudTrail funciona em múltiplas regiões?",
        "a": `
        <ul>
			<li>Sim. É possível configurar trails globais que capturam eventos de todas as regiões da AWS.</li>
        </ul>
		`
    },
	{
        "q": "O CloudTrail é habilitado automaticamente?",
        "a": `
        <ul>
			<li>Sim, para eventos de gerenciamento dos últimos 90 dias. Para retenção maior ou eventos de dados, é necessário configurar um Trail.</li>
        </ul>
		`
    },
	{
        "q": "O que é o CloudTrail Lake?",
        "a": `
        <ul>
			<li>Um recurso que permite armazenar, consultar e analisar eventos do CloudTrail com SQL diretamente dentro do serviço, sem sair da AWS.</li>
        </ul>
		`
    },
	{
        "q": "Qual serviço da AWS pode ser integrado ao CloudTrail para alertas em tempo real?",
        "a": `
        <ul>
			<li>Amazon CloudWatch Logs (com metric filters e alarms) ou Amazon EventBridge para regras e ações automatizadas.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon EventBridge?",
        "a": `
        <ul>
			<li>É um serviço de event bus (barramento de eventos) que permite conectar aplicações usando eventos de forma assíncrona e desacoplada.</li>
        </ul>
		`
    },
	{
        "q": "Qual é o sucessor direto do Amazon CloudWatch Events?",
        "a": `
        <ul>
			<li>Amazon EventBridge (é a evolução direta do CloudWatch Events, com mais recursos).</li>
        </ul>
		`
    },
	{
        "q": "Quais tipos de eventos o EventBridge pode processar?",
        "a": `
        <ul>
			<li>Eventos de serviços da AWS.</li>
			<li>Eventos de aplicações SaaS integradas.<li>
			<li>Eventos customizados de suas próprias aplicações.</li>
        </ul>
		`
    },
	{
        "q": "O que é um event bus no EventBridge?",
        "a": `
        <ul>
			<li>É um canal lógico que recebe e roteia eventos para alvos. Pode ser:</li>
			<li>Default bus (padrão da conta).</li>
			<li>Partner bus (para SaaS).</li>
			<li>Custom bus (criado pelo usuário).</li>
			<li>Eventos de aplicações SaaS integradas.<li>
			<li>Eventos customizados de suas próprias aplicações.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma rule (regra) no EventBridge?",
        "a": `
        <ul>
			<li>Define quais eventos serão capturados e para onde eles serão enviados (destino/alvo).</li>
        </ul>
		`
    },
	{
        "q": "Quais são exemplos de destinos (alvos) no EventBridge?",
        "a": `
        <ul>
			<li>AWS Lambda, SNS, SQS, Step Functions, API Gateway, Kinesis Data Streams/Firehose, EventBridge Pipes.</li>
        </ul>
		`
    },
	{
        "q": "Qual formato os eventos usam no EventBridge?",
        "a": `
        <ul>
			<li>JSON, seguindo um schema padronizado com campos como source, detail-type, detail, time, etc.</li>
        </ul>
		`
    },
	{
        "q": "O Amazon EventBridge oferece retry e dead-letter queue (DLQ)?",
        "a": `
        <ul>
			<li>Sim. Ele faz retries automáticos e pode usar DLQs (via SQS) para falhas persistentes.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a principal vantagem do EventBridge em arquiteturas modernas?",
        "a": `
        <ul>
			<li>Permite arquiteturas orientadas a eventos com serviços desacoplados e comunicação assíncrona, facilitando escalabilidade e manutenção.</li>
        </ul>
		`
    },
	{
        "q": "O que são os EventBridge Pipes?",
        "a": `
        <ul>
			<li>Recurso para conectar fontes e destinos com transformações e filtros inline, sem necessidade de código.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Security Token Service (STS)?",
        "a": `
        <ul>
			<li>É um serviço da AWS que permite gerar credenciais temporárias e seguras para acessar recursos da AWS.</li>
        </ul>
		`
    },
	{
        "q": "Quando usar o AWS STS?",
        "a": `
        <ul>
			<li>Quando você precisa de acesso temporário e limitado a recursos da AWS — por exemplo, para usuários federados, contas cruzadas ou aplicações temporárias.</li>
        </ul>
		`
    },
	{
        "q": "Qual a principal vantagem de usar o STS em vez de credenciais permanentes?",
        "a": `
        <ul>
			<li>Melhora a segurança e reduz o risco de exposição, pois as credenciais expiram automaticamente.</li>
        </ul>
		`
    },
	{
        "q": "Quais são as principais APIs do AWS STS?",
        "a": `
        <ul>
			<li>AssumeRole, AssumeRoleWithSAML, AssumeRoleWithWebIdentity, GetSessionToken, GetFederationToken.</li>
        </ul>
		`
    },
	{
        "q": "O que a API AssumeRole faz no STS?",
        "a": `
        <ul>
			<li>Permite que uma entidade assuma uma IAM role e receba credenciais temporárias com as permissões daquela role.</li>
        </ul>
		`
    },
	{
        "q": "O que é necessário para AssumeRole funcionar entre contas?",
        "a": `
        <ul>
			<li>Uma role confiável na conta de destino.</li>
			<li>Uma política de confiança permitindo a assunção.<li>
			<li>Permissões do lado da origem para chamar sts:AssumeRole.</li>
        </ul>
		`
    },
	
        "q": "Por quanto tempo as credenciais temporárias do STS são válidas?",
        "a": `
        <ul>
			<li>Por padrão, até 1 hora</li>
			<li>Podem ser estendidas até 12 horas, dependendo da API e configurações da role.</li>
        </ul>
		`
    },
	},
	
        "q": "O AWS STS é um serviço global ou regional?",
        "a": `
        <ul>
			<li>É regional, mas também possui um endpoint global (sts.amazonaws.com). O uso regional é recomendado por menor latência e compatibilidade com políticas de dados.</li>
        </ul>
		`
    },
	},
	
        "q": "O que é o Amazon Cognito?",
        "a": `
        <ul>
			<li>É um serviço da AWS que fornece autenticação, autorização e gerenciamento de usuários para aplicações web e mobile.</li>
        </ul>
		`
    },
	},
	
        "q": "Quais são os dois principais componentes do Amazon Cognito?",
        "a": `
        <ul>
			<li>User Pools – Autenticação e gerenciamento de usuários.</li>
			<li>Identity Pools – Autorização e acesso a recursos da AWS com credenciais temporárias (STS).</li>
        </ul>
		`
    },
	},
	
        "q": "que são Cognito User Pools?",
        "a": `
        <ul>
			<li>Um diretório de usuários gerenciado pela AWS que permite registrar, autenticar e gerenciar usuários da sua aplicação.</li>
        </ul>
		`
    },
	},
	
        "q": "O que são Cognito Identity Pools (também chamado de Federated Identities)?",
        "a": `
        <ul>
			<li>Permitem fornecer acesso temporário e seguro a serviços da AWS, com base na identidade de um usuário autenticado (via User Pool ou provedores externos).</li>
        </ul>
		`
    },
	},
	
        "q": "Quais provedores de identidade externos o Cognito pode integrar?",
        "a": `
        <ul>
			<li>Provedores federados de SAML (ex: AD, Okta).</li>
			<li>Redes sociais (ex: Facebook, Google, Apple).</li>
			<li>Provedores OIDC personalizados.</li>
        </ul>
		`
    },
	},
	
        "q": "O Amazon Cognito pode emitir tokens JWT?",
        "a": `
        <ul>
			<li>Sim. O Cognito User Pool emite tokens ID Token, Access Token e Refresh Token, compatíveis com OAuth 2.0 e OpenID Connect (OIDC).</li>
        </ul>
		`
    },
	},
	
        "q": "O que o Cognito faz com o AWS STS?",
        "a": `
        <ul>
			<li>O Identity Pool usa o STS para fornecer credenciais temporárias que autorizam acesso a recursos da AWS com permissões controladas via IAM roles.</li>
        </ul>
		`
    },
	},
	
        "q": "O Cognito User Pool pode ser usado como provedor OIDC?",
        "a": `
        <ul>
			<li>Sim, pode ser usado como um provedor OpenID Connect para autenticar usuários em aplicações externas.</li>
        </ul>
		`
    },
	},
	
        "q": "Como o Amazon Cognito protege sessões de usuário?",
        "a": `
        <ul>
			<li>Usa tokens JWT e permite configurar MFA, políticas de senha, verificação por e-mail/SMS e limites de tentativa.</li>
        </ul>
		`
    },
	},
	
        "q": "Amazon Cognito é uma boa escolha para qual tipo de aplicação?",
        "a": `
        <ul>
			<li>Aplicações web e mobile que exigem gerenciamento de usuários, login social/federado e acesso controlado a serviços da AWS.</li>
        </ul>
		`
    },
	},
	
        "q": "O que é o AWS Organizations?",
        "a": `
        <ul>
			<li>É um serviço que permite gerenciar múltiplas contas da AWS de forma centralizada, com políticas de segurança, faturamento unificado e governança.</li>
        </ul>
		`
    },
	},
	
        "q": "Qual é a conta principal em uma organização?",
        "a": `
        <ul>
			<li>A conta-mestre (agora chamada de conta de gerenciamento) — é a primeira conta da organização e controla as demais.</li>
        </ul>
		`
    },
	},
	
        "q": "O que são Unidades Organizacionais (OUs) no AWS Organizations?",
        "a": `
        <ul>
			<li>São grupos hierárquicos de contas usados para organizar e aplicar políticas (SCPs) de forma estruturada.</li>
        </ul>
		`
    },
	},
	
        "q": "O que são Service Control Policies (SCPs)?",
        "a": `
        <ul>
			<li>São políticas que restringem as permissões máximas que uma conta ou OU pode ter, mesmo que a IAM permita mais.</li>
        </ul>
		`
    },
	},
	
        "q": "OSCPs substituem as políticas IAM?",
        "a": `
        <ul>
			<li>Não. SCPs limitam o que a IAM pode permitir, mas não concedem permissões diretamente.</li>
        </ul>
		`
    },
	},
	
        "q": "Quais são os dois tipos de políticas SCP?",
        "a": `
        <ul>
			<li>Allow list (lista de permissões).</li>
			<li>Deny list (negação explícita de ações).</li>
        </ul>
		`
    },
	},
	
        "q": "O que é o consolidated billing no AWS Organizations?",
        "a": `
        <ul>
			<li>Permite unificar os custos de várias contas em uma só fatura, com benefícios de economia por volume.</li>
        </ul>
		`
    },
	},
	
        "q": "O que é necessário para adicionar uma conta existente à organização?",
        "a": `
        <ul>
			<li>A conta existente deve aceitar o convite enviado pela conta de gerenciamento da organização.</li>
        </ul>
		`
    },
	},
	
        "q": "É possível automatizar a criação de contas novas com o AWS Organizations?",
        "a": `
        <ul>
			<li>Sim, usando a API ou AWS CLI com o comando create-account.</li>
        </ul>
		`
    },
	},
	
        "q": "O que é o AWS Identity and Access Management?",
        "a": `
        <ul>
			<li>É um serviço da AWS que permite controlar o acesso a recursos da AWS de forma segura, usando usuários, grupos, roles e políticas.</li>
        </ul>
		`
    },
	},
	
        "q": "O que são IAM users?",
        "a": `
        <ul>
			<li> Representam indivíduos ou aplicações que precisam de acesso à conta da AWS com credenciais permanentes (usuário + senha ou access keys).</li>
        </ul>
		`
    },
	},
	
        "q": "O que são IAM groups?",
        "a": `
        <ul>
			<li>Um grupo de usuários IAM ao qual você pode atribuir permissões em massa por meio de políticas..</li>
        </ul>
		`
    },
	},
	
        "q": "O que é uma IAM role?",
        "a": `
        <ul>
			<li>Uma entidade com permissões temporárias que pode ser assumida por usuários, serviços da AWS ou aplicações para realizar ações específicas.</li>
        </ul>
		`
    },
	},
	
        "q": "O que é uma IAM policy?",
        "a": `
        <ul>
			<li>Um documento JSON que define quais ações são permitidas ou negadas sobre quais recursos, podendo ser anexado a usuários, grupos ou roles.</li>
        </ul>
		`
    },
	},
	
        "q": "Quais são os principais tipos de políticas no IAM?",
        "a": `
        <ul>
			<li>Gerenciadas pela AWS, Gerenciadas pelo cliente (customer-managed), Embutidas (inline policies).</li>
        </ul>
		`
    },
	},
	
        "q": "O que significa o princípio de menor privilégio no IAM?",
        "a": `
        <ul>
			<li>Conceder apenas as permissões mínimas necessárias para que uma identidade execute suas tarefas.</li>
        </ul>
		`
    },
	},
	
        "q": "O IAM é um serviço regional ou global?",
        "a": `
        <ul>
			<li>Global — os recursos IAM são válidos em todas as regiões da AWS.</li>
        </ul>
		`
    },
	},
	
        "q": "Quais métodos de autenticação o IAM suporta para usuários?",
        "a": `
        <ul>
			<li>Senha para acesso ao console, Access Key (chave de acesso) para acesso via CLI/SDK, MFA (autenticação multifator) para segurança adicional.</li>
        </ul>
		`
    },
	},
	
        "q": "Qual é a diferença entre IAM roles e IAM users?",
        "a": `
        <ul>
			<li>Users têm credenciais permanentes, Roles são assumidas temporariamente e não possuem credenciais fixas.</li>
        </ul>
		`
    },
	},
	
        "q": "O que é um perfil (Instance Profile) no IAM?",
        "a": `
        <ul>
			<li>Um container para uma IAM Role que permite atribuir permissões a uma instância EC2. Ele conecta uma role a uma instância para que ela possa assumir a role automaticamente.</li>
        </ul>
		`
    },
	},
	
        "q": "O que é um perfil (Instance Profile) no IAM?",
        "a": `
        <ul>
			<li>Um container para uma IAM Role que permite atribuir permissões a uma instância EC2. Ele conecta uma role a uma instância para que ela possa assumir a role automaticamente.</li>
        </ul>
		`
    },
]
  