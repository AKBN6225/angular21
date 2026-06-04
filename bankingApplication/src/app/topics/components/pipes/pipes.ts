import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RemoveZeroAtFirstPipe } from '../../customPipes/remove-zero-at-first-pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pipes',
  imports: [CommonModule,RemoveZeroAtFirstPipe, FormsModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes implements OnInit {

  builtInPipes: Array<string> = ['currency pipe','date pipe','decimal pipe', 'json pipe', 'lower case pipe', 'upper case pipe','title case', 'percent pipi', 'slice pipe', 'async pipe'];

  text1 = "arun";
  text2 = "Arun";
  text3 = "bantupalli arun kumar";
  salary = 100000;
  person = {
    name: 'Arun',
    age: 32,
    sex: 'M'
  };
  todayDate = new Date();
  marksPercent = 0.98;
  companyName = "Google"

  mobileNumber = "9999";

  constructor(){

  };

  ngOnInit(){
    // async pipe is used to subscribe asynchronus data and it it will automatically unsubscribes when it is done
  };

}
