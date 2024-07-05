/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IgniteComponent } from './ignite.component';

describe('IgniteComponent', () => {
  let component: IgniteComponent;
  let fixture: ComponentFixture<IgniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
