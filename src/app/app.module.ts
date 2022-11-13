import { TasksService } from './services/tasks.service';
import { UiService } from './services/ui.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

// Router in Angular
const appRoutes: Routes = [
  {path: '', component: TasksListComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksListComponent,
    TaskComponent,
    TaskFormComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // enableTracing helps for debugging
    RouterModule.forRoot(appRoutes, {enableTracing: true}) 
  ],
  // if use the providedIn property with 'root' within an injectable decorator
  // no need to add the Service in app.module providers array
  providers: [TasksService, UiService], // can be empty
  bootstrap: [AppComponent]
})
export class AppModule { }
