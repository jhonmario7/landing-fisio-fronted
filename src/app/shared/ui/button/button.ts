import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'md' | 'sm';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly href = input<string | null>(null);
  readonly disabled = input(false);
  readonly type = input<'button' | 'submit'>('button');
  readonly ariaLabel = input<string | null>(null);
  readonly target = input<'_self' | '_blank'>('_self');
}
