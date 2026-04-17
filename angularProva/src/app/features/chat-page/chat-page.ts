import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Input_ } from '../../shared/components/input/input';

@Component({
  selector: 'app-chat-page',
  imports: [Header, Input_],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage {}
