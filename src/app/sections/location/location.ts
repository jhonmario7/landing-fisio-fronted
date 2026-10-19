import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { OperatingHoursRange } from '../../data/site-content.model';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';
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
  imports: [Button, Icon, SectionHeader, RevealOnScroll],
  selector: 'app-location',
  styleUrl: './location.scss',
  templateUrl: './location.html',
})
export class Location {
  protected readonly content = SITE_CONTENT;
  protected readonly location = this.content.operation.location;
  protected readonly homeVisits = this.content.operation.modalities.includes('home_visit');

  protected readonly whatsappHref = buildWhatsAppUrl(
    this.content.social.whatsappPhoneE164,
    'Hola Yuli, quiero agendar una cita en tu consultorio.',
  );

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
