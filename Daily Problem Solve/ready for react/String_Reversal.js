// টাস্ক: একটি শব্দ বা বাক্যকে উল্টে (Reverse) দিতে হবে।
// ব্রেকডাউন:

// ইনপুট:
// reverseString("javascript");

// আউটপুট:
// "tpircsavaj"


function reverseString(string) {
  let reverseItem = string.split('').reverse().join('')
  return reverseItem
}


console.log(reverseString('javascript'))