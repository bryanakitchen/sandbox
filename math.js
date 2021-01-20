// if 60 then blah, 
// if 60> then only minutes,
// if 60< then run function. 

function convertTime(num) {
    const number = num;
    const hours = num / 60;
    const roundHours = Math.floor(hours);
    const minutes = (hours - roundHours) * 60;
    const roundMinutes = Math.round(minutes);
    return `${number} minutes = ${roundHours} hours and ${roundMinutes} minutes.`; 
  }
  
console.log(convertTime(59));