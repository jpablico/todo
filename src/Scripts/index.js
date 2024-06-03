document.addEventListener('DOMContentLoaded', (event) => {
    const taskListContainer = document.getElementById('task-list-container');
    const completedTasksContainer = document.getElementById('completed-tasks-container');
    const addTaskDialog = document.getElementById('Add-Task-Dialog');
    const taskNameInput = document.getElementById('Task-Name');
    const taskDescriptionInput = document.getElementById('Task-Description');
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
        addTaskDialog.close();
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
  
    window.removeTask = function(id) {
      const taskIndex = tasks.findIndex(task => task.id === id);
      tasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
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