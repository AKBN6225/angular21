import { Component, OnInit } from '@angular/core';
import { ReplaySubjectService } from '../../services/replay-subject'; 

@Component({
  selector: 'app-replay-subject',
  imports: [],
  templateUrl: './replay-subject.html',
  styleUrl: './replay-subject.scss',
})
export class ReplaySubject implements OnInit {


  constructor(private ReplaySubjectServiceInstance : ReplaySubjectService){

  };
  

  ngOnInit(){
    this.checkReplaySubject();
  };

  checkReplaySubject(){

    this.ReplaySubjectServiceInstance.myReplaySubject.subscribe((data) => {
      console.log(data, ": Replay subject");
    });

    // below is to test replay with intervals and bufferr time based on service file

    // setTimeout(() => {
    // this.ReplaySubjectServiceInstance.myReplaySubject.subscribe((data) => {
    //   console.log(data, ": Replay subject");
    // });
    // },3000)

  }
}
