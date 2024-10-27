const item = document.querySelectorAll("#item")[0];
const toDoBox = document.querySelectorAll("#to-do-box")[0];

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter" && this.value.trim() !== "") {
            addToDo(this.value)
            this.value = "";
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fa-solid fa-xmark"></i>
    `;

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done")
        })

        listItem.querySelectorAll("i")[0].addEventListener(
            "click",
            function() {
                listItem.remove()
            }
        )

    toDoBox.appendChild(listItem);
}

