function add (a, b) {
	return a + b;
}

// this equalds 5
console.log(add(1,4));

//you cannot add an array the same as above
var numbers = [4, 22];

// this ... command does the same thing
console.log(add(...numbers));

var groupA = [33, 99];
var groupB = [11];
var unified = [0, ...groupA, ...groupB, 100];

// you can also push to array
unified.push(...[55, 33]);

console.log(unified);

function greetUsers (group, ...names) {
	names.forEach(function (name) {
		console.log(`Hello ${name}. You are part of ${group}`);
	});
}

greetUsers('Developers', 'Michael', 'Gary', "Cam");

// adder(3, 5, 7, 1)

function adder (base, ...numbers) {
	numbers.forEach(function (number) {
		console.log(base+number);
	});
}

adder(3, 5, 7, 1);