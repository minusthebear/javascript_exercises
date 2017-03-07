var numArray = [1, 4, 7, 9, 13, 19, 25, 29, 34, 36, 41, 48, 55, 56, 57, 58, 64, 71, 72, 81, 84, 85, 89, 90, 95, 99];

function binary(arr, target, start, end){
	if (start > end) return -1;

	var middle = Math.floor((start + end) / 2);
	var value = arr[middle];

	if (value > target){
		return binary(arr, target, start, middle - 1);
	} else if (value < target) {
		return binary(arr, target, middle + 1, end);
	} else { return middle; }
}

function initBinary(arr, target){
	return binary(arr, target, 0, arr.length - 1);
}

console.log(initBinary(numArray, 23));