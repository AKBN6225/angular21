import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {


  constructor(private path : Router){

  };

  ngOnInit() {
    
  };

  navigateToHome(){
    this.path.navigate([''])
  }

}
