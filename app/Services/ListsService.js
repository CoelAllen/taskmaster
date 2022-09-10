import { appState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/Store.js";


class ListsService{
  


  createList(formData){
    let list = new List(formData)
    appState.lists =[list, ...appState.lists]
    saveState('lists', appState.lists)
  }
  removeList(id){
    let lists=appState.lists.filter(list =>list.id !==id)
    appState.lists = lists
    saveState('lists', appState.lists)
  }
}


export const listsService = new ListsService();
