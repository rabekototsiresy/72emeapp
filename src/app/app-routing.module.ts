import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AvatarUploadComponent } from './pages/avatar-upload/avatar-upload.component';
import { CongratulationComponent } from './pages/congratulation/congratulation.component';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { RegisterComponent } from './pages/register/register.component';
import { SampanaDetailsComponent } from './pages/sampana-details/sampana-details.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent,
  },
  {
    path: "home",canActivate: [AuthGuard], component: HomeComponent
  },  
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "user/:id", canActivate: [AuthGuard],component: DetailUserComponent
  },
  {
    path: "user/edit/:id", canActivate: [AuthGuard],component: EditComponent
  },
  {
    path: "congratulation", component: CongratulationComponent
  },
  {
    path: "upload-avatar/:id", component: AvatarUploadComponent
  },
  {
    path: "list-user",component: ListUserComponent
  },
  {
    path: "sampana/:sampana", component: SampanaDetailsComponent
  },
  {
    path: "not-found", component: NotFound404Component
  },
  {
    path: "**", redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
