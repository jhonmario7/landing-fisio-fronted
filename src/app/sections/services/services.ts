import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

const ACCENT_CLASSES = ['is-primary', 'is-accent'] as const;

@Component({
  imports: [NgOptimizedImage, Button, Icon, SectionHeader, RevealOnScroll],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {
  protected readonly content = SITE_CONTENT;

  protected readonly whatsappHref = buildWhatsAppUrl(
    this.content.social.whatsappPhoneE164,
    'Hola, quiero información sobre sus servicios de fisioterapia.',
  );

  accentClass(index: number): string {
    return ACCENT_CLASSES[index % ACCENT_CLASSES.length];
  }
}
