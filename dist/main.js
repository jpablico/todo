/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Scripts/index.js":
/*!******************************!*\
  !*** ./src/Scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', (event) => {\n    const taskListContainer = document.getElementById('task-list-container');\n    const completedTasksContainer = document.getElementById('completed-tasks-container');\n    const addTaskDialog = document.getElementById('Add-Task-Dialog');\n    const taskNameInput = document.getElementById('Task-Name');\n    const taskDescriptionInput = document.getElementById('Task-Description');\n    const submitTaskButton = document.getElementById('Submit-Task');\n    const addTaskButton = document.getElementById('Add-Task');\n  \n    let taskIdCounter = 0;\n    let tasks = [];\n    let completedTasks = [];\n  \n    addTaskButton.addEventListener('click', showDialog);\n    submitTaskButton.addEventListener('click', addTaskToList);\n  \n    function showDialog() {\n        addTaskDialog.showModal();\n    }\n  \n    function addTaskToList(event) {\n        event.preventDefault();\n        const task = createTask(taskNameInput.value, taskDescriptionInput.value, taskIdCounter, false);\n        tasks.push({\n            id: taskIdCounter,\n            name: taskNameInput.value,\n            description: taskDescriptionInput.value,\n            completed: false\n        });\n        taskIdCounter++;\n        localStorage.setItem('tasks', JSON.stringify(tasks));\n        updateTaskList();\n        clearInputFields();\n        addTaskDialog.close();\n    }\n  \n    function createTask(name, description, id, completed) {\n        const task = document.createElement('div');\n        task.className = `Task ${completed ? 'completed' : ''}`;\n        task.id = `task-${id}`;\n        task.innerHTML = `\n            <h3>${name}</h3>\n            <p>${description}</p>\n            <span class=\"material-icons\" onclick=\"toggleTaskCompleted(${id})\">check_circle</span>\n            <span class=\"material-icons\" onclick=\"removeTask(${id})\">delete</span>\n        `;\n        return task;\n    }\n  \n    window.removeTask = function(id) {\n      const taskIndex = tasks.findIndex(task => task.id === id);\n      tasks.splice(taskIndex, 1);\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n      updateTaskList();\n    }\n  \n    window.toggleTaskCompleted = function(id) {\n      const task = tasks.find(task => task.id === id);\n      task.completed = !task.completed;\n      if (task.completed) {\n          completedTasks.push(task);\n          tasks = tasks.filter(task => task.id !== id);\n      }\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n      localStorage.setItem('completedTasks', JSON.stringify(completedTasks));\n      updateTaskList();\n    }\n  \n    function updateTaskList() {\n        taskListContainer.innerHTML = '';\n        completedTasksContainer.innerHTML = '';\n        tasks.forEach(task => {\n            const taskElement = createTask(task.name, task.description, task.id, task.completed);\n            taskListContainer.appendChild(taskElement);\n        });\n        completedTasks.forEach(task => {\n            const taskElement = createTask(task.name, task.description, task.id, task.completed);\n            completedTasksContainer.appendChild(taskElement);\n        });\n    }\n  \n    function clearInputFields() {\n        taskNameInput.value = '';\n        taskDescriptionInput.value = '';\n    }\n  \n    const savedTasks = localStorage.getItem('tasks');\n    const savedCompletedTasks = localStorage.getItem('completedTasks');\n    if (savedTasks) {\n        tasks = JSON.parse(savedTasks);\n    }\n    if (savedCompletedTasks) {\n        completedTasks = JSON.parse(savedCompletedTasks);\n    }\n    updateTaskList();\n  });\n\n//# sourceURL=webpack://To-Do-List-App/./src/Scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Scripts/index.js"]();
/******/ 	
/******/ })()
;