import { Component, OnInit } from '@angular/core';
import { FeatureFlagService } from 'src/feature-flag/feature-flag.service';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component {
  delete: boolean = false;
  constructor(private featureFlag: FeatureFlagService) {
    this.featureFlag.flagChange.subscribe(res => {
      this.delete = res.delete;
      console.log("flags", this.delete);
    });
  }


}
