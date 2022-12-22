import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cursosDisponiveis = [
    {
      nomeCurso: 'FrontEnd Web',
      descricao:'Some quick example text \
       to build on the card title and make \
       up the bulk of the card\'s content.' 
    },
    {
      nomeCurso: 'BackEnd',
      descricao:'Some quick example text \
       to build on the card title and make \
       up the bulk of the card\'s content.' 
    },
    {
      nomeCurso: 'Redes de Computadores',
      descricao:'Some quick example text \
       to build on the card title and make \
       up the bulk of the card\'s content.' 
    },
    {
      nomeCurso: 'Cyber Security',
      descricao:'Some quick example text \
       to build on the card title and make \
       up the bulk of the card\'s content.' 
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
