import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private taskService:TaskService ) {}

  edit(item:List){
    console.log(item);
  }

  remove(item:List){
    this.taskService.remove(item.id);
  }

}