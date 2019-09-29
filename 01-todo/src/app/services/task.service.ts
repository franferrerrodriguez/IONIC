import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private lists:List[];

  constructor() {
    
    this.lists = [];

    const l1 = new List("Lista 1");
    const l2 = new List("Lista 2");
    this.add([l1, l2]);
    console.log(this.lists);
  }

  add(lists:List[]){
    for(let list of lists)
      this.lists[list.id] = list;
  }

  remove(index:number){
    this.lists.splice(index, 1);
  }
  
}