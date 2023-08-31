import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomepageComponent } from './layout-homepage.component';

describe('LayoutHomepageComponent', () => {
  let component: LayoutHomepageComponent;
  let fixture: ComponentFixture<LayoutHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
