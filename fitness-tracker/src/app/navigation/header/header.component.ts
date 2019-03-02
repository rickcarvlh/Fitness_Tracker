import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  //  to be listen from the outside
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth =  false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
     this.authSubscription=  this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
    // emitting an event
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
