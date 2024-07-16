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
//     // this -> window
//     console.log(this.a); // 10 // window.a
// }

// var a = 10;

// foo(); // this -> window //
// // Call site is global scope
// // GEC -> foo EC

// function foo() {
//     // this -> window
//     "use strict";

//     console.log(this.a); // TypeError
// }

// var a = 10;

// foo(); // this -> window

// function foo() {
//     // this -> window
//     console.log(this.a); // What does 'this' refer to?
// }

// (function() {
//     // this -> window

//     "use strict";

//     // this -> AFEC
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

/*
    Implicit Binding
*/

// function foo() {
//     console.log(this.a); // this -> obj // 2
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// obj.foo();

// function foo() {
//     console.log(this.a); // this -> obj2 // 2
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
//     console.log(this.a); // What does 'this' refer to? -> window
//     // oops, global
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// var bar = obj.foo; // just a reference

// var a = "oops, global";

// bar(); // GEC

// function foo() {
//     console.log(this.a); // What does 'this' refer to? -> window
// }

// function doFoo(fn) {
//     fn(); // this? -> window
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// var a = "oops, global";

// doFoo(obj.foo); // GEC

// function foo() {
//     console.log(this.a); // What does 'this' refer to? -> window
// }

// var obj = {
//     foo: foo,
//     a: 2
// };

// var a = "oops, global";

// setTimeout(obj.foo, 100);
// // obj.foo -> function() {}
// // GEC -> foo();

// // obj.foo();

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
//     console.log(this.a); // this -> obj -> 2
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
//     console.log(this.a); // this -> obj -> 2
// }

// var obj = {
//     a: 2
// };

// var bar = function() {
//     // this -> window
//     foo.call(obj);
// }

// bar(); // GEC
// setTimeout(bar, 100);
// bar.call(window);

// function foo(something) {
//     // this -> obj
//     console.log(something, this.a);
//     return something + this.a;
// }

// var obj = {
//     a: 2
// };

// var bar = function() {
//     // this -> window
//     // return foo.apply(obj, [num]);
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

// // Helper Function
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

/*
    new binding
*/

/*
    class MyClass {
        MyClass() {
            super();
        }
    }

    var myObject = new yClass();
    console.log(myObject);

    function MyClass() {
        // ...
    }

    var myObject = new MyClass();
    console.log(myObject);
*/

// function foo(a) {
//     this.a = a;
// }

// var bar = new foo(2);
// console.log(bar);
// console.log(bar.a);

/*
    1. It creates a new object magically.
    2. Newly created object is linked with another object [[prototype]].
    3. this starts pointing to the newly created object.
    4. If no object is returned from within the object, then it assumes that you meant to return this.
*/

// function ask(question) {
//     console.log(this.teacher, question);
//     this.teacher = "Kyle";
// }

// var newObject = new ask("What is new doing here?");
// console.log(newObject);

/*
    Order of execution
*/

// function foo() {
//     console.log(this.a);
// }

// var obj1 = {
//     foo: foo,
//     a: 2
// };

// var obj2 = {
//     foo: foo,
//     a: 5
// };

// obj1.foo(); // 2
// obj2.foo(); // 5

// obj1.foo.call(obj2); // 5
// obj2.foo.call(obj1); // 2

// function foo(something) {
//     this.a = something;
// }

// var obj1 = {
//     foo: foo
// };

// var obj2 = {};

// obj1.foo(2); // 
// console.log(obj1.a); // 2

// obj1.foo.call(obj2, 3);
// console.log(obj2.a); // 3

// var bar = new obj1.foo(4); 
// console.log(obj1.a); // 2
// console.log(bar.a); // 4

// var baz = new foo.call(obj1, 5); // new and call/apply cannot be used together, so new foo.call(obj1) is not allowed

// function foo(something) {
//     this.a = something;
// }

// var obj = {};

// var bar = foo.bind(obj);
// // function bar() { foo.apply(obj, arguments); }

// bar(2);
// console.log(obj.a); // 2

// var baz = new bar(3); 
// console.log(obj.a); // 2
// console.log(baz.a); // 3

// Partial function
// function foo(p1, p2) {
//     this.val = p1 + p2;
// }

// var bar = foo.bind(null, "p1");
// // function bar("p1") { foo.apply(null, ["p1"]) }

// var baz = new bar("p2");
// // this -> baz
// // function bar("p1") { foo.apply(baz, ["p1", "p2"]) }

// console.log(baz.val); // p1p2

// var workshop = {
//     teacher: "Kyle",
//     ask: function ask(question) {
//         console.log(this.teacher, question); // undefined What does this do?
//     }
// };

// new (workshop.ask.bind(workshop))("What does this do?");
// new ask("....");

// var boundFunc = workshop.ask.bind(workshop);
// newObject.apply(workshop, ["What does this do?"]);
// new newObject("What does this do?");

/*
    Exceptions
*/
// function foo() {
// 	console.log( this.a ); // 2
// }

// var a = 2;

// foo.call( null ); // null/undefined is ignored and resolves to default binding

// function foo(a, b) {
//     console.log("a: " + a, "b: " + b);
// }

// // spreading out array as parameters
// foo.apply(null, [2, 3]);

// // currying with bind(..)
// var bar = foo.bind(null, 2);
// bar(3);

// Safer choice
// function foo(a, b) {
//     console.log("a: " + a, "b: " + b);
// }

// // DMZ Object (completly empty, non delegated object)
// var obj = Object.create(null);

// foo.apply(obj, [2, 3]);

// var bar = foo.bind(obj, 2);
// bar(3);

// var myObj = { a: 2 };
// var newObj = Object.create(myObj); 
// console.log(newObj);
// console.log(newObj.a);

/*
    Arrow Functions (Lexical this)
*/
// function foo() {
//     // this -> obj1
//     return (a) => {
//         console.log(this.a);// 2
//     }

//     // return function(a) {
//     //     console.log(this.a); // undefined
//     // }
// }

// var obj1 = {
//     a: 2
// };

// var obj2 = {
//     a: 3
// };

// var bar = foo.call(obj1);
// bar.call(obj2); // 2
/*
    (a) => {
        // this -> obj2
        console.log(this.a); // 3
    } 
*/

// function foo() {
//     // this -> obj
//     setTimeout(() => {
//         console.log(this.a); // 2
//     }, 10);

//     // setTimeout(function () {
//     //     console.log(this.a); // undefined
//     // }, 10);
// }

// var obj = {
//     a: 2
// };

// foo.call(obj);

// function foo() {
//     var self = this;

//     setTimeout(function() {
//         console.log(self.a);
//     }, 10);
// }

// var obj = {
//     a: 2
// };

// foo.call(obj);

// var workshop = {
//     teacher: "Kyle",
//     ask(question) {
//         // this -> workshop
//         setTimeout(() => {
//             console.log(this.teacher, question); // Kyle Is this lexical 'this'?
//         }, 100);
//     }
// };

// workshop.ask("Is this lexical 'this'?"); 

// var workshop = {
//     teacher: "Kyle",
//     ask: (question) => {
//         console.log(this.teacher, question);
//     }
// };

// workshop.ask("What happened to 'this'?");
// workshop.ask.call(workshop, "Still no 'this'?");