import parseDuration from './parseDuration';

const durationString = 'PT1H30M30S';

const durationInSeconds = parseDuration(durationString);

console.log(durationInSeconds);

/* 
M = value * 60
H = value * 3600

Examples :

PT30S = 30 s
PT2M30S: 150 s
PT1H30M30S: 5430 seconds  

*/