import { Component, OnInit } from '@angular/core';
import { CasillasComponent } from 'src/app/component/casillas/casillas.component';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit{
  palabra!: string
    palabras = [
    'campo',
    'circo',
    'barco',
    'avion',
    'sexto',
    'lunes',
    'hielo',
    'deber'
  ]
 letras: any[] = []
  constructor(){}
 ngOnInit(): void {
    let random = 0
    do {
      random = Math.round(Math.random()*this.palabras.length)
    } while(!this.palabras[random])
    console.log(this.palabras[random])
    this.palabra = this.palabras[random]
    this.letras = this.palabras[random].split('')
    console.log(this.letras)
    }
}
