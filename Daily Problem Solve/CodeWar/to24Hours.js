function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
  let type = period === 'am' ? 12 : 23
  let identifyDigit = String(hour).split('').length
  console.log(identifyDigit)
  if(hour <= type && minute <= 59 && (period =='am' || 'pm') ){
    
    if (period==='pm') {
      // let cnv = hour + 12 

      
      return `${cnv}:${minute == 0 ? '00':minute}`
    } else {
      return `${hour }:${minute == 0 ? '00':minute}`
    }
    
    
    return
  }
  
  
  return "0000";
}

console.log(to24hourtime(12,0,'am'))