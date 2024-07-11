Q. Why "this"?
A. It is JavaScript's way of providing dynamic scope. It makes it flexible and reusable. (See Example 1 and 2).

Q. What is "this"?
A. "this" is a keyword. It is automatically defined in the scope of every function. (See Example 3).

Q. Does "this" referes to itself (grammatical meaning)?
A. No (See Examples 4 and 5).

Q. Does "this" refer to the function scope?
A. "this" doesn't, in any way refer to the function's lexical scope. You cannot use "this" reference to look something up in the lexical scope. (See Example 6).

Q. Then what is "this"?
A. -> "this" is not an author-time binding but a runtime binding. 
   -> "this" has nothing to do with where the function is declared, instead it has everything to with how the function was invoked.
   -> When a function is invoked, an activation record also known as execution context is created. This record keeps track of where the function was called from (Call Stack), how the function was invoked, what parameters were passed, etc. One of the properties of this record is "this" reference which will be used throughout the function execution. (See rest of the examples).