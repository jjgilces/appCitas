import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { SplashComponent } from './components/splash/splash.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "sign", component: SignComponent },
  { path: "**", redirectTo: "splash" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
