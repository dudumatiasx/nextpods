import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {

  visibleV80: boolean = false;
  visibleV150: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

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

  showV80() {
    this.visibleV80 = true;
  }

  showV150() {
    this.visibleV150 = true;
  }
}
