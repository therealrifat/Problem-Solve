
// টাস্ক: একটি বাক্যের প্রতিটা শব্দের প্রথম অক্ষরকে Capital (Uppercase) বানাতে হবে।

// ব্রেকডাউন:


const titleCase =(strValue)=>{
    const toArray = strValue.split(' ')
    let sentence = ""
    for(let i = 0; i < toArray.length; i ++){
        let emptyStirng = ""
        let firstLetter = toArray[i][0].toUpperCase()
        emptyStirng+= firstLetter
        let wordLastPart = toArray[i].split('').slice(1).join('');
        let capitalLetter =emptyStirng+= wordLastPart
        sentence += capitalLetter+ " "
        
    }
    return sentence
    
}

console.log(titleCase("i am learning javascript"));




//refactor code l


// const titleCase = (strValue) => {
//   return strValue
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// };

// console.log(titleCase("i am learning javascript"));
// // Output: "I Am Learning Javascript"