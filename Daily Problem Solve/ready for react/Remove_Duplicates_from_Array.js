// টাস্ক: একটি অ্যারেলিস্ট থেকে বারবার আসা উপাদানগুলো বাদ দিয়ে শুধু অনন্য (Unique) উপাদানগুলোর একটি নতুন অ্যারে রিটার্ন করতে হবে।

const removeDuplicates =(arrNum)=>{
    let uniqNumber = []
    for(let i = 0; i < arrNum.length; i++){
        if(!uniqNumber.includes(arrNum[i])){
            uniqNumber.push(arrNum[i])
        }
    }
    return uniqNumber
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);



// refactor code for ai suggest

/*

const removeDuplicates = (arrNum) => {
  return arrNum.filter((item, index) => arrNum.indexOf(item) === index);
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


*/


// way two


// const removeDuplicates = (arrNum) => {
//   // Set ডুপ্লিকেট বাদ দেবে, আর Spread Operator (...) আবার অ্যারে বানিয়ে দেবে
//   return [...new Set(arrNum)];
// };

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]