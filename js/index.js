const input = document.querySelector("#input-box")
const addButton = document.querySelector("#btn")
const tasksUl = document.querySelector("#tasks")
input.placeholder = "Task name..."

// carregar tasks
const loadTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        createTask(task.name, task.checked)
    });
}

// Salvar tasks
const saveTasks = () => {
    const tasks = []
    const taskItems = tasksUl.querySelectorAll("li");
    taskItems.forEach(item => {
        const taskText = item.querySelector("span").innerText;
        const checkBox = item.querySelector("input[type='checkbox']");
        tasks.push({
            name: taskText,
            checked: checkBox.checked
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Criar task
const createTask = (taskName, isChecked = false) => {
    const newTask = document.createElement("li")
    const checkBox = document.createElement("input")
    const removeButton = document.createElement("button")
    const taskText = document.createElement("span")

    taskText.innerText = taskName
    checkBox.type = "checkbox"
    checkBox.checked = isChecked
    removeButton.innerText = "REMOVE"

    taskText.style.padding = "0 1rem";

    if (isChecked) {
        taskText.style.textDecoration = "line-through"
    }

    newTask.appendChild(checkBox)
    newTask.appendChild(taskText)
    newTask.appendChild(removeButton)

    tasksUl.appendChild(newTask)
    
    // Remover a tarefa
    removeButton.addEventListener("click", () => {
        tasksUl.removeChild(newTask)
        saveTasks()
    })

    // Riscar a tarefa qnd marcar o checkbox
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "";
        }
        saveTasks();
    })

    saveTasks();
}

loadTasks();

// Criação da tarefa
addButton.addEventListener("click", () => {
    const task = input.value.trim()
    if (task === "") {
        alert("Type a valid task name!!")
        return;
    }

    createTask(task);
    input.value = ""
})

