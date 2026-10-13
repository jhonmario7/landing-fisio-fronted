import { Component, inject } from '@angular/core';
import { Seo } from '../../core/seo';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  imports: [],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  private readonly seo = inject(Seo);
  protected readonly content = SITE_CONTENT;

  constructor() {
    const { identity, seo, legal } = this.content;
    this.seo.setPageMeta({
      title: `Política de tratamiento de datos | ${identity.businessName}`,
      description: 'Política de tratamiento de datos personales conforme a la Ley 1581 de 2012.',
      canonicalUrl: `${seo.canonicalUrl}${legal.dataPolicyUrl}`,
      ogImageUrl: seo.ogImage.src,
    });
  }
}
