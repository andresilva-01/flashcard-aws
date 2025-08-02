const aws_card_modulo_tres = [
    {
        "a": "Se você pensou no S3 Standard, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Dados acessados frequentemente.</li>
			<li>Minhas Características: Alta durabilidade, alta disponibilidade, baixa latência e desempenho consistente.</li>
			<li>Melhor uso: Arquivos que você acessa o tempo todo, como sites, aplicativos ou dados de uso diário.</li>
        </ul>
        `
    },
    {
        "a": "Se você pensou no S3 Intelligent-Tiering, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Dados com padrões de acesso variáveis ou imprevisíveis.</li>
			<li>Minhas Características: Move automaticamente os objetos entre duas camadas (frequent access e infrequent access) para otimizar custos, sem precisar gerenciar manualmente.</li>
			<li>Melhor uso: Dados cujo padrão de acesso muda ao longo do tempo, como backups ou arquivos de uso irregular.</li>
        </ul>
        `
    },
	{
        "a": "Se você pensou no S3 Glacier Instant Retrieval, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Arquivamento de dados raramente acessados.</li>
			<li>Minhas Características: Custo muito baixo, mas tempos de recuperação variam de minutos a horas.</li>
			<li>Melhor uso: Arquivos de longo prazo que não precisam ser acessados frequentemente, como registros históricos ou backups de longo prazo.</li>
        </ul>
		`
    },
	{
        "a": "Se você pensou no S3 Standard-IA (Infrequent Access), parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Dados acessados raramente, mas que precisam estar disponíveis rapidamente quando acessados.</li>
			<li>Minhas Características: Custo de armazenamento menor que o Standard, mas há uma taxa de recuperação ao acessar os dados.</li>
			<li>Melhor uso: Arquivos que você acessa de vez em quando, como backups ou dados históricos.</li>
        </ul>
		`
    },
	{
        "a": "Se você pensou no S3 Glacier Deep Archive, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Arquivamento de longo prazo de dados acessados quase nunca.</li>
			<li>Minhas Características: O custo é ainda menor que o Glacier, com tempos de recuperação de até 12 horas.</li>
			<li>Melhor uso: Dados que podem esperar bastante tempo para serem recuperados, como arquivos de conformidade ou registros históricos de longo prazo.</li>
        </ul>
		`
    },
	{
        "a": "Se você pensou no S3 One Zone-IA, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>Sirvo para: Dados acessados raramente, mas que podem ser armazenados em uma única zona de disponibilidade.</li>
			<li>Minhas Características: Custo menor que o Standard-IA, mas com menor durabilidade, pois não é replicado em múltiplas zonas.</li>
			<li>Melhor uso: Dados que podem ser recriados facilmente ou que não exigem alta durabilidade, como cópias de segurança temporárias.</li>
        </ul>
		`
    },
	{
        "a": "Se você pensou no S3 Transfer Acceleration, parabéns!!!🎉 Se pensou em outro serviço… 😅 talvez seja hora de revisar mais um pouquinho!",
        "q": `Quem sou eu?<br><br>
        <ul>
            <li>É um recurso do Amazon S3 que permite uploads e downloads mais rápidos de arquivos ao utilizar a rede global de edge locations do Amazon CloudFront</li>
        </ul>
		`
    },
	{
        "q": "Como o S3 Transfer Acceleration melhora a performance?",
        "a": `
        <ul>
            <li>Ele direciona o tráfego para a edge location mais próxima usando a rede da AWS, que é altamente otimizada, reduzindo a latência para transferências de longa distância.</li>
        </ul>
		`
    },
	{
        "q": "Qual endpoint é utilizado com Transfer Acceleration?",
        "a": `
        <ul>
            <li>bucketname.s3-accelerate.amazonaws.com — é diferente do endpoint padrão do S3.</li>
        </ul>
		`
    },
	{
        "q": "Transfer Acceleration está disponível para todas as regiões S3 automaticamente?",
        "a": `
        <ul>
            <li>Não. Deve ser ativado manualmente por bucket e nem todas as regiões ou buckets são elegíveis (por exemplo, buckets com nomes incompatíveis).</li>
        </ul>
		`
    },
	{
        "q": "Quando faz sentido usar S3 Transfer Acceleration?",
        "a": `
        <ul>
            <li>Quando usuários ou aplicações estão localizados longe da região AWS onde o bucket S3 está hospedado, como uploads globais ou sincronizações remotas de arquivos grandes.</li>
        </ul>
		`
    },
	{
        "q": "Qual ferramenta pode ser usada para testar o ganho de performance do Transfer Acceleration?",
        "a": `
        <ul>
            <li>A AWS oferece o Transfer Acceleration Speed Comparison Tool, acessível via navegador.</li>
        </ul>
		`
    },
	{
        "q": "O que é o AWS Snowcone?",
        "a": `
        <ul>
            <li>O menor dispositivo da família Snow, portátil e robusto, com até 8 TB (HDD) ou 14 TB (SSD) e pesa cerca de 2,1 kg; permite transferência offline ou online via AWS DataSync em ambientes remotos.</li>
        </ul>
		`
    },
	{
        "q": "Para que casos o Snowcone é indicado?",
        "a": `
        <ul>
            <li>Ideal para ambientes com conectividade limitada e espaço reduzido — como IoT, operações em campo e bordas — com processamento local leve via AWS IoT Greengrass ou EC2.</li>
        </ul>
		`
    },
	{
        "q": "Características principais do AWS Snowball Edge?",
        "a": `
        <ul>
            <li>Disponível em versões Storage Optimized (até 80 TB) ou Compute Optimized (42 TB + GPU opcional e 52 vCPUs); oferece processamento local com EC2 ou Lambda, rede de 10 GbE/25 GbE e criptografia.</li>
        </ul>
		`
    },
	{
        "q": "Quando usar o Snowball Edge?",
        "a": `
        <ul>
            <li>Para migrações de médio a grande volume (dezena de terabytes), computação local robusta e pré-processamento de dados offline antes do upload para a AWS.</li>
        </ul>
		`
    },
	{
        "q": "Qual era a capacidade do AWS Snowmobile?",
        "a": `
        <ul>
            <li>Até 100 PB por unidade — um contêiner de 45 pés transportado por caminhão, projetado para transferência de dados em exabyte scale (~1 EB = 1.000 PB).</li>
        </ul>
		`
    },
	{
        "q": "E o AWS Snowmobile ainda está disponível?",
        "a": `
        <ul>
            <li>Não — O serviço foi descontinuado em março de 2024, segundo confirmações da AWS e reportagens recentes</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais critérios de comparação entre Snowcone, Snowball Edge e Snowmobile?",
        "a": `
        <ul>
            <li>Capacidade de armazenamento: 8 TB / 80 TB / 100 PB.</li>
			<li>Portabilidade: leve (2 kg) / mala (22 kg) / caminhão (Snowmobile).</li>
			<li>Computação local: leve (Snowcone) / EC2/Lambda (Snowball) / não aplicável (Snowmobile).</li>
			<li>Uso ideal: IoT/field / migração média + edge computing / grandes migrações de data centers.</li>
        </ul>
		`
    },
	{
        "q": "Qual dispositivo é mais adequado se você precisa computação de borda leve e transporte via drone ou ônibus?",
        "a": `
        <ul>
            <li>AWS Snowcone — leve, portátil e pode ser enviado mesmo por drone ou transportadora, adequado para ambientes remotos e de difícil acesso.</li>
        </ul>
		`
    },
	{
        "q": "Qual dispositivo da família suporta criptografia com 256‑bit e apagamento seguro em conformidade com padrões NIST?",
        "a": `
        <ul>
            <li>Todos os dispositivos da Family AWS Snow: Snowcone, Snowball Edge e Snowmobile possuem criptografia AES‑256 e apagamento seguro conforme NIST, com etiquetas E‑Ink e rastreamento via AWS OpsHub e SNS.</li>
        </ul>
		`
    },
	{
        "q": "O que é uma Amazon Machine Image (AMI)?",
        "a": `
        <ul>
            <li>Uma imagem pré-configurada contendo sistema operacional, aplicativos e configurações necessárias para iniciar uma instância EC2. Inclui também o mapeamento de dispositivos de bloco.</li>
        </ul>
		`
    },
	{
        "q": "Quais são os componentes principais de uma AMI?",
        "a": `
        <ul>
            <li>Template do volume raiz (sistema operacional e apps).</li>
			<li>Permissões de lançamento (quem pode usar)</li>
			<li>Mapeamento de dispositivos de bloco (EBS ou instância-store)</li>
        </ul>
		`
    },
	{
        "q": "Quais tipos de AMI existem?",
        "a": `
        <ul>
            <li>AWS-managed: sistemas operacionais mantidos pela AWS (como Amazon Linux, Ubuntu, Windows Server).</li>
			<li>Marketplace AMIs: de terceiros com software adicional licenciado.</li>
			<li>Customizadas: criadas pelo usuário com configurações específicas.</li>
			<li>Públicas/comunitárias: compartilhadas por outros usuários</li>
        </ul>
		`
    },
	{
        "q": "Por que utilizar AMIs?",
        "a": `
        <ul>
            <li>Permitem implantação rápida, ambientes consistentes para múltiplas instâncias, auto-scaling, recuperação de desastre e uso em pipelines DevOps e automação.</li>
        </ul>
		`
    },
	{
        "q": "Como criar e gerenciar AMIs com segurança?",
        "a": `
        <ul>
            <li>Criar a partir de instância EC2 existente.</li>
			<li>Excluir softwares desnecessários e aplicar patches antes da criação.</li>
			<li>Utilizar EC2 Image Builder para automação e versionamento.</li>
			<li>Criptografar snapshots e controlar permissões de uso.</li>
        </ul>
		`
    },
	{
        "q": "Como as permission requests e segurança funcionam em AMIs?",
        "a": `
        <ul>
            <li>AMIs podem ser privadas, compartilhadas com contas específicas ou públicas. Sempre filtre por proprietário ao usar AMIs públicas para evitar riscos, como o ataque “whoAMI”.</li>
        </ul>
		`
    },
	{
        "q": "AMIs são específicas de que características?",
        "a": `
        <ul>
            <li>Região, sistema operacional, arquitetura de processador (x86_64, ARM), tipo de dispositivo raiz e tipo de virtualização (HVM ou PV).</li>
        </ul>
		`
    },
	{
        "q": "Um único ID de AMI é sempre estático?",
        "a": `
        <ul>
            <li>Sim — cada ID referencia uma imagem estática. Para obter atualizações (como patches de segurança), é necessário criar uma nova versão da AMI.</li>
        </ul>
		`
    },
	{
        "q": "O que é o EC2 Image Builder?",
        "a": `
        <ul>
            <li>Um serviço totalmente gerenciado da AWS que automatiza a criação, manutenção, validação, compartilhamento e distribuição de AMIs personalizadas (Linux/Windows) ou imagens de contêiner.</li>
        </ul>
		`
    },
	{
        "q": "Quais benefícios principais o EC2 Image Builder oferece?",
        "a": `
        <ul>
            <li>Automatiza builds e atualizações periódicas de imagem.</li>
			<li>Inclui testes integrados (boot, drivers, hardening).</li>
			<li>Permite aplicar políticas de segurança padronizadas da AWS.</li>
			<li>Compartilha imagens entre contas e organizações automaticamente</li>
        </ul>
		`
    },
	{
        "q": "Quais são os principais componentes do Image Builder?",
        "a": `
        <ul>
            <li>Fórmula (recipe): define imagem base + componentes.</li>
			<li>Componentes: scripts de build ou testes declarados em YAML/JSON.</li>
			<li>Pipeline de imagem: orquestra fases de compilação, validação e distribuição.</li>
			<li>Configuração de infraestrutura e distribuição (instância, VPC, regiões, permissões).</li>
        </ul>
		`
    },
	{
        "q": "Quando usar o EC2 Image Builder no dia a dia?",
        "a": `
        <ul>
            <li>Para manter imagens seguras e atualizadas automaticamente.</li>
			<li>Em ambientes de Auto Scaling, onde instâncias são destrutivas e precisam ser criadas com versões atuais.</li>
			<li>Para criar imagens padrão (golden images) que incluem ferramentas de CI/CD, hardening e software corporativo.</li>
        </ul>
		`
    },
	{
        "q": "Como o EC2 Image Builder integra segurança às imagens?",
        "a": `
        <ul>
            <li>Aplicação automática de patches.</li>
			<li>Remoção de pacotes desnecessários.</li>
			<li>Ativação de firewall, senhas fortes e criptografia full-disk (KMS).</li>
			<li>Uso de padrões como CIS e STIG disponíveis como componentes integrados.</li>
        </ul>
		`
    },
	{
        "q": "Quais formatos de imagem o EC2 Image Builder suporta?",
        "a": `
        <ul>
            <li>AMIs para instâncias EC2 (Linux ou Windows).</li>
			<li>Imagens de contêiner Docker hospedadas no ECR ou DockerHub.</li>
			<li>Suporte adicional para formatos on‑prem (VHDX, VMDK, OVF) via integração com VM Import/Export.</li>
        </ul>
		`
    },
	{
        "q": "Quais formatos de imagem o EC2 Image Builder suporta?",
        "a": `
        <ul>
            <li>AMIs para instâncias EC2 (Linux ou Windows).</li>
			<li>Imagens de contêiner Docker hospedadas no ECR ou DockerHub.</li>
			<li>Suporte adicional para formatos on‑prem (VHDX, VMDK, OVF) via integração com VM Import/Export.</li>
        </ul>
		`
    },
]
  