import { Injectable } from '@angular/core'; 
import { Observable, Subject} from 'rxjs';

// if use the providedIn property with 'root' within an injectable decorator
// no need to add the Service in app.module providers array
@Injectable({
  providedIn: 'root'
})
export class UiService {
  // defaultly don't show the task-form component (button will be green with Add text by default as well)
  private showTaskForm: boolean = false;
  
  // (because we got header and task-form components)
  // subject is the only way to share an Observable (can be without subscribing to an Observable) 
  // to let multiple observers subscribe, ALOS THE LATTER WILL SHARE THE SAME PROGRESS AS THE FORMER'S DATA 
  // subject take the notification from a Observable and forward it to the destination Observers
  private subject = new Subject<any>();

  constructor() { }

  // (step 2) toggle showTaskForm and use subject.next() forward the showTaskForm to the destination Observers
  toggleTaskForm(): void {
    this.showTaskForm = !this.showTaskForm;
    this.subject.next(this.showTaskForm);
  }

  // (step 3) component need to subscribe to this function, so they can recieve showTaskForm forwarded by subject
  onTggole(): Observable<any> {
    // return the Subject as an Observable to let other observers subscribe
    return this.subject.asObservable();
  }
}
