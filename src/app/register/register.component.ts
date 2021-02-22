import { TempTracker } from './../tempTracker/tempTracker';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { anagram } from '../anagramTester/anagram';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Init Registration Form
    this.initRegistrationForm();

    // Check Anagram
    console.log(anagram('cellar','recall'));
    console.log(anagram('arm','elbow'));


    // Temp Tracker
    let temp = new TempTracker();

    temp.insert(100);
    temp.insert(40);
    temp.insert(60.5);
    temp.insert(10.5);
    temp.insert(4);
    temp.insert(4);

    console.log(temp.get_max);
    console.log(temp.get_min);
    console.log(temp.get_mean);
    console.log(temp.get_mode);

  }

  registrationForm: FormGroup | undefined;

  initRegistrationForm(){
    this.registrationForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(5)]],
      lastName: ['',[Validators.required,Validators.minLength(5)]],
      phoneNumber: ['',Validators.required],
      country: ['',Validators.required]
    })
  }


  get controls(){
    return this.registrationForm.controls;
  }

  register(){
    console.log(this.registrationForm);
  }

}
