"use strict";

function foo() {
  console.log("foo");
  blah();
}

function foo() {
  true && console.log("foo");
  blah();
}

true && console.log("foo");
blah();

console.log("foo");
blah();

if (blah) console.log(blah);
for (;;) {
  console.log(blah);
}for (var blah in []) {
  console.log(blah);
}var _arr = [];
for (var _i = 0; _i < _arr.length; _i++) {
  var blah = _arr[_i];console.log(blah);
}while (blah) {
  console.log(blah);
}do {
  console.log(blah);
} while (blah);

var a = console.log;
a();
var b = console.log.bind(console);
b("asdf");

var x = console.log ? console.log('log') : foo();
function foo() {
  if (console.error) {
    console.error("Errored");
  }
}

console.log.call(console, "foo");
console.log.apply(null, {});

function foo(console) {
  console.foo("hi");
  var bar = console.foo.bind(console);
}

function bar(a) {
  var console = a.console;

  a.b = function (console) {
    return console.bar("bar");
  };
  if (console.foo.call(console, "bar")) {
    return;
  }
}

function foo() {
  console.foo = function foo() {
    console.log("foo");
  };
  console.error = myConsoleError;
  console.foo();
  console.error("asdf");
}

function foo() {
  console.log("foo");
  console.error("bar");
  blah();
  console.info("blah");
}

function foo() {
  var a = console.log;
  a();
  var b = console.error.bind(console);
  b("asdf");
  blah();
}
