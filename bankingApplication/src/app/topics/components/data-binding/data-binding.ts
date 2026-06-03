import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding implements OnInit{

  dataBindingTopics: any = ['1.one way data binding', '2.two way data binding']
  oneWayDataBindingTopics: any = ['. stringInterpolation', '. propertyBinding', '. classBinding', '. styleBinding', '. eventBinding'];

  name : any = 'Arun';
  imagePath : any = 'assets/images/DSC_5295.JPG';

  val: any = 10;

  isDisabled: boolean = true;

  isActive: boolean = true;

  applyC1: boolean = true;
  applyC2: boolean = true;

  hasError: boolean = true;
  cvar: string = "blue";

  myStyle: object = {
    color: 'red',
    background: 'yellow'
  };

  userName: string = "";
  city: string = "Hyderabad"


  constructor(){

  };

  ngOnInit(){
    this.stringInterpolattion();
    this.propertyBindingggg();
    this.classBindingggg();
  };

  stringInterpolattion(){
    // stringInterolation: data flows from ts file to html file
    // stringInterpolation we can bind to a variable with double curly braces {{}} to a variable
    // we can also bind to a function and we can bind the value returened from the function
    // string interpolation we can also bind image path to a variable and then that variabke can also be binded
    // it will convert data to string and then binds

    let a = 6;
    let b = 6;
    return a+b;

  };

  propertyBindingggg(){
    // imag tag - src, input tag - value, button - disabled all are properties
  };

  classBindingggg(){

  };

  checkName(e: any){
    this.userName = e.target.value;
  };

  makeCaps(){
    this.city = this.city.toUpperCase();
  }





















  


}
