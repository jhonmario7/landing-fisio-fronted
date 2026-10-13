import { Component, signal } from '@angular/core';
import { FormField, form, minLength, pattern, required } from '@angular/forms/signals';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';

interface ContactFormModel {
  name: string;
  phone: string;
  reason: string;
  dataConsent: boolean;
}

@Component({
  imports: [FormField, Button],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly content = SITE_CONTENT;
  protected readonly sent = signal(false);

  private readonly model = signal<ContactFormModel>({
    name: '',
    phone: '',
    reason: '',
    dataConsent: false,
  });

  protected readonly contactForm = form(this.model, (f) => {
    required(f.name, { message: 'Ingresa tu nombre.' });
    minLength(f.name, 2, { message: 'El nombre es muy corto.' });

    required(f.phone, { message: 'Ingresa tu número de teléfono.' });
    pattern(f.phone, /^\+?[0-9\s-]{7,15}$/, { message: 'Ingresa un teléfono válido.' });

    required(f.reason, { message: 'Cuéntanos brevemente el motivo de tu consulta.' });
    minLength(f.reason, 10, { message: 'Cuéntanos un poco más (mínimo 10 caracteres).' });

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

    const { name, phone, reason } = this.model();
    const message = [
      `Hola, soy ${name}.`,
      `Teléfono: ${phone}.`,
      `Motivo de consulta: ${reason}.`,
    ].join(' ');

    const url = buildWhatsAppUrl(this.content.social.whatsappPhoneE164, message);
    window.open(url, '_blank', 'noopener');
    this.sent.set(true);
  }
}
