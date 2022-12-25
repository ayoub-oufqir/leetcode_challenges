/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = x.toString();
    let xStrLen = xStr.length;
    if(xStrLen === 1 || xStrLen===2 && xStr[0] === xStr[1]) return true
    if(xStrLen%2 === 1 && xStr.slice(0,parseInt(xStrLen/2))=== xStr.slice(parseInt(xStrLen/2)+1, xStrLen+1).split("").reverse().join("")) return true
    if(xStr.slice(0,parseInt(xStrLen/2)) === xStr.slice(parseInt(xStrLen/2), xStrLen+1).split("").reverse().join("")) return true
    else{
        return false
    }

};

console.log(isPalindrome(1001))