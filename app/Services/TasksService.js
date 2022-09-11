import { appState } from "../AppState.js"
import { Task } from "../Models/task.js"
import { saveState } from "../Utils/Store.js"


class TasksService{
  toggleTaskComplete(id){
    let task = appState.tasks.find(task=> task.id == id)
    if (!task) {
      throw new Error ('Bad ID')
    }
    task.taskComplete = !task.taskComplete
    appState.emit('tasks')
    saveState('tasks', appState.tasks)
  }
  addTask(formData){
    let task = new Task(formData)
    appState.tasks = [task, ...appState.tasks]
    saveState('tasks', appState.tasks)
    console.log(appState.tasks, "Hi from T-Serve");
  }
  removeTask(id){
    let tasks = appState.tasks.filter(t=> t.id !== id)
    appState.tasks = tasks
    saveState('tasks', appState.tasks)
  }
  
}

export const tasksService = new TasksService();