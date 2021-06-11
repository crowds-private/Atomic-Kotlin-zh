(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{477:function(e,t,n){"use strict";n.r(t);var a=n(44),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"check-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-instructions"}},[e._v("#")]),e._v(" Check Instructions")]),e._v(" "),n("blockquote",[n("p",[n("em",[e._v("Check instructions")]),e._v(" assert that constraints are satisfied. They are commonly used to validate function arguments and results.")])]),e._v(" "),n("p",[e._v("Check instructions discover programming errors by expressing non-obvious requirements. They can also act as documentation for future readers of that code. You’ll usually find check instructions at the beginning of a function, to ensure that the arguments are legitimate, and at the end, to check the function’s calculations.")]),e._v(" "),n("p",[e._v("Check instructions typically throw exceptions when they fail. You can usually use check instructions instead of explicitly throwing exceptions. Check instructions are easier to write and think about, and produce more comprehensible code. Use them whenever possible to test and illuminate your programs.")]),e._v(" "),n("h3",{attrs:{id:"require"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[e._v("#")]),e._v(" "),n("code",[e._v("require()")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Design_by_contract",target:"_blank",rel:"noopener noreferrer"}},[e._v("Design By Contract"),n("OutboundLink")],1),e._v(" "),n("em",[e._v("preconditions")]),e._v(" guarantee initialization constraints. Kotlin’s "),n("code",[e._v("require()")]),e._v(" is normally used to validate function arguments, so it typically appears at the beginning of function bodies. These tests cannot be checked at compile time. Preconditions are relatively easy to include in your code, but sometimes they can be turned into [unit tests](javascript:void(0)).")]),e._v(" "),n("p",[e._v("Consider a numerical field representing a month on the Julian calendar. You know this value must always be in the range "),n("code",[e._v("1..12")]),e._v(". A precondition reports an error if the value falls outside that range:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// CheckInstructions/JulianMonth.kt\npackage checkinstructions\nimport atomictest.*\n\ndata class Month(val monthNumber: Int) {\n  init {\n    require(monthNumber in 1..12) {\n      "Month out of range: $monthNumber"\n    }\n  }\n}\n\nfun main() {\n  Month(1) eq "Month(monthNumber=1)"\n  capture { Month(13) } eq\n    "IllegalArgumentException: " +\n    "Month out of range: 13"\n}\n')])])]),n("p",[e._v("We perform the "),n("code",[e._v("require()")]),e._v(" inside the constructor. "),n("code",[e._v("require()")]),e._v(" throws an "),n("code",[e._v("IllegalArgumentException")]),e._v(" if its condition isn’t satisfied. You can always use "),n("code",[e._v("require()")]),e._v(" instead of throwing "),n("code",[e._v("IllegalArgumentException")]),e._v(".")]),e._v(" "),n("p",[e._v("The second parameter for "),n("code",[e._v("require()")]),e._v(" is a lambda that produces a "),n("code",[e._v("String")]),e._v(". If the "),n("code",[e._v("String")]),e._v(" requires construction, that overhead doesn’t occur unless "),n("code",[e._v("require()")]),e._v(" fails.")]),e._v(" "),n("p",[e._v("When the arguments for "),n("code",[e._v("Quadratic.kt")]),e._v(" from [Summary 2](javascript:void(0)) are inappropriate, it throws "),n("code",[e._v("IllegalArgumentException")]),e._v(". We can simplify the code using "),n("code",[e._v("require()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// CheckInstructions/QuadraticRequire.kt\npackage checkinstructions\nimport kotlin.math.sqrt\nimport atomictest.*\n\nclass Roots(\n  val root1: Double,\n  val root2: Double\n)\n\nfun quadraticZeroes(\n  a: Double,\n  b: Double,\n  c: Double\n): Roots {\n  require(a != 0.0) { "a is zero" }\n  val underRadical = b * b - 4 * a * c\n  require(underRadical >= 0) {\n    "Negative underRadical: $underRadical"\n  }\n  val squareRoot = sqrt(underRadical)\n  val root1 = (-b - squareRoot) / 2 * a\n  val root2 = (-b + squareRoot) / 2 * a\n  return Roots(root1, root2)\n}\n\nfun main() {\n  capture {\n    quadraticZeroes(0.0, 4.0, 5.0)\n  } eq "IllegalArgumentException: " +\n    "a is zero"\n  capture {\n    quadraticZeroes(3.0, 4.0, 5.0)\n  } eq "IllegalArgumentException: " +\n    "Negative underRadical: -44.0"\n  val roots = quadraticZeroes(3.0, 8.0, 5.0)\n  roots.root1 eq -15.0\n  roots.root2 eq -9.0\n}\n')])])]),n("p",[e._v("This code is much clearer and cleaner than the original "),n("code",[e._v("Quadratic.kt")]),e._v(".")]),e._v(" "),n("p",[e._v("The following "),n("code",[e._v("DataFile")]),e._v(" class allows us to work with files regardless of whether the examples run in the IDE via the AtomicKotlin course or in the standalone build for the book. All "),n("code",[e._v("DataFile")]),e._v(" objects store their files in the "),n("code",[e._v("targetDir")]),e._v(" subdirectory:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// CheckInstructions/DataFile.kt\npackage checkinstructions\nimport atomictest.eq\nimport java.io.File\nimport java.nio.file.Paths\n\nval targetDir = File("DataFiles")\n\nclass DataFile(val fileName: String) :\n  File(targetDir, fileName) {\n  init {\n    if (!targetDir.exists())\n      targetDir.mkdir()\n  }\n  fun erase() { if (exists()) delete() }\n  fun reset(): File {\n    erase()\n    createNewFile()\n    return this\n  }\n}\n\nfun main() {\n  DataFile("Test.txt").reset() eq\n    Paths.get("DataFiles", "Test.txt")\n      .toString()\n}\n')])])]),n("p",[e._v("A "),n("code",[e._v("DataFile")]),e._v(" manipulates the underlying file in the operating system to write and read that file. The base class for "),n("code",[e._v("DataFile")]),e._v(" is "),n("code",[e._v("java.io.File")]),e._v(", which is one of the oldest classes in the Java library; it appeared in the first version of the language, back when they thought it was a great idea to use the same class ("),n("code",[e._v("File")]),e._v(") to represent both files "),n("em",[e._v("and")]),e._v(" directories. Kotlin can effortlessly inherit "),n("code",[e._v("File")]),e._v(", despite its antiquity.")]),e._v(" "),n("p",[e._v("During construction, we create "),n("code",[e._v("targetDir")]),e._v(" if it doesn’t exist. The "),n("code",[e._v("erase()")]),e._v(" function deletes the file, while "),n("code",[e._v("reset()")]),e._v(" deletes the file and creates a new, empty file.")]),e._v(" "),n("p",[e._v("The Java standard library "),n("code",[e._v("Paths")]),e._v(" class contains only an overloaded "),n("code",[e._v("get()")]),e._v(". The version of "),n("code",[e._v("get()")]),e._v(" we want takes any number of "),n("code",[e._v("String")]),e._v("s and builds a "),n("code",[e._v("Path")]),e._v(" object, representing a directory path that is independent of the operating system.")]),e._v(" "),n("p",[e._v("Opening a file often has a number of preconditions, usually involving file paths, naming, and contents. Consider a function that opens and reads a file with a name beginning with "),n("code",[e._v("file_")]),e._v(". Using "),n("code",[e._v("require()")]),e._v(", we verify that the file name is correct and that the file exists and is not empty:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// CheckInstructions/GetTrace.kt\npackage checkinstructions\nimport atomictest.*\n\nfun getTrace(fileName: String): List<String> {\n  require(fileName.startsWith("file_")) {\n    "$fileName must start with \'file_\'"\n  }\n  val file = DataFile(fileName)\n  require(file.exists()) {\n    "$fileName doesn\'t exist"\n  }\n  val lines = file.readLines()\n  require(lines.isNotEmpty()) {\n    "$fileName is empty"\n  }\n  return lines\n}\n\nfun main() {\n  DataFile("file_empty.txt").writeText("")\n  DataFile("file_wubba.txt").writeText(\n    "wubba lubba dub dub")\n  capture {\n    getTrace("wrong_name.txt")\n  } eq "IllegalArgumentException: " +\n    "wrong_name.txt must start with \'file_\'"\n  capture {\n    getTrace("file_nonexistent.txt")\n  } eq "IllegalArgumentException: " +\n    "file_nonexistent.txt doesn\'t exist"\n  capture {\n    getTrace("file_empty.txt")\n  } eq "IllegalArgumentException: " +\n    "file_empty.txt is empty"\n  getTrace("file_wubba.txt") eq\n    "[wubba lubba dub dub]"\n}\n')])])]),n("p",[e._v("We’ve been using the two-parameter version of "),n("code",[e._v("require()")]),e._v(", but there’s also a single-parameter version that produces a default message:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// CheckInstructions/SingleArgRequire.kt\npackage checkinstructions\nimport atomictest.*\n\nfun singleArgRequire(arg: Int): Int {\n  require(arg > 5)\n  return arg\n}\n\nfun main() {\n  capture {\n    singleArgRequire(5)\n  } eq "IllegalArgumentException: " +\n    "Failed requirement."\n  singleArgRequire(6) eq 6\n}\n')])])]),n("p",[e._v("The failure message is not as explicit as the two-parameter version, but in some cases it is sufficient.")]),e._v(" "),n("h3",{attrs:{id:"requirenotnull"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirenotnull"}},[e._v("#")]),e._v(" "),n("code",[e._v("requireNotNull()")])]),e._v(" "),n("p",[n("code",[e._v("requireNotNull()")]),e._v(" tests its first argument and returns that argument if it is not "),n("code",[e._v("null")]),e._v(". Otherwise, it produces an "),n("code",[e._v("IllegalArgumentException")]),e._v(".")]),e._v(" "),n("p",[e._v("Upon success, "),n("code",[e._v("requireNotNull()")]),e._v("’s argument is automatically smart-cast to a non-nullable type. Thus, you usually don’t need "),n("code",[e._v("requireNotNull()")]),e._v("’s return value:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// CheckInstructions/RequireNotNull.kt\npackage checkinstructions\nimport atomictest.*\n\nfun notNull(n: Int?): Int {\n  requireNotNull(n) {             // [1]\n    "notNull() argument cannot be null"\n  }\n  return n * 9                    // [2]\n}\n\nfun main() {\n  val n: Int? = null\n  capture {\n    notNull(n)\n  } eq "IllegalArgumentException: " +\n    "notNull() argument cannot be null"\n  capture {\n    requireNotNull(n)             // [3]\n  } eq "IllegalArgumentException: " +\n    "Required value was null."\n  notNull(11) eq 99\n}\n')])])]),n("ul",[n("li",[n("strong",[e._v("[2]")]),e._v(" Notice that "),n("code",[e._v("n")]),e._v(" no longer requires a null check, because the call to "),n("code",[e._v("requireNotNull()")]),e._v(" has made it non-nullable.")])]),e._v(" "),n("p",[e._v("As with "),n("code",[e._v("require()")]),e._v(", there’s a two-parameter version with a message you can craft yourself ("),n("strong",[e._v("[1]")]),e._v("), and a single-parameter version with a default message ("),n("strong",[e._v("[3]")]),e._v("). Because "),n("code",[e._v("requireNotNull()")]),e._v(" tests for a specific issue (nullity), the single-parameter version is more useful than it is with "),n("code",[e._v("require()")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"check"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[e._v("#")]),e._v(" "),n("code",[e._v("check()")])]),e._v(" "),n("p",[e._v("A design-by-contract "),n("em",[e._v("postcondition")]),e._v(" tests the results of a function. Postconditions are important for long, complex functions where you might not trust the results. Whenever you can describe constraints on the results of a function, it’s wise to express them as a postcondition.")]),e._v(" "),n("p",[n("code",[e._v("check()")]),e._v(" is identical to "),n("code",[e._v("require()")]),e._v(" except that it throws "),n("code",[e._v("IllegalStateException")]),e._v(". It is typically used at the "),n("em",[e._v("end")]),e._v(" of a function, to verify that the results (or the fields in the function’s object) are valid—that things haven’t somehow gotten into a bad state.")]),e._v(" "),n("p",[e._v("Suppose a complex function writes to a file, and you are unsure whether all execution paths will create that file. Adding a postcondition at the end of the function helps ensure correctness:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// CheckInstructions/Postconditions.kt\npackage checkinstructions\nimport atomictest.*\n\nval resultFile = DataFile("Results.txt")\n\nfun createResultFile(create: Boolean) {\n  if (create)\n    resultFile.writeText("Results\\n# ok")\n  // ... other execution paths\n  check(resultFile.exists()) {\n    "${resultFile.name} doesn\'t exist!"\n  }\n}\n\nfun main() {\n  resultFile.erase()\n  capture {\n    createResultFile(false)\n  } eq "IllegalStateException: " +\n    "Results.txt doesn\'t exist!"\n  createResultFile(true)\n}\n')])])]),n("p",[e._v("Assuming your preconditions ensure valid arguments, a postcondition failure almost always indicates a programming error. For this reason, you’ll see postconditions less often because, once the programmer is convinced the code is correct, the postcondition can be commented or removed if it impacts performance. Of course, it’s always best to leave such tests in place so problems caused by future code changes are immediately detected. One way to do this is by moving postconditions into [unit tests](javascript:void(0)).")]),e._v(" "),n("h3",{attrs:{id:"assert"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#assert"}},[e._v("#")]),e._v(" "),n("code",[e._v("assert()")])]),e._v(" "),n("p",[e._v("To avoid commenting and uncommenting "),n("code",[e._v("check()")]),e._v(" statements, "),n("code",[e._v("assert()")]),e._v(" allows you to enable and disable "),n("code",[e._v("assert()")]),e._v(" checks.")]),e._v(" "),n("p",[n("code",[e._v("assert()")]),e._v(" comes from Java. Assertions are disabled by default, and are only engaged if you explicitly turn them on using a command-line flag. In Kotlin, this flag is "),n("code",[e._v("-ea")]),e._v(".")]),e._v(" "),n("p",[e._v("We recommend using "),n("code",[e._v("require()")]),e._v(" and "),n("code",[e._v("check()")]),e._v(", which are always available without special configuration.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);