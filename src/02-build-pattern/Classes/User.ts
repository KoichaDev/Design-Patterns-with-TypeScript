class User {
	name?: string;
	age?: number;
	phone?: string | number;
	address?: object;

	// This construction is optional, since the user doesn't really need to add those age, phone number, etc.
	constructor(name?: string, age?: number, phone?: string | number, address?: object) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.address = address;
	}
}

export default User;
