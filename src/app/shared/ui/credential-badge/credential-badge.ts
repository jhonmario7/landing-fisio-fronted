import { Component, input } from '@angular/core';
import { Credential } from '../../../data/site-content.model';
import { Icon } from '../icon/icon';

@Component({
  imports: [Icon],
  selector: 'app-credential-badge',
  styleUrl: './credential-badge.scss',
  templateUrl: './credential-badge.html',
})
export class CredentialBadge {
  readonly credential = input.required<Credential>();
}
