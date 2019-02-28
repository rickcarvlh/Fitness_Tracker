import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
 // listen from the outside
 @Output() sideNavClose = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onClose() {
    // emitting an event
    this.sideNavClose.emit();
  }

  onLogout() {
    this.authService.logout();
    this.onClose();
  }

}
