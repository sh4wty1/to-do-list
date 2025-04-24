const input = document.querySelector("#input-box")
const addButton = document.querySelector("#btn")
const tasksUl = document.querySelector("#tasks")
input.placeholder = "Task name..."

// Criação da tarefa
addButton.addEventListener("click", () => {
    const task = input.value.trim()
    if (task === "") {
        alert("Type a valid task name!!")
        return;
    }

    const newTask = document.createElement("li")
    const checkBox = document.createElement("input")
    const removeButton = document.createElement("button")
    const taskText = document.createElement("span")

    taskText.innerText = task
    checkBox.type = "checkbox"
    removeButton.innerText = "REMOVE"

    taskText.style.padding = "0 1rem";

    newTask.appendChild(checkBox)
    newTask.appendChild(taskText)
    newTask.appendChild(removeButton)

    tasksUl.appendChild(newTask)
    input.value = ""

    // Remover a tarefa
    removeButton.addEventListener("click", () => {
        tasksUl.removeChild(newTask)
    })

    // Riscar a tarefa qnd marcar o checkbox
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "";
        }
    })
})

