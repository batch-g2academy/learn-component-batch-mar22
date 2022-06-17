// let todos = [ 'Learn HTML', function (){ return 0 }];
// console.log(todos[0]);
// console.log(todos[1]());

//destructring
let [ todos,  setTodos, isTodos ] = [ 'Learn HTML', function (){ return 0 }, true];

console.log(todos);
console.log( setTodos() );
console.log(isTodos);

// ... => spread syntax => untuk mengcopy semua data yang ada di dalam array/object

let numbers = [ 1, 4, 2, 6, 8 ];
let angka = [ ...numbers ];

numbers[1] = 99;

console.log("numbers: ");
console.log(numbers);
console.log("=======angka=====");
console.log(angka);

let movies = [ { title: 'A'}, { title: 'B'}];
console.log(...movies);

let object = { nama: 'G2', email: 'g2academy.mail@com'}
console.log({...object});