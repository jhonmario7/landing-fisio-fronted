import { Component, inject } from '@angular/core';
import { Seo } from '../../core/seo';
import { SITE_CONTENT } from '../../data/site-content';
import { About } from '../../sections/about/about';
// import { Contact } from '../../sections/contact/contact'; // oculto temporalmente, ver home.html
import { Faq } from '../../sections/faq/faq';
import { Footer } from '../../sections/footer/footer';
import { Header } from '../../sections/header/header';
import { Hero } from '../../sections/hero/hero';
import { Location } from '../../sections/location/location';
import { PainPoints } from '../../sections/pain-points/pain-points';
import { Services } from '../../sections/services/services';
import { Space } from '../../sections/space/space';
import { Testimonials } from '../../sections/testimonials/testimonials';

@Component({
  imports: [
    Header,
    Hero,
    PainPoints,
    Services,
    About,
    Space,
    Testimonials,
    Location,
    Faq,
    // Contact,
    Footer,
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private readonly seo = inject(Seo);
  protected readonly content = SITE_CONTENT;

  constructor() {
    const { seo } = this.content;
    this.seo.setPageMeta({
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      canonicalUrl: seo.canonicalUrl,
      ogImageUrl: seo.ogImage.src,
    });
    this.seo.setJsonLd(seo);
  }
}
