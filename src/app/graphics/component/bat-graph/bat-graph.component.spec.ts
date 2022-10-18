import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatGraphComponent } from './bat-graph.component';

describe('BatGraphComponent', () => {
  let component: BatGraphComponent;
  let fixture: ComponentFixture<BatGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
