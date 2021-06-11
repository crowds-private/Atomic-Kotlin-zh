(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{569:function(n,e,t){"use strict";t.r(e);var o=t(44),a=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"companion-objects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#companion-objects"}},[n._v("#")]),n._v(" Companion Objects")]),n._v(" "),t("blockquote",[t("p",[n._v("Member functions act on particular instances of a class. Some functions aren’t “about” an object, so they don’t need to be tied to that object.")])]),n._v(" "),t("p",[n._v("Functions and fields inside "),t("code",[n._v("companion object")]),n._v("s are about the class. Regular class elements can access the elements of the companion object, but the companion object elements cannot access the regular class elements.")]),n._v(" "),t("p",[n._v("As you saw in [Objects](javascript:void(0)), it’s possible to define a regular "),t("code",[n._v("object")]),n._v(" inside a class, but that doesn’t provide an association between the "),t("code",[n._v("object")]),n._v(" and the class. In particular, you’re forced to explicitly name the nested "),t("code",[n._v("object")]),n._v(" when you refer to its members. If you define a companion object inside a class, its elements become transparently available to that class:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// CompanionObjects/CompanionObject.kt\npackage companionobjects\nimport atomictest.eq\n\nclass WithCompanion {\n  companion object {\n    val i = 3\n    fun f() = i * 3\n  }\n  fun g() = i + f()\n}\n\nfun WithCompanion.Companion.h() = f() * i\n\nfun main() {\n  val wc = WithCompanion()\n  wc.g() eq 12\n  WithCompanion.i eq 3\n  WithCompanion.f() eq 9\n  WithCompanion.h() eq 27\n}\n")])])]),t("p",[n._v("Outside the class, you access members of the companion object using the class name, as in "),t("code",[n._v("WithCompanion.i")]),n._v(" and "),t("code",[n._v("WithCompanion.f()")]),n._v(". Other members of the class can access the companion object elements without qualification, as you see in the definition of "),t("code",[n._v("g()")]),n._v(".")]),n._v(" "),t("p",[t("code",[n._v("h()")]),n._v(" is an extension function to the companion object.")]),n._v(" "),t("p",[n._v("If a function doesn’t require access to private class members, you can choose to define it at file scope rather than putting it in a companion object.")]),n._v(" "),t("p",[n._v("Only one companion object is allowed per class. For clarity, you can give the companion object a name:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// CompanionObjects/NamingCompanionObjects.kt\npackage companionobjects\nimport atomictest.eq\n\nclass WithNamed {\n  companion object Named {\n    fun s() = "from Named"\n  }\n}\n\nclass WithDefault {\n  companion object {\n    fun s() = "from Default"\n  }\n}\n\nfun main() {\n  WithNamed.s() eq "from Named"\n  WithNamed.Named.s() eq "from Named"\n  WithDefault.s() eq "from Default"\n  // The default name is "Companion":\n  WithDefault.Companion.s() eq "from Default"\n}\n')])])]),t("p",[n._v("Even when you name the companion object you can still access its elements without using the name. If you don’t give the companion object a name, Kotlin assigns it the name "),t("code",[n._v("Companion")]),n._v(".")]),n._v(" "),t("p",[n._v("If you create a property inside a companion object, it produces a single piece of storage for that field, shared with all instances of the associated class:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// CompanionObjects/ObjectProperty.kt\npackage companionobjects\nimport atomictest.eq\n\nclass WithObjectProperty {\n  companion object {\n    private var n: Int = 0 // Only one\n  }\n  fun increment() = ++n\n}\n\nfun main() {\n  val a = WithObjectProperty()\n  val b = WithObjectProperty()\n  a.increment() eq 1\n  b.increment() eq 2\n  a.increment() eq 3\n}\n")])])]),t("p",[n._v("The tests in "),t("code",[n._v("main()")]),n._v(" show that "),t("code",[n._v("n")]),n._v(" has only a single piece of storage, no matter how many instances of "),t("code",[n._v("WithObjectProperty")]),n._v(" are created. "),t("code",[n._v("a")]),n._v(" and "),t("code",[n._v("b")]),n._v(" both access the same memory for "),t("code",[n._v("n")]),n._v(".")]),n._v(" "),t("p",[t("code",[n._v("increment()")]),n._v(" shows that you can access "),t("code",[n._v("private")]),n._v(" members of the "),t("code",[n._v("companion object")]),n._v(" from its surrounding class.")]),n._v(" "),t("p",[n._v("When a function is "),t("em",[n._v("only")]),n._v(" accessing properties in the companion object, it makes sense to move that function inside the companion object:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// CompanionObjects/ObjectFunctions.kt\npackage companionobjects\nimport atomictest.eq\n\nclass CompanionObjectFunction {\n  companion object {\n    private var n: Int = 0\n    fun increment() = ++n\n  }\n}\n\nfun main() {\n  CompanionObjectFunction.increment() eq 1\n  CompanionObjectFunction.increment() eq 2\n}\n")])])]),t("p",[n._v("You no longer need a "),t("code",[n._v("CompanionObjectFunction")]),n._v(" instance to call "),t("code",[n._v("increment()")]),n._v(".")]),n._v(" "),t("p",[n._v("Suppose you’d like to keep a count of every object you create, to give each one a unique readable identifier:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// CompanionObjects/ObjectCounter.kt\npackage companionobjects\nimport atomictest.eq\n\nclass Counted {\n  companion object {\n    private var count = 0\n  }\n  private val id = count++\n  override fun toString() = "#$id"\n}\n\nfun main() {\n  List(4) { Counted() } eq "[#0, #1, #2, #3]"\n}\n')])])]),t("p",[n._v("A companion object can be an instance of a class defined elsewhere:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// CompanionObjects/CompanionInstance.kt\npackage companionobjects\nimport atomictest.*\n\ninterface ZI {\n  fun f(): String\n  fun g(): String\n}\n\nopen class ZIOpen : ZI {\n  override fun f() = "ZIOpen.f()"\n  override fun g() = "ZIOpen.g()"\n}\n\nclass ZICompanion {\n  companion object: ZIOpen()\n  fun u() = trace("${f()} ${g()}")\n}\n\nclass ZICompanionInheritance {\n  companion object: ZIOpen() {\n    override fun g() =\n      "ZICompanionInheritance.g()"\n    fun h() = "ZICompanionInheritance.h()"\n  }\n  fun u() = trace("${f()} ${g()} ${h()}")\n}\n\nclass ZIClass {\n  companion object: ZI {\n    override fun f() = "ZIClass.f()"\n    override fun g() = "ZIClass.g()"\n  }\n  fun u() = trace("${f()} ${g()}")\n}\n\nfun main() {\n  ZIClass.f()\n  ZIClass.g()\n  ZIClass().u()\n  ZICompanion.f()\n  ZICompanion.g()\n  ZICompanion().u()\n  ZICompanionInheritance.f()\n  ZICompanionInheritance.g()\n  ZICompanionInheritance().u()\n  trace eq """\n    ZIClass.f() ZIClass.g()\n    ZIOpen.f() ZIOpen.g()\n    ZIOpen.f()\n    ZICompanionInheritance.g()\n    ZICompanionInheritance.h()\n  """\n}\n')])])]),t("p",[t("code",[n._v("ZICompanion")]),n._v(" uses a "),t("code",[n._v("ZIOpen")]),n._v(" object as its companion object, and "),t("code",[n._v("ZICompanionInheritance")]),n._v(" creates a "),t("code",[n._v("ZIOpen")]),n._v(" object "),t("em",[n._v("while")]),n._v(" overriding and extending "),t("code",[n._v("ZIOpen")]),n._v(". "),t("code",[n._v("ZIClass")]),n._v(" shows that you can implement an interface while creating the companion object.")]),n._v(" "),t("p",[n._v("If the class you want to use as a companion object is not "),t("code",[n._v("open")]),n._v(", you cannot use it directly as we did above. However, if that class implements an interface you can still use it via [Class Delegation](javascript:void(0)):")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// CompanionObjects/CompanionDelegation.kt\npackage companionobjects\nimport atomictest.*\n\nclass ZIClosed : ZI {\n  override fun f() = "ZIClosed.f()"\n  override fun g() = "ZIClosed.g()"\n}\n\nclass ZIDelegation {\n  companion object: ZI by ZIClosed()\n  fun u() = trace("${f()} ${g()}")\n}\n\nclass ZIDelegationInheritance {\n  companion object: ZI by ZIClosed() {\n    override fun g() =\n      "ZIDelegationInheritance.g()"\n    fun h() =\n      "ZIDelegationInheritance.h()"\n  }\n  fun u() = trace("${f()} ${g()} ${h()}")\n}\n\nfun main() {\n  ZIDelegation.f()\n  ZIDelegation.g()\n  ZIDelegation().u()\n  ZIDelegationInheritance.f()\n  ZIDelegationInheritance.g()\n  ZIDelegationInheritance().u()\n  trace eq """\n    ZIClosed.f() ZIClosed.g()\n    ZIClosed.f()\n    ZIDelegationInheritance.g()\n    ZIDelegationInheritance.h()\n  """\n}\n')])])]),t("p",[t("code",[n._v("ZIDelegationInheritance")]),n._v(" shows that you can take the non-"),t("code",[n._v("open")]),n._v(" class "),t("code",[n._v("ZIClosed")]),n._v(", delegate it, then override and extend "),t("em",[n._v("that delegate")]),n._v(". Delegation forwards the methods of an interface to the instance that provides an implementation. Even if the class of that instance is "),t("code",[n._v("final")]),n._v(", we can still override and add methods to the delegation receiver.")]),n._v(" "),t("p",[n._v("Here’s a small brain-teaser:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// CompanionObjects/DelegateAndExtend.kt\npackage companionobjects\nimport atomictest.eq\n\ninterface Extended: ZI {\n  fun u(): String\n}\n\nclass Extend : ZI by Companion, Extended {\n  companion object: ZI {\n    override fun f() = "Extend.f()"\n    override fun g() = "Extend.g()"\n  }\n  override fun u() = "${f()} ${g()}"\n}\n\nprivate fun test(e: Extended): String {\n  e.f()\n  e.g()\n  return e.u()\n}\n\nfun main() {\n  test(Extend()) eq "Extend.f() Extend.g()"\n}\n')])])]),t("p",[n._v("In "),t("code",[n._v("Extend")]),n._v(", the "),t("code",[n._v("ZI")]),n._v(" interface is implemented using its own "),t("code",[n._v("companion object")]),n._v(", which has the default name "),t("code",[n._v("Companion")]),n._v(". But we are also implementing the "),t("code",[n._v("Extended")]),n._v(" interface, which is the "),t("code",[n._v("ZI")]),n._v(" interface plus an extra function "),t("code",[n._v("u()")]),n._v(". The "),t("code",[n._v("ZI")]),n._v(" portion of "),t("code",[n._v("Extended")]),n._v(" is already implemented, via "),t("code",[n._v("Companion")]),n._v(", so we only need to "),t("code",[n._v("override")]),n._v(" the additional function "),t("code",[n._v("u()")]),n._v(" to complete "),t("code",[n._v("Extend")]),n._v(". Now an "),t("code",[n._v("Extend")]),n._v(" object can be upcast to "),t("code",[n._v("Extended")]),n._v(" as the argument to "),t("code",[n._v("test()")]),n._v(".")]),n._v(" "),t("p",[n._v("A common use for a companion object is controlling object creation—this is the "),t("em",[n._v("Factory Method")]),n._v(" pattern. Suppose you’d like to only allow the creation of "),t("code",[n._v("List")]),n._v("s of "),t("code",[n._v("Numbered2")]),n._v(" objects, and not individual "),t("code",[n._v("Numbered2")]),n._v(" objects:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// CompanionObjects/CompanionFactory.kt\npackage companionobjects\nimport atomictest.eq\n\nclass Numbered2\nprivate constructor(private val id: Int) {\n  override fun toString(): String = "#$id"\n  companion object Factory {\n    fun create(size: Int) =\n      List(size) { Numbered2(it) }\n  }\n}\n\nfun main() {\n  Numbered2.create(0) eq "[]"\n  Numbered2.create(5) eq\n    "[#0, #1, #2, #3, #4]"\n}\n')])])]),t("p",[n._v("The "),t("code",[n._v("Numbered2")]),n._v(" constructor is "),t("code",[n._v("private")]),n._v(". This means there’s only one way to create an instance—via the "),t("code",[n._v("create()")]),n._v(" factory function. A factory function can sometimes solve problems that regular constructors cannot.")]),n._v(" "),t("p",[n._v("Constructors in companion objects are initialized when the enclosing class is instantiated for the first time in a program:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// CompanionObjects/Initialization.kt\npackage companionobjects\nimport atomictest.*\n\nclass CompanionInit {\n  companion object {\n    init {\n      trace("Companion Constructor")\n    }\n  }\n}\n\nfun main() {\n  trace("Before")\n  CompanionInit()\n  trace("After 1")\n  CompanionInit()\n  trace("After 2")\n  CompanionInit()\n  trace("After 3")\n  trace eq """\n    Before\n    Companion Constructor\n    After 1\n    After 2\n    After 3\n  """\n}\n')])])]),t("p",[n._v("You can see from the output that the companion object is constructed only once, the first time a "),t("code",[n._v("CompanionInit()")]),n._v(" object is created.")]),n._v(" "),t("p",[t("em",[t("strong",[n._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);