import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  guardar(){
    console.log("Voy a guardar en bd");
    
  }

  ingresar(){
    console.log("Voy a ingresar en bd");
    
  }
}
