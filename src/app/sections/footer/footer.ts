import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  imports: [Icon],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly content = SITE_CONTENT;
  protected readonly year = new Date().getFullYear();
}
