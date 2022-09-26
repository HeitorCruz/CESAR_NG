import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { send } from 'process';
import { Serializer } from 'v8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  http = new XMLHttpRequest();
  dadoExterno= {data:[{summary:"empty"}]};
  title = 'Tour of Heroes';
  cidade = "Barreiras"
  main = "Main"
  data = {
    nome: "",
    idade: ""

  };
  showTopSearch=false;
  topSearch(){
    this.showTopSearch=!this.showTopSearch;
  }
  get(){
    this.http.open("get","https://dotnetapiproject.azurewebsites.net/WeatherForecast");
    this.http.send();
    this.http.responseType = "text";
    setTimeout (()=>(this.dadoExterno.data = this.http.response), 3000);
    console.log();
  }
  // post(){
  //   this.http.open("POST","http://localhost:4201/post");
  //   this.http.send(JSON.stringify(this.data));
  // }
}
