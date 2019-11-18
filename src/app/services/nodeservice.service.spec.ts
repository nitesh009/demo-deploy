import { TestBed } from '@angular/core/testing';

import { NodeserviceService } from './nodeservice.service';

describe('NodeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodeserviceService = TestBed.get(NodeserviceService);
    expect(service).toBeTruthy();
  });
});
