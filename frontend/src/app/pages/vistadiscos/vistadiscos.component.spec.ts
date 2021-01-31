import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadiscosComponent } from './vistadiscos.component';

describe('VistadiscosComponent', () => {
  let component: VistadiscosComponent;
  let fixture: ComponentFixture<VistadiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistadiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
