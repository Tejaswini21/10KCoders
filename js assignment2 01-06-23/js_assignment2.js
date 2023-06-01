//variables
console.log("variables ");
console.log("a=10 b=3");

console.log(" ");

//Assignment operators
console.log("Assignment operators");

//addition
var a=10,b=3;
c=a+b;
console.log("1.a+b=", c);

//substraction
var a=10,b=3;
c=a-b;
console.log("2.a-b=",c);

//multiplication
var a=10,b=3;
c=a*b;
console.log("3.a*b=",c);

//Division
var a=10,b=3;
c=a/b;
console.log("4.a/b=",c);

//modulus
var a=10,b=3;
c=a%b;
console.log("5.a%b=",c);

//Exponentiation operator
var a=10,b=3;
c=a**b;
console.log("6.a**b=",c);

console.log(" ");

//comparison operators
console.log("comparison operators");

//Greater than
var a=10,b=3;
c=a>b;
console.log("1.a>b=",c);

//lessthan
var a=10,b=3;
c=a<b;
console.log("2.a<b=",c);

//not equal to
var a=10,b=3;
c=a!=b;
console.log("3.a!=b =",c);

//greater than or equal to
var a=10,b=3;
c=a>=b;
console.log("4.a>=b =",c);

//lessthan or equal to
var a=10,b=3;
c=a<=b;
console.log("5.a<=b=",c);

//equal to
var a=10,b=3;
c=a==b;
console.log("6.a==b =",c);

//equal value and type
var a=10,b=3;
c=a===b;
console.log("7.a===b =",c);

console.log(" ");

//logical operators
console.log("logical operators");
console.log("variables");
console.log("a=8 b=6 c=4 d=2");
console.log("x=a>b y=c>d");

//and
var a=8,b=6,c=4,d=2;
x=a>b,y=c>d;
z=x && y;
console.log("1.x && y=",z, "(x is true and y is true)");

var a=8,b=6,c=4,d=2;
x=a>b,y=c<d;
z=x && y;
console.log("2.x && y=",z, "(x is true and y is false)");

//or 
var a=8,b=6,c=4,d=2;
x=a>b,y=c>d;
z=x || y;
console.log("3.x || y=",z, "(x is true and y is true)");

var a=8,b=6,c=4,d=2;
x=a>b,y=c<d;
z=x || y;
console.log("4.x || y=",z, "(x is true and y is false)");

var a=8,b=6,c=4,d=2;
x=a<b,y=c>d;
z=x || y;
console.log("5.x || y=",z, "(x is false and y is true)");

var a=8,b=6,c=4,d=2;
x=a<b,y=c<d;
z=x || y;
console.log("6.x || y=",z, "(x is false and y is false)");

//not

var a=8,b=6,c=4,d=2;
x=a>b,y=c>d;
z=!x ;
console.log("7.!x=",z, "(x is true )");

var a=8,b=6,c=4,d=2;
x=a<b,y=c>d;
z=!x ;
console.log("8.!x=",z, "(x is false )");

var a=8,b=6,c=4,d=2;
x=a>b,y=c>d;
z=!y ;
console.log("9.!y=",z, "(y is true )");

var a=8,b=6,c=4,d=2;
x=a>b,y=c<d;
z=!y ;
console.log("10.!y=",z, "(y is false )");
