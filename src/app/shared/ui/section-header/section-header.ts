import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-header',
  styleUrl: './section-header.scss',
  templateUrl: './section-header.html',
})
export class SectionHeader {
  readonly eyebrow = input<string | null>(null);
  readonly title = input.required<string>();
  readonly subtitle = input<string | null>(null);
  readonly align = input<'left' | 'center'>('left');
}
