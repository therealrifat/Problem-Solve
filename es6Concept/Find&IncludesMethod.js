const roles = ["admin", "editor", "viewer"];
const members = [
  { id: 1, name: "Karim", role: "editor" },
  { id: 2, name: "Rina", role: "admin" }
];

// ১. `includes()` দিয়ে চেক করুন "editor" রোলটি `roles` অ্যারেতে আছে কিনা।
// ২. `find()` ব্যবহার করে এমন মেম্বারকে খুঁজুন যার রোল হলো "admin"।


const haveRolesinArray = roles.includes("editor")
console.log(haveRolesinArray);
const haveAdmin = members.find(item=> item.role ==="admin"
)

console.log(haveAdmin);
