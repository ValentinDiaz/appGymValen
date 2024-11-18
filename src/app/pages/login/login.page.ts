import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, IonInput, IonLabel, IonItem, IonCheckbox, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  labelHidden: Record<'username' | 'password', boolean> = {
    username: false,
    password: false
  };

  onFocus(field: 'username' | 'password') {
    this.labelHidden[field] = true;
  }

  onBlur(field: 'username' | 'password') {
    this.labelHidden[field] = false;
  }

}
