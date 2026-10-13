import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Icon, IconName } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

const KNOWN_ICONS = new Set<IconName>([
  'activity',
  'target',
  'hand',
  'droplet',
  'home',
  'shield-check',
  'clock',
]);

const ACCENT_CLASSES = ['is-primary', 'is-accent'] as const;

@Component({
  imports: [Icon, SectionHeader, RevealOnScroll],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {
  protected readonly content = SITE_CONTENT;

  resolveIcon(name: string): IconName {
    return KNOWN_ICONS.has(name as IconName) ? (name as IconName) : 'activity';
  }

  accentClass(index: number): string {
    return ACCENT_CLASSES[index % ACCENT_CLASSES.length];
  }
}
