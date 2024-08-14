/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   updateTasks: () => (/* binding */ updateTasks)
/* harmony export */ });
//lista de tareas
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Funcion para agregar tareas
var addTask = function addTask(task) {
  var newTask = {
    id: Date.now(),
    text: task,
    completed: false
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

//funcion para poder traer la lista de tareas 
var getTasks = function getTasks() {
  return tasks;
};

// funcion para eliminar tarea de la lista
var deleteTask = function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== parseInt(id);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}; // funcioon para eliminar un solo elemento de la lista

//funcion para actualizar una tarea 
var updateTasks = function updateTasks(id) {
  tasks = tasks.map(function (task) {
    if (task.id === parseInt(id)) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.getItem('tasks', JSON.stringify(tasks));
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
// importar funciones traer de afuera

var renderTasks = function renderTasks() {
  var tasksList = document.getElementById("task-list"); // se hizo una variable
  tasksList.innerHTML = "";
  var tasks = (0,_task__WEBPACK_IMPORTED_MODULE_0__.getTasks)(); //agregar elementos de lista lu o il para una cantidad indfefinida
  tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    //Añadir clase solo si la tarea esta completada
    if (task.completed === true) {
      li.classList.add("completed");
    }
    ;
    //hacer cambios en el html crear variables
    li.innerHTML = "\n            ".concat(task.text, "\n            <button class=\"delete\"> Eliminar </button>\n            <button class=\"toggle\"> ").concat(task.completed === false ? "Completar" : "Deshacer", " </button>  \n        "); // boton con texto dinamico dependiendo de una variable true y false

    tasksList.appendChild(li);
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");


document.addEventListener("DOMContentLoaded", function () {
  //Hacemos visible la lista de tareas
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();

  //Agregar el evento para la funcion para agregar tareas
  document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var taskInput = document.getElementById("task-input");
    if (taskInput !== "") {
      //agreganmos la tarea
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskInput.value);

      //volvemos a cargar la lista de tareas
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();

      //limpiar el input
      document.getElementById("task-input").value = "";
    }
    ;
  });

  // Agregar el evento para los botones
  document.getElementById("task-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      var taskId = e.target.parentElement.getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
    }
    ;
    if (e.target.classList.contains("toggle")) {
      var _taskId = e.target.parentElement.getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.updateTasks)(_taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
    }
    ;
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map