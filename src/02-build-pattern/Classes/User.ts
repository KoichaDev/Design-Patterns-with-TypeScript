type UserOpts = Partial<{
	age: number;
	phone: string;
	address: object;
}>;
class User {

	age?: number = 0;
	phone?: string = '123';
	address?: object;

	constructor(public name?: string, { age, phone, address }: UserOpts = {}) {
		this.age = age;
		this.phone = phone;
		this.address = address;
	}
}

export default User;