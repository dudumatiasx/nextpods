import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  pagamento: any[] = [{ label: 'Pix', value: 'P' }, { label: 'Dinheiro', value: 'D' }, { label: 'Cartão até 12x', value: 'C' }];

  entrega: any[] = [{ label: 'Retirar', value: 'R' }, { label: 'Receber no Endereço', value: 'E' }];

  value: string = 'off';

  cartItems: any[] = [];

  selectedEntrega: string = 'R';

  selectedPagamento: string = 'P';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items;
    });
  }

  getTotal(): number {
    let total = this.cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);
    if (this.selectedEntrega === 'E') {
      total += 10; // Adiciona R$ 10,00 ao total se a entrega for no endereço
    }
    return total;
  }
}
