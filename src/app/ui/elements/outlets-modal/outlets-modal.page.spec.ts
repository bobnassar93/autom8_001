import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutletsModalPage } from './outlets-modal.page';

describe('OutletsModalPage', () => {
  let component: OutletsModalPage;
  let fixture: ComponentFixture<OutletsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutletsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
