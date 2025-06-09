import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './funcionario-login.component.html',
  styleUrl: './funcionario-login.component.css'
})
export class FuncionarioLoginComponent {
  constructor(private router: Router) { }
  login: string = "";
  senha: string = "";
  onBotaoClicado() {
  if (this.login === 'Nicoli' && this.senha === '123') {
    alert('Login realizado com sucesso!');
  this.router.navigate(['adicionar-crud']);
  } else {
    alert('Login ou senha incorretos!');
  }
  }

  botaoDesabilitado: any;
}






