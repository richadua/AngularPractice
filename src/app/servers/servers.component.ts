import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{
  serverID: number = 123;
  allowNewServer = false;
  serverCreatedStatus = "No server was created";
  serverName = 'Demo';
  isServerCreated = false;
  servers = ['Server1', 'Server2'];
  displayText = true;
  buttonClicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }
  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = "A server was created. Name is " + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  // Exercise:

  // userName = '';
  // allowButtonClick = false;

  // resetUsername() {
  //   this.userName = '';
  // }

  toggleDisplay() {
    this.displayText = !this.displayText;
    // this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
    // console.log(this.buttonClicks);
  }
}