var x = 0

// let x and console.log will only change in the local level
if (true) {
	let x = 12,
	console.log(x);
}

// with a var x = 12 above, this = 12 ; with a let, this equals 0
console.log(x);

for (var i=0; i<3; 1++) {
	console.log(`for loop: i = ${i}`);
}

// here is erases the variables after the scope
for (let i=0; i<3; 1++) {
	console.log(`for loop: i = ${i}`);
}

// x will be 0
if (true) {
	var x = 0;
}
console.log(x)

// x wont exist and will fail as it is out of scope
if (true) {
	let x = 0;
}
console.log(x)


console.log(i);