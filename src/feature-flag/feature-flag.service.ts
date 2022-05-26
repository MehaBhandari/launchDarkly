import { Injectable } from '@angular/core';
import * as LDClient from 'launchdarkly-js-client-sdk';
import { LDFlagSet } from 'launchdarkly-js-client-sdk';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  private CLIENT_SIDE_ID: string = '628202e3e190da14ce644b47';
  user: LDClient.LDUser = {
    key: ''
  };
  client: any;
  flagChange: Subject<any> = new Subject();
  flags: LDFlagSet = {};
  constructor() {}

  setFlags() {
    this.flags = this.client.allFlags();
    this.flagChange.next(this.flags);
  }

  fetchFeatureFlags(user: any) {
    if(!!user) {
      this.user.key = user.institution;
      this.client = LDClient.initialize(this.CLIENT_SIDE_ID, this.user);
    }
    this.client.on('ready', () => {
      this.setFlags();
      this.client.on('change', () => {
        this.setFlags();
      });
    });
  }

  close() {
    this.client.close();
  }

}
