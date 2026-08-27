// Palindrome Checker

// টাস্ক: একটি শব্দ বা বাক্য উল্টো করে পড়লেও সোজা পড়ার মতো একই থাকে কি না, তা চেক করে true বা false রিটার্ন করতে হবে। (যেমন: "racecar" উল্টে দিলেও "racecar" থাকে, তাই এটি true)।



const isPalindrome =(word)=>{
    let reverseWord = word.split("").reverse().join("")
    return word === reverseWord ? true: false
}


console.log(isPalindrome("tenet"));
