

for(var i = 0; i < 10; i++){
    console.log(i);
}

function mult(a, b) {
    return a * b;
}

console.log(mult(2, 2));

function sum(a, b) {
	if (b != undefined) {
	return a + b;
	} else {
		var currentSum = a;
		function sum(b) {
		    currentSum += b;
		    return sum;
		    }
		sum.toString = function() {
		return currentSum;
		};
		return sum;
	}
}

console.log(sum(2, 3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
console.log(sum(2)(3)(5));  // Outputs 10

function dev(a){
    return function dev(b){
        return a / b;
    }
}

console.log(dev(4)(2));