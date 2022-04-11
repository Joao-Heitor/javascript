let num = [5, 8 , 3, 9, 5]
num.sort()
for(pos = 0; pos < num.length; pos++){
    console.log(`Elementos do vetor: ${num[pos]}`)
}

for(let pos in num){
    console.log(num[pos])
}