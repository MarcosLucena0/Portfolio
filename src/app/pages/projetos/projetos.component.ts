import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface Projeto {
  title: string;
  desc: string;
  tecs: string;
  github: string;
  site: string;
  img: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projetos: Projeto[] = [
    {
      title: "Projeto em andamento...",
      desc: "",
      tecs: "",
      github: "https://github.com/SquadPrisma-NoteSoccer",
      site: "",
      img: "/img-projetos/img-andamento.png"
    },
    {
      title: "Aplicação CRUD de Carros",
      desc: "Aplicação com operações de CRUD e relacionamentos entre Carros, Marcas e Acessorios. Curso disponibilizado e ensinado no canal de youtube do professor Welligton de Oliveira (Para entrar na aplicação deve informar o Login: 'admin' e Senha: 'admin'.)",
      tecs: "Tecnologias: Spring Boot, Angular, PostgresSQL",
      github: "https://github.com/MarcosLucena0/app-carro-spring-back",
      site: "https://aplicacaocarros.netlify.app/login",
      img: "/img-projetos/img-crud-carros.jpg"
    },
    {
      title: "Site One Piece",
      desc: "Site web com apresentação da tripulação Chapéu de Palha do anime One Piece. Projeto realizado pelos professores do canal Dev em Dobro.",
      tecs: "Tecnologias: HTML, CSS e JavaScript.",
      github: "https://github.com/MarcosLucena0/projeto-one-piece",
      site: "https://marcoslucena0.github.io/projeto-one-piece/",
      img: "/img-projetos/img-onepiece.png"
    },
    {
      title: "Projeto Gestão de Cursos",
      desc: "Projeto de Gestão de Cursos com operações de CRUD, relacionamento Has-Many (Course-Lessons). Aplicação apresentada e ensinada no canal da youtube e professora Loiane Groner.",
      tecs: "Tecnologias: Spring Boot, Angular, MySQL.",
      github: "https://github.com/MarcosLucena0/crud-courses-angular-spring",
      site: "https://www.linkedin.com/posts/marcos-lucena-91576a245_desenvolvimentofullstack-springboot-angular-activity-7348306462076456961-Yfby?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzNkqEBLbtOxx_DnEarAdG_2lraS91Yi1o",
      img: "/img-projetos/img-crud-courses.png"
    },
    {
      title: "Projeto Consultas CPF",
      desc: "Projeto com intuito de realizar consultas rápidas sobre a situação cadastral do CPF, e serem mais acessíveis e eficientes. A aplicação consome uma API do site Infosimples, para as requisições do CPF.",
      tecs: "Tecnologias: Kotlin, API - InfoSimples",
      github: "https://github.com/MarcosLucena0/api-consulta-cpf",
      site: "https://www.linkedin.com/posts/marcos-lucena-91576a245_ol%C3%A1-rede-hoje-apresento-um-novo-projeto-activity-7185826745399332864-jQAJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzNkqEBLbtOxx_DnEarAdG_2lraS91Yi1o",
      img: "/img-projetos/img-rec-fed.png"
    },

  ];

  modalAberto = false;
  projetoSelecionado: Projeto | null = null;

  abrirModal(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.projetoSelecionado = null;
  }
}
