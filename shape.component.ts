import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  public counter = 0;
  public counterInInput = 0;
  public numA = 0;
  public numB = 0;
  public result:string|number='';

  constructor() { }
  ngOnInit() {
  }
  increment = ()=> this.counter++;
  decrement = ()=> this.counter--;
  bind=()=> this.counter=this.counterInInput;
  operator = () =>{}
  sum = () => {this.result = this.numA+this.numB};
  div = () => {
    if(this.numB===0){
      this.result = "non è pissibile divedere per 0"
    }else{
      this.result = this.numA/this.numB;
    }
  };
  molt = () => {this.result = this.numA*this.numB};
  sott = () => {this.result = this.numA-this.numB};
}
