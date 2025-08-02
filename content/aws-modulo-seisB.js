const aws_card_modulo_seisB = [	
	{
        "q": "Quais tipos de migração o AWS DMS (Database Migration Service) suporta?",
        "a": `
        <ul>
            <li>Migração homogênea (mesmo tipo de banco) e heterogênea (tipos diferentes de bancos).</li>
        </ul>
		`
    },
	{
        "q": "Dê um exemplo de migração homogênea com o DMS (Database Migration Service).",
        "a": `
        <ul>
            <li>De MySQL para MySQL ou de Oracle para Oracle.</li>
        </ul>
		`
    },
	{
        "q": "Dê um exemplo de migração heterogênea com o DMS (Database Migration Service).",
        "a": `
        <ul>
            <li>De Oracle para Amazon Aurora ou de SQL Server para PostgreSQL.</li>
        </ul>
		`
    },
		{
        "q": "Qual ferramenta deve ser usada junto ao DMS (Database Migration Service) em migrações heterogêneas?",
        "a": `
        <ul>
            <li>AWS Schema Conversion Tool (AWS SCT).</li>
        </ul>
		`
    },
	{
        "q": "O AWS DMS (Database Migration Service)migra apenas os dados?",
        "a": `
        <ul>
            <li>Sim, para migração de estrutura (schema), usa-se o AWS SCT.</li>
        </ul>
		`
    },
	{
        "q": "O DMS (Database Migration Service) é adequado para migrações com zero downtime?",
        "a": `
        <ul>
            <li>Sim, ele suporta replicação contínua (CDC – Change Data Capture).</li>
        </ul>
		`
    },
	{
        "q": "O DMS é adequado para migrações com zero downtime?",
        "a": `
        <ul>
            <li>Não, o DMS (Database Migration Service) é um serviço totalmente gerenciado e não exige instalação local.</li>
        </ul>
		`
    },
	{
        "q": "O DMS (Database Migration Service) pode migrar dados para fora da AWS?",
        "a": `
        <ul>
            <li>Sim, ele suporta migração de/para ambientes locais (on-premises) e outros provedores.</li>
        </ul>
		`
    },
	{
        "q": "O que é necessário configurar no DMS (Database Migration Service) para iniciar uma migração?",
        "a": `
        <ul>
            <li>Endpoint de origem, endpoint de destino e uma instância de replicação.</li>
        </ul>
		`
    },
	{
        "q": "Qual é um dos principais benefícios do AWS DMS (Database Migration Service)?",
        "a": `
        <ul>
            <li>Reduz o tempo de inatividade durante migrações complexas de banco de dados.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Schema Conversion Tool (AWS SCT)?",
        "a": `
        <ul>
            <li>É uma ferramenta que converte automaticamente esquemas de banco de dados de um tipo para outro.</li>
        </ul>
		`
    },
	{
        "q": "Quando o AWS SCT (AWS Schema Conversion Tool) é usado?",
        "a": `
        <ul>
            <li>Em migrações heterogêneas, onde os bancos de origem e destino são de tipos diferentes.</li>
        </ul>
		`
    },
	{
        "q": "O que o AWS SCT (AWS Schema Conversion Tool) converte?",
        "a": `
        <ul>
            <li>Esquemas (tabelas, índices, procedimentos armazenados, funções, etc.) e, em alguns casos, código de aplicação associado.</li>
        </ul>
		`
    },
	{
        "q": "O que o SCT (AWS Schema Conversion Tool) faz quando encontra objetos que não podem ser convertidos automaticamente?",
        "a": `
        <ul>
            <li>Ele marca como “não convertido” e sugere alterações manuais.</li>
        </ul>
		`
    },
	{
        "q": "O AWS SCT (AWS Schema Conversion Tool) é uma ferramenta online ou offline?",
        "a": `
        <ul>
            <li>É uma ferramenta cliente (desktop), que precisa ser instalada localmente.</li>
        </ul>
		`
    },
	{
        "q": "Qual serviço AWS é usado junto com o SCT (AWS Schema Conversion Tool) para migrar os dados?",
        "a": `
        <ul>
            <li>AWS DMS (Database Migration Service).</li>
        </ul>
		`
    },
	{
        "q": "O SCT (AWS Schema Conversion Tool) pode ajudar a identificar o esforço da migração?",
        "a": `
        <ul>
            <li>Sim, ele gera relatórios de compatibilidade e mede o esforço necessário para a conversão.</li>
        </ul>
		`
    },
	{
        "q": "Quais bancos são suportados como origem pelo AWS SCT (AWS Schema Conversion Tool)?",
        "a": `
        <ul>
            <li>Oracle, SQL Server, DB2, MySQL, PostgreSQL, entre outros.</li>
        </ul>
		`
    },
	{
        "q": "Quais destinos comuns o SCT (AWS Schema Conversion Tool) suporta?",
        "a": `
        <ul>
            <li>Amazon Aurora, Amazon RDS, Amazon Redshift, PostgreSQL, MySQL.</li>
        </ul>
		`
    },
	{
        "q": "O AWS SCT (AWS Schema Conversion Tool) pode converter código armazenado (stored procedures, triggers)?",
        "a": `
        <ul>
            <li>Sim, mas com limitações – alguns trechos exigem conversão manual.</li>
        </ul>
		`
    },
	{
        "q": "É possível personalizar ou revisar o código gerado pelo SCT (AWS Schema Conversion Tool)?",
        "a": `
        <ul>
            <li>Sim, o código convertido pode ser revisado e editado antes de ser aplicado no destino.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a principal vantagem do AWS SCT (AWS Schema Conversion Tool)?",
        "a": `
        <ul>
            <li>Reduz o esforço manual em migrações heterogêneas de banco de dados para a AWS.</li>
        </ul>
		`
    },
	{
        "q": "Qual é a principal vantagem do AWS SCT (AWS Schema Conversion Tool)?",
        "a": `
        <ul>
            <li>Reduz o esforço manual em migrações heterogêneas de banco de dados para a AWS.</li>
        </ul>
		`
    },
	{
        "q": "O que é o Amazon VPC?",
        "a": `
        <ul>
            <li>É um serviço que permite provisionar uma rede virtual isolada na AWS.</li>
        </ul>
		`
    },
	{
        "q": "O que pode ser configurado dentro de uma VPC?",
        "a": `
        <ul>
            <li>Sub-redes, tabelas de rotas, gateways, ACLs, grupos de segurança, etc.</li>
        </ul>
		`
    },
	{
        "q": "Qual o tamanho padrão do bloco CIDR de uma VPC?",
        "a": `
        <ul>
            <li>Pode variar, mas deve estar entre /16 e /28.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma Subnet em uma VPC?",
        "a": `
        <ul>
            <li>Uma subdivisão da VPC usada para isolar recursos em zonas de disponibilidade.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre uma subnet pública e uma privada?",
        "a": `
        <ul>
            <li>Subnet pública tem rota para a internet via Internet Gateway; privada não.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Internet Gateway (IGW)?",
        "a": `
        <ul>
            <li>Um componente que permite comunicação entre recursos na VPC e a internet.</li>
        </ul>
		`
    },
	{
        "q": "O que é um NAT Gateway?",
        "a": `
        <ul>
            <li>Permite que instâncias em subnets privadas acessem a internet sem serem acessíveis externamente.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Security Group na VPC?",
        "a": `
        <ul>
            <li>Firewall virtual de nível de instância que controla tráfego de entrada e saída.</li>
        </ul>
		`
    },
	{
        "q": "O que são Network ACLs (Access Control Lists)?",
        "a": `
        <ul>
            <li>Firewalls de nível de subnet que controlam tráfego de entrada e saída com regras numeradas.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma VPC Peering?",
        "a": `
        <ul>
            <li>Conexão privada entre duas VPCs para troca de tráfego usando IPs privados.</li>
        </ul>
		`
    },
	{
        "q": "É possível fazer peering entre VPCs de diferentes regiões?",
        "a": `
        <ul>
            <li>Sim, isso é chamado de Inter-Region VPC Peering.</li>
        </ul>
		`
    },
	{
        "q": "O que é um VPC Endpoint?",
        "a": `
        <ul>
            <li>Permite acesso privado a serviços AWS sem passar pela internet.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS PrivateLink?",
        "a": `
        <ul>
            <li>Um tipo de VPC Endpoint para acessar serviços AWS ou de terceiros via interface privada.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma Elastic IP dentro de uma VPC?",
        "a": `
        <ul>
            <li>Um IP público fixo que pode ser associado a uma instância EC2 ou NAT Gateway.</li>
        </ul>
		`
    },
	{
        "q": "O que é o DHCP Options Set na VPC?",
        "a": `
        <ul>
            <li>Define configurações de DHCP como DNS e domínio para instâncias na VPC.</li>
        </ul>
		`
    },
	{
        "q": "Quantas VPCs posso criar por região por padrão?",
        "a": `
        <ul>
            <li>5 por região (limite que pode ser aumentado via solicitação).</li>
        </ul>
		`
    },
	{
        "q": "Uma VPC pode abranger múltiplas regiões?",
        "a": `
        <ul>
            <li>Não, VPCs são regionais.</li>
        </ul>
		`
    },
	{
        "q": "O que é um Internet Gateway (IGW) na AWS?",
        "a": `
        <ul>
            <li>É um componente que permite que instâncias em uma VPC se comuniquem com a internet.</li>
        </ul>
		`
    },
	{
        "q": "O IGW é usado com quais tipos de subnets?",
        "a": `
        <ul>
            <li>Com subnets públicas (que precisam acesso direto à internet).</li>
        </ul>
		`
    },
	{
        "q": "É possível associar mais de um Internet Gateway (IGW) a uma VPC?",
        "a": `
        <ul>
            <li>Não, uma VPC pode ter apenas um IGW associado por vez.</li>
        </ul>
		`
    },
	{
        "q": "O Internet Gateway (IGW) é usado para tráfego de entrada, saída ou ambos?",
        "a": `
        <ul>
            <li>Para ambos – entrada e saída de tráfego com a internet.</li>
        </ul>
		`
    },
	{
        "q": "O que é necessário além do Internet Gateway (IGW) para que uma instância EC2 tenha acesso à internet?",
        "a": `
        <ul>
            <li>IP público (ou Elastic IP), rota para o IGW na tabela de rotas da subnet.</li>
        </ul>
		`
    },
	{
        "q": "O Internet Gateway (IGW) é regional ou global?",
        "a": `
        <ul>
            <li>É um recurso regional, assim como a VPC à qual está vinculado.</li>
        </ul>
		`
    },
	{
        "q": "O Internet Gateway (IGW)realiza NAT para instâncias com IP privado?",
        "a": `
        <ul>
            <li>Não, Internet Gateway (IGW) só funciona com IPs públicos ou Elastic IPs. Para IPs privados, usa-se NAT Gateway.</li>
        </ul>
		`
    },
	{
        "q": "É necessário pagar pelo uso do Internet Gateway (IGW)?",
        "a": `
        <ul>
            <li>Não, o Internet Gateway (IGW) não tem custo adicional — apenas o tráfego de saída é cobrado.</li>
        </ul>
		`
    },
	{
        "q": "Qual é o comportamento do Internet Gateway (IGW) se não houver rota configurada?",
        "a": `
        <ul>
            <li>O tráfego não sai da VPC; é bloqueado por ausência de rota.</li>
        </ul>
		`
    },
	{
        "q": "O Internet Gateway (IGW) funciona com IPv6?",
        "a": `
        <ul>
            <li>Sim, desde que a VPC e a instância estejam configuradas com endereços IPv6 e rotas apropriadas.</li>
        </ul>
		`
    },
	{
        "q": "O Internet Gateway (IGW) atua como firewall?",
        "a": `
        <ul>
            <li>Não, ele apenas roteia tráfego. O controle de segurança é feito por Security Groups e Network ACLs.</li>
        </ul>
		`
    },
	{
        "q": "Pode-se remover o Internet Gateway (IGW) de uma VPC a qualquer momento?",
        "a": `
        <ul>
            <li>Sim, mas as instâncias perdem imediatamente o acesso à internet.</li>
        </ul>
		`
    },
	{
        "q": "É necessário configurar o Internet Gateway (IGW) com regras específicas?",
        "a": `
        <ul>
            <li>Não, ele funciona automaticamente quando conectado à VPC e configurado nas rotas.</li>
        </ul>
		`
    },
	{
        "q": "O que é um NAT Gateway na AWS?",
        "a": `
        <ul>
            <li>É um serviço gerenciado que permite que instâncias em subnets privadas acessem a internet, sem permitir conexões de entrada iniciadas da internet.</li>
        </ul>
		`
    },
	{
        "q": "NAT Gateway permite tráfego de entrada da internet?",
        "a": `
        <ul>
            <li>Não. Ele só permite saída, não aceita conexões iniciadas da internet.</li>
        </ul>
		`
    },
	{
        "q": "Qual a diferença entre NAT Gateway e NAT Instance?",
        "a": `
        <ul>
            <li>NAT Gateway é gerenciado, mais escalável e de alta disponibilidade. NAT Instance é uma instância EC2 com NAT manualmente configurado.</li>
        </ul>
		`
    },
	{
        "q": "O NAT Gateway precisa estar em qual tipo de subnet?",
        "a": `
        <ul>
            <li>Em uma subnet pública com rota para o Internet Gateway (IGW).</li>
        </ul>
		`
    },
	{
        "q": "Subnets privadas podem acessar a internet usando o NAT Gateway?",
        "a": `
        <ul>
            <li>Sim, desde que a tabela de rotas da subnet aponte para o NAT Gateway.</li>
        </ul>
		`
    },
	{
        "q": "O NAT Gateway exige um IP público ou Elastic IP?",
        "a": `
        <ul>
            <li>Sim, ele precisa de um Elastic IP para funcionar.</li>
        </ul>
		`
    },
	{
        "q": "O NAT Gateway é regional ou por zona de disponibilidade?",
        "a": `
        <ul>
            <li>Ele é criado por zona de disponibilidade; se quiser alta disponibilidade, crie um em cada AZ.</li>
        </ul>
		`
    },
	{
        "q": "O NAT Gateway funciona com IPv6?",
        "a": `
        <ul>
            <li>Não. Para IPv6, usa-se Egress-Only Internet Gateway.</li>
        </ul>
		`
    },
	{
        "q": "Qual é o caso de uso mais comum para o NAT Gateway?",
        "a": `
        <ul>
            <li>Permitir que servidores em subnets privadas façam atualizações ou acessem APIs externas.</li>
        </ul>
		`
    },
	{
        "q": "O NAT Gateway é um serviço gratuito?",
        "a": `
        <ul>
            <li>Não. Você paga por hora e por volume de dados transferidos.</li>
        </ul>
		`
    },
	{
        "q": "O que acontece se o NAT Gateway ficar inacessível?",
        "a": `
        <ul>
            <li>Instâncias em subnets privadas perdem o acesso à internet.</li>
        </ul>
		`
    },
	{
        "q": "Qual componente deve estar presente para que o NAT Gateway envie tráfego para a internet?",
        "a": `
        <ul>
            <li>Um Internet Gateway (IGW) conectado à VPC.</li>
        </ul>
		`
    },
	{
        "q": "Quantos NAT Gateways podem existir por VPC?",
        "a": `
        <ul>
            <li>Quantos forem necessários, mas há limites de região que podem ser aumentados sob solicitação.</li>
        </ul>
		`
    },
	{
        "q": "O NAT Gateway pode ser usado para comunicação entre subnets privadas?",
        "a": `
        <ul>
            <li>Não. Ele é apenas para tráfego de saída para a internet.</li>
        </ul>
		`
    },
	{
        "q": "Como garantir alta disponibilidade com NAT Gateway?",
        "a": `
        <ul>
            <li>Crie um NAT Gateway em cada zona de disponibilidade e atualize as tabelas de rotas de acordo.</li>
        </ul>
		`
    }
]