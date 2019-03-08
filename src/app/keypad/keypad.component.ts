import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  operant1:number = null;
  operant2:number = null;
  operator='';
  result:number = null;
  onKeyClick(type , value){
    if(type === 'number'){
      switch(this.operator)
      {
        case '':  if(this.operant1 === null){
          this.operant1 = value;
        }
        else{
        this.operant1 = this.operant1 * 10 + value;
        }
        break;

        case '+': if(this.operant2 === null){
          this.operant2 = value;
          this.result = this.operant1 + this.operant2;
        }
        else{
          this.operant2 = this.operant2 * 10 + value;
          this.result = this.operant1 + this.operant2;
        }
        break;

        case '-': if(this.operant2 === null){
          this.operant2 = value;
          this.result = this.operant1 - this.operant2;
        }
        else{
          this.operant2 = this.operant2 * 10 + value;
          this.result = this.operant1 - this.operant2;
        }
        break;

        case '*': if(this.operant2 === null){
          this.operant2 = value;
          this.result = this.operant1 * this.operant2;
        }
        else{
          this.operant2 = this.operant2 * 10 + value;
          this.result = this.operant1 * this.operant2;
        }
        break;

        case '/': if(this.operant2 === null){
          this.operant2 = value;
          this.result = this.operant1 / this.operant2;
        }
        else{
          this.operant2 = this.operant2 * 10 + value;
          this.result = this.operant1 / this.operant2;
        }
        break;

      }
    }
    else if(type === 'operator'){
      if(value === '='){
        this.operator = '';
        this.operant1 = this.result;
        this.operant2 = null;
      }
      else if(this.operator !== ''){
        this.operant1 = this.result;
        this.operant2 = null;
        this.operator = value;
      }
      else{
        switch(value){
          case '+': this.operator = '+';
          break;
          case '-': this.operator = '-';
          break;
          case '*': this.operator = '*';
          break;
          case '/': this.operator = '/';
          break;
          case '=': this.operator = '';
          break;
        }
      }
    }

    else if(type === 'delete'){
      if(this.operant2 === 0){
        this.operant2 = null;
      }
      else if( this.operant2 !== null ){
        this.operant2 = this.deleteLastDigit(this.operant2);
      }
      else if( this.operator !== '' ){
        this.operator = '';
      }
      else if(this.operant1 === 0){
        this.operant1 = null;
      }
      else{
        this.operant1 = this.deleteLastDigit(this.operant1);
      }
    }
    else if( type === 'clear' ){
      this.operant1 = null;
      this.operant2 = null; 
      this.operator = '';
      this.result = null;
    }
  }

  deleteLastDigit(number){
      var remainder = number%10;
      return (number-remainder)/10;
  }
  constructor() { }

  ngOnInit() {
  }

}
