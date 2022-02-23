// adult runners over 18
// youth runners under 18
// If anyone is age 18, deny them access!

//If an adult registers early, they register with a number 1000 or above
// Any other receive a number below 1000


// Early adults run at 9:30 am
// Late adults run at 11:00 am
// Youth registrants run at 12:30pm


// CODE STARTS HERE

// Race numbers are assigned randomly

let raceNumber = Math.floor(Math.random() * 1000);
// test
// console.log(raceNumber)

// Did the runner register early?
let registerEarly = true;

// runner age, set with random values from a list
const ageList = [16, 17, 18, 19, 20]
let runnerAge = ageList[Math.floor(Math.random() * ageList.length)];
// test
// console.log(runnerAge)

// flow control, are they an adult and did they register early?
if (registerEarly === true && runnerAge > 18) {
    raceNumber += 1000;
    // test
    // console.log(raceNumber)
}

// regular expressions similar to python?
if (registerEarly === true && runnerAge > 18) {
    console.log(`Your participant number will be #${raceNumber}\nYou will start the race at 9:30am.`);
} else if (registerEarly === false && runnerAge > 18) {
    console.log(`Your participant number will be #${raceNumber}\nYou will start the race at 11:00am.`);
} else if (runnerAge < 18) {
    console.log(`Your participant number will be #${raceNumber}\nYou will start the race at 12:30pm.`);
} else {
    console.log(`We do not accept 18 year old applicants!`)
}




// using switch

// what will define the flow of my switch statement?
let registrant = ""

//conditional statement, made after I created the switch
if (runnerAge > 18 && registerEarly === true) {
    registrant = "early adult";
} else if (runnerAge > 18 && registerEarly === false) {
    registrant = "late adult";
} else if (runnerAge < 18) {
    registrant = "youth";
}

// I made this first which helped me mentally break down my if else.

switch (registrant) {
    case 'early adult':
        raceNumber += 1000;
        console.log(`Your participant number will be #${raceNumber}\nYou will start the race at 9:30am.`);
        break
    case 'late adult':
        console.log(`Your participant number will be #${raceNumber}\nYou will start the race at 11:00am.`);
        break
    case 'youth':
        console.log(`Your participant number will be #${raceNumber}\nYou will start the race at 12:30pm.`);
        break
    default:
        console.log(`We do not accept 18 year old applicants!`)
}
