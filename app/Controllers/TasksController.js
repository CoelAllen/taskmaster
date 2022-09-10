import { appState } from "../AppState.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"
import { tasksService } from "../Services/TasksService.js"



export class TasksController{
  constructor(){
   
   
    
  }
  addTask(listId){
   try {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target
    let formData = getFormData(form)
    formData.listId = listId
    console.log('is tasks working?',formData);
    tasksService.addTask(formData)
    // @ts-ignore
    form.reset()
    
    
   } catch (error) {
    console.error(error);
   }

    }
    removeTask(id){
      if (window.confirm('Are you sure you want to remove this?')){
        tasksService.removeTask(id)
      }
    }
    
    toggleTaskComplete(id){
      tasksService.toggleTaskComplete(id)
    }

}