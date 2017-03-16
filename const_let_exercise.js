(function(){
	const human = {
		hair: "brown",
		eyes: "blue"
	};

	const dinosaur = {
		name: "T-Rex",
		features: {
			carnivore: true,
			age: "cretaceous"
		}
	};

	let dog = "Labrador";

	console.log("Initial dog value: " + dog + "\n");

	function vanillaChangeDog(){
		dog = "Beagle";
		console.log("Dog value within vanillaChangeDog(): " + dog);
	}

	vanillaChangeDog();
	console.log("Dog value after vanillaChangeDog() executed: " + dog + "\n");

	function changeDogAsParameter(x){
		x = "Doberman";
		console.log("Dog value within changeDogAsParameter(x): " + x);
	}

	changeDogAsParameter(dog);

	console.log("Dog value after changeDogAsParameter(x) executed: " + dog + "\n");

	function anotherLetDog(){
		let dog = "Golden Retriever";
		console.log("Dog value within anotherLetDog(): " + dog);
	}

	anotherLetDog();
	console.log("Dog value after anotherLetDog() executed: " + dog +"\n");

	console.log("Initial human value: hair - " + human.hair + ", eyes - " + human.eyes);
	human.eyes = "hazel";
	console.log("Human value after changing eyes property: hair - " + human.hair + ", eyes - " + human.eyes);
	human["hands"] = "tiny";
	console.log("Human value after adding hands property:  hair - " + human.hair + ", eyes - " + human.eyes + ", hands - " +  human.hands + "\n");
	delete human.eyes;
	console.log("Human properties after deleting eyes property: " + Object.keys(human));

	function changePropertyInFunc(){
		human.hands = "The best";
		console.log("Human value within changePropertyInFunc(): hair - " + human.hair + ", hands - " +  human.hands);
	}

	changePropertyInFunc();

	console.log("Human value after changePropertyInFunc() executed: hair - " + human.hair + ", hands - " +  human.hands + "\n");

	function changeHumanAsParameter(x){
		x["face"] = "ugly";
		x["hair"] = "blond";
		// Note: hair property doesn't change!
		console.log("Human value within changeHumanAsParameter(x): hair - " + human.hair + ", face - " + human.face + ", hands - " +  human.hands);
	}

	changeHumanAsParameter(human);

	console.log("Human value after changeHumanAsParameter(x) executed:  hair - " + human.hair + ", face - " + human.face + ", hands - " +  human.hands);
	console.log("Object keys within human: " + Object.keys(human)  + "\n");

	Object.freeze(human);

	human.hands = "Those of a leper";
	human["legs"] = "long";
	delete human.hair;

	console.log("Object keys within human after using Object.freeze(): " + Object.keys(human));
	console.log("Object values within human after using Object.freeze():  hair - " + human.hair + ", face - " + human.face + ", hands - " +  human.hands + "\n");

	Object.freeze(dinosaur);
	console.log("Object values with dinosaur after Object.freeze():");
	console.log(dinosaur);
	console.log("\n");
	dinosaur.features.age = "Jurassic";
	console.log("Object values with dinosaur after changing age:");
	console.log(dinosaur);

})();