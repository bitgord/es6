var myMap = new Map();

// Set
myMap.set('name', 'Michael');

// Get
console.log(myMap.get('name'));

// Has
myMap.set('age', 25);
console.log(myMap.has('age'));

// Delete
myMap.delete('name');

// Clear
myMap.clear();
console.log(myMap.size);

var user = {name: 'Mike'};
myMap.set(user, 'Toronto');
console.log(myMap.get(user));

var myMap = new Map();

myMap.set(1, 'Mike');
myMap.set(2, 'James');
myMap.set(3, 'John');

console.log([...myMap])
console.log(myMap.keys())
console.log(myMap.values())

var location = {name: 'Toronto'};
var secondLocation = {name: 'Montreal'};
var weather = new Map();

function setWeather (location, temp) {
	weather.set(location, temp);
}

function printWeather (location) {
	// if there is weather print message, if no weather tell them no weather is recorded
	if (weather.has(location)) {
		console.log(`It's ${weather.get(location)} in ${location.name}`);
	} else {
		console.log(`No weather recorded for ${location.name}`);
	}
}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);

