import { Component, OnInit } from '@angular/core';
import { FeatureFlagService } from 'src/feature-flag/feature-flag.service';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  delete: boolean = this.featureFlag.flags["S-AC-Delete"];
  constructor(private featureFlag: FeatureFlagService) {}

  ngOnInit() {
    this.featureFlag.flagChange.subscribe(res => {
      this.delete = res["S-AC-Delete"];
      console.log("flags", this.delete);
      this.featureFlag.flags["S-AC-Delete"] = this.delete;
    });    
  }
}
