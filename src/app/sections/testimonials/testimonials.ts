import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [SectionHeader, RevealOnScroll],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  protected readonly content = SITE_CONTENT;
}
