(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{471:function(e,n,a){"use strict";a.r(n);var t=a(44),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nested-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-classes"}},[e._v("#")]),e._v(" Nested Classes")]),e._v(" "),a("blockquote",[a("p",[e._v("Nested classes enable more refined structures within your objects.")])]),e._v(" "),a("p",[e._v("A nested class is simply a class within the namespace of the outer class. The implication is that the outer class “owns” the nested class. This feature is not essential, but nesting a class can clarify your code. Here, "),a("code",[e._v("Plane")]),e._v(" is nested within "),a("code",[e._v("Airport")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// NestedClasses/Airport.kt\npackage nestedclasses\nimport atomictest.eq\nimport nestedclasses.Airport.Plane\n\nclass Airport(private val code: String) {\n  open class Plane {\n    // Can access private properties:\n    fun contact(airport: Airport) =\n      "Contacting ${airport.code}"\n  }\n  private class PrivatePlane : Plane()\n  fun privatePlane(): Plane = PrivatePlane()\n}\n\nfun main() {\n  val denver = Airport("DEN")\n  var plane = Plane()                   // [1]\n  plane.contact(denver) eq "Contacting DEN"\n  // Can\'t do this:\n  // val privatePlane = Airport.PrivatePlane()\n  val frankfurt = Airport("FRA")\n  plane = frankfurt.privatePlane()\n  // Can\'t do this:\n  // val p = plane as PrivatePlane      // [2]\n  plane.contact(frankfurt) eq "Contacting FRA"\n}\n')])])]),a("p",[e._v("In "),a("code",[e._v("contact()")]),e._v(", the nested class "),a("code",[e._v("Plane")]),e._v(" has access to the "),a("code",[e._v("private")]),e._v(" property "),a("code",[e._v("code")]),e._v(" in the "),a("code",[e._v("airport")]),e._v(" argument, whereas an ordinary class would not have this access. Other than that, "),a("code",[e._v("Plane")]),e._v(" is simply a class inside the "),a("code",[e._v("Airport")]),e._v(" namespace.")]),e._v(" "),a("p",[e._v("Creating a "),a("code",[e._v("Plane")]),e._v(" object does not require an "),a("code",[e._v("Airport")]),e._v(" object, but if you create it outside the "),a("code",[e._v("Airport")]),e._v(" class body, you must ordinarily qualify the constructor call in "),a("strong",[e._v("[1]")]),e._v(". By importing "),a("code",[e._v("nestedclasses.Airport.Plane")]),e._v(" we avoid this qualification.")]),e._v(" "),a("p",[e._v("A nested class can be "),a("code",[e._v("private")]),e._v(", as with "),a("code",[e._v("PrivatePlane")]),e._v(". Making it "),a("code",[e._v("private")]),e._v(" means that "),a("code",[e._v("PrivatePlane")]),e._v(" is completely invisible outside the body of "),a("code",[e._v("Airport")]),e._v(", so you cannot call the "),a("code",[e._v("PrivatePlane")]),e._v(" constructor outside of "),a("code",[e._v("Airport")]),e._v(". If you define and return a "),a("code",[e._v("PrivatePlane")]),e._v(" from a member function, as seen in "),a("code",[e._v("privatePlane()")]),e._v(", the result must be upcast to a "),a("code",[e._v("public")]),e._v(" type (assuming it extends a "),a("code",[e._v("public")]),e._v(" type), and cannot be downcast to the "),a("code",[e._v("private")]),e._v(" type, as seen in "),a("strong",[e._v("[2]")]),e._v(".")]),e._v(" "),a("p",[e._v("Here’s an example of nesting where "),a("code",[e._v("Cleanable")]),e._v(" is a base class for both the enclosing class "),a("code",[e._v("House")]),e._v(" and all the nested classes. "),a("code",[e._v("clean()")]),e._v(" goes through a "),a("code",[e._v("List")]),e._v(" of "),a("code",[e._v("parts")]),e._v(" and calls "),a("code",[e._v("clean()")]),e._v(" for each one, producing a kind of recursion:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// NestedClasses/NestedHouse.kt\npackage nestedclasses\nimport atomictest.*\n\nabstract class Cleanable(val id: String) {\n  open val parts: List<Cleanable> = listOf()\n  fun clean(): String {\n    val text = "$id clean"\n    if (parts.isEmpty()) return text\n    return "${parts.joinToString(\n      " ", "(", ")",\n      transform = Cleanable::clean)} $text\\n"\n  }\n}\n\nclass House : Cleanable("House") {\n  override val parts = listOf(\n    Bedroom("Master Bedroom"),\n    Bedroom("Guest Bedroom")\n  )\n  class Bedroom(id: String) : Cleanable(id) {\n    override val parts =\n      listOf(Closet(), Bathroom())\n    class Closet : Cleanable("Closet") {\n      override val parts =\n        listOf(Shelf(), Shelf())\n      class Shelf : Cleanable("Shelf")\n    }\n    class Bathroom : Cleanable("Bathroom") {\n      override val parts =\n        listOf(Toilet(), Sink())\n      class Toilet : Cleanable("Toilet")\n      class Sink : Cleanable("Sink")\n    }\n  }\n}\n\nfun main() {\n  House().clean() eq """\n  (((Shelf clean Shelf clean) Closet clean\n   (Toilet clean Sink clean) Bathroom clean\n  ) Master Bedroom clean\n   ((Shelf clean Shelf clean) Closet clean\n   (Toilet clean Sink clean) Bathroom clean\n  ) Guest Bedroom clean\n  ) House clean\n  """\n}\n')])])]),a("p",[e._v("Notice the multiple levels of nesting. For example, "),a("code",[e._v("Bedroom")]),e._v(" contains "),a("code",[e._v("Bathroom")]),e._v(" which contains "),a("code",[e._v("Toilet")]),e._v(" and "),a("code",[e._v("Sink")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"local-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-classes"}},[e._v("#")]),e._v(" Local Classes")]),e._v(" "),a("p",[e._v("Classes that are nested inside functions are called "),a("em",[e._v("local")]),e._v(" classes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// NestedClasses/LocalClasses.kt\npackage nestedclasses\n\nfun localClasses() {\n  open class Amphibian\n  class Frog : Amphibian()\n  val amphibian: Amphibian = Frog()\n}\n")])])]),a("p",[a("code",[e._v("Amphibian")]),e._v(" looks like a candidate to be an "),a("code",[e._v("interface")]),e._v(" rather than an "),a("code",[e._v("open class")]),e._v(". However, local interfaces are not allowed.")]),e._v(" "),a("p",[e._v("Local "),a("code",[e._v("open")]),e._v(" classes should be rare; if you need one, what you’re trying to make is probably significant enough to create a regular class.")]),e._v(" "),a("p",[a("code",[e._v("Amphibian")]),e._v(" and "),a("code",[e._v("Frog")]),e._v(" are invisible outside "),a("code",[e._v("localClasses()")]),e._v(", so you can’t return them from the function. To return objects of local classes, you must upcast them to a class or interface defined "),a("em",[e._v("outside")]),e._v(" the function:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// NestedClasses/ReturnLocal.kt\npackage nestedclasses\n\ninterface Amphibian\n\nfun createAmphibian(): Amphibian {\n  class Frog : Amphibian\n  return Frog()\n}\n\nfun main() {\n  val amphibian = createAmphibian()\n  // amphibian as Frog\n}\n")])])]),a("p",[a("code",[e._v("Frog")]),e._v(" is still invisible outside "),a("code",[e._v("createAmphibian()")]),e._v("—in "),a("code",[e._v("main()")]),e._v(", you cannot cast "),a("code",[e._v("amphibian")]),e._v(" to a "),a("code",[e._v("Frog")]),e._v(" because "),a("code",[e._v("Frog")]),e._v(" isn’t available, so Kotlin reports the attempt to use "),a("code",[e._v("Frog")]),e._v(" as an “unresolved reference.”")]),e._v(" "),a("h3",{attrs:{id:"classes-inside-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classes-inside-interfaces"}},[e._v("#")]),e._v(" Classes Inside Interfaces")]),e._v(" "),a("p",[e._v("Classes can be nested within interfaces:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// NestedClasses/WithinInterface.kt\npackage nestedclasses\nimport atomictest.eq\n\ninterface Item {\n  val type: Type\n  data class Type(val type: String)\n}\n\nclass Bolt(type: String) : Item {\n  override val type = Item.Type(type)\n}\n\nfun main() {\n  val items = listOf(\n    Bolt("Slotted"), Bolt("Hex")\n  )\n  items.map(Item::type) eq\n    "[Type(type=Slotted), Type(type=Hex)]"\n}\n')])])]),a("p",[e._v("In "),a("code",[e._v("Bolt")]),e._v(", the "),a("code",[e._v("val type")]),e._v(" must be overridden and assigned using the qualified class name "),a("code",[e._v("Item.Type")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"nested-enumerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-enumerations"}},[e._v("#")]),e._v(" Nested Enumerations")]),e._v(" "),a("p",[e._v("Enumerations are classes, so they can be nested inside other classes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// NestedClasses/Ticket.kt\npackage nestedclasses\nimport atomictest.eq\nimport nestedclasses.Ticket.Seat.*\n\nclass Ticket(\n  val name: String,\n  val seat: Seat = Coach\n) {\n  enum class Seat {\n    Coach,\n    Premium,\n    Business,\n    First\n  }\n  fun upgrade(): Ticket {\n    val newSeat = values()[\n      (seat.ordinal + 1)\n      .coerceAtMost(First.ordinal)\n    ]\n    return Ticket(name, newSeat)\n  }\n  fun meal() = when(seat) {\n    Coach -> "Bag Meal"\n    Premium -> "Bag Meal with Cookie"\n    Business -> "Hot Meal"\n    First -> "Private Chef"\n  }\n  override fun toString() = "$seat"\n}\n\nfun main() {\n  val tickets = listOf(\n    Ticket("Jerry"),\n    Ticket("Summer", Premium),\n    Ticket("Squanchy", Business),\n    Ticket("Beth", First)\n  )\n  tickets.map(Ticket::meal) eq\n    "[Bag Meal, Bag Meal with Cookie, " +\n    "Hot Meal, Private Chef]"\n  tickets.map(Ticket::upgrade) eq\n    "[Premium, Business, First, First]"\n  tickets eq\n    "[Coach, Premium, Business, First]"\n  tickets.map(Ticket::meal) eq\n    "[Bag Meal, Bag Meal with Cookie, " +\n    "Hot Meal, Private Chef]"\n}\n')])])]),a("p",[a("code",[e._v("upgrade()")]),e._v(" adds one to the "),a("code",[e._v("ordinal")]),e._v(" value of the "),a("code",[e._v("seat")]),e._v(", then uses the library function "),a("code",[e._v("coerceAtMost()")]),e._v(" to ensure the new value does not exceed "),a("code",[e._v("First.ordinal")]),e._v(" before indexing into "),a("code",[e._v("values()")]),e._v(" to produce the new "),a("code",[e._v("Seat")]),e._v(" type. Following functional programming principles, upgrading a "),a("code",[e._v("Ticket")]),e._v(" produces a new "),a("code",[e._v("Ticket")]),e._v(" rather than modifying the old one.")]),e._v(" "),a("p",[a("code",[e._v("meal()")]),e._v(" uses "),a("code",[e._v("when")]),e._v(" to test every type of "),a("code",[e._v("Seat")]),e._v(" and this suggests we could use polymorphism instead.")]),e._v(" "),a("p",[e._v("Enumerations cannot be nested within functions, and cannot inherit from other classes (including other enumerations).")]),e._v(" "),a("p",[e._v("Interfaces can contain nested enumerations. "),a("code",[e._v("FillIt")]),e._v(" is a game-like simulation that fills a square grid with randomly-chosen "),a("code",[e._v("X")]),e._v(" and "),a("code",[e._v("O")]),e._v(" marks:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// NestedClasses/FillIt.kt\npackage nestedclasses\nimport nestedclasses.Game.State.*\nimport nestedclasses.Game.Mark.*\nimport kotlin.random.Random\nimport atomictest.*\n\ninterface Game {\n  enum class State { Playing, Finished }\n  enum class Mark { Blank, X ,O }\n}\n\nclass FillIt(\n  val side: Int = 3, randomSeed: Int = 0\n): Game {\n  val rand = Random(randomSeed)\n  private var state = Playing\n  private val grid =\n    MutableList(side * side) { Blank }\n  private var player = X\n  fun turn() {\n    val blanks = grid.withIndex()\n      .filter { it.value == Blank }\n    if(blanks.isEmpty()) {\n      state = Finished\n    } else {\n      grid[blanks.random(rand).index] = player\n      player = if (player == X) O else X\n    }\n  }\n  fun play() {\n    while(state != Finished)\n      turn()\n  }\n  override fun toString() =\n    grid.chunked(side).joinToString("\\n")\n}\n\nfun main() {\n  val game = FillIt(8, 17)\n  game.play()\n  game eq """\n  [O, X, O, X, O, X, X, X]\n  [X, O, O, O, O, O, X, X]\n  [O, O, X, O, O, O, X, X]\n  [X, O, O, O, O, O, X, O]\n  [X, X, O, O, X, X, X, O]\n  [X, X, O, O, X, X, O, X]\n  [O, X, X, O, O, O, X, O]\n  [X, O, X, X, X, O, X, X]\n  """\n}\n')])])]),a("p",[e._v("For testability, we seed a "),a("code",[e._v("Random")]),e._v(" object with "),a("code",[e._v("randomSeed")]),e._v(" to produce identical output each time the program runs. Each element of "),a("code",[e._v("grid")]),e._v(" is initialized with "),a("code",[e._v("Blank")]),e._v(". In "),a("code",[e._v("turn()")]),e._v(", we first find all cells containing "),a("code",[e._v("Blank")]),e._v(", along with their indices. If there are no more "),a("code",[e._v("Blank")]),e._v(" cells then the simulation is complete. Otherwise, we use "),a("code",[e._v("random()")]),e._v(" with our seeded generator to select one of the "),a("code",[e._v("Blank")]),e._v(" cells. Because we used "),a("code",[e._v("withIndex()")]),e._v(" earlier, we must select the "),a("code",[e._v("index")]),e._v(" property to produce the location of the cell we want to change.")]),e._v(" "),a("p",[e._v("To display the "),a("code",[e._v("List")]),e._v(" in the form of a two-dimensional grid, "),a("code",[e._v("toString()")]),e._v(" uses the "),a("code",[e._v("chunked()")]),e._v(" library function to break the "),a("code",[e._v("List")]),e._v(" into pieces, each of length "),a("code",[e._v("side")]),e._v(", then joins these together with newlines.")]),e._v(" "),a("p",[e._v("Try experimenting with "),a("code",[e._v("FillIt")]),e._v(" using different "),a("code",[e._v("side")]),e._v("s and "),a("code",[e._v("randomSeed")]),e._v("s.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);