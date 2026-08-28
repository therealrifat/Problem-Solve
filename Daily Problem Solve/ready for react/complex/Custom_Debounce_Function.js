// ১০. Custom Debounce Function
// টাস্ক: একটি Higher-Order Function বানাতে হবে, যা একটি নির্দিষ্ট সময় (Delay) পার হওয়ার পর মূল ফাংশনটিকে এক্সিকিউট করবে। এর মাঝে নতুন কোনো কল আসলে আগেরটি ক্যানসেল হয়ে টাইমার আবার শুরু হবে।


// // ব্যবহার:
// const handleSearch = debounce(() => {
//   console.log("Fetching API data...");
// }, 500);

// // ব্যবহারকারী দ্রুত টাইপ করলে বারবার কল হবে না, টাইপ থামানোর ৫০০ms পর রান হবে:
// handleSearch();
// handleSearch();
// handleSearch(); // শুধু এই শেষেরটি ৫০০ms পর এক্সিকিউট হবে!