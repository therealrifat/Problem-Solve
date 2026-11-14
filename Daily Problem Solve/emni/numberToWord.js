let display = document.getElementById('rhymes')

const coreNumber = {
  1: 'এক',
  2: 'দুই',
  3: 'তিন',
  4: 'চার',
  5: 'পাঁচ',
  6: 'ছয়',
  7: 'সাত',
  8: 'আট',
  9: 'নয়'
};

function numberToWord(num) {
  let number= num.toLocaleString('bn-BD');
  let spart = number.split('')
  let EnSprt = String(num).split('')
  let firstDg = Number(EnSprt[0])
  let SecondDg = Number(EnSprt[1])

  if(SecondDg===0){
      return display.innerText = `${coreNumber[firstDg]} দশে ${number}`
  } 

 return display.innerText =`${coreNumber[firstDg]} দশ ${coreNumber[SecondDg]} ${number}`
}

(numberToWord(50))