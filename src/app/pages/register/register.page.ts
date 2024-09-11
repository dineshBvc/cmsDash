import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  register = {
    email: '',
    password: '',
    vendorId: '',
    role: ''
  };

  constructor() { }

  ngOnInit() {
    // Initialization logic if needed
  }

  onSubmit() {
    if (this.register.email && this.register.password && this.register.vendorId && this.register.role) {
      console.log('Registration details:', this.register);
      // Here you can add additional logic, such as sending the registration data to a server
      alert('Registration successful');
    } else {
      alert('Please fill out the form');
    }
  }
}

