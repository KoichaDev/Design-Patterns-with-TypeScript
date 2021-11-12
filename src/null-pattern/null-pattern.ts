import User from './User';

const users = [new User(1, 'Bob'), new User(2, 'John')];

function getUserId(id: number) {
	return users.find((user) => user.id === id);
}

export function printUser(id: number) {
	const user = getUserId(id);

	/**
	 * We need to explicitly tell the console.log to print a "Guest" if the user
	 * does not have a name
	 *
	 * This is problematic, since we need to remember to always put
	 * this every time we use the user name.
	 *
	 * It is also bad because if we want to print "Unknown user"
	 * instead, we should need to change every place that we put "Guest"
	 * which will most likely be all over the application
	 */

	let name: string = 'Guest';
    
	if (user != null && user?.name != null) {
		// Add Non-null assertion operator
		// src: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
		name = user?.name!;
	}

	console.log(`Hello ${name}`);

	/**
	 * This will throw an error if we don't first check that the user
	 * object has this function available and isn't null.
	 *
	 * This is a lot of extra code to add in every time we want to
	 * check user access, and could cause bugs that are easy to miss
	 * if we forget to do the null checks
	 *
	 */

    if(user !== null && user?.hasAcces !== null && user?.hasAcces()) {
        console.log('You have access')
    } else {
        console.log('You are not allowed')
    }
}
