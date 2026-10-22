import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

// A partir de este largo el texto se recorta a 5 líneas con "Leer más".
const LONG_REVIEW_CHARS = 180;

@Component({
  imports: [NgOptimizedImage, NgTemplateOutlet, Button, Icon, SectionHeader, RevealOnScroll],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  protected readonly content = SITE_CONTENT;
  protected readonly google = SITE_CONTENT.social.google;
  // Las de Google son públicas; las directas solo con autorización escrita.
  protected readonly reviews = SITE_CONTENT.testimonials.filter(
    (t) => t.source === 'google' || t.authorizedInWriting,
  );
  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly longReviewChars = LONG_REVIEW_CHARS;
  protected readonly expanded = signal<ReadonlySet<string>>(new Set());

  private readonly track = viewChild<ElementRef<HTMLElement>>('track');

  protected toggle(id: string): void {
    this.expanded.update((set) => {
      const next = new Set(set);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }

  protected scroll(direction: 1 | -1): void {
    const track = this.track()?.nativeElement;
    const card = track?.querySelector<HTMLElement>('.review-card');
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  }
}
