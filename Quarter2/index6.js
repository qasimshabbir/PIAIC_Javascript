var a = 0;//1 //2 //3 //4 //5 //6 //5 //6
var b = ++a + a++;//1
//  b = 1   + 1 //2
var c = ++a + ++a + --a;
// c = 3   + 4   + 3; // 10
var c = a++ + a++ + a--;
//  c = 3 (3+1)   + 4 (4+1)   + 5 (5-1)  // 12
var d = a++ * ++a + --a;
//  d = 4  *  6 + 5; //29
var d = a++ + ++a * --a;
//  d = 5 + 7 * 6 // 47
console.log(a);
console.log(d);


