// FAKE USER LOGIN SERVICE
// access the user only from the inside
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

// injecting services into services
@Injectable()
export class AuthService {
  // calling the interface
  private user: User;

  //constructor can be added now
  constructor(private router: Router, private  afAuth: AngularFireAuth) {

  }

  // either true or false
  authChange = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(
      authData.email,
      authData.password).then(result => {
      console.log(result);
      this.authSucessufully();
    })
      .catch(error => {
        console.log(error);
      });
    //  every time i register a user i want to emit a event
    this.authSucessufully();
  }

  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password).then(result => {
      console.log(result);
      this.authSucessufully();
    })
      .catch(error => {
        console.log(error);
      });
    this.authSucessufully();

  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  // get access to user it's private
  getUser() {
    // returns a copy of the Object user
    return {...this.user};
  }

  // utility function
  isAuth() {
    // return if the user is set or not
    return this.user != null;

  }

  private authSucessufully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);

  }
}
