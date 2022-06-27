function carregar() {
var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/imagem-manha.jpeg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/imagem-tarde.jpeg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'imagens/imagem-noite.jpeg'
        document.body.style.background = '#515154'
    }
}