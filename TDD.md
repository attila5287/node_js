# 10.2 Lesson Plan: Test-Driven-Development (6:30 PM)

## Overview

Today's class introduces students to test-driven-development and unit testing JavaScript applications.

## Instructor Notes

## Learning Objectives

* Explain the benefits of test-driven-development

* Use unit tests before as a way to define code requirements for code that hasn't been written yet

* Write unit tests for pre-existing JavaScript functions

* Use mocks to test side effects such as reading/writing to the file system, printing to the console, and AJAX requests

* Use the Arrange, Act, Assert pattern to structure test code

## Slides

N/A

## Time Tracker

[Unit 10-OOP Day 2 Time Tracker](https://docs.google.com/spreadsheets/d/1JjwCYWyW_cclj4VaWPol4IVudyp4jNGR057ugv_0znQ/edit?usp=sharing)

- - -

## Class Instruction

### 1. Instructor Do: Introduce Testing (10 mins)

* Welcome students to class.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ So far, how have we known that our code is working?

  * 🙋 We ran it and checked if it did what it was supposed to do.

  * ☝️ So far, how do we known that that by adding new code to our applications, we didn't break something, somewhere else?

  * 🙋 We ran the app and clicked around and make sure everything still worked.

  * ☝️ Have you ever done this and still pushed up a bug without realizing it?

  * 🙋 Yes.

  * ☝️ Could manual testing be a lot of work, especially for very large applications?

  * 🙋 Yes.

  * ☝️ Do we think there's a better way?

  * 🙋 We could write automated tests.

* Go over the following points with the class:
  
  * Since automated tests are written with code and can be run quickly before new code is merged in, we can be more certain that new code works and doesn't break existing code.

  * As a new developer at a company, writing tests is a common first task as it gives you a chance to explore and understand the codebase.

  * Tests force us to write better, more understandable and maintainable code that's easier to change.

  * Every application would benefit from automated tests, so its important to understand testing web applications.
  
  * It's possible to make an entire career out of writing tests, so if any students really enjoy today's material, that may be a career path they'll want to learn more about.

* Take a few minutes to answer any questions students may be before proceeding to the next activity.

### 2. Students Do: TDD Research (10 min)

* Direct students to work in pairs to spend the next few minutes researching test-driven-development and its benefits.

### 3. Instructor Do: Review TDD Research (5 min)

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ What is test-driven-development?

  * 🙋 Test-driven-development is a practice in which tests are written before application code is written. Initially all of the tests fail, but then we implement the functionality we're testing for one piece at a time.

  * ☝️ Why is it helpful to write tests before writing application code?

  * 🙋 By writing tests first, we can define the requirements our application should have ahead of time so we know to what to focus on. We're also more sure that each piece piece of functionality works before moving on to the next.

  * ☝️ What are some other benefits of TDD?

  * 🙋 Test-driven-development encourages modular, cohesive, and loosely coupled code.

  * ☝️ What does that mean?
  
  * 🙋 When code is modular, it's separated by responsibility into different files and functions. When code is cohesive, the code that its collocated with is of related functionality. When code is loosely coupled, it means that it isn't very entangled or dependent on other parts of the codebase. When a codebase is all three, it's usually easier to understand and update without breaking.

  * ☝️ What are some drawbacks of TDD?

  * 🙋 Building applications can take longer if we need to write a lot of tests first. It can also be difficult to write tests for a problem that we're uncertain how to solve right away.

* Take a moment to answer any remaining questions.

### 4. Students Do: Testing Dissect (10 min)

* Direct students to the next activity, found in [01-Activities/08-Stu_TDD-Dissect](../../../../01-Class-Content/10-oop/01-Activities/08-Stu_TDD-Dissect).

```md
# TDD Dissect

In this activity you will work with a partner to dissect the provided testing example.

## Instructions

* Open the `index.js` file in your code editor and try to guess what what the code does. Ask yourself: what do you think will be printed to the console in this example?

* Run the `index.js` file in your terminal. Was your guess correct? Ask yourself: how do you think the method chaining is achieved?

* Open the `arithmetic.js` file in your code editor. What do you think the significance of the `plus` and `minus` methods returning `new Arithmetic` is? How does this relate to the method chaining you saw in the `index.js` file?

* Open `test/arithmetic.test.js`. Ask yourself: what is the significance of the `expect` function? What does `toEqual` do? What about the `describe` and `it` functions? Where are these coming from?

* Once you've had some time to consider the above, run `npm run test` in your terminal and examine the output. Do you have a better idea of what the `describe` and `it` functions might be used for?

* Have any conclusions as well as remaining questions ready to share during the activity review.
```

### 5. Instructor Do: Review TDD Dissect (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ We're using the Jest testing framework for our automated tests.

  * ✔️ Tests are organized into `describe` and `it` blocks. These are primarily for grouping tests by module, functionality, etc.

  * ✔️ Any file inside of the `test` folder ending with `.test.js` gets run by Jest automatically when we run the `npm run test` script.

  * ✔️ The `expect` function is used for assertions. Assertions are essentially statements that are used to verify that our code is doing what we "expect" it to do.

  * ✔️ The `instanceof` operator can be used to determine if an object was created with a given constructor function.

* Open [08-Stu_TDD-Dissect/arithmetic.js](../../../../01-Class-Content/10-oop/01-Activities/08-Stu_TDD-Dissect/arithmetic.js) and explain the following:

  * The object created by the `Arithmetic` constructor function has a `number` property, and three methods: `plus`, `minus`, and `value`.

  ```js
  function Arithmetic(number = 0) {
    this.number = number;
  }
  ```

  * We created a `plus` and `minus` method, which return new `Arithmetic` objects containing an updated `number` when invoked.

  ```js
  Arithmetic.prototype.plus = function(num = 0) {
    const newNumber = this.number + num;

    return new Arithmetic(newNumber);
  };

  Arithmetic.prototype.minus = function(num = 0) {
    const newNumber = this.number - num;

    return new Arithmetic(newNumber);
  };

  Arithmetic.prototype.value = function() {
    return this.number;
  };
  ```
  
* Open [08-Stu_TDD-Dissect/index.js](../../../../01-Class-Content/10-oop/01-Activities/08-Stu_TDD-Dissect/index.js) to demonstrate this:

  * Since the `plus` and `minus` methods return a new `Arithmetic` object, it's possible to chain these methods. The `value` method simply returns the `number` of the `Arithmetic` object.

  ```js
  const value = new Arithmetic(4)
    .plus(8)
    .plus(15)
    .minus(16)
    .minus(23)
    .plus(42)
    .plus(108)
    .value();

  console.log(value);
  ```

* Take a moment to answer any questions about the application code before transitioning to the test code.

* Open [08-Stu_TDD-Dissect/test/arithmetic.test.js](../../../../01-Class-Content/10-oop/01-Activities/08-Stu_TDD-Dissect/test/arithmetic.test.js) and explain the following:

  * 🔑 Jest will run files inside of the `test` folder that end in `.test.js`.

  * 🔑 Tests are grouped into `describe` and `it` blocks.

  ```js
  describe("Initialization", () => {
    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const obj = new Arithmetic();

      expect("number" in obj).toEqual(true);
    });
  ```

* The `describe` and `it` blocks are simply used for grouping. Run the `npm run test` command in your terminal to demonstrate the output:

  ```md
  PASS  test/arithmetic.test.js
    Arithmetic
      Initialization
        ✓ should return an object containing a 'number' property when called with the 'new' keyword (2ms)
        ✓ should set 'number' when created
        ✓ should default 'number' to 0
      plus
        ✓ should return a new 'Arithmetic' object
        ✓ should return a new 'Arithmetic' object that has an updated 'number' value
      minus
        ✓ should return a new 'Arithmetic' object
        ✓ should return a new 'Arithmetic' object that has an updated 'number' value
      value
        ✓ should return the 'Arithmetic' object's 'number' value

  Test Suites: 1 passed, 1 total
  Tests:       8 passed, 8 total
  Snapshots:   0 total
  Time:        1.482s
  Ran all test suites.
  ```

  * 🔑 The `describe` function is used to "describe" what is being tested. And `it` is used to "label" specific things we're testing for, ie "should return an object containing a 'number' property when called with the 'new' keyword".

  * 🔑 Since `describe` and `it` are just used for grouping, you can arrange these in whatever way makes the most sense to you and your team. You can nest `describe` functions inside of other `describe` functions, but `it` functions shouldn't be nested inside of each other should always go inside of `describe` functions.

* Go through a few of the test cases to demonstrate how the `expect` function is used.

  * 🔑 `expect` is what's referred to as an "assertion", it's used to check that our code is doing what it should, e.g.

  ```js
  it("should default 'number' to 0", () => {
    const obj = new Arithmetic();

    expect(obj.number).toEqual(0);
  });
  ```

  * This code checks that the object created by the `Arithmetic` constructor defaults its `number` property to `0` if not provided one.

* Demonstrate what happens if you change this to be another number and re-run the tests:

  ```md
  FAIL  test/arithmetic.test.js
    Arithmetic
      Initialization
        ✓ should return an object containing a 'number' property when called with the 'new' keyword (3ms)
        ✓ should set 'number' when created
        ✕ should default 'number' to 1 (1ms)
      plus
        ✓ should return a new 'Arithmetic' object
        ✓ should return a new 'Arithmetic' object that has an updated 'number' value
      minus
        ✓ should return a new 'Arithmetic' object
        ✓ should return a new 'Arithmetic' object that has an updated 'number' value
      value
        ✓ should return the 'Arithmetic' object's 'number' value (1ms)

    ● Arithmetic › Initialization › should default 'number' to 1

      expect(received).toEqual(expected) // deep equality

      Expected: 1
      Received: 0

        20 |       const obj = new Arithmetic();
        21 |
        22 |       expect(obj.number).toEqual(1);
           |                          ^
        23 |     });
        24 |   });
        25 |

        at Object.toEqual (test/arithmetic.test.js:22:26)

  Test Suites: 1 failed, 1 total
  Tests:       1 failed, 7 passed, 8 total
  Snapshots:   0 total
  Time:        0.935s, estimated 1s
  Ran all test suites.
  ```

  * 🔑 In order for a test to pass, its assertion should evaluate to be true.

  * 🔑 The `instanceof` operator can be used to determine if an object was created with a given constructor function.

  ```js
  it("should return a new 'Arithmetic' object", () => {
    const obj = new Arithmetic(9).minus(4);

    expect(obj instanceof Arithmetic).toEqual(true);
  });
  ```

  * For now, we're primarily concerned with testing that a function returns what it should in a variety of situations.

* Take a few minutes to answer lingering questions before the next activity.

### 6. Students Do: TDD (15 mins)

* Direct students to the next activity, found in [09-Stu_TDD/Unsolved](../../../../01-Class-Content/10-oop/01-Activities/09-Stu_TDD/Unsolved).

  ```md
  # TDD

  In this activity you will write tests outlining the expected functionality for application code that haven't been implemented yet.

  ## Instructions

  * Open the `algo.js` file and take a moment to examine the code.

    * The `Algo` constructor function has three empty methods: `reverse`, `isPalindrome`, and `capitalize`.

  * Now open the `test/algo.test.js` file.

    * This file contains `describe` blocks for each method on the `Algo` constructor.

  * Write code to test each method:

    * The `reverse` method should take a string as an argument and return a new reversed version of the string. e.g. "Hello" should return "elloH".

    * The `isPalindrome` method should take a string as an argument and return the boolean `true` if the provided string is a palindrome. A palindrome is a word that is the same backwards as it is forwards, e.g. "racecar". Return `false` is the string is not a palindrome.

    * The `capitalize` method should take a string as an argument and return a new string with the first letter of each word capitalized. e.g. "hello world!" should return "Hello World!".

  * **Important**: Write code for the tests only, the only file you will be modifying is `tests/algo.test.js`. Initially all of your tests will fail since these methods are empty, but using the tests you can define how each method _should_ work.

  ## 💡 Hint(s)

  * Use the previous example as a reference.
  ```

### 7. Instructor Do: Review TDD (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ By providing our functions different inputs, we can make sure they work correctly by checking their return values.

  * ✔️ Tests ensure our functions carry out their logic the same way every time.

  * ✔️ Tests allow other developers to quickly see what a function or suite of functions should be achieving.

* Open [09-Stu_TDD/Unsolved](../../../../01-Class-Content/10-oop/01-Activities/09-Stu_TDD/Unsolved) in your IDE and point out the following:

  * We first require the file containing the functions we would like to test.

  ```js
  const Algo = require("../algo");
  ```

  * We can then use the `describe` function to begin setting up our tests. We are going to start with the `Algo` definition.

  ```js
  describe("Algo", () => {
  ```

  * Now we can begin to test specific functionality. Here we are saying that when passed a string and reversed, it returns the proper reversed string. the `it` method allows us to describe what the function should do in plain english given certain parameters.

  ```js
  describe("reverse", () => {
    it("should reverse a given string", () => {
      const str = "Hello World!";
      const reversed = "!dlroW olleH";

      const result = new Algo().reverse(str);

      expect(result).toEqual(reversed);
    });
  });
  ```

  * 🔑 In each case, we're checking to see what the method returns given a certain input. We setup the same testing for `isPalindrome` and capitalize.

  ```js
  describe("isPalindrome", () => {
    it("should return true if a string is a palindrome", () => {
      const str = "racecar";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(true);
    });

    it("should return false if a string is not a palindrome", () => {
      const str = "neon";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(false);
    });
  ```

  * 🔑 Even though we haven't written code for these methods yet, it would be easy for someone to understand what the methods should do based on these tests.

  ```js
    describe("capitalize", () => {
      it("should take a string and return a new string with the first letter of each word capitalized", () => {
        const str = "capitalize every first word of the string.";
        const capitalized = "Capitalize Every First Word Of The String.";

        const result = new Algo().capitalize(str);

        expect(result).toEqual(capitalized);
      });
    });
  });
  ```

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ Do you think these are good tests?

  * 🙋 Yes, if they fail, it means the code isn't doing what it should.

  * ☝️ Do you think these are _enough_ tests?

  * 🙋 No, it doesn't account for things like empty strings, what should happen if given invalid arguments or edge cases like palindromes with different casing or spaces.

* Take a moment to answer any questions before the next activity.

### 8. Students Do: Make The Tests Pass (15 mins)

* Direct students to the next activity, found in [10-Stu_Pass-Tests/Unsolved](../../../../01-Class-Content/10-oop/01-Activities/10-Stu_Pass-Tests/Unsolved).

  ```md
  # Pass Tests

  In this activity you will be writing code to implement functionality for the Algo constructor you wrote tests for in the previous activity.

  ## Instructions

  * Open the `Unsolved/algo.js` file in your editor.

  * Starting with the `reverse`, method, write code to make the tests in `tests/algo.test.js` pass.

  * After completing each method, run `npm run test` in your terminal to verify you correctly implemented the method before moving on to the next one.
  ```

### 9. Instructor Do: Review Make The Tests Pass (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ Writing tests before writing code helps us ensure that our code will work.

  * ✔️ Writing tests first allows for more rapid development because we will not have to manually test our code.

* Open [02-Stu_Hello-Node/Solved/index.js](../../../../01-Class-Content/10-oop/01-Activities/10-Stu_Pass-Tests/Solved/algo.js) in your IDE and explain the following point(s):

  * 🔑 Since we had tests written for each method, they will be easier to implement since we didn't have to do any manual testing.

  ```js
  function Algo() {}

  Algo.prototype.reverse = function(str) {
    return str
      .split("")
      .reverse()
      .join("");
  };
  ```

  * 🔑 Because we had tests written, we can be more reasonably sure that each method works as intended.

  ```js
  Algo.prototype.isPalindrome = function(str) {
    return this.reverse(str) === str;
  };
  ```

  * There can be multiple ways to implement methods. It is good practice to worry about testing specific implementation details.

  ```js
  Algo.prototype.capitalize = function(str) {
    return str.split(" ").map(word => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ");
  };
  ```

* Take a moment to answer any remaining questions about the activity.

### 10. Instructor Do: Organizing Tests (10 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ When writing tests, it's a good idea to have framework or set of guidelines that can be used for organizing tests and deciding what kinds of things to test for.

  * ✔️ The Arrange Act Assert pattern gives us a guide for how to organize test code in a way that makes sense to us and other.

  * ✔️ When considering what kinds of things to write tests for, it's a good idea to keep in mind positive, negative, and exception tests.

* Open [11-Ins_Organizing-Tests](../../../../01-Class-Content/10-oop/01-Activities/11-Ins_Organizing-Tests) in your IDE and explain the following point(s):

  ```js
  function Todo(text) {
    if (typeof text !== "string" || !text.trim().length) {
      throw new Error("Expected parameter 'text' to be a non empty string");
    }

    this.text = text;
  }
  ```

  * The `todo.js` file contains a `Todo` constructor. This constructor creates an object with a provided `text` value. If `text` is not a string or is an empty string, an error is thrown.

  ```js
  function TodoList() {
    this.todos = [];
  }
  ```

  * The `TodoList` has a `addTodo` method that adds a new `Todo` object to the array, a `getNextTodo` property that returns the first todo in the array, and a `completeNextTodo` method that removes the first todo in the list and returns it.

  ```js
  TodoList.prototype.addTodo = function(text) {
    this.todos.push(new Todo(text));
  };

  TodoList.prototype.getNextTodo = function() {
    return this.todos[0];
  };

  TodoList.prototype.completeNextTodo = function() {
    return this.todos.shift();
  };
  ```

* Open [11-Ins_Organizing-Tests/test/todo.test.js](../../../../01-Class-Content/10-oop/01-Activities/11-Ins_Organizing-Tests/test/todo.test.js) in your IDE and point out the following:

* The tests are split into three parts: Arrange, Act, and Assert.

  * **Arrange**: Any kind of set up you need to run your test.

  * **Act**: Perform the action to be tested.

  * **Assert**: Perform the assertion.

  * We don't necessarily need comments, but it's helpful to separate these with at least a newline character. Not every test will have all three sections, but if we keep the AAA pattern in mind, we can write more organized tests.

  ```js
  it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
    // Arrange
    const text = "Pick up milk";

    // Act
    const obj = new Todo(text);

    // Assert
    expect(obj.text).toEqual(text);
  });
  ```

* Open [11-Ins_Organizing-Tests/test/todoList.test.js](../../../../01-Class-Content/10-oop/01-Activities/11-Ins_Organizing-Tests/test/todoList.test.js) in your IDE and explain the following:

  * This file contains a few **positive tests**. We run these tests to make sure things work as intended in likely situations.

  ```js
  it("should add a new 'Todo' object to its 'todos' array", () => {
    // Arrange
    const todoList = new TodoList();
    const todoText = "Mow Lawn";

    // Act
    todoList.addTodo(todoText);

    // Assert
    expect(todoList.todos.length).toEqual(1);
    expect(todoList.todos[0] instanceof Todo).toEqual(true);
    expect(todoList.todos[0].text).toEqual(todoText);
  });
  ```

  * This file contains a **negative test**. We run these tests to check things work in edge cases or cases where the function should return a negative result. For example if we are checking if `isPalindrome` returns `false` for strings that aren't palindromes.

  ```js
  it("should return undefined if there are no todos", () => {
    // Arrange
    const todoList = new TodoList();
    let nextTodo;

    // Act
    nextTodo = todoList.getNextTodo();

    // Assert
    expect(typeof nextTodo).toEqual("undefined");
  });
  ```

  * This file contains an **exception test**. We run these tests to make sure than our code throws errors if/when it should.

  ```js
  it("should throw an error if not provided text", () => {
    // Arrange
    const todoList = new TodoList();
    const err = new Error(
      "Expected parameter 'text' to be a non empty string"
    );
    const cb = () => todoList.addTodo();

    // Assert
    expect(cb).toThrowError(err);
  });
  ```

  * Not every function will have all three (positive, negative, and exception tests), but keeping them in mind can help us decide what kinds of things we should be testing for.

* Take a minute to answer any questions about the AAA pattern and positive, negative, and exception tests.

### 11. Students Do: Structured Tests (15 mins)

* Direct students to the next activity, found in [11-Ins_Organizing-Tests/Unsolved](../../../../01-Class-Content/10-oop/01-Activities/11-Ins_Organizing-Tests/Unsolved).

  ```md
  # Structured Tests

  In this activity you will be writing code to test two constructor functions. You will attempt to follow the Arrange Act Assert pattern.

  ## Instructions

  * Open the `Unsolved/child.js` file and examine its contents.

    * This file exports a `Child` constructor function. The constructor function expects to be provided a name and an age.

    * If `name` is not a string or `name` is an empty string, an error is thrown.

    * If `age` is not a number, is `NaN` or is less than `0`, an error is thrown.

    * Otherwise these values are added to the created instance when the constructor is called.

  * Open the `Unsolved/dayCare.js` file and examine its contents:

    * This file requires the `Child` constructor function.

    * This file exports a `DayCare` constructor function.

    * The `DayCare` constructor has an empty `children` array, a capacity of 3, and an `ageLimit` of 6.

    * The `DayCare` constructor has an `addChild` method used for adding `Child` objects to the `children` array, and a `pickupChild` method used for removing a `Child` object from the `children` array.

  * Inside of the `Unsolved/test/child.test.js` file, write code to test that the `Child` constructor works as expected.

  * Inside of the `Unsolved/test/dayCare.test.js`, write code to test that the `DayCare` constructor and methods work as expected.

  * The only files you need to modify for this activity are `Unsolved/test/child.test.js` and `Unsolved/test/dayCare.test.js`.

  ## 💡 Hint(s)

  * After adding each test, run `npm run test` in your terminal to ensure the test passes.

  * When deciding what to test for, consider the following:

    * Positive tests: What happens when things go well?

    * Negative tests: What happens in edge cases or when things shouldn't work?

    * Exception tests: What happens in cases when an error should be thrown?
  ```

### 12. Instructor Do: Review Structured Tests (15 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ We should use the AAA pattern to structure our tests.

  * ✔️ We should keep in mind positive, negative, and exception test cases when deciding what to test for.

* Open [12-Stu_Structured-Tests/Solved/test/child.test.js](../../../../01-Class-Content/10-oop/01-Activities/12-Stu_Structured-Tests/Solved/test/child.test.js) file in your editor and point out the following key points:

  * 🔑 By using the Arrange Act Assert pattern, we can organize our tests into three easy to understand parts.

  ```js
  it("should not add a child if already at capacity", () => {
    const dayCare = new DayCare();
    const child = new Child("Alice", 4);
    dayCare.children = [
      new Child("Tammy", 1),
      new Child("Mark", 2),
      new Child("Alvin", 1)
    ];

    dayCare.addChild(child);

    expect(dayCare.children.length).toEqual(3);
  });
  ```

  * 🔑 We would use the `toThrowError` or `toThrow` matcher to check than an error was thrown.

  ```js
  it("should throw an error if not provided a Child object as an argument", () => {
    const err = new Error(
      "Expected parameter 'child' to be an instance of Child"
    );
    const cb = () => {
      const dayCare = new DayCare();
      dayCare.addChild();
    };

    expect(cb).toThrowError(err);
  });
  ```

  * 🔑 We use negative tests to make sure things work as expected in edge cases.

  ```js
  it("should not add a child if already at capacity", () => {
    const dayCare = new DayCare();
    const child = new Child("Alice", 4);
    dayCare.children = [
      new Child("Tammy", 1),
      new Child("Mark", 2),
      new Child("Alvin", 1)
    ];

    dayCare.addChild(child);

    expect(dayCare.children.length).toEqual(3);
  });
  ```

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ Why is it helpful for a function to purposefully throw an error?

  * 🙋 If we throw a helpful error message when a function is being misused, the issue is easier to track down than if we didn't throw the error and the misuse caused another unexpected error somewhere else in the code.

* Take a minute to answer any remaining questions.

- - -

### 13. BREAK (15 mins)

- - -

### 14. Instructor Do: Introduce Mocks (10 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ Mocks can be used to replace code with side-effects, such as printing to the console, making AJAX requests, writing/writing to the filesystem so it doesn't happen when tests are being run.

  * ✔️ Mocks can be spied on. i.e. we can test whether mocked functions have been called, and what arguments they were called with.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ So far we've just been testing if a function returned what it was supposed to. Why might it be complicated to test something like an AJAX request being called? Or writing to the filesystem?

  * 🙋 An AJAX request would depend on something outside of the code we're testing which we can't always control, maybe a third-party API somewhere else. Reading from and writing to the filesystem might not be a good idea if our tests end up making changes that can effect the results of running the tests again.

* Open [13-Ins_Introduce-Mocks/logger.js](../../../../01-Class-Content/10-oop/01-Activities/13-Ins_Introduce-Mocks/logger.js) file in your IDE and point out the following:

  * In order to print different colors to the console, there are special codes for each color that must be included as a first argument to the `console.log` method.

  ```js
  function Logger() {
    // This is just a way of adding methods to the prototype once in a loop
    // Rather than writing them all out for each color
    if (!this.init) {
      Logger.prototype.init = true;

      const colors = {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m"
      };
  ```

  * Rather than manually write out a method for each color, we're using a loop that runs only once the first time a `Logger` object is created with the constructor. This is called the "dynamic prototype pattern".

  ```js
  for (let key in colors) {
    // Each color method calls console.log with the color as the first argument,
    // followed by any additional arguments
    Logger.prototype[key] = function(...args) {
      console.log(colors[key], ...args);
    };
  }
  ```

* Open [13-Ins_Introduce-Mocks/index.js](../../../../01-Class-Content/10-oop/01-Activities/13-Ins_Introduce-Mocks/index.js) file in your terminal and run the file, pointing out the following:

  * We first import a `Logger` constructor that creates an object capable of logging to the console in different colors. Run the example in your terminal to demonstrate this, and point out the logs themselves, explaining on a high-level how this is achieved.

  ```js
  const Logger = require("./logger");

  const log = new Logger();

  log.red("We can write to the console in different colors!");

  log.blue("We just need to provide an additional argument to the console.log method!");

  log.magenta("The first argument console.log needs is an 'ANSI Escape Code'");

  log.green("You can look these up at https://en.wikipedia.org/wiki/ANSI_escape_code#Colors");

  log.yellow("But they're just codes that represent different colors");

  log.cyan("The second argument console.log should receive is the message to be printed");
  ```


* Open [13-Ins_Introduce-Mocks/test/logger.test.js](../../../../01-Class-Content/10-oop/01-Activities/13-Ins_Introduce-Mocks/test/logger.test.js) file in your IDE and point out the following key points:

  * 🔑 In this file we're using the `jest.spyOn` method to mock and spy on the `console.log` method. We're also using the `mock.mockImplementation` method to replace `console.log`'s functionality with an empty function that does nothing.

  ```js
  it("should print in black", () => {
    const log = new Logger();
    const message = "Hello world!";
    const mock = jest.spyOn(console, "log");
    mock.mockImplementation(() => {});

    log.black(message);

    expect(mock).toBeCalledWith(colors.black, message);

    mock.mockRestore();
  });
  ```

  * 🔑 Since we're mocking the `console.log` method nothing will be printed to the console when the test is run, and we're able to spy on values provided to the `console.log` method. When `log.black` is called, we can verify that `console.log` was also called with the expected message and color.

* Open [13-Ins_Introduce-Mocks/test/logger.test.js](../../../../01-Class-Content/10-oop/01-Activities/13-Ins_Introduce-Mocks/test/logger.test.js) in your terminal and run with `npm run test` to demonstrate the console output.

* Answer any lingering questions before moving on to the next activity.

### 15. Students Do: First Mock (15 mins)

* Direct students to the next activity, found in [14-Stu_First-Mock/Unsolved](../../../../01-Class-Content/10-oop/01-Activities/14-Stu_First-Mock/Unsolved).

  ```md
  # First Mock

  In this activity you will add code to spy on the `console.log` method.

  ## Instructions

  * Take a moment to examine the `Unsolved/child.js` and `Unsolved/dayCare.js` files. They should be almost identical to the previous example, but with a few `console.log`s added to the code.

  * Add code to spy on the `console.log` method to ensure that it is called when expected with the correct arguments.

  ## 💡 Hint(s)

  * Use the previous demonstration as a reference for setting up mocks and spies.
  ```

### 16. Instructor Do: Review First Mock (10 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ Mocks are used to spy on methods we haven't written ourselves, often to prevent some side effect such as an AJAX request, writing to the console, or reading/writing to the filesystem from actually happening during a test.

  * ✔️ Mocks can be spied on, i.e. we can keep track of mocked functions being called, and what arguments they're called with.

* Open [13-Ins_Introduce-Mocks/test/14-Stu_First-Mock/Solved/test/dayCare.test.js](../../../../01-Class-Content/10-oop/01-Activities/14-Stu_First-Mock/Solved/test/dayCare.test.js) file in your IDE and point out the following:

  ```js
  it("should not add a child over the 'ageLimit'", () => {
    const child = new Child("Tammy", 8);
    const dayCare = new DayCare();
  ```

  * 🔑 By mocking `console.log`, we can prevent it from running and filling up our terminals when running tests. We're able to spy on the `console.log` method and verify that it was called with the arguments we expect.

  ```js
  const mock = jest.spyOn(console, "log");
  mock.mockImplementation(() => {});

  dayCare.addChild(child);

  expect(dayCare.children.length).toEqual(0);
  expect(mock).toBeCalledWith(
    "Unable to add child, they are over the age limit"
  );
  ```

  * 🔑 We can "unmock" `console.log` by using the `mock.mockRestore` method. It's a good idea to clean up any mocks we run at the end of a test to ensure the next test isn't affected.

  ```js
  mock.mockRestore();
  ```

* Take a moment to answer any lingering questions.

### 17. Instructor Do: Module Mock Demo (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ There are a few extra steps required to mock third party and built-in node modules, but the idea is the same.

* Open [15-Ins_Module-Mock-Demo/movieSearch.js](../../../../01-Class-Content/10-oop/01-Activities/15-Ins_Module-Mock-Demo/movieSearch.js) file in your IDE and point out the following:

  * This file exports a `MovieSearch` constructor that can be used to create an object used for searching the OMDB API.
  
  ```js
  const axios = require("axios");

  function MovieSearch() {}

  MovieSearch.prototype.buildUrl = function(movie) {
    return `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
  };

  MovieSearch.prototype.search = function(movie) {
    return axios.get(this.buildUrl(movie));
  };
  ```

  
* Open [15-Ins_Module-Mock-Demo/test/movieSearch.test.js](../../../../01-Class-Content/10-oop/01-Activities/15-Ins_Module-Mock-Demo/test/movieSearch.test.js) file in your editor and point out the following key points:

  * 🔑 We require axios and mock it, since we want to prevent actual AJAX requests from happening. This is one way of mocking a node module.

  ```js
  const axios = require("axios");
  const MovieSearch = require("../movieSearch");

  jest.mock("axios");
  ```

  * 🔑 We mock the return value of `axios.get` to be a new Promise object that resolves to an object that contains a `data` property that's set to an empty object. We're mocking the return value to this because it's similar to what we would get from the response from the OMDB API.

  ```js
  it("should search the OMDB API for a given movie", () => {
    const movie = new MovieSearch();
    const name = "Rocky";

    axios.get.mockReturnValue(
      new Promise(function(resolve) {
        resolve({ data: {} });
      })
    );

    expect(movie.search(name)).resolves.toEqual({ data: {} });
    expect(axios.get).lastCalledWith(movie.buildUrl(name));
  });
  ```

* Take a moment to answer any questions about this example before moving on.

### 18. Students Do: Mock FS (10 mins)

* Direct students to the next activity, found in [16-Stu_Mock-Fs/Unsolved](../../../../01-Class-Content/10-oop/01-Activities/16-Stu_Mock-Fs/Unsolved).

```md
# Mock FS

In this activity you will write code to mock and spy on the `fs` module to ensure its called when expected with the correct arguments.

## Instructions

* Open the `Unsolved/fileIO.js` file and take a moment to examine its contents.

* This file exports a `FileIO` constructor function with methods for reading and writing to the filesystem.

* The `read` and `write` methods use the synchronous versions of `fs.readFile` and `fs.writeFile`, so no callback function is required.

* Open `Unsolved/tests/fileIO/test.js` and add code to mock the `fs` module its `readFileSync` and `writeFileSync` methods so that they don't read from and write to the filesystem.

* Make sure that the `readFileSync` and `writeFileSync` methods are called with the correct arguments when the `FileIO.prototype.read` and `FileIO.prototype.write` methods are called.

## 💡 Hints(s)

* Refer to the previous demonstration to reference how to mock node modules.

## 🏆 Bonus

* Write tests for a `FileIO.prototype.append` method that should append to a given file. Then update the `Unsolved/fileIO.js` file to include this method using the `fs.appendFileSync` method.
```

### 19. Instructor Do: Review Mock FS (10 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ There are a few extra steps required to mock third party and built-in node modules, but the idea is the same.

  * ✔️ By mocking the fs module we can avoid requiring our tests to read and write to the filesystem. Not only would this slow down tests, but it could influence how the next test runs.

* Open [16-Stu_Mock-Fs/Solved/test/fileIO.test.js](../../../../01-Class-Content/10-oop/01-Activities/16-Stu_Mock-Fs/Solved/test/fileIO.test.js) file in your editor and point out the following key points:

  * 🔑 We mock the `fs` module by requiring it and using the `jest.mock` method at the top of the file.

  ```js
  const fs = require("fs");
  const FileIO = require("../fileIO");

  jest.mock("fs");
  ```

  * 🔑 Since `fileIO.read` returns the result of `fs.readFileSync`, we can mock it's return value and verify it was called with the expected arguments without actually making a trip to the filesystem.

  ```js
  it("should call fs.readFileSync with the passed in 'file' argument", () => {
    const fileIO = new FileIO();
    const file = "message.txt";
    let data;

    fs.readFileSync.mockReturnValue("Hello World!");
    data = fileIO.read(file);

    expect(data).toEqual("Hello World!");
    expect(fs.readFileSync).lastCalledWith(file, "utf8");
  });
  ```

  * 🔑 When testing the `fileIO.write` method, we just need to know that the `fs.writeFileSync` method was called with the correct arguments. We aren't testing that the `fs` module works, only that it's being utilized as expected.

  ```js
  it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
    const fileIO = new FileIO();
    const path = "message.txt";
    const data = "Hello World!";
  
    fileIO.write(path, data);

    expect(fs.writeFileSync).lastCalledWith(path, data);
  });
  ```

* Answer any lingering questions about testing or mocks before dismissing the class.

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
