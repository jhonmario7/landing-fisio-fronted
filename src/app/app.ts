import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SITE_CONTENT } from './data/site-content';
import { WhatsappFab } from './shared/ui/whatsapp-fab/whatsapp-fab';

@Component({
  imports: [RouterOutlet, WhatsappFab],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly whatsappPhone = SITE_CONTENT.social.whatsappPhoneE164;
}
