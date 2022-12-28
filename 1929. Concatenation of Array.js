// Date: 28/12/2022
// problem: Concatenation of Array
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums, ...nums]
};