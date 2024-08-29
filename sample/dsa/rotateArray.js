//----------------------------------Rotate array by k---------------------

function rotate(nums, k) {
  let temp = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    // temp[i] = nums[(i + k) % n]; // Right Rotation
    temp[i] = nums[(i - k + n) % n]; // Left Rotation
  }
  return temp;
}

nums = [2, 4, 5, 1, 7, 9];
let k = 2;
console.log(rotate(nums, k));
