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

/*
    Default Binding (Standalone function invocation)
*/
// function foo() {
//     // this refers to the global scope
//     console.log(this.a); // What does 'this' refer to?
// }

// var a = 10;

// foo(); // Call Site

// 'this' is not eligible for default binding
// function foo() {
//     "use strict";

//     console.log(this.a); // What does 'this' refer to?
// }

// var a = 10;

// foo();

// function foo() {
//     console.log(this.a);  // 10
// }

// var a = 10;

// (function () {
//     "use strict";

//     foo(); // Is strict mode applied here?
// })();
// IIFE <-- this -> window
// foo <-- this -> IIFE
// foo <-- this -> window

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

/*
    Implicit Binding
*/

// function foo() {
//     console.log(this.a); // What does 'this' refer to?
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// obj.foo(); // Function called in the context of an object

// function foo() {
//     console.log(this.a); // 2
// }

// var obj2 = {
//     foo: foo,
//     a: 2
// };

// var obj1 = {
//     obj2: obj2,
//     a: 10
// }

// obj1.obj2.foo();

// function foo() {
//     console.log(this.a); // What does 'this' refer to?
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// var bar = obj.foo;

// var a = "oops, global";

// bar();

// function foo() {
//     // this -> doFoo
//     console.log(this.a); // What does 'this' refer to?
// }

// function doFoo(fn) {
//     // this -> widnow
//     fn(); // foo();
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// var a = "oops, global";

// doFoo(obj.foo);

// function foo() {
//     console.log(this.a); // What does 'this' refer to?
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// var a = "oops, global";

// setTimeout(obj.foo, 100); // foo();

// var workshop = {
//     teacher: "Kyle",
//     ask(question) {
//         console.log(this.teacher, question);
//     }
// };

// workshop.ask("What is Implicit Binding");

// Method Sharing
// function ask(question) {
//     console.log(this.teacher, question);
// }

// var workshop1 = {
//     teacher: "kyle",
//     ask: ask
// };

// var workshop2 = {
//     teacher: "Suzy",
//     ask: ask
// }

// workshop1.ask("How do I share a method?");

// workshop2.ask("How do I share a method?");

/*
    Explicit Binding
*/

// function foo() {
//     console.log(this.a); // 2
// }

// var obj = {
//     a: 2
// };

// foo.call(obj);

// function ask(question) {
//     console.log(this.teacher, question);
// }

// var workshop1 = {
//     teacher: "kyle"
// };

// var workshop2 = {
//     teacher: "Suzy"
// }

// ask.call(workshop1, "How do I share a method?");

// ask.call(workshop2, "How do I share a method?");

/*
    Hard Binding
*/

// function foo() {
//     // this -> obj
//     console.log(this.a);
// }

// var obj = {
//     a: 2
// };

// var bar = function() {
//     // this -> window
//     foo.call(obj);
// }

// bar();
// setTimeout(bar, 100);
// bar.call(window);

// function foo(something) {
//     console.log(something, this.a);
//     return something + this.a;
// }

// var obj = {
//     a: 2
// };

// var bar = function () {
//     return foo.apply(obj, arguments);
// }

// var baz = bar(3);
// console.log(baz);

// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }

// var obj = {
//     a: 2
// };

// // Helper function
// function bind(fn, obj) {
//     return function () {
//         return fn.apply(obj, arguments);
//     }
// }

// var bar = bind(foo, obj);

// var baz = bar(3);
// console.log(baz);

// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }

// var obj = {
//     a: 2
// };

// var bar = foo.bind(obj);

// var baz = bar(3);
// console.log(baz);

// var workshop = {
//     teacher: "Kyle",
//     ask(question) {
//         console.log(this.teacher, question);
//     }
// };

// setTimeout(workshop.ask, 10, "Lost this?");

// setTimeout(workshop.ask.bind(workshop), 10, "Hard bind this?");

// function foo(el) {
//     console.log(el, this.id);
// }

// var obj = {
//     id: "awesome"
// };

// [1, 2, 3].forEach(foo, obj);
