(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{501:function(e,n,t){"use strict";t.r(n);var s=t(44),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"if-expressions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-expressions"}},[e._v("#")]),e._v(" "),t("code",[e._v("if")]),e._v(" Expressions")]),e._v(" "),t("blockquote",[t("p",[e._v("An "),t("em",[t("code",[e._v("if")]),e._v(" expression")]),e._v(" makes a choice.")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("if")]),e._v(" keyword tests an expression to see whether it’s "),t("code",[e._v("true")]),e._v(" or "),t("code",[e._v("false")]),e._v(" and performs an action based on the result. A true-or-false expression is called a "),t("em",[e._v("Boolean")]),e._v(", after the mathematician George Boole who invented the logic behind these expressions. Here’s an example using the "),t("code",[e._v(">")]),e._v(" (greater than) and "),t("code",[e._v("<")]),e._v(" (less than) symbols:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// IfExpressions/If1.kt\n\nfun main() {\n  if (1 > 0)\n    println("It\'s true!")\n  if (10 < 11) {\n    println("10 < 11")\n    println("ten is less than eleven")\n  }\n}\n/* Output:\nIt\'s true!\n10 < 11\nten is less than eleven\n*/\n')])])]),t("p",[e._v("The expression inside the parentheses after the "),t("code",[e._v("if")]),e._v(" must evaluate to "),t("code",[e._v("true")]),e._v(" or "),t("code",[e._v("false")]),e._v(". If "),t("code",[e._v("true")]),e._v(", the following expression is executed. To execute multiple lines, place them within curly braces.")]),e._v(" "),t("p",[e._v("We can create a Boolean expression in one place, and use it in another:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// IfExpressions/If2.kt\n\nfun main() {\n  val x: Boolean = 1 >= 1\n  if (x)\n    println(\"It's true!\")\n}\n/* Output:\nIt's true!\n*/\n")])])]),t("p",[e._v("Because "),t("code",[e._v("x")]),e._v(" is "),t("code",[e._v("Boolean")]),e._v(", the "),t("code",[e._v("if")]),e._v(" can test it directly by saying "),t("code",[e._v("if(x)")]),e._v(".")]),e._v(" "),t("p",[e._v("The Boolean "),t("code",[e._v(">=")]),e._v(" operator returns "),t("code",[e._v("true")]),e._v(" if the expression on the left side of the operator is "),t("em",[e._v("greater than or equal")]),e._v(" to that on the right. Likewise, "),t("code",[e._v("<=")]),e._v(" returns "),t("code",[e._v("true")]),e._v(" if the expression on the left side is "),t("em",[e._v("less than or equal")]),e._v(" to that on the right.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("else")]),e._v(" keyword allows you to handle both "),t("code",[e._v("true")]),e._v(" and "),t("code",[e._v("false")]),e._v(" paths:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// IfExpressions/If3.kt\n\nfun main() {\n  val n: Int = -11\n  if (n > 0)\n    println("It\'s positive")\n  else\n    println("It\'s negative or zero")\n}\n/* Output:\nIt\'s negative or zero\n*/\n')])])]),t("p",[e._v("The "),t("code",[e._v("else")]),e._v(" keyword is only used in conjunction with "),t("code",[e._v("if")]),e._v(". You are not limited to a single check—you can test multiple combinations by combining "),t("code",[e._v("else")]),e._v(" and "),t("code",[e._v("if")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// IfExpressions/If4.kt\n\nfun main() {\n  val n: Int = -11\n  if (n > 0)\n    println("It\'s positive")\n  else if (n == 0)\n    println("It\'s zero")\n  else\n    println("It\'s negative")\n}\n/* Output:\nIt\'s negative\n*/\n')])])]),t("p",[e._v("Here we use "),t("code",[e._v("==")]),e._v(" to check two numbers for equality. "),t("code",[e._v("!=")]),e._v(" tests for inequality.")]),e._v(" "),t("p",[e._v("The typical pattern is to start with "),t("code",[e._v("if")]),e._v(", followed by as many "),t("code",[e._v("else if")]),e._v(" clauses as you need, ending with a final "),t("code",[e._v("else")]),e._v(" for anything that doesn’t match all the previous tests. When an "),t("code",[e._v("if")]),e._v(" expression reaches a certain size and complexity you’ll probably use a "),t("code",[e._v("when")]),e._v(" expression instead. "),t("code",[e._v("when")]),e._v(" is described later in the book, in ["),t("code",[e._v("when")]),e._v(" Expressions](javascript:void(0)).")]),e._v(" "),t("p",[e._v("The “not” operator "),t("code",[e._v("!")]),e._v(" tests for the opposite of a Boolean expression:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// IfExpressions/If5.kt\n\nfun main() {\n  val y: Boolean = false\n  if (!y)\n    println("!y is true")\n}\n/* Output:\n!y is true\n*/\n')])])]),t("p",[e._v("To verbalize "),t("code",[e._v("if(!y)")]),e._v(", say “if not y.”")]),e._v(" "),t("p",[e._v("The entire "),t("code",[e._v("if")]),e._v(" is an expression, so it can produce a result:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// IfExpressions/If6.kt\n\nfun main() {\n  val num = 10\n  val result = if (num > 100) 4 else 42\n  println(result)\n}\n/* Output:\n42\n*/\n")])])]),t("p",[e._v("Here, we store the value produced by the entire "),t("code",[e._v("if")]),e._v(" expression in an intermediate identifier called "),t("code",[e._v("result")]),e._v(". If the condition is satisfied, the first branch produces "),t("code",[e._v("result")]),e._v(". If not, the "),t("code",[e._v("else")]),e._v(" value becomes "),t("code",[e._v("result")]),e._v(".")]),e._v(" "),t("p",[e._v("Let’s practice creating functions. Here’s one that takes a Boolean parameter:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// IfExpressions/TrueOrFalse.kt\n\nfun trueOrFalse(exp: Boolean): String {\n  if (exp)\n    return \"It's true!\"          // [1]\n  return \"It's false\"            // [2]\n}\n\nfun main() {\n  val b = 1\n  println(trueOrFalse(b < 3))\n  println(trueOrFalse(b >= 3))\n}\n/* Output:\nIt's true!\nIt's false\n*/\n")])])]),t("p",[e._v("The Boolean parameter "),t("code",[e._v("exp")]),e._v(" is passed to the function "),t("code",[e._v("trueOrFalse()")]),e._v(". If the argument is passed as an expression, such as "),t("code",[e._v("b < 3")]),e._v(", that expression is first evaluated and the result is passed to the function. "),t("code",[e._v("trueOrFalse()")]),e._v(" tests "),t("code",[e._v("exp")]),e._v(" and if the result is "),t("code",[e._v("true")]),e._v(", line "),t("strong",[e._v("[1]")]),e._v(" is executed, otherwise line "),t("strong",[e._v("[2]")]),e._v(" is executed.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("[1]")]),e._v(" "),t("code",[e._v("return")]),e._v(" says, “Leave the function and produce this value as the function’s result.” Notice that "),t("code",[e._v("return")]),e._v(" can appear anywhere in a function and does not have to be at the end.")])]),e._v(" "),t("p",[e._v("Rather than using "),t("code",[e._v("return")]),e._v(" as in the previous example, you can use the "),t("code",[e._v("else")]),e._v(" keyword to produce the result as an expression:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// IfExpressions/OneOrTheOther.kt\n\nfun oneOrTheOther(exp: Boolean): String =\n  if (exp)\n    "True!" // No \'return\' necessary\n  else\n    "False"\n\nfun main() {\n  val x = 1\n  println(oneOrTheOther(x == 1))\n  println(oneOrTheOther(x == 2))\n}\n/* Output:\nTrue!\nFalse\n*/\n')])])]),t("p",[e._v("Instead of two expressions in "),t("code",[e._v("trueOrFalse()")]),e._v(", "),t("code",[e._v("oneOrTheOther()")]),e._v(" is a single expression. The result of that expression is the result of the function, so the "),t("code",[e._v("if")]),e._v(" expression becomes the function body.")]),e._v(" "),t("p",[e._v("​      *"),t("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.*")])])])}),[],!1,null,null,null);n.default=a.exports}}]);