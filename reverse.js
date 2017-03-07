var string1 = "Hello World";

function reverseString(str){
	return str.split("").reverse().join("");
}

var string2 = reverseString(string1);

console.log(string2);

function loopReverse(str){
	var newString = "";
	for (var i = str.length - 1; i >= 0; i--){
		newString += str[i];
	}
	return newString;
}

var string3 = loopReverse(string2);

console.log(string3);

function oneMore(str){
	if (str === "")
		return "";
	else
		return oneMore(str.substr(1)) + str.charAt(0);
}

var string4 = oneMore(string3);

console.log(string4);