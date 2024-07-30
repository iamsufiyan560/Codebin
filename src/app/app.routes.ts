import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateBinComponent } from './create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ViewSnippetComponent } from './view-snippet/view-snippet.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'create', component: CreateBinComponent, canActivate: [authGuard] },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((mod) => mod.AboutComponent),
  },
  { path: '', component: HomeComponent },
  { path: 'snippet/:id', component: ViewSnippetComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
