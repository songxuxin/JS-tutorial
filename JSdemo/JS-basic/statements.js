// ---------- Statement ----------

// ---------- if ----------
var quantity = 100;
if (quantity > 100) { 
	console.log("quantity is larger than 100");
}
else {
	console.log("quantity is less than 100");
}

var a = 0;
var b = true;
console.log("typeof(a) = " + typeof(a));
console.log("typeof(b) = " + typeof(b));
if (typeof(a)=="undefined" || typeof(b)=="undefined") {
	console.log("Variable a or b is undefined.");
}
else if (!a && b) {
	console.log("a==0; b==true;");
} else {
	console.log("a==" + a + "; b==" + b + ";");
};


// ---------- switch ----------
var i = 10;
switch (i) {
	  case 1: 
			// do something
			console.log("i is 1");
			break;
	  case 'a':
			// do something else
			console.log("i is a");
			break;
	  case 3.14:
			// another code
			console.log("i is 3.14");
			break;
	  default:
			// something completely different
			console.log("i is something else");
}

// ---------- for ----------
var counter;
for (counter=0; counter<10; counter++) {
	  console.log("in the for loop");
	  console.log("counter = " + counter);
}

console.log("for loop is done and counter = " + counter);

// ---------- while ----------
while (counter < 6) {
	  console.log("in the while loop");
	  console.log("counter = " + counter);
	  ++counter;
}
console.log("while loop is done");

// ---------- for-of ----------
let stooges = ['Moe', 'Larry', 'Curly'];

for (let stooge of stooges) {
	console.log(stooge);
}

for (let [index, stooge] of stooges.entries()) {
	console.log(index, stooge);
}
