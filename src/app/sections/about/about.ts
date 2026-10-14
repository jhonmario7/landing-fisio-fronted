import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Credential } from '../../data/site-content.model';
import { SITE_CONTENT } from '../../data/site-content';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

// Años en orden; 'En curso' después de todos; sin año al final.
const yearRank = (c: Credential): number =>
  !c.year ? Infinity : /^\d{4}$/.test(c.year) ? Number(c.year) : 9999;

@Component({
  imports: [NgOptimizedImage, Icon, SectionHeader, RevealOnScroll],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly content = SITE_CONTENT;

  // Agrupa por año (ya ordenado) para no repetir '2023' dos veces en la línea.
  protected readonly timeline = [
    ...this.content.credentials.education,
    ...this.content.credentials.specializations,
  ]
    .sort((a, b) => yearRank(a) - yearRank(b))
    .reduce<{ year: string; items: Credential[] }[]>((groups, item) => {
      const year = item.year ?? 'Complementario';
      const last = groups.at(-1);
      if (last?.year === year) last.items.push(item);
      else groups.push({ year, items: [item] });
      return groups;
    }, []);

}
