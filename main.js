//1

var object1 = {
	color: "blue",
	size: "large",
	type: "square",
	toString: function() {
		return "This object is a " + this.size + " " + this.color  + " " + this.type + ".";
	}
}

object1.color = "red";
object1.size = "small";
object1.type = "rectangle";

console.log(object1.toString());

//2

function object2Function(color, size, type) {
	this.color = color;
	this.size = size;
	this.type = type;
}

object2Function.prototype.toString = function() {
	return "This object is a " + this.size + " " + this.color  + " " + this.type + ".";
}

var object2 = new object2Function('red','large','circle');

console.log(object2.toString());

//3


var object3 = (function() {
	var that = this;
	this.color = "blue";
	this.size = "medium";
	this.type = "octagon";
	return {
		color: function() {
			return that.color;
		},
		size: this.size,
		type: this.type,
		toString: function() {
			return "This object is a " + this.size + " " + this.color()  + " " + this.type + ".";
		}
	}
})();

console.log(object3.toString());


//4

var object1Create = {
	color: "yellow"
}

var object2Create = Object.create(object1Create, {
	type: {
		value: "polygon",
		enumerable: true,
		writeable: false
	},

	size: {
		value: "huge",
		enumerable: true,
		writeable: false
	}
});

//size will be undefined
console.log(object1Create.color);
console.log(object1Create.size);


//color will be inherited from object1Create
console.log(object2Create.color);
console.log(object2Create.size);

