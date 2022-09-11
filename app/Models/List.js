import { appState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { generateId } from "../Utils/generateId.js";

export class List{
  constructor(data){
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }
  
  get ListTemplate(){
    return /*html*/`
    <div class="col-12 col-md-4 col-lg-3">
      <div class="rounded elevation-1 " >
        <div class="d-flex justify-content-end text-light" style="background-color: ${this.color}">
          <i class="p-1 bi bi-x-lg" onclick="app.listsController.removeList('${this.id}')" title = "Remove List" ></i>
        </div>
        <div class='text-center text-light pb-2' style= 'background-color: ${this.color}' >
          <h4 class="listText">${this.name}</h4>
          <p class="listText" >${this.TasksComplete}/${this.Tasks.length}</p>
        </div>
        <ul id = "tasks" class="list-group elevation-2 mb-3">
          ${this.TaskTemplates}
        </ul>
        <form class="rounded p-2" onsubmit="app.tasksController.addTask('${this.id}')">
          <div class="d-flex">
            <div class="flex-grow-1">
              <input class="form-control square-right" type="text" required minlength="2" name="name" placeholder="Add Task..."/>
              <label for="name" class="visually-hidden"></label>
            </div>
            <button type="submit" style = "background-color: ${this.color}" class="btn square-left" title="Add Task">
              <b><i class="bi bi-plus"></i></b>
            </button>
          </div>
        </form>
        
      </div>
    </div>
    `
  }
      
      
  get TaskTemplates(){
   let template = ''
   this.Tasks.forEach(task=> template += task.Template)
   return template
  }
    
    
  get Tasks(){
    let template = ''
    let tasks = appState.tasks.filter(task => task.listId == this.id)
    tasks.forEach(task => template += task.Template)
    return tasks
}
 get TasksComplete(){
   return this.Tasks.filter(t => t.taskComplete == true).length
}
}
