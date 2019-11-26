import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './utils/websocket.service';
import { Subscription } from 'rxjs';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [WebsocketService]
})
export class AppComponent{
protected wsSubscription: Subscription;
isCollapsed = false;
public serverTime: string;
public activeCount: number;

constructor(protected wsService: WebsocketService) { }

  ngOnInit(): void {
    console.log("Attempt to init ws connection")
    console.log(location.host);
    this.wsSubscription = this.wsService.initSocket("ws://" + location.host + "/rest").subscribe(
      message => {
        let parsedMessage = JSON.parse(message.data);
        if (parsedMessage.time) {
          this.serverTime = parsedMessage.time;
        }
        if(parsedMessage.active_campaigns) {
          this.activeCount = parsedMessage.active_campaigns;
        }
      });
  }

}
