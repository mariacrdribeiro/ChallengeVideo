"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Using  iso8601-duration
function parseDuration(durationString: string): number {
  const duration = parse(durationString);
  if (duration.months != 0) {
    throw new Error('month is present.');
  }
  let totalSeconds = 0;
  totalSeconds += duration.years ? duration.years * 31536000 : 0; //if exists multiples if it doenst its zero
  totalSeconds += duration.weeks ? duration.weeks * 604800 : 0;
  totalSeconds += duration.days ? duration.days * 86400 : 0;
  totalSeconds += duration.hours ? duration.hours * 3600 : 0;
  totalSeconds += duration.minutes ? duration.minutes * 60 : 0;
  totalSeconds += duration.seconds ? duration.seconds : 0;

  return totalSeconds;
} */
//new solution
/*  function parseDuration(durationStr: string): number {
  let year = 0;
  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

 const splitParts = durationStr.slice(1).split('T');

  
  if (splitParts[0]) {
    
    const date = splitParts[0].split(/[YMD]/);
    for (let i = 0; i < date.length; i++) {
      const value = parseFloat(date[i]);
   
      if (value) {
        switch (splitParts[0][splitParts[0].indexOf(date[i]) + date[i].length]) {
          case 'Y':
            year = value*60*60*24*365;
            break;
          case 'M':
             throw new Error("month is present");
           
          case 'D':
            day = value*60*60*24;
            break;
        }
      }
    }
  }

    if (splitParts[1]) {
    
    const time = splitParts[1].split(/[HMS]/);
      console.log(time);
    for (let i = 0; i < time.length; i++) {

      const value = parseFloat(time[i]);
      
      console.log(splitParts[1][splitParts[1].indexOf(time[i]) + time[i].length])
      if (value) {
        switch (splitParts[1][splitParts[1].indexOf(time[i]) + time[i].length]) {
          case 'H':
            hour = value*3600;
            break;
          case 'M':
            minute = value*60;
            break;
          case 'S':
            second = value;
            break;
           
        }
      }
    }
  }

  return year+day+hour+minute+second;
}  */
function parseDuration(durationStr) {
    let seconds = 0;
    let currentNumber = '';
    let isInTimeSection = false;
    for (let i = 0; i < durationStr.length; i++) {
        const char = durationStr.charAt(i);
        if (char === 'P') {
            // do nothing
        }
        else if (char === 'T') {
            isInTimeSection = true;
        }
        else if (char === 'Y') {
            const years = parseInt(currentNumber);
            seconds += years * 365 * 24 * 60 * 60;
            currentNumber = '';
        }
        else if (char === 'M') {
            if (!isInTimeSection) {
                const months = parseInt(currentNumber);
                if (months !== 0) {
                    throw new Error('month is present');
                }
            }
            else {
                const minutes = parseInt(currentNumber);
                seconds += minutes * 60;
            }
            currentNumber = '';
        }
        else if (char === 'D') {
            const days = parseInt(currentNumber);
            seconds += days * 24 * 60 * 60;
            currentNumber = '';
        }
        else if (char === 'H') {
            const hours = parseInt(currentNumber);
            seconds += hours * 60 * 60;
            currentNumber = '';
        }
        else if (char === 'S') {
            console.log(currentNumber);
            const secondsFraction = parseFloat(currentNumber);
            seconds += secondsFraction;
            currentNumber = '';
        }
        else if (char >= '0' && char <= '9') {
            currentNumber += char;
        }
        else if (char === '.') {
            currentNumber += char;
        }
    }
    return seconds;
}
exports.default = parseDuration;
//# sourceMappingURL=parseDuration.js.map