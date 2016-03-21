'use strict';

class myFirstEs6Class {
	constructor() {
		this.myConst = "bla bla123";	
	}	

	test() {
		console.log(this.myConst);	
	}
}

let myObject = new myFirstEs6Class();
myObject.test();