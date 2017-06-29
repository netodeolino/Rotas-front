import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaRotaComponent } from './nova-rota.component';

describe('NovaRotaComponent', () => {
  let component: NovaRotaComponent;
  let fixture: ComponentFixture<NovaRotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaRotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
