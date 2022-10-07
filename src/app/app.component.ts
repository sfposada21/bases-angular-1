import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: String = 'Contador';
  total: number = 21
  base : number = 5
  
Acomular( valor: number) {
  this.total += valor
}


}
