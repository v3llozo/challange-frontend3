import { Component, OnInit } from '@angular/core';
import { mockCategorias, mockProdutos01, Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent implements OnInit {
  categorias: any;
  constructor() {
    this.fetchProdutos();
  }

  ngOnInit(): void {}

  fetchProdutos() {
    this.categorias = mockCategorias;
  }
}
