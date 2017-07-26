/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RefinanceDataComponent } from './refinance-data.component';

describe('RefinanceDataComponent', () => {
  let component: RefinanceDataComponent;
  let fixture: ComponentFixture<RefinanceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinanceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
