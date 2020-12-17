import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../../../_services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.authenticationService.logout();
  }
}
