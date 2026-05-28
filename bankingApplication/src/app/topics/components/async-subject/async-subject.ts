import { Component, OnInit } from '@angular/core';
import { AsyncSubjectService } from '../../services/async-subject';

@Component({
  selector: 'app-async-subject',
  imports: [],
  templateUrl: './async-subject.html',
  styleUrl: './async-subject.scss',
})
export class AsyncSubject implements OnInit{

  constructor(
    private AsyncSubjectServiceInstance: AsyncSubjectService
  ){

  };

  ngOnInit() {
    this.AsyncSubjectServiceInstance.myAsyncSubject.subscribe((data) => {
      console.log(data, "ASYNCCCCCCCCCCCCC");
    })
  }
}
