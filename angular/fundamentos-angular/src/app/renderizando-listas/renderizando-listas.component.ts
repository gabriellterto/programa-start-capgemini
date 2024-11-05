import { Component } from '@angular/core';
import { Celular } from '../types/Celular';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-renderizando-listas',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: 'iPhone', descricao: 'Celular iPhone', esgotado: true },
    { id: 2, nome: 'Samsung', descricao: 'Celular Samsung', esgotado: false },
    { id: 3, nome: 'Nokia', descricao: 'Celular Nokia', esgotado: false },
  ]
}
