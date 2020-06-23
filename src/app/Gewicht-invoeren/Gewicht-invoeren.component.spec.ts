/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GewichtInvoerenComponent } from './Gewicht-invoeren.component';

describe('GewichtInvoerenComponent', () => {
  let component: GewichtInvoerenComponent;
  let fixture: ComponentFixture<GewichtInvoerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GewichtInvoerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GewichtInvoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
