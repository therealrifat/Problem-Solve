const defaultSettings = { theme: "light", showSidebar: true };
const userSettings = { theme: "dark" };

// ১. Spread operator ব্যবহার করে `finalSettings` নামে একটি নতুন অবজেক্ট তৈরি করুন যেখানে userSettings-এর মান defaultSettings-কে ওভাররাইড করবে।

let finalSettings = {...defaultSettings, ...userSettings}

console.log(finalSettings)