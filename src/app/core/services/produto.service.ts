// import { Injectable } from '@angular/core';
// import { Produto } from '../types/types'; // Importando o tipo Produto
// import { HttpClient } from '@angular/common/http'; //permite chamadas http
// import { Observable } from 'rxjs'; //permite trabalhar com observables

// @Injectable({
//   providedIn: 'root', //permite que o serviço seja injetavel a partir da raiz
// })
// export class ProdutoService {
//   private readonly API = 'http://localhost:3000/produtos'; // URL da API

//   constructor(private http: HttpClient) {}

//   listar(): Observable<Produto[]> { // Método para listar produtos
//         return this.http.get<Produto[]>(this.API); // Faz uma requisição GET para a API e retorna um Observable de Produto[]
//     }

//     incluir(produto: Produto): Observable<Produto> { // Método para incluir um novo produto
//         return this.http.post<Produto>(this.API, produto); // metodo para inclusão (POST)
//     }

//     editar(produto: Produto): Observable<Produto> { // Método para editar um produto existente
//         const url = `${this.API}/${produto.id}`; // URL do produto a ser editado
//         return this.http.put<Produto>(url, produto); // metodo para alteração (PUT)
//     }
//     buscarPorId(id: number): Observable<Produto | undefined> { // Método para buscar um produto pelo ID
//         return this.http.get<Produto>(`${this.API}/${id}`); // Faz uma requisição GET para a API e retorna um Observable de Produto
//     }

//     excluir(id: number): Observable<Produto> { // Método para excluir um produto
//         return this.http.delete<Produto>(`${this.API}/${id}`); // metodo para exclusão (DELETE)
//     }
// }

import { Injectable } from '@angular/core';
import { Produto, ProdutosExcluidos } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ProdutoService {     
     private readonly API = 'http://localhost:3001/produtos';
     constructor(private http: HttpClient) {}
     
     listar(): Observable<Produto[]> {
      return this.http.get<Produto[]>(this.API);
     }
     incluir(Produto: Produto): Observable<Produto> {
      return this.http.post<Produto>(this.API, Produto);
     }     
     editar(Produto: Produto): Observable<Produto> {
      const url = `${this.API}/${Produto.id}`;
      return this.http.put<Produto>(url, Produto);
     }
     buscarPorId(id: number): Observable<Produto | undefined> {
      return this.http.get<Produto>(this.API + `/${id}`);
     }     
     excluir(id: number): Observable<Produto> {        
        return this.http.delete<Produto>(this.API + `/${id}`);
     }     
    }

/*
import { Injectable } from '@angular/core';
import { Produto } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ProdutoService {
 private readonly API = 'http://localhost:3000/Produtos'
 constructor(private http: HttpClient) { }
 listar(): Observable<Produto[]>{
  return this.http.get<Produto[]>(this.API)
 }
}

*/