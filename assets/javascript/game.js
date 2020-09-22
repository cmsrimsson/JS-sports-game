let RESET = document.querySelector("#reset-button");


let team1 = document.querySelector("#teamone-shoot-button");
let team1noshots = document.querySelector("#teamone-numshots");
let team1goals = document.querySelector("#teamone-numgoals");
team1.addEventListener("click", function() {
    console.log("team1 clicked");
    let team1 = Number(team1noshots.innerHTML) +1;
    team1noshots.innerHTML = team1;
    
    if (Math.random() * 100 < 43) {
    let noofgoals = Number(team1goals.innerHTML) +1;
    team1goals.innerHTML = noofgoals;
}
})

let team2 = document.querySelector("#teamtwo-shoot-button");
let team2noshots = document.querySelector("#teamtwo-numshots");
let team2goals = document.querySelector("#teamtwo-numgoals");
team2.addEventListener("click", function() {
    console.log("team2 clicked");
    let team2 = Number(team2noshots.innerHTML) +1;
    team2noshots.innerHTML = team2;

    if (Math.random() * 100 < 40) {
        let noofgoals = Number(team2goals.innerHTML) +1;
        team2goals.innerHTML = noofgoals;
}
})

let gamereset = document.querySelector("#num-resets");
RESET.addEventListener("click", function() {
    console.log("RESET clicked");
    let RESET = Number(gamereset.innerHTML) +1;
    gamereset.innerHTML = RESET;

    if (team1goals >= team2goals) {
        alert("Congrat! Team one is Winner");
    }
    else if (team2goals >= team1goals) {
        alert("congrat! Team Two is Winner");
    }
    else {
        alert("Draw, Try again to Win a game");
    }
    team1goals.innerHTML = 0;
    team1noshots.innerHTML = 0;
    team2goals.innerHTML = 0;
    team2noshots.innerHTML = 0;
})


// document.getElementById("#teamone-numgoals").innerHTML =
// Math.floor(Math.random() * 10);
// let stringCountValue = count.innerHTML;
// let countValue = Number(stringCountValue);

// addEventListener("click", function() {
//     countValue += 1;
//     counter.innerHTML = newCounterValue;
// })



// let (num-resets) = document.querySelector('#num-resets')
// console.log(RESET,innerHTML);

// let newCounterValue = Number(counter.innerHTML) + 1;

// RESET.addEventListener("click", function() {
//     counter.innerHTML = newCounterValue;
// })