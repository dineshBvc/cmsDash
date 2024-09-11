import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage {
  register = {
    email: '',
    password: '',
    vendorId: '',
    role: ''
  };

  onSubmit() {
    if (this.register.email && this.register.password && this.register.vendorId && this.register.role) {
      console.log('Registration details:', this.register);
      // Handle registration logic here, such as sending data to a server
      alert('Registration successful');
    } else {
      alert('Please fill out the form');
    }
  }
}