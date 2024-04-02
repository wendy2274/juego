import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.sass']
})
export class CeldaComponent {
  @Input() palabra!: string
  @Input() letra!: string
  opcion: string = ''
  css: string = ''

  verificar(){
   if (this.opcion === this.letra){
    this.css='acierto'
   }else if (this.palabra.includes(this.opcion)) {
    this.css='present'
   }else
   this.css='absent'
  }
}
