// Group Array of Objects by Property
// টাস্ক: অবজেক্টের একটি অ্যারেকে নির্দিষ্ট কোনো প্রপার্টি (যেমন: role) অনুযায়ী আলাদা গ্রুপে ভাগ করে একটি নতুন অবজেক্ট বানাতে হবে।

// ব্রেকডাউন:

// ইনপুট:
// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" }
// ];

// groupBy(users, "role");

// আউটপুট:
// {
//   admin: [{ name: "Alice", role: "admin" }, { name: "Charlie", role: "admin" }],
//   user: [{ name: "Bob", role: "user" }]
// }