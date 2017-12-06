"use strict";

// Test cases taken from
// https://github.com/babel/minify/blob/master/packages/babel-plugin-transform-remove-console/__tests__/remove-console-test.js

// 1
function foo() {
  blah();
}
// 2
function foo() {
  true;
  blah();
}
// 3
true;
blah();
// 4

blah();
// 5
if (blah) {}
for (;;) {}
for (var blah in []) {}
var _arr = [];
for (var _i = 0; _i < _arr.length; _i++) {
  var blah = function blah() {};
}
// 6
while (blah) {}
do {} while (blah);
// 7
var a = function a() {};
a();
// 8
var b = console.log.bind(console);
b("asdf");
// 9
var x = console.log ? void 0 : foo();
// 10
function foo() {
  if (console.error) {
    console.error("Errored");
  }
}
// 11
console.log.call(console, "foo");
console.log.apply(null, {});
// 12
function foo(console) {
  console.foo("hi");
  var bar = console.foo.bind(console);
}
// 13
function bar(a) {
  var console = function console() {};

  a.b = function (console) {
    return console.bar("bar");
  };
  if (console.foo.call(console, "bar")) {
    return;
  }
}
// 14
function foo() {
  console.foo = function foo() {};
  console.error = myConsoleError;
  console.foo();
  console.error("asdf");
}
// 15
function foo() {
  console.error("bar");
  blah();
  console.info("blah");
}
// 16
function foo() {
  var a = function a() {};
  a();
  var b = console.error.bind(console);
  b("asdf");
  blah();
}
