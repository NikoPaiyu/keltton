import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { anagram } from '../anagramTester/anagram';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule,FormsModule],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('Form is Invalid while starting',() =>{
    expect(component.registrationForm.invalid).toBe(true);
  });

  it('FirstName is invalid while starting',() => {
    expect(component.controls.firstName.invalid).toBe(true);
  });

  it('FirstName should be required',() => {
    expect(component.controls.firstName.errors?.required).toBe(true);
  })

  it('Submitting Form',() => {

    expect(component.registrationForm.invalid).toBe(true);
    component.controls.firstName.setValue('Nikhil');
    component.controls.lastName.setValue('Radhakrishnan');

    // Click on Submit Button
    component.register();

    // Check
    expect(component.controls.firstName.value).toBe('Nikhil');
    expect(component.controls.lastName.value).toBe('Radhakrishnan');

    // Still Form is invalid
    expect(component.registrationForm.valid).toBeTruthy();

  })

  it('Anagram Tester - True' , () => {
    expect(anagram('cellar','recall')).toBeTruthy();
  })

  it('Anagram Tester - False' , () => {
    expect(anagram('nikhil','recall')).toBeFalsy();
  })



});
