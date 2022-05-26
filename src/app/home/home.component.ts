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
  accounts: boolean = this.featureFlag.flags['accounts'] || false;
  transactions: boolean = this.featureFlag.flags['transcations'] || false;
  reports: boolean = this.featureFlag.flags['reports'] || false;
  users: boolean = this.featureFlag.flags['users'] || false;
  featureFlagSubscription: any;

  constructor(private featureFlag: FeatureFlagService, private router: Router) {
  }

  ngOnInit(): void {
    this.featureFlag.fetchFeatureFlags(JSON.parse(this.loggedInUser));
    this.featureFlagSubscription = this.featureFlag.flagChange.subscribe((res) => {
      this.accounts = res.accounts;
      this.transactions = res.transcations;
      this.reports = res.reports;
      this.users = res.users;
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
