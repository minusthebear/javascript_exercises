module('Asynchronous Tests');

test('expect some asserts', 3, function(){
	ok(true);
	ok(true);
	ok(true);
});

// asyncTest('UI async timing test', function(){
// 	SUT.fadeOutDiv(500, function(){
// 		ok(!$("#div1").is(":visible"));
// 		start();
// 	});
// });

// test('broken async timing test', function(){
// 	stop();
// 	setTimeout(function(){
// 		ok(true);
// 		start();
// 	}, 100);
// });

// test('broken async timing test', function(){
// 	stop(2);
// 	setTimeout(function(){
// 		ok(true);
// 		console.log('longer timeout finished');
// 		start();
// 	}, 2000);
// 	setTimeout(function(){
// 		ok(true);
// 		start();
// 	}, 100);
// });

// asyncTest('broken async timing test', function(){
// 	setTimeout(function(){
// 		ok(true);
// 		start();
// 	}, 100);
// });

// module('Team City tests', {
// 	setup: function(){
// 	},
// 	teardown: function(){
// 	}
// });

// test('Passing Test', function(){
// 	SUT.DoSomething();
// 	strictEqual(1, 1);
// });

// test('Failing Test', function(){
// 	SUT.DoSomething();
// 	strictEqual(2, 1);
// });



// module('DOM tests', {
// 	setup: function(){
// 	},
// 	teardown: function(){
// 	}
// });

// test('CreateTodoItem creates 1 element', function(){
// 	SUT.CreateTodoItem();
// 	strictEqual($(".js-todoContainer").length, 1);
// });



// module('module 1');

// test('my first test', function(){
// 	ok(true);
// });

// module('module 2', {
// 	setup: function(){

// 	},
// 	teardown: function(){

// 	}
// });

// test('my second test', function(){
// 	ok(true);
// });