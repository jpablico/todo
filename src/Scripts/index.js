document.addEventListener('DOMContentLoaded', (event) => {
  const taskListContainer = document.getElementById('Labels');
  const addTaskDialog = document.getElementById('Add-Task-Dialog');
  const taskNameInput = document.getElementById('Task-Name');
  const taskDescriptionInput = document.getElementById('Task-Description');
  const submitTaskButton = document.getElementById('Submit-Task');
  const addTaskButton = document.getElementById('Add-Task');

  let taskIdCounter = 0;
  const tasks = [];

  addTaskButton.addEventListener('click', showDialog);
  submitTaskButton.addEventListener('click', addTaskToList);

  function showDialog() {
      addTaskDialog.showModal();
  }

  function addTaskToList(event) {
      event.preventDefault();
      const task = createTask(taskNameInput.value, taskDescriptionInput.value, taskIdCounter);
      tasks.push({
          id: taskIdCounter,
          name: taskNameInput.value,
          description: taskDescriptionInput.value
      });
      taskIdCounter++;
      taskListContainer.appendChild(task);
      addTaskDialog.close();
      clearInputFields();
  }

  function createTask(name, description, id) {
      const task = document.createElement('div');
      task.className = 'Task';
      task.id = `task-${id}`;
      task.innerHTML = `
          <h3>${name}</h3>
          <p>${description}</p>
          <span class="material-icons" onclick="removeTask(${id})">delete</span>
      `;
      return task;
  }

  window.removeTask = function(id) {
      // Remove task from array
      const taskIndex = tasks.findIndex(task => task.id === id);
      tasks.splice(taskIndex, 1);

      // Update task list
      updateTaskList();
  }

  function updateTaskList() {
      // Clear current task list
      taskListContainer.innerHTML = '';

      // Add each task in the array to the DOM
      tasks.forEach(task => {
          const taskElement = createTask(task.name, task.description, task.id);
          taskListContainer.appendChild(taskElement);
      });
  }

  function clearInputFields() {
      taskNameInput.value = '';
      taskDescriptionInput.value = '';
  }
});

let tasks = [];
let completedTasks = [];
let taskIdCounter = 0;

let taskListContainer = document.getElementById('task-list-container');
let completedTasksContainer = document.getElementById('completed-tasks-container');
let taskNameInput = document.getElementById('task-name-input');
let taskDescriptionInput = document.getElementById('task-description-input');

window.addEventListener('DOMContentLoaded', (event) => {
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

function addTaskToList(event) {
    event.preventDefault();
    const task = createTask(taskNameInput.value, taskDescriptionInput.value, taskIdCounter, false);
    tasks.push({
        id: taskIdCounter,
        name: taskNameInput.value,
        description: taskDescriptionInput.value,
        completed: false
    });
    taskIdCounter++;

    localStorage.setItem('tasks', JSON.stringify(tasks));

    updateTaskList();
    clearInputFields();
}

function createTask(name, description, id, completed) {
    const task = document.createElement('div');
    task.className = `Task ${completed ? 'completed' : ''}`;
    task.id = `task-${id}`;
    task.innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
        <span class="material-icons" onclick="toggleTaskCompleted(${id})">check_circle</span>
        <span class="material-icons" onclick="removeTask(${id})">delete</span>
    `;
    return task;
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

function removeTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks.splice(taskIndex, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    updateTaskList();
}

function updateTaskList() {
  taskListContainer.innerHTML = '';
  completedTasksContainer.innerHTML = '';

  // Sort tasks based on priority
  tasks.sort((a, b) => b.priority - a.priority);

  tasks.forEach(task => {
      const taskElement = createTask(task.name, task.description, task.id, task.completed);
      taskListContainer.appendChild(taskElement);
  });

  completedTasks.forEach(task => {
      const taskElement = createTask(task.name, task.description, task.id, task.completed);
      completedTasksContainer.appendChild(taskElement);
  });
}

function clearInputFields() {
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
}