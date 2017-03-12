
describe("Calculator", function() {
	var calc;
	var OutputId = "#calc-fixture";

	beforeEach(function(){
		$("body").append($("#template-wrapper").html().replace("-template", ""));
		calc = new Calculator($(OutputId));

		// this.addMatchers({
		// 	toBeBetween: function(a, b){
		// 		return this.actual >= a && this.actual <= b;
		// 	}
		// });
	});

	afterEach(function(){
		$(OutputId).remove();
	});

	it('should be able to add 1 and 1', function(){
		calc.add(1,1);
		expect($(OutputId).text()).toBe('2');
		// expect(calc.add(1,1)).toBe(2);
	});

	// it('should be able to divide 6 and 2', function(){
	// 	expect(calc.divide(6,2)).toBe(3);
	// });

	// it('should be able to divide a rational number', function(){
	// 	expect(calc.divide(1,3)).toBeBetween(0.33333333, 0.33333334);
	// });
});

