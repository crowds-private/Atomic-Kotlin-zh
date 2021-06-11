(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{540:function(e,t,a){"use strict";a.r(t);var n=a(44),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lambdas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lambdas"}},[e._v("#")]),e._v(" Lambdas")]),e._v(" "),a("blockquote",[a("p",[e._v("Lambdas produce compact code that’s easier to understand.")])]),e._v(" "),a("p",[e._v("A "),a("em",[e._v("lambda")]),e._v(" (also called a "),a("em",[e._v("function literal")]),e._v(") is a low-ceremony function: it has no name, requires a minimal amount of code to create, and you can insert it directly into other code.")]),e._v(" "),a("p",[e._v("As a starting point, consider "),a("code",[e._v("map()")]),e._v(", which works with collections like "),a("code",[e._v("List")]),e._v(". The parameter for "),a("code",[e._v("map()")]),e._v("  is a transformation function which is applied to each element in a collection. "),a("code",[e._v("map()")]),e._v(" returns a new "),a("code",[e._v("List")]),e._v(" containing all the transformed elements. Here, we transform each "),a("code",[e._v("List")]),e._v(" item to a "),a("code",[e._v("String")]),e._v(" surrounded with "),a("code",[e._v("[]")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/BasicLambda.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 2, 3, 4)\n  val result = list.map({ n: Int -> "[$n]" })\n  result eq listOf("[1]", "[2]", "[3]", "[4]")\n}\n')])])]),a("p",[e._v("The lambda is the code within the curly braces used in the initialization of "),a("code",[e._v("result")]),e._v(". The parameter list is separated from the function body by an arrow "),a("code",[e._v("->")]),e._v(" (the same arrow used in "),a("code",[e._v("when")]),e._v(" expressions).")]),e._v(" "),a("p",[e._v("The function body can be one or more expressions. The final expression becomes the return value of the lambda.")]),e._v(" "),a("p",[a("code",[e._v("BasicLambda.kt")]),e._v(" shows the full lambda syntax, but this can often be simplified. We typically create and use a lambda in place, which means Kotlin can usually infer type information. Here, the type of "),a("code",[e._v("n")]),e._v(" is inferred:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/LambdaTypeInference.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 2, 3, 4)\n  val result = list.map({ n -> "[$n]" })\n  result eq listOf("[1]", "[2]", "[3]", "[4]")\n}\n')])])]),a("p",[e._v("Kotlin can tell "),a("code",[e._v("n")]),e._v(" is an "),a("code",[e._v("Int")]),e._v(" because the lambda is being used with a "),a("code",[e._v("List<Int>")]),e._v(".")]),e._v(" "),a("p",[e._v("If there’s only a single parameter, Kotlin generates the name "),a("code",[e._v("it")]),e._v(" for that parameter, which means we no longer need the "),a("code",[e._v("n ->")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/LambdaIt.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 2, 3, 4)\n  val result = list.map({ "[$it]" })\n  result eq listOf("[1]", "[2]", "[3]", "[4]")\n}\n')])])]),a("p",[a("code",[e._v("map()")]),e._v(" works with a "),a("code",[e._v("List")]),e._v(" of any type. Here, Kotlin infers the type of the lambda argument "),a("code",[e._v("it")]),e._v(" to be "),a("code",[e._v("Char")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/Mapping.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(\'a\', \'b\', \'c\', \'d\')\n  val result =\n    list.map({ "[${it.toUpperCase()}]" })\n  result eq listOf("[A]", "[B]", "[C]", "[D]")\n}\n')])])]),a("p",[e._v("If the lambda is the only function argument, or the last argument, you can remove the parentheses around the curly braces, producing cleaner syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/OmittingParentheses.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(\'a\', \'b\', \'c\', \'d\')\n  val result =\n    list.map { "[${it.toUpperCase()}]" }\n  result eq listOf("[A]", "[B]", "[C]", "[D]")\n}\n')])])]),a("p",[e._v("If the function takes more than one argument, all except the last lambda argument must be in parentheses. For example, you can specify the last argument for "),a("code",[e._v("joinToString()")]),e._v(" as a lambda. The lambda is used to transform each element to a "),a("code",[e._v("String")]),e._v(", then all the elements are joined:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/JoinToString.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(9, 11, 23, 32)\n  list.joinToString(" ") { "[$it]" } eq\n    "[9] [11] [23] [32]"\n}\n')])])]),a("p",[e._v("If you want to provide the lambda as a named argument, you must place the lambda inside the parentheses of the argument list:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/LambdaAndNamedArgs.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(9, 11, 23, 32)\n  list.joinToString(\n    separator = " ",\n    transform = { "[$it]" }\n  ) eq "[9] [11] [23] [32]"\n}\n')])])]),a("p",[e._v("Here’s the syntax for a lambda with more than one parameter:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/TwoArgLambda.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(\'a\', \'b\', \'c\')\n  list.mapIndexed { index, element ->\n    "[$index: $element]"\n  } eq listOf("[0: a]", "[1: b]", "[2: c]")\n}\n')])])]),a("p",[e._v("This uses the "),a("code",[e._v("mapIndexed()")]),e._v(" library function, which takes each element in "),a("code",[e._v("list")]),e._v(" and produces the index of that element together with the element. The lambda that we apply after "),a("code",[e._v("mapIndexed()")]),e._v(" requires two arguments to match the index and the element (which is a character, in the case of "),a("code",[e._v("List<Char>")]),e._v(").")]),e._v(" "),a("p",[e._v("If you aren’t using a particular argument, you can ignore it using an underscore to eliminate compiler warnings about unused identifiers:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/Underscore.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(\'a\', \'b\', \'c\')\n  list.mapIndexed { index, _ ->\n    "[$index]"\n  } eq listOf("[0]", "[1]", "[2]")\n}\n')])])]),a("p",[e._v("Note that "),a("code",[e._v("Underscore.kt")]),e._v(" can be rewritten using "),a("code",[e._v("list.indices")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/ListIndicesMap.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(\'a\', \'b\', \'c\')\n  list.indices.map {\n    "[$it]"\n  } eq listOf("[0]", "[1]", "[2]")\n}\n')])])]),a("p",[e._v("Lambdas can have zero parameters, in which case you can leave the arrow for emphasis, but the Kotlin style guide recommends omitting the arrow:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Lambdas/ZeroArguments.kt\nimport atomictest.*\n\nfun main() {\n  run { -> trace("A Lambda") }\n  run { trace("Without args") }\n  trace eq """\n    A Lambda\n    Without args\n  """\n}\n')])])]),a("p",[e._v("The standard library "),a("code",[e._v("run()")]),e._v(" simply calls its lambda argument.")]),e._v(" "),a("ul",[a("li",[e._v("-")])]),e._v(" "),a("p",[e._v("You can use a lambda anywhere you use a regular function, but if the lambda becomes too complex it’s often better to define a named function, for clarity, even if you’re only going to use it once.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);