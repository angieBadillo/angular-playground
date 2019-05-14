import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created';
serverName = '';
serverCreated = false;
servers = ['testserver', 'testserver 2']
userName = '';

showSecret = false;
log = [];

onToggleDetails() {
  this.showSecret = !this.showSecret;
  this.log.push(new Date());
}

  constructor() { setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created. Server name is ' + this.serverName;

  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  }


