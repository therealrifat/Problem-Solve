১০টি প্রবলেম নিচে সুন্দরভাবে ইনপুট, আউটপুট এবং ব্রেকডাউনসহ দেওয়া হলো:
১. FizzBuzz Challenge
টাস্ক: ১ থেকে N পর্যন্ত লুপ চালিয়ে প্রিন্ট করতে হবে।
 * সংখ্যাটি ৩ দিয়ে ভাগ মিললে "Fizz"
 * ৫ দিয়ে ভাগ মিললে "Buzz"
 * ৩ ও ৫ দুটো দিয়েই ভাগ মিললে "FizzBuzz"
 * কোনোটিই না হলে শুধু সংখ্যাটি আউটপুট আসবে।
ব্রেকডাউন:
// ইনপুট:
fizzBuzz(15);

// আউটপুট:
// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"

২. String Reversal
টাস্ক: একটি শব্দ বা বাক্যকে উল্টে (Reverse) দিতে হবে।
ব্রেকডাউন:
// ইনপুট:
reverseString("javascript");

// আউটপুট:
// "tpircsavaj"

৩. Count Vowels
টাস্ক: একটি টেক্সটের ভেতরে মোট কতটি Vowel (a, e, i, o, u) আছে তা গুনে বের করতে হবে।
ব্রেকডাউন:
// ইনপুট:
countVowels("Hello World");

// আউটপুট:
// 3 (কারণ e, o, o—এই ৩টি Vowel আছে)

৪. Palindrome Checker
টাস্ক: একটি শব্দ উল্টো করে পড়লেও সোজা পড়ার মতো একই থাকে কি না, তা চেক করে true বা false দিতে হবে।
ব্রেকডাউন:
// ইনপুট ১:
isPalindrome("racecar"); // আউটপুট: true

// ইনপুট ২:
isPalindrome("hello");   // আউটপুট: false

৫. Remove Duplicates from Array
টাস্ক: একটি অ্যারেলিস্ট থেকে বারবার আসা উপাদানগুলো বাদ দিয়ে শুধু ইউনিক (Unique) উপাদানগুলো রাখতে হবে।
ব্রেকডাউন:
// ইনপুট:
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// আউটপুট:
// [1, 2, 3, 4, 5]

৬. Title Case a Sentence
টাস্ক: একটি বাক্যের প্রতিটা শব্দের প্রথম অক্ষরকে Capital (Uppercase) বানাতে হবে।
ব্রেকডাউন:
// ইনপুট:
titleCase("i am learning javascript");

// আউটপুট:
// "I Am Learning Javascript"

৭. Find the Longest Word
টাস্ক: একটি বাক্যের ভেতর সবচেয়ে বড় দৈর্ঘ্য বা সাইজের শব্দ কোনটি, তা বের করতে হবে।
ব্রেকডাউন:
// ইনপুট:
findLongestWord("The quick brown fox jumps over the lazy dog");

// আউটপুট:
// "jumps" (কারণ এটির দৈর্ঘ্য ৫ অক্ষর, যা সবচেয়ে বড়)

৮. Flatten a Nested Array
টাস্ক: অ্যারেলের ভেতর অ্যারে (Nested Array) থাকলে সেগুলোকে ভেঙে একটি সিঙ্গেল ফ্ল্যাট অ্যারেইতে রূপান্তর করতে হবে। (বিল্ট-ইন .flat() ব্যবহার করা যাবে না)।
ব্রেকডাউন:
// ইনপুট:
flattenArray([1, [2, [3, 4], 5], 6]);

// আউটপুট:
// [1, 2, 3, 4, 5, 6]

৯. Group Array of Objects by Property
টাস্ক: অবজেক্টের একটি অ্যারেকে নির্দিষ্ট কোনো প্রপার্টি (যেমন: role) অনুযায়ী আলাদা গ্রুপে ভাগ করে একটি নতুন অবজেক্ট বানাতে হবে।
ব্রেকডাউন:
// ইনপুট:
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

groupBy(users, "role");

// আউটপুট:
// {
//   admin: [{ name: "Alice", role: "admin" }, { name: "Charlie", role: "admin" }],
//   user: [{ name: "Bob", role: "user" }]
// }

১০. Custom Debounce Function
টাস্ক: একটি Higher-Order Function বানাতে হবে, যা একটি নির্দিষ্ট সময় (Delay) পার হওয়ার পর মূল ফাংশনটিকে এক্সিকিউট করবে। এর মাঝে নতুন কোনো কল আসলে আগেরটি ক্যানসেল হয়ে টাইমার আবার শুরু হবে।
ব্রেকডাউন:
// ব্যবহার:
const handleSearch = debounce(() => {
  console.log("Fetching API data...");
}, 500);

// ব্যবহারকারী দ্রুত টাইপ করলে বারবার কল হবে না, টাইপ থামানোর ৫০০ms পর রান হবে:
handleSearch();
handleSearch();
handleSearch(); // শুধু এই শেষেরটি ৫০০ms পর এক্সিকিউট হবে!

১ নম্বর প্রবলেম দিয়ে কোড লেখা শুরু করুন। আপনার সলিউশনটি এখানে পোস্ট করলে আমি রিভিউ করে দেব।
