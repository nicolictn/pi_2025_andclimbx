import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  onSubmit() {
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado!');
  }

}
