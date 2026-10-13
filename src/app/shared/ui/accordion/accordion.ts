import { Component, input, signal } from '@angular/core';
import { FaqItem } from '../../../data/site-content.model';
import { Icon } from '../icon/icon';

@Component({
  imports: [Icon],
  selector: 'app-accordion',
  styleUrl: './accordion.scss',
  templateUrl: './accordion.html',
})
export class Accordion {
  readonly items = input.required<FaqItem[]>();

  private readonly openId = signal<string | null>(null);

  isOpen(id: string): boolean {
    return this.openId() === id;
  }

  toggle(id: string): void {
    this.openId.set(this.isOpen(id) ? null : id);
  }
}
