import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  sobre = "Conteúdo em Sobre";
  mostrarDiv = true;
  consTructor() { }
  ngOnInit(): void {
  }
  mudarTexto(){
    this.sobre = "Texto alterado"
  }
}
