import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureFlagService } from 'src/feature-flag/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LaunchDarklyPOC';
  loggedInUser: any = sessionStorage.getItem("user");

  constructor(private router: Router) {
    this.checkForUser();
  }

  checkForUser() {
    if(!this.loggedInUser){
      this.router.navigateByUrl("login");
    } else if(!!this.loggedInUser) {
      this.router.navigateByUrl("home");
    }
  }

}
