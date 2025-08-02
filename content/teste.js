const teste = [
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
    }
]