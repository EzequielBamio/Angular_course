import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[] = [];
  nameTask = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask()
  {
    const task = new Task( this.nameTask, false );

    this.listTasks.push( task );

    this.nameTask = '';
  }

  removeTask( position: number )
  {
    this.listTasks.splice( position, 1 );
  }

  updateTask( task: Task )
  {
    task.state = !task.state;
  }

}
