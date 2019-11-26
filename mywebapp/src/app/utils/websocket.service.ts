import { Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
public webSocket: WebSocket;

@Output()
public ready: Subject<void> = new Subject();

public initSocket(url: string): Observable<any> {
    console.log("Initiating websocket connection to ... ", url)
    this.webSocket = new WebSocket(url);
    this.webSocket.onopen = () => this.ready.next();

    return new Observable<any>(observer => {
      this.webSocket.onmessage = (event: MessageEvent) => observer.next(event);
      this.webSocket.onerror = (event: Event) => observer.error(event);
      this.webSocket.onclose = (event: CloseEvent) => observer.complete();

      // Callback invoked on unsubscribe
      return () => this.webSocket.close();
    });
  }

  public send(message: string): void {
    if (this.webSocket.readyState === WebSocket.OPEN) {
      this.webSocket.send(message);
    }
  }
}
