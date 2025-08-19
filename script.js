let input = document.querySelector(".input");
let button = document.querySelector(".button");
let container = document.querySelector(".container");

button.addEventListener("click", function(e) {
    e.preventDefault(); 
    let todo = input.value.trim(); 

    if(todo !== "") {
        let item = document.createElement("div");
        item.classList.add("wishlist-item");
        item.innerHTML = `<span>${todo}</span>
        <span class="material-icons-outlined">delete</span>`;
        container.appendChild(item);
        input.value = "";

        item.querySelector(".material-icons-outlined").addEventListener("click", ()=> {
            item.remove();
        });
    }
});
