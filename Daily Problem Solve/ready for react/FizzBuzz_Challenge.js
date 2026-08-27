
function fizzBuzz(n) {
  // Tab to edit
  
  for(let i = 1; i <= n; i++ ){
    if (i % 5 === 0 && i % 3 ===0) {
      console.log('fizzBuzz')
    } else if(i % 3 ===0){
      console.log('fizz')
    }else if(i % 5 ===0){
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(100)




//refactor and clean code

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     // শর্তগুলোকে সহজবোধ্য ভ্যারিয়েবলে রাখা
//     const isFizz = i % 3 === 0;
//     const isBuzz = i % 5 === 0;

//     // লজিক অনুযায়ী আউটপুট প্রিন্ট করা
//     if (isFizz && isBuzz) {
//       console.log('FizzBuzz');
//     } else if (isFizz) {
//       console.log('Fizz');
//     } else if (isBuzz) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);
