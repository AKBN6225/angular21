import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives implements OnInit {

  directiveTypes: any = ['structural', 'attribute', 'component'];
  structuralDirectives: any = ['ngIf', 'ngFor', 'ngSwitch'];
  attributeDirectives: any = ['ngClass', 'ngStyle', 'ngModel'];

  show: boolean = true;
  fruits: Array<string> = ['apple','banana','citrus'];

  operation: any = "*";
  num1: any = 12;
  num2: any = 6;


  constructor(){

  };

  ngOnInit(){
    
  };

  trackByIndex(i: any){
    return i;
  }


}
