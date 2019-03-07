// FAKE USER LOGIN SERVICE
// access the user only from the inside
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {TrainingService} from '../training/training.service';

// injecting services into services
@Injectable()
export class AuthService {
  // calling the interface
  private isAuthenticated = false;

  //constructor can be added now
  constructor(private router: Router, private  afAuth: AngularFireAuth, private trainingService: TrainingService) {

  }

  // either true or false
  authChange = new Subject<boolean>();

  initAuthListner() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      }else{
        this.trainingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(
      authData.email,
      authData.password).then(result => {
      console.log(result);
    })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password).then(result => {
      console.log(result);
    })
      .catch(error => {
        console.log(error);
      });


  }

  logout() {
    this.afAuth.auth.signOut();
  }


  // utility function
  isAuth() {

    return this.isAuthenticated;

  }


}
