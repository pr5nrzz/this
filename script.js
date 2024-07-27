// var teacher = "Kyle";

// function ask(question) {
//     console.log(teacher, question); // Kyle Why?
// }

// function otherTeacher() {
//     var teacher = "Suzy"; 

//     ask("Why?");
// }

// otherTeacher();

// var teacher = "Kyle";

// function ask(question) {
//     console.log(this.teacher, question);
// }

// function otherTeacher() {
//     var context = {
//         teacher: "Suzy"
//     };

//     ask.call(context, "Why?");
// }

// otherTeacher();

/* 
    The below example can also be written by passing the explicit context object. However, the this mechanism provides a more elegant
    way of "passing along" an object refrence, leading to cleaner API design and easier re-use.
*/

// function indentify() {
//     return this.name.toUpperCase();
// }

// function speakUp() {
//     var greeting = "Hello I am " + indentify.call(this);
//     console.log(greeting);
// }

// var me = {
//     name: "Kyle"
// };

// var you = {
//     name: "Reader"
// }

// console.log(indentify.call(me));
// console.log(indentify.call(you));

// speakUp.call(me);
// speakUp.call(you);

// function foo(num) {
//     console.log("foo: " + num);

//     // keep track of how many times foo was called
//     this.count++; // what is 'this' referring to?
//     // data.count++; // Avoiding the issue and relying on lexical scope
//     // foo.count++; // Again avoiding the issue
// }

// foo.count = 0;

// // var data = {
// //     count: 0
// // };

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         // foo(i);
//         foo.call(foo, i); // Solution (Instead of avoiding this, we embrace it)
//     }
// }

// // How many times foo was called?
// console.log(foo.count); // 0

// function foo() {
//     var a = 10;
//     this.bar(); // What does 'this' refer to?
// }

// function bar() {
//     console.log(this.a); // What does 'this' refer to?
// }

// foo();
