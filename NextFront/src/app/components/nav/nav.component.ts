import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, HostListener } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isVisible: boolean = false;

  isVisible2: boolean = false;

  value1 = 0;

  constructor(private renderer: Renderer2,private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const cartMenu = this.el.nativeElement.querySelector('.fixed-cart-menu');
    const subMenu = this.el.nativeElement.querySelector('.fixed-sub-menu');
    const menuButton = this.el.nativeElement.querySelector('.fixed-menu-button');
    const overlay = this.el.nativeElement.querySelector('.overlay');
    const cartButton = this.el.nativeElement.querySelector('.fixed-cart-button');
    const contato4 = this.el.nativeElement.querySelector('.fixed-contato4');
    const contato5 = this.el.nativeElement.querySelector('.fixed-contato5');
    const contato6 = this.el.nativeElement.querySelector('.fixed-contato6');
    const contato7 = this.el.nativeElement.querySelector('.fixed-contato7');
    if (this.isVisible && cartMenu && !cartMenu.contains(event.target as Node) && !cartButton.contains(event.target as Node)) {
      this.renderer.setStyle(cartMenu, 'visibility', 'hidden');
      this.renderer.setStyle(cartMenu, 'display', 'none');
      this.renderer.setStyle(overlay, 'visibility', 'hidden');
      this.renderer.setStyle(overlay, 'display', 'none');
      this.isVisible = false;
    }
    if (this.isVisible2 && subMenu && !subMenu.contains(event.target as Node) && !menuButton.contains(event.target as Node)) {
      this.renderer.setStyle(subMenu, 'visibility', 'hidden');
      this.renderer.setStyle(subMenu, 'display', 'none');
      this.isVisible2 = false;
    }
    if (contato4 && contato4.contains(event.target as Node)) {
      this.renderer.addClass(contato5, 'visible');
      this.renderer.addClass(contato6, 'visible');
      this.renderer.addClass(contato7, 'visible');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const cartMenu = this.el.nativeElement.querySelector('.fixed-cart-menu');
    const overlay = this.el.nativeElement.querySelector('.overlay');
    const subMenu = this.el.nativeElement.querySelector('.fixed-sub-menu');
    if (this.isVisible && cartMenu) {
      this.renderer.setStyle(cartMenu, 'visibility', 'hidden');
      this.renderer.setStyle(cartMenu, 'display', 'none');
      this.renderer.setStyle(overlay, 'visibility', 'hidden');
      this.renderer.setStyle(overlay, 'display', 'none');
      this.isVisible = false;
    }
    if (this.isVisible2 && subMenu) {
      this.renderer.setStyle(subMenu, 'visibility', 'hidden');
      this.renderer.setStyle(subMenu, 'display', 'none');
      this.isVisible2 = false;
    }

  }
}
