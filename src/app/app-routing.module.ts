import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppStartComponent} from "./components/app-start.component";
import {LoginComponent} from "./components/login.component";
import {SignupComponent} from "./components/signup.component";
import {IndexComponent} from "./components/index.component";
import {AuthGuard} from "./guards/auth.guard";
import {AnonGuard} from "./guards/anon.guard";
import {EditComponent} from "./components/edit.component";
import {NotFoundComponent} from "./components/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: AppStartComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AnonGuard]
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
