class Cigar {
    constructor(brand, label, wrapper, length, gauge, price, country, rating){
        this.brand = brand
        this.label = label
        this.wrapper = wrapper
        this.length = length
        this.gauge = gauge
        this.price = price
        this.country = country
        this.rating = rating
    }
}

let cigarLabels = {
    cohiba: [],
    fuente: [],
    padron: []
}

let macasar = new Cigar("Cohiba","Macasar","Maduro", 6.5, 50, 18, "Dominican Republic", 7.9)
let red = new Cigar("Cohiba", "Red", "Habano", 6, 52, 12, "Dominican Republic", 6.8)
let royale = new Cigar("Cohiba", "Royale", "Connecticut", 7, 55, 25, "Dominican Republic", 8.9)
cigarLabels.cohiba.push(macasar)
cigarLabels.cohiba.push(red)
cigarLabels.cohiba.push(royale)

let opusx = new Cigar("Arturo Fuente", "Opus X", "Cameroon", 7, 50, 25, "Dominican Republic", 9.5)
let donCarlos = new Cigar("Arturo Fuente", "Don Carlos", "Cameroon", 6, 45, 15, "Dominican Republic", 9.0)
let purpleRain = new Cigar("Arturo Fuente", "Opus X Purple Rain", "Maduro", 7, 45, 40, "Dominican Republic", 9.9)
cigarLabels.fuente.push(opusx)
cigarLabels.fuente.push(donCarlos)
cigarLabels.fuente.push(purpleRain)

let damaso = new Cigar("Padron", "Damaso", "Connecticut", 7.5, 52, 17, "Dominican Republic", 9.3)
let aniversario1964 = new Cigar("Padron", "Aniversario 1964", "Maduro", 7, 50, 24, "Dominican Republic", 9.8)
let serie1926 = new Cigar("Padron", "Serie 1926", "Maduro", 52, 45, 30, "Dominican Republic", 9.9)
cigarLabels.padron.push(damaso)
cigarLabels.padron.push(aniversario1964)
cigarLabels.padron.push(serie1926)

let brandSelect = document.querySelector("#brand")
brandSelect.addEventListener("change", showLabelSelect)

let labelDisplayDiv = document.querySelector("#label-display")

function showLabelSelect(event){
    descriptionDisplayDiv.innerHTML = ""
    let selectedBrand = brandSelect.value
    createSelect(selectedBrand, cigarLabels[selectedBrand])
}

function createSelect(name, cigarLabels){
    labelDisplayDiv.innerHTML=''
    let labelElement = document.createElement('label')
    labelElement.innerHTML = "Select Label: "
    labelDisplayDiv.appendChild(labelElement)
    let  brandSelect = document.createElement("select")
     brandSelect.addEventListener("change", showDescription)
     brandSelect.id = name
    cigarLabels.forEach(cigarLabel=>{
        let option = document.createElement("option")
        option.value = cigarLabel.label
        option.innerHTML = cigarLabel.label
        brandSelect.appendChild(option)
    })
    labelDisplayDiv.appendChild(brandSelect)
}

let descriptionDisplayDiv = document.querySelector("#description-display")

function showDescription(event){
    // console.log(cigarLabels[event.target.id])
    let matching = cigarLabels[event.target.id].find(cigar => cigar.label == event.target.value)
    // console.log(matching)
    descriptionDisplayDiv.innerHTML = `Wrapper: ${matching.wrapper}<br>Length: ${matching.length}<br>Gauge: ${matching.gauge}<br>Price: ${matching.price}<br>Country: ${matching.country}<br>Rating: ${matching.rating}`
}


// Wrapper: 
// Length:
// Gauge:
// Price:
// Country:
// Rating: