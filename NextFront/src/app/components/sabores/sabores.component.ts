import { Component, EventEmitter, Input, OnInit, Output, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.css']
})
export class SaboresComponent implements OnInit, OnDestroy {

  @Input() sabor = 'Sabor';
  @Input() qt = 0;
  @Input() favorito = true;
  @Input() img = '';
  @Output() quantityChanged = new EventEmitter<{ value: number }>();

  value = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.value = 0;
  }

  onQuantityChange() {
    this.quantityChanged.emit({ value: this.value });
  }
}
