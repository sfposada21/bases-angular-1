import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1> Hola Humano {{ title}} </h1>

        <button (click)= "Acomular(this.base)" > +{{base}}</button>

        <span> {{total}} </span>

        <button (click)= "Acomular(-this.base)" > -{{base}}</button>            
    
    `,
    
})

export class ContadorComponent {
    title: String = 'Contador';
    total: number = 21
    base : number = 5
    
  Acomular( valor: number) {
    this.total += valor    
  }

}