import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/TaskInterface';

// http request headers method in Angular (same as fetch in React, could contain 'Content-Type', 'Authorization' etc.)
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  // recommended way is to do all the logic operations (like HTTP requests) in service instead of in component 
  private apiUrl: string = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) { }

  // in Angular, Observable is commonly used to handle asynchronous
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // delete the task with the corresponding id on the backend server
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    // endpoint, body, and headers
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
