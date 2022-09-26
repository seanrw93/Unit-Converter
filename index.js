/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputValue = document.getElementById("input-value")
let convertBtn = document.getElementById("convert-btn")

const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")


convertBtn.addEventListener("click", function() {
    convertMetresFeet()
    convertLitresGallons()
    convertKilosPounds()
})

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57))) {
        alert("Please choose a numerical character")
        return false
    } else {
        return true
    }
}

function convertMetresFeet() {
    let baseValue = inputValue.value
    const metreToFeet = baseValue * 3.231
    const feetToMetre = baseValue / 3.231
    lengthOutput.textContent = `${baseValue} meters = ${metreToFeet.toFixed(2)} feet | ${baseValue} feet = ${feetToMetre.toFixed(2)} metres`
}

function convertLitresGallons() {
    let baseValue = inputValue.value
    const LitresToGallons = baseValue / 0.264
    const gallonsToLitres = baseValue * 0.264
    volumeOutput.textContent = `${baseValue} litres = ${LitresToGallons.toFixed(2)} gallons | ${baseValue} gallons = ${gallonsToLitres.toFixed(2)} litres`
}

function convertKilosPounds() {
    let baseValue = inputValue.value
    const kilosToPounds = baseValue * 2.204
    const poundsToKilos = baseValue / 2.204
    massOutput.textContent = `${baseValue} kilograms = ${kilosToPounds.toFixed(2)} pounds | ${baseValue} pounds = ${poundsToKilos.toFixed(2)} kilograms`
}