let money = 1000
let droneFacilities = 1
let drones = 5
let activeDrones = drones
var progress = 0

const moneyDiv = document.getElementById("money")
const numOfDroneFacilities = document.getElementById("num-of-drone-facilities")
const numOfDrones = document.getElementById("num-of-drones")
const buyDroneFacilityBtn = document.getElementById("buy-drones-btn")
const requestDiv = document.getElementById("request-div")
const requestDescription = document.getElementById("request-description")
const requestBtn = document.getElementById("request-button")

let requestTime = null

requestBtn.addEventListener('click', () => {
    money += 100
    moneyDiv.innerHTML = money
    requestDiv.classList.add('hidden')
    requestTime = progress
})

buyDroneFacilityBtn.addEventListener('click', () => {
    if (money >= 500) {
        money -= 500
        moneyDiv.innerHTML = money
        droneFacilities += 1
        numOfDroneFacilities.innerHTML = droneFacilities
        drones += 5
        numOfDrones.innerHTML = drones
    }
})

var start = null;
let lastTime = 0
function step(timestamp) {
    // progress equals the number of ms elapsed since the program began
    if (!start) start = timestamp;
    progress = timestamp - start;
    console.log(progress)

    // game loop goes here -------------






    // game runs for 1 minute
    if (progress < 60000) window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);





///////////////////////////
///////// DRONES //////////
///////////////////////////

class Drone {
    constructor() {
        this.active = false
    }
    activate() {
        this.active = true
    }
    deactivate() {
        this.active = false
    }
}

///////////////////////////
////// DRONE FACILITY /////
///////////////////////////

class DroneFacility {
    constructor() {
        this.level = 1
        this.drones = []
        this.droneAmount = 5 * Math.pow(2, this.level - 1)
        this.auto = false
    }
}
