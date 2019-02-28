// FAKE USER LOGIN SERVICE
// access the user only from the inside
import {User} from "./user.model";
import {AuthData} from "./auth-data.model";
import {Subject} from "rxjs";

export class AuthService {
  // calling the interface
  private user: User;

  // either true or false
  authChange = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      // generate a fake random id
      userId: Math.round(Math.random() * 10000).toString()
    };
    //  every time i register a user i want to emit a event
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  // get access to user it's private
  getUser() {
    return {...this.user};
  }

  // utility function
  isAuth() {
    return this.user != null;

  }
}
