typeof //= gives data type
//strings
	 .length();//= give totatl length of the string
	.toUpperCase();// = returns in capital
	.toLowerCase() ;//= returns in lower case
	.charAt('number') ;//= can show which character is at that given number poistion 
	.indexOf('character or word') ;//= will give the position number of the given character or word
	.startsWith('character') ;//= returns boolean value= true or false wheather that character is present or not.
	//.endsWith = returns boolean value too. and both methods are case sensitive
	//.concat() or '+' is for connecting two words or characters
	// .trin() will remove extra white space at the begining and ending of the string.
	// .repeat(number) will writes the string time given in bracaket

	//ES6
	//Template Literals `` , which can include JS code too // allows interpolation of javascript code.

	const interPolationage = 29;

	let myAge = `I am younger than Alexa by ${interPolationage - 1} years`;
	document.querySelector('#myAge').innerHTML = myAge;

	//Symbol() were created for unique values which helps to avoid any naming collisions. 
	//The main use-case for symbols is as object property keys, which will be covered in Chapter 5. The uniqueness of symbols, mean that it’s impossible for the names of any properties to clash with each other if they are symbols.

	//Numbers can be integers or floating/decimel type of, in JS it is not distinguised but in ES6 there are some methods
	Number.isInteger() //checks if number is an integer or not , returns boolean value True or false

	new Number(); //is a construct for numbers

	any number starting with 0x considered to be Hexadecimal.
	ES6 supports Octal starts with 0o and binary starts with 0b

	Exponential 2E3 2 x 10^3 = 2000
	1e5 = 1 x 10^5 = 100000
	also, 2**3 = 8


	const number = 5;
	number.toExponential(); // returns a number as string in exponential notation i.e "5e+0"
	toFixed()// rounds a number to fixed number of decimal places and returns as STRING too
	const Pi = 3.1415678;
	Pi.toFixed(); // "3.142"
	toPrcision(); //method rounds a number to a fixed number of significant figures that is once again returned as a string (and often using exponential notation):

	% gives remainder
	NaN = not a number, type is number;
	isFinite() //give yu bolean result if you can use that number as number

	Coercion : Type coercion happens when the operands of an operator are of different types


	Conversion

	String to Number
	Number(); 
	number multiplying with number ; // '5'*1 = number 5
	adding + symbol ; // +'5'= 5

	String to number
	String(); will convert into string
	 number + '' //string
	 10..toString() << '10'

	 convert a string representation of a numerical value back into a number ParseInt();

	 Array[];
	 delete array[position]; //it will remove the value but it will replace by "undefined"
	 pop();// Removes the last item in an array
	 shift();//removes first items
	 push();//appends new item at last
	 unshift(); //appends new value in the begining
	 concat([array values]);// can add another array to one

	 ES6
	 spred: ...
	 	//1) can be used to concat two arrays
        //2)

        join();// Cnverts from an array to string seperating by comma by default.
        join('&'); // will add that sybmol in between array values
        slice(start number to number); //method creates sub array and do not deconstruct
        splice(1,3); //splice removes it and can replace with new value and it is deconstructive method.
        reverse();
        sort();//sort by alphabetically, numbers get alphabetically get sorted
        indexOf();//gives number positin in return
        includes(); //returns booleans value if the string is in array r not.
        

        Set();// New type of Data structure which do not allow same data in the set
        const list = new Set();
        list.add(1);
        list.add('pepole');

        has();// returns boolean alue if the written value exsit in a set or not. 
        includes() & indexOf() // checks if a value is an array

        //BUT Set can't be indexed like array

        `list[0] can't be checked. `

        delete() //deletes specific value from set
        clear()// removes all the values from Set
		.size // gives length of the set

		Set{} to array[] converstion : spred operator (...)
		Array.from(setName); // changes from set to array
		
		Map() // New data structure in ES6
		Objects are limited to using strings for key values, whereas maps can use any data type as a key.
		There is no efficient way to find the number of key-value pairs an object has, whereas this is easy to do with maps using the size property.
		Objects have methods that can be called (see Chapter 5) and prototypes that can be used to create a chain of inheritance (see Chapter 12), whereas maps are solely focused on the storage and retrieval of key-value pairs.
		The value of an object’s properties can be accessed directly, whereas maps restrict you to using the get() method to retrieve any values.

		.set(key, value) is used to add data in Maps();
		get(key) is use to view the value of that key
		has() works same way
		Can be created nested Maps and can find length of it b .size() method
		delete() will give boolean response and clear() will remove all values

		Maps to arrays

		let newArray = [...romanNumerals] //romanNumeral is 
		Array.from(romanNumerals);

		WeakMap() is the same as waek sets beside the keys can not be primitives.
		A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol.

		WakMaps() or WeakSet() is used t avoid memory leaks and ptimized memory usage. The only limitation would be not all methods can be applied to the weak set or map.


		Ternary operator

		condition ? if true do this : else do this

		const letters = new Set('hello');

		for(const letter of letters){
			console.log(letter);
		}






