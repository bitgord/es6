var people = ['Michael', 'James', 'Juny', 'John'];

people.forEach(function (name) {
	console.log(name);
});

people.forEach((name) => console.log(name));

people.forEach((name) => {
	console.log('Welcome');
	console.log(name);
});

var add = (a, b) => a + b;
var add = (a, b) => { return a + b; }

console.log(add(3, 9));

var person = {
	name: 'Michael',
	likes: ['Programming', 'music', 'fun'],
	generateGreeter: function () {
		var that = this;

		return function () {
			console.log(that.name);
		}
	}
};

person.generateGreeter()();

var person = {
	name: 'Michael',
	likes: ['Programming', 'music', 'fun'],
	generateGreeter: function () {
		return () => {
			console.log(this.name);
		}
	},
	printLikes: function () {
		this.likes.forEach ((like) => {
			console.log(`${this.name} likes ${like}`);
		}); 
	}
};

person.printLikes();


