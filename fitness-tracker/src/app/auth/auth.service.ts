// FAKE USER LOGIN SERVICE
// access the user only from the inside
import {User} from "./user.model";
import {AuthData} from "./auth-data.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

// injecting services into services
@Injectable()
export class AuthService {
  // calling the interface
  private user: User;

  //constructor can be added now
  constructor(private router: Router) {

  }

  // either true or false
  authChange = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      // generate a fake random id
      userId: Math.round(Math.random() * 10000).toString()
    };
    //  every time i register a user i want to emit a event
    this.authSucessufully();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSucessufully();

  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login'])
  }

  // get access to user it's private
  getUser() {
    // returns a copy of the Object user
    return {...this.user};
  }

  // utility function
  isAuth() {
    return this.user != null;

  }

  private authSucessufully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);

  }
}
