import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { usuario } from 'src/gym-interface';
import { isRequired } from 'src/app/utils/validators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,IonInput, IonLabel, IonItem, IonCheckbox, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class SignUpPage implements OnInit {

  cuenta: usuario ={
    email:'',
    password:'',
  };

  constructor() { }

  ngOnInit() {
  }

   isRequired(field:'email'|'password'){
    return isRequired(field, this.form)

  }


  private _formBuilder = inject(FormBuilder);
  form = this._formBuilder.group({
    email: this._formBuilder.control('',[Validators.required,Validators.email]),
    password:this._formBuilder.control('',Validators.required),
  })
  submit(){
    if(this.form.invalid){
      return
    }
    const {email, password} = this.form.value
    if(!email||!password){
      return
    }
    console.log({email, password})

  }


}
