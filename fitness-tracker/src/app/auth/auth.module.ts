import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import { ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material";
import { AngularFireAuthModule} from "@angular/fire/auth";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    // AngularFireAuth,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule
  ]
  // exports: [
  //   FormsModule,
  // ]
})
export class AuthModule {

}
