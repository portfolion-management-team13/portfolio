import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransforComponent } from './transfor.component';

describe('TransforComponent', () => {
  let component: TransforComponent;
  let fixture: ComponentFixture<TransforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
