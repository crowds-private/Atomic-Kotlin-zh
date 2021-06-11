(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{374:function(e,n,t){e.exports=t.p+"assets/img/horizontal-evaluation.9014546d.png"},375:function(e,n,t){e.exports=t.p+"assets/img/vertical-evaluation.e260a626.png"},547:function(e,n,t){"use strict";t.r(n);var a=t(44),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequences"}},[e._v("#")]),e._v(" Sequences")]),e._v(" "),a("blockquote",[a("p",[e._v("A Kotlin "),a("code",[e._v("Sequence")]),e._v(" is like a "),a("code",[e._v("List")]),e._v(", but you can "),a("em",[e._v("only")]),e._v(" iterate through a "),a("code",[e._v("Sequence")]),e._v("—you cannot index into a "),a("code",[e._v("Sequence")]),e._v(". This restriction produces very efficient chained operations.")])]),e._v(" "),a("p",[e._v("Kotlin "),a("code",[e._v("Sequence")]),e._v("s are termed "),a("em",[e._v("streams")]),e._v(" in other functional languages. Kotlin had to choose a different name to maintain interoperability with the Java 8 "),a("code",[e._v("Stream")]),e._v(" library.")]),e._v(" "),a("p",[e._v("Operations on "),a("code",[e._v("List")]),e._v("s are performed "),a("em",[e._v("eagerly")]),e._v("—they always happen right away. When chaining "),a("code",[e._v("List")]),e._v(" operations, the first result must be produced before starting the next operation. Here, each "),a("code",[e._v("filter()")]),e._v(", "),a("code",[e._v("map()")]),e._v(" and "),a("code",[e._v("any()")]),e._v(" operation is applied to every element in "),a("code",[e._v("list")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Sequences/EagerEvaluation.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 2, 3, 4)\n\n  list.filter { it % 2 == 0 }\n    .map { it * it }\n    .any { it < 10 } eq true\n\n  // Equivalent to:\n  val mid1 = list.filter { it % 2 == 0 }\n  mid1 eq listOf(2, 4)\n  val mid2 = mid1.map { it * it }\n  mid2 eq listOf(4, 16)\n  mid2.any { it < 10 } eq true\n}\n")])])]),a("p",[e._v("Eager evaluation is intuitive and straightforward, but can be suboptimal. In "),a("code",[e._v("EagerEvaluation.kt")]),e._v(", it would make more sense to stop after encountering the first element that satisfies the "),a("code",[e._v("any()")]),e._v(". For a long sequence, this optimization might be much faster than evaluating every element and then searching for a single match.")]),e._v(" "),a("p",[e._v("Eager evaluation is sometimes called "),a("em",[e._v("horizontal evaluation")]),e._v(":")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticStyle:{zoom:"10%"},attrs:{src:t(374),alt:"horizontal evaluation"}}),e._v(" "),a("p",[e._v("Horizontal Evaluation")])]),e._v(" "),a("p",[e._v("The first line contains the initial list contents. Each following line shows the results from the previous operation. Before the next operation is performed, all elements on the current horizontal level are processed.")]),e._v(" "),a("p",[e._v("The alternative to eager evaluation is "),a("em",[e._v("lazy evaluation")]),e._v(": a result is computed only when needed. Performing lazy operations on sequences is sometimes called "),a("em",[e._v("vertical evaluation")]),e._v(":")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticStyle:{zoom:"10%"},attrs:{src:t(375),alt:"vertical evaluation"}}),e._v(" "),a("p",[e._v("Vertical Evaluation")])]),e._v(" "),a("p",[e._v("With lazy evaluation, an operation is performed on an element only when that element’s associated result is requested. If the final result of a calculation is found before processing the last element, no further elements are processed.")]),e._v(" "),a("p",[e._v("Converting "),a("code",[e._v("List")]),e._v("s to "),a("code",[e._v("Sequence")]),e._v("s using "),a("code",[e._v("asSequence()")]),e._v(" enables lazy evaluation. All "),a("code",[e._v("List")]),e._v(" operations except indexing are also available for "),a("code",[e._v("Sequence")]),e._v("s, so you can usually make this single change and gain the benefits of lazy evaluation.")]),e._v(" "),a("p",[e._v("The following example shows the above diagrams converted into code. We perform the identical chain of operations, first on a "),a("code",[e._v("List")]),e._v(", then on a "),a("code",[e._v("Sequence")]),e._v(". The output shows where each operation is called:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Sequences/EagerVsLazyEvaluation.kt\npackage sequences\nimport atomictest.*\n\nfun Int.isEven(): Boolean {\n  trace("$this.isEven()")\n  return this % 2 == 0\n}\n\nfun Int.square(): Int {\n  trace("$this.square()")\n  return this * this\n}\n\nfun Int.lessThanTen(): Boolean {\n  trace("$this.lessThanTen()")\n  return this < 10\n}\n\nfun main() {\n  val list = listOf(1, 2, 3, 4)\n  trace(">>> List:")\n  trace(\n    list\n      .filter(Int::isEven)\n      .map(Int::square)\n      .any(Int::lessThanTen)\n  )\n  trace(">>> Sequence:")\n  trace(\n    list.asSequence()\n      .filter(Int::isEven)\n      .map(Int::square)\n      .any(Int::lessThanTen)\n  )\n  trace eq """\n    >>> List:\n    1.isEven()\n    2.isEven()\n    3.isEven()\n    4.isEven()\n    2.square()\n    4.square()\n    4.lessThanTen()\n    true\n    >>> Sequence:\n    1.isEven()\n    2.isEven()\n    2.square()\n    4.lessThanTen()\n    true\n  """\n}\n')])])]),a("p",[e._v("The only difference between the two approaches is the addition of the "),a("code",[e._v("asSequence()")]),e._v(" call, but more elements are processed for the "),a("code",[e._v("List")]),e._v(" code than the "),a("code",[e._v("Sequence")]),e._v(" code.")]),e._v(" "),a("p",[e._v("Calling either "),a("code",[e._v("filter()")]),e._v(" or "),a("code",[e._v("map()")]),e._v(" on a "),a("code",[e._v("Sequence")]),e._v(" produces another "),a("code",[e._v("Sequence")]),e._v(". Nothing happens until you ask for a result from a calculation. Instead, the new "),a("code",[e._v("Sequence")]),e._v(" stores all information about postponed operations and will perform those operations only when needed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Sequences/NoComputationYet.kt\nimport atomictest.eq\nimport sequences.*\n\nfun main() {\n  val r = listOf(1, 2, 3, 4)\n    .asSequence()\n    .filter(Int::isEven)\n    .map(Int::square)\n  r.toString().substringBefore("@") eq\n    "kotlin.sequences.TransformingSequence"\n}\n')])])]),a("p",[e._v("Converting "),a("code",[e._v("r")]),e._v(" to a "),a("code",[e._v("String")]),e._v(" does not produce the results we want, but just the identifier for the object (including the "),a("code",[e._v("@")]),e._v(" address of the object in memory, which we remove using the standard library "),a("code",[e._v("substringBefore()")]),e._v("). The "),a("code",[e._v("TransformingSequence")]),e._v(" just holds the operations but does not perform them.")]),e._v(" "),a("p",[e._v("There are two categories of "),a("code",[e._v("Sequence")]),e._v(" operations: "),a("em",[e._v("intermediate")]),e._v(" and "),a("em",[e._v("terminal")]),e._v(". Intermediate operations return another "),a("code",[e._v("Sequence")]),e._v(" as a result. "),a("code",[e._v("filter()")]),e._v(" and "),a("code",[e._v("map()")]),e._v(" are intermediate operations. Terminal operations return a non-"),a("code",[e._v("Sequence")]),e._v(". To do this, a terminal operation executes all stored computations. In the previous examples, "),a("code",[e._v("any()")]),e._v(" is a terminal operation because it takes a "),a("code",[e._v("Sequence")]),e._v(" and returns a "),a("code",[e._v("Boolean")]),e._v(". In the following example, "),a("code",[e._v("toList()")]),e._v(" is terminal because it converts the "),a("code",[e._v("Sequence")]),e._v(" to a "),a("code",[e._v("List")]),e._v(", running all stored operations in the process:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Sequences/TerminalOperations.kt\nimport sequences.*\nimport atomictest.*\n\nfun main() {\n  val list = listOf(1, 2, 3, 4)\n  trace(list.asSequence()\n    .filter(Int::isEven)\n    .map(Int::square)\n    .toList())\n  trace eq """\n    1.isEven()\n    2.isEven()\n    2.square()\n    3.isEven()\n    4.isEven()\n    4.square()\n    [4, 16]\n  """\n}\n')])])]),a("p",[e._v("Because a "),a("code",[e._v("Sequence")]),e._v(" stores the operations, it can call those operations in any order, resulting in lazy evaluation.")]),e._v(" "),a("p",[e._v("The following example uses the standard library function "),a("code",[e._v("generateSequence()")]),e._v(" to produce an infinite sequence of natural numbers. The first argument is the initial element in the sequence, followed by a lambda defining how the next element is calculated from the previous element:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Sequences/GenerateSequence1.kt\nimport atomictest.eq\n\nfun main() {\n  val naturalNumbers =\n    generateSequence(1) { it + 1 }\n  naturalNumbers.take(3).toList() eq\n    listOf(1, 2, 3)\n  naturalNumbers.take(10).sum() eq 55\n}\n")])])]),a("p",[a("code",[e._v("Collection")]),e._v("s are a known size, discoverable through their "),a("code",[e._v("size")]),e._v(" property. "),a("code",[e._v("Sequence")]),e._v("s are treated as if they are infinite. Here, we decide how many elements we want using "),a("code",[e._v("take()")]),e._v(", followed by a terminal operation ("),a("code",[e._v("toList()")]),e._v(" or "),a("code",[e._v("sum()")]),e._v(").")]),e._v(" "),a("p",[e._v("There’s an overloaded version of "),a("code",[e._v("generateSequence()")]),e._v(" that doesn’t require the first parameter, only a lambda that returns the next element in the "),a("code",[e._v("Sequence")]),e._v(". When there are no more elements, it returns "),a("code",[e._v("null")]),e._v(". The following example generates a "),a("code",[e._v("Sequence")]),e._v(" until the “termination flag” "),a("code",[e._v("XXX")]),e._v(" appears in its input:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Sequences/GenerateSequence2.kt\nimport atomictest.*\n\nfun main() {\n  val items = mutableListOf(\n    "first", "second", "third", "XXX", "4th"\n  )\n  val seq = generateSequence {\n    items.removeAt(0).takeIf { it != "XXX" }\n  }\n  seq.toList() eq "[first, second, third]"\n  capture {\n    seq.toList()\n  } eq "IllegalStateException: This " +\n    "sequence can be consumed only once."\n}\n')])])]),a("p",[a("code",[e._v("removeAt(0)")]),e._v(" removes and produces the zeroeth element from the "),a("code",[e._v("List")]),e._v(". "),a("code",[e._v("takeIf()")]),e._v(" returns the receiver (the "),a("code",[e._v("String")]),e._v(" produced by "),a("code",[e._v("removeAt(0)")]),e._v(") if it satisfies the given predicate, and "),a("code",[e._v("null")]),e._v(" if the predicate fails (when the "),a("code",[e._v("String")]),e._v(" is "),a("code",[e._v('"XXX"')]),e._v(").")]),e._v(" "),a("p",[e._v("You can only iterate once through a "),a("code",[e._v("Sequence")]),e._v(". Further attempts produce an exception. To make multiple passes through a "),a("code",[e._v("Sequence")]),e._v(", first convert it to some type of "),a("code",[e._v("Collection")]),e._v(".")]),e._v(" "),a("p",[e._v("Here’s an implementation for "),a("code",[e._v("takeIf()")]),e._v(", defined using a generic "),a("code",[e._v("T")]),e._v(" so it can work with any type of argument:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Sequences/DefineTakeIf.kt\npackage sequences\nimport atomictest.eq\n\nfun <T> T.takeIf(\n  predicate: (T) -> Boolean\n): T? {\n  return if (predicate(this)) this else null\n}\n\nfun main() {\n  "abc".takeIf { it != "XXX" } eq "abc"\n  "XXX".takeIf { it != "XXX" } eq null\n}\n')])])]),a("p",[e._v("Here, "),a("code",[e._v("generateSequence()")]),e._v(" and "),a("code",[e._v("takeIf()")]),e._v(" produce a decreasing sequence of numbers:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Sequences/NumberSequence2.kt\nimport atomictest.eq\n\nfun main() {\n  generateSequence(6) {\n    (it - 1).takeIf { it > 0 }\n  }.toList() eq listOf(6, 5, 4, 3, 2, 1)\n}\n")])])]),a("p",[e._v("An ordinary "),a("code",[e._v("if")]),e._v(" expression can always be used instead of "),a("code",[e._v("takeIf()")]),e._v(", but introducing an extra identifier can make the "),a("code",[e._v("if")]),e._v(" expression clumsy. The "),a("code",[e._v("takeIf()")]),e._v(" version is more functional, especially if it’s used as a part of a chain of calls.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);