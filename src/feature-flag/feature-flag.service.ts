import { Injectable } from '@angular/core';
import * as LDClient from 'launchdarkly-js-client-sdk';
import { LDFlagSet } from 'launchdarkly-js-client-sdk';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  private CLIENT_SIDE_ID: string = '627ba09428c46215aafd15af';
  user: LDClient.LDUser = {
    key: 'aa0ceb'
  };
  client = LDClient.initialize(this.CLIENT_SIDE_ID, this.user);
  flagChange: Subject<any> = new Subject();
  flags: LDFlagSet = {};
  constructor() {
    this.client.on('ready', () => {
      this.setFlags();
      this.client.on('change', () => {
        this.setFlags();
      });
    });
  }

  setFlags() {
    this.flags = this.client.allFlags();
    this.flagChange.next(this.flags);
  }

}
