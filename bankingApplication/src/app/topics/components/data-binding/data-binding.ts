import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding implements OnInit{

  dataBindingTopics: any = ['1.one way data binding', '2.two way data binding']
  oneWayDataBindingTopics: any = ['. stringInterpolation', '. propertyBinding', '. classBinding', '. styleBinding', '. eventBinding'];

  name : any = 'Arun';
  imagePath : any = 'assets/images/DSC_5295.JPG';

  val: any = 10;

  isDisabled: boolean = true


  constructor(){

  };

  ngOnInit(){
    this.stringInterpolattion();
    this.attributeBinding();
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

  attributeBinding(){

  }





















  


}
