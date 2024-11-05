import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { PipeCustomizadoComponent } from "./pipe-customizado/pipe-customizado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroComponenteComponent, SegundoComponenteComponent, PipeCustomizadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
