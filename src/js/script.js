function criarTemplateLinha(rank, country, medal_gold, medal_silver, medal_bronze) {
    // Criando uma linha
    let linha = document.createElement("div")
    linha.classList.add("linha")
    // Criando as colunas e seus tipos
    // Criando a coluna relativa ao rank
    let colunaRank = document.createElement("div")
    colunaRank.classList.add("coluna", "coluna-rank")
    // Criando a coluna relativa ao country
    let colunaCountry = document.createElement("div")
    colunaCountry.classList.add("coluna", "coluna-country")
    // Criando a coluna relativa à medalha de ouro
    let colunaMedalhaOuro = document.createElement("div")
    colunaMedalhaOuro.classList.add("coluna", "medal-gold")
    // Criando a coluna relativa à medalha de prata
    let colunaMedalhaPrata = document.createElement("div")
    colunaMedalhaPrata.classList.add("coluna", "medal-silver")
    // Criando a coluna relativa à medalha de bronze
    let colunaMedalhaBronze = document.createElement("div")
    colunaMedalhaBronze.classList.add("coluna", "medal-bronze")
    // Criando a coluna relativa ao total
    let colunaTotal = document.createElement("div")
    colunaTotal.classList.add("coluna", "total")
    // Criando o span relativo à coluna rank
    let valorRank = document.createElement("span")
    valorRank.innerText = `${String(rank)}`
    // Criando o span relativo à coluna country
    let valorCountry = document.createElement("span")
    valorCountry.innerText = `${String(country)}`
    // Criando o span relativo à coluna da medalha de ouro
    let valorGold = document.createElement("span")
    valorGold.innerText = `${Number(medal_gold)}`
    // Criando o span relativo à coluna da medalha de prata
    let valorSilver = document.createElement("span")
    valorSilver.innerText = `${Number(medal_silver)}`
    // Criando o span relativo à coluna da medalha de bronze
    let valorBronze = document.createElement("span")
    valorBronze.innerText = `${Number(medal_bronze)}`
    // Criando o span relativo à coluna total
    let valorTotal = document.createElement("span")
    valorTotal.innerText = `${medal_gold + medal_silver + medal_bronze}`
    // Adicionando os elementos...
    colunaRank.appendChild(valorRank)
    linha.appendChild(colunaRank)
    colunaCountry.appendChild(valorCountry)
    linha.appendChild(colunaCountry)
    colunaMedalhaOuro.appendChild(valorGold)
    linha.appendChild(colunaMedalhaOuro)
    colunaMedalhaPrata.appendChild(valorSilver)
    linha.appendChild(colunaMedalhaPrata)
    colunaMedalhaBronze.appendChild(valorBronze)
    linha.appendChild(colunaMedalhaBronze)
    colunaTotal.appendChild(valorTotal)
    linha.appendChild(colunaTotal)
    let quadro = document.getElementById('quadro')
    quadro.appendChild(linha)
}
criarTemplateLinha("1°", "Brasil", 90, 96, 124)
criarTemplateLinha("2°", "Romania", 89, 95, 123)
criarTemplateLinha("3°", "Estados Unidos", 29, 46, 29)
criarTemplateLinha("4°", "China", 38, 27, 23)