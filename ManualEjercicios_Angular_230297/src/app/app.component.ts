import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from "./ejercicio-01/ejercicio-01.component";
import { Ejercicio02Component } from "./ejercicio-02/ejercicio-02.component";
import { Ejercicio03Component } from "./ejercicio-03/ejercicio-03.component";
import { Ejercicio04Component } from "./ejercicio-04/ejercicio-04.component";
import { Ejercicio05Component } from "./ejercicio-05/ejercicio-05.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio01Component, Ejercicio02Component, Ejercicio03Component, Ejercicio04Component, Ejercicio05Component, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230297';
}
