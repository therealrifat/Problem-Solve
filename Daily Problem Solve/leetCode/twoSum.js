


var twoSum = function(nums, target) {
    let arr = []
    for(let f = 0; f < nums.length; f++){
       if (nums[f] + nums[f+1]==target) {
         arr.push(f)
         arr.push(f+1)
         } 
    }
    
    
    // console.log(arr)
    return arr
};

console.log(twoSum([3,2,3], 6)) //0,2
console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3,3], 6)) //0,1
console.log(twoSum([-1,-2,-3,-4,-5], -8))//2,4
console.log(twoSum([3,2,3],6))//0,2





// var twoSum = function(nums, target) {
//     let arr = []
//     for(let f = 0; f < nums.length-1; f+1){
       
//         for(let i = 1; i < nums.length; i++){
           
//             if (nums[f]+ nums[i]==target) {
                
//                 arr.push(f)
//                 arr.push(i)
//             }
//         }
//     }
//     // console.log(arr)
//     return arr
// };