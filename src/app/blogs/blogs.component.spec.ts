import { async, TestBed } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';

describe('BlogsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsComponent ]
    })
    .compileComponents();
  }));

  it('should create the component', async() => {
    const fixture = TestBed.createComponent(BlogsComponent);
    expect(fixture).toBeTruthy;
  });
});