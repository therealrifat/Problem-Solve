const user = {
  id: 101,
  info: {
    name: "Rahim",
    skills: ["JS", "React", "Node"]
  }
};

// ১. destructuring ব্যবহার করে `name` এবং দক্ষতার দ্বিতীয় উপাদান (`React`) আলাদা পরিবর্তনশীল (variable) এ বের করুন।


let {info:{name, skills:[, secondSkill]}, } = user
console.log(secondSkill)