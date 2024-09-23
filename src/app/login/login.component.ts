import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username: string = '';
password: string = '';

  onSubmit(){
    
    if (this.username.length == 0 && document.getElementById("name-msg")?.hidden == true) {
        document.getElementById("name-msg")?.toggleAttribute("hidden");
        return;
    }else if( this.username.length > 0 && document.getElementById("name-msg")?.hidden == false) {
      document.getElementById("name-msg")?.toggleAttribute("hidden");
    };
    
    if (this.password.length == 0 && document.getElementById("password-msg")?.hidden == true) {
      document.getElementById("password-msg")?.toggleAttribute("hidden");
      return;
    }else if ( this.password.length > 0 && document.getElementById("password-msg")?.hidden == false){
      document.getElementById("password-msg")?.toggleAttribute("hidden");
    };

    if (this.username.length > 0 && this.password.length > 0) {
      document.getElementById("main")?.toggleAttribute("hidden");
      document.getElementById("produto")?.toggleAttribute("hidden");
      return;
    };

  }
}
