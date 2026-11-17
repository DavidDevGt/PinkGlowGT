import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TopBarComponent } from './components/top-bar';
import { HeaderComponent } from './components/header';
import { HeroComponent } from './components/hero';
import { TrustBadgesComponent } from './components/trust-badges';
import { CatalogComponent } from './components/catalog';
import { TransparencyComponent } from './components/transparency';
import { HowToOrderComponent } from './components/how-to-order';
import { FaqComponent } from './components/faq';
import { FooterComponent } from './components/footer';
import { WhatsappFloatComponent } from './components/whatsapp-float';
import { QuickViewModalComponent } from './components/quick-view-modal';
import { Product } from './catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    TopBarComponent,
    HeaderComponent,
    HeroComponent,
    TrustBadgesComponent,
    CatalogComponent,
    TransparencyComponent,
    HowToOrderComponent,
    FaqComponent,
    FooterComponent,
    WhatsappFloatComponent,
    QuickViewModalComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedProduct = signal<Product | null>(null);

  onProductSelected(product: Product): void {
    this.selectedProduct.set(product);
  }

  closeModal(): void {
    this.selectedProduct.set(null);
  }
}
