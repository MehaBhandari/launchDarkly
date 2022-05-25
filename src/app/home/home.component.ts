import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FeatureFlagService } from 'src/feature-flag/feature-flag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  loggedInUser: any = sessionStorage.getItem("user");
  accounts: boolean = this.featureFlag.flags['feature1'];
  transactions: boolean = this.featureFlag.flags['feature2'];
  reports: boolean = this.featureFlag.flags['feature3'];
  users: boolean = this.featureFlag.flags['feature4'];
  featureFlagSubscription: any;

  constructor(private featureFlag: FeatureFlagService, private router: Router) {
  }

  ngOnInit(): void {
    this.featureFlag.fetchFeatureFlags(JSON.parse(this.loggedInUser));
    this.featureFlagSubscription = this.featureFlag.flagChange.subscribe((res) => {
      this.accounts = res.feature1;
      this.transactions = res.feature2;
      this.reports = res.feature3;
      this.users = res.feature4;
    });
  }

  ngOnDestroy(): void {
      this.featureFlagSubscription.unsubscribe();
      this.featureFlag.close();
  }

  logout() {
    sessionStorage.removeItem("user");
    this.router.navigateByUrl("login");
  }

}
