import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from "./ejercicio-01/ejercicio-01.component";
import { Ejercicio02Component } from "./ejercicio-02/ejercicio-02.component";
import { Ejercicio03Component } from "./ejercicio-03/ejercicio-03.component";
import { Ejercicio04Component } from "./ejercicio-04/ejercicio-04.component";
import { Ejercicio05Component } from "./ejercicio-05/ejercicio-05.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio01Component, Ejercicio02Component, Ejercicio03Component, Ejercicio04Component, Ejercicio05Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230297';
}
