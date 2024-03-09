import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dadoIzq= '../assets/img/dice1.png';
  dadoDer= '../assets/img/dice4.png';

  num1: number =0;
  num2: number =0;

  tirarDados(): void
    {
      this.num1=Math.round(Math.random()*5)+1;
      this.num2=Math.round(Math.random()*5)+1;
      this.dadoIzq='../assets/img/dice' + this.num1 + '.png';
      this.dadoDer='../assets/img/dice' + this.num2 + '.png';
    }
}
