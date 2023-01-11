/* <li>"new" - Add a todo</li>
<li>"list" - List all todos</li>
<li>"delete" - Remove todo by index</li>
<li>"quit" - Quit app</li> */

let todos = [];
let command;
while (command !== "quit") {
    command = prompt("Enter your command:");
    if (command === "new") {
        let new_todo = prompt("Enter a new todo:");
        todos.push(new_todo);
        console.log(`Todo ${new_todo} added to list.`)
    } else if (command == "list") {
        console.log("********")
        for (const [i, todo] of todos.entries()) {
            console.log(`${i}: ${todo}`);
        }
        console.log("********");
    } else if (command == "delete") {
        let index = prompt("Enter index of todo you want to delete:");
        todos.splice(index, 1);
        console.log(`Todo ${index} deleted.`)
    }
}
console.log("Successfully exited.");
alert("Successfully exited.");
