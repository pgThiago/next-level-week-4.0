export class AppError {
	// The long syntax
	// public readonly message: string
	// public readonly statusCode: number
	// constructor(message: string,statusCode = 400) {
	// 	this.message = message
	// 	this.statusCode = statusCode
	// }
	// The short syntax
	constructor(
		public readonly message: string,
		public readonly statusCode = 400
	){}
}