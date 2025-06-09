import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardItemComponent } from '../../shared/card-item/card-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CardItemComponent, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  constructor(private router: Router) { }
  titulo = "Produtos";

  produtosMagnesio = [
    { descricao: 'Magnésio em Pó - 1Kg', preco: 'R$ 49,90', imagem: '/assets/imgs/Magnesio1.png' },
    { descricao: 'Magnésio em Pó - 500Kg', preco: 'R$ 37,90', imagem: '/assets/imgs/magnesio500.png' },
    { descricao: 'Magnésio em Pó -Black Diamond', preco: 'R$ 56,90', imagem: '/assets/imgs/magnesioBD.png' },
    { descricao: 'Magnésio em Pó - Ocun', preco: 'R$ 73,90', imagem: '/assets/imgs/magnesioOcun.png' },
  ];

  produtosCalcados = [
    { descricao: 'Sapatilha Ocun', preco: 'R$ 1.256,00', imagem: '/assets/imgs/sapatilhaOcun.png' },
    { descricao: 'Sapatilha Boreal', preco: 'R$ 1.259,00', imagem: '/assets/imgs/sapatilhaBoreal.png' },
    { descricao: 'Sapatilha Solution', preco: 'R$ 2.137,99', imagem: '/assets/imgs/sapatilhaSolution.png' },
    { descricao: 'Sapatilha Tenaya', preco: 'R$ 957,80', imagem: '/assets/imgs/sapatilhaTenaya.png' },
  ];

}


