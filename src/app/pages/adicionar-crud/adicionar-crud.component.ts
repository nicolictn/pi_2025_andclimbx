import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';

@Component({
  selector: 'app-adicionar-crud',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './adicionar-crud.component.html',
  styleUrl: './adicionar-crud.component.css',
})
export class AdicionarCrudComponent {
  titulo = 'Cadastro de Produtos';
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required,
    Validators.minLength(3), Validators.maxLength(60)]),
    descricao: new FormControl('', [Validators.required,
    Validators.minLength(10), Validators.maxLength(200)])
  })
  onSubmit() {
    if (this.formulario.valid) {
      alert('Formulário enviado com sucesso!\n'
        + JSON.stringify(this.formulario.value));
    }
  }
  produtoID?: number;
  //Defino um objeto produto que será incluído ou alterado.
  produto: Produto = {} as Produto;
  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //Verifico se é alteração ou inclusão
    this.produtoID = Number(this.route.snapshot.params['id']);
    if (this.produtoID) {
      service.buscarPorId(this.produtoID).subscribe((produto) => {
        if (produto) {
          this.produto.id = produto.id;
          this.produto.nome = produto.nome;
          this.produto.descricao = produto.descricao;
        }
      });
    }
  }

  submeter() {
    if (this.produtoID) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['/produto-listagem']);
      });
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['/produto-listagem']);
      });
    }
  }
  
  cancelar() {
    this.router.navigate(['/produto-listagem']);
  }
}
