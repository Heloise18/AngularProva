import { Routes } from '@angular/router';
import { AuthPage } from './features/auth-page/auth-page';
import { ContactPage } from './features/contact-page/contact-page';
import { ChatPage } from './features/chat-page/chat-page';

export const routes: Routes = [
    {path: "", component: AuthPage},
    {path: "contact", component: ContactPage},
    {path: "chat", component: ChatPage}
];
