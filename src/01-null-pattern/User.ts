export class User {
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


export class NullUser {
	id: number;
	name: string;

	constructor() {
		this.id = -1;
		this.name = 'Guest';
	}

	hasAcces() {
		return false;
	}
}
