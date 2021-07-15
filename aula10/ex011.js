var idade = 55
console.log(`Você tem ${idade}`)
if (idade < 16){
    console.log('Não vota')
}else if(idade <18 ){  //else if(idade <18 || (ou) >=65) pode ser dessa forma
         console.log('Voto opcional')
    }else if (idade >=65){
    console.log('Voto opcional')
}else 
console.log('Voto obrigatório')

