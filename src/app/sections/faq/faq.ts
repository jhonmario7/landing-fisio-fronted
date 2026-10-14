import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Accordion } from '../../shared/ui/accordion/accordion';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [Accordion, SectionHeader, RevealOnScroll],
  selector: 'app-faq',
  styleUrl: './faq.scss',
  templateUrl: './faq.html',
})
export class Faq {
  protected readonly content = SITE_CONTENT;

  private readonly half = Math.ceil(this.content.faq.length / 2);
  protected readonly left = this.content.faq.slice(0, this.half);
  protected readonly right = this.content.faq.slice(this.half);
}
