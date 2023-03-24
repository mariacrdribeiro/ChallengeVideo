import parseDuration from './parseDuration';

const durationString = 'P1Y10DT2H30M';

const durationInSeconds = parseDuration(durationString);

console.log(durationInSeconds);

/* 
M = value * 60
H = value * 3600

Examples :

PT30S = 30 s
PT2M30S: 150 s
PT1H30M30S: 5430 seconds  
P1Y2M10DT2H30M: error month is present
P1Y10DT2H30M: 32409000

*/