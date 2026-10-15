import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Button } from '../../shared/ui/button/button';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [NgOptimizedImage, Button, SectionHeader, RevealOnScroll],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  protected readonly content = SITE_CONTENT;

  protected readonly reviewRequestHref = buildWhatsAppUrl(
    this.content.social.whatsappPhoneE164,
    'Hola, acabo de terminar mi valoración y quiero compartir mi experiencia.\n\n' +
      'Mi calificación: ⭐⭐⭐⭐⭐\n' +
      'Mi reseña: ',
  );
}
