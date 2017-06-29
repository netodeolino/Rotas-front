import { TestBed, inject } from '@angular/core/testing';

import { RotasService } from './rotas.service';

describe('RotasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RotasService]
    });
  });

  it('should ...', inject([RotasService], (service: RotasService) => {
    expect(service).toBeTruthy();
  }));
});
