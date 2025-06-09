import { Injectable } from '@angular/core';
import { Produto, ProdutosExcluidos } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ProdutosexcluidosService {     
     private readonly API = 'http://localhost:3000/produtosexcluidos';
     constructor(private http: HttpClient) {}
     listar(): Observable<Produto[]> {
      return this.http.get<Produto[]>(this.API);
     }
     incluir(Produto: Produto): Observable<Produto> {
      return this.http.post<ProdutosExcluidos>(this.API, Produto);
     }     
     editar(Produto: Produto): Observable<Produto> {
      const url = `${this.API}/${Produto.id}`;
      return this.http.put<ProdutosExcluidos>(url, Produto);
     }
     buscarPorId(id: number): Observable<Produto | undefined> {
      return this.http.get<Produto>(this.API + `/${id}`);
     }     
     excluir(produto: Produto): Observable<Produto> { 
      this.incluir(produto);       
      return this.http.delete<Produto>(this.API + `/${produto.id}`);
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