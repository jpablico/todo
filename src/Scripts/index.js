document.addEventListener('DOMContentLoaded', (event) => {
    const taskListContainer = document.getElementById('task-list-container');
    const completedTasksContainer = document.getElementById('completed-tasks-container');
    const addTaskDialog = document.getElementById('Add-Task-Dialog');
    const taskNameInput = document.getElementById('Task-Name');
    const taskDescriptionInput = document.getElementById('Task-Description');
    const taskDueDateInput = document.getElementById('Task-Due-Date');
    const taskPriorityInput = document.getElementById('Task-Priority');
    const taskNotesInput = document.getElementById('Task-Notes');
    const submitTaskButton = document.getElementById('Submit-Task');
    const addTaskButton = document.getElementById('Add-Task');

    let taskIdCounter = 0;
    let tasks = [];
    let completedTasks = [];

    addTaskButton.addEventListener('click', showDialog);
    submitTaskButton.addEventListener('click', addTaskToList);

    function showDialog() {
        addTaskDialog.showModal();
    }

    function addTaskToList(event) {
        event.preventDefault();
        const task = createTask(taskNameInput.value, taskDescriptionInput.value, taskDueDateInput.value, taskPriorityInput.value, taskNotesInput.value, taskIdCounter, false);
        tasks.push({
            id: taskIdCounter,
            name: taskNameInput.value,
            description: taskDescriptionInput.value,
            dueDate: taskDueDateInput.value,
            priority: taskPriorityInput.value,
            notes: taskNotesInput.value,
            completed: false
        });
        taskIdCounter++;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTaskList();
        clearInputFields();
        addTaskDialog.close();
    }

    function createTask(name, description, dueDate, priority, notes, checklist, id, completed) {
        const task = document.createElement('div');
        task.className = `Task ${completed ? 'completed' : ''}`;
        task.id = `task-${id}`;
        task.innerHTML = `
            <h3>${name}</h3>
            <p>${description}</p>
            <p>Due Date: ${dueDate}</p>
            <p>Priority: ${priority}</p>
            <p>Notes: ${notes}</p>
            <span class="material-symbols-outlined" onclick="toggleTaskCompleted(${id})">check_circle</span>
            <span class="material-symbols-outlined" onclick="removeTask(${id})">delete</span>
        `;
        return task;
    }

    window.removeTask = function(id) {
        let taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        } else {
            taskIndex = completedTasks.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                completedTasks.splice(taskIndex, 1);
            }
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
        updateTaskList();
    }

    window.toggleTaskCompleted = function(id) {
        const task = tasks.find(task => task.id === id);
        task.completed = !task.completed;
        if (task.completed) {
            completedTasks.push(task);
            tasks = tasks.filter(task => task.id !== id);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
        updateTaskList();
    }

    function updateTaskList() {
        taskListContainer.innerHTML = '';
        completedTasksContainer.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = createTask(task.name, task.description, task.dueDate, task.priority, task.notes, task.checklist, task.id, task.completed);
            taskListContainer.appendChild(taskElement);
        });
        completedTasks.forEach(task => {
            const taskElement = createTask(task.name, task.description, task.dueDate, task.priority, task.notes, task.checklist, task.id, task.completed);
            completedTasksContainer.appendChild(taskElement);
        });
    }

    function clearInputFields() {
        taskNameInput.value = '';
        taskDescriptionInput.value = '';
        taskDueDateInput.value = '';
        taskPriorityInput.value = '';
        taskNotesInput.value = '';
    }

    const savedTasks = localStorage.getItem('tasks');
    const savedCompletedTasks = localStorage.getItem('completedTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    if (savedCompletedTasks) {
        completedTasks = JSON.parse(savedCompletedTasks);
    }
    updateTaskList();
});
let projects = [];

function createProject(name) {
    const project = { name, todos: [] };
    projects.push(project);
    updateProjectsList();
}

function addTodoToProject(projectName, todo) {
    const project = projects.find(project => project.name === projectName);
    project.todos.push(todo);
    updateProjectsList();
}

function updateProjectsList() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.textContent = project.name;
        projectElement.addEventListener('click', () => showTodosForProject(project));
        projectsContainer.appendChild(projectElement);
    });
}

function showTodosForProject(project) {
    const todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = '';
    project.todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.textContent = `${todo.name} (due ${todo.dueDate})`;
        todoElement.style.color = getPriorityColor(todo.priority);
        todoElement.addEventListener('click', () => showTodoDetails(todo));
        todosContainer.appendChild(todoElement);
    });
}

function getPriorityColor(priority) {
    switch (priority) {
        case 'low': return 'green';
        case 'medium': return 'orange';
        case 'high': return 'red';
    }
}

function showTodoDetails(todo) {
    // This function should display a dialog or another UI element
    // with the details of the todo. The user should be able to edit
    // these details.
}