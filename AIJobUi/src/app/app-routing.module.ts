import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
   //{ path: '', component: NavbarComponent },
   
  { path: 'register', component: RegistrationComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'bookmark', component: BookmarkComponent,canActivate: [authGuard] },

  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: '**', redirectTo: 'register' }
 
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
