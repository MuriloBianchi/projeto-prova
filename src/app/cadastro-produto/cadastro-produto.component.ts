import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    category: ''
  };

  productList: Array<{ name: string, description: string, price: number, category: string }> = [];

  addProduct(){
     // Verifica se todos os campos estão preenchidos
     if (this.product.name && this.product.description && this.product.price && this.product.category) {
      // Adiciona o produto à lista
      this.productList.push({ ...this.product });

      // Limpa o formulário
      this.product = { name: '', description: '', price: 0, category: '' };
    }
  }

}
