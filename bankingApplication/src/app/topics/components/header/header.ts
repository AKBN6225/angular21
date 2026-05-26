import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleSubjectService } from '../../services/simple-subject';
import { BehaviouralSubjectService } from '../../services/behavioural-subject';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {


  constructor(
    private path : Router,
    private SimpleSubjectInstance: SimpleSubjectService,
    private BehaviouralSubjectServiceInstance: BehaviouralSubjectService
  ){

  };

  ngOnInit() {
    console.log("Inside Header component");
    this.SimpleSubjectInstance.mySubject.subscribe((data) => {
      console.log(data);
    });

    // the the initial array data is printing as because we are re sending the data in subject component in line 26
    // the new array with added value 5 also we are getting as we are push there in the subject component and mean while we have subscribed the same subject here also we are able to get new values here also

    this.checkingBehaviourSubject();
  };


  checkingBehaviourSubject(){
    this.BehaviouralSubjectServiceInstance.myBehaviourSubject.subscribe((data) => {
      console.log("Initial BEHAVIOUR Subject in Header component: ",data); 
    })
  }

  navigateToHome(){
    this.path.navigate([''])
  }

}
