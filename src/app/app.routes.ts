import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoListagemComponent } from './pages/produto-listagem/produto-listagem.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FuncionarioLoginComponent } from './pages/funcionario-login/funcionario-login.component';
import { AdicionarCrudComponent } from './pages/adicionar-crud/adicionar-crud.component';
import { AlterarCrudComponent } from './pages/alterar-crud/alterar-crud.component';
import { HomeCrudComponent } from './pages/home-crud/home-crud.component';
import { PesquisarCrudComponent } from './pages/pesquisar-crud/pesquisar-crud.component';
import { ExcluirCrudComponent } from './pages/excluir-crud/excluir-crud.component';

//link das páginas
export const routes: Routes = [
    {
        //rotas lading page
        path: '', // rota padrão
        component: HomeComponent,
        title: 'HOME', // título da página
    },
    {
        path: 'produtos', // rota padrão
        component: ProdutoListagemComponent,
        title: 'PRODUTOS', // título da página
    },
    {
        path: 'sobre-nos', // rota padrão
        component: SobreNosComponent,
        title: 'SOBRE NÓS', // título da página
    },
    {
        path: 'contato', // rota padrão
        component: ContatoComponent,
        title: 'CONTATO', // título da página
    },

    //Rotas CRUD
    {
        path: 'tela-login', // rota padrão
        component: FuncionarioLoginComponent,
        title: '', // título da página
    },
    {
        path:  'home-crud',
        component: HomeCrudComponent,
        title: '',
        
    },
    {
        path: 'adicionar-crud', // rota padrão
        component: AdicionarCrudComponent,
        title: 'ADICIONAR', // título da página
    },
    {
        path: 'alterar-crud', // rota padrão
        component: AlterarCrudComponent,
        title: 'ALTERAR', // título da página
    },
    {
        path: 'pesquisar-crud', // rota padrão
        component: PesquisarCrudComponent,
        title: 'PESQUISAR', // título da página
    },
    {
        path: 'excluir-crud', // rota padrão
        component: ExcluirCrudComponent,
        title: 'EXCLUIR', // título da página
    },
];
