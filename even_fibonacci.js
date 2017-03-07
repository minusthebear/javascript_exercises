(function(){
	var x = 1, y = 1, exceedsFourMillion = false, finalArray = [], finalSum, arr = [1];

	while (!exceedsFourMillion){
		var z;
		x = x+y;
		arr.push(x);
		
		if (x%2===0){
			finalArray.push(x);
		}

		var sum = arr.reduce(function(a, b){
			return a + b;
		});

		sum > 4000000 ? (
			finalSum = finalArray.reduce(function(a, b){
				return a + b;
			}),
			exceedsFourMillion = true
		) : (
			// Sets x to be the smaller integer.
			z = x,
			x = y,
			y = z
		);
	}

	console.log(finalSum);

})();