const countriesAZ = sortCountriesAZ()
const countriesZA = sortCountriesZA()

const arrowUp = '<i class="fa-solid fa-arrow-up-a-z"></i>'
const arrowDown = '<i class="fa-solid fa-arrow-down-a-z"></i>'

const startingB = document.querySelector("#StartingW")
const ContainsB = document.querySelector("#ContainsW")
const directionB = document.querySelector("#directionB")
const buttonDef = document.querySelectorAll(".BTN")

const countryCardTemplate = document.querySelector("[data-country-template]")
const searchI = document.querySelector("#search-Country")
const countryDiv = document.querySelector(".countries-cards")
const countries_number = document.querySelector("#countries-number")
const countryRes = document.querySelector(".feed")


DisplayCountriesAZ()
countries_number.textContent+=countries.length
directionB.addEventListener("click",()=>{
    
    if(directionB.dataset.direction==="AZ"){

        
        directionB.innerHTML = arrowDown
        directionB.dataset.direction="ZA"
        DisplayCountriesAZ()
    }
    else if(directionB.dataset.direction==="ZA"){
        directionB.innerHTML = arrowUp
        directionB.dataset.direction="AZ"
        DisplayCountriesZA()
    }

})
startingB.addEventListener("click",()=>{
    BtnSwitcher(startingB)
})
ContainsB.addEventListener("click",()=>{
    BtnSwitcher(ContainsB)
})
searchI.addEventListener("input",(e)=>{
    const cards = document.querySelectorAll(".card")
   if(searchI.dataset.search==="starts"){
    const inputS = e.target.value.toLowerCase()
    if(inputS.length!=0){
        let numberOf =0;
       for(const country of cards){
        const countryName = country.querySelector('.countryN').textContent.toLowerCase()
        const selectedText = countryName.slice(0,inputS.length)
        const isVisible = inputS == selectedText
        country.classList.toggle("hide",!isVisible)

        if(isVisible){
            numberOf++
        }
       
       }

       countryRes.innerHTML="Countries starting with "
       const wordSpan = document.createElement("span")
       wordSpan.textContent=e.target.value
       wordSpan.style="font-style:italic;color:red"
       countryRes.append(wordSpan)

       countryRes.innerHTML+=" are "

       const numbSpan = document.createElement("span")
       numbSpan.style="font-style:italic;color:green"
       numbSpan.textContent=numberOf+""
       countryRes.append(numbSpan)
    }
    else{
        countryRes.innerHTML=""
        DisplayCountriesAZ()
    }
       //work to be done
   }

   else if(searchI.dataset.search==="contains"){
    const inputS = e.target.value.toLowerCase()
    if(inputS.length!=0){
        let numberOf=0
    for(const country of cards){
        
        const countryName = country.querySelector('.countryN').textContent.toLowerCase()
        const isVisible = countryName.includes(inputS)
        country.classList.toggle("hide",!isVisible)
        if(isVisible){
            numberOf++
        }
    }

    countryRes.innerHTML=`Countries containing `
    
    const wordSpan = document.createElement("span")
    wordSpan.textContent=e.target.value
    wordSpan.style="font-style:italic;color:red"
    
    countryRes.append(wordSpan)

    countryRes.innerHTML+=" are "

    const numbSpan = document.createElement("span")
    numbSpan.style="font-style:italic;color:green"
    numbSpan.textContent=numberOf+""
    countryRes.append(numbSpan)
    }
    else {
        countryRes.innerHTML=""
        DisplayCountriesAZ()
    }
   }

})
// const startingB = document.querySelector("#StartingW")
// const ContainsB = document.querySelector("#ContainsW")
// const directionB = document.querySelector("#directionB")
// function StartsW(){
//     //work to be done about data-active\
//     startingB.dataset.active=false
//     sta
//     searchI.dataset.search="starts"
   
// }
// function ContainsW(){
// //work to be done about data-active
// searchI.dataset.search="contains"

// }

function BtnSwitcher(button){
    if(button.dataset.active=="false"){
    if(button.dataset.type=="start"){
            button.dataset.active=true;
        button.classList.toggle("Btn-active",true)
        searchI.dataset.search="starts"
        //UndoSwitch(ContainsB)
       
    }
    else if(button.dataset.type=="contain"){
        button.dataset.active=true;
        button.classList.toggle("Btn-active",true)
        searchI.dataset.search="contains"
       // UndoSwitch(startingB)
    }
}
else{
    button.dataset.active=false;
    button.classList.toggle("Btn-active",false)
    searchI.dataset.search=""
}
}
function UndoSwitch(button){
    button.dataset.active=false
    button.classList.toggle("Btn-active",false)
    searchI.dataset.search=""
}



function DisplayCountriesAZ(){
    countryDiv.innerHTML=""
    for(const country of countriesAZ){
        const card = countryCardTemplate.content.cloneNode(true).children[0]
        card.classList.add("card")
        const countryName  = card.querySelector('.countryN')
        countryName.textContent = country
        countryDiv.append(card)
      
    }
    
}

function DisplayCountriesZA(){
    countryDiv.innerHTML=""
    
    for(const country of countriesZA){
        const card = countryCardTemplate.content.cloneNode(true).children[0]
        card.classList.add("card")
        const countryName = card.querySelector('.countryN')
        countryName.textContent=country
        countryDiv.append(card)
        
    }
   
}


function sortCountriesAZ(){
    const toBeSorted = countries.slice()
    const res = toBeSorted.sort((a,b)=>{
        if(a>b)
            return 1
        if(b>a)
        return -1
    return 0
        
    })
    return res
}
function sortCountriesZA(){
    const toBeSorted = countries.slice()
    const res = toBeSorted.sort((a,b)=>{
        if(a>b)
            return -1
        if(b>a)
        return 1
    return 0
        
    })
    return res
}
