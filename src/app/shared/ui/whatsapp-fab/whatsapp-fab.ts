import { Component, computed, input } from '@angular/core';
import { buildWhatsAppUrl } from '../../../core/whatsapp-link.util';
import { Icon } from '../icon/icon';

@Component({
  imports: [Icon],
  selector: 'app-whatsapp-fab',
  styleUrl: './whatsapp-fab.scss',
  templateUrl: './whatsapp-fab.html',
})
export class WhatsappFab {
  readonly phoneE164 = input.required<string>();
  readonly message = input('Hola Yuli, quisiera agendar una cita.');

  readonly href = computed(() => buildWhatsAppUrl(this.phoneE164(), this.message()));
}
