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
for (;;) console.log(blah);
for (var blah in []) console.log(blah);
for (var blah of []) console.log(blah);

while (blah) console.log(blah);
do console.log(blah); while (blah);

const a = console.log;
a();
const b = console.log.bind(console);
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
  const bar = console.foo.bind(console);
}

function bar(a) {
  const { console } = a;
  a.b = console => console.bar("bar");
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
  const a = console.log;
  a();
  const b = console.error.bind(console);
  b("asdf");
  blah();
}