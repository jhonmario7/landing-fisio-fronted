import { Component, input } from '@angular/core';

export type IconName =
  | 'whatsapp'
  | 'phone'
  | 'map-pin'
  | 'clock'
  | 'calendar'
  | 'check'
  | 'chevron-down'
  | 'shield-check'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'menu'
  | 'close'
  | 'activity'
  | 'target'
  | 'hand'
  | 'droplet'
  | 'home'
  | 'heart'
  | 'mail';

@Component({
  imports: [],
  selector: 'app-icon',
  styleUrl: './icon.scss',
  templateUrl: './icon.html',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);
}
