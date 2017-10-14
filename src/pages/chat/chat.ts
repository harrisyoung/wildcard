import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ChatModel } from '../../model/chat.interface'
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chatList = {} as ChatModel;
  chatListRef$: AngularFireList<ChatModel[]>;
  listChat: Observable<ChatModel[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.chatList.username = this.navParams.get('username');
    
    this.listChat = this.database.list('chat-list').valueChanges();

    this.chatListRef$ = this.database.list('chat-list');
  }

  sendMessage(chatList) {
    this.chatListRef$.push(chatList);
    this.chatList.message = "";
  }

}
