import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]],
      vendorId: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$') // Numeric validation
      ]],
      role: ['', [Validators.required]]
    });
  }

  // Validation messages for form controls
  validation_messages: any = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Minimum 3 characters required' },
      { type: 'maxlength', message: 'Exceeded the max length of 50 characters' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Minimum 8 characters required' },
      { type: 'pattern', message: 'Password must contain uppercase, lowercase, number, and special character' },
    ],
    vendorId: [
      { type: 'required', message: 'Vendor ID is required' },
      { type: 'pattern', message: 'Vendor ID must be numeric' }
    ],
    role: [
      { type: 'required', message: 'Role is required' }
    ]
  };

  // Fetch error messages based on validation type
  getErrorText(control: string) {
    const validations = this.validation_messages[control];
    for (let validation of validations) {
      if (this.registerForm.get(control)?.hasError(validation.type)) {
        return validation.message;
      }
    }
    return '';
  }

  // Handle form submission
  Register() {
    if (this.registerForm.valid) {
      console.log('Form data:', this.registerForm.value);
      // Perform your registration logic, like API call
    } else {
      console.log('Form is invalid');
    }
  }

}
