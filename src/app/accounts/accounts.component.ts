import { Component, OnInit } from '@angular/core';
import { FeatureFlagService } from 'src/feature-flag/feature-flag.service';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  delete: boolean = false;
  constructor(private featureFlag: FeatureFlagService) {
    this.featureFlag.flagChange.subscribe(res => {
      this.delete = res.delete;
      console.log("flags", this.delete);
    });
  }


}
