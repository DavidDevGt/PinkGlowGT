import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { buildWhatsAppGeneralUrl } from '../catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  imports: [],
  template: `
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-xs transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a href="#" class="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#E7107A] rounded-xl p-1">
          <div class="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 relative rounded-full overflow-hidden shadow-xs border border-pink-100">
            <img 
              src="/assets/social/pinkglow-official-logo.jpg" 
              alt="Pink Glow Logo Oficial" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              referrerpolicy="no-referrer"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#0A2E58]">
                PINK<span class="text-[#E7107A]">GLOW</span>
              </span>
              <img src="/assets/destello.svg" alt="Sparkle" class="w-3.5 h-3.5 animate-sparkle" referrerpolicy="no-referrer" />
            </div>
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#E7107A] uppercase -mt-1">
              Makeup • Perfume
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 font-medium text-sm text-[#0A2E58]">
          <a 
            href="#catalogo" 
            class="hover:text-[#E7107A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E7107A] hover:after:w-full after:transition-all"
          >
            Catálogo
          </a>
          <a 
            href="#garantia" 
            class="hover:text-[#E7107A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E7107A] hover:after:w-full after:transition-all"
          >
            Garantía de Originalidad
          </a>
          <a 
            href="#como-comprar" 
            class="hover:text-[#E7107A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E7107A] hover:after:w-full after:transition-all"
          >
            Cómo Comprar
          </a>
          <a 
            href="#faq" 
            class="hover:text-[#E7107A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E7107A] hover:after:w-full after:transition-all"
          >
            Preguntas Frecuentes
          </a>
        </nav>

        <!-- Right Action Button & Mobile Toggle -->
        <div class="flex items-center gap-1.5 sm:gap-3">
          <a
            [href]="whatsAppUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 sm:gap-2 bg-[#E7107A] hover:bg-[#d0096b] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#E7107A]"
            aria-label="Pedir por WhatsApp"
          >
            <i class="bi bi-whatsapp text-sm sm:text-base" aria-hidden="true"></i>
            <span><span class="hidden sm:inline">Pedir por </span>WhatsApp</span>
          </a>

          <!-- Mobile Menu Button -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            class="md:hidden w-10 h-10 flex items-center justify-center text-[#0A2E58] hover:text-[#E7107A] hover:bg-pink-50 rounded-xl transition-colors focus:outline-hidden cursor-pointer"
            aria-label="Abrir menú de navegación"
            [attr.aria-expanded]="mobileMenuOpen()"
          >
            <i [class]="mobileMenuOpen() ? 'bi bi-x-lg text-lg' : 'bi bi-list text-2xl'" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden border-t border-pink-100 bg-white px-4 py-5 shadow-xl space-y-3">
          <a
            href="#catalogo"
            (click)="closeMobileMenu()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-[#0A2E58] hover:bg-pink-50 hover:text-[#E7107A] transition-colors"
          >
            <i class="bi bi-grid text-[#E7107A]" aria-hidden="true"></i>
            <span>Catálogo Interactivo</span>
          </a>
          <a
            href="#garantia"
            (click)="closeMobileMenu()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-[#0A2E58] hover:bg-pink-50 hover:text-[#E7107A] transition-colors"
          >
            <i class="bi bi-patch-check text-[#E7107A]" aria-hidden="true"></i>
            <span>Garantía de Originalidad</span>
          </a>
          <a
            href="#como-comprar"
            (click)="closeMobileMenu()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-[#0A2E58] hover:bg-pink-50 hover:text-[#E7107A] transition-colors"
          >
            <i class="bi bi-truck text-[#E7107A]" aria-hidden="true"></i>
            <span>Cómo Comprar (Paso a Paso)</span>
          </a>
          <a
            href="#faq"
            (click)="closeMobileMenu()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-[#0A2E58] hover:bg-pink-50 hover:text-[#E7107A] transition-colors"
          >
            <i class="bi bi-question-circle text-[#E7107A]" aria-hidden="true"></i>
            <span>Preguntas Frecuentes</span>
          </a>
          <div class="pt-2">
            <a
              [href]="whatsAppUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-semibold shadow-md"
            >
              <i class="bi bi-whatsapp text-base" aria-hidden="true"></i>
              <span>Chatear con una asesora</span>
            </a>
          </div>
        </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);
  whatsAppUrl = buildWhatsAppGeneralUrl('Consulta general desde el menú');

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
