const users = [
  { name: "Ayan", active: true, age: 22 },
  { name: "Bela", active: false, age: 17 },
  { name: "Choyon", active: true, age: 19 }
];

// ১. `filter()` ব্যবহার করে শুধু সেসব ব্যবহারকারীদের নাম ও বয়সের অ্যারে তৈরি করুন যারা এক্টিভ (active: true) এবং যাদের বয়স ১৮ বা তার বেশি।


const filterUser = users.filter((item)=>{
     return item.active === true && item.age > 18
    
} )

console.log(filterUser);




// clean code 


/*
const users = [
  { name: "Ayan", active: true, age: 22 },
  { name: "Bela", active: false, age: 17 },
  { name: "Choyon", active: true, age: 19 }
];

// ১. filter() দিয়ে শর্ত অনুযায়ী ফিল্টার করা
// ২. map() দিয়ে শুধু name এবং age বের করে নেওয়া
const activeAdults = users
  .filter(user => user.active && user.age >= 18)
  .map(({ name, age }) => ({ name, age }));

console.log(activeAdults);
// Output: [ { name: 'Ayan', age: 22 }, { name: 'Choyon', age: 19 } ]

*/