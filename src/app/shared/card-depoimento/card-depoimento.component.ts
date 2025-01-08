import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
  depoimento: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus, eos corrupti dolore obcaecati ab quaerat quos 
                pariatur suscipit optio adipisci iusto rem, architecto et dolorum. 
                Facilis corporis eum laboriosam illum.`;
  autor: string = `Yann` ;
}
