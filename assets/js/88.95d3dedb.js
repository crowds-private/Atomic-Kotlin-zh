(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{461:function(e,t,s){"use strict";s.r(t);var a=s(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"base-class-initialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-class-initialization"}},[e._v("#")]),e._v(" Base Class Initialization")]),e._v(" "),s("blockquote",[s("p",[e._v("When a class inherits another class, Kotlin guarantees that both classes are properly initialized.")])]),e._v(" "),s("p",[e._v("Kotlin creates valid objects by ensuring that constructors are called:")]),e._v(" "),s("ul",[s("li",[e._v("Constructors for member objects.")]),e._v(" "),s("li",[e._v("Constructors for new objects added in the derived class.")]),e._v(" "),s("li",[e._v("The constructor for the base class.")])]),e._v(" "),s("p",[e._v("In the [Inheritance](javascript:void(0)) examples, the base classes didn’t have constructor parameters. If a base class "),s("em",[e._v("does")]),e._v(" have constructor parameters, a derived class must provide those arguments during construction.")]),e._v(" "),s("p",[e._v("Here’s the first "),s("code",[e._v("GreatApe")]),e._v(" example, rewritten with constructor parameters:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// BaseClassInit/GreatApe3.kt\npackage baseclassinit\nimport atomictest.eq\n\nopen class GreatApe(\n  val weight: Double,\n  val age: Int\n)\n\nopen class Bonobo(weight: Double, age: Int) :\n  GreatApe(weight, age)\n\nclass Chimpanzee(weight: Double, age: Int) :\n  GreatApe(weight, age)\n\nclass BonoboB(weight: Double, age: Int) :\n  Bonobo(weight, age)\n\nfun GreatApe.info() = "wt: $weight age: $age"\n\nfun main() {\n  GreatApe(100.0, 12).info() eq\n    "wt: 100.0 age: 12"\n  Bonobo(110.0, 13).info() eq\n    "wt: 110.0 age: 13"\n  Chimpanzee(120.0, 14).info() eq\n    "wt: 120.0 age: 14"\n  BonoboB(130.0, 15).info() eq\n    "wt: 130.0 age: 15"\n}\n')])])]),s("p",[e._v("When inheriting from "),s("code",[e._v("GreatApe")]),e._v(", you must pass the necessary constructor arguments to the "),s("code",[e._v("GreatApe")]),e._v(" base class, otherwise you’ll get a compile-time error message.")]),e._v(" "),s("p",[e._v("After Kotlin creates memory for your object, it calls the base-class constructor first, then the constructor for the next-derived class, and so on until it reaches the most-derived constructor. This way, all constructor calls can rely on the validity of all the sub-objects created before them. Indeed, those are the only things it knows about; a "),s("code",[e._v("Bonobo")]),e._v(" knows it inherits from "),s("code",[e._v("GreatApe")]),e._v(" and the "),s("code",[e._v("Bonobo")]),e._v(" constructor can call functions in the "),s("code",[e._v("GreatApe")]),e._v(" class, but a "),s("code",[e._v("GreatApe")]),e._v(" cannot know whether it’s a "),s("code",[e._v("Bonobo")]),e._v(" or a "),s("code",[e._v("Chimpanzee")]),e._v(", or call functions specific to those subclasses.")]),e._v(" "),s("p",[e._v("When inheriting from a class you must provide arguments to the base-class constructor after the base class name. This calls the base-class constructor during object construction:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// BaseClassInit/NoArgConstructor.kt\npackage baseclassinit\n\nopen class SuperClass1(val i: Int)\nclass SubClass1(i: Int) : SuperClass1(i)\n\nopen class SuperClass2\nclass SubClass2 : SuperClass2()\n")])])]),s("p",[e._v("When there are no base-class constructor parameters, Kotlin still requires empty parentheses after the base class name, to call that constructor without arguments.")]),e._v(" "),s("p",[e._v("If there are secondary constructors in the base class you may call one of those instead:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// BaseClassInit/House.kt\npackage baseclassinit\nimport atomictest.eq\n\nopen class House(\n  val address: String,\n  val state: String,\n  val zip: String\n) {\n  constructor(fullAddress: String) :\n    this(fullAddress.substringBefore(", "),\n      fullAddress.substringAfter(", ")\n        .substringBefore(" "),\n      fullAddress.substringAfterLast(" "))\n  val fullAddress: String\n    get() = "$address, $state $zip"\n}\n\nclass VacationHouse(\n  address: String,\n  state: String,\n  zip: String,\n  val startMonth: String,\n  val endMonth: String\n) : House(address, state, zip) {\n  override fun toString() =\n    "Vacation house at $fullAddress " +\n    "from $startMonth to $endMonth"\n}\n\nclass TreeHouse(\n  val name: String\n) : House("Tree Street, TR 00000") {\n  override fun toString() =\n    "$name tree house at $fullAddress"\n}\n\nfun main() {\n  val vacationHouse = VacationHouse(\n    address = "8 Target St.",\n    state = "KS",\n    zip = "66632",\n    startMonth = "May",\n    endMonth = "September")\n  vacationHouse eq\n    "Vacation house at 8 Target St., " +\n    "KS 66632 from May to September"\n  TreeHouse("Oak") eq\n    "Oak tree house at Tree Street, TR 00000"\n}\n')])])]),s("p",[e._v("When "),s("code",[e._v("VacationHouse")]),e._v(" inherits from "),s("code",[e._v("House")]),e._v(" it passes the appropriate arguments to the primary "),s("code",[e._v("House")]),e._v(" constructor. It also adds its own parameters "),s("code",[e._v("startMonth")]),e._v(" and "),s("code",[e._v("endMonth")]),e._v("—you aren’t limited by the number, type or order of the parameters in the base class. Your only responsibility is to provide the correct arguments in the call to the base-class constructor.")]),e._v(" "),s("p",[e._v("You call an overloaded base-class constructor by passing the matching constructor arguments in the base-class constructor call. You see this in the definitions of "),s("code",[e._v("VacationHouse")]),e._v(" and "),s("code",[e._v("TreeHouse")]),e._v(". Each calls a different base-class constructor.")]),e._v(" "),s("p",[e._v("Inside a secondary constructor of a derived class you can either call the base-class constructor or a different derived-class constructor:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// BaseClassInit/OtherConstructors.kt\npackage baseclassinit\nimport atomictest.eq\n\nopen class Base(val i: Int)\n\nclass Derived : Base {\n  constructor(i: Int) : super(i)\n  constructor() : this(9)\n}\n\nfun main() {\n  val d1 = Derived(11)\n  d1.i eq 11\n  val d2 = Derived()\n  d2.i eq 9\n}\n")])])]),s("p",[e._v("To call the base-class constructor, use the "),s("code",[e._v("super")]),e._v(" keyword, passing the constructor arguments as if it is a function call. Use "),s("code",[e._v("this")]),e._v(" to call another constructor of the same class.")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);