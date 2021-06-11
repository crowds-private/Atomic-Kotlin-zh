(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{577:function(e,t,n){"use strict";n.r(t);var s=n(44),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"unit-testing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing"}},[e._v("#")]),e._v(" Unit Testing")]),e._v(" "),n("blockquote",[n("p",[e._v("Unit testing is the practice of creating a correctness test for each aspect of a function. Unit tests rapidly reveal broken code, accelerating development speed.")])]),e._v(" "),n("p",[e._v("There’s far more to testing than we can cover in this book, so this atom is only a basic introduction.")]),e._v(" "),n("p",[e._v("The “Unit” in “Unit testing” describes a small piece of code, usually a function, that is tested separately and independently. This should not be confused with the unrelated Kotlin "),n("code",[e._v("Unit")]),e._v(" type.")]),e._v(" "),n("p",[e._v("Unit tests are typically written by the programmer, and run each time you build the project. Because unit tests run so frequently, they must run quickly.")]),e._v(" "),n("p",[e._v("You’ve been learning about unit testing while reading this book, via the "),n("code",[e._v("AtomicTest")]),e._v(" library we use to validate the book’s code. "),n("code",[e._v("AtomicTest")]),e._v(" uses the concise "),n("code",[e._v("eq")]),e._v(" for the most common pattern in unit testing: comparing an expected result with a generated result.")]),e._v(" "),n("p",[e._v("Of the numerous unit test frameworks, JUnit is the most popular for Java. There are also frameworks created specifically for Kotlin. The Kotlin standard library includes "),n("code",[e._v("kotlin.test")]),e._v(", which provides a facade for different test libraries. This way you’re not limited to using a particular library. "),n("code",[e._v("kotlin.test")]),e._v(" also contains wrappers for basic assertion functions.")]),e._v(" "),n("p",[e._v("To use "),n("code",[e._v("kotlin.test")]),e._v(", you must modify the "),n("code",[e._v("dependencies")]),e._v(" section of your project’s "),n("code",[e._v("build.gradle")]),e._v(" file to include:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('testImplementation "org.jetbrains.kotlin:kotlin-test-common"\n')])])]),n("p",[e._v("Inside a unit test, the programmer calls various assertion functions that validate the expected behavior of the function under test. Assertion functions include "),n("code",[e._v("assertEquals()")]),e._v(", which compares the actual value against an expected value, and "),n("code",[e._v("assertTrue()")]),e._v(", which tests its first argument, a Boolean expression. In this example, the unit tests are the functions with names beginning with the word "),n("code",[e._v("test")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// UnitTesting/NoFramework.kt\npackage unittesting\nimport kotlin.test.assertEquals\nimport kotlin.test.assertTrue\nimport atomictest.*\n\nfun fortyTwo() = 42\n\nfun testFortyTwo(n: Int = 42) {\n  assertEquals(\n    expected = n,\n    actual = fortyTwo(),\n    message = "Incorrect,")\n}\n\nfun allGood(b: Boolean = true) = b\n\nfun testAllGood(b: Boolean = true) {\n  assertTrue(allGood(b), "Not good")\n}\n\nfun main() {\n  testFortyTwo()\n  testAllGood()\n  capture {\n    testFortyTwo(43)\n  } contains\n    listOf("expected:", "<43>",\n      "but was", "<42>")\n  capture {\n    testAllGood(false)\n  } contains listOf("Error", "Not good")\n}\n')])])]),n("p",[e._v("In "),n("code",[e._v("main()")]),e._v(", you can see that a failing assertion function produces an "),n("code",[e._v("AssertionError")]),e._v("—this means the unit test has failed, signaling the problem to the programmer.")]),e._v(" "),n("p",[n("code",[e._v("kotlin.test")]),e._v(" contains an assortment of functions that have names starting with "),n("code",[e._v("assert")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("assertEquals()")]),e._v(",  "),n("code",[e._v("assertNotEquals()")])]),e._v(" "),n("li",[n("code",[e._v("assertTrue()")]),e._v(",  "),n("code",[e._v("assertFalse()")])]),e._v(" "),n("li",[n("code",[e._v("assertNull()")]),e._v(",  "),n("code",[e._v("assertNotNull()")])]),e._v(" "),n("li",[n("code",[e._v("assertFails()")]),e._v(",  "),n("code",[e._v("assertFailsWith()")])])]),e._v(" "),n("p",[e._v("Similar functions are typically included in every unit test framework, but the names and parameter order can be different. For example, the "),n("code",[e._v("message")]),e._v(" parameter in "),n("code",[e._v("assertEquals()")]),e._v(" might be first or last. Also, it’s easy to mix up "),n("code",[e._v("expected")]),e._v(" and "),n("code",[e._v("actual")]),e._v("—using named arguments avoids this problem.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("expect()")]),e._v(" function in "),n("code",[e._v("kotlin.test")]),e._v(" runs a block of code and compares that result with the expected value:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("fun <T> expect(\n  expected: T,\n  message: String?,\n  block: () -> T\n) {\n  assertEquals(expected, block(), message)\n}\n")])])]),n("p",[e._v("Here’s "),n("code",[e._v("testFortyTwo()")]),e._v(" rewritten using "),n("code",[e._v("expect()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// UnitTesting/UsingExpect.kt\npackage unittesting\nimport atomictest.*\nimport kotlin.test.*\n\nfun testFortyTwo2(n: Int = 42) {\n  expect(n, "Incorrect,") { fortyTwo() }\n}\n\nfun main() {\n  testFortyTwo2()\n  capture {\n    testFortyTwo2(43)\n  } contains\n    listOf("expected:",\n      "<43> but was:", "<42>")\n  assertFails { testFortyTwo2(43) }\n  capture {\n    assertFails { testFortyTwo2() }\n  } contains\n    listOf("Expected an exception",\n      "to be thrown",\n      "but was completed successfully.")\n  assertFailsWith<AssertionError> {\n    testFortyTwo2(43)\n  }\n  capture {\n    assertFailsWith<AssertionError> {\n      testFortyTwo2()\n    }\n  } contains\n    listOf("Expected an exception",\n      "to be thrown",\n      "but was completed successfully.")\n}\n')])])]),n("p",[e._v("It’s important to add tests for corner cases. If a function produces an error under certain conditions, this should be verified with a unit test (as "),n("code",[e._v("AtomicTest")]),e._v("’s "),n("code",[e._v("capture()")]),e._v(" does). "),n("code",[e._v("assertFails()")]),e._v(" and "),n("code",[e._v("assertFailsWith()")]),e._v(" ensure that the exception is thrown. "),n("code",[e._v("assertFailsWith()")]),e._v(" also checks the type of the exception.")]),e._v(" "),n("h3",{attrs:{id:"test-frameworks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-frameworks"}},[e._v("#")]),e._v(" Test Frameworks")]),e._v(" "),n("p",[e._v("A typical test framework contains a collection of assertion functions and a mechanism to run tests and display results. Most test runners show results with green for success and red for failure.")]),e._v(" "),n("p",[e._v("This atom uses JUnit5 as the underlying library for "),n("code",[e._v("kotlin.test")]),e._v(". To include it in a project, the "),n("code",[e._v("dependencies")]),e._v(" section of your "),n("code",[e._v("build.gradle")]),e._v(" should look like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('testImplementation "org.jetbrains.kotlin:kotlin-test"\ntestImplementation "org.jetbrains.kotlin:kotlin-test-junit"\ntestImplementation "org.jetbrains.kotlin:kotlin-test-junit5"\ntestImplementation "org.junit.jupiter:junit-jupiter:$junit_version"\n')])])]),n("p",[e._v("If you’re using a different library, you can find setup details in that framework’s instructions.")]),e._v(" "),n("p",[n("code",[e._v("kotlin.test")]),e._v(" provides facades for the most commonly used functions. Assertions are delegated to the appropriate functions in the underlying test framework. In the "),n("code",[e._v("org.junit.jupiter.api.Assertions")]),e._v(" class, for example, "),n("code",[e._v("assertEquals()")]),e._v(" calls "),n("code",[e._v("Assertions.assertEquals()")]),e._v(".")]),e._v(" "),n("p",[e._v("Kotlin supports "),n("em",[e._v("annotations")]),e._v(" for definitions and expressions. An annotation is the "),n("code",[e._v("@")]),e._v(" sign followed by the annotation name, and indicates special treatment for the annotated element. The "),n("code",[e._v("@Test")]),e._v(" annotation converts a regular function into a test function. We can test "),n("code",[e._v("fortyTwo()")]),e._v(" and "),n("code",[e._v("allGood()")]),e._v(" using the "),n("code",[e._v("@Test")]),e._v(" annotation:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Tests/unittesting/SampleTest.kt\npackage unittesting\nimport kotlin.test.*\n\nclass SampleTest {\n  @Test\n  fun testFortyTwo() {\n    expect(42, "Incorrect,") { fortyTwo() }\n  }\n  @Test\n  fun testAllGood() {\n    assertTrue(allGood(), "Not good")\n  }\n}\n')])])]),n("p",[n("code",[e._v("kotlin.test")]),e._v(" uses a "),n("code",[e._v("typealias")]),e._v(" to create a facade for the "),n("code",[e._v("@Test")]),e._v(" annotation:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("typealias Test = org.junit.jupiter.api.Test\n")])])]),n("p",[e._v("This tells the compiler to substitute the "),n("code",[e._v("@org.junit.jupiter.api.Test")]),e._v(" annotation for "),n("code",[e._v("@Test")]),e._v(".")]),e._v(" "),n("p",[e._v("A test class usually contains multiple unit tests. Ideally, each unit test only verifies a single behavior. This quickly guides you to the problem if a test fails when introducing new functionality.")]),e._v(" "),n("p",[n("code",[e._v("@Test")]),e._v(" functions can be run:")]),e._v(" "),n("ul",[n("li",[e._v("Independently")]),e._v(" "),n("li",[e._v("As part of a class")]),e._v(" "),n("li",[e._v("Together with all tests defined for the application")])]),e._v(" "),n("p",[e._v("IntelliJ IDEA allows you to rerun only the failed tests.")]),e._v(" "),n("p",[e._v("Consider a simple state machine with three states: "),n("code",[e._v("On")]),e._v(", "),n("code",[e._v("Off")]),e._v(" and "),n("code",[e._v("Paused")]),e._v(". The functions "),n("code",[e._v("start()")]),e._v(",  "),n("code",[e._v("pause()")]),e._v(", "),n("code",[e._v("resume()")]),e._v(" and "),n("code",[e._v("finish()")]),e._v(" control the state machine. "),n("code",[e._v("resume()")]),e._v(" is valuable because resuming a paused machine is significantly cheaper and/or faster than starting a machine.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// UnitTesting/StateMachine.kt\npackage unittesting\nimport unittesting.State.*\n\nenum class State { On, Off, Paused }\n\nclass StateMachine {\n  var state: State = Off\n    private set\n  private fun transition(\n    new: State, current: State = On\n  ) {\n    if(new == Off && state != Off)\n      state = Off\n    else if(state == current)\n      state = new\n  }\n  fun start() = transition(On, Off)\n  fun pause() = transition(Paused, On)\n  fun resume() = transition(On, Paused)\n  fun finish() = transition(Off)\n}\n")])])]),n("p",[e._v("These operations are ignored:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("resume()")]),e._v(" or "),n("code",[e._v("finish()")]),e._v(" on a machine that is "),n("code",[e._v("Off")]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v("pause()")]),e._v(" or "),n("code",[e._v("start()")]),e._v(" on a "),n("code",[e._v("Paused")]),e._v(" machine.")])]),e._v(" "),n("p",[e._v("To test "),n("code",[e._v("StateMachine")]),e._v(", we create a property "),n("code",[e._v("sm")]),e._v(" inside the test class. The test runner creates a fresh "),n("code",[e._v("StateMachineTest")]),e._v(" object for each different test:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Tests/unittesting/StateMachineTest.kt\npackage unittesting\nimport kotlin.test.*\n\nclass StateMachineTest {\n  val sm = StateMachine()\n  @Test\n  fun start() {\n    sm.start()\n    assertEquals(State.On, sm.state)\n  }\n  @Test\n  fun `pause and resume`() {\n    sm.start()\n    sm.pause()\n    assertEquals(State.Paused, sm.state)\n    sm.resume()\n    assertEquals(State.On, sm.state)\n    sm.pause()\n    assertEquals(State.Paused, sm.state)\n  }\n  // ...\n}\n")])])]),n("p",[e._v("Normally, Kotlin only allows letters and digits for function names. However, if you put a function name inside backticks, you can use any characters (including whitespaces). This means you can create function names that are sentences describing their tests, such as "),n("code",[e._v("pause and resume")]),e._v(". This produces more useful error information.")]),e._v(" "),n("p",[e._v("An essential goal of unit testing is to simplify the gradual development of complicated software. After introducing each new piece of functionality, a developer not only adds new tests to check its correctness but also runs all the existing tests to make sure that the prior functionality still works. You feel safer when introducing new changes, and the system is more predictable and stable.")]),e._v(" "),n("p",[e._v("In the process of fixing a new bug, you create additional unit tests for this and similar cases, so you don’t make the same mistakes in the future.")]),e._v(" "),n("p",[e._v("If you use a continuous integration (CI) server such as "),n("a",{attrs:{href:"https://www.jetbrains.com/teamcity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Teamcity"),n("OutboundLink")],1),e._v(", all available tests run automatically and you’re notified if something breaks.")]),e._v(" "),n("p",[e._v("Consider a class with several properties:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// UnitTesting/Learner.kt\npackage unittesting\n\nenum class Language {\n  Kotlin, Java, Go, Python, Rust, Scala\n}\n\ndata class Learner(\n  val id: Int,\n  val name: String,\n  val surname: String,\n  val language: Language\n)\n")])])]),n("p",[e._v("It’s often helpful to add utility functions for manufacturing test data, especially when you must create many objects with the same default values during testing.  Here, "),n("code",[e._v("makeLearner()")]),e._v(" creates objects with default values:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Tests/unittesting/LearnerTest.kt\npackage unittesting\nimport unittesting.Language.*\nimport kotlin.test.*\n\nfun makeLearner(\n  id: Int,\n  language: Language = Kotlin,         // [1]\n  name: String = "Test Name $id",\n  surname: String = "Test Surname $id"\n) = Learner(id, name, surname, language)\n\nclass LearnerTest {\n  @Test\n  fun `single Learner`() {\n    val learner = makeLearner(10, Java)\n    assertEquals("Test Name 10", learner.name)\n  }\n  @Test\n  fun `multiple Learners`() {\n    val learners = (1..9).map(::makeLearner)\n    assertTrue(\n      learners.all { it.language == Kotlin })\n  }\n}\n')])])]),n("p",[e._v("Adding default arguments to "),n("code",[e._v("Learner")]),e._v(" that are only for testing introduces unnecessary complexity and potential confusion. "),n("code",[e._v("makeLearner()")]),e._v(" is easier and cleaner when producing test instances, and it eliminates redundant code.")]),e._v(" "),n("p",[e._v("The order of "),n("code",[e._v("makeLearner()")]),e._v("’s parameters simplifies its usage. In this case, we expect to specify a non-default "),n("code",[e._v("lang")]),e._v(" more often than changing default test values for "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("surname")]),e._v(", so the "),n("code",[e._v("lang")]),e._v(" parameter is second ("),n("strong",[e._v("[1]")]),e._v(").")]),e._v(" "),n("h3",{attrs:{id:"mocking-and-integration-tests"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mocking-and-integration-tests"}},[e._v("#")]),e._v(" Mocking and Integration Tests")]),e._v(" "),n("p",[e._v("A system that depends on other components complicates the creation of isolated tests. Rather than introducing dependencies on real components, programmers often use a practice called "),n("em",[e._v("mocking")]),e._v(".")]),e._v(" "),n("p",[e._v("A mock replaces a real entity with a fake one during testing. Databases are commonly mocked to preserve the integrity of the stored data. The mock can implement the same interface as the real one, or it can be created using mocking libraries such as "),n("a",{attrs:{href:"https://github.com/mockk/mockk",target:"_blank",rel:"noopener noreferrer"}},[e._v("MockK"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("It’s vital to test separate pieces of functionality independently—that’s what unit tests do. It’s also essential to ensure that different parts of the system work when combined with each other—that’s what "),n("em",[e._v("integration tests")]),e._v(" do. Unit tests are “inward-directed” while integration tests are “outward-directed”.")]),e._v(" "),n("h3",{attrs:{id:"testing-inside-intellij-idea"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing-inside-intellij-idea"}},[e._v("#")]),e._v(" Testing Inside IntelliJ IDEA")]),e._v(" "),n("p",[e._v("IntelliJ IDEA and Android Studio support creating and running unit tests.")]),e._v(" "),n("p",[e._v("To create a test, right-click (control-click on a Mac) the class or function you want to test and select “Generate…” from the pop-up menu. From the “Generate” menu, choose “Test…”. A second approach is to open the list of "),n("a",{attrs:{href:"https://www.jetbrains.com/help/idea/intention-actions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("“intention actions”"),n("OutboundLink")],1),e._v(", and select "),n("a",{attrs:{href:"https://www.jetbrains.com/help/idea/create-tests.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("“Create Test”"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Select JUnit5 as the “Testing library”. If a message appears saying “JUnit5 library not found in the module,” push the “Fix” button next to the message. The “Destination package” should be "),n("code",[e._v("unittesting")]),e._v(". The result will end up in another directory (always separate tests from main code). The Gradle default is the "),n("code",[e._v("src/test/kotlin")]),e._v(" folder, but you can choose a different destination.")]),e._v(" "),n("p",[e._v("Check the boxes next to the functions you want tested. You can automatically navigate from the source code to the corresponding test class and back; for details see the "),n("a",{attrs:{href:"https://www.jetbrains.com/help/idea/create-tests.html#test-code-navigation",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Once the test framework code is generated, you can modify it to suit your needs. For the examples and exercises in this atom, replace:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import org.junit.Test\nimport org.junit.Assert.*\n")])])]),n("p",[e._v("with:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import kotlin.test.*\n")])])]),n("p",[e._v("When running tests within IntelliJ IDEA, you may get an error message like “test events were not received.” This is because IDEA’s default configuration assumes you are running your tests externally, using Gradle. To fix it so you can run your tests inside IDEA, start at the file menu:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("File | Settings | Build, Execution, Deployment | Build Tools | Gradle\n")])])]),n("p",[e._v("On that page you’ll see a drop-down titled “Run tests using:” which is set to “Gradle (Default)”. Change this to “IntelliJ IDEA” and your tests will run correctly.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);