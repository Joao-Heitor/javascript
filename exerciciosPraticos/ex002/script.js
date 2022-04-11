function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")

    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade<12){
                img.setAttribute("src", "imagens/criancaM-250.png")
            }else if (idade < 21){
                img.setAttribute("src", "imagens/jovemM-250.png")
            }else if (idade < 55){
                img.setAttribute("src", "imagens/aldultoM-250.png")
            }else{
                img.setAttribute("src", "imagens/idosoM-250.png")   
            }

        }else if(fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade<12){
                img.setAttribute("src", "imagens/criancaF-250.png")
            }else if (idade < 21){
                img.setAttribute("src", "imagens/jovemF-250.png")
            }else if (idade < 55){
                img.setAttribute("src", "imagens/adultoF-250.png")
            }else{
                img.setAttribute("src", "imagens/idosoF-250.png")
            }

        }
        
        res.style.textAlign = "center"
        res.innerHTML = `Detectado ${genero} com idade ${idade}`
        res.appendChild(img)
    }
}