import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product, buildWhatsAppProductUrl } from '../catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-quick-view-modal',
  imports: [],
  host: {
    '(window:keydown.escape)': 'onEscape()',
  },
  template: `
    @if (product(); as prod) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        
        <!-- Backdrop Button to Close -->
        <button 
          type="button" 
          class="fixed inset-0 w-full h-full bg-transparent cursor-default border-0 p-0" 
          (click)="closeModal()" 
          aria-label="Cerrar modal de detalles"
        ></button>

        <!-- Modal Dialog Box -->
        <div class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-pink-100 overflow-hidden z-10 my-8">
          
          <!-- Close Button -->
          <button
            type="button"
            (click)="closeModal()"
            class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-pink-100 text-[#0A2E58] hover:text-[#E7107A] flex items-center justify-center shadow-md transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#E7107A]"
            aria-label="Cerrar ventana de detalles"
          >
            <i class="bi bi-x-lg text-sm" aria-hidden="true"></i>
          </button>

          <div class="grid grid-cols-1 sm:grid-cols-2">
            
            <!-- Left: Product Image & Badge -->
            <div class="relative aspect-square sm:aspect-auto bg-[#FAF5F7] p-6 flex items-center justify-center">
              <span class="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider bg-[#0A2E58] text-white px-2.5 py-1 rounded-md shadow-xs">
                {{ prod.badge }}
              </span>
              <img
                [src]="prod.image"
                [alt]="prod.name"
                class="w-full h-full object-contain max-h-72 drop-shadow-md rounded-2xl"
                referrerpolicy="no-referrer"
              />
            </div>

            <!-- Right: Content & Information -->
            <div class="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              
              <div class="space-y-3">
                <span class="text-xs font-bold text-[#E7107A] uppercase tracking-wider block">
                  {{ prod.brand }}
                </span>

                <h3 id="modal-product-title" class="font-serif text-xl sm:text-2xl font-bold text-[#0A2E58] leading-tight">
                  {{ prod.name }}
                </h3>

                <!-- Price -->
                <div class="flex items-baseline gap-2.5">
                  <span class="font-serif text-3xl font-bold text-[#0A2E58] tabular-nums">
                    Q{{ prod.price.toFixed(2) }}
                  </span>
                  @if (prod.originalPrice) {
                    <span class="text-sm text-slate-400 line-through tabular-nums">
                      Q{{ prod.originalPrice.toFixed(2) }}
                    </span>
                  }
                </div>

                <!-- Rating -->
                <div class="flex items-center gap-1.5 text-xs font-semibold tabular-nums">
                  <i class="bi bi-star-fill text-amber-400" aria-hidden="true"></i>
                  <span class="text-[#0A2E58]">{{ prod.rating.toFixed(1) }}</span>
                  <span class="text-slate-400 font-normal">({{ prod.reviewsCount }} valoraciones verificadas)</span>
                </div>

                <!-- Description -->
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {{ prod.fullDetails || prod.description }}
                </p>

                <!-- Fragrance Pyramid if perfume -->
                @if (prod.fragranceNotes; as notes) {
                  <div class="bg-pink-50/60 rounded-xl p-3 text-xs space-y-1.5 border border-pink-100/70">
                    <span class="font-bold text-[#0A2E58] block text-[11px] uppercase tracking-wider">Pirámide Olfativa:</span>
                    <p><strong class="text-slate-700">Salida:</strong> {{ notes.top }}</p>
                    <p><strong class="text-slate-700">Corazón:</strong> {{ notes.heart }}</p>
                    <p><strong class="text-slate-700">Fondo:</strong> {{ notes.base }}</p>
                  </div>
                }

                <!-- Clean Unboxed Specs -->
                <div class="flex flex-wrap items-center gap-2 text-xs text-slate-600 pt-1">
                  @if (prod.size) {
                    <span class="font-medium text-slate-700">{{ prod.size }}</span>
                    <span class="text-slate-300" aria-hidden="true">·</span>
                  }
                  @if (prod.stockNote) {
                    <span class="font-medium text-[#E7107A]">{{ prod.stockNote }}</span>
                    <span class="text-slate-300" aria-hidden="true">·</span>
                  }
                  <span class="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                    <i class="bi bi-patch-check-fill text-sm" aria-hidden="true"></i>
                    <span>100% Sellado de fábrica</span>
                  </span>
                </div>
              </div>

              <!-- WhatsApp Action Button -->
              <div class="pt-3 border-t border-pink-100">
                <a
                  [href]="whatsappUrl(prod)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-2 bg-[#E7107A] hover:bg-[#c80c68] text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide shadow-md transition-all"
                >
                  <i class="bi bi-whatsapp text-base" aria-hidden="true"></i>
                  <span>Pedir este producto por WhatsApp</span>
                </a>
                <p class="text-[10px] text-slate-400 text-center mt-2">
                  Te responderemos al instante con fotos del producto, código de lote y guía de envío al despachar.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    }
  `,
})
export class QuickViewModalComponent {
  product = input<Product | null>(null);
  dismiss = output<void>();

  closeModal(): void {
    this.dismiss.emit();
  }

  onEscape(): void {
    if (this.product()) {
      this.closeModal();
    }
  }

  whatsappUrl(product: Product): string {
    return buildWhatsAppProductUrl(product);
  }
}
