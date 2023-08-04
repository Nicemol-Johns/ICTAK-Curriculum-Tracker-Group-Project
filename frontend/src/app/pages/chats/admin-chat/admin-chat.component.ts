import { Component } from '@angular/core';
import { Message } from 'src/assets/Message.model';

import { FormsModule } from '@angular/forms';
import { ChatServiceService } from '../../../chat-service.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.css']
})
export class AdminChatComponent {

    //------------------------------------------------
   message = ''
   messages:Message[] = [];
  // receivedMessages:String[] = [];
    //------------------------------------------------


  constructor(private chats:ChatServiceService){}

  ngOnInit() {
    //------------------------------------------------
    // this.receivedMessages = this.chats.getAdminMessages();
    //------------------------------------------------
   this.messages =  this.chats.getMessage();
  }

  formatTimestamp(date:Date){
    return date.toUTCString()
  }

  onSubmit2(){
    //------------------------------------------------
    // console.log(this.message);
    // this.messages.push(this.message)
    // this.chats.setAdminMessages(this.message)
    // this.message='';
    //------------------------------------------------
    const newMessage:Message ={
      sender:'Admin',
      content: this.message,
      timestamp: new Date(),
    }
    this.chats.addMessage(newMessage);
    this.message = ''; 
  }

  isSentMessage(sender:any):boolean{
    if(sender == "Admin"){
      return true;
    }
    else{
      return false;
    }

  }


}
