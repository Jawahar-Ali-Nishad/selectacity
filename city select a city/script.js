const button = document.querySelector("button")
//event listener
button.addEventListener("click",displaystats)
let resultdiv = document.createElement("div")
    resultdiv.id = "result"
    document.getElementById("heading").appendChild(resultdiv)
function displaystats(){
    const input = document.querySelector("#input")
    const city = input.options[input.selectedIndex].value
    // let population = 0, literacyrate = 0, language = "" 
    switch(city){
        case "chennai":
            population = 4646732
            literacyrate = 90.20
            language ="Tamil"
            break
        case "delhi":
            population = 16787941
            literacyrate = 86.20
            language ="Hindi"
            break
        case "mumbai":
            population = 12442373
            literacyrate = 89.73
            language ="Marathi" 
            break
        case "kochi":
            population = 2223345
            literacyrate = 91.78
            language ="Malayalam"
            break       
    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and Literacy rate is ${literacyrate}`
    document.getElementById("result")
    resultdiv.innerHTML = text

}