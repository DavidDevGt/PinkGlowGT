import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { buildWhatsAppGeneralUrl } from '../catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-whatsapp-float',
  imports: [],
  template: `
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      <!-- Speech Bubble with Glowie Mascot -->
      @if (tooltipVisible()) {
        <div class="bg-white rounded-2xl shadow-xl border border-pink-200 p-3 max-w-xs flex items-center gap-3 animate-float transition-all">
          <div class="w-10 h-10 shrink-0">
            <img 
              src="/assets/glowie.svg" 
              alt="Glowie" 
              class="w-full h-full object-contain"
              referrerpolicy="no-referrer"
            />
          </div>
          <div class="flex-1">
            <p class="text-xs font-bold text-[#0A2E58]">¿Te ayudamos a elegir?</p>
            <p class="text-[11px] text-slate-500">¡Fotos del producto y guía de envío!</p>
          </div>
          <button
            type="button"
            (click)="dismissTooltip()"
            class="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            aria-label="Cerrar mensaje"
          >
            <i class="bi bi-x-lg text-xs" aria-hidden="true"></i>
          </button>
        </div>
      }

      <!-- Main WhatsApp Floating Action Button -->
      <a
        [href]="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
        aria-label="Contactar a Pink Glow por WhatsApp"
      >
        <i class="bi bi-whatsapp text-2xl leading-none" aria-hidden="true"></i>
        <span class="font-bold text-sm tracking-wide hidden sm:inline whitespace-nowrap">Pide por WhatsApp</span>
      </a>
    </div>
  `,
})
export class WhatsappFloatComponent {
  tooltipVisible = signal(true);
  whatsappUrl = buildWhatsAppGeneralUrl('¡Hola Pink Glow! ✨ Me gustaría hacer un pedido o consulta desde la página web');

  dismissTooltip(): void {
    this.tooltipVisible.set(false);
  }
}
