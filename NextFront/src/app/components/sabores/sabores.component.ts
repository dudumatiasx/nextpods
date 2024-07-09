import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.css']
})
export class SaboresComponent implements OnInit {

  @Input() sabor = 'Sabor';
  @Input() favorito = true;
  @Input() img = '';

  value = 0;

  constructor() { }

  ngOnInit() {
  }

}
