(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{479:function(e,t,n){"use strict";n.r(t);var o=n(44),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"resource-cleanup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resource-cleanup"}},[e._v("#")]),e._v(" Resource Cleanup")]),e._v(" "),n("blockquote",[n("p",[e._v("Using "),n("code",[e._v("try")]),e._v("-"),n("code",[e._v("finally")]),e._v(" blocks for resource cleanup is tedious and error-prone. Kotlin’s library functions manage cleanup for you.")])]),e._v(" "),n("p",[e._v("As you learned in [Exception Handling](javascript:void(0)), the "),n("code",[e._v("finally")]),e._v(" clause cleans up resources regardless of how the "),n("code",[e._v("try")]),e._v(" block exits. But what if an exception can happen while closing a resource? You end up with another "),n("code",[e._v("try")]),e._v(" inside the "),n("code",[e._v("finally")]),e._v(" clause. On top of that, if one exception is thrown inside a "),n("code",[e._v("try")]),e._v(" and another while closing the resource, the latter shouldn’t conceal the former. Ensuring proper cleanup becomes very messy.")]),e._v(" "),n("p",[e._v("To reduce this complexity, Kotlin’s "),n("code",[e._v("use()")]),e._v(" guarantees proper cleanup of closeable resources, liberating you from handwritten cleanup code.")]),e._v(" "),n("p",[n("code",[e._v("use()")]),e._v(" works with any object that implements Java’s "),n("code",[e._v("AutoCloseable")]),e._v(" interface. It executes the code within the block, then calls "),n("code",[e._v("close()")]),e._v(" on the object, regardless of how you exit the block—either normally (including via "),n("code",[e._v("return")]),e._v("), or through an exception.")]),e._v(" "),n("p",[n("code",[e._v("use()")]),e._v(" rethrows all exceptions, so you must still deal with those exceptions.")]),e._v(" "),n("p",[e._v("Predefined classes that work with "),n("code",[e._v("use()")]),e._v(" are found in the Java documentation for "),n("code",[e._v("AutoCloseable")]),e._v(". For example, to read lines from a "),n("code",[e._v("File")]),e._v(" we apply "),n("code",[e._v("use()")]),e._v(" to a "),n("code",[e._v("BufferedReader")]),e._v(". "),n("code",[e._v("DataFile")]),e._v(" from [Check Instructions](javascript:void(0)) inherits "),n("code",[e._v("java.io.File")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ResourceCleanup/AutoCloseable.kt\nimport atomictest.eq\nimport checkinstructions.DataFile\n\nfun main() {\n  DataFile("Results.txt")\n    .bufferedReader()\n    .use { it.readLines().first() } eq\n    "Results"\n}\n')])])]),n("p",[n("code",[e._v("useLines()")]),e._v(" opens a "),n("code",[e._v("File")]),e._v(" object, extracts all its lines, and passes those lines to a target function (typically a lambda):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ResourceCleanup/UseLines.kt\nimport atomictest.eq\nimport checkinstructions.DataFile\n\nfun main() {\n  DataFile("Results.txt").useLines {\n    it.filter { "#" in it }.first()    // [1]\n  } eq "# ok"\n  DataFile("Results.txt").useLines { lines ->\n    lines.filter { line ->             // [2]\n      "#" in line\n    }.first()\n  } eq "# ok"\n}\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" The left-hand "),n("code",[e._v("it")]),e._v(" refers to the collection of lines in the file, while the right-hand "),n("code",[e._v("it")]),e._v(" refers to each individual line. To reduce confusion, avoid writing code with two different nearby "),n("code",[e._v("it")]),e._v("s.")]),e._v(" "),n("li",[n("strong",[e._v("[2]")]),e._v(" Named arguments prevent confusion from too many "),n("code",[e._v("it")]),e._v("s.")])]),e._v(" "),n("p",[e._v("Everything happens within the "),n("code",[e._v("useLines()")]),e._v(" lambda; outside the lambda the file contents are unavailable unless you explicitly return them. As it closes the file, "),n("code",[e._v("useLines()")]),e._v(" returns the result of the lambda.")]),e._v(" "),n("p",[n("code",[e._v("forEachLine()")]),e._v(" makes it easy to apply an action to each line in a file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ResourceCleanup/ForEachLine.kt\nimport checkinstructions.DataFile\nimport atomictest.*\n\nfun main() {\n  DataFile("Results.txt").forEachLine {\n    if (it.startsWith("#"))\n      trace("$it")\n  }\n  trace eq "# ok"\n}\n')])])]),n("p",[e._v("The lambda in "),n("code",[e._v("forEachLine()")]),e._v(" returns "),n("code",[e._v("Unit")]),e._v(", which means that anything you do with the lines must be achieved through side effects. In functional programming, we prefer returning results over side effects, and thus "),n("code",[e._v("useLines()")]),e._v(" is a more functional approach than "),n("code",[e._v("forEachLine()")]),e._v(". However, "),n("code",[e._v("forEachLine()")]),e._v(" is a quick solution for simple utilities.")]),e._v(" "),n("p",[e._v("You can create your own class that works with "),n("code",[e._v("use()")]),e._v(" by implementing the "),n("code",[e._v("AutoCloseable")]),e._v(" interface, which contains only the "),n("code",[e._v("close()")]),e._v(" function:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ResourceCleanup/Usable.kt\npackage resourcecleanup\nimport atomictest.*\n\nclass Usable() : AutoCloseable {\n  fun func() = trace("func()")\n  override fun close() = trace("close()")\n}\n\nfun main() {\n  Usable().use { it.func() }\n  trace eq "func() close()"\n}\n')])])]),n("p",[n("code",[e._v("use()")]),e._v(" ensures resource cleanup at the point the resource is created, rather than forcing you to write cleanup code when you’re finished with the resource.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);