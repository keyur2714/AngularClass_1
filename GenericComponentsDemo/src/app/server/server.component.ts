import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Server } from './server.model';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @ViewChild("serverName")
  serverName: ElementRef;

  @Output('getServer')
  getServerEvent = new EventEmitter<Server>();

  constructor() {     
  }

  ngOnInit() {
  }

  addNewServer(serverOS){
    console.log(this.serverName);
    let serverName = this.serverName.nativeElement.value;  
    console.log(serverName+" "+serverOS);
    let temServer = new Server();
    temServer.serverName = serverName;
    temServer.serverOs = serverOS;
    //this.getServerEvent.emit({"serverName":serverName,"serverOs":serverOS});
    this.getServerEvent.emit(temServer);
  }


}
