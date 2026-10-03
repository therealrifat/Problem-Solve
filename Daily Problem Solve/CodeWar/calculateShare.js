


function calculateShare(amount) {
  if (typeof amount !=='number'||amount < 0) {
    return "Invalid input!"
  }
  const totalShare = 6000
  let perShare = (amount / (totalShare / 100)).toFixed(2)
  
  return { shares: Number(perShare), percentage:`${perShare}%`}
}

console.log(calculateShare(60))