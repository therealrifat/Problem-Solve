function rooster(weight,rates) {
  const rate = rates/1000
  return weight* rate
}

console.log(rooster(5200, 440))