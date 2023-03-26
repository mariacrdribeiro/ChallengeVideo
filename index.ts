import parseDuration from './parseDuration';

const durationString = 'PT1H30M30S';

const durationInSeconds = parseDuration(durationString);

console.log(durationInSeconds);

/* 

Examples :

PT30S = 30 s
PT2M30S: 150 s
PT1H30M30S: 5430 seconds  
PT1H30M30.1S: 5430.1 seconds  
P1Y2M10DT2H30M: error month is present
P1Y10DT2H30M: 32409000

*/