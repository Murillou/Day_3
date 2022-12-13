
const btn = document.querySelector("#button")

btn.addEventListener("click", function(e){

    e.preventDefault()
    
    let now = new Date()
    let year = now.getFullYear()

    let month = now.getMonth()
    let day = now.getDate()

    let minutes = now.getMinutes()
        if (minutes < 10) { 
                minutes = '0' + minutes.toString()
            }else{minutes}
        
    let hours = now.getHours()
       if (hours < 10) { 
            hours = '0' + hours.toString()
        } else{ 
            hours
        }
    
    const full = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes
        resultado.innerHTML = full
})
