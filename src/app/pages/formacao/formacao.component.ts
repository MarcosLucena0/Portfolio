import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css'
})
export class FormacaoComponent implements AfterViewInit{

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  isBrowser: boolean;

  certificados = [
    { img: '/img-formacao/image-1.jpeg', titulo: 'Certificado de Qualificação Profissional em Análise e Design Web 2.0' },
    { img: '/img-formacao/image-2.jpeg', titulo: 'Certificado de Qualificação Profissional em Análise de Sistemas e Prototipagem Web' },
    { img: '/img-formacao/image-3.jpeg', titulo: 'Certificado da Linguagem de Pogramação Java' },
    { img: '/img-formacao/image-4.jpeg', titulo: 'Certificado do curso: HTML e CSS:Praticando HTML/CSS' },
    { img: '/img-formacao/image-5.jpeg', titulo: 'Certificado do curso: Java OO: Entendendo a Orientação a Objetos' },
    { img: '/img-formacao/image-6.jpeg', titulo: 'Certificado do curso: Java: Aplicando a Orientação a Objetos' },
    { img: '/img-formacao/image-7.jpeg', titulo: 'Certificado do curso: Java: Criando a sua primeira aplicação' },
    { img: '/img-formacao/image-8.jpeg', titulo: 'Certificado do curso: Java Script e HTML: Desenvolva um jogo e pratique Lógica de Programação' },
    { img: '/img-formacao/image-9.jpeg', titulo: 'Certificado do curso: JavaScript: Programação Orientada a Objetos' },
    { img: '/img-formacao/image-10.jpeg', titulo: 'Certificado do curso: React: Comece seu projeto Full-Stack' },
    { img: '/img-formacao/image-11.jpeg', titulo: 'Certificado do curso: HTML, CSS e JavaScript' },
    { img: '/img-formacao/image-12.jpeg', titulo: 'Certificado do curso: Intensivão de JavaScript' },

  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const container = this.carouselContainer.nativeElement;

      container.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      });
    }
  }

  proximo() {
    if (this.isBrowser) {
      this.carouselContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  anterior() {
    if (this.isBrowser) {
      this.carouselContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

}

