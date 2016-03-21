'use strict';

class myFirstEs6Class {
	constructor() {
		this.myConst = "bla bla";	
	}	

	test() {
		console.log(this.myConst);	
	}
}

let myObject = new myFirstEs6Class();
myObject.test();