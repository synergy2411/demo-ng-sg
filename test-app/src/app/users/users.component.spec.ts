import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should create the user", ()=>{
    let user = fixture.debugElement.componentInstance;
    expect(user).toBeTruthy();
  })

  it("Username should be populated by service", ()=>{
    let user = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    expect(user.username.name).toEqual(userService.user.name);
  })

  it("p should contain the 'Hello Foo'", ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain("Hello Foo");
  })

  it("true to be truthy", ()=>{
    expect("Hello World").toContain("World");
  })

});
