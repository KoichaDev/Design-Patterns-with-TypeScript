class Address {
	zip?: string;
	street?: string;

	constructor(zip?: string, street?: string) {
		this.zip = zip;
		this.street = street;
	}
}

export default Address;
