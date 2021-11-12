import UserBuilder from './Classes/UserBuilder';

const user = new UserBuilder('Bob').setAge(19).setAddress("ajjajaja").build()
console.dir(user)