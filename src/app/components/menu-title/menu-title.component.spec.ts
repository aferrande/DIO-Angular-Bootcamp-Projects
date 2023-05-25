import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitleComponent } from './menu-title.component';

describe('MenuTitleComponent', () => {
  let component: MenuTitleComponent;
  let fixture: ComponentFixture<MenuTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTitleComponent]
    });
    fixture = TestBed.createComponent(MenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
