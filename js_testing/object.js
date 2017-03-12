if (typeof NS === undefined) { NS = {}; }

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

console.log(NS.myFunction.init());

NS.myFunction.init();