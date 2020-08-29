console.log("********************************************************************************");
console.log("*                             Variable Types                                   *");
console.log("********************************************************************************");


console.log("\n\n1. Without defining data type using with default strict mode configuration");
var a;
a = 10;
console.log("\nThe value of : \n\n\tvar a\n\ta = 10 would be : ",a);
a = "Christon Cardoza";
console.log("\n\ta = 'Christon Cardoza' would be : ",a);
a = true;
console.log("\n\ta = true would be : ",a);



console.log("\n\n2. Defining data type using with default strict mode configuration");
var b : Number;
b = 10 ;
console.log("\nThe value of : \n\n\tvar b : Number\n\tb = 10 would be : ",b);
console.log("\n\tb = 'Christon Cardoza' would be :  Type 'Christon Cardoza' is not assignable to type 'Number'");
console.log("\n\tb = true would be :  Type 'true' is not assignable to type 'Number'");


console.log("********************************************************************************");
console.log("*                                   Arrays                                     *");
console.log("********************************************************************************");


console.log("\n\n1. Without defining data type using with default strict mode configuration");
var c = new Array();
c = ["Christon",24,true];
console.log("\nThe value of : \n\n\tvar c = new Array()\n\tc = ['Christon',24,true] would be : ",c);

console.log("\n\n2. Defining data type using with default strict mode configuration");
var d : Number[];
d = [1,2,3,4,5]
console.log("\nThe value of : \n\n\tvar d : Number[]\n\td = [1,2,3,4,5] would be : ",d);
console.log("\n\td = ['Christon',24,true] would be : Type 'string' is not assignable to type 'Number' Type 'boolean' is not assignable to type 'Number' ");
var e  :[Number, Boolean, String];
e = [24,true,'Christon']
console.log("\nThe value of : \n\n\tvar e  : [Number, Boolean, String]\n\te = [24,true,'Christon'] would be : ",e);


console.log("********************************************************************************");
console.log("*                                Functions                                     *");
console.log("********************************************************************************");


console.log("\n\n1. Without defining data type using with default strict mode configuration");
console.log("\nThe value of : \n\n\tvar var x\n\n\tvar var y\n\n\tfunction add1(x,  y){\n\n\t\treturn x + y\n\n\t}\n\nadd1('Christon ',24) would be : Christon 24 ");

console.log("\n\n2. Defining data type using with default strict mode configuration");
function add(s : number, t: number, u = 0, v?) : number {
  return s+t+u;
}
var f = add(24,24);
var g = add(24,24,24,24);
console.log("\nThe value of : \n\n\tfunction add(s : number, t: number, u = 0, v?) : number {{\n\n\t\treturn s+t+u\n\n\t}\n\nadd(24,24) would be :   " +f+"\n\nadd(24,24,24,24) would be : "+g);
