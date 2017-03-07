(function(){
	var num = 2520;
	var finished = false;

	while (!finished){
		smallestMultiple();
	}

	function smallestMultiple(){
		for (var i = 1; i <= 20; i++){
			if (num % i !== 0) {
				num += 1;
				return false;
			} 
		}
		finished = true;		
	}

	console.log(num);
})();