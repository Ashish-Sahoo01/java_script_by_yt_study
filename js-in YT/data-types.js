//  Data-types

// number => 2 to power 53 
// bigint  => 2 to power 53 in uper number
// string => ""
// boolean => true/false
// null => standalone value
// undefined
// symbol => unique
// object

// find the variable is which data-type to use this
// console.log(typeof "Ashish");


// and null is object datatype;
// or undefined in undefined datatype; 

// ----------------------------------------------------------------------------------


//datatype conversion----------:

// let score = 33;
// console.log(score);
// console.log(typeof score);


// but the we use string but value is number then what is datatype

// let score = "33";
// console.log(score);
// console.log(typeof score);

//-------------------------------------------------------------------

//but we have data type in number then what we can use
//convert a string in number datatype

//ex-1
// let score = "33";
// let valueInNumber = Number(score)

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//ex-2
// let score = "33abc";
// let valueInNumber = Number(score)

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//-------------------------------------------------------------------

//convert a null in number datatype
//ex-3
// let score = null;
// let valueInNumber = Number(score)

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//-------------------------------------------------------------------

//convert a undefined in number datatype
//ex-4
// let score = undefined;
// let valueInNumber = Number(score)

// console.log(valueInNumber);
// console.log(typeof valueInNumber);   //but not convert

//-------------------------------------------------------------------

//convert a boolean  in number datatype
// //ex-5
// let score = true;
// let valueInNumber = Number(score)

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//convert a boolean  in number datatype
//ex-6
// let score = false;
// let valueInNumber = Number(score)

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//-------------------------------------------------------------------

//convert a number in boolean datatype
//ex-7
// let LoggedIn = 1;
// let LoggedInboolean = Boolean(LoggedIn);

// console.log(LoggedInboolean);


//convert a number in boolean datatype
//ex-8
// let LoggedIn = 0;
// let LoggedInboolean = Boolean(LoggedIn);

// console.log(LoggedInboolean);

//-------------------------------------------------------------------

//convert a Mt string in boolean datatype
//ex-9
// let LoggedIn = "";
// let LoggedInboolean = Boolean(LoggedIn);

// console.log(LoggedInboolean);


//convert a  string in boolean datatype
//ex-9
// let LoggedIn = "Ashish";
// let LoggedInboolean = Boolean(LoggedIn);

// console.log(LoggedInboolean);

//-------------------------------------------------------------------

//convert a  number in string datatype
//ex-10
// let someNumber = 50;
// let numberInString = String(someNumber);

// console.log(numberInString);
// console.log(typeof numberInString);

//-------------------------------------------------------------------




//**********************oprations****************************

//ex-1
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 6);
// console.log(2 % 8);


// ex-2
// let str1 = "Ashsih";
// let str2 = "sahoo";
// let str3 = str1 + str2 ;
// console.log(str3);

//ex-3
//  value = false/true/"";
//  subValue = -value;
//  console.log(subValue);

// ex-4
// console.log("2" + 1);
// console.log(1 + "2");
// console.log(1 + 5 + "2");
// console.log("2" + 2 + 1);
// console.log(1 + 2 + "3" + "2");
// console.log(+true)
// console.log(+""); this conversion is not valid

// ex-5
// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter); 


// ---------------------------------&------------------------------------

// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" >= 1);
// console.log("02" <= 1); always mind not compar to two differnt data type.

// console.log( null > 0);
// console.log( null == 0);
// console.log( null >= 0); always mind not compar to two differnt data type.
// comparisons convert null to a number , treating it as 0.that why (1)null > 0 is false and (3)null >= 0 is true.

// console.log( undefined > 0);
// console.log( undefined == 0);
// console.log( undefined < 0); always mind not compar to two differnt data type.

// ===
// console.log( "2" === 2 );
//this compersions is check to tha value datatype.


//---------------------------------------&-----------------------------

// two type of datatype 
    //(1) primitive
    // 7 Type : String , Number , Boolean , Null , undefined , symbol , BigInt.

    // (2) Reference (Non Primitive)
    // 3 Type : Array , Objects ,Function .


    // remind you check the datatype of null is show object.
    // console.log(typeof null);
    // => Object.


// ---------------------------------&-------------------------
// heap & steck related info-:

// Steck (All primitive datatype )
// Heap (All Non primitive datatype)














 






 
