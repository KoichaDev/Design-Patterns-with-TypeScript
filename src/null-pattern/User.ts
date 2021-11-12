class User {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	hasAcces() {
		return this.name === 'Bob';
	}
}

export default User;