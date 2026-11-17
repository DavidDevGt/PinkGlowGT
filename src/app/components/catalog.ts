import { ChangeDetectionStrategy, Component, computed, signal, output } from '@angular/core';
import { CATALOG_PRODUCTS } from '../catalog/catalog.data';
import {
  buildWhatsAppGeneralUrl,
  buildWhatsAppProductUrl,
  filterProducts,
  Product,
} from '../catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-catalog',
  imports: [],
  template: `
    <section id="catalogo" class="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FFF8FA] to-white relative scroll-mt-24">
      
      <!-- Ambient Sparkles -->
      <div class="absolute top-12 right-6 w-8 h-8 opacity-40 pointer-events-none">
        <img src="/assets/destello.svg" alt="Sparkle" class="w-full h-full animate-sparkle" referrerpolicy="no-referrer" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD6E0]/60 text-[#E7107A] font-bold text-xs uppercase tracking-wider">
            <i class="bi bi-stars text-sm" aria-hidden="true"></i>
            <span>Catálogo Online Interactivo</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2E58] tracking-tight text-balance">
            Descubre Tus Favoritos Sellados
          </h2>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Selecciona el producto que más te guste y ordénalo directamente por WhatsApp. Te confirmamos existencia y te mostramos el producto real antes de enviarlo.
          </p>
        </div>

        <!-- Filter Controls Bar: Search & Tabs -->
        <div class="space-y-4 mb-10">
          
          <!-- Category Tabs -->
          <div 
            class="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 sm:gap-3 scrollbar-none"
            role="tablist"
            aria-label="Filtrar catálogo por categoría"
          >
            @for (tab of tabs; track tab.id) {
              <button
                type="button"
                role="tab"
                [attr.aria-selected]="selectedTab() === tab.id"
                aria-controls="catalog-grid"
                (click)="setTab(tab.id)"
                [class]="selectedTab() === tab.id
                  ? 'bg-[#E7107A] text-white shadow-md shadow-pink-500/20 font-bold'
                  : 'bg-white text-slate-700 hover:text-[#E7107A] hover:bg-pink-50/60 border border-slate-200 font-medium'"
                class="px-4 py-2.5 rounded-full text-xs sm:text-sm whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer flex items-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-[#E7107A] focus:ring-offset-2"
              >
                @if (tab.icon) {
                  <i [class]="'bi ' + tab.icon + ' text-sm'" aria-hidden="true"></i>
                }
                <span>{{ tab.label }}</span>
                @if (tab.badge) {
                  <span 
                    [class]="selectedTab() === tab.id ? 'bg-white text-[#E7107A]' : 'bg-[#FFD6E0] text-[#E7107A]'"
                    class="ml-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full tabular-nums"
                  >
                    {{ tab.badge }}
                  </span>
                }
              </button>
            }
          </div>

          <!-- Search Input Bar -->
          <div class="max-w-xl mx-auto flex items-center gap-3">
            <div class="relative w-full">
              <span class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <i class="bi bi-search text-sm" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                [value]="searchQuery()"
                (input)="onSearchInput($event)"
                placeholder="Buscar por marca o producto (ej. Tommy, Hollister, Halloween, Love Tint, Shellie, L'Oréal)..."
                class="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-pink-200 text-sm text-[#0A2E58] placeholder:text-slate-400 shadow-xs focus:outline-hidden focus:border-[#E7107A] focus:ring-2 focus:ring-pink-200 transition-all"
                aria-label="Buscar producto en el catálogo"
              />
              @if (searchQuery()) {
                <button
                  type="button"
                  (click)="clearSearch()"
                  class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-[#E7107A] cursor-pointer"
                  aria-label="Limpiar búsqueda"
                >
                  <i class="bi bi-x-lg text-xs" aria-hidden="true"></i>
                </button>
              }
            </div>
          </div>

          <!-- Results Count & First Batch Inventory Indicator -->
          <div class="text-center text-xs text-slate-500 font-medium space-y-1">
            <div>
              <span>Mostrando <strong class="text-[#E7107A] tabular-nums">{{ displayedProducts().length }}</strong> modelos disponibles</span>
              <span class="mx-1.5 text-pink-300" aria-hidden="true">·</span>
              <span>Primer lote: 6 perfumes, 3 tints, 3 Shellie y 3 labiales</span>
            </div>
          </div>

        </div>

        <!-- Products Grid -->
        @if (displayedProducts().length > 0) {
          <div id="catalog-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            @for (product of displayedProducts(); track product.id) {
              <article class="bg-white rounded-2xl border border-pink-100/90 shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-pink-200 transition-all duration-200 flex flex-col overflow-hidden group">
                
                <!-- Card Image Header (Clickable for Quick View) -->
                <button
                  type="button"
                  (click)="openProductModal(product)"
                  [attr.aria-label]="'Ver detalles y notas olfativas de ' + product.name"
                  class="relative w-full aspect-[4/3] bg-[#FAF5F7] overflow-hidden cursor-pointer text-left focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-[#E7107A]"
                >
                  @if (!isImageFailed(product.id)) {
                    <img
                      [src]="product.image"
                      [alt]="product.name"
                      (error)="onImageError(product.id)"
                      class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      referrerpolicy="no-referrer"
                      loading="lazy"
                    />
                  } @else {
                    <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FFF0F5] via-[#FAF5F7] to-[#FFD6E0]/40">
                      <div class="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#E7107A] mb-2">
                        <i class="bi bi-bag-heart text-xl" aria-hidden="true"></i>
                      </div>
                      <span class="text-[11px] font-bold uppercase tracking-wider text-[#E7107A]">{{ product.brand }}</span>
                      <span class="font-serif text-sm font-semibold text-[#0A2E58] mt-1 line-clamp-2">{{ product.name }}</span>
                    </div>
                  }

                  <!-- Subtle Bottom Scrim on Hover -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>

                  <!-- Single Clean Corner Tag -->
                  <span
                    [class]="getBadgeClass(product.badge)"
                    class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-xs"
                  >
                    {{ product.badge }}
                  </span>

                  <!-- Quick View Hint on Hover (Desktop) -->
                  <span class="hidden sm:inline-flex items-center gap-1.5 absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-xs text-[#0A2E58] text-[11px] font-semibold px-2.5 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                    <i class="bi bi-eye text-xs text-[#E7107A]" aria-hidden="true"></i>
                    <span>Vista rápida</span>
                  </span>
                </button>

                <!-- Product Body Details -->
                <div class="p-5 flex-1 flex flex-col justify-between gap-4">
                  
                  <div class="space-y-2">
                    <!-- Brand & Rating (Clean Unboxed Metadata) -->
                    <div class="flex items-center justify-between gap-2 text-xs">
                      <span class="font-semibold text-[#E7107A] tracking-wider uppercase text-[11px] truncate">
                        {{ product.brand }}
                      </span>
                      <div class="flex items-center gap-1 shrink-0 tabular-nums">
                        <i class="bi bi-star-fill text-amber-400 text-[11px]" aria-hidden="true"></i>
                        <span class="font-semibold text-[#0A2E58]">{{ product.rating.toFixed(1) }}</span>
                        <span class="text-slate-400 text-[11px]">({{ product.reviewsCount }})</span>
                      </div>
                    </div>

                    <!-- Clickable Title -->
                    <h3 class="font-serif text-[17px] font-bold text-[#0A2E58] group-hover:text-[#E7107A] transition-colors leading-snug line-clamp-2">
                      <button
                        type="button"
                        (click)="openProductModal(product)"
                        class="text-left hover:underline decoration-pink-300 underline-offset-2 cursor-pointer focus:outline-hidden"
                      >
                        {{ product.name }}
                      </button>
                    </h3>

                    <!-- Short Description -->
                    <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {{ product.description }}
                    </p>

                    <!-- Clean Unboxed Specs Line -->
                    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 pt-0.5">
                      @if (product.size) {
                        <span class="font-medium text-slate-700">{{ product.size }}</span>
                        <span class="text-slate-300" aria-hidden="true">·</span>
                      }
                      <span class="inline-flex items-center gap-1 text-emerald-700 font-medium">
                        <i class="bi bi-patch-check-fill text-xs" aria-hidden="true"></i>
                        <span>{{ product.stockNote || 'Original sellado' }}</span>
                      </span>
                    </div>

                    @if (product.fragranceNotes; as notes) {
                      <p class="text-[11px] text-slate-500 truncate pt-0.5">
                        <i class="bi bi-droplet-half text-[#E7107A] mr-1" aria-hidden="true"></i>
                        <span>{{ notes.top }}</span>
                      </p>
                    }
                  </div>

                  <!-- Price & Action Footer -->
                  <div class="pt-3.5 border-t border-pink-100/80 space-y-3">
                    <div class="flex items-baseline justify-between gap-2">
                      <div class="flex items-baseline gap-2">
                        <span class="font-serif text-2xl font-bold text-[#0A2E58] tabular-nums">
                          Q{{ product.price.toFixed(2) }}
                        </span>
                        @if (product.originalPrice) {
                          <span class="text-xs text-slate-400 line-through tabular-nums">
                            Q{{ product.originalPrice.toFixed(2) }}
                          </span>
                        }
                      </div>

                      @if (product.originalPrice) {
                        <span class="text-[11px] font-bold text-[#E7107A] tabular-nums whitespace-nowrap">
                          Ahorras Q{{ (product.originalPrice - product.price).toFixed(0) }}
                        </span>
                      } @else {
                        <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 whitespace-nowrap">
                          <i class="bi bi-check-circle-fill text-[11px]" aria-hidden="true"></i>
                          <span>En stock</span>
                        </span>
                      }
                    </div>

                    <!-- Primary WhatsApp CTA + Quick Details Button -->
                    <div class="flex items-center gap-2">
                      <a
                        [href]="getProductWhatsAppUrl(product)"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 inline-flex items-center justify-center gap-2 bg-[#E7107A] hover:bg-[#c80c68] text-white py-2.5 px-3.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap shadow-xs hover:shadow-md transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#E7107A] focus:ring-offset-1"
                        [attr.aria-label]="'Pedir este producto por WhatsApp: ' + product.name"
                      >
                        <i class="bi bi-whatsapp text-base" aria-hidden="true"></i>
                        <span>Pedir por WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        (click)="openProductModal(product)"
                        class="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-xl border border-pink-200 bg-white hover:bg-pink-50 hover:border-[#E7107A] text-[#0A2E58] hover:text-[#E7107A] transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#E7107A]"
                        [attr.aria-label]="'Ver detalles de ' + product.name"
                        title="Ver notas y detalles"
                      >
                        <i class="bi bi-eye text-base" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>

                </div>

              </article>
            }
          </div>
        } @else {
          <!-- Empty State -->
          <div class="text-center py-16 bg-white rounded-3xl border border-pink-100 max-w-lg mx-auto p-8 shadow-xs space-y-4">
            <div class="w-16 h-16 mx-auto rounded-full bg-pink-50 flex items-center justify-center text-[#E7107A]">
              <i class="bi bi-search text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#0A2E58]">No encontramos productos para tu búsqueda</h3>
            <p class="text-sm text-slate-500">
              ¿Buscas un perfume o cosmético específico que no está en el listado? Podemos encargártelo bajo pedido directamente para ti.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                (click)="clearSearch()"
                class="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A2E58] font-semibold text-xs transition-colors cursor-pointer"
              >
                Limpiar búsqueda y ver todos
              </button>
              <a
                [href]="customOrderUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#E7107A] text-white font-semibold text-xs shadow-sm hover:bg-[#d0096b] transition-colors"
              >
                <i class="bi bi-whatsapp text-sm" aria-hidden="true"></i>
                <span>Encargar por WhatsApp</span>
              </a>
            </div>
          </div>
        }

      </div>
    </section>
  `,
})
export class CatalogComponent {
  tabs = [
    { id: 'all', label: 'Todos', icon: 'bi-stars', badge: null },
    { id: 'perfumes', label: 'Perfumes', icon: 'bi-flower1', badge: 'Q350' },
    { id: 'tints', label: 'Tints Benefit', icon: 'bi-brush', badge: 'Q280' },
    { id: 'makeup', label: 'Rubor & Labiales', icon: 'bi-palette2', badge: 'Q100 - Q190' },
  ];

  selectedTab = signal<string>('all');
  searchQuery = signal<string>('');
  failedImages = signal<Set<string>>(new Set());
  productSelected = output<Product>();

  displayedProducts = computed(() => {
    return filterProducts(CATALOG_PRODUCTS, this.selectedTab(), this.searchQuery());
  });

  customOrderUrl = buildWhatsAppGeneralUrl(
    'Quisiera consultar si pueden encargarme un perfume o cosmético que no encontré en el catálogo'
  );

  setTab(tabId: string): void {
    this.selectedTab.set(tabId);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.selectedTab.set('all');
  }

  openProductModal(product: Product): void {
    this.productSelected.emit(product);
  }

  onImageError(productId: string): void {
    this.failedImages.update((prev) => {
      const next = new Set(prev);
      next.add(productId);
      return next;
    });
  }

  isImageFailed(productId: string): boolean {
    return this.failedImages().has(productId);
  }

  getProductWhatsAppUrl(product: Product): string {
    return buildWhatsAppProductUrl(product);
  }

  getBadgeClass(badge: Product['badge']): string {
    switch (badge) {
      case 'Original & Sellado':
        return 'bg-[#0A2E58] text-white';
      case 'Más Vendido':
        return 'bg-[#E7107A] text-white';
      case 'Piezas Limitadas':
        return 'bg-rose-700 text-white';
      case 'Edición Especial':
        return 'bg-purple-700 text-white';
      default:
        return 'bg-[#0A2E58] text-white';
    }
  }
}
