/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaboresComponent } from './sabores.component';

describe('SaboresComponent', () => {
  let component: SaboresComponent;
  let fixture: ComponentFixture<SaboresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaboresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
