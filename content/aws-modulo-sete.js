const aws_card_modulo_sete = [
	{
        "q": "O que é o AWS Site-to-Site VPN?",
        "a": `
        <ul>
            <li>É um serviço da AWS que conecta redes locais (on-premises) à nuvem da AWS por meio de uma conexão VPN segura pela internet.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais componentes de uma Site-to-Site VPN na AWS?",
        "a": `
        <ul>
            <li>Virtual Private Gateway (VGW): do lado da AWS.</li>
			<li>Customer Gateway (CGW): no local do cliente (on-premises)</li>
        </ul>
		`
    },
	{
        "q": "A AWS Site-to-Site VPN usa qual protocolo para comunicação segura?",
        "a": `
        <ul>
            <li>IPsec (Internet Protocol Security).</li>
        </ul>
		`
    },
	{
        "q": "A AWS Site-to-Site VPN fornece alta disponibilidade?",
        "a": `
        <ul>
            <li>ISim. Por padrão, ela cria duas túneis VPN redundantes para garantir disponibilidade.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a diferença entre AWS Direct Connect e Site-to-Site VPN?",
        "a": `
        <ul>
            <li>VPN: conexão criptografada pela internet, mais fácil e rápida de configurar.</li>
			<li>Direct Connect: conexão física dedicada, mais cara, com latência menor e mais largura de banda.</li>
        </ul>
		`
    },
	{
        "q": "O que é necessário configurar no lado do cliente para usar a Site-to-Site VPN?",
        "a": `
        <ul>
            <li>Um dispositivo compatível com IPsec (roteador/firewall) configurado como Customer Gateway (CGW).</li>
        </ul>
		`
    },
	{
        "q": "É possível usar a VPN com uma VPC?",
        "a": `
        <ul>
            <li>Sim. A Site-to-Site VPN conecta uma rede on-premises a uma Amazon VPC através de um Virtual Private Gateway.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os requisitos mínimos para uma Site-to-Site VPN?",
        "a": `
        <ul>
            <li>Uma VPC com Virtual Private Gateway.</li>
			<li>Um Customer Gateway (endereço IP estático e configurável)</li>
			<li>Túnel IPsec configurado em ambos os lados</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Transit Gateway?",
        "a": `
        <ul>
            <li>É um serviço que conecta VPCs, redes on-premises e outros gateways usando um único hub centralizado.</li>
        </ul>
		`
    },
	{
        "q": "Qual o principal benefício do AWS Transit Gateway?",
        "a": `
        <ul>
            <li>Simplifica a conectividade em larga escala entre milhares de VPCs e redes locais, reduzindo a complexidade da arquitetura de rede.</li>
        </ul>
		`
    },
	{
        "q": "O AWS Transit Gateway substitui qual padrão anterior de conectividade?",
        "a": `
        <ul>
            <li>Substitui o padrão de VPC Peering, que exige conexões ponto a ponto e não escala bem.</li>
        </ul>
		`
    },
	{
        "q": "O que é possível conectar a um Transit Gateway?",
        "a": `
        <ul>
            <li>Amazon VPCs, VPNs Site-to-Site</li>
			<li>AWS Direct Connect, Outras contas via Resource Access Manager (RAM)</li>
        </ul>
		`
    },
	{
        "q": "Qual serviço da AWS permite compartilhar um Transit Gateway entre contas?",
        "a": `
        <ul>
            <li>AWS Resource Access Manager (RAM).</li>
        </ul>
		`
    },
	{
        "q": "O AWS Transit Gateway suporta roteamento?",
        "a": `
        <ul>
            <li>Sim. Ele usa tablas de rotas para controlar o tráfego entre os anexos (attachments).</li>
        </ul>
		`
    },
	{
        "q": "O que é um attachment no Transit Gateway?",
        "a": `
        <ul>
            <li>É a conexão entre o Transit Gateway e um recurso, como uma VPC, VPN ou Direct Connect.</li>
        </ul>
		`
    },
	{
        "q": "O AWS Transit Gateway suporta multicast?",
        "a": `
        <ul>
            <li>Sim, mas apenas em algumas regiões e para tráfego multicast dentro da AWS.</li>
        </ul>
		`
    },
	{
        "q": "O AWS Transit Gateway é um serviço regional ou global?",
        "a": `
        <ul>
            <li>É regional, mas pode se conectar a outras regiões usando o Transit Gateway Peering.</li>
        </ul>
		`
    },
	{
        "q": "Como o AWS Transit Gateway melhora a escalabilidade da rede?",
        "a": `
        <ul>
            <li>Reduz o número de conexões necessárias ao usar um modelo de hub-and-spoke, evitando redes full mesh.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS VPN CloudHub?",
        "a": `
        <ul>
            <li>É uma solução da AWS que permite interconectar diferentes redes locais (on-premises) por meio da nuvem da AWS, usando túneis VPN.</li>
        </ul>
		`
    },
	{
        "q": "Em que cenário o AWS VPN CloudHub é ideal?",
        "a": `
        <ul>
            <li>Quando há vários escritórios remotos que precisam se comunicar entre si via a nuvem, mas não possuem conexões diretas entre eles.</li>
        </ul>
		`
    },
	{
        "q": "O AWS VPN CloudHub usa quais componentes da AWS?",
        "a": `
        <ul>
            <li>Virtual Private Gateway (VGW), Customer Gateway (CGW), Túneis VPN IPsec.</li>
        </ul>
		`
    },
	{
        "q": "Qual o papel do Virtual Private Gateway no CloudHub?",
        "a": `
        <ul>
            <li>Serve como o ponto central (hub) para conexões VPN de múltiplas redes remotas (spokes).</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Direct Connect?",
        "a": `
        <ul>
            <li>É um serviço da AWS que permite estabelecer uma conexão de rede dedicada e privada entre seu datacenter local e a AWS.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais benefícios do AWS Direct Connect?",
        "a": `
        <ul>
            <li>Menor latência | Maior largura de banda | Confiabilidade superior | Evita a internet pública.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais benefícios do AWS Direct Connect?",
        "a": `
        <ul>
            <li>Menor latência | Maior largura de banda | Confiabilidade superior | Evita a internet pública.</li>
        </ul>
		`
    },
	{
        "q": "O AWS Direct Connect utiliza a internet pública?",
        "a": `
        <ul>
            <li>Não. Ele estabelece uma conexão privada, fora da internet pública.</li>
        </ul>
		`
    },
	{
        "q": "Em quais situações o Direct Connect é recomendado?",
        "a": `
        <ul>
            <li>Aplicações que exigem alta performance e baixa latência.</li>
			<li>Transferência de grandes volumes de dados.</li>
			<li>Ambientes híbridos entre on-premises e AWS.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Direct Connect location?",
        "a": `
        <ul>
            <li>É um local físico operado por um parceiro da AWS onde você pode estabelecer uma conexão com a infraestrutura da AWS.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os dois tipos de interfaces no Direct Connect?",
        "a": `
        <ul>
            <li>Public virtual interface (VIF pública): para acessar serviços públicos da AWS.</li>
			<li>Private virtual interface (VIF privada): para acessar recursos dentro de VPCs.</li>
        </ul>
		`
    },
	{
        "q": "O AWS Direct Connect pode ser usado com VPCs?",
        "a": `
        <ul>
            <li>Sim, via Virtual Private Gateway ou Transit Gateway, usando uma VIF privada.</li>
        </ul>
		`
    },
	{
        "q": "É possível usar o Direct Connect com múltiplas contas da AWS?",
        "a": `
        <ul>
            <li>Sim, usando AWS Direct Connect Gateway, é possível compartilhar a conexão com múltiplas VPCs em diferentes contas e regiões.</li>
        </ul>
		`
    },
	{
        "q": "Quais velocidades estão disponíveis no AWS Direct Connect?",
        "a": `
        <ul>
            <li>Conexões de 1 Gbps, 10 Gbps ou 100 Gbps.</li>
			<li>Conexões menores via parceiros da AWS (50 Mbps a 500 Mbps, por exemplo).</li>
        </ul>
		`
    },
	{
        "q": "O AWS Direct Connect garante criptografia de dados?",
        "a": `
        <ul>
            <li>Não por padrão. A conexão é privada, mas recomenda-se criptografia adicional (como IPsec ou TLS) se necessário.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon Kinesis Data Streams (KDS)?",
        "a": `
        <ul>
            <li>É um serviço da AWS que permite coletar, processar e armazenar dados de streaming em tempo real de forma escalável.</li>
        </ul>
		`
    },
	{
        "q": "Qual é o principal caso de uso do Kinesis Data Streams?",
        "a": `
        <ul>
            <li>Processamento de dados em tempo real, como logs, eventos, cliques em sites, transações financeiras e telemetria de IoT.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais componentes do Kinesis Data Streams?",
        "a": `
        <ul>
            <li>Stream (fluxo), Shards (fragmentos), Producers, Consumers, Records.</li>
        </ul>
		`
    },
	{
        "q": "O que é um shard em Kinesis Data Streams?",
        "a": `
        <ul>
            <li>Unidade de capacidade dentro de um stream. Cada shard pode processar até 1 MB/s de entrada e 2 MB/s de saída, com até 1.000 registros por segundo.</li>
        </ul>
		`
    },
	{
        "q": "Por quanto tempo os dados ficam disponíveis em um stream do Kinesis Data Streams?",
        "a": `
        <ul>
            <li>Por padrão, 24 horas, podendo ser aumentado para até 7 dias (ou até 365 dias com retenção extendida paga).</li>
        </ul>
		`
    },
	{
        "q": "O que são producers no KDS?",
        "a": `
        <ul>
            <li>Aplicações ou dispositivos que enviam dados para o stream, como servidores, sensores ou aplicações web.</li>
        </ul>
		`
    },
	{
        "q": "O que são consumers no KDS?",
        "a": `
        <ul>
            <li>Aplicações que leem e processam dados do stream, como Lambda functions, Kinesis Data Analytics ou Kinesis Client Library (KCL).</li>
        </ul>
		`
    },
	{
        "q": "Qual o modelo de consumo padrão em Kinesis Data Streams?",
        "a": `
        <ul>
            <li>O modelo "pull", onde os consumidores solicitam os dados ao stream.</li>
        </ul>
		`
    },
	{
        "q": "O que é a Kinesis Client Library (KCL)?",
        "a": `
        <ul>
            <li>Biblioteca usada para facilitar a leitura e o processamento de dados de um stream com escalabilidade, checkpointing e paralelismo.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a diferença entre Kinesis Data Streams e Kinesis Firehose?",
        "a": `
        <ul>
            <li>Kinesis Data Streams: streaming com controle detalhado e processamento customizado.</li>
			<li>Kinesis Firehose: entrega automática e gerenciada de dados para destinos como S3, Redshift ou Elasticsearch.</li>
        </ul>
		`
    },
]
  