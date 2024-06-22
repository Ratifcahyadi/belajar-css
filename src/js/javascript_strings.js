var abc = "abcdefghijklmnopqrstuvwxyz";
var num = ['a', 'b', 'c', 'd']
var scope = ['A', 'A', 'A', 'A']
var esc = 'I don\'t \n know \n about \nyou';
var len = abc.length;
var int = 321234;
var int1 = 32;
var str1 = "{";
var str2 = "space 2 abc";

/* Search 'A' at first index */
// var ok = scope.indexOf("A"); /* Sensitive Case / Lower / upper */
/* Search 'A' at last index */
// var ok = scope.lastIndexOf("A");

// var ok = abc.slice(1, 3); /* mengambil start, end[pembatas tidak ikut] */
// var ok = abc.slice(3, 6);
// var ok = abc.replace('abc', 123); /* cari data yang sesuai penulisan lalu params kedua unruk pengganti baru  */
// var ok = abc.replace('abc', '123'); /* mirip splice hanya beda []danFind */
// var ok = abc.toUpperCase();
// var ok = abc.toLowerCase();

// var ok = abc.concat(" ", str2, ' 123'); /* menambah dibelakang karakter */

// var ok = abc.charAt(25); /* cari karakter */
// var ok = abc[0];  /* cari karakter by array */
// var ok = str1.charCodeAt(0); /* kode urutan */

// var ok = str2.split(""); /* spasi kosong dihitung */
// var ok = abc.split(""); /* dimasukkan array lalu dipisah koma */

// var ok = num.join("-");

/* number to hex(16), octal or binary */
///* From 2 to 36 */
// var ok = int.toString(2);
// var ok = int.toString(3);
var ok = int.toString(5);
// var ok = int.toString(8);
// var ok = int.toString(16);
// var ok = int.toString(32);
// var ok = int.toString(36);



console.log(ok);

// console.log(num);

// console.log(abc);

// console.log(str2);

// console.log(esc);

// console.log(len);