var _ = require("underscore")

var isPrime = function(number) {
	if (number == 1 || (number != 2 && number % 2 == 0)) {
		return false;
	} else {
		return _.every(_.range(2, number), function(divisor) {
			return number % divisor != 0;
		});
	}
}

var countPrimes = function(rangeLimit) {
	return _.filter(_.range(1, rangeLimit + 1), function(num) {
		return isPrime(num);
	}).length;
}


console.log(countPrimes(process.argv[2] == undefined ? 1000	 : parseInt(process.argv[2])));
