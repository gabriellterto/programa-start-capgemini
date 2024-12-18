import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { PipeCustomizadoComponent } from "./pipe-customizado/pipe-customizado.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { RenderizandoListasComponent } from "./renderizando-listas/renderizando-listas.component";
import { ComponentePersonalizadoComponent } from "./componente-personalizado/componente-personalizado.component";
import { ComponentePaiComponent } from "./componente-pai/componente-pai.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroComponenteComponent, SegundoComponenteComponent, PipeCustomizadoComponent, TwoWayDataBindingComponent, RenderizandoListasComponent, ComponentePersonalizadoComponent, ComponentePaiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
