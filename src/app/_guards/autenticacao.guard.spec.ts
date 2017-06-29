import { AutenticacaoGuard } from './autenticacao.guard';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';


describe('AutenticacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoGuard]
    });
  });

  it('should ...', inject([AutenticacaoGuard], (service: AutenticacaoGuard) => {
    expect(service).toBeTruthy();
  }));
});
