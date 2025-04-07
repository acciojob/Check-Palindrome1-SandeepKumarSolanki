// complete the given function

function palindrome(str){
	let newStr = str.split(' ')join('');

	let left = 0;
	let right = newStr.length-1;

	while(left < right){
		if(newStr[left] != newStr[right]){
			return false;
		}
		left++;
		right--;
	}
	return true;
}
module.exports = palindrome
