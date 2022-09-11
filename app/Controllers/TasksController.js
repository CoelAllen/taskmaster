import { appState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"



export class TasksController{
  constructor(){
   console.log("tasks controller says eat it!");
   
    
  }
  addTask(listId){
   try {
    console.log("List id: ", listId);
     
     window.event.preventDefault()
     // @ts-ignore
     const form = window.event.target
     let formData = getFormData(form)
     console.log("Task from controller:", formData)
     // @ts-ignore
     formData.listId = listId
     console.log(formData, "data");
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
    
    
    

    
    

    