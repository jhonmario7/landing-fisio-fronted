import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [NgOptimizedImage, SectionHeader, RevealOnScroll],
  selector: 'app-space',
  styleUrl: './space.scss',
  templateUrl: './space.html',
})
export class Space {
  protected readonly photos = SITE_CONTENT.operation.location.photos;
}
