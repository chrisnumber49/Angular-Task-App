import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/TaskInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  // create an instance "tasksService" to provide constructor which has the type of "TasksService" imported from tasks.service
  constructor(private tasksService: TasksService) { }

  // like componentDidMount() or useEffect() in React.js
  ngOnInit(): void {
    // subscribe to Observable to constantly watch it (can see as .then() in promise)
    // this.tasksService.getTasks() is Observable, the (tasks) =>{} functuin inside the subscribe function is called observer
    // observer contain next(), error(), and complete() inside
    // if there is new value sent from observable next() will be called by default
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    }
    // can add error() and complete() after next()
    );
  }

  // delete the task with the corresponding id on the frontend after the backend has finished in tasksService
  deleteTask(task: Task) {
    this.tasksService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== task.id;
      });
    });
  }

  // toggle the reminder and update the task with the corresponding id on the backend (with the updated task on frontend)
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
  }

  // add a new task with on the frontend after the backend has finished in tasksService
  addTask(task: Task) {
    this.tasksService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
