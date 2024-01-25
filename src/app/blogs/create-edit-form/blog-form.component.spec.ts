import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogFormComponent } from './blog-form.component';

describe('BlogFormComponent', () => {
  let component: BlogFormComponent;
  let fixture: ComponentFixture<BlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogFormComponent],
    }).compileComponents();
    
   // Create the component and its fixture
    fixture = TestBed.createComponent(BlogFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});