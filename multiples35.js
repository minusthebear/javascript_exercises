(function mult(){
	var i = 1, arr = [];
	while (i < 1000){
		if (i%3==0 || i%5===0){
			arr.push(i);
		}
		i++;
	}

	var sum = arr.reduce(function(a,b){
		return a + b;
	}, 0);

	console.log(sum);
})();