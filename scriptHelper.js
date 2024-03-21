// Write your helper functions here!

//require('cross-fetch/polyfill');



//This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo(). 
//addDestinationInfo() does not need to return anything. 
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    // Here is the HTML formatting for our mission target div.

let data =    "<h2>Mission Destination</h2>" +
              "  <ol>" +
                     `<li>Name: ${name}</li>` +
                     `<li>Diameter: ${diameter} </li>` +
                     `<li>Star: ${star}</li>` +
                     `<li>Distance from Earth: ${distance} </li>` +
                     `<li>Number of Moons: ${moons} </li>` +
                 `</ol>` +
                 `<img src="${imageUrl}">`
    
    let div = document.getElementById("missionTarget");
    div.innerHTML = data;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"; 
    }
    if (!isNaN(testInput)) {
        return "Is a Number";
    }
    return "Not a Number";
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) !== "Not a Number") {
        alert("invalid pilot name") 
    }
    if (validateInput(copilot) !== "Not a Number") {
        alert("invalid copilot name") 
    }
    if (validateInput(fuelLevel) === "Not a Number") {
        alert("invalid fuel level")
    }
    if (validateInput(cargoLevel) === "Not a Number") {
        alert("invalid cargo level") 
    }
    // set pilot status
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    
    // set co pilot name
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // IF useer submits a fuel level thats too low change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey.
    // text of h2 element launchstatus - change to "Shuttle not r4eady for launch" & change color to red.

    let fuelOK = true;
    let cargoOK = true;

    let fuelStatus = "Fuel level high enough for launch";
    let cargoStatus = "Cargo mass low enough for launch";

    if (fuelLevel < 10000) {
        fuelOK = false;
        fuelStatus = "Fuel level too low for launch";
    }
    document.getElementById("fuelStatus").innerHTML = fuelStatus;

    // if submits cargo mass too large (more than 10,000 liters) change list to visible w updated status "too much mass for shuttle take off" 
    // & Launchstatus changes to "Shuttle not ready for launch" & color change to red
    if (cargoLevel > 10000) {
        cargoOK = false;
        cargoStatus = "Cargo mass too heavy for launch";
    }
    document.getElementById("cargoStatus").innerHTML = cargoStatus;

    //if shuttle is ready, change launchstatus to green & display "Shuttle is ready for launch"
    if (cargoOK && fuelOK) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
    } else {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    }
}
 // add URL and return response.json()
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    //use math.random to return on planet from list w randonly selected index
    return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;