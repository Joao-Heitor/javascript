/*function contaLetras(string, letra) {
    let c = 0
  
    for (let k in string){
      if( string[k] == letra)
       c++
    }
    return c
}

console.log(contaLetras("carreira", "r"))


function trocaVogais(string) {  
    return string.replace("a", "1")
  
}  
console.log(trocaVogais("uvaaa"))
*/

function proximosMultiplosDe7(valorInicial, quantidade) {
    const lista = []
    for (let k = 0; k < quantidade; k++) {
      let n = k*7
      if (n >= valorInicial) 
        lista.push(n)     
    }
    return lista
  }
  
  console.log(proximosMultiplosDe7(16, 3))