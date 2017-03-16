(function(){
	var array1 = [1,2,3,4,5,6];
	var array2 = {a: 1, b: 2};
	var str = "Yo muthaphuka";

	console.log(Object.prototype.toString.call(array1));
	console.log(Object.prototype.toString.call(array2));
	console.log(Object.prototype.toString.call(str));

})();