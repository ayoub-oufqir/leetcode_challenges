// Date: 25/12/2022
// problem: two-sum
// Difficulty: Easy

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    let len = nums.length;
    for(let i=0; i<len ;i++){
        for(let j=0; j<len; j++){
            if (i!=j && nums[i]+nums[j] === target){
                return [i, j]
            }
        }
    }
};