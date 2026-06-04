import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  imports: [],
  templateUrl: './topics.html',
  styleUrl: './topics.scss',
})
export class Topics implements OnInit{

  topics = ['promises', 'observables','routing','signals','dataBinding','directives','pipes','templateRefVar','asyncPipe'];
  codingTopics = ['for', 'forEach', 'for-of', 'for-in'];
  angularLatestTopics = ['controlFlow','ngTemplate:ngContent:ngContainer']
  
  constructor(private path : Router){

  };

  ngOnInit(): void {
    this.randomTopicsBraning();
  };

  onTopicClick(event: any){
    this.path.navigate([`/${event}`])
  };

  onCodingTopicClick(event: any){
    alert(event);
  };

  randomTopicsBraning(){

  };

  
}
