(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{385:function(e,t,n){"use strict";n.r(t);var o=n(44),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"repetition-with-while"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#repetition-with-while"}},[e._v("#")]),e._v(" Repetition with "),n("code",[e._v("while")])]),e._v(" "),n("blockquote",[n("p",[e._v("Computers are ideal for repetitive tasks.")])]),e._v(" "),n("p",[e._v("The most basic form of repetition uses the "),n("code",[e._v("while")]),e._v(" keyword. This repeats a block as long as the controlling "),n("em",[e._v("Boolean expression")]),e._v(" is "),n("code",[e._v("true")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("while (Boolean-expression) {\n  // Code to be repeated\n}\n")])])]),n("p",[e._v("The Boolean expression is evaluated once at the beginning of the loop and again before each further iteration through the block.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// RepetitionWithWhile/WhileLoop.kt\n\nfun condition(i: Int) = i < 100  // [1]\n\nfun main() {\n  var i = 0\n  while (condition(i)) {         // [2]\n    print(".")\n    i += 10                      // [3]\n  }\n}\n/* Output:\n..........\n*/\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" The comparison operator "),n("code",[e._v("<")]),e._v(" produces a "),n("code",[e._v("Boolean")]),e._v(" result, so Kotlin infers "),n("code",[e._v("Boolean")]),e._v(" as the result type for "),n("code",[e._v("condition()")]),e._v(".")]),e._v(" "),n("li",[n("strong",[e._v("[2]")]),e._v(" The conditional expression for the "),n("code",[e._v("while")]),e._v(" says: “repeat the statements in the body as long as "),n("code",[e._v("condition()")]),e._v(" returns "),n("code",[e._v("true")]),e._v(".”")]),e._v(" "),n("li",[n("strong",[e._v("[3]")]),e._v(" The "),n("code",[e._v("+=")]),e._v(" operator adds "),n("code",[e._v("10")]),e._v(" to "),n("code",[e._v("i")]),e._v(" and assigns the result to "),n("code",[e._v("i")]),e._v(" in a single operation ("),n("code",[e._v("i")]),e._v(" must be a "),n("code",[e._v("var")]),e._v(" for this to work). This is equivalent to:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("i = i + 10\n")])])]),n("p",[e._v("There’s a second way to use "),n("code",[e._v("while")]),e._v(", in conjunction with the "),n("code",[e._v("do")]),e._v(" keyword:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("do {\n  // Code to be repeated\n} while (Boolean-expression)\n")])])]),n("p",[e._v("Rewriting "),n("code",[e._v("WhileLoop.kt")]),e._v(" to use a "),n("code",[e._v("do-while")]),e._v(" produces:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// RepetitionWithWhile/DoWhileLoop.kt\n\nfun main() {\n  var i = 0\n  do {\n    print(".")\n    i += 10\n  } while (condition(i))\n}\n/* Output:\n..........\n*/\n')])])]),n("p",[e._v("The sole difference between "),n("code",[e._v("while")]),e._v(" and "),n("code",[e._v("do-while")]),e._v(" is that the body of the "),n("code",[e._v("do-while")]),e._v(" always executes at least once, even if the Boolean expression initially produces "),n("code",[e._v("false")]),e._v(". In a "),n("code",[e._v("while")]),e._v(", if the conditional is "),n("code",[e._v("false")]),e._v(" the first time, then the body never executes. In practice, "),n("code",[e._v("do-while")]),e._v(" is less common than "),n("code",[e._v("while")]),e._v(".")]),e._v(" "),n("p",[e._v("The short versions of assignment operators are available for all the arithmetic operations: "),n("code",[e._v("+=")]),e._v(", "),n("code",[e._v("-=")]),e._v(", "),n("code",[e._v("*=")]),e._v(", "),n("code",[e._v("/=")]),e._v(", and "),n("code",[e._v("%=")]),e._v(". This uses "),n("code",[e._v("-=")]),e._v(" and "),n("code",[e._v("%=")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// RepetitionWithWhile/AssignmentOperators.kt\n\nfun main() {\n  var n = 10\n  val d = 3\n  print(n)\n  while (n > d) {\n    n -= d\n    print(" - $d")\n  }\n  println(" = $n")\n\n  var m = 10\n  print(m)\n  m %= d\n  println(" % $d = $m")\n}\n/* Output:\n10 - 3 - 3 - 3 = 1\n10 % 3 = 1\n*/\n')])])]),n("p",[e._v("To calculate the remainder of the integer division of two natural numbers, we start with a "),n("code",[e._v("while")]),e._v(" loop, then use the remainder operator.")]),e._v(" "),n("p",[e._v("Adding "),n("code",[e._v("1")]),e._v(" and subtracting "),n("code",[e._v("1")]),e._v(" from a number are so common that they have their own increment and decrement operators: "),n("code",[e._v("++")]),e._v(" and "),n("code",[e._v("--")]),e._v(". You can replace "),n("code",[e._v("i += 1")]),e._v(" with "),n("code",[e._v("i++")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// RepetitionWithWhile/IncrementOperator.kt\n\nfun main() {\n  var i = 0\n  while (i < 4) {\n    print(".")\n    i++\n  }\n}\n/* Output:\n....\n*/\n')])])]),n("p",[e._v("In practice, "),n("code",[e._v("while")]),e._v(" loops are not used for iterating over a range of numbers. The "),n("code",[e._v("for")]),e._v(" loop is used instead. This is covered in the next atom.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);