import { Component, signal } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

interface NavLink {
  label: string;
  fragment: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Servicios', fragment: 'servicios' },
  { label: 'Sobre mí', fragment: 'sobre-mi' },
  { label: 'Ubicación', fragment: 'ubicacion' },
  { label: 'Preguntas frecuentes', fragment: 'faq' },
];

@Component({
  imports: [Button, Icon],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly content = SITE_CONTENT;
  protected readonly navLinks = NAV_LINKS;
  protected readonly isMenuOpen = signal(false);

  protected readonly whatsappHref = buildWhatsAppUrl(
    this.content.social.whatsappPhoneE164,
    'Hola Yuli, quisiera agendar una cita.',
  );

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
