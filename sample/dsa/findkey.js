//-----------------------Searching for an element-----------------------------

function findKey(nums, key) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      return "found";
    }
  }
  return "not found";

  // for (value of nums) {
  //   if (value === key) {
  //     return key;
  //   }
  // }
  // return "not found";
}

nums = [2, 4, 5, 1, 7, 9];
let key = 8;
console.log(findKey(nums, key));
