// ---------- Data Types ----------
// ----------- String ---------- 
const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.'; 
const imperative = "Don't do that!";
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.'; 
const s = "In JavaScript, use \\ as an escape character in strings.";

console.log(dialog);
console.log(imperative);
console.log(dialog1);
console.log(dialog2);
console.log(s);

// ---------- Number ----------
let 	count = 10; 		// integer literal; count is still a double
const 	blue = 0x0000ff; 	// hexadecimal (hex ff = decimal 255)
const 	umask = 0o0022; 	// octal (octal 22 = decimal 18)
const 	roomTemp = 21.5; 	// decimal
const 	c1 = 3.0e6; 		    // exponential (3.0 × 10^6 = 3,000,000)
const 	e = -1.6e-13; 		// exponential (-1.6 × 10^-19 = 0000000000000016)
const 	inf = Infinity;
const 	ninf = -Infinity;
const 	nan = NaN; 		    // "not a number"

console.log('type of blue = ' + typeof blue);
console.log('type of nan = ' + typeof nan);
console.log(nan);

// ---------- Boolean ----------
const 	its_true = true;
const 	its_false = false;
console.log('type of its_false = ' + typeof its_false);

const 	its_true1 = 12;
const 	its_false1 = 0;
console.log('type of its_false1 = ' + typeof its_false1);

// ---------- null & undefined ----------
const   vnull = null;
const   vundefined = undefined;

console.log('type of vnull = ' + typeof vnull);
console.log('type of vundefined = ' + typeof vundefined);
console.log(null === null);   // true
console.log(typeof null);	//  Object
console.log(typeof undefined);  // undefined

// ---------- Symbol ----------
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
console.log(symbol2 === 42);
console.log(symbol3.toString());

// ---------- Object ----------
let person1 = {
	name: 'bob',
	age: '12'
}
let obj = new Object();

console.log(person1);
console.log(typeof obj);

// ---------- Array ----------
const 	breakfast = ["coffee", "croissant"];
const 	hodgepodge = [100, "paint", [200, "brush"], false];	// no type
const	emptyarray = [];					// empty array
const	emptyarray1 = new Array();			// empty array

console.log(breakfast);
console.log('type of breakfast = ' + typeof breakfast);		

// ---------- Date ----------
const 	now = new Date();
console.log('now = ' + now);	
console.log('type of now = ' + typeof now);	

const 	halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm
console.log(halloweenParty);

halloweenParty.getFullYear(); 		// 2016
halloweenParty.getMonth(); 		// 9
halloweenParty.getDate(); 		// 31
halloweenParty.getDay(); 		// 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours(); 		// 19
halloweenParty.getMinutes(); 		// 0
halloweenParty.getSeconds(); 		// 0
halloweenParty.getMilliseconds();   // 0

// ---------- Map & WeakMap ----------

const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
console.log(myMap.get("one")); // 1
console.log(myMap); // {"one":  1, "two": 2}
console.log(myMap.has("three")); // false
myMap.delete("one");
console.log(myMap);

const wm = new WeakMap();
const key1 = {};
console.log(wm.set(key1, 20));
console.log(wm.get(key1));
console.log(wm.has(key1));
console.log(wm.delete(key1));
console.log(wm.has(key1));

// ---------- Set & WeakSet ----------
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1)); // true
console.log(set1.has(5)); // true
console.log(set1.has(6));// false

set1.add(6);
console.log(set1.has(6)); //true

set1.delete(1);
console.log(set1.has(1)); // false

var ws = new WeakSet();
var foo = {}, bar = {};

ws.add(foo);
ws.add(bar);

console.log(ws.has(foo)); // true
console.log(ws.has(bar)); // true

ws.delete(foo);
console.log( foo, bar)
console.log(ws.has(foo)); // false
console.log(ws.has(bar)); // true

// ---------- Function ----------
const sum1 = new Function('a', 'b', 'return a + b');
console.log(typeof sum1); // 7

function sum2(a, b){
	return a + b;
}
console.log(typeof sum2);

const sum3 = function(a, b){
	return a + b;
}
console.log(typeof sum3);

const sum4 = (a, b) => a + b;
console.log(typeof sum4);








