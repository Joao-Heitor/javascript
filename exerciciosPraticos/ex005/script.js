let num = document.querySelector("#num")
let valores = document.querySelector("#valores")
let res = document.querySelector("#res")
let lista = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true

    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, lista)) {
        lista.push(num.value)
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado!`
        valores.appendChild(item)
        res.innerHTML = ""
    } else {
        alert("Valor inválido")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (lista.length == 0) {
        alert("Adicione valores antes de finalizar!")

    } else {
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${lista.length} de números cadastrados.</p>`

        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0

        for (let pos in lista) {
            soma += Number(lista[pos])
            if (lista[pos] > maior)
                maior = lista[pos]
            if (lista[pos] < menor)
                menor = lista[pos]
        }
        media = soma/lista.length
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma do valores cadastrasdos é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media} </p>`
    }
}


