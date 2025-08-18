let input = document.querySelector(".input");
let button = document.querySelector(".button");
let todo;
let todolist = [];
button.addEventListener("click", (e)=>{
    e.preventDefault();
    todo = input.value;
    if(todo.length > 0){
        todolist.push(todo)
    }
    console.log("clicked - " + todo);
});
