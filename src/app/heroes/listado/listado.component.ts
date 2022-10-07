import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  heroes: string [] = ['Spiderman', 'Iroman', 'Naruto', 'Agumon']
  heroesBorrados: string [] = []

  borrarHeroe(){
    const borrado = this.heroes.shift() ?? "Vacio"
    this.heroesBorrados.push(borrado)
  }

  ngOnInit(): void {
  }

}
