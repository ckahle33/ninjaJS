
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
	for(var n = 0; n < list.length; n++) {
		callback.call(list[n], n);
		console.log(list[n]);
	}
}

var weapons = ['shuriken', 'katana', 'nunchucks'];

forEach(weapons, function(index){
	console.log(index);
	QUnit.test("forEach test", function( assert){
		assert.ok(this == weapons [index], "Got the expected value of " + weapons [index]);
	});
});


//QUnit Tests

QUnit.test( "hello test", function( assert ) {
	assert.ok(ninja1.result === 15, 'juggled via apply');
	assert.ok(ninja2.result === 33, 'juggled via call');
});

