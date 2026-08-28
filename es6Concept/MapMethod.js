const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

// ১. `map()` ব্যবহার করে একটি নতুন অ্যারে তৈরি করুন যেখানে প্রতিটি পণ্যের দাম ১০% বৃদ্ধি পাবে এবং শুধু নাম ও নতুন দাম থাকবে।
let modifiedData = products.map((item)=>{
  return {id: item.id, name: item.name, price:item.price +10}
})
console.log(products)