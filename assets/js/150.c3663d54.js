(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{528:function(e,n,t){"use strict";t.r(n);var o=t(44),s=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"when-expressions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-expressions"}},[e._v("#")]),e._v(" "),t("code",[e._v("when")]),e._v(" Expressions")]),e._v(" "),t("blockquote",[t("p",[e._v("A large part of computer programming is performing an action when a pattern matches.")])]),e._v(" "),t("p",[e._v("Anything that simplifies this task is a boon for programmers. If you have more than two or three choices to make, "),t("em",[e._v("when expressions")]),e._v(" are much nicer than ["),t("code",[e._v("if")]),e._v(" expressions](javascript:void(0)).")]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("when")]),e._v(" expression compares a value against a selection of possibilities. It begins with the keyword "),t("code",[e._v("when")]),e._v(" and the parenthesized value to compare. This is followed by a body containing a set of possible matches and their associated actions. Each match is an expression followed by a right arrow "),t("code",[e._v("->")]),e._v(". The arrow is the two separate characters "),t("code",[e._v("-")]),e._v(" and "),t("code",[e._v(">")]),e._v(" with no white space between them. The expression is evaluated and compared to the target value. If it matches, the expression to the right of the "),t("code",[e._v("->")]),e._v(" produces the result of the "),t("code",[e._v("when")]),e._v(" expression.")]),e._v(" "),t("p",[t("code",[e._v("ordinal()")]),e._v(" in the following example builds the German word for an ordinal number based on a word for the cardinal number. It matches an integer to a fixed set of numbers to check whether it applies to a general rule or is an exception (which happens painfully often in German):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// WhenExpressions/GermanOrdinals.kt\npackage whenexpressions\nimport atomictest.eq\n\nval numbers = mapOf(\n  1 to "eins", 2 to "zwei", 3 to "drei",\n  4 to "vier", 5 to "fuenf", 6 to "sechs",\n  7 to "sieben", 8 to "acht", 9 to "neun",\n  10 to "zehn", 11 to "elf", 12 to "zwoelf",\n  13 to "dreizehn", 14 to "vierzehn",\n  15 to "fuenfzehn", 16 to "sechzehn",\n  17 to "siebzehn", 18 to "achtzehn",\n  19 to "neunzehn", 20 to "zwanzig"\n)\n\nfun ordinal(i: Int): String =\n  when (i) {                            // [1]\n    1 -> "erste"                        // [2]\n    3 -> "dritte"\n    7 -> "siebte"\n    8 -> "achte"\n    20 -> "zwanzigste"\n    else -> numbers.getValue(i) + "te"  // [3]\n  }\n\nfun main() {\n  ordinal(2) eq "zweite"\n  ordinal(3) eq "dritte"\n  ordinal(11) eq "elfte"\n}\n')])])]),t("ul",[t("li",[t("strong",[e._v("[1]")]),e._v(" The "),t("code",[e._v("when")]),e._v(" expression compares "),t("code",[e._v("i")]),e._v(" to the match expressions in the body.")]),e._v(" "),t("li",[t("strong",[e._v("[2]")]),e._v(" The first successful match completes execution of the "),t("code",[e._v("when")]),e._v(" expression—here, a "),t("code",[e._v("String")]),e._v(" is produced which becomes the return value of "),t("code",[e._v("ordinal()")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("[3]")]),e._v(" The "),t("code",[e._v("else")]),e._v(" keyword provides a “fall through” when there are no matches. The "),t("code",[e._v("else")]),e._v(" case always appears last in the match list. When we test against "),t("code",[e._v("2")]),e._v(", it doesn’t match 1, 3, 7, 8 or 20, and so falls through to the "),t("code",[e._v("else")]),e._v(" case.")])]),e._v(" "),t("p",[e._v("If you forget the "),t("code",[e._v("else")]),e._v(" branch in the example above, the compile-time error is: "),t("em",[e._v("‘when’ expression must be exhaustive, add necessary ‘else’ branch")]),e._v(". If you treat a "),t("code",[e._v("when")]),e._v(" expression as a statement—that is, you don’t use the result of the "),t("code",[e._v("when")]),e._v("—you can omit the "),t("code",[e._v("else")]),e._v(" branch. Unmatched values are then just ignored.")]),e._v(" "),t("p",[e._v("In the following example, "),t("code",[e._v("Coordinates")]),e._v(" reports changes to its properties using [Property Accessors](javascript:void(0)). The "),t("code",[e._v("when")]),e._v(" expression processes each item from "),t("code",[e._v("inputs")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// WhenExpressions/AnalyzeInput.kt\npackage whenexpressions\nimport atomictest.*\n\nclass Coordinates {\n  var x: Int = 0\n    set(value) {\n      trace("x gets $value")\n      field = value\n    }\n  var y: Int = 0\n    set(value) {\n      trace("y gets $value")\n      field = value\n    }\n  override fun toString() = "($x, $y)"\n}\n\nfun processInputs(inputs: List<String>) {\n  val coordinates = Coordinates()\n  for (input in inputs) {\n    when (input) {                   // [1]\n      "up", "u" -> coordinates.y--   // [2]\n      "down", "d" -> coordinates.y++\n      "left", "l" -> coordinates.x--\n      "right", "r" -> {              // [3]\n        trace("Moving right")\n        coordinates.x++\n      }\n      "nowhere" -> {}                // [4]\n      "exit" -> return               // [5]\n      else -> trace("bad input: $input")\n    }\n  }\n}\n\nfun main() {\n  processInputs(listOf("up", "d", "nowhere",\n    "left",  "right", "exit", "r"))\n  trace eq """\n    y gets -1\n    y gets 0\n    x gets -1\n    Moving right\n    x gets 0\n  """\n}\n')])])]),t("ul",[t("li",[t("strong",[e._v("[1]")]),e._v(" "),t("code",[e._v("input")]),e._v(" is matched against the different options.")]),e._v(" "),t("li",[t("strong",[e._v("[2]")]),e._v(" You can list several values in one branch using commas. Here, if the user enters either “up” or “u” we interpret it as a move up.")]),e._v(" "),t("li",[t("strong",[e._v("[3]")]),e._v(" Multiple actions within a branch must be in a block body.")]),e._v(" "),t("li",[t("strong",[e._v("[4]")]),e._v(" “Doing nothing” is expressed with an empty block.")]),e._v(" "),t("li",[t("strong",[e._v("[5]")]),e._v(" Returning from the outer function is a valid action within a branch. In this case, the "),t("code",[e._v("return")]),e._v(" terminates the call to "),t("code",[e._v("processInputs()")]),e._v(".")])]),e._v(" "),t("p",[e._v("Any expression can be an argument for "),t("code",[e._v("when")]),e._v(", and the matches can be any values (not just constants):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// WhenExpressions/MatchingAgainstVals.kt\nimport atomictest.*\n\nfun main() {\n  val yes = "A"\n  val no = "B"\n  for (choice in listOf(yes, no, yes)) {\n    when (choice) {\n      yes -> trace("Hooray!")\n      no -> trace("Too bad!")\n    }\n    // The same logic using \'if\':\n    if (choice == yes) trace("Hooray!")\n    else if (choice == no) trace("Too bad!")\n  }\n  trace eq """\n    Hooray!\n    Hooray!\n    Too bad!\n    Too bad!\n    Hooray!\n    Hooray!\n  """\n}\n')])])]),t("p",[t("code",[e._v("when")]),e._v(" expressions can overlap the functionality of "),t("code",[e._v("if")]),e._v(" expressions. "),t("code",[e._v("when")]),e._v(" is more flexible, so prefer it over "),t("code",[e._v("if")]),e._v(" when there’s a choice.")]),e._v(" "),t("p",[e._v("We can match a "),t("code",[e._v("Set")]),e._v(" of values against another "),t("code",[e._v("Set")]),e._v(" of values:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// WhenExpressions/MixColors.kt\npackage whenexpressions\nimport atomictest.eq\n\nfun mixColors(first: String, second: String) =\n  when (setOf(first, second)) {\n    setOf("red", "blue") -> "purple"\n    setOf("red", "yellow") -> "orange"\n    setOf("blue", "yellow") -> "green"\n    else -> "unknown"\n  }\n\nfun main() {\n  mixColors("red", "blue") eq "purple"\n  mixColors("blue", "red") eq "purple"\n  mixColors("blue", "purple") eq "unknown"\n}\n')])])]),t("p",[e._v("Inside "),t("code",[e._v("mixColors()")]),e._v(" we use a "),t("code",[e._v("Set")]),e._v(" as a "),t("code",[e._v("when")]),e._v(" argument and compare it with different "),t("code",[e._v("Set")]),e._v("s. We use a "),t("code",[e._v("Set")]),e._v(" because the order of elements is unimportant—we need the same result when we mix “red” and “blue” as when we mix “blue” and “red.”")]),e._v(" "),t("p",[t("code",[e._v("when")]),e._v(" has a special form that takes no argument. Omitting the argument means the branches can check different "),t("code",[e._v("Boolean")]),e._v(" conditions. You can use any Boolean expression as a branch condition. As an example, we rewrite "),t("code",[e._v("bmiMetric()")]),e._v(" introduced in [Number Types](javascript:void(0)), first showing the original solution, then using "),t("code",[e._v("when")]),e._v(" instead of "),t("code",[e._v("if")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// WhenExpressions/BmiWhen.kt\npackage whenexpressions\nimport atomictest.eq\n\nfun bmiMetricOld(\n  kg: Double,\n  heightM: Double\n): String {\n  val bmi = kg / (heightM * heightM)\n  return if (bmi < 18.5) "Underweight"\n    else if (bmi < 25) "Normal weight"\n    else "Overweight"\n}\n\nfun bmiMetricWithWhen(\n  kg: Double,\n  heightM: Double\n): String {\n  val bmi = kg / (heightM * heightM)\n  return when {\n    bmi < 18.5 -> "Underweight"\n    bmi < 25 -> "Normal weight"\n    else -> "Overweight"\n  }\n}\n\nfun main() {\n  bmiMetricOld(72.57, 1.727) eq\n    bmiMetricWithWhen(72.57, 1.727)\n}\n')])])]),t("p",[e._v("The solution using "),t("code",[e._v("when")]),e._v(" is a more elegant way to choose between several options.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);