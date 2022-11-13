import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/TaskInterface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // emit the function to task-list compoent, let the taskService handle the logic (click delete button to delete)
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  // emit the function to task-list compoent, let the taskService handle the logic (double click to toggle the reminder)
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
