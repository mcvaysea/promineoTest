

function makeFunc() {
  const name = "Sean";
  function dispName() {
    console.log(`${name} says Hello.`);
  }
  function dispMOTD() {
    console.log(`${name} is trying to learn JavaScript.`);
  }
  dispName()
  dispMOTD()
}

const myFunc = makeFunc();
myFunc();
myFunc();