import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  value4: number = 0;
  value5: number = 0;
  value6: number = 0;
  value7: number = 0;
  value8: number = 0;
  value9: number = 0;
  value10: number = 0;
  value11: number = 0;
  value12: number = 0;
  value13: number = 0;
  value14: number = 0;

  visible: boolean = false;

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

  showDialog() {
    this.visible = true;
  }
}
