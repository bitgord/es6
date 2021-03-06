class Person {
	constructor (name) {
		// if the name is a string ? is run if its true : is run if its false
		this.name = typeof name === 'string' ?  name : 'Anonymous';
	}
	set name (val) {
		this._name = Person.capitalizeWord(val);
	}
	get name () {
		return this._name;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name}`);
	}
	static capitalizeWord (word) {
		// capitalize first letter and then add the word starting on place [1]
		return word[0].toUpperCase() + word.slice(1);
	}
}

class Employee extends Person {
	constructor (name, job = 'unemployed') {
		super (name);
		this.job = job
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name} and I am a ${this.job}`);
	}
	callSuperMethod () {
		super.printGreeting();
	}
}

var person1 = new Employee('michael', 'dev');
console.log(person1.name);
person1.printGreeting();
person1.callSuperMethod();

var person2 = new Person();
console.log(person2.name);
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));

var obj = {
	set age (val) {
		this._age = val + 10;
	},
	get age () {
		return this._age;
	}
}

obj.age = 21;
console.log(obj.age);
