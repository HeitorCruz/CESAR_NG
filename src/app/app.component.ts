import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  http = new XMLHttpRequest();
  dadoExterno= {data:[{nome:"Empty",idade:"Empty"}]};
  title = 'Tour of Heroes';
  cidade = "Barreiras"
  main = "Main"
  showTopSearch=false;
  topSearch(){
    this.showTopSearch=!this.showTopSearch;
  }
  get(){
    this.http.open("get","http://localhost:4201");
    this.http.send();
    this.http.responseType = "json";
    setTimeout (()=>(this.dadoExterno = this.http.response), 3000);
    console.log();
  }
}
