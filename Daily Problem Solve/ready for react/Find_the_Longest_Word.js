// টাস্ক: একটি বাক্যের ভেতর সবচেয়ে বড় দৈর্ঘ্য বা সাইজের শব্দ কোনটি, তা বের করতে হবে।

// ব্রেকডাউন:

const findLongestWord = (sentence)=>{
    let senteceToArray = sentence.split(" ")
    let largesWord =""

    for(let item of senteceToArray){
        if(largesWord.length <= item.length){
            largesWord = item
        }
        
    }
    return largesWord
    
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));



//refactor and clean code 




// const findLongestWord = (sentence) => {
//   return sentence.split(" ").reduce((longest, current) => {
//     // বর্তমান শব্দটির দৈর্ঘ্য আগেরটির চেয়ে বেশি হলেই কেবল আপডেট হবে
//     return current.length > longest.length ? current : longest;
//   }, "");
// };

// console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
// // Output: "quick"
