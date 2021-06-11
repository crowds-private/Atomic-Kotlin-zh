(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{486:function(e,a,n){"use strict";n.r(a);var t=n(44),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"operator-overloading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#operator-overloading"}},[e._v("#")]),e._v(" Operator Overloading")]),e._v(" "),n("blockquote",[n("p",[e._v("In the context of computer programming, "),n("em",[e._v("overloading")]),e._v(" means “adding extra meaning to something that already exists.”")])]),e._v(" "),n("p",[n("em",[e._v("Operator overloading")]),e._v(" allows you to take an operator like "),n("code",[e._v("+")]),e._v(" and give it meaning for your new type, or extra meaning for an existing type.")]),e._v(" "),n("p",[e._v("Operator overloading has a tumultuous past. It was popularized in C++, but because C++ had no garbage collection, writing overloaded operators was difficult. As a result, the early Java designers deemed operator overloading “bad” and didn’t allow it in Java, even though Java’s garbage collection would have made it relatively easy. The simplicity of operator overloading when supported by garbage collection was demonstrated in the Python language, which constrained you to a limited (familiar) set of operators, as did C++. Scala then experimented with allowing you to invent your own operators, causing some programmers to abuse this feature and create incomprehensible code. Kotlin learned from these languages, and has simplified the process of operator overloading but restricts your choices to a reasonable and familiar set of operators. In addition, the rules of operator precedence cannot be changed.")]),e._v(" "),n("p",[e._v("We’ll create a small class "),n("code",[e._v("Num")]),e._v(" and add an overloaded "),n("code",[e._v("+")]),e._v(" as an extension function. To overload an operator you use the "),n("code",[e._v("operator")]),e._v(" keyword before "),n("code",[e._v("fun")]),e._v(", followed by the special predefined function name for that operator. For example, the special function name for the "),n("code",[e._v("+")]),e._v(" operator is "),n("code",[e._v("plus()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/Num.kt\npackage operatoroverloading\nimport atomictest.eq\n\ndata class Num(val n: Int)\n\noperator fun Num.plus(rval: Num) =\n  Num(n + rval.n)\n\nfun main() {\n  Num(4) + Num(5) eq Num(9)\n  Num(4).plus(Num(5)) eq Num(9)\n}\n")])])]),n("p",[e._v("If you were defining a normal (non-operator) function for use between two operands, you’d use the "),n("code",[e._v("infix")]),e._v(" keyword, but operators are already "),n("code",[e._v("infix")]),e._v(". Because "),n("code",[e._v("plus()")]),e._v(" is an ordinary function, you can also call it in the conventional way.")]),e._v(" "),n("p",[e._v("When you define an operator as a member function, you can access "),n("code",[e._v("private")]),e._v(" elements in a class that an extension function cannot:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/MemberOperator.kt\npackage operatoroverloading\nimport atomictest.eq\n\ndata class Num2(private val n: Int) {\n  operator fun plus(rval: Num2) =\n    Num2(n + rval.n)\n}\n\n// Cannot access 'n': it is private in 'Num2':\n// operator fun Num2.minus(rval: Num2) =\n//   Num2(n - rval.n)\n\nfun main() {\n  Num2(4) + Num2(5) eq Num2(9)\n}\n")])])]),n("p",[e._v("In some contexts it’s helpful to create special meaning for an operator. Here, we model a "),n("code",[e._v("Molecule")]),e._v(" with a "),n("code",[e._v("+")]),e._v(" that attaches it to another "),n("code",[e._v("Molecule")]),e._v(". The "),n("code",[e._v("attached")]),e._v(" property is the link between "),n("code",[e._v("Molecule")]),e._v("s:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/Molecule.kt\npackage operatoroverloading\nimport atomictest.eq\n\ndata class Molecule(\n  val id: Int = idCount++,\n  var attached: Molecule? = null\n) {\n  companion object {\n    private var idCount = 0\n  }\n  operator fun plus(other: Molecule) {\n    attached = other\n  }\n}\n\nfun main() {\n  val m1 = Molecule()\n  val m2 = Molecule()\n  m1 + m2                       // [1]\n  m1 eq "Molecule(id=0, attached=" +\n    "Molecule(id=1, attached=null))"\n}\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" Reads like a familiar math expression, but to the person using the model it might be an especially meaningful syntax.")])]),e._v(" "),n("p",[e._v("This example is incomplete; if you add the line "),n("code",[e._v("m2 + m1")]),e._v(", then try to display "),n("code",[e._v("m2")]),e._v(", you’ll get a stack overflow (can you fix the problem?).")]),e._v(" "),n("h3",{attrs:{id:"equality"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#equality"}},[e._v("#")]),e._v(" Equality")]),e._v(" "),n("p",[e._v("Invoking "),n("code",[e._v("==")]),e._v(" (equality) or "),n("code",[e._v("!=")]),e._v(" (inequality) calls the "),n("code",[e._v("equals()")]),e._v(" member function. "),n("code",[e._v("data")]),e._v(" classes automatically redefine "),n("code",[e._v("equals()")]),e._v(" to compare the stored data, but if you don’t redefine "),n("code",[e._v("equals()")]),e._v(" for non-"),n("code",[e._v("data")]),e._v(" classes, the default version compares references rather than contents:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/DefaultEquality.kt\npackage operatoroverloading\nimport atomictest.eq\n\nclass A(val i: Int)\ndata class D(val i: Int)\n\nfun main() {\n  // Normal class:\n  val a = A(1)\n  val b = A(1)\n  val c = a\n  (a == b) eq false\n  (a == c) eq true\n  // Data class:\n  val d = D(1)\n  val e = D(1)\n  (d == e) eq true\n}\n")])])]),n("p",[n("code",[e._v("a")]),e._v(" and "),n("code",[e._v("b")]),e._v(" refer to different objects in memory, so the references are different and "),n("code",[e._v("a == b")]),e._v(" is "),n("code",[e._v("false")]),e._v(", even though the two objects store identical data. "),n("code",[e._v("a")]),e._v(" and "),n("code",[e._v("c")]),e._v(" refer to the same object in memory, so comparing them produces "),n("code",[e._v("true")]),e._v(". Because the "),n("code",[e._v("data class D")]),e._v(" automatically generates an "),n("code",[e._v("equals()")]),e._v(" that looks at the contents of "),n("code",[e._v("D")]),e._v(", "),n("code",[e._v("d == e")]),e._v(" produces "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("equals()")]),e._v(" is the only operator that cannot be an extension function; it must be overridden as a member function. When defining your own "),n("code",[e._v("equals()")]),e._v(", you are overriding the default "),n("code",[e._v("equals(other: Any?)")]),e._v(". Notice that the type of "),n("code",[e._v("other")]),e._v(" is "),n("code",[e._v("Any?")]),e._v(" rather than the specific type of your class. This allows you to compare your type with other types, which means you must choose the types allowed for comparison:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/DefiningEquality.kt\npackage operatoroverloading\nimport atomictest.eq\n\nclass E(var v: Int) {\n  override fun equals(other: Any?) = when {\n    this === other -> true           // [1]\n    other !is E -> false             // [2]\n    else -> v == other.v             // [3]\n  }\n  override fun hashCode(): Int = v\n  override fun toString() = "E($v)"\n}\n\nfun main() {\n  val a = E(1)\n  val b = E(2)\n  (a == b) eq false   // a.equals(b)\n  (a != b) eq true    // !a.equals(b)\n  // Reference equality:\n  (E(1) === E(1)) eq false\n}\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" This is an optimization: if "),n("code",[e._v("other")]),e._v(" refers to the same object in memory, the result is automatically "),n("code",[e._v("true")]),e._v(". The triple equality symbol "),n("code",[e._v("===")]),e._v(" tests for reference equality.")]),e._v(" "),n("li",[n("strong",[e._v("[2]")]),e._v(" This determines that the type of "),n("code",[e._v("other")]),e._v(" must be the same as the current type. For "),n("code",[e._v("E")]),e._v(" to be compared to other types, add further match expressions.")]),e._v(" "),n("li",[n("strong",[e._v("[3]")]),e._v(" This compares the stored data. At this point the compiler knows that "),n("code",[e._v("other")]),e._v(" is of type "),n("code",[e._v("E")]),e._v(", so we can access "),n("code",[e._v("other.v")]),e._v(" without a cast.")])]),e._v(" "),n("p",[e._v("When overriding "),n("code",[e._v("equals()")]),e._v(" you should also override "),n("code",[e._v("hashCode()")]),e._v(". This is a complex topic, but the basic rule is that if two objects are equal, they must produce the same "),n("code",[e._v("hashCode()")]),e._v(" value. Standard data structures like "),n("code",[e._v("Map")]),e._v(" and "),n("code",[e._v("Set")]),e._v(" will fail without this rule. Things get even more complicated with an "),n("code",[e._v("open")]),e._v(" class because you must compare an instance with all possible subclasses. You can learn more about the concept of hashing in "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_function",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Defining a proper "),n("code",[e._v("equals()")]),e._v(" and "),n("code",[e._v("hashCode()")]),e._v(" is beyond the scope of this book—what we do here illustrates the concept and works for our simple example but won’t work for more complicated cases. This complexity is the reason that "),n("code",[e._v("data")]),e._v(" classes create their own "),n("code",[e._v("equals()")]),e._v(" and "),n("code",[e._v("hashCode()")]),e._v(". If you must define your own "),n("code",[e._v("equals()")]),e._v(" and "),n("code",[e._v("hashCode()")]),e._v(", we recommend automatically generating them using IntelliJ IDEA or Android Studio with the action "),n("a",{attrs:{href:"https://www.jetbrains.com/help/idea/generating-code.html#generate-equals-hashcode",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("Generate -> equals and hashCode")]),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("When you compare nullable objects using "),n("code",[e._v("==")]),e._v(", Kotlin enforces "),n("code",[e._v("null")]),e._v("-checking. This can be achieved using either "),n("code",[e._v("if")]),e._v(" or the Elvis operator:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/EqualsForNullable.kt\npackage operatoroverloading\nimport atomictest.eq\n\nfun equalsWithIf(a: E?, b: E?) =\n  if (a === null)\n    b === null\n  else\n    a == b\n\nfun equalsWithElvis(a: E?, b: E?) =\n  a?.equals(b) ?: (b === null)\n\nfun main() {\n  val x: E? = null\n  val y = E(0)\n  val z: E? = null\n  (x == y) eq false\n  (x == z) eq true\n  equalsWithIf(x, y) eq false\n  equalsWithIf(x, z) eq true\n  equalsWithElvis(x, y) eq false\n  equalsWithElvis(x, z) eq true\n}\n")])])]),n("p",[n("code",[e._v("equalsWithIf()")]),e._v(" first checks to see if the reference "),n("code",[e._v("a")]),e._v(" is "),n("code",[e._v("null")]),e._v(", in which case the only way the two can be equal is if the reference "),n("code",[e._v("b")]),e._v(" is also "),n("code",[e._v("null")]),e._v(". If "),n("code",[e._v("a")]),e._v(" is not a "),n("code",[e._v("null")]),e._v(" reference, the member "),n("code",[e._v("equals()")]),e._v(" is used to compare the two. "),n("code",[e._v("equalsWithElvis()")]),e._v(" achieves the same effect, but more succinctly using both "),n("code",[e._v("?.")]),e._v(" and "),n("code",[e._v("?:")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"arithmetic-operators"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-operators"}},[e._v("#")]),e._v(" Arithmetic operators")]),e._v(" "),n("p",[e._v("We can define basic arithmetic operators as extensions to "),n("code",[e._v("class E")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/ArithmeticOperators.kt\npackage operatoroverloading\nimport atomictest.eq\n\n// Unary operators:\noperator fun E.unaryPlus() = E(v)\noperator fun E.unaryMinus() = E(-v)\noperator fun E.not() = this\n\n// Increment/decrement:\noperator fun E.inc() = E(v + 1)\noperator fun E.dec() = E(v - 1)\n\nfun unary(a: E) {\n  +a               // unaryPlus()\n  -a               // unaryMinus()\n  !a               // not()\n\n  var b = a\n  b++             // inc() (must be var)\n  b--             // dec() (must be var)\n}\n\n// Binary operators:\noperator fun E.plus(e: E) = E(v + e.v)\noperator fun E.minus(e: E) = E(v - e.v)\noperator fun E.times(e: E) = E(v * e.v)\noperator fun E.div(e: E) = E(v % e.v)\noperator fun E.rem(e: E) = E(v / e.v)\n\nfun binary(a: E, b: E) {\n  a + b            // a.plus(b)\n  a - b            // a.minus(b)\n  a * b            // a.times(b)\n  a / b            // a.div(b)\n  a % b            // a.rem(b)\n}\n\n// Augmented assignment:\noperator fun E.plusAssign(e: E) { v += e.v }\noperator fun E.minusAssign(e: E) { v - e.v }\noperator fun E.timesAssign(e: E) { v *= e.v }\noperator fun E.divAssign(e: E) { v /= e.v }\noperator fun E.remAssign(e: E) { v %= e.v }\n\nfun assignment(a: E, b: E) {\n  a += b           // a.plusAssign(b)\n  a -= b           // a.minusAssign(b)\n  a *= b           // a.timesAssign(b)\n  a /= b           // a.divAssign(b)\n  a %= b           // a.remAssign(b)\n}\n\nfun main() {\n  val a = E(2)\n  val b = E(3)\n  a + b eq E(5)\n  a * b eq E(6)\n  val x = E(1)\n  x += b * b\n  x eq E(10)\n}\n")])])]),n("p",[e._v("When writing an extension, remember that the properties and functions of the extended type are implicitly available. In the definition of "),n("code",[e._v("unaryPlus()")]),e._v(", for example, the "),n("code",[e._v("v")]),e._v(" in "),n("code",[e._v("E(v)")]),e._v(" is the "),n("code",[e._v("v")]),e._v(" property from the "),n("code",[e._v("E")]),e._v(" that’s being extended.")]),e._v(" "),n("p",[e._v("Note that "),n("code",[e._v("x += e")]),e._v(" can be resolved to either "),n("code",[e._v("x = x.plus(e)")]),e._v(" if "),n("code",[e._v("x")]),e._v(" is a "),n("code",[e._v("var")]),e._v(" or to "),n("code",[e._v("x.plusAssign(e)")]),e._v(" if "),n("code",[e._v("x")]),e._v(" is "),n("code",[e._v("val")]),e._v(" and the corresponding "),n("code",[e._v("plusAssign()")]),e._v(" member is available. If both options work, the compiler emits an error indicating that it can’t choose.")]),e._v(" "),n("p",[e._v("The parameter can be of a different type than the type the operator extends. Here, the "),n("code",[e._v("+")]),e._v(" operator extension for "),n("code",[e._v("E")]),e._v(" takes an "),n("code",[e._v("Int")]),e._v(" parameter:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/DifferentTypes.kt\npackage operatoroverloading\nimport atomictest.eq\n\noperator fun E.plus(i: Int) = E(v + i)\n\nfun main() {\n  E(1) + 10 eq E(11)\n}\n")])])]),n("p",[e._v("Operator precedence is fixed, and is identical for both built-in types and custom types. For example, multiplication has a higher precedence than addition, and both have higher precedence than equality; thus "),n("code",[e._v("1 + 2 * 3 == 7")]),e._v(" is "),n("code",[e._v("true")]),e._v(". You can find the operator precedence table in the "),n("a",{attrs:{href:"https://kotlinlang.org/docs/reference/grammar.html#expressions",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Sometimes when you mix arithmetic and programming operators, the result isn’t obvious. Here, we combine "),n("code",[e._v("+")]),e._v(" and the Elvis operator:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/ConfusingPrecedence.kt\npackage operatoroverloading\nimport atomictest.eq\n\nfun main() {\n  val x: Int? = 1\n  val y: Int = 2\n  val sum = x ?: 0 + y\n  sum eq 1\n  (x ?: 0) + y eq 3    // [1]\n  x ?: (0 + y) eq 1    // [2]\n}\n")])])]),n("p",[e._v("In "),n("code",[e._v("sum")]),e._v(", "),n("code",[e._v("+")]),e._v(" has higher precedence than the Elvis operator "),n("code",[e._v("?:")]),e._v(" so the result is "),n("code",[e._v("1?: (0 + 2) == 1")]),e._v(". This might be not what the programmer intended. When mixing different operations where precedence is not obvious, we recommend adding parentheses as in lines "),n("strong",[e._v("[1]")]),e._v(" and "),n("strong",[e._v("[2]")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"comparison"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),n("p",[e._v("All comparison operations "),n("code",[e._v("<")]),e._v(", "),n("code",[e._v(">")]),e._v(", "),n("code",[e._v("<=")]),e._v(", "),n("code",[e._v(">=")]),e._v(" are automatically available when you define "),n("code",[e._v("compareTo()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/Comparison.kt\npackage operatoroverloading\nimport atomictest.eq\n\noperator fun E.compareTo(e: E): Int =\n  v.compareTo(e.v)\n\nfun main() {\n  val a = E(2)\n  val b = E(3)\n  (a < b) eq true     // a.compareTo(b) < 0\n  (a > b) eq false    // a.compareTo(b) > 0\n  (a <= b) eq true    // a.compareTo(b) <= 0\n  (a >= b) eq false   // a.compareTo(b) >= 0\n}\n")])])]),n("p",[n("code",[e._v("compareTo()")]),e._v(" must return an "),n("code",[e._v("Int")]),e._v(" indicating:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("0")]),e._v(" if the elements are equal.")]),e._v(" "),n("li",[e._v("A positive value if the first element (the receiver) is bigger than the second (the argument).")]),e._v(" "),n("li",[e._v("A negative value if the first element is smaller than the second.")])]),e._v(" "),n("h3",{attrs:{id:"ranges-and-containers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ranges-and-containers"}},[e._v("#")]),e._v(" Ranges and Containers")]),e._v(" "),n("p",[n("code",[e._v("rangeTo()")]),e._v(" overloads the "),n("code",[e._v("..")]),e._v(" operator for creating ranges, while "),n("code",[e._v("contains()")]),e._v(" indicates whether a value is within a range:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/Ranges.kt\npackage operatoroverloading\nimport atomictest.eq\n\ndata class R(val r: IntRange) { // Range\n  override fun toString() = "R($r)"\n}\n\noperator fun E.rangeTo(e: E) = R(v..e.v)\n\noperator fun R.contains(e: E): Boolean =\n  e.v in r\n\nfun main() {\n  val a = E(2)\n  val b = E(3)\n  val r = a..b        // a.rangeTo(b)\n  (a in r) eq true    // r.contains(a)\n  (a !in r) eq false  // !r.contains(a)\n  r eq R(2..3)\n}\n')])])]),n("h3",{attrs:{id:"container-access"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container-access"}},[e._v("#")]),e._v(" Container Access")]),e._v(" "),n("p",[e._v("Overloading "),n("code",[e._v("contains()")]),e._v(" allows you to check whether a value is "),n("code",[e._v("in")]),e._v(" a container, while "),n("code",[e._v("get()")]),e._v(" and "),n("code",[e._v("set()")]),e._v(" support reading and assigning elements in a container using square brackets:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/ContainerAccess.kt\npackage operatoroverloading\nimport atomictest.eq\n\ndata class C(val c: MutableList<Int>) {\n  override fun toString() = "C($c)"\n}\n\noperator fun C.contains(e: E) = e.v in c\n\noperator fun C.get(i: Int): E = E(c[i])\n\noperator fun C.set(i: Int, e: E) {\n  c[i] = e.v\n}\n\nfun main() {\n  val c = C(mutableListOf(2, 3))\n  (E(2) in c) eq true  // c.contains(E(2))\n  (E(4) in c) eq false // c.contains(E(4))\n  c[1] eq E(3)         // c.get(1)\n  c[1] = E(4)          // c.set(2, E(4))\n  c eq C(mutableListOf(2, 4))\n}\n')])])]),n("p",[e._v("In IntelliJ IDEA or Android Studio you can "),n("a",{attrs:{href:"https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#go_to_declaration",target:"_blank",rel:"noopener noreferrer"}},[e._v("navigate "),n("OutboundLink")],1),e._v(" to a declaration of a function or a class from its usage. This also works with operators: you can put the cursor on "),n("code",[e._v("..")]),e._v(" then navigate to its definition to see which operator function is called.")]),e._v(" "),n("h3",{attrs:{id:"invoke"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#invoke"}},[e._v("#")]),e._v(" Invoke")]),e._v(" "),n("p",[e._v("Placing parentheses after an object generates a call to "),n("code",[e._v("invoke()")]),e._v(", so the "),n("code",[e._v("invoke()")]),e._v(" operator makes an object look like a function. You can define "),n("code",[e._v("invoke()")]),e._v(" with any number of parameters:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/Invoke.kt\npackage operatoroverloading\nimport atomictest.eq\n\nclass Func {\n  operator fun invoke() = "invoke()"\n  operator fun invoke(i: Int) = "invoke($i)"\n  operator fun invoke(i: Int, j: String) =\n    "invoke($i, $j)"\n  operator fun invoke(\n    i: Int, j: String, k: Double\n  ) = "invoke($i, $j, $k)"\n}\n\nfun main() {\n  val f = Func()\n  f() eq "invoke()"\n  f(22) eq "invoke(22)"\n  f(22, "Hi") eq "invoke(22, Hi)"\n  f(22, "Three", 3.1416) eq\n    "invoke(22, Three, 3.1416)"\n}\n')])])]),n("p",[e._v("You can also define "),n("code",[e._v("invoke()")]),e._v(" with "),n("code",[e._v("vararg")]),e._v(" to work with any number of arguments of the same type (see [Variable Argument Lists](javascript:void(0))).")]),e._v(" "),n("p",[n("code",[e._v("invoke()")]),e._v(" can be defined as an extension function. Here, it’s an extension for "),n("code",[e._v("String")]),e._v(", taking a function as a parameter and calling that function on the "),n("code",[e._v("String")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/StringInvoke.kt\npackage operatoroverloading\nimport atomictest.eq\n\noperator fun String.invoke(\n  f: (s: String) -> String\n) = f(this)\n\nfun main() {\n  "mumbling" { it.toUpperCase() } eq\n    "MUMBLING"\n}\n')])])]),n("p",[e._v("Because the lambda is the final "),n("code",[e._v("invoke()")]),e._v(" argument, it can be called without parentheses.")]),e._v(" "),n("p",[e._v("If you have a function reference, you can use it to call the function directly using parentheses or via "),n("code",[e._v("invoke()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/InvokeFunctionType.kt\npackage operatoroverloading\nimport atomictest.eq\n\nfun main() {\n  val func: (String) -> Int = { it.length }\n  func("abc") eq 3\n  func.invoke("abc") eq 3\n\n  val nullableFunc: ((String) -> Int)? = null\n  if (nullableFunc != null) {\n    nullableFunc("abc")\n  }\n  nullableFunc?.invoke("abc")  // [1]\n}\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" If a function reference is nullable, you can combine "),n("code",[e._v("invoke()")]),e._v(" and safe access.")])]),e._v(" "),n("p",[e._v("The most common use for a custom "),n("code",[e._v("invoke()")]),e._v(" is when creating DSLs.")]),e._v(" "),n("h3",{attrs:{id:"function-names-in-backticks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-names-in-backticks"}},[e._v("#")]),e._v(" Function Names in Backticks")]),e._v(" "),n("p",[e._v("Kotlin allows spaces, certain nonstandard characters, and reserved words in a function name by placing that function name inside backticks:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// OperatorOverloading/Backticks.kt\npackage operatoroverloading\n\nfun `A long name with spaces`() = Unit\n\nfun `*how* is this working?`() = Unit\n\nfun `'when' is a keyword`() = Unit\n\n// fun `Illegal characters :<>`() = Unit\n\nfun main() {\n  `A long name with spaces`()\n  `*how* is this working?`()\n  `'when' is a keyword`()\n}\n")])])]),n("p",[e._v("This can be particularly helpful for [Unit Testing](javascript:void(0)) because you can create readable test names that include details about those tests. It also simplifies interactions with Java code.")]),e._v(" "),n("p",[e._v("You can easily create incomprehensible code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// OperatorOverloading/Swearing.kt\npackage operatoroverloading\nimport atomictest.eq\n\ninfix fun String.`#!%`(s: String) =\n  "$this Rowzafrazaca $s"\n\nfun main() {\n  "howdy" `#!%` "Ma\'am!" eq\n    "howdy Rowzafrazaca Ma\'am!"\n}\n')])])]),n("p",[e._v("Kotlin accepts this code, but what does it mean to the reader? Because code is read much more than it is written, you should make your programs as understandable as possible.")]),e._v(" "),n("ul",[n("li",[e._v("-")])]),e._v(" "),n("p",[e._v("Operator overloading is not an essential feature, but is an excellent example of how a language is more than just a way to manipulate the underlying computer. The challenge is crafting the language to provide better ways to express your abstractions, so humans have an easier time understanding the code without getting bogged down in needless detail. It’s possible to define operators in ways that obscure meaning, so tread carefully.")]),e._v(" "),n("p",[n("em",[e._v("Everything is syntactic sugar. Toilet paper is syntactic sugar, and I still want it.")]),e._v("—"),n("strong",[e._v("Barry Hawkins")])]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);