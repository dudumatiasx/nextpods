import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  visible: boolean = false;
  selectedProduct: any = null;
  products: any[] = [];
  selectedProductId: string = '';
  selectedQuantities: { [key: string]: number } = {};

  constructor(private el: ElementRef, private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  onDialogHide(): void {
    this.selectedProduct = null;
  }

  setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    const animatedElements = this.el.nativeElement.querySelectorAll('.animate__animated');
    animatedElements.forEach((element: HTMLElement) => {
      observer.observe(element);
    });
  }

  handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const animationClass = element.getAttribute('data-animation');
        if (animationClass) {
          element.classList.add(animationClass);
        }
        observer.unobserve(element);
      }
    });
  }

  showDialog(productId: string) {
    this.visible = true;
    this.loadProduct(productId);
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  loadProduct(productId: string) {
    this.productService.getProductById(productId).subscribe((data: any) => {
      this.selectedProduct = data;
      this.selectedQuantities = {};
    });
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  onQuantityChanged(event: any, sabor: string) {
    this.selectedQuantities[sabor] = event.value;
  }

  addToCart() {
    const itemsToAdd = [];
    for (const sabor in this.selectedQuantities) {
      if (this.selectedQuantities[sabor] > 0) {
        itemsToAdd.push({
          productId: this.selectedProduct.id,
          sabor: sabor,
          quantity: this.selectedQuantities[sabor],
          img: `/assets/${sabor.toLowerCase().replace(' ', '')}.png`,
          modelo: this.selectedProduct.modelo,
          preco: this.selectedProduct.preco
        });
      }
    }
    this.cartService.addItemsToCart(itemsToAdd);
    this.visible = false;
  }
}
