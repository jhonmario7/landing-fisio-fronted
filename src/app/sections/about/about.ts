import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Credential } from '../../data/site-content.model';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { CredentialBadge } from '../../shared/ui/credential-badge/credential-badge';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [NgOptimizedImage, CredentialBadge, SectionHeader, RevealOnScroll],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly content = SITE_CONTENT;

  protected readonly allCredentials: Credential[] = [
    ...this.content.credentials.education,
    ...this.content.credentials.specializations,
  ];
}
