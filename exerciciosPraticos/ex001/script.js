function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = "manha-250.png"
        document.body.style.background = "#f9dcaa"

    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = "tarde-250.png"
        document.body.style.background = "#7b6439"

    }else{
        //Boa noite
        img.src = "noite-250.png"
        document.body.style.background = "#463756"
    }

}