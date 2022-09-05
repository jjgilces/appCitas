import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchComponent } from './components/match/match.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignComponent } from './components/sign/sign.component';
import { SplashComponent } from './components/splash/splash.component';


const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "login", component: LoginComponent },
  { path: "chat", component: ChatComponent },
  { path: "post", component: PostComponent },
  { path: "profile", component: ProfileComponent },
  { path: "conocer", component: MatchComponent },
  { path: "sign", component: SignComponent },
  { path: "**", redirectTo: "conocer" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
