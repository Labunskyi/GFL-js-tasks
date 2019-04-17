function Calculator(a, b){
	
	this.a = a;
	this.b = b;
	
	this.setValA = function(a){
		this.a = a;
	}
	
	this.setValB = function(b){
		this.b = b;
	}
	
	
	this.add = function() {
		return this.a + this.b;
	}
	
	this.sub = function() {
		return this.a - this.b;
	}
	
	this.mul = function() {
		return this.a * this.b;
	}
	
	this.dev = function () {
		return this.a / this.b;
	}
	
	
	this.res = function () {
		var a = this.add(),
		    b = this.sub(),
		    c = this.mul(),
		    d = this.dev(),
		    str = a + " " + b + " " + c + " " + d;
		return str;
	}
}

var calc = new Calculator(2, 2);


calc.setValA(4);
console.log(calc.res());
