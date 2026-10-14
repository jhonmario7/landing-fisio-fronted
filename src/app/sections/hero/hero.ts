import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  imports: [Button, Icon, NgOptimizedImage],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly content = SITE_CONTENT;

  protected readonly whatsappHref = buildWhatsAppUrl(
    this.content.social.whatsappPhoneE164,
    'Hola, quisiera agendar una valoración.',
  );

  protected readonly eyebrow = `Fisioterapia integral · ${this.content.operation.location.city}`;
}
