import { getFormData } from "../Utils/FormHandler.js";
import { listsService } from "../Services/ListsService.js";
import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

 function drawLists(){
  let template =''
  appState.lists.forEach(list => template += list.ListTemplate)
  setHTML('lists', template)
  console.log('hello from drawLists!');
 
}

export class ListsController{
  constructor(){
    console.log("controller says hi");
    appState.on('lists', drawLists)
    appState.on('tasks', drawLists)
    drawLists()
  }

  createList(){
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form= window.event.target
      let formData = getFormData(form)
      listsService.createList(formData)
      // @ts-ignore
      form.reset()
      
    } catch (error) {
      console.error("controller error");
    }
  }
  removeList(id){
    if (window.confirm('Have you finished this list?'))
    listsService.removeList(id)
    drawLists()
  }
}