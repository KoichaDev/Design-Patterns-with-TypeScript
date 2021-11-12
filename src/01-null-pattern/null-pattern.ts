import { NullUser, User } from './User';

const users = [new User(1, 'Bob'), new User(2, 'John')];

function getUserId(id: number) {
	const user = users.find((user) => user.id === id);

	if (user === null || user === undefined) {
		return new NullUser();
	}

	return user;
}

export function printUser(id: number) {
	const user = getUserId(id);

	console.log(`Hello ${user.name}`);
    
	if (user?.hasAcces()) return console.log('You have access');
		console.log('You are not allowed');
}
