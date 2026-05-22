import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.html',
  styleUrl: './promises.scss',
})
export class Promises implements OnInit{

  promisesTopics = ["async,await", ".then", "promise.all","promise.allSetteld", "promise.race", "promise.async"]


  constructor(){

  };

  ngOnInit() {
    
  };
  
}
