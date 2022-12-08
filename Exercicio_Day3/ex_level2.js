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

                                                        //CALCULADORA DO PERÍMETRO DO TRIÂNGULO