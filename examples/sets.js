var chatRooms = new Set();

// Add
chatRooms.add('Runners');
chatRooms.add('Bikers');
chatRooms.add('Swimmers');

// Size
console.log(chatRooms.size);

// Has
console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// Delete
chatRooms.delete('Bikers');
console.log(chatRooms.size);

// Clear
// chatRooms.clear();
console.log(chatRooms.size);

chatRooms.add({name: 'Michael'});

chatRooms.forEach(function (chatRoom) {
	console.log(`Found chat room: ${chatRoom}`);
});

// To Array
console.log([...chatRooms]);


var movies = new Set();

function addMovie (movieTitle) {
	if(movies.has(movieTitle)) {
		// Error
		console.log(`Error ${movieTitle} already exists`);
	} else {
		// Success
		movies.add(movieTitle);
		console.log(`Success ${movieTitle} was added`);
	}
}

addMovie('A new Movie');
addMovie('Movie 2');
addMovie('A new Movie');






