const aws_card_modulo_nove = [
	{
        "q": "O que é o Amazon ElastiCache?",
        "a": `
        <ul>
            <li>É um serviço gerenciado da AWS que oferece caching na memória de alta performance, usando Redis ou Memcached.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os dois mecanismos de cache suportados pelo ElastiCache?",
        "a": `
        <ul>
            <li>Redis.</li>
			<li>Memcached.</li>
        </ul>
		`
    },
	{
        "q": "Para que serve o Amazon ElastiCache?",
        "a": `
        <ul>
            <li>Para acelerar aplicações ao armazenar dados frequentemente acessados na memória, reduzindo latência e carga de banco de dados.</li>
        </ul>
		`
    },
	{
        "q": "Qual a principal diferença entre Redis e Memcached no ElastiCache?",
        "a": `
        <ul>
            <li>Redis: Armazenamento em chave-valor mais avançado, com persistência, replicação, pub/sub e failover.</li>
			<li>Memcached: Sistema simples de cache em memória, sem persistência nem replicação.</li>
        </ul>
		`
    },
	{
        "q": "ElastiCache é usado como banco de dados principal?",
        "a": `
        <ul>
            <li>Não. É usado como cache complementar para melhorar desempenho de leitura/escrita temporária</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais casos de uso do ElastiCache?",
        "a": `
        <ul>
            <li>Caching de leitura (ex: resultados de queries SQL).</li>
			<li>Session store (armazenamento de sessões).</li>
			<li>Filas e pub/sub com Redis.</li>
			<li>Rate limiting.</li>
			<li>Ranking, contadores, leaderboards.</li>
        </ul>
		`
    },
	{
        "q": "ElastiCache Redis pode ser usado com VPC?",
        "a": `
        <ul>
            <li>Sim, ElastiCache é implantado em sub-redes privadas dentro da VPC, com controle de segurança via grupos de segurança</li>
        </ul>
		`
    },
	{
        "q": "ElastiCache é compatível com ferramentas open-source Redis/Memcached?",
        "a": `
        <ul>
            <li>Sim. Ele é compatível com clientes padrão de Redis e Memcached, sem a necessidade de SDKs proprietários</li>
        </ul>
		`
    },
	{
        "q": "O ElastiCache é um serviço gerenciado?",
        "a": `
        <ul>
            <li>Sim. A AWS gerencia provisionamento, patching, monitoramento e backups (Redis) automaticamente</li>
        </ul>
		`
    },
	{
        "q": "que é o Amazon CloudFront?",
        "a": `
        <ul>
            <li>É o serviço de CDN da AWS que distribui conteúdos (estáticos e dinâmicos) globalmente com baixa latência e alta velocidade.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a principal função do CloudFront?",
        "a": `
        <ul>
            <li>Acelerar a entrega de conteúdo (como imagens, vídeos, APIs e sites) para usuários finais, usando pontos de presença (edge locations) distribuídos globalmente.</li>
        </ul>
		`
    },
	{
        "q": "O que são edge locations no CloudFront?",
        "a": `
        <ul>
            <li>São locais físicos próximos aos usuários finais onde o conteúdo é armazenado em cache para acesso mais rápido.</li>
        </ul>
		`
    },
	{
        "q": "Quais origens o CloudFront pode utilizar?",
        "a": `
        <ul>
            <li>S3 buckets.</li>
			<li>Instâncias EC2.</li>
			<li>Elastic Load Balancers (ELB).</li>
			<li>APIs do API Gateway.</li>
			<li>Qualquer servidor HTTP/HTTPS.</li>
        </ul>
		`
    },
	{
        "q": "O CloudFront só entrega conteúdo estático?",
        "a": `
        <ul>
            <li>Não. Ele também entrega conteúdo dinâmico, como APIs e aplicações web, com cache personalizado e suporte a WebSockets.</li>
        </ul>
		`
    },
	{
        "q": "O que são comportamentos (behaviors) no CloudFront?",
        "a": `
        <ul>
            <li>São regras de roteamento que definem como o CloudFront deve se comportar com determinados tipos de requisições (por caminho, método, etc.).</li>
        </ul>
		`
    },
	{
        "q": "O que é o Signed URL e o Signed Cookie no CloudFront?",
        "a": `
        <ul>
            <li>Mecanismos que permitem controlar o acesso a conteúdo privado, garantindo que apenas usuários autorizados possam acessar.</li>
        </ul>
		`
    },
	{
        "q": "O CloudFront pode usar HTTPS?",
        "a": `
        <ul>
            <li>Sim. Ele suporta HTTPS completo (TLS) e integração com AWS Certificate Manager (ACM) para certificados SSL/TLS.</li>
        </ul>
		`
    },
	{
        "q": "CloudFront pode ser integrado com Lambda?",
        "a": `
        <ul>
            <li>Sim, com Lambda@Edge, que permite executar código em edge locations para modificar requisições e respostas.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os benefícios do CloudFront?",
        "a": `
        <ul>
            <li>Baixa latência.</li>
			<li>Melhor desempenho global.</li>
			<li>Segurança (DDoS protection via AWS Shield).</li>
			<li>Escalabilidade automática.</li>
			<li>Cache configurável.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon Elastic Transcoder?",
        "a": `
        <ul>
            <li>É um serviço da AWS que permite converter arquivos de mídia (vídeo e áudio) de um formato para outro, de forma escalável e baseada na nuvem.</li>
        </ul>
		`
    },
	{
        "q": "Para que serve a transcodificação de mídia?",
        "a": `
        <ul>
            <li>Para adaptar arquivos de mídia a diferentes dispositivos, tamanhos de tela, formatos ou qualidades (ex: de MP4 para HLS, 1080p para 480p).</li>
        </ul>
		`
    },
	{
        "q": "Quais formatos de entrada e saída o Elastic Transcoder suporta?",
        "a": `
        <ul>
            <li>Suporta vários formatos populares, incluindo MP4, H.264, AAC, WebM, Ogg, entre outros.</li>
        </ul>
		`
    },
	{
        "q": "O Amazon Elastic Transcoder é adequado para streaming?",
        "a": `
        <ul>
            <li>Sim, ele suporta preparação de conteúdo para streaming, como HLS e Smooth Streaming.</li>
        </ul>
		`
    },
	{
        "q": "O que é um pipeline no Elastic Transcoder?",
        "a": `
        <ul>
            <li>É uma configuração que define o caminho da transcodificação, conectando o bucket de entrada, configurações de saída e notificações.</li>
        </ul>
		`
    },
	{
        "q": "Onde os arquivos de entrada e saída do Elastic Transcoder são armazenados?",
        "a": `
        <ul>
            <li>Em buckets do Amazon S3, definidos pelo usuário no pipeline.</li>
        </ul>
		`
    },
	{
        "q": "O Elastic Transcoder envia notificações?",
        "a": `
        <ul>
            <li>Sim, pode enviar eventos via Amazon SNS quando uma tarefa de transcodificação começa, falha ou é concluída.</li>
        </ul>
		`
    },
	{
        "q": "O Elastic Transcoder é um serviço moderno?",
        "a": `
        <ul>
            <li>Não. Ele está em modo de manutenção, e a AWS recomenda serviços mais modernos como AWS MediaConvert.</li>
        </ul>
		`
    },
	{
        "q": "Elastic Transcoder tem interface gráfica?",
        "a": `
        <ul>
            <li>Sim, pode ser usado via console da AWS, CLI ou SDKs.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre Elastic Transcoder e AWS Elemental MediaConvert?",
        "a": `
        <ul>
            <li>Elastic Transcoder: Serviço mais simples e antigo, para uso básico.</li>
			<li>MediaConvert: Plataforma mais avançada, com suporte a vídeo profissional, legendas, DRM e mais formatos.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Elemental MediaConvert?",
        "a": `
        <ul>
            <li>É um serviço da AWS que permite codificar e transcodificar vídeos sob demanda, gerando arquivos prontos para streaming ou download em múltiplos formatos.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a principal diferença entre o MediaConvert e o Elastic Transcoder?",
        "a": `
        <ul>
            <li>MediaConvert é mais moderno e avançado, com suporte a DRM, legendas, legendas ocultas, múltiplas saídas, etc.</li>
			<li>Elastic Transcoder é mais simples e está em modo de manutenção.</li>
        </ul>
		`
    },
	{
        "q": "Quais tipos de vídeo o MediaConvert suporta?",
        "a": `
        <ul>
            <li>Suporta transcodificação de vídeos para formatos como H.264, H.265 (HEVC), MPEG-2, Apple HLS, DASH, CMAF, entre outros.</li>
        </ul>
		`
    },
	{
        "q": "O MediaConvert é usado para streaming ao vivo?",
        "a": `
        <ul>
            <li>Não. Ele é voltado para vídeos sob demanda (VOD). Para streaming ao vivo, usa-se o AWS Elemental MediaLive.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma “job” no MediaConvert?",
        "a": `
        <ul>
            <li>É uma tarefa de codificação de vídeo definida com base em entradas, saídas, presets, legendas e configurações de áudio/vídeo.</li>
        </ul>
		`
    },
	{
        "q": "O MediaConvert oferece recursos de proteção de conteúdo?",
        "a": `
        <ul>
            <li>Sim, suporta DRM (Digital Rights Management) como Apple FairPlay, Microsoft PlayReady e Widevine.</li>
        </ul>
		`
    },
	{
        "q": "O que são “presets” no MediaConvert?",
        "a": `
        <ul>
            <li>São conjuntos predefinidos de configurações de codificação, que facilitam a reutilização e padronização de jobs.</li>
        </ul>
		`
    },
	{
        "q": "O MediaConvert pode gerar múltiplas saídas em um único job?",
        "a": `
        <ul>
            <li>Sim! Pode criar múltiplas resoluções, formatos e faixas de áudio simultaneamente para entrega adaptativa.</li>
        </ul>
		`
    },
	{
        "q": "Como são armazenados os arquivos de entrada e saída?",
        "a": `
        <ul>
            <li>Os vídeos de entrada e saída são armazenados em Amazon S3 buckets.</li>
        </ul>
		`
    },
	{
        "q": "O MediaConvert tem cobrança baseada em quê?",
        "a": `
        <ul>
            <li>Você paga por duração e tipo de mídia processada, além de recursos usados como resolução, codecs e DRM.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon DynamoDB Accelerator (DAX)?",
        "a": `
        <ul>
            <li>É um cache in-memory totalmente gerenciado que melhora significativamente a performance de leitura do Amazon DynamoDB.</li>
        </ul>
		`
    },
	{
        "q": "Qual é o principal benefício do DAX?",
        "a": `
        <ul>
            <li>Reduz a latência de leitura do DynamoDB para milissegundos para microssegundos, ideal para aplicações com acesso intensivo a dados.</li>
        </ul>
		`
    },
	{
        "q": "O DAX substitui o DynamoDB?",
        "a": `
        <ul>
            <li>Não. Ele atua como um cache de leitura na frente do DynamoDB, mantendo a persistência de dados no banco original.</li>
        </ul>
		`
    },
	{
        "q": "O DAX é compatível com quais operações?",
        "a": `
        <ul>
            <li>Com as operações de leitura do DynamoDB como GetItem, BatchGetItem, Query, além de operações de escrita (que passam direto para o DynamoDB).</li>
        </ul>
		`
    },
	{
        "q": "DAX oferece persistência dos dados?",
        "a": `
        <ul>
            <li>Não. O DAX armazena dados temporariamente na memória (cache) e depende do DynamoDB como banco de dados persistente.</li>
        </ul>
		`
    },
	{
        "q": "O DAX precisa de alterações na aplicação para funcionar?",
        "a": `
        <ul>
            <li>Poucas ou nenhuma se você usar os SDKs oficiais da AWS com suporte a DAX. Ele funciona como um cliente drop-in para DynamoDB.</li>
        </ul>
		`
    },
	{
        "q": "Como o DAX lida com dados desatualizados (stale data)?",
        "a": `
        <ul>
            <li>Como é um cache, dados podem ficar desatualizados por um curto período, dependendo da sincronização com o DynamoDB.</li>
        </ul>
		`
    },
	{
        "q": "O DAX é Multi-AZ (alta disponibilidade)?",
        "a": `
        <ul>
            <li>Sim. Você pode configurar clusters DAX com nós em múltiplas zonas de disponibilidade para tolerância a falhas.</li>
        </ul>
		`
    },
	{
        "q": "O que é um cluster DAX?",
        "a": `
        <ul>
            <li>Um grupo de nós cache com um nó primário (coordenador) e réplicas, distribuído em múltiplas zonas de disponibilidade.</li>
        </ul>
		`
    },
	{
        "q": "O uso do DAX tem custo adicional?",
        "a": `
        <ul>
            <li>Sim. Você paga pelo tempo de uso e tamanho dos nós do cluster DAX, além do DynamoDB.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon ElastiCache?",
        "a": `
        <ul>
            <li>É um serviço de cache in-memory gerenciado que melhora a performance de aplicações usando Redis ou Memcached.</li>
        </ul>
		`
    },
	{
        "q": "Quais mecanismos de cache o ElastiCache suporta?",
        "a": `
        <ul>
            <li>Redis (mais avançado).</li>
			<li>Memcached (mais simples).</li>
        </ul>
		`
    },
	{
        "q": "Para que tipo de uso o ElastiCache é indicado?",
        "a": `
        <ul>
            <li>Acelerar leituras de banco de dados | Armazenar sessões de usuários | Implementar filas.</li>
			<li>Leaderboards | Rate limiting | Pub/Sub (Redis).</li>
        </ul>
		`
    },
	{
        "q": "O ElastiCache pode ser usado como banco de dados principal?",
        "a": `
        <ul>
            <li>Não. Ele é um cache temporário, usado junto com um banco de dados persistente como o DynamoDB ou RDS.</li>
        </ul>
		`
    },
	{
        "q": "Qual a principal diferença entre Redis e Memcached no ElastiCache?",
        "a": `
        <ul>
            <li>Redis: Suporta persistência, replicação, pub/sub, estrutura de dados avançada.</li>
			<li>Memcached: Mais simples, não suporta persistência ou replicação.</li>
        </ul>
		`
    },
	{
        "q": "O ElastiCache é compatível com VPC?",
        "a": `
        <ul>
            <li>Sim, ele funciona dentro de uma VPC com grupos de segurança, sendo acessível por instâncias EC2, Lambda, etc.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma réplica de leitura no Redis (ElastiCache)?",
        "a": `
        <ul>
            <li>É uma cópia somente leitura usada para aumentar a escalabilidade e disponibilidade de leitura no cluster Redis.</li>
        </ul>
		`
    },
	{
        "q": "O ElastiCache é altamente disponível?",
        "a": `
        <ul>
            <li>Sim, especialmente com Redis em Multi-AZ com failover automático e backups automáticos.</li>
        </ul>
		`
    },
	{
        "q": "Como o ElastiCache lida com escalabilidade?",
        "a": `
        <ul>
            <li>Redis: via sharding (cluster mode enabled).</li>
			<li>Memcached: via distribuição entre nós (client-side).</li>
        </ul>
		`
    },
	{
        "q": "O ElastiCache é gerenciado pela AWS?",
        "a": `
        <ul>
            <li>Sim. A AWS cuida de patches, monitoramento, falhas, backups e escalabilidade.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS WAF?",
        "a": `
        <ul>
            <li>É um firewall de aplicação web que ajuda a proteger aplicações contra ameaças como injeção de SQL, XSS, bots e tráfego malicioso.</li>
        </ul>
		`
    },
	{
        "q": "Em quais serviços o AWS WAF pode ser aplicado?",
        "a": `
        <ul>
            <li>Amazon CloudFront.</li>
			<li>Application Load Balancer (ALB).</li>
			<li>Amazon API Gateway.</li>
			<li>AWS App Runner.</li>
        </ul>
		`
    },
	{
        "q": "O que são regras no AWS WAF?",
        "a": `
        <ul>
            <li>Conjuntos de condições (ex: IPs, padrões de string, geolocalização) usadas para permitir, bloquear ou contar requisições HTTP.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma Web ACL no AWS WAF?",
        "a": `
        <ul>
            <li>É um conjunto de regras que você associa a um recurso (como ALB ou API Gateway) para controlar o tráfego com base nessas regras.</li>
        </ul>
		`
    },
	{
        "q": "O AWS WAF pode bloquear ataques de bots?",
        "a": `
        <ul>
            <li>Sim. Com o AWS WAF Bot Control, é possível identificar e bloquear bots comuns e automatizados.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Managed Rules?",
        "a": `
        <ul>
            <li>Conjuntos de regras gerenciadas pela AWS ou parceiros, que ajudam a proteger contra ameaças conhecidas sem precisar configurar manualmente.</li>
        </ul>
		`
    },
	{
        "q": "O AWS WAF funciona em qual camada do modelo OSI?",
        "a": `
        <ul>
            <li>Camada 7 (Aplicação), inspecionando tráfego HTTP/HTTPS.</li>
        </ul>
		`
    },
	{
        "q": "Quais ações podem ser definidas em uma regra do WAF?",
        "a": `
        <ul>
            <li>Allow (Permitir).</li>
			<li>Block (Bloquear).</li>
			<li>Count (Apenas contar as requisições que correspondem).</li>
        </ul>
		`
    },
	{
        "q": "O AWS WAF pode ser automatizado com infraestrutura como código?",
        "a": `
        <ul>
            <li>Sim. Pode ser gerenciado via AWS CloudFormation, Terraform, ou AWS CLI/SDK.</li>
        </ul>
		`
    },
	{
        "q": "O AWS WAF é cobrado como?",
        "a": `
        <ul>
            <li>Pelo número de Web ACLs, número de regras e volume de requisições inspecionadas.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon SQS?",
        "a": `
        <ul>
            <li>É um serviço de filas gerenciado que permite a comunicação assíncrona entre componentes de software desacoplados.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os dois tipos principais de filas no SQS?",
        "a": `
        <ul>
            <li>Standard Queue (alta taxa, entrega duplicada possível).</li>
			<li>FIFO Queue (ordem garantida, sem duplicação).</li>
        </ul>
		`
    },
	{
        "q": "O SQS garante a ordem das mensagens?",
        "a": `
        <ul>
            <li>Sim, com FIFO Queues.</li>
			<li>Não, com Standard Queues.</li>
        </ul>
		`
    },
	{
        "q": "O que é o visibility timeout no SQS?",
        "a": `
        <ul>
            <li>Tempo em que a mensagem fica invisível após ser lida, evitando que seja processada por múltiplos consumidores.</li>
        </ul>
		`
    },
	{
        "q": "O SQS pode perder mensagens?",
        "a": `
        <ul>
            <li>É muito raro. Para maior segurança, pode-se usar Dead-Letter Queues (DLQ) para mensagens com falha de processamento.</li>
        </ul>
		`
    },
	{
        "q": "Qual é o tamanho máximo de uma mensagem no SQS?",
        "a": `
        <ul>
            <li>256 KB por padrão. Para mensagens maiores, use Amazon S3 + referências.</li>
        </ul>
		`
    },
	{
        "q": "O SQS é um serviço de push ou pull?",
        "a": `
        <ul>
            <li>Pull. As mensagens devem ser lidas ativamente pelos consumidores.</li>
        </ul>
		`
    },
	{
        "q": "O que são Dead-Letter Queues (DLQ) no SQS?",
        "a": `
        <ul>
            <li>Filas usadas para armazenar mensagens que falharam repetidamente, facilitando depuração e retrabalho.</li>
        </ul>
		`
    },
	{
        "q": "Qual o tempo de retenção máximo de uma mensagem no SQS?",
        "a": `
        <ul>
            <li>14 dias (padrão: 4 dias).</li>
        </ul>
		`
    },
	{
        "q": "O SQS pode ser integrado com outros serviços da AWS?",
        "a": `
        <ul>
            <li>Sim! Pode ser usado com Lambda, SNS, ECS, Step Functions, entre outros.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon SNS?",
        "a": `
        <ul>
            <li>É um serviço de notificação em tempo real baseado em publicação/assinatura (pub/sub), que envia mensagens para múltiplos destinos.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais tipos de endpoints suportados pelo SNS?",
        "a": `
        <ul>
            <li>Email | SMS | HTTP/HTTPS endpoints | Amazon SQS | AWS Lambda | Apps móveis (push).</li>
        </ul>
		`
    },
	{
        "q": "Como funciona o modelo pub/sub no SNS?",
        "a": `
        <ul>
            <li>Um publisher envia mensagens a um tópico SNS, que as repassa para todos os subscribers inscritos nesse tópico.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre SNS e SQS?",
        "a": `
        <ul>
            <li>SNS: Pub/Sub, mensagens em broadcast para múltiplos destinos.</li>
			<li>SQS: Mensagens armazenadas em fila, processadas por um consumidor por vez.</li>
        </ul>
		`
    },
	{
        "q": "O SNS pode ser usado para notificações push em dispositivos móveis",
        "a": `
        <ul>
            <li>Sim! SNS integra com APNs, FCM e outros serviços de push para enviar mensagens a apps móveis.</li>
        </ul>
		`
    },
	{
        "q": "O SNS garante entrega das mensagens",
        "a": `
        <ul>
            <li>Entrega ao endpoint sim, mas nem todos os endpoints garantem processamento final. Para alta confiabilidade, use com SQS ou Lambda.</li>
        </ul>
		`
    },
	{
        "q": "O que é um tópico no SNS",
        "a": `
        <ul>
            <li>Um canal lógico de comunicação, onde os publicadores enviam mensagens e os assinantes recebem.</li>
        </ul>
		`
    },
	{
        "q": "O SNS pode filtrar mensagens por conteúdo",
        "a": `
        <ul>
            <li>Sim. Filtros de atributos podem ser usados para entregar mensagens seletivamente a assinantes.</li>
        </ul>
		`
    },
	{
        "q": "O SNS é escalável",
        "a": `
        <ul>
            <li>Sim. Ele suporta milhões de mensagens por segundo, com escalabilidade automática.</li>
        </ul>
		`
    },
	{
        "q": "O SNS pode ser integrado com AWS Lambda",
        "a": `
        <ul>
            <li>Sim. SNS pode disparar funções Lambda automaticamente ao publicar mensagens.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon MQ",
        "a": `
        <ul>
            <li>É um serviço de broker de mensagens gerenciado da AWS, compatível com protocolos e APIs de mensagens padrão como AMQP, MQTT, OpenWire e STOMP.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a principal vantagem do Amazon MQ",
        "a": `
        <ul>
            <li>Permite migração fácil de aplicações legadas que já usam brokers como ActiveMQ ou RabbitMQ, sem reescrever o código.</li>
        </ul>
		`
    },
	{
        "q": "Quais engines de broker o Amazon MQ suporta",
        "a": `
        <ul>
            <li>Apache ActiveMQ | RabbitMQ.</li>
        </ul>
		`
    },
	{
        "q": "Qual o modelo de mensagens do Amazon MQ",
        "a": `
        <ul>
            <li>Suporta os dois modelos: Fila ponto a ponto (Queue) | Publicação/Assinatura (Topic).</li>
        </ul>
		`
    },
	{
        "q": "O Amazon MQ é adequado para sistemas modernos baseados em eventos",
        "a": `
        <ul>
            <li>Sim, mas é mais indicado para aplicações existentes que já usam padrões de mensagens tradicionais. Para arquiteturas serverless, a AWS recomenda SNS/SQS.</li>
        </ul>
		`
    },
	{
        "q": "O Amazon MQ é gerenciado pela AWS",
        "a": `
        <ul>
            <li>Sim. Você pode criar brokers em modo ativo/passivo em múltiplas zonas de disponibilidade com failover automático.</li>
        </ul>
		`
    },
	{
        "q": "O Amazon MQ pode ser integrado com aplicações que usam JMS (Java Message Service)",
        "a": `
        <ul>
            <li>Sim. É compatível com JMS 1.1, facilitando a integração com aplicações Java corporativas.</li>
        </ul>
		`
    },
	{
        "q": "Quais protocolos o Amazon MQ suporta",
        "a": `
        <ul>
            <li>AMQP | MQTT | OpenWire | STOMP | WebSocket (com RabbitMQ).</li>
        </ul>
		`
    },
	{
        "q": "Quando usar Amazon MQ em vez de SQS/SNS",
        "a": `
        <ul>
            <li>Quando sua aplicação já usa protocolos padrão de mensagens ou requer compatibilidade com brokers tradicionais.</li>
        </ul>
		`
    },
]
  