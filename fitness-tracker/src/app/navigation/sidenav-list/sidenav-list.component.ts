import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
 // listen from the outside
 @Output() sideNavClose = new EventEmitter<void>();
 isAuth = false;
 authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.authSubscription=  this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onClose() {
    // emitting an event
    this.sideNavClose.emit();
  }

  onLogout() {
    this.authService.logout();
    this.onClose();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
