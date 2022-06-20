import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dadoExterno="Dado em appComponent";
  title = 'Tour of Heroes';
  cidade = "Barreiras"
  main = "Main"
  showTopSearch=false;
  topSearch(){
    this.showTopSearch=!this.showTopSearch;
  }
}
