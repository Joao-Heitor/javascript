function contar() {
    //let faz a variavel existir apenas dentro do bloco
    var res = document.querySelector("#res")
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let passo = document.querySelector("#passo")

    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ("Impossível contar")
    } else {
        let i = Number(num1.value)
        let f = Number(num2.value)
        let p = Number(passo.value)
        res.innerHTML = "Contando: "

        if (p <= 0) {
            alert("Intervalo invalido! Considerando passo 1")
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += (` ${c}`)
            }


        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += (` ${c}`)
            }
        }
    }

}