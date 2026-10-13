import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OperatingHoursRange } from '../../data/site-content.model';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Button } from '../../shared/ui/button/button';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

const DAY_LABELS: Record<OperatingHoursRange['day'], string> = {
  mon: 'Lunes',
  tue: 'Martes',
  wed: 'Miércoles',
  thu: 'Jueves',
  fri: 'Viernes',
  sat: 'Sábado',
  sun: 'Domingo',
};

@Component({
  imports: [Button, SectionHeader, RevealOnScroll],
  selector: 'app-location',
  styleUrl: './location.scss',
  templateUrl: './location.html',
})
export class Location {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly content = SITE_CONTENT;

  protected readonly mapEmbedUrl: SafeResourceUrl | null = this.content.operation.location
    .googleMapsEmbedUrl.startsWith('https://')
    ? this.sanitizer.bypassSecurityTrustResourceUrl(
        this.content.operation.location.googleMapsEmbedUrl,
      )
    : null;

  protected readonly hasDirectionsUrl = this.content.operation.location.googleMapsDirectionsUrl
    .startsWith('https://');

  dayLabel(day: OperatingHoursRange['day']): string {
    return DAY_LABELS[day];
  }

  formatHours(range: OperatingHoursRange): string {
    if (!range.opens || !range.closes) {
      return 'Cerrado';
    }
    return `${range.opens} - ${range.closes}`;
  }
}
