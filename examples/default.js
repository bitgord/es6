

function sayHello (name = 'world') {
	console.log('Hello ' + name + '!');
}

sayHello();
sayHello('string');

function greetUser (user = {name: 'Anonymous'}) {
	console.log('Hello ' + user.name);
}

greetUser();
greetUser({name: 'John'});