import { parse } from 'iso8601-duration';

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

 function parseDuration(durationStr: string): number {
  let seconds = 0;

  let currentNumber = '';
  let isInTimeSection = false;

  for (let i = 0; i < durationStr.length; i++) {
    const char = durationStr.charAt(i);

    if (char === 'P') {
      console.log("start")
    } else if (char === 'T') {

      isInTimeSection = true;
    
    } else if (char === 'Y') {

      const years = parseInt(currentNumber);
      seconds += years * 365 * 24 * 60 * 60;
      currentNumber = '';

    } else if (char === 'M') {

      if (!isInTimeSection) {

        const months = parseInt(currentNumber);
        
        if (months !== 0) {
          throw new Error('month is present');
        }

      } else {

        const minutes = parseInt(currentNumber);
        seconds += minutes * 60;
      }

      currentNumber = '';
    } else if (char === 'D') {

      const days = parseInt(currentNumber);
      seconds += days * 24 * 60 * 60;
      currentNumber = '';

    } else if (char === 'H') {

      const hours = parseInt(currentNumber);
      seconds += hours * 60 * 60;
      currentNumber = '';

    } else if (char === 'S') {

      console.log(currentNumber)
      const secondsFraction = parseFloat(currentNumber);
      seconds += secondsFraction;
      currentNumber = '';

    } else if (char >= '0' && char <= '9') {

      currentNumber += char;

     } else if (char === '.') {
      
      currentNumber += char;
    
  }
}

  return seconds;
} 




export default parseDuration;






