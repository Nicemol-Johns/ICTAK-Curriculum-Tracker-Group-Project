import { Component } from '@angular/core';
import { Message } from 'src/assets/Message.model';

import { FormsModule } from '@angular/forms';
import { ChatServiceService } from '../../../chat-service.service';


@Component({
  selector: 'app-faculty-chat',
  templateUrl: './faculty-chat.component.html',
  styleUrls: ['./faculty-chat.component.css']
})
export class FacultyChatComponent {

    //------------------------------------------------
   message = ''
   messages:Message[] = [];
  // receivedMessages:String[] = [];
    //------------------------------------------------

  constructor(private chats:ChatServiceService){

  }

  ngOnInit() {
    //------------------------------------------------
    // this.receivedMessages = this.chats.getAdminMessages();
    //------------------------------------------------
    this.messages = this.chats.getMessage();
  }

  formatTimestamp(date:Date){
    return date.toUTCString()
  }

  onSubmit(){
    //------------------------------------------------
  //   console.log(this.message);
  //   this.messages.push(this.message)
  //   this.message='';
 //------------------------------------------------

  const newMessage: Message = {
    sender: 'Faculty', // or use a user ID if available
    content: this.message,
    timestamp: new Date(),
  };

  this.chats.addMessage(newMessage);
  this.message = ''; 
   }

   isSentMessage(sender:any):boolean{
    if(sender == "Faculty"){
      return true;
    }
    else{
      return false;
    }

  }
   

}
