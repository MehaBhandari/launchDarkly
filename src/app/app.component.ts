import { Component } from '@angular/core';
import { FeatureFlagService } from 'src/feature-flag/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LaunchDarklyPOC';
  accounts: boolean = false;
  transactions: boolean = false;
  reports: boolean = false;
  users: boolean = false;
  constructor(private featureFlag: FeatureFlagService) {
    this.featureFlag.flagChange.subscribe((res) => {
      this.accounts = res.feature1;
      this.transactions = res.feature2;
      this.reports = res.feature3;
      this.users = res.feature4;
    });
  }
}
