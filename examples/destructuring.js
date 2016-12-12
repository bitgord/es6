var array = ['first', 'second', 'third'];
var [a, , c] = array;

console.log(a, c);

var todo = {
	description: 'code',
	completed: true
};
var {description} = todo;
console.log(description);

var {description: message} = todo;
console.log(message);

var {description: message, completed} = todo;
console.log(message);
console.log(completed);

function getTodoStatus (todo) {
	if (typeof todo.completed === "boolean") {
		console.log(`Todo is ${todo.completed ? '' : 'not '}completed`);
	} else {
		console.log('error');
	}
}

getTodoStatus(todo);

function getTodoStatus ({completed}) {
	if (typeof completed === "boolean") {
		return [`Todo is ${completed ? '' : 'not '}completed`];
	} else {
		return [undefined, {error: 'INVALIED_TODO_ITEM'}];
	}
}

var [res, err] = getTodoStatus(todo);
if (err) {
	console.log(err.error);
} else {
	console.log(res);
}



