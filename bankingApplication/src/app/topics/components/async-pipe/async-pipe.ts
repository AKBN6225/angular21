import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-async-pipe',
  imports: [CommonModule],
  templateUrl: './async-pipe.html',
  styleUrl: './async-pipe.scss',
})
export class AsyncPipe implements OnInit {

  users!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.callingUsersApi();
  }

  callingUsersApi(): void {
    this.users = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }



}
