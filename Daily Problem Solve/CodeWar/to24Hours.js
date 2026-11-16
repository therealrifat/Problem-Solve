function to24hourtime(hour, minute, period) {
  let type = period === 'am' ? 12 : 23
  let digit = String(hour).split('').length

  if(hour <= type && minute <= 59 && (period =='am' || 'pm') ){
    
    if (period==='pm') {
      let cnv = hour +  (hour === 12 ? (0) :(12) )

      return `${cnv <= 9 ? ("0"+String(cnv)):(cnv===24 ?("00"):(String(cnv)))}${minute <= 9 ? ("0"+ String(minute)) :minute}`
    } else {
      return `${hour <= 9 ? ("0"+String(hour)):(hour ===12 ? ("00"):String(hour))}${minute <= 9 ? ("0"+ String(minute)) :minute}`
    }
    return
  }

  return "0000";
}

console.log(to24hourtime(1,0,'pm'))