import { Component } from '@angular/core';
import { ChatServiceService } from 'src/app/chat-service.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  constructor(private chats:ChatServiceService){}

  // backup(){
  //   console.log("button clicked")
  //   this.chats.backUpChats()
  // }

}
