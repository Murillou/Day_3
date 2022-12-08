                                                        //CALCULADORA DA ARÉA DO TRIÂNGULO

const btn = document.querySelector("#Enviar")

btn.addEventListener("click", function(e){

    e.preventDefault()

    const base = document.querySelector("#base")
    const altura = document.querySelector("#altura")

    const valueOne = base.value
    const valueTwo = altura.value

    console.log(valueOne)
    console.log(valueTwo)

    const area = 0.5 * valueOne * valueTwo
    console.log(area)

    result.innerHTML = area
})

                                                        //CALCULADORA DO PERÍMETRO DO TRIÂNGULO

const btnTwo = document.querySelector("#enviarTwo")

btnTwo.addEventListener("click", function(e){
    
    e.preventDefault()
    
    const lado1 = document.querySelector("#lado1")
    const lado2 = document.querySelector("#lado2")
    const lado3 = document.querySelector("#lado3")

    valuePerOne = parseInt(lado1.value)
    valuePerTwo = parseInt(lado2.value)
    valuePerTree = parseInt(lado3.value)

    console.log(valuePerOne)
    console.log(valuePerTwo)
    console.log(valuePerTree)

    const valuePerimeter = (valuePerOne + valuePerTwo + valuePerTree)
    console.log(valuePerimeter)

    resultTwo.innerHTML = valuePerimeter
   
})

                                                        //CALCULADORA DA ÁREA DO RETANGULO


const btnTree = document.querySelector("#enviarTree")

btnTree.addEventListener("click", function(e){

    e.preventDefault()

    const comprimento = prompt ('Digite o comprimento do retângulo')
    console.log(comprimento)

    const largura = prompt('Digite a largura do retângulo')
    console.log(largura)

    const areaRetangulo = comprimento * largura
    console.log(areaRetangulo)

    resultTree.innerHTML = areaRetangulo

})

                                                        //CALCULADORA DA ÁREA DO CÍRCULO

const btnFour = document.querySelector("#enviarFour")

btnFour.addEventListener("click", function(e){

    e.preventDefault()

    const raio = prompt('Digite o raio do círculo:')
    console.log(raio)

    const areaCirculo = Math.PI * raio * raio
    console.log(areaCirculo)

    resultFour.innerHTML = areaCirculo.toFixed(2)
})

                                                        //CALCULADORA DA ÁREA DO CÍRCULO

const btnFive = document.querySelector("#btnFive")

btnFive.addEventListener("click", function(){

    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    const hour = now.getHours()
    const minutes = now.getMinutes()

    const all = `  ${year}-${month}-${date} Horário: ${hour}:${minutes}`


    resultFive.innerHTML = all
})