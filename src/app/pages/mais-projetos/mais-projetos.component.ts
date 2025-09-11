import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MaisProjetos {
  title: string;
  desc: string;
  tecs: string;
  github: string;
  site: string;
  img: string;
}

@Component({
  selector: 'app-mais-projetos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mais-projetos.component.html',
  styleUrls: ['./mais-projetos.component.css']
})
export class MaisProjetosComponent {
  maisprojetos: MaisProjetos[] = [
    {
      title: "Projeto Gestão de Finanças",
      desc: "O sistema tem como intuito a gestão de orçamento de um usuario, onde possui operações CRUD de seus gastos durante o mês, recebimentos, investimentos e objetivos financeiros. Projeto feito para a atividade final do 1 semestre da faculdade(FIAP)",
      tecs: "Tecnologias: Java(Servlets), HTML, CSS, OracleSQL",
      github: "https://github.com/MarcosLucena0/financial-plus",
      site: "https://www.linkedin.com/posts/marcos-lucena-91576a245_faaaala-rede-vim-apresentar-o-projeto-activity-7155387318894309376-m7U8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzNkqEBLbtOxx_DnEarAdG_2lraS91Yi1o",
      img: "/img-projetos/img-financialplus.png"
    },
    {
      title: "Primeiro Portfolio Pessoal",
      desc: "Site web do meu primeiro portfólio, onde apresenta meus primeiros projetos, formações entre outros. Com esse projeto consegui implementar todo o conhecimento e habilidades que adquirir diante meus estudos.",
      tecs: "Tecnologias: HTML, CSS e JavaScript.",
      github: "https://github.com/MarcosLucena0/Portfolio",
      site: "https://marcoslucena0.github.io/Portfolio/?fbclid=PAZXh0bgNhZW0CMTEAAafnLjzFyGy6g3vbN7crIZ_kOqg6oPF3i7rZaXIvBCmrYxPA62hy7ZACLDgoOw_aem_6gNMDvtlqArwHFXQB2IeUQ",
      img: "/img-projetos/img-primeiro-portfolio.png"
    },
    {
      title: "Aplicação CRUD Pessoas",
      desc: "Aplicação com CRUD simples de pessoas. Um dos meus primeiros projetos no aprendizado entre Spring boot e Angular. Curso disponibilizado e ensinado no canal de youtube do professor Ralf Lima",
      tecs: "Tecnologias: Spring Boot, Angular, PostgresSQL.",
      github: "https://github.com/MarcosLucena0/crud-angular-spring",
      site: "https://github.com/MarcosLucena0/crud-angular-spring",
      img: "/img-projetos/img-crud-pessoas.png"
    },
    {
      title: "Landing Page Salão de Beleza",
      desc: "Landing Page desenvolvido para melhorar minhas habilidades, onde criei um projeto de um site ficticio de um salão de beleza com base o design do projeto do canal de youtube CodeMarques.",
      tecs: "Tecnologias: HTML, CSS, JavaScript",
      github: "https://github.com/MarcosLucena0/SalaoDeBeleza",
      site: "https://marcoslucena0.github.io./SalaoDeBeleza/",
      img: "/img-projetos/img-salaobeleza.png"
    },
    {
      title: "Site Smartwatch",
      desc: "Cópia da página do smartwatch(apple) com o intuito de criar todas as fucionalidades e interações do site. Projeto realizado para estudos apresentado na aula 2 no intensivão da Hashtag# Treinamentos.",
      tecs: "Tecnologias: HTML, CSS, JavaScript",
      github: "https://github.com/MarcosLucena0/SmartWatch",
      site: "https://marcoslucena0.github.io/SmartWatch/",
      img: "/img-projetos/img-apple.png"
    },
    {
      title: "Landing Page Salão de Beleza",
      desc: "Meu primeiro trabalho feelancer. O site consiste em uma Landing Page, feito para um salão de beleza de uma cliente, apresentando os serviços da profissional e um pouco sobre sua jornada, ao agendar um serviço, é redirecionado ao WhatsApp da profissional, onde poderá agendar um serviço que gostaria.",
      tecs: "Tecnologias: HTML, CSS, JavaScript",
      github: "https://github.com/MarcosLucena0/salao-de-beleza",
      site: "https://karinefernandes.netlify.app/",
      img: "/img-projetos/img-salaobeleza.png"
    },
    {
      title: "AquaGuard",
      desc: "Desenvolvimento de uma proposta de software que soluciona e promova a gestão sustentável dos oceanos, sendo ela ecologicamente responsável, economicamente viável e socialmente inclusivo e inovadora. Consiste em um projeto que monitora a qualidade da água. Projeto desenvolvido para fins didáticos na competição Global Solution da FIAP com parceria de diversas Ongs.",
      tecs: "Tecnologias: Figma, Modelo de Entidade e Relacionamento",
      github: "https://www.linkedin.com/posts/marcos-lucena-91576a245_faalaa-rede-h%C3%A1-algumas-semanas-aconteceu-activity-7209035174913712128-aczz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzNkqEBLbtOxx_DnEarAdG_2lraS91Yi1o",
      site: "https://www.figma.com/proto/XHb3XKA0rWc4JFyAEvhKae/DASH-BOARD-MONITORAMENTO-RIOS?node-id=1-4&t=Y9M2qh946CizpeLy-1",
      img: "/img-projetos/img-aquaguard.png"
    },
    {
      title: "AudioBook",
      desc: "Projeto realizado para estudos apresentado na aula 1 do intensivão do curso da Hashteg#, onde consta em um site q narra o livro de Dom Casmurro.",
      tecs: "Tecnologias: HTML, CSS, JavaScript.",
      github: "https://github.com/MarcosLucena0/AudioBook",
      site: "https://marcoslucena0.github.io/AudioBook/",
      img: "/img-projetos/img-audiobook.png"
    },
    {
      title: "Landing Page PetLife",
      desc: "Projeto realizado para estudos apresentado no curso do OneBitCode, onde apresenta uma Landing Page de uma clinica veterinaria ficticia",
      tecs: "Tecnologias: HTML, CSS, JavaScript.",
      github: "https://github.com/MarcosLucena0/PetLife",
      site: "https://marcoslucena0.github.io/PetLife/",
      img: "/img-projetos/img-petlife.png"
    },
    {
      title: "AluraPlus",
      desc: "Projeto realizado para estudos apresentado no curso da Alura, onde montei um clone de seu site.",
      tecs: "Tecnologias: HTML, CSS, JavaScript.",
      github: "https://github.com/MarcosLucena0/aluraplus",
      site: "https://marcoslucena0.github.io/aluraplus/",
      img: "/img-projetos/img-aluraplus.png"
    }
  ];

  modalAberto = false;
  projetoSelecionado: MaisProjetos | null = null;

  abrirModal(maisprojetos: MaisProjetos) {
    this.projetoSelecionado = maisprojetos;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.projetoSelecionado = null;
  }
}
