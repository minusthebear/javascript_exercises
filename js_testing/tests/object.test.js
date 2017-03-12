describe('myFunction', function(){
	var myFunc = NS.myFunction;

	beforeEach(function(){
		spyOn(myFunc, 'init').andCallThrough();
	});

	afterEach(function(){
		myFunc.reset();
	});

	it("should be able to initialize", function(){
		expect(myFunc.init).toBeDefined();
		myFunc.init();
		expect(myFunc.init).toHaveBeenCalled();
	});

	it("should populate stuff during initialization", function(){
		myFunc.init();
		expect(myFunc.stuff.length).toEqual(1);
		expect(myFunc.stuff[0]).toEqual("Testing");
	});
});