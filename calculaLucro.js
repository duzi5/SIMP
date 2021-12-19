function salvar (){
    var frete = parseFloat(document.getElementById('freteVidro').value)
    var vidro = parseFloat(document.getElementById('vidro').value)
    document.getElementById('resultado').innerHTML = frete + vidro 
}

