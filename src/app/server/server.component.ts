import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus: string = 'offline';
  serverName = 'Server';
  serverID: number = 123;

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'grey' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
