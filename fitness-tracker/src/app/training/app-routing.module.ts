import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "../welcome/welcome.component";
import {TrainingComponent} from "./training.component";
import {AuthGuard} from "../auth/auth.guard";

// protecting the routes
const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path: 'training', component: TrainingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
