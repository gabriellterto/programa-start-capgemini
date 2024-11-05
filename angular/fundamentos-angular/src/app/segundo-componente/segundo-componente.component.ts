import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-segundo-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome = "Gabriel";
  dataNascimento = "10/02/2000";
}
