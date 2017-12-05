// 1
function foo() {
  console.log("foo");
  blah();
}
// 2
function foo() {
  true && console.log("foo");
  blah();
}
// 3
true && console.log("foo");
blah();
// 4
console.log("foo");
blah();
// 5
if (blah) console.log(blah);
for (;;) console.log(blah);
for (var blah in []) console.log(blah);
for (var blah of []) console.log(blah);
// 6
while (blah) console.log(blah);
do console.log(blah); while (blah);
// 7
const a = console.log;
a();
// 8
const b = console.log.bind(console);
b("asdf");
// 9
var x = console.log ? console.log('log') : foo();
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
  const bar = console.foo.bind(console);
}
// 13
function bar(a) {
  const { console } = a;
  a.b = console => console.bar("bar");
  if (console.foo.call(console, "bar")) {
    return;
  }
}
// 14
function foo() {
  console.foo = function foo() {
    console.log("foo");
  };
  console.error = myConsoleError;
  console.foo();
  console.error("asdf");
}
// 15
function foo() {
  console.log("foo");
  console.error("bar");
  blah();
  console.info("blah");
}
// 16
function foo() {
  const a = console.log;
  a();
  const b = console.error.bind(console);
  b("asdf");
  blah();
}