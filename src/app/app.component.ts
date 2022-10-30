import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'atanynbasy-front';

  // constructor(private messageService: MessageService) {}

  ngOnInit() {
    // this.messageService.getNewMessage().subscribe(msg => console.log(msg))
  }

  sendMessage() {
    // this.messageService.sendMessage('Altosh')
  }
}
