import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenerateInfrastructureComponent } from './form-generate-infrastructure.component';

describe('FormGenerateInfrastructureComponent', () => {
  let component: FormGenerateInfrastructureComponent;
  let fixture: ComponentFixture<FormGenerateInfrastructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGenerateInfrastructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenerateInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
