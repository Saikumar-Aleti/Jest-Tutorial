a = [1, 2, 3];
console.log(Object.is(a, a));

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});
process.nextTick(() => {
  console.log("process.nextTick");
});
