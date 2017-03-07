function createPackage(small, big, goal){
	var b = parseInt(big) * 5;

	var totalSmall = parseInt(goal) - b;

	if (totalSmall <= 0){
		return -1;
	} else if(parseInt(small) > totalSmall){
		return totalSmall;
	} else {
		return small;
	}
}

console.log(createPackage(5, 5, 24));