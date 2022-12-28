import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from 'src/app/TaskInterface';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() id?: number;
  @Input() text!: string;
  @Input() day!: string;
  @Input() reminder!: boolean;

  // emit to the task-list component to let task.service handle the post request
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @Output() ontoggleTaskSubmit: EventEmitter<Task> = new EventEmitter();

  // at the beginning the default value of boolean in TypeScript is false
  showTaskForm!: boolean;
  subscription!: Subscription;

  // (step 4, same as what we do in the header component to toggle the button) 
  // subscribe uiService.onTggole() to recieve the showTaskForm in uiService to set the showTaskForm in this component
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onTggole().subscribe((value) => {this.showTaskForm = value});
  }

  ngOnInit(): void {}

  onSubmit() {
    // check if text and day fields are filled
    if(!(this.text && this.day)) {
      alert('Please Fill the Task and Day Fields!');
      return;
    }

    if(!this.id){
      // form dada
      const formTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      // emit to the task-list component to let task.service handle the post request
      this.onAddTask.emit(formTask);

      this.text ='';
      this.day = '';
      this.reminder = false;
    }
    if(this.id){
      const formTask = {
        id: this.id,
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      this.ontoggleTaskSubmit.emit(formTask)
    }
    
  }
}
