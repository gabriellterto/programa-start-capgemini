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
  urlImagem = "https://revista-cdn.querobolsa.com.br/post_images/47601/230f1d85fc3bc418c184583356ff8eb03fc534e6.jpg?1700596790";

  mostrarDataNascimento() {
    alert("Data de nascimento: " + this.dataNascimento);
  }
}
