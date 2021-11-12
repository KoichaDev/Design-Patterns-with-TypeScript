import User from './User';

interface userInterface {
	age?: number;
	phone?: string;
	address?: string;
}

class UserBuilder {
	user: userInterface = {};

	constructor(name: string) {
		this.user = new User(name);
	}

	setAge(age: number) {
		this.user.age = age;
		//  This will returning the builder back. This allow us to chain these methods together
		return this;
	}

	setPhone(phone: string) {
		this.user.phone = phone;
		return this;
	}

	setAddress(address: string) {
		this.user.address = address;
		return this;
	}

	build() {
		return this.user;
	}
}

export default UserBuilder;
