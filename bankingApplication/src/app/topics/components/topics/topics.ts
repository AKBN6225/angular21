import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  imports: [],
  templateUrl: './topics.html',
  styleUrl: './topics.scss',
})
export class Topics implements OnInit{

  topics = ['promises', 'observables','signals'];
  codingTopics = ['for', 'forEach', 'for-of', 'for-in'];
  
  constructor(private path : Router){

  };

  ngOnInit(): void {
    
  };

  onTopicClick(event: any){
    this.path.navigate([`/${event}`])
  };

  onCodingTopicClick(event: any){
    alert(event);
  }
}
