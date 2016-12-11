function greet (name = 'Michael') {
	console.log('Hello ' + name + '!');
	console.log(`Hello ${name}`);
}

greet();
greet('Jane');

console.log(`1+6 = ${1 + 6}`)

console.log(`Hey,

	This kindof looks like an email!

- Michael
`);

var person = {
	name: 'Michael',
	age: 25
};

var defaultPerson = {
	name: 'Anonymous',
	age:0
};

// function name anonymous and age is 0
function welcomePerson (person = defaultPerson) {
	console.log(`Hello ${person.name}. You are ${person.age}.`);
}

welcomePerson();
welcomePerson(person);




