import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  nombre: string = "Ironman"
  edad : number = 35

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} => ${this.edad}`
  }

  cambiarNombre(): void {
    this.nombre = this.nombre!='Spiderman'? 'Spiderman' : 'Ironman'
  }

  cambiarEdad(): void {
    this.edad = this.edad!=25? 25 : 35
  }


  ngOnInit(): void {
  }

}
