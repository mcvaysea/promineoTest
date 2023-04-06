console.log("<-----Evan Arrays----->");

let todoList = ["work", "code", "eat", "sleep"];

/* 
console.log(todoList);
console.log(todoList[2]);


todoList.push("file taxes");

console.log(todoList);


todoList.pop();
console.log(todoList);
todoList.shift();
console.log(todoList);
 */

/* 
function printOutToDoList() {
  for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i]);
  }
}

printOutToDoList(todoList);
 */

function printOutToDoListWithWhileLoop() {
  let i = 0;
  while (i < todoList.length) {
    console.log(todoList[i]);
    i++;
  }
}

printOutToDoListWithWhileLoop(todoList);
