(function(){
	var num = 600851475143;

	var biggestPrime;

	function isPrime(x){
		var prime = true;

		if (x < 2){return false;}
		if (x != Math.round(x)){return false;}

		for (var j = 2; j <= Math.sqrt(x); j++){
			if (x % j === 0)
				return false;
		}

		return prime;
	}

	for (var i = num; i >= 0; i--) {
		if (isPrime(i)) {
			biggestPrime = i;
			break;
		}
	}

	console.log("The biggest prime number is: " + biggestPrime);
	
})();