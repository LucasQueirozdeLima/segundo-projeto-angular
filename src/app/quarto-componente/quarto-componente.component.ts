import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto-componente',
  standalone: true,
  imports: [],
  templateUrl: './quarto-componente.component.html',
  styleUrl: './quarto-componente.component.css'
})
export class QuartoComponenteComponent 
{
  nome:string='Lucas';
  idade: number=17
  mae:string= 'Leide';
  pai:string='Carlos'
}
