(function(){
	var NS = {}; 

	NS.myFunction = {
		stuff: [],
		init: function init(){
			this.stuff.push('Testing');
			console.log(this);
		},
		reset: function reset(){
			this.stuff = [];
		}
	};

	NS.myFunction.init();
})();
