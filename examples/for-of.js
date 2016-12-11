var locations = [];

locations.push({
	name: 'Toronto',
	weather: 0
});

locations.push({
	name: 'NYC',
	weather: -10
});

for (let location of locations) {
	console.log(`It's ${location.weather} in ${location.name}`);
}

var grades = []

function averageGrade (...grades) {
	var total = 0;

	for (let grade of grades) {
		total += grade;
	}

	return (total / grades.length)
}

var total = averageGrade(1, 44, 99);
console.log(total);





