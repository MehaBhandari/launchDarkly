import { TestBed } from '@angular/core/testing';

import { AppActivateChildService } from './app-activate-child.service';

describe('AppActivateChildService', () => {
  let service: AppActivateChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppActivateChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
