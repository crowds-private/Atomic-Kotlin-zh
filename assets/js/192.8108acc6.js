(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{573:function(e,t,n){"use strict";n.r(t);var a=n(44),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"the-nothing-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-nothing-type"}},[e._v("#")]),e._v(" The "),n("code",[e._v("Nothing")]),e._v(" Type")]),e._v(" "),n("blockquote",[n("p",[e._v("A "),n("code",[e._v("Nothing")]),e._v(" return type indicates a function that never returns")])]),e._v(" "),n("p",[e._v("This is usually a function that always throws an exception.")]),e._v(" "),n("p",[e._v("Here’s a function that produces an infinite loop (avoid these)—because it never returns, its return type is "),n("code",[e._v("Nothing")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// NothingType/InfiniteLoop.kt\npackage nothingtype\n\nfun infinite(): Nothing {\n  while (true) {}\n}\n")])])]),n("p",[n("code",[e._v("Nothing")]),e._v(" is a built-in Kotlin type with no instances.")]),e._v(" "),n("p",[e._v("A practical example is the built-in "),n("code",[e._v("TODO()")]),e._v(", which has a return type of "),n("code",[e._v("Nothing")]),e._v(" and throws "),n("code",[e._v("NotImplementedError")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NothingType/Todo.kt\npackage nothingtype\nimport atomictest.*\n\nfun later(s: String): String = TODO("later()")\n\nfun later2(s: String): Int = TODO()\n\nfun main() {\n  capture {\n    later("Hello")\n  } eq "NotImplementedError: " +\n    "An operation is not implemented: later()"\n  capture {\n    later2("Hello!")\n  } eq "NotImplementedError: " +\n    "An operation is not implemented."\n}\n')])])]),n("p",[e._v("Both "),n("code",[e._v("later()")]),e._v(" and "),n("code",[e._v("later2()")]),e._v(" return non-"),n("code",[e._v("Nothing")]),e._v(" types even though "),n("code",[e._v("TODO()")]),e._v(" returns "),n("code",[e._v("Nothing")]),e._v(". "),n("code",[e._v("Nothing")]),e._v(" is compatible with any type.")]),e._v(" "),n("p",[n("code",[e._v("later()")]),e._v(" and "),n("code",[e._v("later2()")]),e._v(" compile successfully. If you call either one, an exception reminds you to write implementations. "),n("code",[e._v("TODO()")]),e._v(" is a useful tool for “sketching” a code framework to verify that everything fits together before filling in the details.")]),e._v(" "),n("p",[e._v("In the following, "),n("code",[e._v("fail()")]),e._v(" always throws an "),n("code",[e._v("Exception")]),e._v(" so it returns "),n("code",[e._v("Nothing")]),e._v(". Notice that a call to "),n("code",[e._v("fail()")]),e._v(" is more readable and compact than explicitly throwing an exception:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NothingType/Fail.kt\npackage nothingtype\nimport atomictest.*\n\nfun fail(i: Int): Nothing =\n  throw Exception("fail($i)")\n\nfun main() {\n  capture {\n    fail(1)\n  } eq "Exception: fail(1)"\n  capture {\n    fail(2)\n  } eq "Exception: fail(2)"\n}\n')])])]),n("p",[n("code",[e._v("fail()")]),e._v(" allows you to easily change the error-handling strategy. For example, you can change the exception type or log an additional message before throwing an exception.")]),e._v(" "),n("p",[e._v("This throws a "),n("code",[e._v("BadData")]),e._v(" exception if the argument is not a "),n("code",[e._v("String")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NothingType/CheckObject.kt\npackage nothingtype\nimport atomictest.*\n\nclass BadData(m: String) : Exception(m)\n\nfun checkObject(obj: Any?): String =\n  if (obj is String)\n    obj\n  else\n    throw BadData("Needs String, got $obj")\n\nfun test(checkObj: (obj: Any?) -> String) {\n  checkObj("abc") eq "abc"\n  capture {\n    checkObj(null)\n  } eq "BadData: Needs String, got null"\n  capture {\n    checkObj(123)\n  } eq "BadData: Needs String, got 123"\n}\n\nfun main() {\n  test(::checkObject)\n}\n')])])]),n("p",[n("code",[e._v("checkObject()")]),e._v("’s return type is the return type of the "),n("code",[e._v("if")]),e._v(" expression. Kotlin treats a "),n("code",[e._v("throw")]),e._v(" as type "),n("code",[e._v("Nothing")]),e._v(", and "),n("code",[e._v("Nothing")]),e._v(" can be assigned to any type. In "),n("code",[e._v("checkObject()")]),e._v(", "),n("code",[e._v("String")]),e._v(" takes priority over "),n("code",[e._v("Nothing")]),e._v(", so the type of the "),n("code",[e._v("if")]),e._v(" expression is "),n("code",[e._v("String")]),e._v(".")]),e._v(" "),n("p",[e._v("We can rewrite "),n("code",[e._v("checkObject()")]),e._v(" using a [safe cast and an Elvis operator](javascript:void(0)). "),n("code",[e._v("checkObject2()")]),e._v(" casts "),n("code",[e._v("obj")]),e._v(" to a "),n("code",[e._v("String")]),e._v(" if it can be cast, otherwise it throws an exception:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NothingType/CheckObject2.kt\npackage nothingtype\n\nfun failWithBadData(obj: Any?): Nothing =\n  throw BadData("Needs String, got $obj")\n\nfun checkObject2(obj: Any?): String =\n  (obj as? String) ?: failWithBadData(obj)\n\nfun main() {\n  test(::checkObject2)\n}\n')])])]),n("p",[e._v("When given a plain "),n("code",[e._v("null")]),e._v(" with no additional type information, the compiler infers a nullable "),n("code",[e._v("Nothing")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NothingType/ListOfNothing.kt\nimport atomictest.eq\n\nfun main() {\n  val none: Nothing? = null\n\n  var nullableString: String? = null    // [1]\n  nullableString = "abc"\n  nullableString = none                 // [2]\n  nullableString eq null\n\n  val nullableInt: Int? = none          // [3]\n  nullableInt eq null\n\n  val listNone: List<Nothing?> = listOf(null)\n  val ints: List<Int?> = listOf(null)   // [4]\n  ints eq listNone\n}\n')])])]),n("p",[e._v("You can assign both "),n("code",[e._v("null")]),e._v(" and "),n("code",[e._v("none")]),e._v(" to a "),n("code",[e._v("var")]),e._v(" or "),n("code",[e._v("val")]),e._v(" of a nullable type, such as "),n("code",[e._v("nullableString")]),e._v(" or "),n("code",[e._v("nullableInt")]),e._v(". This is allowed because the type of both "),n("code",[e._v("null")]),e._v(" and "),n("code",[e._v("none")]),e._v(" is "),n("code",[e._v("Nothing?")]),e._v(" (nullable "),n("code",[e._v("Nothing")]),e._v("). In the same way that an expression of the "),n("code",[e._v("Nothing")]),e._v(" type (for example, "),n("code",[e._v("fail()")]),e._v(") can be interpreted as “any type,” an expression of the "),n("code",[e._v("Nothing?")]),e._v(" type, such as "),n("code",[e._v("null")]),e._v(", can be interpreted as “any nullable type.” Assignments to different nullable types are shown in lines "),n("strong",[e._v("[1]")]),e._v(", "),n("strong",[e._v("[2]")]),e._v(" and "),n("strong",[e._v("[3]")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("listNone")]),e._v(" is initialized with a "),n("code",[e._v("List")]),e._v(" containing only the "),n("code",[e._v("null")]),e._v(" value. The compiler infers this to be "),n("code",[e._v("List<Nothing?>")]),e._v(". For this reason, you must explicitly specify the element type ("),n("strong",[e._v("[4]")]),e._v(") that you want to store in the "),n("code",[e._v("List")]),e._v(" when you initialize it with only "),n("code",[e._v("null")]),e._v(".")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);