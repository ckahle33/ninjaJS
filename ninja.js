
function juggle() {

	var result = 0;

	for (var n = 0; n < arguments.length; n++) {
		result += arguments[n];
	}

	this.result = result;

}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1,2,3,4,5]);
juggle.call(ninja2, 3,4,5,6,7,8);

console.log(ninja1.result);
console.log(ninja2.result);


function forEach(list, callback) {
	var otherVal = 5;
	var anotherVal = 10;

	for(var n = 0; n < list.length; n++) {
		callback.call(list[n], n, otherVal, anotherVal);
	}
}

var weapons = ['shuriken', 'katana', 'nunchucks'];

forEach(weapons, function(index, secondVal, thirdVal){

	// Value of 'this' within QUnit isn't the one we want. need to figure out a way to test for this properly.

	// QUnit.test("forEach test", function( assert){
	//	console.log(this);
	//	assert.ok(this == weapons [index], "Got the expected value of " + weapons [index]);
	// });
	
	console.log(secondVal, thirdVal);
	

	if (this == weapons[index]) {
		console.log("Got the expected value of " + weapons[index]);
	}
 
});

// Palindrome study

function palindrome(text) {
	if (text.length <= 1) return true;
	if (text.charAt(0) != text.charAt(text.length - 1)) return false;
	return palindrome(text.substr(1, text.length - 2));
}

console.log(palindrome('racecar'));

//recursive function
function chirp(n) {
	return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
}

console.log(chirp(3));

//recursive function as an object property
var ninja = {
	chirp : function(n){
		return n > 1 ? this.chirp(n - 1) + "-chirp" : "chirp";
	}
};

QUnit.test("Check that this ninja can chirp", function(assert){
	assert.ok(ninja.chirp(3) === "chirp-chirp-chirp", "ninja can chirp here");
});

//QUnit Tests

QUnit.test( "hello test", function( assert ) {
	assert.ok(ninja1.result === 15, 'juggled via apply');
	assert.ok(ninja2.result === 33, 'juggled via call');
});

