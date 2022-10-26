function outer(outerVariable) {
  return function inner(innerVariable) {
    console.log("Outer Variable : " + outerVariable);
    console.log("Inner Variable : " + innerVariable);
  };
}

const newFunction = outer("outside");
newFunction("inside");
