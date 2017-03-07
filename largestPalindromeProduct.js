(function(){
	var num1 = 100, num2 = 100, largestPalindrome;

	while (num1 < 1000){
		var sum = num1 * num2;
		if (checkIfPalindrome(sum)){
			largestPalindrome = sum;
		}

		num2 !== 999 ? num2 += 1 : (
			num2 = 100,
			num1 += 1
		);
	}

	function checkIfPalindrome(sum){
		var str = sum.toString();
		var revStr = reverseString(str);
		if (revStr === str) 
			return true;
		else
			return false;
	}

	function reverseString(a){
		var s = "";
		for (var i = a.length - 1; i >= 0; i--){
			s += a[i];
		}
		return s;
	}

	console.log(largestPalindrome);
})();