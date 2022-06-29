function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-homem-01.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-homem-01.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-homem-01.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem-01.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-mulher-02.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-mulher-02.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-mulher-02.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-mulher-02.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img
            )
    }
}