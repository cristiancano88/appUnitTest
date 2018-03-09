import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    })
      .compileComponents()
      .then(
        () => {
          fixture = TestBed.createComponent(AppComponent);
          comp = fixture.componentInstance;
          de = fixture.debugElement.query(By.css('h1'));
          el = de.nativeElement;
        }
      );
  }));

  // beforeEach(() => {
  // TestBed.configureTestingModule({
  //   imports: [
  //     RouterTestingModule
  //   ],
  //   declarations: [
  //     AppComponent
  //   ],
  // })
  //   fixture = TestBed.createComponent(AppComponent);
  //   comp = fixture.componentInstance;
  //   de = fixture.debugElement.query(By.css('h1'));
  //   el = de.nativeElement;
  // });

  it('el primer test component', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('Cambiar Titulo', () => {
    comp.title = 'Este es el segundo titulo';
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });



  // it('primer test', () => {
  //   expect(true).toBe(true);
  // });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
