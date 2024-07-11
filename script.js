// var teacher = "Kyle";

// function ask(question) {
//     console.log(teacher, question); // Kyle Why 'this'?
// }

// function otherTeacher() {
//     var teacher = "Suzy";

//     ask("Why 'this'?");
// }

// otherTeacher();

// var teacher = "Kyle";

// function ask(question) {
//     console.log(this.teacher, question); // Suzy Why 'this'?
// }

// function otherTeacher() {
//     var  myContext = {
//         teacher: "Suzy"
//     };

//     ask.call(myContext, "Why 'this'?");
// }

// otherTeacher();

// var teacher = "Kyle";

// function ask(question) {
//     console.log(this.teacher, question); // Suzy Why 'this'?
// }

// function otherTeacher() {
//     var  myContext = {
//         teacher: "Suzy"
//     };

//     ask.call(myContext, "Why 'this'?");
// }

// function myTeacher() {
//     var  myContext = {
//         teacher: "Dave"
//     };

//     ask.call(myContext, "Why 'this'?");
// }

// otherTeacher();
// myTeacher();

/* 
    The below example can also be written by passing the explicit context object. However, the this mechanism provides a more elegant
    way of "passing along" an object reference, leading to cleaner API design and easier re-use.
*/

// function indentify() {
//     return this.name.toUpperCase();
// }

// function speakup() {
//     var greeting = "Hello I am " + indentify.call(this);
//     console.log(greeting);
// }

// var me = {
//     name: "Kyle"
// }

// var you = {
//     name: "Suzy"
// }

// console.log(indentify.call(me));
// console.log(indentify.call(you));

// speakup.call(me);
// speakup.call(you);

// function foo(num) {
//     console.log("foo: " + num);

//     // Keep track of how many times foo was called
//     this.count++;
//     // foo.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         // foo(i);
//         foo.call(foo, i);
//     }
// }

// // How many times foo was called?
// console.log(foo.count); // 0

// function foo() {
//     var a = 20;
//     this.bar();
// }

// function bar() {
//     console.log(this.a); // undefined
// }

// foo();

/*
    Call Site and Call Stack Matters
*/

// function baz() {
//     // call stack is: 'baz'
//     // so our call site is: 'global scope'

//     console.log('baz');
//     bar(); // <-- call site for 'bar'
// }

// function bar() {
//     // call stack is: 'baz' -> 'bar'
//     // call site is in 'baz' function

//     console.log('bar');
//     foo(); // <-- call site for foo
// }

// function foo() {
//     // call stack is: 'baz' -> 'bar' -> 'foo'
//     // call site is in 'bar' function

//     console.log('foo');
// }

// baz(); // <-- call site for 'baz'

// function foo() {
//     console.log(this.a); // 10
// }

// var a = 10;

// foo(); 
// // Call site is global scope
// // GEC -> foo EC

// function foo() {
//     "use strict";

//     console.log(this.a); // TypeError
// }

// var a = 10;

// foo();

// function foo() {
//     console.log(this.a); // What does 'this' refer to?
// }

// (function() {
//     "use strict";

//     foo(); // Is strict mode applied here?
// })();

// Global Execution Context -> Anonymous function EC -> foo function EC (this?)

// function foo() {
//     "use strict";

//     function bar() {
//         console.log(this.a); // TypeError
//     }

//     bar();
// }

// foo();

// Global Execution Context -> foo function EC -> bar function EC (this?)

// var teacher = "Kyle";

// function ask(question) {
//     console.log(this.teacher, question);
// }

// function askAgain() {
//     "use strict";
//     console.log(this.teacher, question);
// }

// ask("What's the non-strict mode default?");

// askAgain("What's the strict mode default?");