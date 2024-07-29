import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css']
})
export class FinalizarComponent implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items;
    });

    this.cities = [
      // { name: 'Acre', code: 'AC' },
      // { name: 'Alagoas', code: 'AL' },
      // { name: 'Amapá', code: 'AP' },
      // { name: 'Amazonas', code: 'AM' },
      // { name: 'Bahia', code: 'BA' },
      // { name: 'Ceará', code: 'CE' },
      // { name: 'Distrito Federal', code: 'DF' },
      // { name: 'Espírito Santo', code: 'ES' },
      // { name: 'Goiás', code: 'GO' },
      // { name: 'Maranhão', code: 'MA' },
      // { name: 'Mato Grosso', code: 'MT' },
      // { name: 'Mato Grosso do Sul', code: 'MS' },
      // { name: 'Minas Gerais', code: 'MG' },
      // { name: 'Pará', code: 'PA' },
      // { name: 'Paraíba', code: 'PB' },
      // { name: 'Paraná', code: 'PR' },
      // { name: 'Pernambuco', code: 'PE' },
      // { name: 'Piauí', code: 'PI' },
      // { name: 'Rio de Janeiro', code: 'RJ' },
      // { name: 'Rio Grande do Norte', code: 'RN' },
      { name: 'Rio Grande do Sul', code: 'RS' },
      // { name: 'Rondônia', code: 'RO' },
      // { name: 'Roraima', code: 'RR' },
      // { name: 'Santa Catarina', code: 'SC' },
      // { name: 'São Paulo', code: 'SP' },
      // { name: 'Sergipe', code: 'SE' },
      // { name: 'Tocantins', code: 'TO' }
    ];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);
  }
}
