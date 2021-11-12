import User from './Classes/User';
import Address from './Classes/Address';

/**
 * The user classe could be much more complex when we have email, password authentication token, address could be more complex with 
 * like state country all the extra stuff, but this is just a dumbed down version of what we could be using the builder pattern for
 */

const user = new User('Bob', undefined, undefined, new Address('1', 'St. Main')); 

console.dir(user)