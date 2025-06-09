import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoListagemComponent } from './pages/produto-listagem/produto-listagem.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FuncionarioLoginComponent } from './pages/funcionario-login/funcionario-login.component';
import { AdicionarCrudComponent } from './pages/adicionar-crud/adicionar-crud.component';
import { InstituicaoACXComponent } from './pages/instituicao-acx/instituicao-acx.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

//link das páginas
export const routes: Routes = [
    {
        //rotas landing page
        path: '', // rota padrão
        component: HomeComponent,
        title: 'HOME', // título da página
    },
    {
        path: 'produto-listagem', // rota padrão
        component: ProdutoListagemComponent,
        title: 'PRODUTOS', // título da página
    },

    {
        path: 'produtos', // rota padrão
        component: ProdutosComponent,
        title: 'CARDS', // título da página
    },

    {
        path: 'sobre-nos', // rota padrão
        component: SobreNosComponent,
        title: 'SOBRE NÓS', // título da página
    },
    {
        path: 'instituicao-acx', // rota padrão
        component: InstituicaoACXComponent,
        title: 'Instituição ACX', // título da página
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
        path: 'adicionar-crud', // rota padrão
        component: AdicionarCrudComponent,
        title: 'ADICIONAR', // título da página
    },
    // {
    //     path: 'alterar-crud', // rota padrão
    //     component: AlterarCrudComponent,
    //     title: 'ALTERAR', // título da página
    // },
    {
        path: 'adicionar-crud/:id', // rota padrão
        component: AdicionarCrudComponent,
        title: 'ALTERAR', // título da página
    },
];
