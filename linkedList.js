var linkedList = [
	{1: 15}, {15: 4}, {4: 9}, {9: 14}, {14: 2}
];

var lastArray = [];

function newArray(val, len, num){
	if (num <= len){
		lastArray.push(val);
	} 
}

function checkList(list){
	var len = list.length, num = 1, send;
	for (var prop in list[0]){
		if(list[0].hasOwnProperty(prop)){
			send = list[0][prop];
		}
		newArray(list[0], len, num);
	}
	return findListVals(list, send, len, num, newArray);
}

function findListVals(list, val, len, num, arr){
	if (num > len)
		return { msg: "This is a loop", array: lastArray };
	for (var i = 0; i < len; i++){
		for (var key in list[i]){
			if (val == key){
				num += 1;
				newArray(list[i], len, num);
				return findListVals(list, list[i][key], len, num);
			}
		}
	}
	return { msg: "Not a loop", array: lastArray };
}

console.log(checkList(linkedList));