import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isVisible: boolean = false;
  isVisible2: boolean = false;

  cartItems: any[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items;
    });
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
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

  toggleCartMenu(): void {
    const cartMenu = this.el.nativeElement.querySelector('.fixed-cart-menu');
    const overlay = this.el.nativeElement.querySelector('.overlay');
    if (cartMenu && overlay) {
      if (this.isVisible) {
        this.renderer.setStyle(cartMenu, 'visibility', 'hidden');
        this.renderer.setStyle(cartMenu, 'display', 'none');
        this.renderer.setStyle(overlay, 'visibility', 'hidden');
        this.renderer.setStyle(overlay, 'display', 'none');
      } else {
        this.renderer.setStyle(cartMenu, 'visibility', 'visible');
        this.renderer.setStyle(cartMenu, 'display', 'block');
        this.renderer.setStyle(overlay, 'visibility', 'visible');
        this.renderer.setStyle(overlay, 'display', 'block');
      }
      this.isVisible = !this.isVisible;
    }
  }

  toggleSubMenu(): void {
    const subMenu = this.el.nativeElement.querySelector('.fixed-sub-menu');
    if (subMenu) {
      if (this.isVisible2) {
        this.renderer.setStyle(subMenu, 'visibility', 'hidden');
        this.renderer.setStyle(subMenu, 'display', 'none');
      } else {
        this.renderer.setStyle(subMenu, 'visibility', 'visible');
        this.renderer.setStyle(subMenu, 'display', 'block');
      }
      this.isVisible2 = !this.isVisible2;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isVisible) {
      this.toggleCartMenu();
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);
  }
}
