import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Task{
  constructor(data){
    this.id = generateId()
    this.listId= data.listId
    this.name = data.name
    this.taskComplete = data.taskComplete ||false
  }


  get Template() {
    return /*html*/`
      <li class="col-12 list-group-item d-flex px-2 justify-content-between align-items-center">
        <input onchange="app.tasksController.taskComplete('${this.id}')" type= "checkbox" ${this.taskComplete ? "checked" : ''}>
        <p class="mt-3">${this.name}</p>
        <i onclick="app.tasksController.removeTask('${this.id}')" class="bi bi-x-circle selectable" title="Remove Task"></i>
      </li>
    `
  }
}