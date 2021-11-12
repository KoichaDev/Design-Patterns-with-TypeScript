import Address from './Classes/Address';
import User from './Classes/User';

const user = new User('bob', {
    age: 5, 
    phone: '999 222 999',
    address: new Address('222 ', 'London'),
});

console.log(user)