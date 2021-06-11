(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{518:function(e,t,n){"use strict";n.r(t);var s=n(44),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"lists"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lists"}},[e._v("#")]),e._v(" Lists")]),e._v(" "),n("blockquote",[n("p",[e._v("A "),n("code",[e._v("List")]),e._v(" is a "),n("em",[e._v("container")]),e._v(", which is an object that holds other objects.")])]),e._v(" "),n("p",[e._v("Containers are also called "),n("em",[e._v("collections")]),e._v(". When we need a basic container for the examples in this book, we normally use a "),n("code",[e._v("List")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("List")]),e._v("s are part of the standard Kotlin package so they don’t require an "),n("code",[e._v("import")]),e._v(".")]),e._v(" "),n("p",[e._v("The following example creates a "),n("code",[e._v("List")]),e._v(" populated with "),n("code",[e._v("Int")]),e._v("s by calling the standard library function "),n("code",[e._v("listOf()")]),e._v(" with initialization values:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Lists/Lists.kt\nimport atomictest.eq\n\nfun main() {\n  val ints = listOf(99, 3, 5, 7, 11, 13)\n  ints eq "[99, 3, 5, 7, 11, 13]"   // [1]\n\n  // Select each element in the List:\n  var result = ""\n  for (i in ints) {                 // [2]\n    result += "$i "\n  }\n  result eq "99 3 5 7 11 13"\n\n  // "Indexing" into the List:\n  ints[4] eq 11                     // [3]\n}\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" A "),n("code",[e._v("List")]),e._v(" uses square brackets when displaying itself.")]),e._v(" "),n("li",[n("strong",[e._v("[2]")]),e._v(" "),n("code",[e._v("for")]),e._v(" loops work well with "),n("code",[e._v("List")]),e._v("s: "),n("code",[e._v("for(i in ints)")]),e._v(" means "),n("code",[e._v("i")]),e._v(" receives each value in "),n("code",[e._v("ints")]),e._v(". You don’t declare "),n("code",[e._v("val i")]),e._v(" or give its type; Kotlin knows from the context that "),n("code",[e._v("i")]),e._v(" is a "),n("code",[e._v("for")]),e._v(" loop identifier.")]),e._v(" "),n("li",[n("strong",[e._v("[3]")]),e._v(" Square brackets "),n("em",[e._v("index")]),e._v(" into a "),n("code",[e._v("List")]),e._v(". A "),n("code",[e._v("List")]),e._v(" keeps its elements in initialization order, and you select them individually by number. Like most programming languages, Kotlin starts indexing at element zero, which in this case produces the value "),n("code",[e._v("99")]),e._v(". Thus an index of "),n("code",[e._v("4")]),e._v(" produces the value "),n("code",[e._v("11")]),e._v(".")])]),e._v(" "),n("p",[e._v("Forgetting that indexing starts at zero produces the so-called "),n("em",[e._v("off-by-one")]),e._v(" error. In a language like Kotlin we often don’t select elements one at a time, but instead "),n("em",[e._v("iterate")]),e._v(" through an entire container using "),n("code",[e._v("in")]),e._v(". This eliminates off-by-one errors.")]),e._v(" "),n("p",[e._v("If you use an index beyond the last element in a "),n("code",[e._v("List")]),e._v(", Kotlin throws an "),n("code",[e._v("ArrayIndexOutOfBoundsException")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Lists/OutOfBounds.kt\nimport atomictest.*\n\nfun main() {\n  val ints = listOf(1, 2, 3)\n  capture {\n    ints[3]\n  } contains\n    listOf("ArrayIndexOutOfBoundsException")\n}\n')])])]),n("p",[e._v("A "),n("code",[e._v("List")]),e._v(" can hold all different types. Here’s a "),n("code",[e._v("List")]),e._v(" of "),n("code",[e._v("Double")]),e._v("s and a "),n("code",[e._v("List")]),e._v(" of "),n("code",[e._v("String")]),e._v("s:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Lists/ListUsefulFunction.kt\nimport atomictest.eq\n\nfun main() {\n  val doubles =\n    listOf(1.1, 2.2, 3.3, 4.4)\n  doubles.sum() eq 11.0\n\n  val strings = listOf("Twas", "Brillig",\n    "And", "Slithy", "Toves")\n  strings eq listOf("Twas", "Brillig",\n    "And", "Slithy", "Toves")\n  strings.sorted() eq listOf("And",\n    "Brillig", "Slithy", "Toves", "Twas")\n  strings.reversed() eq listOf("Toves",\n    "Slithy", "And", "Brillig", "Twas")\n  strings.first() eq "Twas"\n  strings.takeLast(2) eq\n    listOf("Slithy", "Toves")\n}\n')])])]),n("p",[e._v("This shows some of "),n("code",[e._v("List")]),e._v("’s operations. Note the name “sorted” instead of “sort.” When you call "),n("code",[e._v("sorted()")]),e._v(" it "),n("em",[e._v("produces")]),e._v(" a new "),n("code",[e._v("List")]),e._v(" containing the same elements as the old, in sorted order—but it leaves the original "),n("code",[e._v("List")]),e._v(" alone. Calling it “sort” implies that the original "),n("code",[e._v("List")]),e._v(" is changed directly (a.k.a. "),n("em",[e._v("sorted in place")]),e._v("). Throughout Kotlin, you see this tendency of “leaving the original object alone and producing a new object.” "),n("code",[e._v("reversed()")]),e._v(" also produces a new "),n("code",[e._v("List")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"parameterized-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameterized-types"}},[e._v("#")]),e._v(" Parameterized Types")]),e._v(" "),n("p",[e._v("We consider it good practice to use type inference—it tends to make the code cleaner and easier to read. Sometimes, however, Kotlin complains that it can’t figure out what type to use, and in other cases explicitness makes the code more understandable. Here’s how we tell Kotlin the type contained by a "),n("code",[e._v("List")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Lists/ParameterizedTypes.kt\nimport atomictest.eq\n\nfun main() {\n  // Type is inferred:\n  val numbers = listOf(1, 2, 3)\n  val strings =\n    listOf("one", "two", "three")\n  // Exactly the same, but explicitly typed:\n  val numbers2: List<Int> = listOf(1, 2, 3)\n  val strings2: List<String> =\n    listOf("one", "two", "three")\n  numbers eq numbers2\n  strings eq strings2\n}\n')])])]),n("p",[e._v("Kotlin uses the initialization values to infer that "),n("code",[e._v("numbers")]),e._v(" contains a "),n("code",[e._v("List")]),e._v(" of "),n("code",[e._v("Int")]),e._v("s, while "),n("code",[e._v("strings")]),e._v(" contains a "),n("code",[e._v("List")]),e._v(" of "),n("code",[e._v("String")]),e._v("s.")]),e._v(" "),n("p",[n("code",[e._v("numbers2")]),e._v(" and "),n("code",[e._v("strings2")]),e._v(" are explicitly-typed versions of "),n("code",[e._v("numbers")]),e._v(" and "),n("code",[e._v("strings")]),e._v(", created by adding the type declarations "),n("code",[e._v("List<Int>")]),e._v(" and "),n("code",[e._v("List<String>")]),e._v(". You haven’t seen angle brackets before—they denote a "),n("em",[e._v("type parameter")]),e._v(", allowing you to say, “this container holds ‘parameter’ objects.” We pronounce "),n("code",[e._v("List<Int>")]),e._v(" as “"),n("code",[e._v("List")]),e._v(" of "),n("code",[e._v("Int")]),e._v(".”")]),e._v(" "),n("p",[e._v("Type parameters are useful for components other than containers, but you often see them with container-like objects.")]),e._v(" "),n("p",[e._v("Return values can also have type parameters:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Lists/ParameterizedReturn.kt\npackage lists\nimport atomictest.eq\n\n// Return type is inferred:\nfun inferred(p: Char, q: Char) =\n  listOf(p, q)\n\n// Explicit return type:\nfun explicit(p: Char, q: Char): List<Char> =\n  listOf(p, q)\n\nfun main() {\n  inferred('a', 'b') eq \"[a, b]\"\n  explicit('y', 'z') eq \"[y, z]\"\n}\n")])])]),n("p",[e._v("Kotlin infers the return type for "),n("code",[e._v("inferred()")]),e._v(", while "),n("code",[e._v("explicit()")]),e._v(" specifies the function return type. You can’t just say it returns a "),n("code",[e._v("List")]),e._v("; Kotlin will complain, so you must give the type parameter as well. When you specify the return type of a function, Kotlin enforces your intention.")]),e._v(" "),n("h3",{attrs:{id:"read-only-and-mutable-lists"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#read-only-and-mutable-lists"}},[e._v("#")]),e._v(" Read-Only and Mutable Lists")]),e._v(" "),n("p",[e._v("If you don’t explicitly say you want a mutable "),n("code",[e._v("List")]),e._v(", you won’t get one. "),n("code",[e._v("listOf()")]),e._v(" produces a read-only "),n("code",[e._v("List")]),e._v(" that has no mutating functions.")]),e._v(" "),n("p",[e._v("If you’re creating a "),n("code",[e._v("List")]),e._v(" gradually (that is, you don’t have all the elements at creation time), use "),n("code",[e._v("mutableListOf()")]),e._v(". This produces a "),n("code",[e._v("MutableList")]),e._v(" that can be modified:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Lists/MutableList.kt\nimport atomictest.eq\n\nfun main() {\n  val list = mutableListOf<Int>()\n\n  list.add(1)\n  list.addAll(listOf(2, 3))\n\n  list += 4\n  list += listOf(5, 6)\n\n  list eq listOf(1, 2, 3, 4, 5, 6)\n}\n")])])]),n("p",[e._v("You can add elements to a "),n("code",[e._v("MutableList")]),e._v(" using "),n("code",[e._v("add()")]),e._v(" and "),n("code",[e._v("addAll()")]),e._v(", or the shortcut "),n("code",[e._v("+=")]),e._v(" which adds a single element or another collection. Because "),n("code",[e._v("list")]),e._v(" has no initial elements, we must tell Kotlin what type it is by providing the "),n("code",[e._v("<Int>")]),e._v(" specification in the call to "),n("code",[e._v("mutableListOf()")]),e._v(".")]),e._v(" "),n("p",[e._v("A "),n("code",[e._v("MutableList")]),e._v(" can be treated as a "),n("code",[e._v("List")]),e._v(", in which case it cannot be changed. You can’t, however, treat a read-only "),n("code",[e._v("List")]),e._v(" as a "),n("code",[e._v("MutableList")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Lists/MutListIsList.kt\npackage lists\nimport atomictest.eq\n\nfun getList(): List<Int> {\n  return mutableListOf(1, 2, 3)\n}\n\nfun main() {\n  // getList() produces a read-only List:\n  val list = getList()\n  // list += 3 // Error\n  list eq listOf(1, 2, 3)\n}\n")])])]),n("p",[e._v("Note that "),n("code",[e._v("list")]),e._v(" lacks mutation functions despite being originally created using "),n("code",[e._v("mutableListOf()")]),e._v(" inside "),n("code",[e._v("getList()")]),e._v(". During the "),n("code",[e._v("return")]),e._v(", the result type becomes a "),n("code",[e._v("List<Int>")]),e._v(". The original object is still a "),n("code",[e._v("MutableList")]),e._v(", but it is viewed through the lens of a "),n("code",[e._v("List")]),e._v(".")]),e._v(" "),n("p",[e._v("A "),n("code",[e._v("List")]),e._v(" is "),n("em",[e._v("read-only")]),e._v("—you can read its contents but not write to it. If the underlying implementation is a "),n("code",[e._v("MutableList")]),e._v(" and you retain a mutable reference to that implementation, you can still modify it via that mutable reference, and any read-only references will see those changes. This is another example of "),n("em",[e._v("aliasing")]),e._v(", introduced in [Constraining Visibility](javascript:void(0)):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Lists/MultipleListRefs.kt\nimport atomictest.eq\n\nfun main() {\n  val first = mutableListOf(1)\n  val second: List<Int> = first\n  second eq listOf(1)\n\n  first += 2\n  // second sees the change:\n  second eq listOf(1, 2)\n}\n")])])]),n("p",[n("code",[e._v("first")]),e._v(" is an immutable reference ("),n("code",[e._v("val")]),e._v(") to the mutable object produced by "),n("code",[e._v("mutableListOf(1)")]),e._v(". Then "),n("code",[e._v("second")]),e._v(" is aliased to "),n("code",[e._v("first")]),e._v(", so it is a view of that same object. "),n("code",[e._v("second")]),e._v(" is read-only because "),n("code",[e._v("List<Int>")]),e._v(" does not include modification functions.  Note that, without the explicit "),n("code",[e._v("List<Int>")]),e._v(" type declaration, Kotlin would infer that "),n("code",[e._v("second")]),e._v(" was also a reference to a mutable object.")]),e._v(" "),n("p",[e._v("We’re able to add an element ("),n("code",[e._v("2")]),e._v(") to the object because "),n("code",[e._v("first")]),e._v(" is a reference to a mutable "),n("code",[e._v("List")]),e._v(". Note that "),n("code",[e._v("second")]),e._v(" observes these changes—it cannot change the "),n("code",[e._v("List")]),e._v(" although the "),n("code",[e._v("List")]),e._v(" changes via "),n("code",[e._v("first")]),e._v(".")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);