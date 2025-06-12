
export class Car {

	constructor (public name = 'Toyota', public model = 'Auris') {}

	sayNameAndModel(): void {
		console.log(this.name, this.model)
	}
}
