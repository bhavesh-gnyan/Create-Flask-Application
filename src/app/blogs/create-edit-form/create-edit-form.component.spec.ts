import { async, TestBed } from '@angular/core/testing';
import { CreateEditFormComponent } from './create-edit-form.component';

describe('CreateEditFormComponent', () => {
  let component: CreateEditFormComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditFormComponent ]
    })
    .compileComponents();
    
    const fixture = TestBed.createComponent(CreateEditFormComponent);
    component = fixture.componentInstance;
  }));
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});