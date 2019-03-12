// FAKE USER LOGIN SERVICE
// access the user only from the inside
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {TrainingService} from '../training/training.service';
import {UiService} from '../shared/ui.service';
import {Store} from "@ngrx/store";
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';

// injecting services into services
@Injectable()
export class AuthService {
  // calling the interface
  private isAuthenticated = false;

  //constructor can be added now
  constructor(private router: Router, private  afAuth: AngularFireAuth,
              private trainingService: TrainingService,
              private uiService: UiService,
              private store: Store<fromRoot.State>) {}


  // either true or false
  authChange = new Subject<boolean>();

  initAuthListner() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    // this.uiService.loadingStateChange.next(true);
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth.
    createUserAndRetrieveDataWithEmailAndPassword(
      authData.email,
      authData.password).then(result => {
      // this.uiService.loadingStateChange.next(false);
      this.store.dispatch(new UI.StopLoading());
    })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading());
        // this.uiService.loadingStateChange.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    // this.uiService.loadingStateChange.next(true);
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password).then(result => {
      // this.uiService.loadingStateChange.next(false);
      this.store.dispatch(new UI.StopLoading());
    })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading());
        // this.uiService.loadingStateChange.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
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
