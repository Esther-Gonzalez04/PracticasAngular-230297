import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  imports: [],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component {
  operatingSystems=
  [
    {id: 'win', name: 'Windows'},
    {id: 'mac', name: 'MacOs'},
    {id: 'lin', name: 'Linux'}
  ];
  users = [{
    id: 1, name: 'Esther'},
    {id:2, name: 'Jose'},
    {id:3, name: 'Luis'},
    {id:4, name: 'Maria'},
    {id:5, name: 'Ana'},
  ]}
