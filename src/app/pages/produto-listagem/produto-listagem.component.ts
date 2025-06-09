import { Component } from '@angular/core';
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';
import { Router, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-listagem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produto-listagem.component.html',
  styleUrl: './produto-listagem.component.css',
})
export class ProdutoListagemComponent implements OnInit {
  listaProdutos: Produto[] = [];
    constructor(
        private service: ProdutoService,
        private router: Router //permite o roteamento após uma ação
    ) { }
    ngOnInit(): void {
        this.service.listar().subscribe((produtos) => {
            this.listaProdutos = produtos;
        });
    }
    excluir(id: number) { //chama o serviço para excluir o produto por ID
        if (id) {
            this.service.excluir(id).subscribe(() => {
                window.location.reload();
            })
        }
    }
    incluir(){
        this.router.navigate(['adicionar-crud']); //verificar endereço no arquivo app.router
    }
}
