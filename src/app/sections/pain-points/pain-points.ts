import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  imports: [Button, Icon, RevealOnScroll],
  selector: 'app-pain-points',
  styleUrl: './pain-points.scss',
  templateUrl: './pain-points.html',
})
export class PainPoints {
  protected readonly content = SITE_CONTENT;

  protected readonly whatsappHref = buildWhatsAppUrl(
    this.content.social.whatsappPhoneE164,
    'Hola, no quiero esperar a que empeore. Quisiera agendar una valoración.',
  );
}
