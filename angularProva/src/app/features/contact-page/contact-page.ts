import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { ContactButton } from './components/contact-button/contact-button';

@Component({
  selector: 'app-contact-page',
  imports: [Header, ContactButton],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {}
