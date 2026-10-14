import { Component, signal } from '@angular/core';
import { FormField, form, maxLength, minLength, pattern, required } from '@angular/forms/signals';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { OperatingHoursRange, ServiceModality } from '../../data/site-content.model';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

interface ContactFormModel {
  name: string;
  phone: string;
  reason: string;
  modality: string;
  details: string;
  dataConsent: boolean;
}

const MODALITY_LABELS: Record<ServiceModality, string> = {
  in_office: 'Consultorio',
  home_visit: 'Domicilio',
  virtual: 'Virtual',
};

const SHORT_DAYS: Record<OperatingHoursRange['day'], string> = {
  mon: 'Lun',
  tue: 'Mar',
  wed: 'Mié',
  thu: 'Jue',
  fri: 'Vie',
  sat: 'Sáb',
  sun: 'Dom',
};

// Agrupa días consecutivos con el mismo horario: "Lun–Vie · 07:00–19:00".
function summarizeHours(hours: OperatingHoursRange[]): string[] {
  const groups: { from: string; to: string; range: string }[] = [];
  for (const h of hours) {
    if (!h.opens || !h.closes) continue;
    const range = `${h.opens}–${h.closes}`;
    const last = groups.at(-1);
    if (last?.range === range) last.to = SHORT_DAYS[h.day];
    else groups.push({ from: SHORT_DAYS[h.day], to: SHORT_DAYS[h.day], range });
  }
  return groups.map((g) => `${g.from === g.to ? g.from : `${g.from}–${g.to}`} · ${g.range}`);
}

@Component({
  imports: [FormField, Button, Icon, RevealOnScroll],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly content = SITE_CONTENT;
  protected readonly hours = summarizeHours(this.content.operation.hours);
  protected readonly modalities = this.content.operation.modalities.map((m) => MODALITY_LABELS[m]);

  /** URL de WhatsApp ya armada; no nula = se envió (muestra el estado de éxito). */
  protected readonly sentUrl = signal<string | null>(null);

  private readonly model = signal<ContactFormModel>({
    name: '',
    phone: '',
    reason: '',
    modality: '',
    details: '',
    dataConsent: false,
  });

  protected readonly contactForm = form(this.model, (f) => {
    required(f.name, { message: 'Ingresa tu nombre.' });
    minLength(f.name, 2, { message: 'El nombre es muy corto.' });

    required(f.phone, { message: 'Ingresa tu número de teléfono.' });
    pattern(f.phone, /^\+?[0-9\s-]{7,15}$/, { message: 'Ingresa un teléfono válido.' });

    required(f.reason, { message: 'Elige el motivo de tu consulta.' });
    required(f.modality, { message: 'Elige cómo prefieres tu atención.' });

    maxLength(f.details, 300, { message: 'Máximo 300 caracteres.' });

    required(f.dataConsent, {
      message: 'Debes autorizar el tratamiento de datos para continuar.',
    });
  });

  submit(event: Event): void {
    event.preventDefault();

    if (!this.contactForm().valid()) {
      this.contactForm().markAsTouched();
      return;
    }

    const { name, phone, reason, modality, details } = this.model();
    const message = [
      'Hola Yuli, quiero agendar una valoración.',
      `• Nombre: ${name}`,
      `• Teléfono: ${phone}`,
      `• Motivo: ${reason}`,
      `• Modalidad: ${modality}`,
      ...(details.trim() ? [`• Detalle: ${details.trim()}`] : []),
    ].join('\n');

    const url = buildWhatsAppUrl(this.content.social.whatsappPhoneE164, message);
    window.open(url, '_blank', 'noopener');
    this.sentUrl.set(url);
  }

  reset(): void {
    this.sentUrl.set(null);
  }
}
