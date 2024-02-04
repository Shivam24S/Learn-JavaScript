let text = "hello shivam";

// Returns the character at a specified index (position)
console.log("char At =>", text.charAt(6));

//concat()	Returns two or more joined strings

console.log("concat=>", text.concat("good morning"));

//endsWith()	Returns if a string ends with a specified value

console.log("ends with=>", text.endsWith("m"));

//includes()	Returns if a string contains a specified value

console.log("includes =>", text.includes("s"));

// indexOf()	Returns the index (position) of the first occurrence of a value in a string

console.log("index Of s is  => ", text.indexOf("s"));

// lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string

console.log("lastIndex Of text l is  =>", text.lastIndexOf("l"));

// length	Returns the length of a string

console.log("length of text is =>", text.length);

// localeCompare()	Compares two strings in the current locale

// -1 if sorted before
// 1 if sorted after
// 0 if equal

let a = "ab";
let b = "cd";
console.log("local Compare", a.localeCompare(b));
console.log("local Compare", b.localeCompare(a));
console.log("local Compare", a.localeCompare(a));

// match()	Searches a string for a value, or a regular expression, and returns the matches

console.log("match op=>", text.match("sh"));

//  if not match i string it return null

console.log("Not match op =>", text.match("abcd"));

// prototype	Allows you to add properties and methods to an object

function DemoExample(name, surname) {
  this.name = name;
  this.surname = surname;
}
DemoExample.prototype.height = "6.1";

const data = new DemoExample("shivam", "shrivastav");

console.log("prototype op =>", data.height);

// repeat()	Returns a new string with a number of copies of a string

console.log("repeat op =>", text.repeat(" " + 5));

// replace()	Searches a string for a pattern, and returns a string where the first match is replaced

console.log("replace op =>", text.replace("hello", "hii"));

// replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced

console.log("replaceAll op =>", text.replaceAll("l", "L"));

// search()	Searches a string for a value, or regular expression, and returns the index (position) of the match

console.log("search =>", text.search("s"));

//here we cant put starting index we can do that indexOf method

console.log("indexOf op with starting index =>", text.indexOf("h", 6));

// slice()	Extracts a part of a string and returns a new string
// here first is starting index after that end index is start counting from 0

console.log("text that we perform string slice method=>", text);

console.log("slice op =>", text.slice(2));
console.log("slice op =>", text.slice(2, 5));
console.log("slice op =>", text.slice(3, 8));
console.log("slice op =>", text.slice(-1));

// split()	Splits a string into an array of substrings

console.log("split op space =>", text.split(" "));

console.log("split op  without space =>", text.split(""));
console.log("split op with o =>", text.split("o"));

// startsWith()	Checks whether a string begins with specified characters

console.log("start With op =>", text.startsWith("h"));
console.log("start With op =>", text.startsWith("s"));

// substr()	Extracts a number of characters from a string, from a start index (position)
// here first is starting index after that end index is start counting from the index number what we define

console.log("substr op  =>", text.substr(5, 6));

// here minus value will return whole string wheres in slice it will start from end

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0

console.log("substring op =>", text.substring(1, 4));
console.log("substring op =>", text.substring(-1));

// toLowerCase()	Returns a string converted to lowercase letters

console.log("lowercase op =>", text.toLowerCase());

// toUpperCase()	Returns a string converted to uppercase letters

console.log("uppercase op =>", text.toUpperCase());

// trim()	Returns a string with removed whitespaces

let text10 = "                   hello                  ";
console.log("lentght op text for trim =>", text10.length);
let text11 = text10.trim();
console.log("trim Op=>", text11.length);

// trimEnd()	Returns a string with removed whitespaces from the end

let text12 = text10.trimStart();
let text13 = text10.trimEnd();

console.log("trim start=>", text12.length);
console.log("trim End=>", text13.length);
